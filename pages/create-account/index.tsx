import React from "react";
import Button from "../../components/button";
import Link from "next/link";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import useMutation from "../../lib/client/useMutation";

interface MutaionResult {
  ok: boolean;
}

interface createAccountForm {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

export default () => {
  const [enter, { loading }] = useMutation<MutaionResult>("/api/users/enter");

  const { register, handleSubmit } = useForm<createAccountForm>();

  const onValid = (validForm: createAccountForm) => {
    if (loading) return;
    enter(validForm);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center  h-screen max-w-screen-sm gap-3">
        <div className="flex  flex-col first-letter:font-bold capitalize text-4xl text-center mb-4 gap-2">
          <div className="text-2xl font-bold">돌아온 것을 환영합니다</div>
          <div className="text-sm text-gray-400">
            돌아온 것을 환영합니다 회원가입하고 더 많은 혜택을 누려보세요
          </div>
        </div>
        <div className="flex gap-1 w-full justify-center items-center bg-gray-200 p-1 rounded-xl">
          <Link href="/create-account">
            <a
              className="bg-white px-4 py-2 rounded-lg w-full text-center hover:bg-gray-300 transition "
              onClick={() => {
                console.log("Hello");
              }}
            >
              회원가입
            </a>
          </Link>
          <Link href="/log-in">
            <a
              className="px-4 py-2 rounded-lg w-full text-gray-400 text-center hover:bg-gray-300 transition"
              onClick={() => {
                console.log("Hello");
              }}
            >
              로그인
            </a>
          </Link>
        </div>
        <form onSubmit={handleSubmit(onValid)} className="gap-2 flex flex-col">
          <Input
            label="이메일"
            name="email"
            register={register("email")}
            type="email"
            required={true}
            placehodler="이메일을 입력해주세요."
          />
          <Input
            label="닉네임"
            name="nickname"
            register={register("nickname")}
            type="text"
            required={true}
            placehodler="닉네임을 입력해주세요."
          />
          <Input
            label="패스워드"
            name="password"
            register={register("password")}
            type="text"
            required={true}
            placehodler="패스워드를 입력해주세요."
          />
          <Input
            label="패스워드"
            name="passwordConfirm"
            register={register("passwordConfirm")}
            type="text"
            required={true}
            placehodler="패스워드를 다시 입력해주세요."
          />
          <Button large text={"회원가입"} />
        </form>
      </div>
    </div>
  );
};
