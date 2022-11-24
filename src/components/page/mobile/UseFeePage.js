import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

import small_banner from "../../../image/small_banner.jpg";
import home from "../../../image/home.png";
import division from "../../../image/division.png";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

function MUseFeePage(props) {
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
                            <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 이용안내 > 이용요금</Box>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '20px 0px 0px 0px' }}>
                        <Box style={{ display: 'flex', flexDirection: 'row'}}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>1일당 주야간보호 이용시간별 급여비용</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box style={{width: '340px'}}>
                                <TableContainer style={{display: 'flex', justifyContent: 'center', padding: '10px 0px 15px 0px'}}>
                                    <Table>
                                        <TableHead style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '25%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>이용시간</TableCell>
                                                <TableCell align="center" style={{ width: '25%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>등급</TableCell>
                                                <TableCell align="center" style={{ width: '25%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>2023년 수가</TableCell>
                                                <TableCell align="center" style={{ width: '25%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>2023년 본인부담금</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell rowSpan={4} align="center" style={{ fontSize: '14px', padding: '5px', border: '1px solid black' }}>8시간 이상</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>3등급</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>52,690</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>7,900</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>4등급</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>51,250</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>7,680</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>5등급</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>49,790</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>7,460</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>인지지원 등급</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>49,790</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>7,460</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>

                        <Box className={"use_guide_page_main_row3"}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>등급별 재가급여 월 한도액</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box style={{width: '32 0px'}}>
                                <TableContainer style={{display: 'flex', justifyContent: 'center', padding: '10px 0px 15px 0px'}}>
                                    <Table style={{ marginLeft: '70px'}}>
                                        <TableHead style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '0px', border: '1px solid black' }}>등급</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '0px', border: '1px solid black' }}>1등급</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '0px', border: '1px solid black' }}>2등급</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '0px', border: '1px solid black' }}>3등급</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '0px', border: '1px solid black' }}>4등급</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '0px', border: '1px solid black' }}>5등급</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '0px', border: '1px solid black' }}>인지지원등급</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>월 한도액(원)</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>1,672,700</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>1,486,800</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>1,350,800</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>1,244,900</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>1,068,500</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>597,600</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>

                        <Box className={"use_guide_page_main_row3"}>
                            <img style={{width: '21px', height: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>등급별 재가급여 월 한도액수급자 자격별 급여비용 본인일부부담 비율 및 비급여 비용</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box style={{width: '340px'}}>
                                <TableContainer style={{display: 'flex', justifyContent: 'center', padding: '10px 0px 15px 0px'}}>
                                    <Table>
                                        <TableHead style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '20%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>구분</TableCell>
                                                <TableCell align="center" style={{ width: '20%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>일반</TableCell>
                                                <TableCell align="center" style={{ width: '20%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>40% 감경대상자</TableCell>
                                                <TableCell align="center" style={{ width: '20%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>60% 감경대상자</TableCell>
                                                <TableCell align="center" style={{ width: '20%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>기초수급대상자</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>장기요양보험급여</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>85%</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>91%</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>94%</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>100%</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>본인부담금</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>15%</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>9%</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>6%</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>0%(무료)</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>비급여(식비)</TableCell>
                                                <TableCell colSpan={4} align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>중식 2,500원 / 간식 1,000원(1일 2회 제공) -> 총 비용 3,500원</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>

                        <Box className={"use_guide_page_main_row3"}>
                            <img style={{width: '21px'}} src={division}  alt="division"/>
                            <Box className={"use_guide_page_main_row1"}>20일 이용 시 예상 이용비용 (점심 이용 시)</Box>
                        </Box>

                        <Box className={"use_guide_page_main_row2"}>
                            <Box style={{width: '340px'}}>
                                <TableContainer style={{display: 'flex', justifyContent: 'center', padding: '10px 0px 15px 0px'}}>
                                    <Table style={{ marginLeft: '60px'}}>
                                        <TableHead style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '30%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>시간</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>등급</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>보험수가액</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>본인부담금(A)</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>식대(B)</TableCell>
                                                <TableCell align="center" style={{ width: '14%', fontSize: '12px', padding: '5px', border: '1px solid black' }}>총 납부액(A+B)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody style={{background: 'white'}}>
                                            <TableRow>
                                                <TableCell rowSpan={3} align="center" style={{ fontSize: '14px', padding: '5px', border: '1px solid black' }}>8시간이상 (예: 9:00 ~ 17:00)</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>3등급</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>52,690</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>7,900*20=158,000</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>3,500*20=70,000</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>228,000원</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>4등급</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>51,250</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>7,680*20=153,600</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>3,500*20=70,000</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>223,600원</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>5등급</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>49,790</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>7,460*20=149,200</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>3,500*20=70,000</TableCell>
                                                <TableCell align="center" style={{ fontSize: '12px', padding: '5px', border: '1px solid black' }}>219,200원</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MUseFeePage;
