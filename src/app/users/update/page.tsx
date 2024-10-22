"use client";

import Link from "next/link";

export default function UserUpdate() {
  return (
    <div>
      <label>Update User</label>
      <Link href="/users/create">Ir para update</Link>
    </div>
  );
}
