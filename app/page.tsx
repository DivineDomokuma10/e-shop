import Category from "@/components/section/category";
import Hero from "@/components/section/hero";

export default function Home() {
  return (
    <main className="max-w-[100dvw] h-fit flex flex-col">
      <Hero />
      <Category />
    </main>
  );
}
