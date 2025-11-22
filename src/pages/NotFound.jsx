import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container py-12 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">
        Page not found.{" "}
        <Link to="/" className="text-accent">
          Back home
        </Link>
      </p>
    </main>
  );
}
