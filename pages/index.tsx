import React from "react";
import useUser from "../lib/client/useUser";
import Header from "./_components/header";
import Contents from "./_components/contents";
import CreateBtn from "./_components/create-btn";
import HeaderSkeleton from "./_components/header-skeleton";
import ContentsSkeletion from "./_components/contents-skeletion";
import CreateBtnSkeleton from "./_components/create-btn-skeleton";

export default () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex justify-center min-h-screen">
        <HeaderSkeleton />
        <ContentsSkeletion />
        <CreateBtnSkeleton />
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen">
      <Header />
      <Contents username={user?.name} />
      <CreateBtn />
    </div>
  );
};
