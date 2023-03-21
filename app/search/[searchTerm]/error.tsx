"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something when wrong</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
};

export default Error;
