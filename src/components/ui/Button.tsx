interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary";
}

const buttonVariants = {
  primary: "bg-[#5B4FFF] text-white hover:bg-[#4F46E5] disabled:bg-[#F1F2F9]",
  secondary:
    "bg-white text-black border-[#E2E3F0] border hover:bg-[#CBCDE1] disabled:bg-[#E2E3F0] diasbled:text-[#CBCDE1]",
};
export function Button({
  children,
  className = "",
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`mb-4 w-full max-w-xs mx-auto block py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
