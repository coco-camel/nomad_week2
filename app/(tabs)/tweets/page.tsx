import db from "@/lib/db";
import getSession from "@/lib/session";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

async function getTweet(id: string) {
  const tweet = await db.tweet.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      user: true,
    },
  });

  if (!tweet) {
    notFound();
  }

  return tweet;
}

async function getUserSession() {
  const session = await getSession();
  if (!session.id) {
    redirect("/login");
  }
  return session;
}

export default async function Tweet({ params }: { params: { id: string } }) {
  await getUserSession();
  const { id } = params;
  const tweet = await getTweet(id);

  return (
    <div>
      <h1>트윗 상세 보기</h1>
      <p>{tweet.tweet}</p>
      <p>작성자: {tweet.user.username}</p>
      <Link href="/">목록으로 돌아가기</Link>
    </div>
  );
}
