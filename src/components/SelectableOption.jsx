export default function SelectableOption({
  label,
  selected = false,
  onChange = () => {},
  type = "checkbox",
  name = "",
}) {
  const target =
    type === "checkbox"
      ? (e) => onChange(e.target.checked, label)
      : () => onChange(label);

  return (
    <label className="mt-2 flex cursor-pointer items-center gap-3 text-sm">
      <input type={type} name={name} checked={selected} onChange={target} />
      <span className="font-light select-none">{label}</span>
    </label>
  );
}
