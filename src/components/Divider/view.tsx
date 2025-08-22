export default function Divider({
  variant = "solid",
  className,
  parentClassName,
}: {
  variant?: "solid" | "dashed";
  className?: string;
  parentClassName?: string;
}) {
  return (
    <div className={`inset-0 flex items-center ${parentClassName}`}>
      <div
        className={`w-full border-t ${
          variant === "dashed" ? "border-dashed" : "border-solid"
        } border-grey-200 ${className}`}
      ></div>
    </div>
  );
}
