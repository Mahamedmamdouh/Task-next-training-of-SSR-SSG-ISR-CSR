export const revalidate = 10;

import BookCard from "../components/BookCard";

export default async function ISRPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6",
    { next: { revalidate: 10 } }
  );
  const books = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ISR Books (revalidate: 10s)</h1>
      <div className="flex flex-wrap gap-4">
        {books.map((b) => (
          <BookCard
            key={b.id}
            title={b.title}
            description={b.body}
            image={`https://picsum.photos/seed/book-${b.id}/200/260`}
          />
        ))}
      </div>
    </div>
  );
}
