import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva([`
  font-semibold border-2 p-2 rounded-xl hover:bg-gray-100
`], {
  variants: {
    size: {
      small: "text-lg",
      medium: "text-2xl"
    }
  }
});

export interface ButtonProps extends React.ComponentProps<'button'>,
  VariantProps<typeof buttonStyles> { }

const Button = ({ size, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyles({ size })}>{props.children}</button>
  );
};

export { Button };