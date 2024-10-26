import { Metadata } from "next";

type PropsUserUpdateId = {
  params: {
    userId: string;
  };
};

async function getUserEspecifico(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return userId;
}

export function generateMetadata({ params }: PropsUserUpdateId): Metadata {
  return {
    title: `Usuário ${params.userId}`,
  };
}

export default async function UserUpdateId({ params }: PropsUserUpdateId) {
  const user = await getUserEspecifico(params.userId);

  return (
    <div>
      <label>Usuário {user}</label>
    </div>
  );
}
