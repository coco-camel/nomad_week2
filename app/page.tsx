"use client";

import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";
import Input from "@/components/input";
import Button from "@/components/button";

export default function Login() {
  const [state, action] = useFormState(handleForm, null);

  const hasSubmittedSuccessfully = !state?.fieldErrors && state !== null;

  return (
    <main className="bg-gray-100 flex justify-center items-center w-full h-screen p-5">
      <div className="flex flex-col items-center w-[600px] gap-5">
        <AcademicCapIcon className="w-12 h-12 text-red-500 mb-4" />
        <form action={action} className="w-full">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={state?.fieldErrors.email}
          />
          <Input
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.fieldErrors.username}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
          />
          <Button text="Log in" />
          {hasSubmittedSuccessfully && (
            <div className="bg-green-500 rounded-full w-full py-3 h-10 m-1 flex justify-center items-center font-bold">
              <span>Welcom back!</span>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
