import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function ReportTypeSelectBox(props) {
    const report_type_select_change = () => {
        props.getReportTypeData(document.getElementById("report_type_select_box").options[document.getElementById("report_type_select_box").selectedIndex].innerText);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Typography style={{ fontSize: '14px', fontWeight: 600 }}>구분</Typography>
            <Box style={{ position: 'relative', height: '100%', marginLeft: '10px', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="report_type_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{report_type_select_change()}}>
                    <option value="" style={{ fontSize: '16px' }}></option>
                    <option value="A" style={{ fontSize: '16px' }}>게시글</option>
                    <option value="B" style={{ fontSize: '16px' }}>댓글</option>
                </select>
            </Box>
        </Box>
    );
}

export default ReportTypeSelectBox;
