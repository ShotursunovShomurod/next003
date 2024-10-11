import Filtr from "@/components/filtr/Filtr";
import Products from "@/components/products/Products";
import Shops from "@/components/shops/Shops";
import React from "react";
async function getData() {
  const res = await fetch("https://dummyjson.com/products/?limit=24");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Shop = async () => {
  const data = await getData();
  return (
    <div>
      <Shops title={"Shop"} home={"Shop"} />
      <Filtr />
      <Products data={data} our={"Shop Products"} />
    </div>
  );
};

export default Shop;
