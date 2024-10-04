import db from "@/lib/db";
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
    <main className="bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4">트윗 목록</h1>
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
