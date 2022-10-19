import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";

function CategorySelectBox(props) {
    const category_select_change = () => {
        props.getCategoryData(document.getElementById("category_select_box").options[document.getElementById("category_select_box").selectedIndex].innerText);
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Typography style={{ fontSize: '14px', fontWeight: 600 }}>카테고리</Typography>
            <Box style={{ position: 'relative', height: '100%', marginLeft: '10px', borderRadius: '10px', border: '2px solid gray'}}>
                <select id="category_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{category_select_change()}}>
                    <option value="" style={{ fontSize: '16px' }}></option>
                    <option value="humor" style={{ fontSize: '16px' }}>유머</option>
                    <option value="free" style={{ fontSize: '16px' }}>자유</option>
                </select>
            </Box>
        </Box>

    );
}

export default CategorySelectBox;
