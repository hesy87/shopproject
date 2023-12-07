"use client";

import { useRouter } from "next/navigation";
import Button from "./components/UI/Button/Button";

export default function Page() {
  const router = useRouter();

  return (
    <Button
      type="button"
      style={"btn btn-primary"}
      onClick={() => router.push("/products")}
    >
      Products
    </Button>
  );
}
