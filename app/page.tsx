import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Login() {
  return (
    <main className="bg-gray-100 flex justify-center items-center w-full h-screen p-5">
      <div className="flex flex-col items-center w-[600px] gap-5">
        <AcademicCapIcon className="w-12 h-12 text-red-500 mb-4" />
        <div className="w-full">
          <div className="flex flex-col">
            <Link
              href="/login"
              className="primary-btn w-full py-2.5 text-lg flex justify-center"
            >
              로그인
            </Link>
            <Link
              href="/create-account"
              className="primary-btn w-full py-2.5 text-lg flex justify-center"
            >
              가입하기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
