"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { uploadTweet } from "./actions";
export default function AddTweets() {
  const [state, action] = useFormState(uploadTweet, null);
  return (
    <div>
      <form action={action} className="p-5 flex flex-col gap-5">
        <Input
          name="tweet"
          required
          placeholder="tweet"
          type="text"
          errors={state?.fieldErrors.tweet}
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
}
