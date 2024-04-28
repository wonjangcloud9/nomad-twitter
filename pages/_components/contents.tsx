import useSWR from "swr";
import { timeAgo } from "../../lib/client/utils";
import Link from "next/link";

const randomWiseSayings = [
  "아무것도 하지 않으면 아무것도 일어나지 않는다.",
  "시작이 반이다.",
  "행동이 모든 것을 바꾼다.",
  "끝까지 가는 것이 중요하다.",
  "포기하지 않는 한 성공한다.",
  "끝까지 가면 반드시 성공한다",
];

interface ContentsProps {
  username: string | undefined;
}

interface CustomTweet {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  _count: {
    favs: number;
  };
}
interface TweetsResponse {
  ok: boolean;
  tweets: CustomTweet[];
}

export default ({ username }: ContentsProps) => {
  const { data } = useSWR<TweetsResponse>("/api/tweets");

  if (!data) return <div>로딩중입니다. 잠시만 기다려주세요.</div>;

  return (
    <div>
      <div className="pt-12  bg-white shadow-xl px-3 w-96">
        <h1 className="text-2xl font-bold mb-2">안녕하세요, {username}님</h1>
        <p className="text-sm text-gray-500 mb-2">
          {
            randomWiseSayings[
              Math.floor(Math.random() * randomWiseSayings.length)
            ]
          }
        </p>
        {data &&
          data?.tweets.map((tweet) => {
            const tweetId = tweet.id;
            return (
              <Link href={`/tweets/${tweetId}`} key={tweet.id}>
                <div className="border-b border-gray-200 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200 px-2 rounded-md">
                  <div className="text-lg font-bold">{tweet.title}</div>
                  <div className="text-sm text-gray-500">
                    {tweet.description}
                  </div>
                  <div
                    className="flex justify-between items-center mt-2"
                    key={tweet.id}
                  >
                    <div className="text-sm text-gray-500">
                      {timeAgo(tweet.createdAt.toString())}
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">
                        {tweet._count?.favs} 따봉
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        {!data && (
          <div className="text-sm text-gray-500">
            로딩중입니다. 잠시만 기다려주세요.
          </div>
        )}
      </div>
    </div>
  );
};
