import React, { useEffect, useState } from "react";
import Loading from "../NavBar/Loading/Loading";
import NewSingleProduct from "../NewSingleProduct/NewSingleProduct";
import TrendingSinglePd from "../TrendingSinglePd/TrendingSinglePd";
import "./Home.css";

const Home = () => {
//   const homeBannerImage = "https://i.ibb.co/SrtgS5s/59356696-131018791330797-1345272259203301376-n.jpg";
  const homeBannerImage =
    "https://media.nedigital.sg/fairprice/images/d73e902e-c047-4bf2-84cc-c21da7d21326/MP-GadgetsLand-LandingBanner-Feb2021.jpg";

  const [latestProducts, setLatestProduct] = useState([]);
  const [trendingProducts, setTrendingProduct] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/latast-product.json"
    )
      .then((res) => res.json())
      .then((data) => setLatestProduct(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/trendingPd.json"
    )
      .then((res) => res.json())
      .then((data) => setTrendingProduct(data));
  }, []);

  return (
    <div>
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
        <div className="sectionContainer">
          <h3 className="SectionHeader">Latest Product</h3>

          <div className="singleProductContainer grid mb-6">
            {latestProducts.map((product) => (
              <NewSingleProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Product section */}
      <section>
        <div className="sectionContainer">
          <h3 className="SectionHeader">Trending Product</h3>

          <div className="trendingPdBox grid grid-cols-3 gap-6 my-12">
            {trendingProducts.map((pd) => (
              <TrendingSinglePd key={pd._id} product={pd} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
