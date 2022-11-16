import React, {useEffect, useMemo, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import moment from "moment";
import axios from "axios";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
import Select from 'react-select'

import small_banner from "../../image/small_banner.png";
import home from "../../image/home.png";
import {TextField} from "@material-ui/core";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
Quill.register('modules/ImageResize', ImageResize);

function AdminCreatePage(props) {
    const [createObject, setCreateObject] = useState({});
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
                parchment: Quill .import('parchment')
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
            // multer에 맞는 형식으로 데이터 만들어준다.
            const formData = new FormData();
            formData.append('img', file); // formData는 키-밸류 구조
            // 백엔드 multer라우터에 이미지를 보낸다.
            try {
                const result = await axios.post('/api/uploadFiles', formData);
                console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
                const IMG_URL = result.data.url;
                // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
                // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
                // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.

                // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
                const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
                // 1. 에디터 root의 innerHTML을 수정해주기
                // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
                // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
                // editor.root.innerHTML =
                //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.

                // 2. 현재 에디터 커서 위치값을 가져온다
                const range = editor.getSelection();
                // 가져온 위치에 이미지를 삽입한다
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
