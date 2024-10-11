import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
async function getData() {
  const res = await fetch("https://dummyjson.com/products/?limit=8");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Home = async () => {
  const data = await getData();
  return (
    <div>
      <Hero />
      <Products data={data} our={"Our Products"} />
    </div>
  );
};
export default Home;
