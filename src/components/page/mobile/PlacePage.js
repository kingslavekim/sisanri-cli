import React, {useEffect} from 'react';
import Box from "@mui/material/Box";

import small_banner from "../../../image/small_banner.jpg";
import home from "../../../image/home.png";
import division from "../../../image/division.png";

import place1 from "../../../image/place/place1.jpg";
import place2 from "../../../image/place/place2.jpg";
import place4 from "../../../image/place/place4.jpg";
import place5 from "../../../image/place/place5.jpg";
import place6 from "../../../image/place/place6.jpg";
import place7 from "../../../image/place/place7.jpg";
import place8 from "../../../image/place/place8.jpg";
import place9 from "../../../image/place/place9.jpg";

function MPlacePage(props) {
    useEffect(() => {
        return {}
    }, [])

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black' }}>
                    <Box className={ "mobile_main_header_text" }>시설안내</Box>
                    <Box className={ "main_header_path_text" }>
                        <img src={home}  alt="home"/>
                        <Box style={{ fontSize: '14px', margin: '0px 0px 3px 10px' }}>Home > 시설안내</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '90%', justifyContent: 'space-between', margin: '20px 0px 0px 0px' }}>
                <Box style={{ width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <img style={{ width: '21px' }} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>치유텃밭</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row4" }>
                        <img className={ "mobile_place_page_main_row5" } src={place1}  alt="place1"/>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            어르신들의 치유를 위하여 조성한 텃밭
                        </Box>
                        <Box>
                            각종 허브와 국화꽃을 조성하여 스스로 키워보고 가꿀 수 있는 텃밭으로 조성하였다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px' }} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>프로그램실</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row4" }>
                        <img className={ "mobile_place_page_main_row5" } src={place2}  alt="place2"/>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            어르신들의 인지활동이나 몸운동을 위한 프로그램공간이다.
                        </Box>
                        <Box>
                            이곳은 바닥에 앉아있거나 소파에 앉을 수 있게 편리한 공간으로 만들었다.
                        </Box>
                        <Box>
                            각기 사물함을 만들어 자신의 물건을 두고 다닐 수 있돌혹 했다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px' }} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>휴게방</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            어르신들이 휴식이 필요하거나 오침이 필요할 때 쉬는 공간으로 온돌과 침대로 구성하였다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px' }} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>목욕실</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row4" }>
                        <img className={ "mobile_place_page_main_row7" } src={place4}  alt="place4"/>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            남녀 구분을 확실히 해 불편함이 없도록 했으며, 공간을 넓게 확보하여 마음껏 씻을 수 있도록 만들었다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px' }} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>화장실</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row4" }>
                        <img className={ "mobile_place_page_main_row5" } src={place5}  alt="place5"/>
                        <img className={ "mobile_place_page_main_row5" } src={place6}  alt="place6"/>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            최대한 쾌적하게 만들어 불편함이 없도록 했다.
                        </Box>
                        <Box>
                            장애인 등 몸이 불편한 분을 위해 편의 시설을 도입했다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px'}} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>세탁실</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            어르신들 생활에 불편함이 없도록 넓고 깨끗한 공간을 조성하였다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px'}} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>조리실</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row4" }>
                        <img className={ "mobile_place_page_main_row5" } src={place9}  alt="place9"/>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            어르신들의 위생을 책임지는 곳이니 만큼 깨끗한 환경을 조성하였다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px'}} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>커뮤니티 공간</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row4" }>
                        <img className={ "mobile_place_page_main_row5" } src={place7}  alt="place7"/>
                    </Box>
                    <Box className={ "mobile_place_page_main_row3" }>
                        <Box>
                            시설에 들어오지 않은 마을 어르신들의 공간을 조성하여 돌봄 역량강화 뿐 아니라 상호 유대감을 갖기 위해 만든 공간이다.
                        </Box>
                        <Box>
                            추억의 영화 상영도 이곳에서 한다.
                        </Box>
                    </Box>

                    <Box className={ "place_page_main_row1" }>
                        <img style={{ width: '21px'}} src={division}  alt="division"/>
                        <Box className={ "place_page_main_row2" }>돌봄센터 전경</Box>
                    </Box>
                    <Box className={ "mobile_place_page_main_row4" }>
                        <img className={ "mobile_place_page_main_row5" } src={place8}  alt="place8"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MPlacePage;
