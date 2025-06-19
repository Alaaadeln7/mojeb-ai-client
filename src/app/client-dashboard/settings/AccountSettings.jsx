"use client";
import AccountSettingsSkeleton from "@/components/skeletons/AccountSettingsSkeleton";
import useClient from "@/hooks/useClient";

export default function AccountSettings({ setOpenEditProfile }) {
  const { currentClient, getClientLoading } = useClient();
  if (getClientLoading) return <AccountSettingsSkeleton />;
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center px-5 my-3">
        <h1 className="font-semibold text-2xl">Account Settings</h1>
        <button
          onClick={() => {
            setOpenEditProfile(true);
          }}
          className="btn btn-primary"
        >
          Edit
        </button>
      </div>
      <div className="border border-base-300 p-5 rounded-2xl">
        <p>Email : {currentClient.email}</p>
        <p>Address : {currentClient.address}</p>
        <p>Phone Number : {currentClient.phone}</p>
      </div>
    </div>
  );
}
