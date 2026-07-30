function SectionLabel({
  children,
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-green-500/20
        bg-green-500/10
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-green-400
        sm:text-sm
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default SectionLabel;