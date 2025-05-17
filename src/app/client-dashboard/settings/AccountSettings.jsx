export default function AccountSettings() {
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center px-5 my-3">
        <h1 className="font-semibold text-2xl">Account Settings</h1>
        <button className="btn btn-primary">Edit</button>
      </div>
      <div className="border border-base-300 p-5 rounded-2xl">
        <p>Email : address</p>
        <p>contact address</p>
        <p>Phone Number : +91 987654321</p>
      </div>
    </div>
  );
}
