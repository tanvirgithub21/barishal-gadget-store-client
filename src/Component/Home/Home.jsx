import React from 'react';
import "./Home.css"

const Home = () => {

    const homeBannerImage = "https://i.pinimg.com/originals/6c/43/26/6c43266c3cf6781cbf9bd6cde702a6f4.jpg";


    return (
        <div>
            <div className="homeBanner relative w-full h-[45vh] md:h-[65vh] overflow-hidden bg-amber-600">
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