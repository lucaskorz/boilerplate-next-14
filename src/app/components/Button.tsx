'use client';

export default function Button({ nameButton }: { nameButton: string }) {
  return (
    <button onClick={() => alert('Clicou')}>
        {nameButton}
    </button>
  );
}