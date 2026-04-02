import { db } from "@/db";
import { products } from "@/db/schema";
import ProductList from "./components/ProductList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Nike Store
          </h1>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {allProducts.length} Products
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Our Collection
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Explore the latest Nike products, from iconic sneakers to premium
            apparel.
          </p>
        </div>
        <ProductList initialProducts={allProducts} />
      </main>
    </div>
  );
}
