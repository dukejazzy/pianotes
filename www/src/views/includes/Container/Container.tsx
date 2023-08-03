export type ContainerProps = {
  variant?: "application";
  children?: React.ReactNode;
};


export default function Container({
  children,
  variant = "application",
}: ContainerProps) {

    
  const ContainerVariants = {
    application: () => {
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      );
    },
  };

  const Component = ContainerVariants[variant];

  return (
    <>
      <Component />
    </>
  );
}
