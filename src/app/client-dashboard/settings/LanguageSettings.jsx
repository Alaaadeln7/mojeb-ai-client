import React from "react";

export default function LanguageSettings() {
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow-sm my-5">
      <h1 className="font-semibold text-2xl my-3">
        Language & voice Preference
      </h1>
      <div className="border border-base-300 p-5 rounded-2xl">
        <div>
          <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            // }}
            className="flex flex-col gap-4"
          >
            <div className="form-control flex justify-between items-center gap-3">
              <label className="label capitalize">Application language</label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="form-control flex justify-between items-center gap-3">
              <label className="label capitalize">Voice Absence</label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="form-control flex justify-between items-center gap-3">
              <label className="label capitalize">default ai voice</label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
