import React from 'react'
import BannerImages from './BannerImages'
import './Home.css'
import Product from './Product'

function Home() {
    
 

    return (
        <div className="home">
            <div className="home__container">
                <BannerImages />
                {/* <img className="home__image" src=" https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" alt="" /> */}

                {/* 
                https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg
               https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg 
                 <img onload="window.uet &amp;&amp; uet.call &amp;&amp; uet(&quot;af&quot;) &amp;&amp; uet(&quot;cf&quot;);" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350.gif" alt="Header banner"/>
                */}

                <div className="home__row">
                   
                        <Product id="12234" title='The Lean Start UP' price={28.36} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} />
                 
                    <Product id="54654" title='AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display' price={28.36} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' rating={4} />

                </div>
                <div className="home__row">
                    <Product id="56" title='Electronics' price={28.36} image='https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg' rating={5} />
                    <Product id="54" title='Video Games' price={28.36} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg' rating={2} />
                    <Product id="234" title='Baby' price={28.36} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg' rating={1} />
                    <Product id="456" title='Toys & Games' price={28.36} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg' rating={2} />

                </div>

                <div className="home__row">
                    <Product id="34523" title='Work from home essentials' price={28.36} image='https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350.gif' rating={3} />


                </div>
            </div>

        </div>
    )
}

export default Home
