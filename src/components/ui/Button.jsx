import { Link } from "react-router-dom";

function Button({
  children,
  href,
  to,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const styles = {
    primary:
      "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,.35)]",

    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-green-500 hover:bg-green-500/10",
  };

  const sharedClasses = `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-2xl
    px-7
    py-4
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-green-500
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#030712]
    disabled:pointer-events-none
    disabled:opacity-50
    ${styles[variant]}
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={sharedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={sharedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={sharedClasses}
    >
      {content}
    </button>
  );
}

export default Button;