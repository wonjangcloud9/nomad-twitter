import React from "react";
import useUser from "../lib/client/useUser";
import { NextApiRequest } from "next";

export default () => {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      {user && <h1>Hello {user.id}</h1>}
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const res = await fetch("/api/users/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            window.location.href = "/";
          }
        }}
      >
        Logout
      </button>
    </div>
  );
};
