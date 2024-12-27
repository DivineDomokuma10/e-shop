import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-screen flex flex-col">
      <header className="w-full p-3 flex items-center md:items-center">
        <Image
          alt="logo"
          width={120}
          height={60}
          src={"/logo1.1.png"}
          className="md:hidden"
        />

        <Image
          alt="logo"
          width={150}
          height={50}
          src={"/logo1.1.png"}
          className="hidden md:block"
        />
      </header>

      <section className="w-full h-full flex flex-col px-10 space-y-10 items-center md:space-y-0 md:space-x-20 md:flex-row md:justify-center">
        <Image
          alt=""
          src="/cart1.svg"
          width={250}
          height={100}
          className="md:hidden"
        />

        <Image
          alt=""
          src="/cart1.svg"
          width={500}
          height={100}
          className="hidden md:block"
        />

        <div>{children}</div>
      </section>
    </main>
  );
};

export default AuthLayout;
