import React from "react";
import useUser from "../lib/client/useUser";
import Header from "./_components/header";
import Contents from "./_components/contents";
import CreateBtn from "./_components/create-btn";

export default () => {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center min-h-screen">
      <Header />
      <Contents username={user?.name} />
      <CreateBtn />
    </div>
  );
};
