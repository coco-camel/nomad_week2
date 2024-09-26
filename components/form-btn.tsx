"use client";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}
export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn disabled:text-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
