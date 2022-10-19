import Box from "@mui/material/Box";
import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import Button from "@mui/material/Button";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import $ from "jquery";
import axios from "axios";

const CodeManagementModal = forwardRef((props, ref) => {
    const [codeManagementModalObject, setCodeManagementModalObject] = useState({ '_id': '', 'code': '', 'name': '', 'timestamp': 0, 'type': '', 'data1': [], 'data2': []});
    const [token, setToken] = useState(true);

    useImperativeHandle(ref, () => ({
        modalReload: (_id: string) => {
            $('#code_management_modal_table > tbody').empty();

            document.getElementById("loading").style.display = 'flex';

            if (_id !== '') {
                axios.get('/getCommonCodeId', {params: {_id: _id}}).then(value => {
                    codeManagementModalObject._id = value.data.data._id;
                    codeManagementModalObject.code = value.data.data.code;
                    codeManagementModalObject.name = value.data.data.name;
                    codeManagementModalObject.timestamp = value.data.data.timestamp;
                    codeManagementModalObject.type = value.data.data.type;

                    document.getElementById('common_code_code').value = value.data.data.code;
                    document.getElementById('common_code_name').value = value.data.data.name;

                    if (value.data.data.type === 'object') {
                        document.getElementById('type_select_box').selectedIndex = 0;
                        let keys = Object.keys(value.data.data.value);
                        let values = Object.values(value.data.data.value);
                        let objectList = [];

                        for (let i=0; i<keys.length; i++) {
                            objectList.push(keys[i] + '||' + values[i]);
                        }

                        codeManagementModalObject.data1 = objectList;
                    } else if (value.data.data.type === 'list') {
                        document.getElementById('type_select_box').selectedIndex = 1;
                        codeManagementModalObject.data2 = value.data.data.value;
                    }
                }).catch(reason => {
                    alert(reason);
                }).finally(() => {
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById('modal').style.display = 'flex';

                    setCodeManagementModalObject(codeManagementModalObject);
                    setToken(!token);
                });
            } else {
                document.getElementById('common_code_code').value = '';
                document.getElementById('common_code_name').value = '';
                document.getElementById("loading").style.display = 'none';
                document.getElementById('modal').style.display = 'flex';
                codeManagementModalObject.type = 'object';
                setCodeManagementModalObject(codeManagementModalObject);
                setToken(!token);
                rowAppend();
            }
        }
    }));

    useEffect(() => {
        return {}
    }, [token, codeManagementModalObject])

    function modalClose() {
        setCodeManagementModalObject({ '_id': '', 'code': '', 'name': '', 'timestamp': 0, 'type': '', 'data1': [], 'data2': []});
        document.getElementById('modal').style.display = 'none';
    }

    function rowDelete() {
        let rowCount = document.getElementById('code_management_modal_table_body').rows.length;
        document.getElementById('code_management_modal_table_body').deleteRow(rowCount - 1);
    }

    function saveCommonCode() {
        let rowCount = document.getElementById('code_management_modal_table_body').rows.length;
        let codeList = [];
        let nameList = [];

        let common_code_code = document.getElementById('common_code_code').value;
        let common_code_name = document.getElementById('common_code_name').value;

        if (common_code_code === '' || common_code_name === '') {
            alert('구분/명칭 값을 입력해주세요.');
        }

        for (let i=0; i<rowCount; i++) {
            if (document.getElementById("type_select_box").options[document.getElementById("type_select_box").selectedIndex].value === 'object') {
                let value1 = document.getElementById('code_management_modal_table_row_code_' + i).value;
                let value2 = document.getElementById('code_management_modal_table_row_name_' + i).value

                if (value1.indexOf(',') !== -1 || value2.indexOf(',') !== -1) {
                    alert(',(쉼표) 는 입력할 수 없습니다.');
                    return;
                }

                if (value1.trim() === '') {
                    alert('코드에 빈값을 입력할 수 없습니다.');
                    return;
                }

                if(!codeList.includes(value1)) {
                    codeList.push(value1);
                } else {
                    alert('중복된 코드가 입력되었습니다.');
                    return;
                }

                nameList.push(value2);
            } else if (document.getElementById("type_select_box").options[document.getElementById("type_select_box").selectedIndex].value === 'list') {
                let value2 = document.getElementById('code_management_modal_table_row_name_' + i).value;

                if (value2.indexOf(',') !== -1) {
                    alert(',(쉼표) 는 입력할 수 없습니다.');
                    return;
                }

                nameList.push(value2);
            }
        }

        axios.get('/saveCommonCode', {params: { type: document.getElementById("type_select_box").options[document.getElementById("type_select_box").selectedIndex].value
                , code: common_code_code, name: common_code_name, codeList: codeList.toString(), nameList: nameList.toString() }}).then(value => {
            window.location.reload();
        }).catch(reason => {
            alert(reason);
        }).finally(() => {
        });
    }

    function rowAppend() {
        let rowCount = document.getElementById('code_management_modal_table_body').rows.length;

        if (codeManagementModalObject.type === 'object') {
            $('#code_management_modal_table_body').append('<tr style="text-align: center;">' +
                '<td style="border-top: 1px solid black;border-right: 1px solid black;">' +
                '<textarea id="code_management_modal_table_row_code_' + rowCount + '"  style="border: none; resize: none; width: 90%; height: 18px; text-align: center; outline: none;" autocomplete="off">' +
                '</textarea>' +
                '</td>' +
                '<td style="border-top: 1px solid black;">' +
                '<textarea id="code_management_modal_table_row_name_' + rowCount + '"  style="border: none; resize: none; width: 90%; height: 18px; text-align: center; outline: none;" autocomplete="off">' +
                '</textarea>' +
                '</td>' +
                '</tr>')
        } else if (codeManagementModalObject.type === 'list') {
            $('#code_management_modal_table_body').append('<tr style="text-align: center;">' +
                '<td style="border-top: 1px solid black;">' +
                '<textarea id="code_management_modal_table_row_name_' + rowCount + '"  style="margin-bottom: -5px; border: none; resize: none; width: 90%; height: 18px; text-align: center; outline: none;" autocomplete="off">' +
                '</textarea>' +
                '</td>' +
                '</tr>')
        }

    }

    function type_select_change() {
        $('#code_management_modal_table > tbody').empty();

        if (document.getElementById('type_select_box').selectedIndex === 0) {
            codeManagementModalObject.type = 'object';
        } else if (document.getElementById('type_select_box').selectedIndex === 1) {

            codeManagementModalObject.type = 'list';
        }

        setCodeManagementModalObject(codeManagementModalObject);
        setToken(!token);
        rowAppend();
    }

    return (
        <Box id ={"modal"} style={{ display: 'none', position: 'absolute', width: '100%', height: '90%', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
            <Box style={{ position: 'fixed', background: 'white', width: '700px', height: '500px', marginBottom: '250px', border: '1px solid'}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4348cf', width: '700px', height: '35px'}}>
                    <Box style={{ display: 'flex', width: '700px' }}>
                        <Box style={{ width: '660px', paddingLeft: '20px', textAlign: 'start', color: 'white', fontWeight: 600, fontSize: '16px'}}>
                            코드 관리 세부 조회
                        </Box>
                        <Box style={{ cursor: 'pointer', width: '40px', paddingRight: '20px', textAlign: 'end', color: 'white', fontWeight: 600, fontSize: '16px'}} onClick={(e)=>{modalClose()}}>
                            X
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', overflowY: 'scroll', width: '700px', height: '445px', paddingTop: '20px' }}>
                    <Box style={{ width: '640px' }}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ width: '60px' }}>자료형</Box>
                            <Box style={{ position: 'relative', height: '100%', marginRight: '40px', borderRadius: '5px', border: '2px solid gray'}}>
                                {
                                    codeManagementModalObject.code !== '' ?
                                        <select id="type_select_box" disabled={true} style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{type_select_change()}}>
                                            <option value="object" style={{ fontSize: '16px' }}>object</option>
                                            <option value="list" style={{ fontSize: '16px' }}>list</option>
                                        </select>
                                        :
                                        <select id="type_select_box" style={{ position: 'relative', width: '80px', height: '100%', background: 'transparent', border: '0 none', padding: '0 5px', zIndex: '3' }} onChange={(e)=>{type_select_change()}}>
                                            <option value="object" style={{ fontSize: '16px' }}>object</option>
                                            <option value="list" style={{ fontSize: '16px' }}>list</option>
                                        </select>
                                }

                            </Box>
                            <Box style={{ width: '55px' }}>구분 :</Box>
                            <Box style={{ width: '155px' }}>
                                <textarea id={"common_code_code"} style={{outline: 'none', resize: 'none', border: 'none', height: '24px', textAlign: 'center', borderBottom: '1px solid black'}} autoComplete={"off"}></textarea>
                            </Box>

                            <Box style={{ width: '55px', marginLeft: '30px'}}>명칭 :</Box>
                            <Box style={{ width: '155px' }}>
                                <textarea id={"common_code_name"} style={{outline: 'none', resize: 'none', border: 'none', height: '24px', textAlign: 'center', borderBottom: '1px solid black'}} autoComplete={"off"}></textarea>
                            </Box>
                            <Box id={"modal_value"} hidden/>
                        </Box>

                        <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button style={{ marginTop: '10px', background: '#7277FF', color: 'white', width: '70px', borderRadius: '6px' }} onClick={(e)=>{rowAppend()}}>행추가</Button>
                            <Button style={{ marginTop: '10px', marginLeft: '15px', background: '#FF7272', color: 'white', width: '70px', borderRadius: '6px' }} onClick={(e)=>{rowDelete()}}>행삭제</Button>
                        </Box>

                        <Box>
                            {
                                codeManagementModalObject.type === 'object' ?
                                    <TableContainer style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', border: '1px solid black' }}>
                                        <Table id={"code_management_modal_table"} style={{ width: '640px' }}>
                                            <TableHead style={{ background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                                <TableRow>
                                                    <TableCell align="center" style={{ width: '50%', padding: '0px', borderRight: '1px solid black', borderBottom: '1px solid black'}}>코드</TableCell>
                                                    <TableCell align="center" style={{ width: '50%', padding: '0px', borderBottom: '1px solid black' }}>명칭</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody id={"code_management_modal_table_body"}>
                                                {
                                                    codeManagementModalObject.data1.map((data, index) => {
                                                        let text1 = data.split('||')[0];
                                                        let text2 = data.split('||')[1];
                                                        return (
                                                            <TableRow>
                                                                <TableCell align="center" style={{padding: '0px', borderBottom: '1px solid black', borderRight: '1px solid black'}}>
                                                                    <textarea id={"code_management_modal_table_row_code_" + index} style={{ marginBottom: '-5px', border: 'none', resize: 'none', width: '90%', height: '18px', textAlign: 'center', outline: 'none' }} autoComplete="off">
                                                                        {text1}
                                                                    </textarea>
                                                                </TableCell>
                                                                <TableCell align="center" style={{padding: '0px', borderBottom: '1px solid black'}}>
                                                                    <textarea id={"code_management_modal_table_row_name_" + index} style={{ marginBottom: '-5px', border: 'none', resize: 'none', width: '90%', height: '18px', textAlign: 'center', outline: 'none' }} autoComplete="off">
                                                                        {text2}
                                                                    </textarea>
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    :
                                    <TableContainer style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', border: '1px solid black' }}>
                                        <Table id={"code_management_modal_table"} style={{ width: '640px' }}>
                                            <TableHead style={{ background: '#C4C4C4', borderBottom: '1px solid black' }}>
                                                <TableRow>
                                                    <TableCell align="center" style={{ width: '50%', padding: '0px', borderBottom: '1px solid black' }}>명칭</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody id={"code_management_modal_table_body"}>
                                                {
                                                    codeManagementModalObject.data2.map((data, index) => {
                                                        return (
                                                            <TableRow>
                                                                <TableCell align="center" style={{padding: '0px', borderBottom: '1px solid black'}}>
                                                                    <textarea id={"code_management_modal_table_row_name_" + index} style={{ marginBottom: '-5px', border: 'none', resize: 'none', width: '90%', height: '18px', textAlign: 'center', outline: 'none' }} autoComplete="off">
                                                                        {data}
                                                                    </textarea>
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                            }
                        </Box>

                        <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button style={{ marginTop: '10px', marginBottom: '20px', background: '#7277FF', color: 'white', width: '70px', borderRadius: '6px' }} onClick={(e)=>{saveCommonCode()}}>저장</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
});

export default CodeManagementModal;