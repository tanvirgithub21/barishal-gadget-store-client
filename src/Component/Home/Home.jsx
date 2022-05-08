import React from 'react';
import "./Home.css"

const Home = () => {

    // const homeBannerImage = "https://i.ibb.co/SrtgS5s/59356696-131018791330797-1345272259203301376-n.jpg";
    const homeBannerImage = "https://media.nedigital.sg/fairprice/images/d73e902e-c047-4bf2-84cc-c21da7d21326/MP-GadgetsLand-LandingBanner-Feb2021.jpg";


    return (
        <div>
            <div className="homeBanner relative w-full h-[45vh] md:h-[70vh] overflow-hidden bg-amber-600">

                {/* Perfect Image size 480 height and 1300 width */}
                <img className='w-full min-h-full object-cover ' src={homeBannerImage} alt="home banner" />

                <div className='bannerContainer'>
                    <div className="bannerWrap">
                        <h2 className='bannerHeader'>Barishal Gadget Store</h2>
                        <p className='bannerText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde fuga vero veritatis necessitatibus, obcaecati autem provident blanditiis animi, quibusdam quod consequatur tempora officiis nam?</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;