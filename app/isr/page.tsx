export const revalidate = 10;

export default function ISRPage() {
  const date = new Date().toLocaleString();

  console.log("ISRPage rendered");

  return (
    <div>
      <h1>ISR Page</h1>
      <h2>{date}</h2>
    </div>
  );
}
