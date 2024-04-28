import { useRouter } from "next/router";
import { TbPencil } from "react-icons/tb";

export default () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 w-96 max-w-screen-sm">
      <div className="flex justify-between p-9">
        <div className="w-100" />
        <button
          onClick={() => {
            router.push("/tweets/upload");
          }}
          className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-full transition"
        >
          <TbPencil className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
