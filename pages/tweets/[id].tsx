import React from "react";
import Header from "../_components/header";
import useUser from "../../lib/client/useUser";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Fav, Tweet, User } from "@prisma/client";
import useMutation from "../../lib/client/useMutation";
import { FaRegThumbsUp } from "react-icons/fa";
import { cls, timeAgo } from "../../lib/client/utils";
import HeaderSkeleton from "../_components/header-skeleton";
import DetailSkeleton from "./_components/detail-skeleton";

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
    router.query.id ? `/api/tweets/${router.query.id}` : null,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );
  const [toggleFav] = useMutation(`/api/tweets/${router.query.id}/fav`);

  const onFavClick = async () => {
    if (!data) return;
    boundMutate({
      ...data,
      favs: data.favs.filter((fav) => fav.userId !== user?.id),
    });
    toggleFav({});
  };

  if (!user) {
    return (
      <div className="flex justify-center min-h-screen">
        <HeaderSkeleton />
        <DetailSkeleton />
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen">
      <Header />
      <div className="bg-white shadow-xl px-3 w-96 flex flex-col gap-5 justify-start pt-20">
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
              <div className="flex gap-3 justify-center items-center">
                <div className="text-gray-500">@{data.tweet.user.name}</div>
                <div className="text-gray-500">
                  {timeAgo(data.tweet.createdAt.toString())}
                </div>
              </div>
              <button
                className={cls(
                  "bg-orange-400 text-white p-2 rounded-lg hover:bg-orange-500 transition text-center w-14",
                  data.favs.find((fav) => fav.userId === user.id)
                    ? "bg-orange-500"
                    : ""
                )}
                onClick={onFavClick}
              >
                <div className="flex items-center gap-2">
                  <FaRegThumbsUp
                    className={cls(
                      "text-lg",
                      data.favs.length !== 0 ? "text-white" : "text-orange-300"
                    )}
                  />
                  <span>{data.favs.length}</span>
                </div>
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center min-h-screen">
            <HeaderSkeleton />
            <DetailSkeleton />
          </div>
        )}
      </div>
    </div>
  );
};
