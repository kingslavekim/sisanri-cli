import * as React from 'react';
import Box from "@mui/material/Box";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(props) {
    const search_btn_click = (division) => {
        props.getSearchData(document.getElementById("search_input").value);
    }

    const push_enter_key = (e) => {
        if (e.key === 'Enter') {
            search_btn_click(props.division);
        }
    }

    return (
        <Box style={{ display: 'flex', width: '100%', alignItems: 'center', backgroundColor: '#dbdbdb', paddingLeft: '15px', paddingRight: '8px', borderRadius: '8px' }}>
            <Box style={{ display: 'flex', width: '100%' }}>
                <InputBase id={"search_input"} style={{ width: '100%' }} placeholder="검색" autoComplete={'off'} onKeyPress={push_enter_key}/>
                <IconButton type="submit" style={{ padding: '1px' }} aria-label="search" onClick={(e)=>{search_btn_click(props.division)}}>
                    <SearchIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default SearchBox;
