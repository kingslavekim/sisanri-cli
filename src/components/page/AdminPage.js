import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import moment from "moment";
import axios from "axios";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

import small_banner from "../../image/small_banner.jpg";
import home from "../../image/home.png";


function AdminPage(props) {
    const [token, setToken] = useState(true);
    const [adminList, setAdminList] = useState([]);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState({start: 0, end: 20});
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('notice');

    let addSize = 20;

    const handlePageChange = (page) => {
        size.start = page * addSize;
        size.end = addSize;
        setSize(size);
        setPage(page);
        setToken(!token);
    };

    function onMouseRow(index) {
        document.getElementById('admin_search_table_row_' + index).style.backgroundColor = '#C4C4C4';
    }

    function onMouseOutRow(index) {
        document.getElementById('admin_search_table_row_' + index).style.backgroundColor = 'white';
    }

    function categoryChange(key) {
        setCategory(key);
    }

    function removeData(key) {
        if (category === 'notice') {
            axios.get('/api/getNoticeDelete', {params: {no: key}}).then(value => {
                alert('삭제되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        } else if (category === 'ir') {
            axios.get('/api/getIrDelete', {params: {no: key}}).then(value => {
                alert('삭제되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        } else if (category === 'gallery') {
            axios.get('/api/getGalleryDelete', {params: {no: key}}).then(value => {
                alert('삭제되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        }

        setToken(!token);
    }

    useEffect(() => {
        if (category === 'notice') {
            axios.get('/api/getNoticeCount', {}).then(value => {
                setCount(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });

            axios.get('/api/getNoticeList', {params: {size: size}}).then(value => {
                setAdminList(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        } else if (category === 'ir') {
            axios.get('/api/getIrCount', {}).then(value => {
                setCount(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });

            axios.get('/api/getIrList', {params: {size: size}}).then(value => {
                setAdminList(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        } else if (category === 'gallery') {
            axios.get('/api/getGalleryCount', {}).then(value => {
                setCount(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });

            axios.get('/api/getGalleryList', {params: {size: size}}).then(value => {
                setAdminList(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        }

        return {}
    }, [token, category])

    const adminData: any = {};
    adminData.count = count;
    adminData.data = adminList;

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                    <Box className={"main_header_text"}>관리자</Box>
                    <Box className={"main_header_path_text"}>
                        <img src={home}  alt="home"/>
                        <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 관리자</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between', margin: '20px 0px 0px 0px' }}>
                <Box style={{ width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'row'}}>
                        <Box className={"admin_page_main_row1"}>전체</Box>
                        <Box id={"admin_count"} className={"admin_page_main_row2"}>{adminData.count}</Box>
                        <Box className={"admin_page_main_row1"}>건</Box>
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
                        <Box style={{ display: 'flex', flexDirection: 'row', width: '80%'}}>
                            <Button style={{ borderRadius: '10px', border:'1px solid black', color: 'black', marginRight: '10px' }} onClick={(e)=>{categoryChange('notice')}}>공지사항</Button>
                            <Button style={{ borderRadius: '10px', border:'1px solid black', color: 'black', marginRight: '10px' }} onClick={(e)=>{categoryChange('ir')}}>재정공개</Button>
                            <Button style={{ borderRadius: '10px', border:'1px solid black', color: 'black', marginRight: '10px' }} onClick={(e)=>{categoryChange('gallery')}}>갤러리</Button>
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'row', width: '20%', justifyContent: 'flex-end'}}>
                            <Button style={{ borderRadius: '10px', background: '#5383EC', color: 'white' }}>
                                <Link to={"/AdminCreatePage"} className={"main_link_row2"}>
                                    글쓰기
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <TableContainer style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                            <Table style={{width: '100%'}}>
                                <TableHead style={{ background: '#FFE9B7' }}>
                                    <TableRow>
                                        <TableCell align="center" style={{ width: '10%', fontSize: '14px', fontWeight: 600, padding: '5px' }}>번호</TableCell>
                                        <TableCell align="center" style={{ width: '65%', fontSize: '14px', fontWeight: 600, padding: '5px' }}>제목</TableCell>
                                        <TableCell align="center" style={{ width: '15%', fontSize: '14px', fontWeight: 600, padding: '5px' }}>등록일</TableCell>
                                        <TableCell align="center" style={{ width: '10%', fontSize: '14px', fontWeight: 600, padding: '5px' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody id={"admin_search_table_body"}>
                                    {
                                        adminData.data.map((admin, index) => {
                                            return (
                                                <TableRow key={index}
                                                          id={"admin_search_table_row_" + index}
                                                          onMouseOver={ (e) => { onMouseRow(index) }}
                                                      onMouseOut={ (e) => { onMouseOutRow(index) }}>
                                                    <TableCell id={"admin_search_table_row_no_" + index} align="center" style={{ padding: '10px 0px 10px 0px' }}>{admin.no}</TableCell>
                                                    <TableCell id={"admin_search_table_row_title_" + index} style={{ padding: '10px 0px 10px 0px', cursor: 'point' }}>
                                                        <Link to={"/AdminDetailPage?no=" + admin.no} className={"main_link_row"}>
                                                            {admin.title}
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell id={"admin_search_table_row_createdAt_" + index} align="center" style={{ padding: '10px 0px 10px 0px' }}>{moment(new Date(admin.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                    <TableCell id={"admin_search_table_row_remove_" + index} align="center" style={{ padding: '10px 0px 10px 0px' }}>
                                                        <Button style={{ borderRadius: '8px', background: '#ec5353', color: 'white', padding: '0px' }} onClick={(e)=>{removeData(admin.no)}}>삭제</Button>
                                                    </TableCell>
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

export default AdminPage;
