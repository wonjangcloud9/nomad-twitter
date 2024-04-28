import { Tweet } from "@prisma/client";
import useSWR from "swr";

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

interface TweetsResponse {
  ok: boolean;
  tweets: Tweet[];
}

export default ({ username }: ContentsProps) => {
  const { data } = useSWR<TweetsResponse>("/api/tweets");

  if (!data) return <div>로딩중입니다. 잠시만 기다려주세요.</div>;

  console.log(data.tweets);

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
          data?.tweets.map((tweet) => (
            <div key={tweet.id} className="border-b border-gray-200 py-2">
              <div className="text-lg font-bold">{tweet.title}</div>
              <div className="text-sm text-gray-500">{tweet.description}</div>
              <div className="text-sm text-gray-500">
                {tweet.createdAt.toString()}
              </div>
            </div>
          ))}
        {!data && (
          <div className="text-sm text-gray-500">
            로딩중입니다. 잠시만 기다려주세요.
          </div>
        )}
      </div>
    </div>
  );
};
