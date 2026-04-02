"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";
import ProductCard from "./ProductCard";
import type { Product } from "@/db/schema";

export default function ProductList({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  const displayProducts = products.length > 0 ? products : initialProducts;

  if (displayProducts.length === 0) {
    return (
      <p className="py-12 text-center text-zinc-500 dark:text-zinc-400">
        No products found. Run the seed script to add sample data.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
