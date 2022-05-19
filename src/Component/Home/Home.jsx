import React, { useEffect, useState } from "react";
import InventorySingleItem from "../InventorySingleItem/InventorySingleItem";
import Loading from "../Loading/Loading";
import NewSingleProduct from "../NewSingleProduct/NewSingleProduct";
import TrendingSinglePd from "../TrendingSinglePd/TrendingSinglePd";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import "./Home.css";

const Home = () => {

  //loading tiger
  const [loading, setLoading] = useState(true);

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
    // setLoading(false);
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
      .then((data) => {
        setInventoryItem(data);
        setLoading(false);
      });
  }, []);

  //inventory product slice
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const newPd = inventoryItem.slice(0, 6);

    setInventory(newPd);
  }, [inventoryItem]);

  return (
    <div className=" relative bg-[#f5feff]">
      {loading && <Loading />}

      {/* home banner section */}
      <section className="homeBanner w-full h-[50vh] md:h-[70vh] overflow-hidden">

        <div className="bannerContainer sectionContainer flex justify-end items-end h-full text-[#ffffff]">
          <ul className="flex text-[1.5rem] md:text-[2rem] mb-10 mr-8">
            <li className="mr-[3rem]">
              <a
                href="https://www.facebook.com/tanviruniquebd/"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </li>

            <li className="mr-[3rem]">
              <a
                href="https://www.instagram.com/tan_vir_ahmed___/"
                target="_blank"
              >
                <BsInstagram />
              </a>
            </li>

            <li className="">
              <a href="https://github.com/tanvirgithub21" target="_blank">
                <BsGithub />
              </a>
            </li>
          </ul>
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

          <div className="grid grid-cols-3 gap-6 my-6 sm:my-12 border-b-2 border-[#00000019] pb-14 mb-12 sm:mb-52">
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
