import useSWR from "swr";
import { timeAgo, wiseSayings } from "../../lib/client/utils";
import Link from "next/link";
import ContentsSkeletion from "./contents-skeletion";

interface ContentsProps {
  username: string | undefined;
}

interface CustomTweet {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  user: {
    name: string;
  };
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

  if (!data) return <ContentsSkeletion />;

  return (
    <div>
      <div className="pt-16  bg-white shadow-xl px-3 w-96">
        <h1 className="text-2xl font-bold mb-2">안녕하세요, {username}님</h1>
        <p className="text-sm text-gray-500 mb-2">
          {wiseSayings[Math.floor(Math.random() * wiseSayings.length)]}
        </p>
        {data &&
          data?.tweets.map((tweet) => {
            const tweetId = tweet.id;
            console.log(tweet);
            return (
              <Link href={`/tweets/${tweetId}`} key={tweet.id}>
                <div className="border-b border-gray-200 py-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200 px-2 rounded-md">
                  <div className="text-lg font-bold">{tweet.title}</div>
                  <div className="text-sm text-gray-500">
                    {tweet.description}
                  </div>
                  <div
                    className="flex justify-between items-center mt-2"
                    key={tweet.id}
                  >
                    <div className="flex gap-2">
                      <div
                        className="text-sm text-gray-500"
                        key={tweet.user.name}
                      >
                        @{tweet.user.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {timeAgo(tweet.createdAt.toString())}
                      </div>
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
