import FeaturePosts from "@/components/commons/items/FeaturePosts";
import Hero from "@/components/units/hero";

export default function HomePage() {
  return (
    <section className="">
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturePosts />
    </section>
  );
}
