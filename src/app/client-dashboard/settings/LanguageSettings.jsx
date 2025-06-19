export default function LanguageSettings() {
  return (
    <div className="bg-base-100 p-4 md:p-6 rounded-2xl shadow-sm my-4 md:my-6">
      <h1 className="font-semibold text-xl md:text-2xl mb-4 md:mb-6">
        Language & Voice Preference
      </h1>

      <div className="border border-base-300 p-4 md:p-6 rounded-2xl">
        <form className="space-y-4 md:space-y-6">
          {/* Application Language */}
          <div className="form-control">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <label className="label text-sm md:text-base capitalize">
                Application Language
              </label>
              <select className="select select-bordered w-full md:w-64">
                <option disabled selected>
                  Select your language
                </option>
                <option>English</option>
                <option>العربية</option>
              </select>
            </div>
          </div>

          {/* Voice Assistant */}
          <div className="form-control">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <label className="label text-sm md:text-base capitalize">
                Voice Assistant
              </label>
              <select className="select select-bordered w-full md:w-64">
                <option disabled selected>
                  Select voice assistant
                </option>
                <option>Male Voice</option>
                <option>Female Voice</option>
                <option>Neutral Voice</option>
              </select>
            </div>
          </div>

          {/* Default AI Voice */}
          <div className="form-control">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <label className="label text-sm md:text-base capitalize">
                Default AI Voice
              </label>
              <select className="select select-bordered w-full md:w-64">
                <option disabled selected>
                  Select AI voice
                </option>
                <option>Natural</option>
                <option>Professional</option>
                <option>Friendly</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
