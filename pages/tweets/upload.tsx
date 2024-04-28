import React, { useEffect } from "react";
import useUser from "../../lib/client/useUser";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import useMutation from "../../lib/client/useMutation";
import { useRouter } from "next/router";
import Header from "../_components/header";
import HeaderSkeleton from "../_components/header-skeleton";
import UploadSkeleton from "./_components/upload-skeleton";

interface uploadForm {
  title: string;
  description: string;
}

export default () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const { register, handleSubmit, formState } = useForm<uploadForm>();

  const [uploadTweet, { loading: tweetLoading, data }] =
    useMutation("/api/tweets");

  const onValid = async ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    if (tweetLoading) return;

    uploadTweet({ title, description, id: user?.id });
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/tweets/${data.tweet.id}`);
    }
  }, [data, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center min-h-screen ">
        <HeaderSkeleton />
        <UploadSkeleton />
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen">
      <Header />
      <div className="pt-32  bg-white shadow-xl px-3 w-96 flex flex-col gap-12 justify-start">
        <div className="text-2xl font-bold text-center">Tweet 만들기</div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onValid)}>
          <Input
            label="제목"
            name="title"
            register={register("title", {
              minLength: {
                value: 2,
                message: "제목은 2자 이상이어야 합니다.",
              },
              maxLength: {
                value: 10,
                message: "제목은 10자 이하여야 합니다.",
              },
            })}
            type="text"
            required={true}
            placehodler="제목을 입력해주세요."
            error={formState.errors?.title?.message}
          />
          <Input
            label="내용"
            name="description"
            register={register("description", {
              minLength: {
                value: 10,
                message: "내용은 10자 이상이어야 합니다.",
              },
              maxLength: {
                value: 100,
                message: "내용은 100자 이하여야 합니다.",
              },
            })}
            type="text"
            required={true}
            placehodler="내용을 입력해주세요."
            error={formState.errors?.description?.message}
            multiLine
          />
          <button
            className="bg-orange-500 text-white py-2 rounded-md mt-5"
            disabled={tweetLoading}
          >
            {tweetLoading ? "로딩중..." : "Tweet 만들기"}
          </button>
        </form>
      </div>
    </div>
  );
};
