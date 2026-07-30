import SectionLabel from "./SectionLabel";

function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className = "",
}) {
  return (
    <div
      className={`
        ${centered ? "mx-auto text-center" : ""}
        mb-16 max-w-3xl lg:mb-20
        ${className}
      `}
    >
      {label && <SectionLabel>{label}</SectionLabel>}

      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:mt-6 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mt-6">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;