import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

import small_banner from "../../../image/mobile_banner.jpg";
import home from "../../../image/home.png";

function MHistoryPage(props) {
    useEffect(() => {
        return {}
    }, [])

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 20px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '90%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', flexDirection: 'row', width: '100%', border: '2px solid black', background: '#FFE9B7' }}>
                    <Box style={{ width: '33%' }}>
                        <Link className={"mobile_down_menu1"} to="/MHelloPage">인사말</Link>
                    </Box>
                    <Box style={{ width: '33%' }}>
                        <Link className={"mobile_down_menu1"} to="/MHistoryPage">연혁</Link>
                    </Box>
                    <Box style={{ width: '33%' }}>
                        <Link className={"mobile_down_menu2"} to="/MMapPage">오시는 길</Link>
                    </Box>
                </Box>
                <Box style={{ width: '100%', margin: '15px 0px 0px 0px' }}>
                    <Box style={{ display: 'flex', borderBottom: '2px solid black'}}>
                        <Box className={"main_header_text"}>연혁</Box>
                        <Box className={"main_header_path_text"}>
                            <img src={home}  alt="home"/>
                            <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 센터소개 > 연혁</Box>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'column', margin: '10px 0px 0px 0px' }}>
                        <Box className={"mobile_history_page_main_row1"}>
                            2019
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box className={"mobile_history_page_main_row2"}>
                                <Box className={"mobile_history_page_main_row3"}>
                                    01 월
                                </Box>
                                <Box className={"mobile_history_page_main_row4"}>
                                    • 시산리 영농조합 이사회에서 마을 돌봄에 대한 논의
                                </Box>
                            </Box>
                        </Box>

                        <Box className={"mobile_history_page_main_row1"}>
                            2021
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box className={"mobile_history_page_main_row2"}>
                                <Box className={"mobile_history_page_main_row3"}>
                                    04 월
                                </Box>
                                <Box className={"mobile_history_page_main_row4"}>
                                    • 주민제안사업 공모
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box className={"mobile_history_page_main_row1"}>

                            </Box>
                            <Box className={"mobile_history_page_main_row2"}>
                                <Box className={"mobile_history_page_main_row3"}>
                                    11 월
                                </Box>
                                <Box className={"mobile_history_page_main_row4"}>
                                    <Box>
                                        • 시산리 아리랑 공동체 설립
                                    </Box>
                                    <Box>
                                        • 시산리영농조합 부지 돌봄센터 사용 결의
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={"mobile_history_page_main_row1"}>
                            2022
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box className={"mobile_history_page_main_row2"}>
                                <Box className={"mobile_history_page_main_row3"}>
                                    03 월
                                </Box>
                                <Box className={"mobile_history_page_main_row4"}>
                                    • 시산리 아리랑 공동체 돌봄센터 착공
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box className={"mobile_history_page_main_row1"}>

                            </Box>
                            <Box className={"mobile_history_page_main_row2"}>
                                <Box className={"mobile_history_page_main_row3"}>
                                    04 월
                                </Box>
                                <Box className={"mobile_history_page_main_row4"}>
                                    • 마을 회관에서 예비돌봄 시행
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box className={"mobile_history_page_main_row1"}>

                            </Box>
                            <Box className={"mobile_history_page_main_row2"}>
                                <Box className={"mobile_history_page_main_row3"}>
                                    08 월
                                </Box>
                                <Box className={"mobile_history_page_main_row4"}>
                                    • 시산리 아리랑 공동체 돌봄센터 준공
                                </Box>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Box className={"mobile_history_page_main_row1"}>

                            </Box>
                            <Box className={"mobile_history_page_main_row2"}>
                                <Box className={"mobile_history_page_main_row3"}>
                                    11 월
                                </Box>
                                <Box className={"mobile_history_page_main_row4"}>
                                    • 시산리아리랑 돌봄 주간 보호센터 설립
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MHistoryPage;
