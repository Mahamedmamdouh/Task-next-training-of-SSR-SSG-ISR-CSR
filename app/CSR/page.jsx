"use client";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/3")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">CSR Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
