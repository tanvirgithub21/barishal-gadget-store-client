import React, { useEffect, useState } from "react";
import InventoryHomeItme from "../InventoryHomeItme/InventoryHomeItme";
import InventorySingleItem from "../InventorySingleItem/InventorySingleItem";
import NewSingleProduct from "../NewSingleProduct/NewSingleProduct";
import TrendingSinglePd from "../TrendingSinglePd/TrendingSinglePd";
import "./Home.css";

const Home = () => {
  //   const homeBannerImage = "https://i.ibb.co/SrtgS5s/59356696-131018791330797-1345272259203301376-n.jpg";
  const homeBannerImage =
    "https://media.nedigital.sg/fairprice/images/d73e902e-c047-4bf2-84cc-c21da7d21326/MP-GadgetsLand-LandingBanner-Feb2021.jpg";

  //New Product data
  const [latestProducts, setLatestProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allItems?category=New")
      .then((res) => res.json())
      .then((data) => setLatestProduct(data));
  }, []);

  //new product slice
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    const newPd = latestProducts.slice(0, 4);

    setNewProduct(newPd);
  }, [latestProducts]);

  // trending items data
  const [trendingProducts, setTrendingProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allItems?category=Trending")
      .then((res) => res.json())
      .then((data) => setTrendingProduct(data));
  }, []);

  //trending product slice
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const newPd = trendingProducts.slice(0, 3);

    setTrending(newPd);
  }, [trendingProducts]);

  // inventory items data
  const [inventoryItem, setInventoryItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allItems")
      .then((res) => res.json())
      .then((data) => setInventoryItem(data));
  }, []);

  //inventory product slice
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const newPd = inventoryItem.slice(0, 6);

    setInventory(newPd);
  }, [inventoryItem]);

  return (
    <div className=" bg-[#f5feff]">
      {/* home banner section */}
      <section className="homeBanner relative w-full h-[45vh] md:h-[70vh] overflow-hidden bg-amber-600">
        {/* Perfect Image size 480 height and 1300 width */}
        <img
          className="w-full min-h-full object-cover "
          src={homeBannerImage}
          alt="home banner"
        />

        <div className="bannerContainer">
          <div className="bannerWrap">
            <h2 className="bannerHeader">Barishal Gadget Store</h2>
            <p className="bannerText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              unde fuga vero veritatis necessitatibus, obcaecati autem provident
              blanditiis animi, quibusdam quod consequatur tempora officiis nam?
            </p>
          </div>
        </div>
      </section>

      {/* latest Product section */}
      <section className="latestProducts">
        <div className="sectionContainer border-b-2 border-[#00000019] pb-14">
          <h3 className="text-2xl sm:text-4xl md:text-5xl text-center my-6 sm:my-12 font-[500]">
            Latest Product
          </h3>

          <div className="singleProductContainer grid mb-6 justify-evenly ">
            {newProduct.map((product) => (
              <NewSingleProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* inventory item  */}
      <section>
        <div className="sectionContainer">
          <h3 className="text-2xl sm:text-4xl md:text-5xl text-center my-6 sm:my-12 font-[500]">
            Inventory Product
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 ">
            {inventory.map((item) => (
              <InventorySingleItem key={item?._id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Product section */}
      <section>
        <div className="sectionContainer  border-b-2 border-[#00000019] ">
          <h3 className="text-2xl sm:text-4xl md:text-5xl text-center my-6 sm:my-12 font-[500]">
            Trending Product
          </h3>

          <div className="grid grid-cols-3 gap-6 my-12 border-b-2 border-[#00000019] pb-14 mb-52">
            {trending.map((pd) => (
              <TrendingSinglePd key={pd._id} product={pd} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
