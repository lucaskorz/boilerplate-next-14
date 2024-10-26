import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Usuário',
};

async function getUsers() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return ['lucas', 'rafael']
}

export default async function UserUpdate() {
  const users = await getUsers()

  return (
    <div>
      <label>Update User</label>

      <div>
        Usuários: 

        {users.map((user) => (
          <div key={user}>{user}</div>
        ))}
      </div>

      <Link href="/users/create">Ir para update</Link>
    </div>
  );
}
