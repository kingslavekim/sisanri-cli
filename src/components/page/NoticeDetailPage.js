import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import moment from "moment";
import axios from "axios";

import small_banner from "../../image/small_banner.jpg";
import home from "../../image/home.png";

function NoticeDetailPage(props) {
    const [noticeObject, setNoticeObject] = useState({});

    useEffect(() => {
        let query = window.location.href;
        let no = query.split('?')[1].split('=')[1]

        axios.get('/api/getNoticeObject?no=' + no, {}).then(value => {
            setNoticeObject(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        return {}
    }, [])

    const noticeData: any = {};
    noticeData.noticeObject = noticeObject;

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

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'center', margin: '20px 0px 0px 0px' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', background: '#D9D9D9', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                        <Box className={"notice_detail_page_main_row1"}>{noticeData.noticeObject.title}</Box>
                        <Box className={"notice_detail_page_main_row2"}>작성일 : {moment(new Date(noticeData.noticeObject.createdAt)).format("YYYY-MM-DD")}</Box>
                    </Box>

                    <Box style={{ display: 'flex', width: '90%', borderBottom: '1px solid black', wordBreak: 'break-all' }}>
                        <Box className="ck-content" dangerouslySetInnerHTML={{__html: noticeData.noticeObject.content}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default NoticeDetailPage;
