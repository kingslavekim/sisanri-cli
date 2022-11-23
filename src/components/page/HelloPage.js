import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

import small_banner from "../../image/small_banner.jpg";
import home from "../../image/home.png";

function HelloPage(props) {
    useEffect(() => {
        return {}
    }, [])

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
                        <Box className={"main_header_text"}>인사말</Box>
                        <Box className={"main_header_path_text"}>
                            <img src={home}  alt="home"/>
                            <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 센터소개 > 인사말</Box>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'column', width: '85%', margin: '20px 0px 0px 0px' }}>
                        <Box className={"hello_page_main_text1"}>안녕하십니까? 시산리아리랑 공동체 돌봄센터를 방문해주신 여러분을 진심으로 환영합니다.</Box>
                        <Box className={"hello_page_main_text2"}>저희 시산리 아리랑동봄센터는 다 아시다비피 농촌 인구가 고령화 사회로 접어들면서 요양시설을 이용하는</Box>
                        <Box className={"hello_page_main_text2"}>사례가 느는 데 비해 타지역 요양시설로 갈 경우 느끼는 외로움과 낯설음이 심하여 삶의 질이 떨어지는 경우가 허다합니다.</Box>
                        <Box className={"hello_page_main_text2"}>그래서 마을 어르신들은 마을 사람이 스스로 돌보는 돌봄시스템을 구축하였습니다.</Box>
                        <Box className={"hello_page_main_text2"}>우리가 완성하고자 하는 시스템은 노인 커뮤니티 공간, 독거노인 주거공간, 공동홈 공간, 주간보호센터, </Box>
                        <Box className={"hello_page_main_text2"}>노인요양원을 지어 어르신들의 취미공간은 물론 보호가 필요한 시점부터 돌아가실 때까지 마을에서 돌보고자 하는 것이 꿈입니다. </Box>
                        <Box className={"hello_page_main_text2"}>그러나 재정의 한계로 현재는 주간 보호센터와 커뮤니티 공간만을 준비했습니다. 커뮤니티 공간은 어르신들의 공동 홈 공간이나,</Box>
                        <Box className={"hello_page_main_text2"}>취미 공간으로 활용하고 있습니다. 또한 주간보호센터 공간에서는 보호가 필요한 어르신들을 모시고 즐거운 프로그램을 운영하게 됩니다.</Box>
                        <Box className={"hello_page_main_text2"}>우리마을 돌봄 센터는 돌봄 전문인력인 사회복지사, 간호조무사, 요양보호사, 프로그램 강사 등 모든 인원이 마을 분들로 구성되어 있어</Box>
                        <Box className={"hello_page_main_text2"}>어르신들이 편안함을 느끼실 겁니다.</Box>
                        <Box className={"hello_page_main_text2"}>최선을 다 하고 있습니다.</Box>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', width: '85%', margin: '20px 0px 0px 0px' }}>
                        <Box className={"hello_page_main_text1"}>시산리아리랑 돌봄공동체 대표</Box>
                        <Box className={"hello_page_main_text3"}>강 희 진</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HelloPage;
