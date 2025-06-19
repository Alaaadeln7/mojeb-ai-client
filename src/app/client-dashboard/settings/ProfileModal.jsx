import { Loader, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useClient from "@/hooks/useClient";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema
const clientSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  industry: Yup.string().required("Industry is required"),
  size: Yup.string().required("Company size is required"),
  commercialRegister: Yup.string().required("Commercial register is required"),
  taxId: Yup.string().required("Tax ID is required"),
  website: Yup.string().url("Invalid URL").required("Website is required"),
  description: Yup.string().required("Description is required"),
});

export default function ProfileModal({ setOpenEditProfile }) {
  const { currentClient, handleUpdateClient, updateClientLoading } =
    useClient();

  const formik = useFormik({
    initialValues: {
      name: currentClient?.name || "",
      email: currentClient?.email || "",
      phone: currentClient?.phone || "",
      address: currentClient?.address || "",
      industry: currentClient?.industry || "",
      size: currentClient?.size || "",
      commercialRegister: currentClient?.commercialRegister || "",
      taxId: currentClient?.taxId || "",
      website: currentClient?.website || "",
      description: currentClient?.description || "",
    },
    validationSchema: clientSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await handleUpdateClient({ id: currentClient._id, clientData: values });
        setOpenEditProfile(false);
      } catch (error) {
        console.error("Error updating client:", error);
      } finally {
        setSubmitting(false);
      }
    },
    enableReinitialize: true,
  });

  if (!currentClient) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenEditProfile(false)}
      >
        <motion.div
          className="bg-base-100 rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Edit Profile</h2>
            <button
              onClick={() => setOpenEditProfile(false)}
              className="btn btn-error btn-circle text-base-300 btn-sm"
            >
              <X className="size-4" />
            </button>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="text-center">
              <p className="">
                Client ID:{" "}
                <span className="font-mono text-blue-600">
                  {currentClient?._id}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-error text-sm">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-error text-sm">
                    {formik.errors.address}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-error text-sm">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-error text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Industry</span>
                </label>
                <input
                  type="text"
                  name="industry"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.industry}
                />
                {formik.touched.industry && formik.errors.industry ? (
                  <div className="text-error text-sm">
                    {formik.errors.industry}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Company Size</span>
                </label>
                <input
                  type="text"
                  name="size"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.size}
                />
                {formik.touched.size && formik.errors.size ? (
                  <div className="text-error text-sm">{formik.errors.size}</div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Commercial Register
                  </span>
                </label>
                <input
                  type="text"
                  name="commercialRegister"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.commercialRegister}
                />
                {formik.touched.commercialRegister &&
                formik.errors.commercialRegister ? (
                  <div className="text-error text-sm">
                    {formik.errors.commercialRegister}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Tax ID</span>
                </label>
                <input
                  type="text"
                  name="taxId"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.taxId}
                />
                {formik.touched.taxId && formik.errors.taxId ? (
                  <div className="text-error text-sm">
                    {formik.errors.taxId}
                  </div>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Website</span>
                </label>
                <input
                  type="url"
                  name="website"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.website}
                />
                {formik.touched.website && formik.errors.website ? (
                  <div className="text-error text-sm">
                    {formik.errors.website}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-error text-sm">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-gray-500">
                <p>
                  Created at:{" "}
                  {new Date(currentClient.createdAt).toLocaleDateString()}
                </p>
                <p>
                  Last updated:{" "}
                  {new Date(currentClient.updatedAt).toLocaleDateString()}
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={updateClientLoading}
              >
                {updateClientLoading ? (
                  <>
                    <Loader className="animate-spin mr-2" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
