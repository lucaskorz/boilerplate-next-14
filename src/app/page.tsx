export default async function Home() {
  const result = await fetch('https://api.fsis.info/')
    .then(response => response.text())

  return (
    <div>      
      {result}
    </div>
  );
}
