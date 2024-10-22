"use client";

import { useState } from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Contador {count}</button>
      <br />

      <label>Layout User</label>
      {children}
    </div>
  );
}
