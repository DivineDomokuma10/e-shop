import Blog from "@/components/section/blog";
import Category from "@/components/section/category";
import Hero from "@/components/section/hero";
import TopProducts from "@/components/section/top-products";

export default function Home() {
  return (
    <main className="max-w-[100dvw] h-fit flex flex-col space-y-5">
      <Hero />
      <Category />
      <TopProducts />
      <Blog />
    </main>
  );
}
