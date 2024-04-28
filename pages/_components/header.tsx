import Link from "next/link";
import { useRouter } from "next/router";
import { LiaDoorClosedSolid } from "react-icons/lia";

export default () => {
  const router = useRouter();
  return (
    <div
      className="fixed top-0 items-start justify-center max-w-screen-sm w-96 bg-orange-400 "
      style={{ fontFamily: "Noto Sans KR" }}
    >
      <div className="flex items-center justify-between px-4 py-2 ">
        <Link href="/">
          <a className="text-xl font-bold text-white">🔥</a>
        </Link>
        <button
          onClick={async () => {
            const res = await fetch("/api/users/logout", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (res.ok) {
              router.push("/create-account");
            }
          }}
        >
          <LiaDoorClosedSolid className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
