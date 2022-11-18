import Box from "@mui/material/Box";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../css/Paging.css'

const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplay: true,
    autoplayspeed: 3000,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: (
        <img src="/uploads/space_right_arrow.png" alt="space_right_arrow"/>
    ),
    prevArrow: (
        <img src="/uploads/space_left_arrow.png" alt="space_left_arrow"/>
    ),

};

function ImageSlider() {
    return (
        <Box style={{ width: '100%' }}>
            <Slider {...settings}>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place1.jpg" alt="1"/>
                    </h3>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place2.jpg" alt="2"/>
                    </h3>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place4.jpg" alt="4"/>
                    </h3>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place5.jpg" alt="5"/>
                    </h3>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place6.jpg" alt="6"/>
                    </h3>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place7.jpg" alt="7"/>
                    </h3>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place8.jpg" alt="8"/>
                    </h3>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '580px', maxHeight: '300px' }} src="/uploads/place9.jpg" alt="9"/>
                    </h3>
                </Box>
            </Slider>
        </Box>
    );
}

export default ImageSlider;
