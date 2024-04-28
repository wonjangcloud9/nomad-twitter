export default () => {
  return (
    <div className="pt-16 bg-white shadow-xl px-3 w-96">
      <div className="animate-pulse">
        <div className="bg-gray-300 rounded h-6 w-3/4 mb-4"></div>
        <div className="bg-gray-300 rounded h-4 w-1/2 mb-4"></div>
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="py-4">
            <div className="bg-gray-300 rounded h-5 w-full mb-2"></div>
            <div className="bg-gray-300 rounded h-4 w-5/6 mb-2"></div>
            <div className="flex justify-between mt-2">
              <div className="bg-gray-300 rounded h-4 w-1/4"></div>
              <div className="bg-gray-300 rounded h-4 w-1/6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
