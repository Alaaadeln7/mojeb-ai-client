import { Check, Loader } from "lucide-react";

export default function SubmitButton({ isLoading, loadingText, defaultText }) {
  return (
    <button
      type="submit"
      className="btn btn-primary px-6 hover:bg-primary-focus transition-colors"
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Loader className="size-4 animate-spin" />
          {loadingText}
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Check className="size-4" />
          {defaultText}
        </span>
      )}
    </button>
  );
}
