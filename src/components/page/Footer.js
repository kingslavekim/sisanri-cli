import * as React from 'react';
import Box from '@mui/material/Box';
import '../../css/Paging.css'

import call from "../../image/call.png";

function Footer() {
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '80px 0px 0px 0px', background: '#323437' }}>
                <Box style={{ width: '75%', margin: '50px 0px 50px 150px' }}>
                    <Box className={"footer_font1"}>시산리아리랑 돌봄공동체</Box>
                    <Box style={{ margin: '30px 0px 3px 0px' }} className={"footer_font2"}>대표자 : 강희진</Box>
                    <Box className={"footer_font2"}>사업자등록번호 : 302-82-73308</Box>
                    <Box className={"footer_font2"}>주소 : 충청남도 예산군 대술면 시산동길 68</Box>
                    <Box className={"footer_font2"}>이메일 : fa-ac@hanmail.net </Box>
                    <Box className={"footer_font2"}>Copyright © 2022. 시산리아리랑 돌봄공동체. All right reserved.</Box>
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', width: '25%' }}>
                    <img src={call}  alt="call"/>
                    <Box className={"footer_font3"}>041-333-2022</Box>
                </Box>

            </Box>
        </Box>
    );
}

export default Footer;
