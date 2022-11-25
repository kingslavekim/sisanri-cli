import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

import small_banner from "../../../image/mobile_banner.jpg";
import home from "../../../image/home.png";
import division from "../../../image/division.png";
import use_guide from "../../../image/use_guide.png";

function MUseGuidePage(props) {
    useEffect(() => {
        return {}
    }, [])

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', flexDirection: 'column', width: '90%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', flexDirection: 'row', width: '100%', border: '2px solid black', background: '#FFE9B7' }}>
                    <Box style={{ width: '50%' }}>
                        <Link className={"mobile_down_menu1"} to="/MUseGuidePage">이용안내</Link>
                    </Box>
                    <Box style={{ width: '50%' }}>
                        <Link className={"mobile_down_menu2"} to="/MUseFeePage">이용요금</Link>
                    </Box>
                </Box>
                <Box style={{ width: '100%', margin: '15px 0px 0px 0px' }}>
                    <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                        <Box className={"mobile_main_header_text"}>이용안내</Box>
                        <Box className={"main_header_path_text"}>
                            <img src={home}  alt="home"/>
                            <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 이용안내 > 이용안내</Box>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '20px 0px 0px 0px' }}>
                        <Box style={{ display: 'flex', flexDirection: 'row'}}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>이용대상</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box>
                                * 시산리에서 5년 이상 거주자에 한하여 시산리 마을에 일정한 봉사한 사람으로서 시산리아리랑공동체 운영위원회에서 심사를 통과한 사람으로 다음 각호에 해당하는 분
                            </Box>
                            <Box style={{ padding: '10px 0px 0px 20px' }}>
                                • 장기요양등급을 받으신 어르신
                            </Box>
                            <Box style={{ padding: '0px 0px 0px 20px' }}>
                                • 외상 또는 기타 질환으로 보호가 필요한 어르신
                            </Box>
                            <Box style={{ padding: '0px 0px 0px 20px' }}>
                                • 등급을 받지 못했어도 독거 어르신으로 또는 운영위에서 보호가 필요하다고 판단한 어르신
                            </Box>
                        </Box>

                        <Box className={"use_guide_page_main_row3"}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>제외대상</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box>
                                • 정신질환이나 전염성 질환을 앓고 계신 분
                            </Box>
                            <Box>
                                • 현저히 센터 분위기를 흐리거나 방해가 된다고 판단되는 분
                            </Box>
                        </Box>

                        <Box className={"use_guide_page_main_row3"}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>구비서류</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box>
                                • 장기요양인정서, 표준 장기요양 이용계획서
                            </Box>
                            <Box>
                                • 건강보함증, 의사소견서, 약처방전(해당어르신)
                            </Box>
                            <Box>
                                • 주민등록등본 (어르신 보호자 각 1 통)
                            </Box>
                            <Box>
                                • 건강검진 자료
                            </Box>
                            <Box>
                                • 의료급여 또는 기초생활 수급 증명서
                            </Box>
                        </Box>

                        <Box className={"use_guide_page_main_row3"}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>이용절차</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box>
                                <img style={{ padding: '10px 0px 10px 0px', width: '97%' }} src={use_guide}  alt="use_guide"/>
                            </Box>
                        </Box>
                        
                        <Box className={"use_guide_page_main_row3"}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>입소 시 준비물</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box>
                                • 상담사와 상의 후 준비
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MUseGuidePage;
