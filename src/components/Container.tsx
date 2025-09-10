import { cn } from "@/lib/utils";

interface IProps{
  children: React.ReactNode,
  className?: string 
}

const Container = ({children,className}:IProps) => {
  return (
    <div
      className={cn(
      'max-w-[1920px] w-full mx-auto px-4 py-4 xl:px-20',
      className && className
      )}
    >
    {children}
    </div>
  );
};

export default Container;