"use client";

import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
