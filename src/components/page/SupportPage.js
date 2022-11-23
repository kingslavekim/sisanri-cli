import React, {useEffect} from 'react';
import Box from "@mui/material/Box";

import small_banner from "../../image/small_banner.jpg";
import home from "../../image/home.png";
import division from "../../image/division.png";

function SupportPage(props) {
    useEffect(() => {
        return {}
    }, [])

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                    <Box className={"main_header_text"}>봉사지원</Box>
                    <Box className={"main_header_path_text"}>
                        <img src={home}  alt="home"/>
                        <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 봉사지원</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between', margin: '20px 0px 0px 0px' }}>
                <Box style={{ width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'row'}}>
                        <img style={{width: '21px'}} src={division}  alt="division"/>
                        <Box className={"volunteer_page_main_row1"}>후원종류</Box>
                    </Box>
                    <Box className={"volunteer_page_main_row2"}>
                        <Box>
                            • 기금후원 : 직접 방문 또는 이체 등의 방법으로 후원이 가능합니다.
                        </Box>
                        <Box style={{ padding: '0px 0px 0px 77px' }}>
                            후원금은 어르신들께 필요한 물품 구입, 프로그램 운영에 사용됩니다.
                        </Box>
                        <Box style={{ padding: '10px 0px 0px 0px' }}>
                            • 물품후원 : 어르신들의 생활에 도움이 되는 각종 물품으로 후원을 하실 수 있습니다.
                        </Box>
                        <Box style={{ padding: '0px 0px 0px 77px' }}>
                            후원해 주시는 물품은 어르신들을 위해 사용됩니다.
                        </Box>
                    </Box>

                    <Box className={"use_guide_page_main_row3"}>
                        <img style={{width: '21px'}} src={division}  alt="division"/>
                        <Box className={"volunteer_page_main_row1"}>후원방법</Box>
                    </Box>
                    <Box className={"volunteer_page_main_row2"}>
                        <Box>
                            • 온라인 입금 : 은행계좌안내 (농협은행 351-1251-7793-13 예금주:시산리아리랑공동체)
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SupportPage;
