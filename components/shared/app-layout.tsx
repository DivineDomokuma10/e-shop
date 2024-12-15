"use client";
import { ReactNode } from "react";

import Nav from "./nav";
import Footer from "./footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="max-w-[100dvw] h-fit flex flex-col">
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;
