import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import moment from "moment";
import axios from "axios";

import small_banner from "../../image/small_banner.png";
import home from "../../image/home.png";

function IrDetailPage(props) {
    const [irObject, setIrObject] = useState({});

    useEffect(() => {
        let query = window.location.search;
        let param = new URLSearchParams(query);
        let no = param.get('no');

        axios.get('/api/getIrObject?no=' + no, {}).then(value => {
            setIrObject(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        return {}
    }, [])

    const irData: any = {};
    irData.irObject = irObject;

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
                        <Box className={"ir_detail_page_main_row1"}>{irData.irObject.title}</Box>
                        <Box className={"ir_detail_page_main_row2"}>작성일 : {moment(new Date(irData.irObject.createdAt)).format("YYYY-MM-DD")}</Box>
                    </Box>

                    <Box style={{ display: 'flex', width: '90%', borderBottom: '1px solid black', wordBreak: 'break-all' }}>
                        <Box className="ck-content" dangerouslySetInnerHTML={{__html: irData.irObject.content}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default IrDetailPage;
