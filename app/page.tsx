"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function Login() {
  const [state, action] = useFormState(handleForm, { potato: 1 } as any);

  const isSuccess = state?.errors?.length === 0;

  return (
    <main className="bg-gray-100 flex justify-center items-center w-full h-screen p-5">
      <div className="flex flex-col items-center w-[400px] gap-5">
        <AcademicCapIcon className="w-12 h-12 text-red-500 mb-4" />
        <form action={action} className="w-full">
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={[]}
          />
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={[]}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.errors ?? []}
          />
          <FormButton text="Log in" />
          {isSuccess && (
            <div className="bg-green-500 rounded-full w-full py-3 h-10 m-1 flex justify-center items-center font-bold">
              <span>Welcom back!</span>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
