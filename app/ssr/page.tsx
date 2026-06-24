export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const date = new Date().toLocaleString();

  console.log("SSRPage rendered");

  return (
    <div>
      <h1>SSR Page</h1>
      <h2>{date}</h2>
    </div>
  );
}
