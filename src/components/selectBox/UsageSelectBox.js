import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function UsageSelectBox(props) {
    const usage_select_change = () => {
        props.getUsageData(document.getElementById("usage_select_box").options[document.getElementById("usage_select_box").selectedIndex].innerText);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Typography style={{ fontSize: '14px', fontWeight: 600 }}>사용</Typography>
            <Box style={{ position: 'relative', height: '100%', marginLeft: '10px', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="usage_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{usage_select_change()}}>
                    <option value="" style={{ fontSize: '16px' }}></option>
                    <option value="true" style={{ fontSize: '16px' }}>true</option>
                    <option value="false" style={{ fontSize: '16px' }}>false</option>
                </select>
            </Box>
        </Box>

    );
}

export default UsageSelectBox;
