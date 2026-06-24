export default function SSGPage() {
  const date = new Date().toLocaleString();

  console.log("SSGPage rendered");

  return (
    <div>
      <h1>SSG Page</h1>
      <h2>{date}</h2>
    </div>
  );
}
