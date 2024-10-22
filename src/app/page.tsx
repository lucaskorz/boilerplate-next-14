import Button from "./components/Button";

export default async function Home() {
  const result = await fetch('https://api.fsis.info/')
    .then(response => response.text())

  return (
    <div>      
      {result}

      <br />
      <Button nameButton={result} />
    </div>
  );
}
