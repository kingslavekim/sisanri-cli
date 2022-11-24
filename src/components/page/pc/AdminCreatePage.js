import React, {useEffect, useMemo, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import axios from "axios";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
import Select from 'react-select'

import small_banner from "../../../image/small_banner.jpg";
import home from "../../../image/home.png";
import {TextField} from "@material-ui/core";
import Button from "@mui/material/Button";
Quill.register('modules/ImageResize', ImageResize);

function AdminCreatePage(props) {
    const [createObject] = useState({});
    const [value, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('notice');
    const quillRef = useRef();

    useEffect(() => {
        return {}
    }, [])

    const createData: any = {};
    createData.createObject = createObject;

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ 'header': [1, 2, false] }],
                    ['bold', 'italic', 'underline','strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['image'],
                    ['clean']
                ],

                handlers: {
                    image: imageHandler,
                },
            },

            ImageResize: {
                parchment: Quill.import('parchment')
            },

        };
    }, []);

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'image'
    ]

    const selects = [
        { value: 'notice', label: '공지사항' },
        { value: 'ir', label: '재정공개' },
        { value: 'gallery', label: '갤러리' }
    ]

    function handleChange(e) {
        setSelectedValue(e.value);
    }

    function imageHandler() {
        const input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.addEventListener('change', async () => {
            console.log('온체인지');
            const file = input.files[0];
            const formData = new FormData();
            formData.append('img', file);
            try {
                const result = await axios.post('/api/uploadFiles', formData);
                console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
                const IMG_URL = result.data.url;
                const editor = quillRef.current.getEditor();
                const range = editor.getSelection();
                editor.insertEmbed(range.index, 'image', IMG_URL);
            } catch (error) {
                console.log('실패했어요ㅠ');
            }
        })
    }

    function saveData() {
        if(window.confirm("저장하시겠습니까?")) {
            axios.get('/api/getAdminCreate', {params: {category: selectedValue, title: document.getElementById("admin_create_title").value, content: value}}).then(value => {
                alert("저장완료.");
            }).catch(reason => {
                alert(reason);
            }).finally(() => {
            });

            window.location = '../#/AdminPage';
        }
    }

    function cancelData() {
        if(window.confirm("취소하시겠습니까?")) {
            window.location = '../#/AdminPage';
        }
    }

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0px 0px 50px 0px' }}>
                <img style={{width: '100%'}} src={small_banner}  alt="small_banner"/>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', width: '100%', borderBottom: '2px solid black'}}>
                    <Box className={"main_header_text"}>글작성</Box>
                    <Box className={"main_header_path_text"}>
                        <img src={home}  alt="home"/>
                        <Box style={{fontSize: '14px', margin: '0px 0px 3px 10px'}}>Home > 글작성</Box>
                    </Box>
                </Box>
            </Box>

            <Box style={{ display: 'flex', width: '75%', justifyContent: 'center', flexDirection: 'column', margin: '20px 0px 0px 0px' }}>
                <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Box style={{ margin: '0px 20px 0px 0px'}}>
                        카테고리
                    </Box>
                    <Box>
                        <Select id={"admin_create_category"} options={selects} defaultValue={selects[0]} onChange={handleChange}/>
                    </Box>
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', margin: '20px 0px 0px 0px' }}>
                    <Box style={{ margin: '0px 20px 0px 0px'}}>
                        제목
                    </Box>
                    <Box>
                        <TextField hiddenLabel id={"admin_create_title"} style={{marginTop: '-5px', width: '500px' }} autoComplete={"off"} InputProps={{}}/>
                    </Box>
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: '20px 0px 0px 0px'}}>
                    <ReactQuill id={"admin_create_content"} style={{ width: '100%' }} ref={quillRef} theme="snow" modules={modules} formats={formats} value={value} onChange={setValue} />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', margin: '20px 0px 0px 0px' }}>
                    <Button style={{ borderRadius: '10px', background: '#ec5353', color: 'white', margin: '0px 20px 0px 0px' }} onClick={(e)=>{cancelData()}}>
                        취소
                    </Button>
                    <Button style={{ borderRadius: '10px', background: '#5383EC', color: 'white' }} onClick={(e)=>{saveData()}}>
                        저장
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default AdminCreatePage;
