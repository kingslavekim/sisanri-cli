import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import SearchBox from "../selectBox/SearchBox";
import {CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import moment from "moment";
import sort_icon from "../../image/sort_icon.png";
import axios from "axios";
import UsageSelectBox from "../selectBox/UsageSelectBox";
import CategorySelectBox from "../selectBox/CategorySelectBox";
import Button from "@mui/material/Button";
import PostSearchModal from "../modal/PostSearchModal";
import { useRef } from "react";
import Pagination from "react-js-pagination";
import '../../css/Paging.css'
import BlindSelectBox from "../selectBox/BlindSelectBox";
import ReplyCategorySelectBox from "../selectBox/ReplyCategorySelectBox";

function PostSearch(props) {
    const [token, setToken] = useState(true);
    const [postList, setPostList] = useState([]);
    const [search, setSearch] = useState('');
    const [usage, setUsage] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState(true);
    const [sortIndex, setSortIndex] = useState(0);
    const [replySortCount, setReplySortCount] = useState(0);
    const [lookupSortCount, setLookupSortCount] = useState(0);
    const [recommendSortCount, setRecommendSortCount] = useState(0);
    const [opposeSortCount, setOpposeSortCount] = useState(0);
    const [reportSortCount, setReportSortCount] = useState(0);
    const [timestampSortCount, setTimestampSortCount] = useState(0);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState({start: 0, end: 20});
    const [page, setPage] = useState(1);
    const childRef = useRef();

    let addSize = 20;

    if (props.search === undefined) {
    } else {
        document.getElementById("search_input").value = props.search;
    }

    const getSearchData = (search) => {
        size.start = 0;
        size.end = addSize;
        setSize(size);
        setPage(1);
        setSearch(search);
    }

    const getUsageData = (usage) => {
        size.start = 0;
        size.end = addSize;
        setSize(size);
        setPage(1);
        setUsage(usage);
    }

    const getCategoryData = (category) => {
        size.start = 0;
        size.end = addSize;
        setSize(size);
        setPage(1);
        setCategory(category);
    }

    const handlePageChange = (page) => {
        size.start = page * addSize;
        size.end = addSize;
        setSize(size);
        setPage(page);
        setToken(!token);
    };

    function onMouseRow(index) {
        document.getElementById('post_search_table_row_' + index).style.backgroundColor = '#C4C4C4';
    }

    function onMouseOutRow(index) {
        document.getElementById('post_search_table_row_' + index).style.backgroundColor = 'white';
    }

    function openModal(index) {
        childRef.current.modalReload(document.getElementById('post_search_table_row__id_' + index).innerText);
    }

    useEffect(() => {
        setLoading(true);

        let usageValue = document.getElementById("usage_select_box").options[document.getElementById("usage_select_box").selectedIndex].value;
        let categoryValue = document.getElementById("category_select_box").options[document.getElementById("category_select_box").selectedIndex].value;

        axios.get('/api/getPostCount', {params: {search: search, usage: usageValue, category: categoryValue}}).then(value => {
            setCount(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        if (sortIndex === 0) {
            axios.get('/api/getPostList', {params: {search: search, usage: usageValue, category: categoryValue, size: size}}).then(value => {
                setPostList(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                setLoading(false);
            });
        } else {
            axios.get('/api/getPostSortList', {params: {search: search, usage: usageValue, category: categoryValue, size: size, sortIndex: sortIndex, sort: sort}}).then(value => {
                setPostList(value.data.data);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                setLoading(false);
            });
        }

        let rowCount = document.getElementById('post_search_table_body').rows.length;

        for (let i=0; i<rowCount; i++) {
            document.getElementById("post_search_table_row_chk_" + i.toString()).checked = false;
        }

        document.documentElement.scrollTop = 0;

        return {}
    }, [search, usage, category, sortIndex, sort, token])

    const postData: any = {};
    postData.data = postList;

    function onSort(index: number){
        setSortIndex(index);

        if (index === 1) {
            if ((replySortCount + 1) % 3 === 0) {
                setSortIndex(0);
            } else if ((replySortCount + 1) % 3 === 1) {
                setSort(true);
            } else {
                setSort(false);
            }
            setReplySortCount(replySortCount + 1);
        } else if (index === 2) {
            if ((lookupSortCount + 1) % 3 === 0) {
                setSortIndex(0);
            } else if ((lookupSortCount + 1) % 3 === 1) {
                setSort(true);
            } else {
                setSort(false);
            }
            setLookupSortCount(lookupSortCount + 1);
        } else if (index === 3) {
            if ((recommendSortCount + 1) % 3 === 0) {
                setSortIndex(0);
            } else if ((recommendSortCount + 1) % 3 === 1) {
                setSort(true);
            } else {
                setSort(false);
            }
            setRecommendSortCount(recommendSortCount + 1);
        } else if (index === 4) {
            if ((opposeSortCount + 1) % 3 === 0) {
                setSortIndex(0);
            } else if ((opposeSortCount + 1) % 3 === 1) {
                setSort(true);
            } else {
                setSort(false);
            }
            setOpposeSortCount(opposeSortCount + 1);
        } else if (index === 5) {
            if ((reportSortCount + 1) % 3 === 0) {
                setSortIndex(0);
            } else if ((reportSortCount + 1) % 3 === 1) {
                setSort(true);
            } else {
                setSort(false);
            }
            setReportSortCount(reportSortCount + 1);
        } else if (index === 6) {
            if ((timestampSortCount + 1) % 3 === 0) {
                setSortIndex(0);
            } else if ((timestampSortCount + 1) % 3 === 1) {
                setSort(true);
            } else {
                setSort(false);
            }
            setTimestampSortCount(timestampSortCount + 1);
        }
    }

    function btn_post_click(_id: object, usage: boolean) {
        setLoading(true);

        if (usage) {
            axios.get('/api/postUsageFalse', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
                setToken(!token);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        } else {
            axios.get('/api/postUsageTrue', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
                setToken(!token);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        }

        setLoading(false);
    }

    function btn_select_usage_click(usage: boolean) {
        setLoading(true);

        let rowCount = document.getElementById('post_search_table_body').rows.length;

        for (let i=0; i<rowCount; i++) {
            if (document.getElementById("post_search_table_row_chk_" + i.toString()).checked) {
                if (usage) {
                    axios.get('/api/postUsageFalse', {params: {_id: document.getElementById("post_search_table_row__id_" + i.toString()).innerText}}).then(value => {
                    }).catch(reason => {
                        alert(reason);
                    }).finally(() => {
                    });
                } else {
                    axios.get('/api/postUsageTrue', {params: {_id: document.getElementById("post_search_table_row__id_" + i.toString()).innerText}}).then(value => {
                    }).catch(reason => {
                        alert(reason);
                    }).finally(() => {
                    });
                }
            }
        }

        for (let i=0; i<rowCount; i++) {
            document.getElementById("post_search_table_row_chk_" + i.toString()).checked = false;
        }

        alert('변경되었습니다.');
        document.getElementById("post_search_table_row_chk_all").checked = false;
        setToken(!token);
        setLoading(false);
    }

    function allCheck() {
        let rowCount = document.getElementById('post_search_table_body').rows.length;

        if (document.getElementById("post_search_table_row_chk_all").checked) {
            for (let i=0; i<rowCount; i++) {
                document.getElementById("post_search_table_row_chk_" + i.toString()).checked = true;
            }

        } else {
            for (let i=0; i<rowCount; i++) {
                document.getElementById("post_search_table_row_chk_" + i.toString()).checked = false;
            }

        }
    }

    return (
        <Box>
            {
                loading ? <Box id={"loading"} style={{ position: 'absolute', width: '100%', justifyContent: 'center', textAlign: 'center', paddingTop: '150px', zIndex: 10 }}>
                    <CircularProgress size={100} color={'secondary'}/>
                </Box> : <Box id={"loading"} style={{ position: 'absolute', width: '100%', justifyContent: 'center', textAlign: 'center', paddingTop: '150px', zIndex: 10, display: 'none' }}>
                    <CircularProgress size={100} color={'secondary'}/>
                </Box>
            }

            <PostSearchModal ref={childRef}/>
            <Box style={{display: 'flex', position: 'relative', justifyContent: 'center' }}>
                <Box style={{width: '93%', marginTop: '15px', display: 'flex'}}>
                    <Box style={{width: '14%'}}>
                    </Box>

                    <Box style={{ width: '10%', display: 'flex', justifyContent: 'center' }} >
                        <UsageSelectBox getUsageData={getUsageData}/>
                    </Box>

                    <Box style={{ width: '10%', marginRight: '30px', display: 'flex', justifyContent: 'center' }} >
                        <CategorySelectBox getCategoryData={getCategoryData}/>
                    </Box>

                    <Box style={{width: '28%', display: 'flex'}}>
                        <SearchBox division={2} getSearchData={getSearchData}/>
                    </Box>

                    <Box style={{width: '25%'}}>
                    </Box>

                    <Button style={{ background: '#FF7272', color: 'white', width: '80px', borderRadius: '6px' }} onClick={(e)=>{btn_select_usage_click(true)}}>선택 삭제</Button>
                    <Button style={{ marginLeft: '30px', background: '#7277FF', color: 'white', width: '80px', borderRadius: '6px' }} onClick={(e)=>{btn_select_usage_click(false)}}>선택 복구</Button>
                </Box>
            </Box>

            <Box>
                <TableContainer style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                    <Table style={{width: '93%'}}>
                        <TableHead style={{background: '#7277FF'}}>
                            <TableRow>
                                <TableCell align="center" style={{
                                    width: '3%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}><input type='checkbox' id={"post_search_table_row_chk_all"} onClick={(e) => {allCheck()}}/></TableCell>
                                <TableCell align="center" style={{
                                    width: '3%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>NO</TableCell>
                                <TableCell align="center" style={{
                                    width: '8%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>카테고리</TableCell>
                                <TableCell align="center" style={{
                                    width: '33%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>제목</TableCell>
                                <TableCell align="center" style={{
                                    width: '10%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>작성자</TableCell>
                                <TableCell align="center" style={{
                                    width: '6%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>
                                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                        <span>조회</span>
                                        <img onClick={(e) => {onSort(1)}} style={{ cursor: 'pointer', height: '22px', marginLeft: '7px', marginTop: '1px' }} src={sort_icon}/>
                                    </Box>
                                </TableCell>
                                <TableCell align="center" style={{
                                    width: '6%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>
                                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                        <span>댓글</span>
                                        <img onClick={(e) => {onSort(2)}} style={{ cursor: 'pointer', height: '22px', marginLeft: '7px', marginTop: '1px' }} src={sort_icon}/>
                                    </Box>
                                </TableCell>
                                <TableCell align="center" style={{
                                    width: '6%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>
                                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                        <span>추천</span>
                                        <img onClick={(e) => {onSort(3)}} style={{ cursor: 'pointer', height: '22px', marginLeft: '7px', marginTop: '1px' }} src={sort_icon}/>
                                    </Box>
                                </TableCell>
                                <TableCell align="center" style={{
                                    width: '6%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>
                                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                        <span>비추천</span>
                                        <img onClick={(e) => {onSort(4)}} style={{ cursor: 'pointer', height: '22px', marginLeft: '7px', marginTop: '1px' }} src={sort_icon}/>
                                    </Box>
                                </TableCell>
                                <TableCell align="center" style={{
                                    width: '12%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}>
                                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                        <span>작성일</span>
                                        <img onClick={(e) => {onSort(6)}} style={{ cursor: 'pointer', height: '22px', marginLeft: '7px', marginTop: '1px' }} src={sort_icon}/>
                                    </Box>
                                </TableCell>
                                <TableCell align="center" style={{
                                    width: '7%',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    padding: '5px'
                                }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody id={"post_search_table_body"}>
                            {
                                postData.data.map((post, index) => {
                                    let usageCell;
                                    if(post.usage) {
                                        usageCell= <TableCell align="center"><Button style={{ background: '#FF7272', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_post_click(post._id, post.usage)}}>삭제</Button></TableCell>;
                                    } else {
                                        usageCell = <TableCell align="center"><Button style={{ background: '#7277FF', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_post_click(post._id, post.usage)}}>복구</Button></TableCell>;
                                    }

                                    return (
                                        <TableRow key={index}
                                                  id={"post_search_table_row_" + index} style={{cursor: "pointer"}}
                                                  onMouseOver={ (e) => { onMouseRow(index) }}
                                                  onMouseOut={ (e) => { onMouseOutRow(index) }}>
                                            <TableCell id={"post_search_table_row__id_" + index} align="center" style={{display: 'none'}}>{post._id}</TableCell>
                                            <TableCell id={"post_search_table_row_usage_" + index} align="center" style={{display: 'none'}}>{post.usage.toString()}</TableCell>
                                            <TableCell align="center"><input type='checkbox' id={"post_search_table_row_chk_" + index}/></TableCell>
                                            <TableCell id={"post_search_table_row_chk_" + index} onClick={ (e) => {openModal(index) }} align="center">{post.no}</TableCell>
                                            <TableCell id={"post_search_table_row_category_" + index} onClick={ (e) => {openModal(index) }} align="center">{post.categoryId}</TableCell>
                                            <TableCell id={"post_search_table_row_title_" + index} onClick={ (e) => {openModal(index) }}>{post.title}</TableCell>
                                            <TableCell id={"post_search_table_row_nickName_" + index} align="center" onClick={ (e) => {openModal(index) }}>{post.writer.id}</TableCell>
                                            <TableCell id={"post_search_table_row_lookupCount_" + index} align="center" onClick={ (e) => {openModal(index) }}>{post.lookupCount}</TableCell>
                                            <TableCell id={"post_search_table_row_replyCount_" + index} align="center" onClick={ (e) => {openModal(index) }}>{post.replyCount}</TableCell>
                                            <TableCell id={"post_search_table_row_recommendCount_" + index} align="center" onClick={ (e) => {openModal(index) }}>{post.recommendCount}</TableCell>
                                            <TableCell id={"post_search_table_row_opposeCount_" + index} align="center" onClick={ (e) => {openModal(index) }}>{post.opposeCount}</TableCell>
                                            <TableCell id={"post_search_table_row_createdAt_" + index} align="center" onClick={ (e) => {openModal(index) }}>{moment(new Date(post.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                            {usageCell}
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
                onChange={handlePageChange}
            />
        </Box>
    );
};

export default PostSearch;
