"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
  "use server";
  const password = formData.get("password");
  if (password !== "12345") {
    return {
      errors: ["wrong password"],
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    errors: [],
  };
};
