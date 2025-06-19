export default function IntegrationSettings() {
  return (
    <div className="bg-base-100 p-4 md:p-6 rounded-2xl shadow-sm my-4 md:my-6">
      <h1 className="font-semibold text-xl md:text-2xl mb-4 md:mb-6">
        Integration Settings
      </h1>

      <div className="border border-base-300 p-4 md:p-6 rounded-2xl space-y-4 md:space-y-6">
        {/* Google Calendar Integration */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
          <h4 className="text-sm md:text-base font-medium w-full sm:w-auto">
            Google Calendar
          </h4>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="https://example.com"
            />
            <button className="btn btn-primary w-full sm:w-auto">
              Connect
            </button>
          </div>
        </div>

        {/* Slack Integration */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
          <h4 className="text-sm md:text-base font-medium w-full sm:w-auto">
            Slack
          </h4>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="webhook url"
            />
            <button className="btn btn-primary w-full sm:w-auto">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
