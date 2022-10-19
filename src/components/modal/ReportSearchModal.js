import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {TextField} from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import "../../css/ckContent.css"
import { forwardRef, useImperativeHandle } from "react";
import UserBlockSelectBox from "../selectBox/UserBlockSelectBox";

const ReportSearchModal = forwardRef((props, ref) => {
    const [reportModalObject, setReportModalObject] = useState({ '_id': '', 'check': false, 'type': '', 'code': '', 'createdAt': 0, 'user1': '', 'remark': '', 'title': '', 'link': '', 'user2': '', 'postId': '', 'usage': true, 'block': false, 'userId': ''});
    const [token, setToken] = useState(true);
    const [loading, setLoading] = useState(true);

    useImperativeHandle(ref, () => ({
        modalReload: (_id: string) => {
            axios.get('/getReportObject', {params: {_id: _id}}).then(value => {
                reportModalObject._id = value.data.data._id;
                reportModalObject.check = value.data.data.check;
                reportModalObject.type = value.data.data.type;
                reportModalObject.code = value.data.data.code;
                reportModalObject.createdAt = value.data.data.createdAt;
                reportModalObject.user1 = value.data.data.user1;
                reportModalObject.remark = value.data.data.remark;
                reportModalObject.title = value.data.data.title;
                reportModalObject.link = value.data.data.link;
                reportModalObject.user2 = value.data.data.user2;
                reportModalObject.usage = value.data.data.usage;
                reportModalObject.postId = value.data.data.postId;
                reportModalObject.userId = value.data.data.userId;
                reportModalObject.block = value.data.data.block;

            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                document.getElementById("loading").style.display = 'none';
                document.getElementById('report_search_modal').style.display = 'flex';
                setReportModalObject(reportModalObject);
                setToken(!token);
            });
        }
    }));

    useEffect(() => {
        return {}
    }, [token, reportModalObject])

    function modalClose() {
        document.getElementById('report_search_modal').style.display = 'none';
        setReportModalObject({ '_id': '', 'check': false, 'type': '', 'code': '', 'createdAt': 0, 'user1': '', 'remark': '', 'title': '', 'link': '', 'user2': '', 'postId': '', 'usage': true, 'block': false, 'userId': ''});
    }

    function windowOpen(link: string) {
        window.open(link, '_blank');
    }

    function btn_report_modal_usage_click() {
        setLoading(true);

        if (reportModalObject.usage) {
            axios.get('/postUsageFalse', {params: {_id: reportModalObject.postId}}).then(value => {
                alert('변경되었습니다.');
                reportModalObject.usage = false;
                setReportModalObject(reportModalObject);
                setToken(!token);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        } else {
            axios.get('/postUsageTrue', {params: {_id: reportModalObject.postId}}).then(value => {
                alert('변경되었습니다.');
                reportModalObject.usage = true;
                setReportModalObject(reportModalObject);
                setToken(!token);
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });
        }

        setLoading(false);
    }

    function btn_block_click(code: string) {
        if (!reportModalObject.block) {
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

            axios.get('/userBlock', {params: {_id: reportModalObject.userId, time: time}}).then(value => {
                alert('차단되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                reportModalObject.block = true;
                setReportModalObject(reportModalObject);
                setToken(!token);
            });
        } else {
            axios.get('/userUnblock', {params: {_id: reportModalObject.userId}}).then(value => {
                alert('차단 해제되었습니다.');
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                reportModalObject.block = false;
                setReportModalObject(reportModalObject);
                setToken(!token);
            });
        }
    }

    return (
        <Box id ={"report_search_modal"} style={{ display: 'none', position: 'absolute', width: '100%', height: '700px', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
            <Box style={{ position: 'fixed', background: 'white', width: '1000px', height: '350px', marginBottom: '150px', border: '1px solid'}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4348cf', width: '1000px', height: '35px'}}>
                    <Box style={{ display: 'flex', width: '1000px' }}>
                        <Box style={{ width: '1460px', paddingLeft: '20px', textAlign: 'start', color: 'white', fontWeight: 600, fontSize: '16px'}}>
                            신고 세부 조회
                        </Box>
                        <Box style={{ cursor: 'pointer', width: '40px', paddingRight: '20px', textAlign: 'end', color: 'white', fontWeight: 600, fontSize: '16px'}} onClick={(e)=>{modalClose()}}>
                            X
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', width: '1000px', paddingTop: '20px' }}>
                    <Box style={{ width: '900px' }}>
                        <Box style={{ display: 'flex', marginLeft: '5px' }}>
                            <Box style={{ width: '90px' }}>유형</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"report_modal_type"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={reportModalObject.type}></TextField>
                                <TextField hiddenLabel id={"report_modal_id"} style={{marginTop: '-5px', display: 'none'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={reportModalObject._id}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px', marginLeft: '5px' }}>
                            <Box style={{ width: '90px' }}>구분</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"report_modal_code"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={reportModalObject.code}></TextField>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px', marginLeft: '5px' }}>
                            <Box style={{ width: '90px' }}>작성일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"report_modal_createdAt"} style={{marginTop: '-2px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={moment(new Date(reportModalObject.createdAt)).format("YYYY-MM-DD HH:mm:ss")}/>
                            </Box>
                        </Box>
                        
                        <Box style={{ display: 'flex', marginTop: '10px', marginLeft: '5px' }}>
                            <Box style={{ width: '90px' }}>신고자</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"report_modal_user1"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={reportModalObject.user1}></TextField>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px', marginLeft: '5px' }}>
                            <Box style={{ width: '90px' }}>비고</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"report_modal_remark"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={reportModalObject.remark}></TextField>
                            </Box>
                        </Box>
                        
                        <Box style={{ height: '20px', borderBottom: '3px solid black' }}></Box>

                        <Box style={{ display: 'flex', marginTop: '20px', marginLeft: '5px' }}>
                            <Box style={{ width: '90px' }}>게시글</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"report_modal_title"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={reportModalObject.title} onClick={(e)=>{windowOpen(reportModalObject.link)}}></TextField>
                            </Box>

                            {
                                reportModalObject.usage ?
                                    <Button style={{ background: '#FF7272', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_report_modal_usage_click()}}>삭제</Button>
                                    :
                                    <Button style={{ background: '#7277FF', color: 'white', width: '60px', borderRadius: '6px' }} onClick={(e)=>{btn_report_modal_usage_click()}}>복구</Button>
                            }
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px', marginLeft: '5px' }}>
                            <Box style={{ width: '90px' }}>작성자</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"report_modal_user2"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={reportModalObject.user2}></TextField>
                            </Box>

                            {
                                reportModalObject.block ?
                                    <Button style={{background: '#7277FF', color: 'white', width: '60px', height: '25px', borderRadius: '6px' }} onClick={(e)=>{btn_block_click(document.getElementById('user_block_select_box').options[document.getElementById('user_block_select_box').selectedIndex].value)}}>복구</Button> :
                                    <Button style={{background: '#FF7272', color: 'white', width: '60px', height: '25px', borderRadius: '6px' }} onClick={(e)=>{btn_block_click(document.getElementById('user_block_select_box').options[document.getElementById('user_block_select_box').selectedIndex].value)}}>차단</Button>
                            }

                            <Box style={{ width: '100px', marginLeft: '10px' }}>
                                <UserBlockSelectBox/>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
});

export default ReportSearchModal;