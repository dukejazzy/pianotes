export type ContainerProps = {
  variant?: "application",
  className?: string,
  children?: React.ReactNode;
};

import { Playfair_Display } from "next/font/google";
const fontFamily = Playfair_Display({ subsets: ["latin"] });
export default function Container({
  children,
  variant = "application",
  className
}: ContainerProps) {



  const ContainerVariants = {
    application: () => {
      return (
        <html lang="en">
          <body className={`${fontFamily.className  ?? ""}`}>{children}</body>
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
