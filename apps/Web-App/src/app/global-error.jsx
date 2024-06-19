"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import React from "react";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error/>
      </body>
    </html>
  );
}
