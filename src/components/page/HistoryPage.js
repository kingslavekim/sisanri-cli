import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

import small_banner from "../../image/small_banner.png";
import home from "../../image/home.png";

function HistoryPage(props) {
    useEffect(() => {
        return {}
    }, [])

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>
            <Box style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                <Box style={{ width: '10%' }}>
                    <Box className={"hello_page_left_top_menu"}>센터소개</Box>
                    <Box>
                        <Link className={"hello_page_left_down_menu"} to="/인사말">인사말</Link>
                    </Box>
                    <Box>
                        <Link className={"hello_page_left_down_menu"} to="/연혁">연혁</Link>
                    </Box>
                    <Box>
                        <Link className={"hello_page_left_down_menu"} to="/오시는 길">오시는 길</Link>
                    </Box>
                </Box>
                <Box style={{ width: '85%'}}>
                    <Box style={{ display: 'flex', width: '85%', borderBottom: '2px solid black'}}>
                        <Box className={"hello_page_main_header_text"}>연혁</Box>
                        <Box className={"hello_page_main_header_path_text"}>
                            <img src={home}  alt="home"/>
                            <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 센터소개 > 연혁</Box>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'column', width: '85%', margin: '20px 0px 0px 0px' }}>

                    </Box>


                </Box>
            </Box>
        </Box>
    );
};

export default HistoryPage;
