import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva([`font-semibold inline-flex justify-center items-center transition-all duration-200 ease-in-out`], {
  variants: {
    size: {
      small: "text-md lg:text-lg rounded-lg p-1",
      medium: "text-2xl rounded-xl p-2",
      smallIcon: "size-5 md:size-6 rounded-lg",
      mediumIcon: "size-8 rounded-xl"
    },
    background: {
      white: "text-black bg-white border-2 hover:bg-gray-100",
      green: "text-white bg-emerald-400 hover:bg-emerald-700",
      grey: "text-gray-900 bg-gray-300 hover:bg-gray-400",
      red: "text-red-950 bg-red-300 hover:bg-red-400"
    }
  },
  defaultVariants: {
    size: "small",
    background: "white"
  }
});

export interface ButtonProps extends React.ComponentProps<'button'>,
  VariantProps<typeof buttonStyles> { }

const Button = ({
  size,
  background,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonStyles({ className, size, background })} {...props}>
      {props.children}
    </button>
  );
};

export { Button };