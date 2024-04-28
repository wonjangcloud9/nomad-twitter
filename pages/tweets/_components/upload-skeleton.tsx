import InputSkeleton from "./input-skeleton";

export default () => {
  return (
    <div className="pt-32 bg-white shadow-xl px-3 w-96 flex flex-col gap-12 justify-start">
      <div className="animate-pulse">
        <div className="bg-gray-300 rounded h-8 w-100 mb-6 self-center"></div>
        <InputSkeleton />
        <InputSkeleton multiLine={true} />
        <div className="mt-5 bg-gray-400 h-10 rounded-md w-100 mx-auto"></div>
      </div>
    </div>
  );
};
