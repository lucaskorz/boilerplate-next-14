'use client'

export default function Home() {
  const { appName } = window.navigator;

  return (
    <div>
      Hello JStack
      
      {appName}
    </div>
  );
}
