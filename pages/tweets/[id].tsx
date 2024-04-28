import React from "react";
import Header from "../_components/header";
// import useUser from "../../lib/client/useUser";
// import { useRouter } from "next/router";

export default () => {
  return (
    <div className="flex justify-center min-h-screen">
      <Header />
      <div className="pt-12  bg-white shadow-xl px-3 w-96 flex flex-col gap-12 justify-center">
        <div className="text-2xl font-bold text-center">Tweet 만들기</div>
      </div>
    </div>
  );
};
