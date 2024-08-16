"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
//   useEffect(() => {
//     console.error(error.message);
//   }, [error]);

  console.log("ERORRRRR", error.message, error.name, error.cause)

  if (error.message.includes("404")) {
    return (
      <div>
        <h1>Custom 404 Error</h1>
        <p>The requested page could not be found.</p>
      </div>
    );
  }

  if (error.message.includes("500")) {
    return (
      <div>
        <h1>Custom 500 Error</h1>
        <p>There was an internal server error.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Something Went Wrong</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
