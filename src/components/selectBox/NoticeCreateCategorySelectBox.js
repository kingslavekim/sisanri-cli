import * as React from 'react';
import Box from "@mui/material/Box";

function NoticeCreateCategorySelectBox(props) {
    const notice_create_category_select_change = () => {
        props.getNoticeCreateCategoryData(document.getElementById("notice_create_category_select_box").options[document.getElementById("notice_create_category_select_box").selectedIndex].innerText);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Box style={{ position: 'relative', height: '100%', marginLeft: '10px', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="notice_create_category_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{notice_create_category_select_change()}}>
                    <option value="" style={{ fontSize: '16px' }}></option>
                    <option value="popup" style={{ fontSize: '16px' }}>팝업</option>
                    <option value="common" style={{ fontSize: '16px' }}>공통</option>
                    <option value="humor" style={{ fontSize: '16px' }}>유머</option>
                    <option value="free" style={{ fontSize: '16px' }}>자유</option>
                </select>
            </Box>
        </Box>

    );
}

export default NoticeCreateCategorySelectBox;
