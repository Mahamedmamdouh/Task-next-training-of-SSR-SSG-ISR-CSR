import Image from "next/image";

export default function BookCard() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md w-60">
      <Image
        src="/book.jpg"
        width={200}
        height={260}
        alt="Book Cover"
        className="rounded"
      />
      <h3 className="text-lg font-semibold mt-2">Sample Book</h3>
    </div>
  );
}
