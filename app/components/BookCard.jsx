import Image from "next/image";

export default function BookCard({
  title = "book1",
  description = "",
  image,
}) {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md w-60">
      <div className="w-full h-64 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={200}
            height={260}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">No Image</div>
        )}
      </div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      {description ? (
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">{description}</p>
      ) : null}
    </div>
  );
}
