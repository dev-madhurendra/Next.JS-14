"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/products");
  };

  useEffect(() => {
    router.prefetch("/products");
  }, [router]);
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
