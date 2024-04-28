import React from "react";
import Button from "../../components/button";
import Link from "next/link";

export default () => (
  <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center justify-center h-screen max-w-screen-sm gap-5">
      <div className="flex  flex-col first-letter:font-bold capitalize text-4xl text-center mb-4 gap-2">
        <div className="text-2xl font-bold">돌아온 것을 환영합니다</div>
        <div className="text-sm text-gray-400">
          돌아온 것을 환영합니다 로그인하고 더 많은 혜택을 누려보세요
        </div>
      </div>
      <div className="flex gap-1 w-full justify-center items-center bg-gray-200 p-1 rounded-xl">
        <Link href="/create-account">
          <a className="px-4 py-2 rounded-lg w-full text-gray-400 text-center hover:bg-gray-300 transition">
            회원가입
          </a>
        </Link>
        <Link href="/login">
          <a className="bg-white px-4 py-2 rounded-lg w-full text-center hover:bg-gray-300 transition ">
            로그인
          </a>
        </Link>
      </div>
      <div>
        <Button
          large
          text={"로그인"}
          onClick={() => {
            console.log("Hello");
          }}
        />
      </div>
    </div>
  </div>
);
