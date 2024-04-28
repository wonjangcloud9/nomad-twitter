import React from "react";
import Header from "../_components/header";
import useUser from "../../lib/client/useUser";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Fav, Tweet, User } from "@prisma/client";
import useMutation from "../../lib/client/useMutation";
import { FaRegThumbsUp } from "react-icons/fa";
import { cls } from "../../lib/client/utils";

interface TweetWithUser extends Tweet {
  user: User;
}

interface TweetResponse {
  ok: boolean;
  tweet: TweetWithUser;
  favs: Fav[];
}

export default () => {
  const { user } = useUser();
  const router = useRouter();
  const { data, mutate: boundMutate } = useSWR<TweetResponse>(
    router.query.id ? `/api/tweets/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/tweets/${router.query.id}/fav`);

  const onFavClick = async () => {
    if (!data) return;
    await boundMutate((prev) => prev && { ...prev, favs: [] }, false);
    toggleFav({});
  };

  if (!user) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex justify-center min-h-screen">
      <Header />
      <div className="pt-12  bg-white shadow-xl px-3 w-96 flex flex-col gap-5 justify-center">
        <div
          onClick={() => router.back()}
          className="cursor-pointer text-orange-500 "
        >
          뒤로가기
        </div>
        {data?.ok ? (
          <>
            <div className="text-xl font-bold">{data.tweet.title}</div>
            <p className="text-lg bg-gray-100 p-3 rounded-lg">
              {data.tweet.description}
            </p>
            <div className="flex gap-3 justify-between px-2 items-center">
              <div
                className="flex flex-col
              justify-center items-center"
              >
                <span className="text-gray-500">@{data.tweet.user.name}</span>
              </div>
              <div>
                <span className="text-gray-500">
                  {new Date(data.tweet.createdAt).toLocaleString()}
                </span>
              </div>
              <button
                className={cls(
                  "bg-orange-400 text-white p-2 rounded-lg hover:bg-orange-500 transition text-center w-14",
                  data.favs.length !== 0 ? "text-white" : "text-orange-300"
                )}
                onClick={onFavClick}
              >
                {data.favs.length > 0 ? (
                  <div className="flex items-center gap-2">
                    <FaRegThumbsUp className="w-5 h-5 " />
                    <span>{data.favs.length}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FaRegThumbsUp className="w-5 h-5 " />
                    <span>{data.favs.length}</span>
                  </div>
                )}
              </button>
            </div>
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};
