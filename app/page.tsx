import Blog from "@/components/section/blog";
import Hero from "@/components/section/hero";
import Category from "@/components/section/category";
import AppLayout from "@/components/shared/app-layout";
import TopProducts from "@/components/section/top-products";

export default function Home() {
  return (
    <main className="max-w-[100dvw] h-fit flex flex-col space-y-5">
      <AppLayout>
        <Hero />
        <Category />
        <TopProducts />
        <Blog />
      </AppLayout>
    </main>
  );
}
