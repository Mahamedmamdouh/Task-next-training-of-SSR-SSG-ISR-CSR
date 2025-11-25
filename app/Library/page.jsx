import BookCard from "../components/BookCard";

export default function LibraryDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Library Dashboard</h1>
      <div className="flex gap-4">
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
