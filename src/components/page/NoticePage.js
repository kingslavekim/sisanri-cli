import React, {useEffect, useState, useRef} from 'react';
import Box from "@mui/material/Box";
import {CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import moment from "moment";
import axios from "axios";
import Pagination from "react-js-pagination";

import small_banner from "../../image/small_banner.png";
import home from "../../image/home.png";

function NoticePage(props) {
    const [token, setToken] = useState(true);
    const [noticeList, setNoticeList] = useState([]);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState({start: 0, end: 20});
    const [page, setPage] = useState(1);

    const childRef = useRef();

    let addSize = 20;

    const handlePageChange = (page) => {
        size.start = page * addSize;
        size.end = addSize;
        setSize(size);
        setPage(page);
        setToken(!token);
    };

    function onMouseRow(index) {
        document.getElementById('notice_search_table_row_' + index).style.backgroundColor = '#C4C4C4';
    }

    function onMouseOutRow(index) {
        document.getElementById('notice_search_table_row_' + index).style.backgroundColor = 'white';
    }

    useEffect(() => {
        axios.get('/getNoticeCount', {}).then(value => {
            setCount(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        axios.get('/getNoticeList', {params: {size: size}}).then(value => {
            setNoticeList(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        return {}
    }, [token])

    const noticeData: any = {};
    noticeData.count = count;
    noticeData.data = noticeList;

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                    <Box className={"main_header_text"}>공지사항</Box>
                    <Box className={"main_header_path_text"}>
                        <img src={home}  alt="home"/>
                        <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 공지사항</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between', margin: '20px 0px 0px 0px' }}>
                <Box style={{ width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'row'}}>
                        <Box className={"notice_page_main_row1"}>전체</Box>
                        <Box id={"notice_count"} className={"notice_page_main_row2"}>{noticeData.count}</Box>
                        <Box className={"notice_page_main_row1"}>건</Box>
                    </Box>

                    <Box>
                        <TableContainer style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                            <Table style={{width: '100%'}}>
                                <TableHead style={{ background: '#FFE9B7' }}>
                                    <TableRow>
                                        <TableCell align="center" style={{ width: '10%', fontSize: '14px', fontWeight: 600, padding: '5px' }}>번호</TableCell>
                                        <TableCell align="center" style={{ width: '75%', fontSize: '14px', fontWeight: 600, padding: '5px' }}>제목</TableCell>
                                        <TableCell align="center" style={{ width: '15%', fontSize: '14px', fontWeight: 600, padding: '5px' }}>등록일</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody id={"notice_search_table_body"}>
                                    {/*<TableRow key={0} id={"notice_search_table_row_0"} style={{cursor: "pointer"}} onMouseOver={ (e) => { onMouseRow(0) }} onMouseOut={ (e) => { onMouseOutRow(0) }}>*/}
                                    {/*    <TableCell align="center" style={{ padding: '10px 0px 10px 0px' }}>1</TableCell>*/}
                                    {/*    <TableCell style={{ padding: '10px 0px 10px 0px' }}>공지사항 test</TableCell>*/}
                                    {/*    <TableCell align="center" style={{ padding: '10px 0px 10px 0px' }}>2022-10-21 00:00:00</TableCell>*/}
                                    {/*</TableRow>*/}
                                    {
                                        noticeData.data.map((notice, index) => {
                                            return (
                                                <TableRow key={index}
                                                          id={"notice_search_table_row_" + index} style={{cursor: "pointer"}}
                                                          onMouseOver={ (e) => { onMouseRow(index) }}
                                                          onMouseOut={ (e) => { onMouseOutRow(index) }}>
                                                    <TableCell id={"notice_search_table_row_no_" + index} align="center" style={{ padding: '10px 0px 10px 0px' }}>{notice.no}</TableCell>
                                                    <TableCell id={"notice_search_table_row_title_" + index} style={{ padding: '10px 0px 10px 0px' }}>{notice.title}</TableCell>
                                                    <TableCell id={"notice_search_table_row_createdAt_" + index} align="center" style={{ padding: '10px 0px 10px 0px' }}>{moment(new Date(notice.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                </TableRow>
                                            )

                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={addSize}
                        totalItemsCount={count}
                        pageRangeDisplayed={5}
                        prevPageText={"‹"}
                        nextPageText={"›"}
                        onChange={handlePageChange}/>
                </Box>
            </Box>
        </Box>
    );
}

export default NoticePage;
