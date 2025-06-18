const AccountSettingsSkeleton = () => {
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow-sm animate-pulse">
      {/* Header skeleton */}
      <div className="flex justify-between items-center px-5 my-3">
        <div className="h-8 w-40 bg-base-300 rounded-md"></div>
        <div className="h-10 w-20 bg-base-300 rounded-md"></div>
      </div>

      {/* Content skeleton */}
      <div className="border border-base-300 p-5 rounded-2xl space-y-3">
        <div className="h-5 w-full bg-base-300 rounded-md"></div>
        <div className="h-5 w-3/4 bg-base-300 rounded-md"></div>
        <div className="h-5 w-2/3 bg-base-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default AccountSettingsSkeleton;
