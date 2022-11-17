import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import moment from "moment";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import axios from "axios";
import '../../css/Paging.css'

import banner from "../../image/banner.png";
import plus from "../../image/plus.png";
// import right_arrow from "../../image/right_arrow.png";
// import left_arrow from "../../image/left_arrow.png";
import space_right_arrow from "../../image/space_right_arrow.png";
import space_left_arrow from "../../image/space_left_arrow.png";
import image1 from "../../image/image1.png";
import image2 from "../../image/image2.png";

import test1 from "../../image/test/test1.png";
import test2 from "../../image/test/test2.png";
import test3 from "../../image/test/test3.png";
import test4 from "../../image/test/test4.png";

function Main() {
    const [noticeList, setNoticeList] = useState([]);
    const [size] = useState({start: 0, end: 5});

    function onMouseRow(index) {
        document.getElementById('main_search_table_row_' + index).style.backgroundColor = '#C4C4C4';
    }

    function onMouseOutRow(index) {
        document.getElementById('main_search_table_row_' + index).style.backgroundColor = 'white';
    }

    useEffect(() => {
        axios.get('/api/getMainNoticeList', {params: {size: size}}).then(value => {
            setNoticeList(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        return {}
    }, [])

    const mainData: any = {};
    mainData.noticeList = noticeList;

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 30px 0px' }}>
                <img style={{width: '100%'}} src={banner}  alt="banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '60%', justifyContent: 'space-between' }}>
                <Box style={{ width: '20%', border: '2px solid #ACACAC' }}>
                    <img style={{width: '100%'}} src={image1}  alt="image1"/>
                </Box>

                <Box style={{ width: '20%', border: '2px solid #ACACAC' }}>
                    <Link to="/MapPage">
                        <img style={{width: '100%', cursor: 'pointer'}} src={image2} alt="image2"/>
                    </Link>
                </Box>

                <Box style={{ width: '50%', border: '2px solid #ACACAC' }}>
                    <Box style={{ display:'flex', alignItems: 'center', height: '15%', borderBottom: '2px solid #ACACAC' }}>
                        <Box style={{ width: '80%' }}>
                            <Typography style={{ paddingLeft: '20px', fontSize: '16px', fontWeight: 'bolder' }}>공지사항</Typography>
                        </Box>
                        <Box style={{ display:'flex', justifyContent: 'flex-end', width: '20%', padding: '3px 20px 0px 0px' }}>
                            <Link to="/NoticePage">
                                <img style={{cursor: 'pointer'}} src={plus}  alt="plus"/>
                            </Link>
                        </Box>
                    </Box>

                    <Box style={{ display:'flex', alignItems: 'center', height: '85%' }}>
                        <TableContainer style={{display: 'flex', justifyContent: 'center'}}>
                            <Table style={{width: '100%'}}>
                                <TableBody id={"main_search_table_body"}>
                                    {
                                        mainData.noticeList.map((notice, index) => {
                                            if (notice.title === undefined) {
                                                return (
                                                    <TableRow key={index}
                                                              id={"main_search_table_row_" + index}>
                                                        <TableCell id={"main_search_table_row_no_" + index} align="center"style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', padding: '6px', border: 'none' }}></TableCell>
                                                        <TableCell id={"main_search_table_row_title_" + index} style={{display: 'flex', width: '70%', padding: '6px', border: 'none' }}></TableCell>
                                                        <TableCell id={"main_search_table_row_createdAt_" + index} align="center" style={{display: 'flex', justifyContent: 'center', width: '20%', padding: '6px', border: 'none' }}></TableCell>
                                                    </TableRow>
                                                )
                                            } else {
                                                return (
                                                    <TableRow key={index}
                                                              id={"main_search_table_row_" + index}
                                                              style={{display: 'flex', cursor: 'pointer'}}
                                                              onMouseOver={ (e) => { onMouseRow(index) }}
                                                              onMouseOut={ (e) => { onMouseOutRow(index) }}>
                                                        <TableCell id={"main_search_table_row_no_" + index} align="center"style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', padding: '6px', border: 'none' }}>[공지]</TableCell>
                                                        <TableCell id={"main_search_table_row_title_" + index} style={{display: 'flex', width: '70%', padding: '6px', border: 'none' }}>
                                                            <Link to={"/NoticeDetailPage?no=" + notice.no} className={"main_link_row"}>
                                                                {notice.title}
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell id={"main_search_table_row_createdAt_" + index} align="center" style={{display: 'flex', justifyContent: 'center', width: '20%', padding: '6px', border: 'none' }}>{moment(new Date(notice.createdAt)).format("YYYY-MM-DD")}</TableCell>
                                                    </TableRow>
                                                )
                                            }
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {/*<Box style={{ display:'flex', alignItems: 'center', height: '85%' }}>*/}
                    {/*    <TableContainer style={{display: 'flex', justifyContent: 'center'}}>*/}
                    {/*        <Table>*/}
                    {/*            <TableBody id={"main_table_body"}>*/}
                    {/*                <TableRow style={{display: 'flex', cursor: 'pointer'}}>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', padding: '12px', border: 'none', fontWeight: 'bolder' }}>[공지]</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', width: '70%', padding: '12px', border: 'none' }}>시산리 아리랑 돌봄공동체 공지사항1</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', width: '20%', padding: '12px', border: 'none' }}>0000-00-00</TableCell>*/}
                    {/*                </TableRow>*/}
                    {/*                <TableRow style={{display: 'flex', cursor: 'pointer'}}>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', padding: '12px', border: 'none', fontWeight: 'bolder' }}>[공지]</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', width: '70%', padding: '12px', border: 'none' }}>시산리 아리랑 돌봄공동체 공지사항2</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', width: '20%', padding: '12px', border: 'none' }}>0000-00-00</TableCell>*/}
                    {/*                </TableRow>*/}
                    {/*                <TableRow style={{display: 'flex', cursor: 'pointer'}}>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', padding: '12px', border: 'none', fontWeight: 'bolder' }}>[공지]</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', width: '70%', padding: '12px', border: 'none' }}>시산리 아리랑 돌봄공동체 공지사항3</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', width: '20%', padding: '12px', border: 'none' }}>0000-00-00</TableCell>*/}
                    {/*                </TableRow>*/}
                    {/*                <TableRow style={{display: 'flex', cursor: 'pointer'}}>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', padding: '12px', border: 'none', fontWeight: 'bolder' }}>[공지]</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', width: '70%', padding: '12px', border: 'none' }}>시산리 아리랑 돌봄공동체 공지사항4</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', width: '20%', padding: '12px', border: 'none' }}>0000-00-00</TableCell>*/}
                    {/*                </TableRow>*/}
                    {/*                <TableRow style={{display: 'flex', cursor: 'pointer'}}>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', padding: '12px', border: 'none', fontWeight: 'bolder' }}>[공지]</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', width: '70%', padding: '12px', border: 'none' }}>시산리 아리랑 돌봄공동체 공지사항5</TableCell>*/}
                    {/*                    <TableCell style={{display: 'flex', justifyContent: 'center', width: '20%', padding: '12px', border: 'none' }}>0000-00-00</TableCell>*/}
                    {/*                </TableRow>*/}
                    {/*            </TableBody>*/}
                    {/*        </Table>*/}
                    {/*    </TableContainer>*/}
                    {/*</Box>*/}
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '70%', flexDirection: 'column', alignItems: 'center', margin: '80px 0px 0px 0px' }}>
                <Box style={{ fontSize: '24px', fontWeight: 'bolder', margin: '0px 0px 10px 0px' }}>
                    시산리아리랑 돌봄공동체 갤러리
                </Box>
                <Box style={{ fontSize: '16px', fontWeight: '600', margin: '0px 0px 20px 0px' }}>
                    어르신의 편안하고 즐거운 노후를 위하여 정성을 다해 모시겠습니다.
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '70%', justifyContent: 'space-between', margin: '10px 0px 0px 0px' }}>
                <img style={{cursor: 'pointer'}} src={space_left_arrow}  alt="space_left_arrow"/>
                <img style={{cursor: 'pointer', width: '250px', border: '1px solid black'}} src={test1}  alt="test1"/>
                <img style={{cursor: 'pointer', width: '250px', border: '1px solid black'}} src={test2}  alt="test2"/>
                <img style={{cursor: 'pointer', width: '250px', border: '1px solid black'}} src={test3}  alt="test3"/>
                <img style={{cursor: 'pointer', width: '250px', border: '1px solid black'}} src={test4}  alt="test4"/>
                <img style={{cursor: 'pointer'}} src={space_right_arrow}  alt="space_right_arrow"/>
            </Box>

            {/*<Box style={{ display: 'flex', width: '70%', flexDirection: 'column', alignItems: 'center', margin: '80px 0px 0px 0px' }}>*/}
            {/*    <Box style={{ fontSize: '24px', fontWeight: 'bolder', margin: '0px 0px 10px 0px' }}>*/}
            {/*        아름다운 동행*/}
            {/*    </Box>*/}
            {/*</Box>*/}

            {/*<Box style={{ display: 'flex', width: '70%', justifyContent: 'space-between', margin: '10px 0px 0px 0px' }}>*/}
            {/*    <img style={{cursor: 'pointer'}} src={left_arrow}  alt="left_arrow"/>*/}
            {/*    <img style={{cursor: 'pointer', width: '160px', border: '1px solid black'}} src={test5}  alt="test5"/>*/}
            {/*    <img style={{cursor: 'pointer', width: '160px', border: '1px solid black'}} src={test6}  alt="test6"/>*/}
            {/*    <img style={{cursor: 'pointer', width: '160px', border: '1px solid black'}} src={test7}  alt="test7"/>*/}
            {/*    <img style={{cursor: 'pointer', width: '160px', border: '1px solid black'}} src={test8}  alt="test8"/>*/}
            {/*    <img style={{cursor: 'pointer', width: '160px', border: '1px solid black'}} src={test9}  alt="test9"/>*/}
            {/*    <img style={{cursor: 'pointer', width: '160px', border: '1px solid black'}} src={test10}  alt="test10"/>*/}
            {/*    <img style={{cursor: 'pointer'}} src={right_arrow}  alt="right_arrow"/>*/}
            {/*</Box>*/}
        </Box>
    );
}

export default Main;
