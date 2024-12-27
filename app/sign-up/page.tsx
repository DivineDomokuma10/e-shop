"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { SignUpFields } from "@/lib/interfaces";
import { signUpSchema } from "@/schema/auth.schema";
import AuthInput from "@/components/shared/auth-input";
import AuthLayout from "@/components/shared/auth-layout";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFields>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(signUpSchema),
  });

  const onsubmit = (credientals: SignUpFields) => {
    console.log(credientals);
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col space-y-5"
      >
        <header className="flex flex-col space-y-0.5">
          <h2 className="text-xl font-medium text-[#333]">SIGN UP</h2>
          <p className="text-xs">Create an account with us</p>
        </header>

        <section className="flex flex-col space-y-5">
          <AuthInput
            type="text"
            errors={errors}
            register={register}
            fieldName="userName"
            placeholder="Username"
          />

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

        <div className="flex space-x-3 text-xs">
          <input
            type="checkbox"
            id="term-and-condition"
            {...register("termsAndCondition")}
          />

          <span className="flex space-x-1">
            <label htmlFor="term-and-condition">I agree to the </label>

            <Link href={""} className="text-red-400">
              terms and condition
            </Link>
          </span>
        </div>

        <Button disabled={!isValid} className="w-80 px-5 rounded-[5px] py-4">
          Submit
        </Button>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
