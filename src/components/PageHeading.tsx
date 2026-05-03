import { cva, type VariantProps } from "class-variance-authority";

const headingStyles = cva([`
  text-center text-4xl tracking-tight lg:text-6xl mx-16 lg:mx-auto`
]);

export interface PageHeadingProps extends React.ComponentProps<'h1'>,
  VariantProps<typeof headingStyles> { }

const PageHeading = ({ ...props }: PageHeadingProps) => {
  return (
    <h1 className={headingStyles()}>{props.children}</h1>
  );
};

export { PageHeading };