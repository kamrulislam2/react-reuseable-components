// import clsx from "clsx";
// import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

// `bg-purple-500 px-3 py-2 rounded-md ${className} ${
//   variant == "outline" ? "border border-purple-500 bg-opacity-10" : ""
// }`;

type TRef = HTMLButtonElement;
type TVariant = "solid" | "outline" | "ghost";
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";

        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
