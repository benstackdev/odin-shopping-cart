import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva([`font-semibold border-2 p-1 rounded-xl transition-all duration-200 ease-in-out`], {
  variants: {
    size: {
      small: "text-lg",
      medium: "text-2xl p-2"
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

const Button = ({ size, background, className, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyles({ className, size, background })}>
      {props.children}
    </button>
  );
};

export { Button };