// 'use client';

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  icon?: IconType;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (
  {
    label, type, disabled, outlined, small, className, onclick, icon: Icon
  }: ButtonProps
) => {
  return (
    <button
      type={type}
      onClick={onclick}
      disabled={disabled}
      className={cn("disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 transition w-auto  flex items-center justify-center gap-2 py-2 px-5 my-2 button-bg text-black font-medium ",
        outlined && "bg-transparent text-slate-700 dark:text-slate-300 dark:bg-transparent",
        small && "text-sm py-1 px-2 border-[1px]",
        className && className

      )}
    >
      {label}
      {Icon && <Icon size={20} />}

    </button>
  );
};

export default Button;