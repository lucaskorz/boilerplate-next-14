import Link from "next/link";

export default function UserCreate() {
  return (
    <div>
      <label>Create User</label>
      <Link href="/users/update">Ir para update</Link>
    </div>
  );
}
