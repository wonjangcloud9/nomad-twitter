export default ({ multiLine = false }) => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-1 w-100 mb-2">
        <div className="flex items-center gap-1 w-20 justify-center">
          <div className="bg-gray-300 rounded-full w-4 h-4 mb-1"></div>
          <div className="bg-gray-300 rounded w-16 h-6"></div>
        </div>
        <div className="rounded-md relative flex items-center shadow-sm w-64 bg-gray-300 h-10">
          {multiLine && (
            <div className="w-full h-24 bg-gray-200 rounded-md"></div>
          )}
        </div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-20"></div>
    </div>
  );
};
