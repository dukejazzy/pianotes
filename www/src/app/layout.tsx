import "./globals.css";


import type { NextMetaData } from "@typings/index";

import Footer from "@includes/Footer";
import NavBar from "@includes/NavBar";
import Container from "@includes/Container";




export const metadata: NextMetaData = {
  title: "Pianotes | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <Container className={"bg-gradient-to-b from-stone-50 to-slate-900"}>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
}
