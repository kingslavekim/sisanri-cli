import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function ReplyCategorySelectBox(props) {
    const reply_category_select_change = () => {
        props.getReplyCategoryData(document.getElementById("reply_category_select_box").options[document.getElementById("reply_category_select_box").selectedIndex].value);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Typography style={{ fontSize: '14px', fontWeight: 600 }}>댓글유형</Typography>
            <Box style={{ position: 'relative', height: '100%', marginLeft: '10px', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="reply_category_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{reply_category_select_change()}}>
                    <option value="" style={{ fontSize: '16px' }}></option>
                    <option value="text" style={{ fontSize: '16px' }}>텍스트</option>
                    <option value="image" style={{ fontSize: '16px' }}>사진</option>
                </select>
            </Box>
        </Box>

    );
}

export default ReplyCategorySelectBox;
