export const revalidate = 10;

export default async function ISRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await res.json();
  return (
    <div>
      <h1 className="text-2xl font-bold">ISR Example (10 seconds)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
