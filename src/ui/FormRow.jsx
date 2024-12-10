import { cn } from "@/lib/utils";

function FormRow({ label, error, children, className }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label htmlFor={children.props.id} className="font-semibold">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
