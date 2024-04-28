export default () => {
  return (
    <div className="bg-white shadow-xl px-3 w-96 flex flex-col gap-5 justify-start pt-20">
      <div className="animate-pulse">
        <div className="bg-gray-300 rounded h-4 w-20 mb-4"></div>
        <div className="bg-gray-300 rounded h-6 w-3/4 mb-2"></div>
        <div className="bg-gray-300 rounded h-24 w-full mb-2"></div>
        <div className="flex justify-between px-2 items-center">
          <div className="flex gap-3">
            <div className="bg-gray-300 rounded h-4 w-20"></div>
            <div className="bg-gray-300 rounded h-4 w-20"></div>
          </div>
          <div className="bg-gray-300 rounded-full p-2 w-14 h-8"></div>
        </div>
      </div>
    </div>
  );
};
