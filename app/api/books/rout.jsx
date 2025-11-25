import { NextResponse } from "next/server";

let books = [
  { id: 1, title: "Book A" },
  { id: 2, title: "Book B" },
];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request) {
  const body = await request.json();
  const newBook = { id: Date.now(), ...body };
  books.push(newBook);
  return NextResponse.json(newBook);
}

// app/api/books/[id]/route.js
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const book = books.find((b) => b.id == params.id);
  return NextResponse.json(book || {});
}

export async function DELETE(req, { params }) {
  books = books.filter((b) => b.id != params.id);
  return NextResponse.json({ message: "Deleted" });
}
