function SkeletonLoader() {
  return (
    <div className="flex flex-col rounded shadow-md w-full sm:w-full animate-pulse h-96 my-8">
      <div className="h-48 rounded-t bg-gray-300"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
        <div className="w-full h-6 rounded bg-gray-300"></div>
        <div className="w-full h-6 rounded bg-gray-300"></div>
        <div className="w-3/4 h-6 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
