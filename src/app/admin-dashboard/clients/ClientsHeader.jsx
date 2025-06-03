"use client";
import { useCallback, useEffect, useState } from "react";
import { useSearchClientQuery } from "@/store/api/clientApiSlice";
import { useFormik } from "formik";
import { Plus, Search } from "lucide-react";
import * as yup from "yup";
import { debounce } from "lodash";

export default function ClientsHeader({ setIsModalOpen, isModalOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const {
    data: searchResults,
    isLoading: isSearching,
    error,
  } = useSearchClientQuery({ query: searchQuery });

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((query) => {
      setSearchQuery(query);
    }, 500),
    []
  );
  // Formik setup
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: yup.object({
      search: yup.string().max(100, "Search query too long"),
    }),
    onSubmit: (values) => {
      // Immediate search on submit
      setSearchQuery(values.search);
    },
  });

  // Handle search input changes
  const handleSearchChange = (e) => {
    formik.handleChange(e);
    debouncedSearch(e.target.value);
  };

  // Clean up debounce on unmount
  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return (
    <header className="space-y-4">
      {/* Title + Add Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button
          className="btn btn-primary flex items-center gap-2 w-full sm:w-auto"
          onClick={() => setIsModalOpen(!isModalOpen)}
          aria-label="Add new client"
        >
          <Plus className="size-5" />
          <span>Add New Client</span>
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:flex-row gap-4 w-full"
        >
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="flex items-center bg-base-100 rounded-md px-3 py-2 w-full shadow-sm border border-base-300 focus-within:border-primary">
              <Search className="size-5 text-gray-500" />
              <input
                type="text"
                name="search"
                placeholder="Search clients by name, email, or sector"
                className="ml-2 w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
                onChange={handleSearchChange}
                onBlur={formik.handleBlur}
                value={formik.values.search}
                aria-label="Search clients"
              />
              {(isSearching || formik.isSubmitting) && (
                <span className="loading loading-spinner loading-xs absolute right-3"></span>
              )}
            </div>
            {formik.touched.search && formik.errors.search && (
              <p className="text-error text-xs mt-1">{formik.errors.search}</p>
            )}
          </div>

          {/* Status Filter */}
          <div className="w-full md:w-64">
            <select
              className="select select-bordered w-full"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by status"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="trial">Trial</option>
            </select>
          </div>

          {/* Submit Button (hidden since we're using debounce) */}
          <button type="submit" className="hidden">
            Search
          </button>
        </form>
      </div>

      {/* Search Status Indicator */}
      {searchQuery && (
        <div className="text-sm text-gray-500">
          {isSearching
            ? "Searching..."
            : searchResults?.length > 0
            ? `Found ${searchResults.length} clients`
            : "No clients found matching your search"}
        </div>
      )}
    </header>
  );
}
