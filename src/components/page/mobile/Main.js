import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import moment from "moment";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import axios from "axios";
import '../../../css/Paging.css'

import banner from "../../../image/banner.jpg";
import plus from "../../../image/plus.png";
import image1 from "../../../image/image1.png";
import image2 from "../../../image/image2.png";
import ImageSliderMobile from "../../common/ImageSliderMobile";

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
                <img style={{ width: '100%' }} src={banner}  alt="banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                <Box style={{ width: '45%', border: '2px solid #ACACAC' }}>
                    <img style={{ width: '100%' }} src={image1}  alt="image1"/>
                </Box>

                <Box style={{ width: '45%', border: '2px solid #ACACAC' }}>
                    <Link to="/MMapPage">
                        <img style={{ width: '100%', cursor: 'pointer' }} src={image2} alt="image2"/>
                    </Link>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '90%', margin: '30px 0px 0px 0px' }}>
                <Box style={{ width: '100%', border: '2px solid #ACACAC' }}>
                    <Box style={{ display:'flex', alignItems: 'center', height: '15%', borderBottom: '2px solid #ACACAC' }}>
                        <Box style={{ width: '80%' }}>
                            <Typography style={{ paddingLeft: '20px', fontSize: '16px', fontWeight: 'bolder' }}>공지사항</Typography>
                        </Box>
                        <Box style={{ display:'flex', justifyContent: 'flex-end', width: '20%', padding: '3px 20px 0px 0px' }}>
                            <Link to="/MNoticePage">
                                <img style={{cursor: 'pointer'}} src={plus}  alt="plus"/>
                            </Link>
                        </Box>
                    </Box>

                    <Box style={{ display:'flex', alignItems: 'center' }}>
                        <TableContainer style={{display: 'flex', justifyContent: 'center'}}>
                            <Table style={{width: '100%'}}>
                                <TableBody id={"main_search_table_body"}>
                                    {
                                        mainData.noticeList.map((notice, index) => {
                                            if (notice.title === undefined) {
                                                return (
                                                    <TableRow key={index}
                                                              id={"main_search_table_row_" + index}>
                                                        <TableCell id={"main_search_table_row_no_" + index} align="center"style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%', padding: '6px', border: 'none' }}></TableCell>
                                                        <TableCell id={"main_search_table_row_title_" + index} style={{display: 'flex', width: '50%', padding: '6px', border: 'none' }}></TableCell>
                                                        <TableCell id={"main_search_table_row_createdAt_" + index} align="center" style={{display: 'flex', justifyContent: 'center', width: '30%', padding: '6px', border: 'none' }}></TableCell>
                                                    </TableRow>
                                                )
                                            } else {
                                                return (
                                                    <TableRow key={index}
                                                              id={"main_search_table_row_" + index}
                                                              style={{display: 'flex', cursor: 'pointer'}}
                                                              onMouseOver={ (e) => { onMouseRow(index) }}
                                                              onMouseOut={ (e) => { onMouseOutRow(index) }}>
                                                        <TableCell id={"main_search_table_row_no_" + index} align="center"style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%', padding: '6px', border: 'none' }}>[공지]</TableCell>
                                                        <TableCell id={"main_search_table_row_title_" + index} style={{display: 'flex', width: '50%', padding: '6px', border: 'none' }}>
                                                            <Link to={"/NoticeDetailPage?no=" + notice.no} className={"main_link_row"}>
                                                                {notice.title}
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell id={"main_search_table_row_createdAt_" + index} align="center" style={{display: 'flex', justifyContent: 'center', width: '30%', padding: '6px', border: 'none' }}>{moment(new Date(notice.createdAt)).format("YYYY-MM-DD")}</TableCell>
                                                    </TableRow>
                                                )
                                            }
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '90%', flexDirection: 'column', alignItems: 'center', margin: '30px 0px 0px 0px' }}>
                <Box style={{ fontSize: '20px', fontWeight: 'bolder', margin: '0px 0px 10px 0px' }}>
                    시산리아리랑 돌봄공동체 갤러리
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px', fontWeight: '600', margin: '0px 0px 20px 0px' }}>
                    <Box>어르신의 편안하고 즐거운 노후를 위하여</Box>
                    <Box>정성을 다해 모시겠습니다.</Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '80%', justifyContent: 'center' }}>
                <ImageSliderMobile/>
            </Box>
        </Box>
    );
}

export default Main;
