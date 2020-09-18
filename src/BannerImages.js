import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import './BannerImages.css'
function BannerImages() {
    var items = [
        {
            url: 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg',
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            url: ' https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            url: ' https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg ',
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1x_Echo_Dot._CB428276184_.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/ApparelGW/ATF/U599/Sep/New/2._CB406825212_.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            url: 'https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Kitchen/XCM_Manual_ORIGIN_1263721_1345029_IN_in_sa_cookingdays_hero_in_en_3351137_1500x600_1X_en_IN._CB405351879_.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/OP/SFH/GW/D15593517_IN_OP_BTS_Mar20_1500x600_2._CB429786287_.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}
function Item(props) {
    return (
        <Paper>
            <img className="home__image" src={props.item.url} alt="" />
            <div className="banner__items">

                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
                <button >View Deals</button>
            </div>
        </Paper>
    )
}
export default BannerImages
