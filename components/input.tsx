import type { UseFormRegisterReturn } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

interface InputProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
  placehodler: string;
  error: string | undefined;
}

export default function Input({
  label,
  name,
  register,
  type,
  required,
  error,
  placehodler,
}: InputProps) {
  return (
    <div>
      <div className="flex gap-1 w-full">
        <div className="flex items-center gap-1 w-20 justify-center">
          {name === "email" && <MdOutlineEmail className="w-4 h-4 mb-1" />}
          {name === "nickname" && <CiFaceSmile className="w-4 h-4 mb-1" />}
          {name === "password" && (
            <RiLockPasswordLine className="w-4 h-4 mb-1" />
          )}
          {name === "passwordConfirm" && (
            <RiLockPasswordLine className="w-4 h-4 mb-1" />
          )}
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor={name}
          >
            {label}
          </label>
        </div>
        <div className="rounded-md relative flex items-center shadow-sm w-64">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            placeholder={placehodler}
          />
        </div>
      </div>
      <div>
        {error && (
          <span className="text-sm text-red-500 font-medium">{error}</span>
        )}
      </div>
    </div>
  );
}
