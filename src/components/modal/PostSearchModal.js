import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import "../../css/ckContent.css"
import { forwardRef, useImperativeHandle } from "react";

const PostSearchModal = forwardRef((props, ref) => {
    const [postModalObject, setPostModalObject] = useState({ '_id': '', 'usage': false, 'categoryId': '', 'title': '', 'id': '', 'createdAt': 0, 'lookupCount': 0, 'replyCount': 0, 'recommendCount': 0, 'opposeCount': 0 , 'replyList': [], 'reportList': []});
    const [token, setToken] = useState(true);

    useImperativeHandle(ref, () => ({
        modalReload: (_id: string) => {
            document.getElementById("loading").style.display = 'flex';
            axios.get('/getPostObject', {params: {_id: _id}}).then(value => {
                postModalObject._id = value.data.data._id;
                postModalObject.usage = value.data.data.usage;
                postModalObject.categoryId = value.data.data.categoryId;
                postModalObject.title = value.data.data.title;
                postModalObject.id = value.data.data.id;
                postModalObject.createdAt = value.data.data.createdAt;
                postModalObject.lookupCount = value.data.data.lookupCount;
                postModalObject.replyCount = value.data.data.replyCount;
                postModalObject.recommendCount = value.data.data.recommendCount;
                postModalObject.opposeCount = value.data.data.opposeCount;
                postModalObject.replyList = value.data.data.replyList;
                postModalObject.reportList = value.data.data.reportList;
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                document.getElementById("loading").style.display = 'none';
                document.getElementById('modal').style.display = 'flex';
                setPostModalObject(postModalObject);
                setToken(!token);
            });
        }
    }));

    useEffect(() => {
        return {}
    }, [token, postModalObject])

    function modalClose() {
        document.getElementById('modal').style.display = 'none';
        setPostModalObject({ '_id': '', 'usage': false, 'categoryId': '', 'title': '', 'id': '', 'createdAt': 0, 'lookupCount': 0, 'replyCount': 0, 'recommendCount': 0, 'opposeCount': 0 , 'replyList': [], 'reportList': []});
    }

    function btn_post_modal_search_click() {
        document.getElementById("loading").style.display = 'flex';
        axios.get('/getPostObject', {params: {_id: document.getElementById('post__id').value}}).then(value => {
            postModalObject._id = value.data.data._id;
            postModalObject.usage = value.data.data.usage;
            postModalObject.categoryId = value.data.data.categoryId;
            postModalObject.title = value.data.data.title;
            postModalObject.writer = value.data.data.writer;
            postModalObject.createdAt = value.data.data.createdAt;
            postModalObject.lookupCount = value.data.data.lookupCount;
            postModalObject.replyCount = value.data.data.replyCount;
            postModalObject.recommendCount = value.data.data.recommendCount;
            postModalObject.opposeCount = value.data.data.opposeCount;
            postModalObject.replyList = value.data.data.replyList;
            postModalObject.reportList = value.data.data.reportList;
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
            document.getElementById("loading").style.display = 'none';
            setPostModalObject(postModalObject);
            setToken(!token);
        });
    }

    function btn_post_modal_delete_click(usage: boolean) {
        if (usage) {
            axios.get('/postUsageFalse', {params: {_id: document.getElementById('post__id').value}}).then(value => {
                postModalObject.usage = false;
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                setPostModalObject(postModalObject);
                setToken(!token);
            });
        } else {
            axios.get('/postUsageTrue', {params: {_id: document.getElementById('post__id').value}}).then(value => {
                postModalObject.usage = true;
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                setPostModalObject(postModalObject);
                setToken(!token);
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
                btn_post_modal_search_click();
            });
        } else {
            axios.get('/replyBlindTrue', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_post_modal_search_click();
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
                btn_post_modal_search_click();
            });
        } else {
            axios.get('/replyUsageTrue', {params: {_id: _id}}).then(value => {
                alert('변경되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                btn_post_modal_search_click();
            });
        }
    }

    return (
        <Box id ={"modal"} style={{ display: 'none', position: 'absolute', width: '100%', height: '920px', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
            <Box style={{ position: 'fixed', background: 'white', width: '1500px', height: '800px', marginBottom: '150px', border: '1px solid'}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4348cf', width: '1500px', height: '35px'}}>
                    <Box style={{ display: 'flex', width: '1500px' }}>
                        <Box style={{ width: '1460px', paddingLeft: '20px', textAlign: 'start', color: 'white', fontWeight: 600, fontSize: '16px'}}>
                            게시글 세부 조회
                        </Box>
                        <Box style={{ cursor: 'pointer', width: '40px', paddingRight: '20px', textAlign: 'end', color: 'white', fontWeight: 600, fontSize: '16px'}} onClick={(e)=>{modalClose()}}>
                            X
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', width: '1500px', paddingTop: '20px' }}>
                    <Box style={{ width: '1400px' }}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ width: '90px' }}>카테고리</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"post_category"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject.categoryId}></TextField>
                                <TextField hiddenLabel id={"post__id"} style={{marginTop: '-5px', display: 'none'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject._id}/>
                            </Box>

                            <Box style={{ width: '60px' }}>제목</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '500px' }}>
                                <TextField hiddenLabel id={"post_title"} style={{marginTop: '-5px', width: '500px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject.title}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px' }}>
                            <Box style={{ width: '90px' }}>작성자</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"post_writer"} style={{marginTop: '-5px', width: '300px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject.id}/>
                            </Box>

                            <Box style={{ width: '60px' }}>작성일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '150px' }}>
                                <TextField hiddenLabel id={"post_createdAt"} style={{marginTop: '-2px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={moment(new Date(postModalObject.createdAt)).format("YYYY-MM-DD HH:mm:ss")}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px' }}>
                            <Box style={{ width: '90px' }}>조회</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '112px' }}>
                                <TextField hiddenLabel id={"post_lookupCount"} style={{marginTop: '-2px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject.lookupCount}/>
                            </Box>
                            
                            <Box style={{ width: '60px' }}>댓글</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '112px' }}>
                                <TextField hiddenLabel id={"post_replyCount"} style={{marginTop: '-2px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject.replyCount}/>
                            </Box>

                            <Box style={{ width: '60px' }}>추천</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '112px' }}>
                                <TextField hiddenLabel id={"post_recommendCount"} style={{marginTop: '-2px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject.recommendCount}/>
                            </Box>

                            <Box style={{ width: '60px' }}>비추천</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '112px' }}>
                                <TextField hiddenLabel id={"post_opposeCount"} style={{marginTop: '-2px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={postModalObject.opposeCount}/>
                            </Box>

                        </Box>

                        <Box style={{ height: '20px', borderBottom: '3px solid black' }}></Box>
                        <Button style={{ marginTop: '10px', marginBottom: '10px', background: '#7277FF', color: 'white', width: '80px', height: '30px', borderRadius: '6px' }} onClick={(e)=>{btn_post_modal_search_click()}}>조회</Button>

                        {
                            postModalObject.usage ?
                                <Button style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', background: '#FF7272', color: 'white', width: '80px', height: '30px', borderRadius: '6px' }} onClick={(e)=>{btn_post_modal_delete_click(true)}}>삭제</Button> :
                                <Button style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', background: '#7277FF', color: 'white', width: '80px', height: '30px', borderRadius: '6px' }} onClick={(e)=>{btn_post_modal_delete_click(false)}}>복구</Button>
                        }


                        <Box style={{ overflowY: 'scroll', height: '565px', width: '1450px' }}>
                            <Box style={{ marginTop: '20px' }}>댓글 내역</Box>
                            <Box style={{ display: 'flex', marginBottom: '50px' }}>
                                <TableContainer style={{ display: 'flex', overflowY: 'scroll', maxHeight: '300px', justifyContent: 'center', marginTop: '10px', marginRight: '20px', border: '1px solid black' }}>
                                    <Table id={"post_search_modal_reply_table"}>
                                        <TableHead style={{ position: 'sticky', top: 0, background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '20%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>작성자</TableCell>
                                                <TableCell align="center" style={{ width: '34%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>내용</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>추천</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>비추천</TableCell>
                                                <TableCell align="center" style={{ width: '14%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>등록일</TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}></TableCell>
                                                <TableCell align="center" style={{ width: '8%', padding: '0px', borderBottom: '1px solid black' }}></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id={"post_search_modal_reply_table_body"}>
                                            {
                                                postModalObject.replyList.map((data, index) => {
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
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.id}</TableCell>
                                                            <TableCell style={{borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}><Box className="ck-content" dangerouslySetInnerHTML={{__html: data.content}}/></TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.recommendCount}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.opposeCount}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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

                            <Box style={{ marginTop: '10px' }}>신고 내역</Box>
                            <Box style={{ display: 'flex', marginBottom: '50px' }}>
                                <TableContainer style={{ display: 'flex', overflowY: 'scroll', maxHeight: '300px', justifyContent: 'center', marginTop: '10px', marginRight: '20px', border: '1px solid black' }}>
                                    <Table id={"post_search_modal_reply_table"}>
                                        <TableHead style={{ position: 'sticky', top: 0, background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                            <TableRow>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>구분</TableCell>
                                                <TableCell align="center" style={{ width: '10%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>사유</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>작성자</TableCell>
                                                <TableCell align="center" style={{ width: '50%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>비고</TableCell>
                                                <TableCell align="center" style={{ width: '15%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black' }}>등록일</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id={"post_search_modal_reply_table_body"}>
                                            {
                                                postModalObject.reportList.map((data, index) => {
                                                      return (
                                                        <TableRow>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.type}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.code}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.id}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{data.remark}</TableCell>
                                                            <TableCell style={{textAlign: 'center', borderBottom: '1px solid black', borderRight: '1px solid black', wordBreak: 'break-all'}}>{moment(new Date(data.createdAt)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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
});

export default PostSearchModal;