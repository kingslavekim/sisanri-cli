import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function AdCreateTypeSelectBox(props) {
    const ad_create_type_select_change = () => {
        props.getAdCreateTypeData(document.getElementById("ad_create_modal_type_select_box").options[document.getElementById("ad_create_modal_type_select_box").selectedIndex].innerText);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Typography style={{ fontSize: '14px', fontWeight: 600 }}></Typography>
            <Box style={{ position: 'relative', height: '100%', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="ad_create_modal_type_select_box" defaultValue="0" style={{ position: 'relative', width: '180px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{ad_create_type_select_change()}}>
                    <option value="A" style={{ fontSize: '16px' }}>웹 상단(950 * 200)</option>
                    <option value="B" style={{ fontSize: '16px' }}>웹 중앙(950 * 90)</option>
                    <option value="C" style={{ fontSize: '16px' }}>웹 왼쪽(300 * 735)</option>
                    <option value="D" style={{ fontSize: '16px' }}>웹 오른쪽(300 * 735)</option>
                    <option value="E" style={{ fontSize: '16px' }}>웹 하단(300 * 735)</option>

                    <option value="F" style={{ fontSize: '16px' }}>모바일 상단(640 * 100)</option>
                    <option value="G" style={{ fontSize: '16px' }}>모바일 중앙(640 * 200)</option>
                    <option value="H" style={{ fontSize: '16px' }}>모바일 하단(640 * 100)</option>
                </select>
            </Box>
        </Box>

    );
}

export default AdCreateTypeSelectBox;
