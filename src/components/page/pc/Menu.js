import * as React from 'react';
import Box from '@mui/material/Box';
import '../../../css/Paging.css'
import { Link } from 'react-router-dom';

function Menu() {
    function showMenu() {
        document.getElementById('menu_drop').style.display = 'flex';
    }

    function closeMenu() {
        document.getElementById('menu_drop').style.display = 'none';
    }

    return (
        <Box id={"menu_drop"} style={{ display: 'none', flexDirection: 'column', alignItems: 'center' }} onMouseOver={(e거)=>{showMenu()}} onMouseOut={(e)=>{closeMenu()}}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'absolute', background: 'white', borderTop: '2px solid black' }}>
                <Box style={{ display: 'flex', width: '60%', flexDirection: 'column' }}>
                    <Box className={"menu_row"}>
                        <Link className={"menu_down_text"} to="/HelloPage" onClick={(e)=>{closeMenu()}}>인사말</Link>
                        <Box className={"menu_down_none"}></Box>
                        <Link className={"menu_down_text"} to="/UseGuidePage" onClick={(e)=>{closeMenu()}}>이용안내</Link>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                    </Box>
                    <Box className={"menu_row"}>
                        <Link className={"menu_down_text"} to="/HistoryPage" onClick={(e)=>{closeMenu()}}>연혁</Link>
                        <Box className={"menu_down_none"}></Box>
                        <Link className={"menu_down_text"} to="/UseFeePage" onClick={(e)=>{closeMenu()}}>이용요금</Link>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                    </Box>
                    <Box className={"menu_row"}>
                        <Link className={"menu_down_text"} to="/MapPage" onClick={(e)=>{closeMenu()}}>오시는 길</Link>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                        <Box className={"menu_down_none"}></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Menu;
