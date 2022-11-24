import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

import small_banner from "../../../image/small_banner.jpg";
import home from "../../../image/home.png";
import division from "../../../image/division.png";
import volunteer_guide from "../../../image/volunteer_guide.png";

function MVolunteerPage(props) {
    useEffect(() => {
        return {}
    }, [])

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                    <Box className={"mobile_main_header_text"}>봉사지원</Box>
                    <Box className={"main_header_path_text"}>
                        <img src={home}  alt="home"/>
                        <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 봉사지원</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '90%', justifyContent: 'space-between', margin: '20px 0px 0px 0px' }}>
                <Box style={{ width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'row'}}>
                        <img style={{width: '21px'}} src={division}  alt="division"/>
                        <Box className={"volunteer_page_main_row1"}>참여방법</Box>
                    </Box>
                    <Box className={"volunteer_page_main_row2"}>
                        <Box>
                            <img style={{ padding: '10px 0px 10px 0px', width: '340px' }} src={volunteer_guide}  alt="volunteer_guide"/>
                        </Box>
                    </Box>

                    <Box className={"use_guide_page_main_row3"}>
                        <img style={{width: '21px'}} src={division}  alt="division"/>
                        <Box className={"volunteer_page_main_row1"}>참여대상</Box>
                    </Box>
                    <Box className={"volunteer_page_main_row2"}>
                        <Box>
                            • 고등학생, 대학생, 지역사회주민 등
                        </Box>
                    </Box>

                    <Box className={"use_guide_page_main_row3"}>
                        <img style={{width: '21px'}} src={division}  alt="division"/>
                        <Box className={"volunteer_page_main_row1"}>봉사지원 종류</Box>
                    </Box>
                    <Box className={"volunteer_page_main_row2"}>
                        <Box style={{width: '340px'}}>
                            <TableContainer style={{display: 'flex', justifyContent: 'center', padding: '10px 0px 15px 0px'}}>
                                <Table>
                                    <TableHead style={{background: 'white'}}>
                                        <TableRow>
                                            <TableCell colSpan={2} align="center" style={{ width: '40%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>봉사구분</TableCell>
                                            <TableCell align="center" style={{ width: '60%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>봉사활동 내용</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody style={{background: 'white'}}>
                                        <TableRow>
                                            <TableCell rowSpan={4} align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>일반구분</TableCell>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>어르신 생활 도움</TableCell>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>산책, 말벗, 책 읽어 드리기, 나들이 동행 등</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>노력봉사</TableCell>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>센터 내 환경개션 활동</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>프로그램 진행 도움</TableCell>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>프로그램 참여 어르신 이동 및 활동보조</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>행정도움</TableCell>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>행정지원</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={2} rowSpan={4} align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>전문봉사</TableCell>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>미용 서비스</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>재능봉사(음악, 무용 등 공연)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>아로마테라피, 수지침, 손/발 마사지, 경락마사지 등</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ fontSize: '12px', padding: '5px 5px 5px 15px', border: '1px solid black' }}>프로그램 진행(미술, 종이공예, 웃음치료 등)</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box>
                            • 지원봉사는 정기적/비정기적 활동 모두 가능
                        </Box>
                        <Box>
                            • 활동일 : 월~금(평일) 09:00 ~ 18:00 사이
                        </Box>
                    </Box>

                    <Box className={"use_guide_page_main_row3"}>
                        <img style={{width: '21px'}} src={division}  alt="division"/>
                        <Box className={"volunteer_page_main_row1"}>봉사지원 문의</Box>
                    </Box>
                    <Box className={"volunteer_page_main_row2"}>
                        <Box>
                            • 041-333-2022
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MVolunteerPage;
