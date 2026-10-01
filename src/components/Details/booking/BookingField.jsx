export default function BookingField({
  label,
  htmlFor,
  icon,
  children,
  className = "",
}) {
  return (
    <div
      className={`focus-within:bg-primary-50/50 min-w-0 bg-white px-4 py-3.5 transition-colors ${className}`}
    >
      <label
        htmlFor={htmlFor}
        className="text-primary-700 flex items-center gap-2 text-[9px] font-bold tracking-[0.13em] uppercase"
      >
        <span className="text-accent-600 text-sm">{icon}</span>

        {label}
      </label>

      {children}
    </div>
  );
}
