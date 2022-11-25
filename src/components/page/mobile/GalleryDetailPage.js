import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import moment from "moment";
import axios from "axios";

import small_banner from "../../../image/mobile_banner.jpg";
import home from "../../../image/home.png";

function MGalleryDetailPage(props) {
    const [galleryObject, setGalleryObject] = useState({});

    useEffect(() => {
        let query = window.location.href;
        let no = query.split('?')[1].split('=')[1]

        axios.get('/api/getGalleryObject?no=' + no, {}).then(value => {
            setGalleryObject(value.data.data);
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });

        return {}
    }, [])

    const galleryData: any = {};
    galleryData.galleryObject = galleryObject;

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                    <Box className={"main_header_text"}>갤러리</Box>
                    <Box className={"main_header_path_text"}>
                        <img src={home}  alt="home"/>
                        <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 갤러리</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '90%', justifyContent: 'center', margin: '20px 0px 0px 0px' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', background: '#D9D9D9', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                        <Box className={"gallery_detail_page_main_row1"}>{galleryData.galleryObject.title}</Box>
                        <Box className={"gallery_detail_page_main_row2"}>작성일 : {moment(new Date(galleryData.galleryObject.createdAt)).format("YYYY-MM-DD")}</Box>
                    </Box>

                    <Box style={{ display: 'flex', width: '100%', borderBottom: '1px solid black', wordBreak: 'break-all' }}>
                        <Box className="ck-content" dangerouslySetInnerHTML={{__html: galleryData.galleryObject.content}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MGalleryDetailPage;
