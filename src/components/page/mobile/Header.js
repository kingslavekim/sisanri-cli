import * as React from 'react';
import Box from '@mui/material/Box';
import '../../../css/Paging.css'
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';

import logo from '../../../image/logo.PNG'
import font_logo from '../../../image/font_icon_black.png'

function Header() {
    function goUrl(url: string) {
        window.location.href = url;
    }

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <BurgerMenu width={ '70%' } right>
                <Link className={"mobile_header_menu"} to="/MHelloPage">센터소개</Link>
                <Link className={"mobile_header_menu"} to="/MPlacePage" >시설안내</Link>
                <Link className={"mobile_header_menu"} to="/MUseGuidePage">이용안내</Link>
                <Link className={"mobile_header_menu"} to="/MNoticePage">공지사항</Link>
                <Link className={"mobile_header_menu"} to="/MVolunteerPage">봉사지원</Link>
                <Link className={"mobile_header_menu"} to="/MSupportPage">후원</Link>
                <Link className={"mobile_header_menu"} to="/MIrPage">재정공개</Link>
                <Link className={"mobile_header_menu"} to="/MGalleryPage">갤러리</Link>
            </BurgerMenu>

            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '30px 0px 30px 0px' }}>
                <Box style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={(e)=>{goUrl('/')}}>
                    <img style={{height: '40px'}} src={logo}  alt="logo"/>
                    <img style={{height: '60px'}} src={font_logo}  alt="font_logo"/>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
