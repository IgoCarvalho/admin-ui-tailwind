import { ComponentProps } from "react";

export function FormField(props: ComponentProps<"div">) {
  return (
    <div
      className="flex flex-col lg:grid lg:grid-cols-(--grid-form) gap-3 pb-5"
      {...props}
    />
  );
}
