export default function PlanCard({
  title,
  price,
  currency = "$",
  billingCycle = "/month",
  features,
  featured = false,
  buttonText = "Get Started",
  onClick = () => {},
}) {
  return (
    <div
      className={`relative rounded-xl p-6 shadow-lg w-80 transition-all 
      ${
        featured
          ? "bg-primary text-primary-content border-2 border-primary-focus transform scale-105"
          : "bg-base-100 border border-base-300"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-secondary text-secondary-content px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
          POPULAR
        </div>
      )}

      <div className="text-center mb-6">
        <h3
          className={`text-xl font-bold ${
            featured ? "text-primary-content" : "text-base-content"
          }`}
        >
          {title}
        </h3>
        <div className="mt-4">
          <span
            className={`text-4xl font-bold ${
              featured ? "text-primary-content" : "text-base-content"
            }`}
          >
            {currency}
            {price}
          </span>
          <span className="text-sm opacity-80 ml-1">{billingCycle}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                featured ? "text-primary-content" : "text-primary"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className="btn btn-primary w-full"
        type="button"
      >
        {buttonText}
      </button>
    </div>
  );
}
