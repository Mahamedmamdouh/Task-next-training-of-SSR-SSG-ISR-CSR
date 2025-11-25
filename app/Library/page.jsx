import BookCard from "../components/BookCard";

export default function LibraryDashboard() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      description: "A novel by Paulo Coelho",
      image: "/download1.jpeg",
    },
    {
      id: 2,
      title: "1984",
      description: "A novel by George Orwell",
      image: "/download2.jpeg",
    },
    {
      id: 3,
      title: "Harry Potter",
      description: "A fantasy series by J.K. Rowling",
      image: "/download.jpeg",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Library Dashboard</h1>
      <div className="flex gap-4 flex-wrap">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}
