import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div className="flex gap-1 w-full">
      <textarea
        id={name}
        {...register}
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={4}
        {...rest}
      />
    </div>
  );
}
