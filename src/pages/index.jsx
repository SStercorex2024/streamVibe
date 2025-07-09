import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";

export const metadata = {
  title: 'Homepage',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero/>
      <Categories/>
    </>
  )
}
