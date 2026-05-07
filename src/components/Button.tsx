import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva([`font-semibold inline-flex justify-center items-center border-2 transition-all duration-200 ease-in-out`], {
  variants: {
    size: {
      small: "text-lg rounded-lg p-1",
      medium: "text-2xl rounded-xl p-2",
      smallIcon: "size-6 rounded-lg",
      mediumIcon: "size-8 rounded-xl"
    },
    background: {
      white: "text-black bg-white hover:bg-gray-100",
      green: "text-white bg-emerald-400 hover:bg-emerald-700"
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