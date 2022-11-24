import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import moment from "moment";
import axios from "axios";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

import small_banner from "../../../image/small_banner.jpg";
import home from "../../../image/home.png";

function IrPage(props) {
    const [token, setToken] = useState(true);
    const [irList, setIrList] = useState([]);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState({start: 0, end: 20});
    const [page, setPage] = useState(1);

    let addSize = 20;

    const handlePageChange = (page) => {
        size.start = page * addSize;
        size.end = addSize;
        setSize(size);
        setPage(page);
        setToken(!token);
    };

    function onMouseRow(index) {
        document.getElementById('ir_search_table_row_' + index).style.backgroundColor = '#C4C4C4';
    }

    function onMouseOutRow(index) {
        document.getElementById('ir_search_table_row_' + index).style.backgroundColor = 'white';
    }

    useEffect(() => {
        axios.get('/api/getIrCount', {}).then(value => {
            setCount(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        axios.get('/api/getIrList', {params: {size: size}}).then(value => {
            setIrList(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        return {}
    }, [token])

    const irData: any = {};
    irData.count = count;
    irData.data = irList;

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                    <Box className={"main_header_text"}>재정공개</Box>
                    <Box className={"main_header_path_text"}>
                        <img src={home}  alt="home"/>
                        <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 재정공개</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between', margin: '20px 0px 0px 0px' }}>
                <Box style={{ width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'row'}}>
                        <Box className={"ir_page_main_row1"}>전체</Box>
                        <Box id={"ir_count"} className={"ir_page_main_row2"}>{irData.count}</Box>
                        <Box className={"ir_page_main_row1"}>건</Box>
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
                                <TableBody id={"ir_search_table_body"}>
                                    {
                                        irData.data.map((ir, index) => {
                                            return (
                                                <TableRow key={index}
                                                          id={"ir_search_table_row_" + index}
                                                          onMouseOver={ (e) => { onMouseRow(index) }}
                                                      onMouseOut={ (e) => { onMouseOutRow(index) }}>
                                                    <TableCell id={"ir_search_table_row_no_" + index} align="center" style={{ padding: '10px 0px 10px 0px' }}>{ir.no}</TableCell>
                                                    <TableCell id={"ir_search_table_row_title_" + index} style={{ display: 'flex', padding: '10px 0px 10px 0px', cursor: 'point' }}>
                                                        <Link to={"/IrDetailPage?no=" + ir.no} className={"main_link_row"}>
                                                            {ir.title}
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell id={"ir_search_table_row_createdAt_" + index} align="center" style={{ padding: '10px 0px 10px 0px' }}>{moment(new Date(ir.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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

export default IrPage;
