import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function ReportCheckSelectBox(props) {
    const report_check_select_change = () => {
        props.getReportCheckData(document.getElementById("report_check_select_box").options[document.getElementById("report_check_select_box").selectedIndex].innerText);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Typography style={{ fontSize: '14px', fontWeight: 600 }}>처리</Typography>
            <Box style={{ position: 'relative', height: '100%', marginLeft: '10px', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="report_check_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{report_check_select_change()}}>
                    <option value="" style={{ fontSize: '16px' }}></option>
                    <option value="true" style={{ fontSize: '16px' }}>완료</option>
                    <option value="false" style={{ fontSize: '16px' }}>미완료</option>
                </select>
            </Box>
        </Box>
    );
}

export default ReportCheckSelectBox;
