import { cls } from "../lib/client/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  loading?: boolean;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "bg-orange-400 hover:bg-orange-500 text-white px-4 border border-transparent rounded-xl shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition w-80",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
      disabled={loading}
    >
      {loading ? "로딩중..." : text}
    </button>
  );
}
