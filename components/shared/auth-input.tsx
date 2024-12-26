"use client";
import {
  Path,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props<T extends FieldValues> {
  type: string;
  fieldName: string;
  placeholder: string;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

function AuthInput<R extends FieldValues>({
  type,
  errors,
  register,
  fieldName,
  placeholder,
}: Props<R>) {
  const [passwordType, setPasswordType] = useState<string>("password");

  const error = (errors[fieldName]?.message as string) || "";

  const handlePassWordVisibility = (): void =>
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));

  return (
    <>
      {type !== "password" ? (
        <div className="flex flex-col space-y-0.5">
          <input
            type={type}
            placeholder={placeholder}
            {...register(fieldName as Path<R>)}
            className="w-72 border-2 px-5 rounded-[5px] py-2 border-gray-400 placeholder:text-sm"
          />
          <span className="text-xs text-red-500">{error}</span>
        </div>
      ) : (
        <div className="flex flex-col space-y-1">
          <div className="w-full flex items-center justify-between relative">
            <input
              type={passwordType}
              placeholder={placeholder}
              {...register(fieldName as Path<R>)}
              className="w-72 border-2 px-5 rounded-[5px] py-2 border-gray-400 placeholder:text-sm"
            />

            {passwordType === "password" ? (
              <FaEye
                className="absolute right-3"
                onClick={handlePassWordVisibility}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-3"
                onClick={handlePassWordVisibility}
              />
            )}
          </div>

          <span className="text-xs text-red-500">{error}</span>
        </div>
      )}
    </>
  );
}

export default AuthInput;
