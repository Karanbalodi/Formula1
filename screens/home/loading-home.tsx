"use client";

export const LoadingHome = () => {
  return (
    <div role="status" className="max-w-sm  animate-pulse">
      <p className="rounded-md bg-gray-200 w-96 h-10 mt-6" />
      <p className="rounded-md h-6 bg-gray-200 mt-2 w-60" />
      <p className="rounded-md h-6 bg-gray-200 mt-2 w-60" />
    </div>
  );
};
