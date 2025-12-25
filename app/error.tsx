"use client";

import { Result, Button } from "antd";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Result
      status="500"
      title="Something went wrong"
      subTitle={error.message}
      extra={
        <Button type="primary" onClick={reset}>
          Try Again
        </Button>
      }
    />
  );
}
