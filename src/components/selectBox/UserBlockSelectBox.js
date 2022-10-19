import * as React from 'react';
import Box from "@mui/material/Box";

function UserBlockSelectBox() {
    return (
        <Box style={{ display: 'flex', alignItems: 'center' }} >
            <Box style={{ position: 'relative', height: '100%', borderRadius: '5px', border: '2px solid gray'}}>
                <select id="user_block_select_box" defaultValue="0" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }}>
                    <option value="A" style={{ fontSize: '16px' }}></option>
                    <option value="B" style={{ fontSize: '16px' }}>1H</option>
                    <option value="C" style={{ fontSize: '16px' }}>6H</option>
                    <option value="D" style={{ fontSize: '16px' }}>12H</option>
                    <option value="E" style={{ fontSize: '16px' }}>24H</option>
                </select>
            </Box>
        </Box>
    );
}

export default UserBlockSelectBox;
