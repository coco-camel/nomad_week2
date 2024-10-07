import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

async function getTweets() {
  const tweets = await db.tweet.findMany({
    include: {
      user: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return tweets;
}

export default async function Home() {
  const tweets = await getTweets();

  return (
    <main className="p-5 h-screen max-w-screen-md *:text-white bg-neutral-800">
      <h1 className="text-2xl font-bold mb-4">트윗 목록</h1>
      <Link
        href="/tweets/add"
        className="bg-orange-500 flex justify-center items-center rounded-full size-16 fixed bottom-24 right-8 text-white transition-color hover:bg-orange-400"
      >
        <PlusIcon className="size-10 " />
      </Link>
      <div className="flex flex-col gap-4">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{tweet.user.username}</h2>
            <p>{tweet.tweet}</p>
            <Link
              href={`/tweets/${tweet.id}`}
              className="text-blue-500 hover:underline"
            >
              상세 보기
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
