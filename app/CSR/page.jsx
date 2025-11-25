"use client";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function CSRPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((json) => setBooks(json));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CSR Books</h1>
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
