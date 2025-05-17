export default function NotificationsPreference() {
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow-sm">
      <h1 className="font-bold text-2xl">Notifications Preference</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-5 space-y-3">
        <label className="label">
          <input type="checkbox" className="checkbox" />
          Email Notifications
        </label>
        <label className="label">
          <input type="checkbox" className="checkbox" />
          Plan Usage alert
        </label>
        <label className="label">
          <input type="checkbox" className="checkbox" />
          Ticket Escalation Alert
        </label>
        <label className="label">
          <input type="checkbox" className="checkbox" />
          performance Reports
        </label>
      </div>
    </div>
  );
}
