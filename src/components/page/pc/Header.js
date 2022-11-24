import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import '../../../css/Paging.css'
import { Link } from 'react-router-dom';

import logo from '../../../image/logo.PNG'
import font_logo from '../../../image/font_icon_black.png'

function Header() {
    function showMenu() {
        document.getElementById('menu_drop').style.display = 'flex';
    }

    function closeMenu() {
        document.getElementById('menu_drop').style.display = 'none';
    }

    function goUrl(url: string) {
        window.location.href = url;
    }

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onMouseOut={(e)=>{closeMenu()}}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '30px 0px 30px 0px' }}>
                <Box style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={(e)=>{goUrl('/')}}>
                    <img style={{height: '60px'}} src={logo}  alt="logo"/>
                    <img style={{height: '80px'}} src={font_logo}  alt="font_logo"/>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '0px 0px 10px 0px' }} onMouseOver={(e)=>{showMenu()}}>
                <Box style={{ display: 'flex', width: '60%', borderColor: 'divider', justifyContent: 'space-around' }}>
                    <Link  id={"header_btn_1"} className={"header_menu"} to="/HelloPage" onClick={(e)=>{closeMenu()}}>센터소개</Link>
                    <Link  id={"header_btn_2"} className={"header_menu"} to="/PlacePage" onClick={(e)=>{closeMenu()}}>시설안내</Link>
                    <Link  id={"header_btn_3"} className={"header_menu"} to="/UseGuidePage" onClick={(e)=>{closeMenu()}}>이용안내</Link>
                    <Link  id={"header_btn_4"} className={"header_menu"} to="/NoticePage" onClick={(e)=>{closeMenu()}}>공지사항</Link>
                    <Link  id={"header_btn_5"} className={"header_menu"} to="/VolunteerPage" onClick={(e)=>{closeMenu()}}>봉사지원</Link>
                    <Link  id={"header_btn_6"} className={"header_menu"} to="/SupportPage" onClick={(e)=>{closeMenu()}}>후원</Link>
                    <Link  id={"header_btn_7"} className={"header_menu"} to="/IrPage" onClick={(e)=>{closeMenu()}}>재정공개</Link>
                    <Link  id={"header_btn_8"} className={"header_menu"} to="/GalleryPage" onClick={(e)=>{closeMenu()}}>갤러리</Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
