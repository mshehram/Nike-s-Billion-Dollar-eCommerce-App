import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays, and classic TPU accents.",
    price: 129.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zwxes8uud05rkuei1mpt/AIR+MAX+90.png",
    category: "Shoes",
    stock: 50,
    featured: true,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: 109.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    category: "Shoes",
    stock: 75,
    featured: true,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: 114.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/NIKE+DUNK+LOW+RETRO.png",
    category: "Shoes",
    stock: 60,
    featured: true,
  },
  {
    name: "Nike Sportswear Tech Fleece Hoodie",
    description:
      "Engineered with Nike Tech Fleece fabric for lightweight warmth, this hoodie features a sleek, modern design perfect for everyday wear.",
    price: 130.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/be5643e9-a030-42c2-98e0-2d5c9030746a/TECH+FLEECE+HOODIE.png",
    category: "Clothing",
    stock: 40,
    featured: false,
  },
  {
    name: "Nike Air Zoom Pegasus 41",
    description:
      "A responsive satisfying satisfying ride for any run, the Pegasus 41 offers a smooth ride with a ReactX foam midsole and Zoom Air unit.",
    price: 139.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/PEGASUS+41.png",
    category: "Shoes",
    stock: 35,
    featured: true,
  },
  {
    name: "Nike Club Fleece Joggers",
    description:
      "The Nike Club Fleece Joggers combine classic style with plush comfort. Soft brushed-back fleece feels warm and smooth.",
    price: 60.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/be5643e9-a030-42c2-98e0-2d5c9030746a/CLUB+FLEECE+JOGGER.png",
    category: "Clothing",
    stock: 100,
    featured: false,
  },
  {
    name: "Nike Brasilia 9.5 Training Backpack",
    description:
      "The Nike Brasilia Backpack is built with durable material to help carry your gear to and from the gym or school.",
    price: 40.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8dfae47e-14c7-4d86-8c4a-a2752e4eeb1a/BRASILIA+9.5+BACKPACK.png",
    category: "Accessories",
    stock: 80,
    featured: false,
  },
  {
    name: "Nike Revolution 7",
    description:
      "The Nike Revolution 7 is a lightweight, cushioned running shoe perfect for your daily runs and casual wear.",
    price: 74.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/REVOLUTION+7.png",
    category: "Shoes",
    stock: 90,
    featured: false,
  },
];

async function seed() {
  console.log("🌱 Seeding products...");

  await db.delete(products);
  await db.insert(products).values(nikeProducts);

  console.log(`✅ Seeded ${nikeProducts.length} Nike products successfully!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
