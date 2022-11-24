import React, {useEffect, useRef} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

import small_banner from "../../../image/small_banner.jpg";
import home from "../../../image/home.png";
import map from "../../../image/map.png";

function MapPage(props) {
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(36.669586564966856,126.88204629241676);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map: map,
        });
    }, []);

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>
            <Box style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                <Box style={{ width: '15%' }}>
                    <Box className={"left_top_menu"}>센터소개</Box>
                    <Box>
                        <Link className={"left_down_menu"} to="/HelloPage">인사말</Link>
                    </Box>
                    <Box>
                        <Link className={"left_down_menu"} to="/HistoryPage">연혁</Link>
                    </Box>
                    <Box>
                        <Link className={"left_down_menu"} to="/MapPage">오시는 길</Link>
                    </Box>
                </Box>
                <Box style={{ width: '80%'}}>
                    <Box style={{ display: 'flex', width: '85%', borderBottom: '2px solid black'}}>
                        <Box className={"main_header_text"}>오시는 길</Box>
                        <Box className={"main_header_path_text"}>
                            <img src={home}  alt="home"/>
                            <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 센터소개 > 오시는 길</Box>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'column', width: '85%', margin: '20px 0px 0px 0px' }}>
                        <Box ref={mapElement} style={{ minHeight: '350px' }}></Box>

                        <Box style={{ display: 'flex', alignItems: 'center', margin: '20px 0px 0px 0px' }}>
                            <img src={map} style={{ width: '45px' }} alt="map"/>
                            <Box style={{ padding: '0px 0px 0px 10px', fontSize: '16px', fontWeight: 'bolder'}}>충청남도 예산군 대술면 시산동길 68</Box>
                        </Box>

                        <Box style={{ display: 'flex', flexDirection: 'column', margin: '10px 0px 0px 0px', padding: '10px 0px 10px 20px', background: '#D9D9D9', borderRadius: '8px', fontSize: '14px' }}>
                            <Box>
                                • 여기가 내 고향이다.
                            </Box>
                            <Box>
                                • 시산리 마을 회관  윗쪽 멋있는 건물
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MapPage;
