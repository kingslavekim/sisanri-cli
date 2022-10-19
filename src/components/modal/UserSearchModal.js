import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@material-ui/core";
import axios from "axios";
import UserBlockSelectBox from "../selectBox/UserBlockSelectBox";
import moment from "moment";
import "../../css/ckContent.css"

function UserSearchModal(props) {
    const [searchObject, setSearchObject] = useState({ '_id': '', 'block': false, 'blockCount': 0, 'blockToDt': 0, 'blockHistoryList': [], 'reportHistoryList': [], 'pointHistoryList': [], 'postList': [], 'replyList': []});
    const [token, setToken] = useState(true);

    useEffect(() => {
        return {}
    }, [token, searchObject])

    function modalClose() {
        document.getElementById('modal').style.display = 'none';
        setSearchObject({ '_id': '', 'block': false, 'blockCount': 0, 'blockToDt': 0, 'blockHistoryList': [], 'reportHistoryList': [], 'pointHistoryList': [], 'postList': [], 'replyList': []});
    }

    function btn_search_click() {
        document.getElementById("loading").style.display = 'flex';
        axios.get('/getUserObject', {params: {_id: document.getElementById('user__id').value}}).then(value => {
            searchObject._id = value.data.data._id;
            searchObject.block = value.data.data.block;
            searchObject.blockToDt = value.data.data.blockToDt;
            searchObject.blockCount = value.data.data.blockCount;
            searchObject.blockHistoryList = value.data.data.blockHistoryList;
            searchObject.reportHistoryList = value.data.data.reportHistoryList;
            searchObject.pointHistoryList = value.data.data.pointHistoryList;
            searchObject.postList = value.data.data.postList;
            searchObject.replyList = value.data.data.replyList;

        }).catch(reason => {
            alert(reason);
        }).finally(() => {
            document.getElementById("loading").style.display = 'none';
            setSearchObject(searchObject);
            setToken(!token);
        });
    }

    function windowOpen(link: string) {
        window.open(link, '_blank')
    }

    function btn_post_click(_id: object, usage: boolean) {
        if (usage) {
            axios.get('/postUsageFalse', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        } else {
            axios.get('/postUsageTrue', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        }
    }

    function btn_reply_click_1(_id: object, blindedAt: number) {
        if (blindedAt !== 0) {
            axios.get('/replyBlindFalse', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        } else {
            axios.get('/replyBlindTrue', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        }
    }

    function btn_reply_click_2(_id: object, usage: boolean) {
        if (usage) {
            axios.get('/replyUsageFalse', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        } else {
            axios.get('/replyUsageTrue', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        }
    }

    function btn_block_click(_id: string, block: boolean, code: string) {
        if (block) {
            let time = 0;

            if (code === 'A') {
                alert('차단 시간을 설정해주세요.');
                return;
            } else if (code === 'B') {
                time = 3600;
            } else if (code === 'C') {
                time = 21600;
            } else if (code === 'D') {
                time = 43200;
            } else if (code === 'E') {
                time = 86400;
            } else {
                alert('차단 시간을 확인해주세요.');
                return;
            }

            axios.get('/userBlock', {params: {_id: _id, time: time}}).then(value => {
                alert('차단되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        } else {
            axios.get('/userUnblock', {params: {_id: _id}}).then(value => {
                alert('차단 해제되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_search_click();
            });
        }
    }

    return (
        <Box id ={"modal"} style={{ display: 'none', position: 'absolute', width: '100%', height: '920px', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
            <Box style={{ position: 'fixed', background: 'white', width: '1500px', height: '800px', marginBottom: '150px', border: '1px solid'}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4348cf', width: '1500px', height: '35px'}}>
                    <Box style={{ display: 'flex', width: '1500px' }}>
                        <Box style={{ width: '1460px', paddingLeft: '20px', textAlign: 'start', color: 'white', fontWeight: 600, fontSize: '16px'}}>
                            사용자 세부 조회
                        </Box>
                        <Box style={{ cursor: 'pointer', width: '40px', paddingRight: '20px', textAlign: 'end', color: 'white', fontWeight: 600, fontSize: '16px'}} onClick={(e)=>{modalClose()}}>
                            X
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', width: '1500px', paddingTop: '20px' }}>
                    <Box style={{ width: '1400px' }}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ width: '90px' }}>사용자 ID</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '200px' }}>
                                <TextField hiddenLabel id={"user_id"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}}/>
                                <TextField hiddenLabel id={"user__id"} style={{marginTop: '-5px', display: 'none'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}}/>
                            </Box>

                            <Box style={{ width: '60px', marginLeft: '20px'}}>닉네임</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '200px' }}>
                                <TextField hiddenLabel id={"user_nickName"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}}/>
                            </Box>

                            <Box style={{ width: '60px', marginLeft: '20px'}}>가입일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '200px' }}>
                                <TextField hiddenLabel id={"user_createdAt"} style={{marginTop: '-3px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px' }}>
                            <Box style={{ width: '90px' }}>E-mail</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '200px' }}>
                                <TextField hiddenLabel id={"user_email"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}}/>
                            </Box>

                            <Box style={{ width: '60px', marginLeft: '20px'}}>포인트</Box>
                            <Box style={{ width: '20px' }}>:</Box>
                            <Box style={{ width: '200px' }}>
                                <TextField hiddenLabel id={"user_point"} style={{marginTop: '-3px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}}/>
                            </Box>
                        </Box>

                        <Box style={{ height: '20px', borderBottom: '3px solid black' }}></Box>
                        <Button id={"btn_search"} style={{ marginTop: '10px', marginBottom: '10px', background: '#7277FF', color: 'white', width: '80px', height: '30px', borderRadius: '6px' }} onClick={(e)=>{btn_search_click()}}>조회</Button>

                        <Box style={{ overflowY: 'scroll', height: '600px', width: '1450px' }}>
                            <Box style={{ display: 'flex' }}>
                                <Box style={{ width: '90px' }}>차단 횟수</Box>
                                <Box style={{ width: '20px' }}>:</Box>
                                <Box style={{ width: '200px' }}>
                                    <TextField hiddenLabel id={"user_block_count"} style={{marginTop: '-5px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={searchObject.blockCount}/>
                                </Box>

                                <Box style={{ width: '90px', marginLeft: '20px'}}>차단 종료일</Box>
                                <Box style={{ width: '20px' }}>:</Box>
                                <Box style={{ width: '200px' }}>
                                    {
                                        searchObject.block ?
                                        <TextField hiddenLabel style={{marginTop: '-3px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={moment(new Date(searchObject.blockToDt)).format("YYYY-MM-DD HH:mm:ss")}/> :
                                        <TextField hiddenLabel style={{marginTop: '-5px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value='-'/>
                                    }
                                </Box>

                                <Box style={{ width: '90px', marginLeft: '20px'}}>사용자 차단</Box>
                                <Box style={{ width: '20px' }}>:</Box>
                                <Box style={{ width: '100px' }}>
                                    <UserBlockSelectBox/>
                                </Box>
                                {
                                    searchObject.block ?
                                    <Button style={{background: '#7277FF', color: 'white', width: '60px', height: '25px', borderRadius: '6px' }} onClick={(e)=>{btn_block_click(searchObject._id, false, document.getElementById('user_block_select_box').options[document.getElementById('user_block_select_box').selectedIndex].value)}}>복구</Button> :
                                    <Button style={{background: '#FF7272', color: 'white', width: '60px', height: '25px', borderRadius: '6px' }} onClick={(e)=>{btn_block_click(searchObject._id, true, document.getElementById('user_block_select_box').options[document.getElementById('user_block_select_box').selectedIndex].value)}}>차단</Button>
                                }
                            </Box>

                            <Box style={{ marginTop: '10px' }}>차단 내역</Box>
                            <Box style={{ display: 'flex' }}>
                                <TableContainer style={{ display: 'flex', overflowY: 'scroll', maxHeight: '300px', justifyContent: 'center', marginTop: '10px', marginRight: '20px', border: '1px solid black' }}>
                                    <Table id={"user_search_modal_block_table"}>
                                        <TableHead style={{ position: 'sticky', top: 0, background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>등급</TableCell>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>사유</TableCell>
                                                <TableCell align="center" style={{ width: '25%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>비고</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>시작일</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>종료일</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderBottom: '1px solid black' }}>등록일</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id={"user_search_modal_block_table_body"}>
                                            {
                                                searchObject.blockHistoryList.map((data, index) => {
                                                    return (
                                                        <TableRow>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.code}</TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.reasonCode}</TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.remark}</TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{moment(new Date(data.toDt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{moment(new Date(data.fromDt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', wordBreak: 'break-all'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>

                            <Box style={{ marginTop: '20px' }}>신고 내역</Box>
                            <Box style={{ display: 'flex' }}>
                                <TableContainer style={{ display: 'flex', overflowY: 'scroll', maxHeight: '300px', justifyContent: 'center', marginTop: '10px', marginRight: '20px', border: '1px solid black' }}>
                                    <Table id={"user_search_modal_report_table"}>
                                        <TableHead style={{ position: 'sticky', top: 0, background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>구분</TableCell>
                                                <TableCell align="center" style={{ width: '20%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>게시글</TableCell>
                                                <TableCell align="center" style={{ width: '20%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>댓글</TableCell>
                                                <TableCell align="center" style={{ width: '20%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>사유</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>비고</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderBottom: '1px solid black' }}>등록일</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id={"user_search_modal_report_table_body"}>
                                            {
                                                searchObject.reportHistoryList.map((data, index) => {
                                                    return (
                                                        <TableRow>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.type}</TableCell>
                                                            <TableCell style={{cursor: 'pointer', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box onClick={(e)=>{windowOpen(data.link)}}>{data.title}</Box></TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box className="ck-content" dangerouslySetInnerHTML={{__html: data.content}}/></TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.code}</TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.remark}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', wordBreak: 'break-all'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>

                            <Box style={{ marginTop: '20px' }}>포인트 적립 내역</Box>
                            <Box style={{ display: 'flex' }}>
                                <TableContainer style={{ display: 'flex', overflowY: 'scroll', maxHeight: '300px', justifyContent: 'center', marginTop: '10px', marginRight: '20px', border: '1px solid black' }}>
                                    <Table id={"user_search_modal_point_table"}>
                                        <TableHead style={{ position: 'sticky', top: 0, background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>구분</TableCell>
                                                <TableCell align="center" style={{ width: '22.5%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>게시글</TableCell>
                                                <TableCell align="center" style={{ width: '22.5%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>댓글</TableCell>
                                                <TableCell align="center" style={{ width: '20%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>사유</TableCell>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>포인트</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderBottom: '1px solid black' }}>등록일</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id={"user_search_modal_point_table_body"}>
                                            {
                                                searchObject.pointHistoryList.map((data, index) => {
                                                    return (
                                                        <TableRow>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.type}</TableCell>
                                                            <TableCell style={{cursor: 'pointer', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box onClick={(e)=>{windowOpen(data.link)}}>{data.title}</Box></TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box className="ck-content" dangerouslySetInnerHTML={{__html: data.content}}/></TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.code}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.point}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', wordBreak: 'break-all'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>

                            <Box style={{ marginTop: '20px' }}>게시글 내역</Box>
                            <Box style={{ display: 'flex' }}>
                                <TableContainer style={{ display: 'flex', overflowY: 'scroll', maxHeight: '300px', justifyContent: 'center', marginTop: '10px', marginRight: '20px', border: '1px solid black' }}>
                                    <Table id={"user_search_modal_post_table"}>
                                        <TableHead style={{ position: 'sticky', top: 0, background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '30%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>제목</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>조회</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>댓글</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>추천</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>비추천</TableCell>
                                                <TableCell align="center" style={{ width: '20%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>등록일</TableCell>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderBottom: '1px solid black' }}></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id={"user_search_modal_post_table_body"}>
                                            {
                                                searchObject.postList.map((data, index) => {
                                                    if(data.usage) {
                                                        return (
                                                            <TableRow>
                                                                <TableCell style={{cursor: 'pointer', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box onClick={(e)=>{windowOpen(data.link)}}>{data.title}</Box></TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.lookupCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.replyCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.recommendCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.opposeCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black'}}><Button style={{ background: '#FF7272', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_post_click(data._id, data.usage)}}>삭제</Button></TableCell>
                                                            </TableRow>
                                                        )
                                                    } else {
                                                        return (
                                                            <TableRow>
                                                                <TableCell style={{cursor: 'pointer', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box onClick={(e)=>{windowOpen(data.link)}}>{data.title}</Box></TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.lookupCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.replyCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.recommendCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.opposeCount}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                                <TableCell style={{textAlign: 'center', borderBottom: '1px solid black'}}><Button style={{ background: '#7277FF', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_post_click(data._id, data.usage)}}>복구</Button></TableCell>
                                                            </TableRow>
                                                        )
                                                    }

                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>

                            <Box style={{ marginTop: '20px' }}>댓글 내역</Box>
                            <Box style={{ display: 'flex', marginBottom: '50px' }}>
                                <TableContainer style={{ display: 'flex', overflowY: 'scroll', maxHeight: '300px', justifyContent: 'center', marginTop: '10px', marginRight: '20px', border: '1px solid black' }}>
                                    <Table id={"user_search_modal_reply_table"}>
                                        <TableHead style={{ position: 'sticky', top: 0, background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '25%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>게시글</TableCell>
                                                <TableCell align="center" style={{ width: '25%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>내용</TableCell>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>추천</TableCell>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>비추천</TableCell>
                                                <TableCell align="center" style={{ width: '14%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>등록일</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}></TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderBottom: '1px solid black' }}></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id={"user_search_modal_reply_table_body"}>
                                            {
                                                searchObject.replyList.map((data, index) => {
                                                    let usageCell;
                                                    let blindCell;

                                                    if(data.usage) {
                                                        usageCell= <TableCell style={{textAlign: 'center', borderBottom: '1px solid black'}}><Button style={{ background: '#FF7272', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_reply_click_2(data._id, data.usage)}}>삭제</Button></TableCell>;
                                                    } else {
                                                        usageCell = <TableCell style={{textAlign: 'center', borderBottom: '1px solid black'}}><Button style={{ background: '#7277FF', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_reply_click_2(data._id, data.usage)}}>복구</Button></TableCell>;
                                                    }

                                                    if(data.blindedAt === 0) {
                                                        blindCell = <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}><Button style={{ background: '#FF7272', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_reply_click_1(data._id, data.blindedAt)}}>숨김</Button></TableCell>;
                                                    } else {
                                                        blindCell = <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}><Button style={{ background: '#7277FF', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_reply_click_1(data._id, data.blindedAt)}}>복구</Button></TableCell>;
                                                    }

                                                    return (
                                                        <TableRow>
                                                            <TableCell style={{cursor: 'pointer', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box onClick={(e)=>{windowOpen(data.link)}}>{data.title}</Box></TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box className="ck-content" dangerouslySetInnerHTML={{__html: data.content}}/></TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.recommendCount}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{data.opposeCount}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
                                                            {blindCell}
                                                            {usageCell}
                                                        </TableRow>
                                                    )

                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default UserSearchModal;