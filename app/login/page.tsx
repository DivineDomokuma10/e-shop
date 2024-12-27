"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginFields } from "@/lib/interfaces";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schema/auth.schema";
import AuthInput from "@/components/shared/auth-input";
import AuthLayout from "@/components/shared/auth-layout";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFields>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const onsubmit = (logins: LoginFields) => {
    console.log(logins);
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col space-y-5"
      >
        <header className="flex flex-col space-y-0.5">
          <h2 className="text-xl font-medium text-[#333]">LOGIN</h2>
          <p className="text-xs">Welcome back, please login to your account.</p>
        </header>

        <section className="flex flex-col space-y-5">
          <AuthInput
            type="email"
            errors={errors}
            fieldName="email"
            placeholder="Email"
            register={register}
          />
          <AuthInput
            type="password"
            errors={errors}
            register={register}
            fieldName="password"
            placeholder="Password"
          />
        </section>

        <div className="flex justify-between text-xs cursor-pointer">
          <Link href="/sign-up">Dont have an account?</Link>

          <Link href="/forgot-password">Forgot your password? </Link>
        </div>

        <Button disabled={!isValid} className="w-80 px-5 rounded-[5px] py-4">
          Submit
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
