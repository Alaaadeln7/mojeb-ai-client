import { CircleAlert } from "lucide-react";

export default function FormField({ id, label, formik, isTextarea = false }) {
  const hasError = formik.touched[id] && formik.errors[id];
  const inputClasses = `focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all ${
    hasError ? (isTextarea ? "textarea-error" : "input-error") : ""
  }`;

  return (
    <div className="form-control">
      <label htmlFor={id} className="label">
        <span className="label-text font-medium text-base-content/80">
          {label}
        </span>
      </label>
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={id}
            name={id}
            className={`textarea textarea-bordered h-32 w-full textarea-lg ${inputClasses}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
          />
        ) : (
          <input
            type="text"
            id={id}
            name={id}
            className={`input input-bordered w-full input-lg ${inputClasses}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
          />
        )}
        {hasError && (
          <div className="absolute -bottom-5 left-0 text-error text-xs flex items-center gap-1">
            <CircleAlert className="size-3" />
            {formik.errors[id]}
          </div>
        )}
      </div>
    </div>
  );
}
