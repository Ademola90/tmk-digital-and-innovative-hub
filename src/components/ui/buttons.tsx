//src/components/ui/buttons.tsx

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  text,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";

  const variantStyles = {
    primary:
      "bg-primary  hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-secondary  hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover: disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

// type ButtonProps = {
//   text: string;
//   onClick?: () => void;
//   className?: string;
//   variant?: "primary" | "secondary" | "outline";
//   disabled?: boolean;
// };

// const Button = ({
//   text,
//   onClick,
//   className = "",
//   variant = "primary",
//   disabled = false,
// }: ButtonProps) => {
//   const baseStyles =
//     "px-6 py-2 rounded-full font-medium transition-all duration-300";

//   const variantStyles = {
//     primary: "bg-primary  hover:bg-opacity-90",
//     secondary: "bg-secondary text-white hover:bg-opacity-90",
//     tetiaty: " ",
//     outline:
//       "border-2 border-primary text-primary hover:bg-primary hover:text-white",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseStyles} ${variantStyles[variant]} ${className}`}
//       disabled={disabled}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;
