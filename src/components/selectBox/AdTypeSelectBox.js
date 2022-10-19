import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function AdTypeSelectBox(props) {
    const ad_type_select_change = () => {
        props.getAdTypeData(document.getElementById("ad_type_select_box").options[document.getElementById("ad_type_select_box").selectedIndex].innerText);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Typography style={{ fontSize: '14px', fontWeight: 600 }}>구분</Typography>
            <Box style={{ position: 'relative', height: '100%', marginLeft: '10px', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="ad_type_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{ad_type_select_change()}}>
                    <option value="" style={{ fontSize: '16px' }}></option>
                    <option value="mobile" style={{ fontSize: '16px' }}>모바일</option>
                    <option value="pc" style={{ fontSize: '16px' }}>PC</option>
                </select>
            </Box>
        </Box>

    );
}

export default AdTypeSelectBox;
