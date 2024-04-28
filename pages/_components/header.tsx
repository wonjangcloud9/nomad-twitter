import { LiaDoorClosedSolid } from "react-icons/lia";

export default () => {
  return (
    <div
      className="fixed top-0 items-start justify-center max-w-screen-sm w-96 bg-orange-400 "
      style={{ fontFamily: "Noto Sans KR" }}
    >
      <div className="flex items-center justify-between px-4 py-2 ">
        <h1>🔥</h1>
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
          <LiaDoorClosedSolid className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
