import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Divider, TextField} from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import "../../css/ckContent.css"
import { forwardRef, useImperativeHandle } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/ko';
import {Stack} from "@mui/material";

function valueExist(value){
    return value !== null && value !== '' && value !== undefined && value !== 'undefined';
}

export function uploadAdapter(loader) {
    return {
        upload: () => {
            return new Promise((resolve, reject) => {
                const body = new FormData();
                loader.file.then((file) => {
                    body.append('files', file);
                    fetch(`/editor/uploadFiles`, {
                        method: 'post',
                        body: body,
                    }).then((res) => res.json()).then((res) => {
                        resolve({
                            default: `${res.filename}`,
                        });
                    }).catch((err) => {
                        reject(err);
                    });
                });
            });
        },
    };
}

export function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
    };
}

const NoticeSearchModal = forwardRef((props, ref) => {
    const [noticeModalObject, setNoticeModalObject] = useState({ '_id': '', 'usage': false, 'categoryId': '', 'title': '', 'id': '', 'lookupCount': 0, 'content': '', 'createdAt': 0});
    const [fromAt, setFromAt] = useState(new Date());
    const [toAt, setToAt] = useState(new Date());
    const [token, setToken] = useState(true);
    const [editor, setEditor] = useState('');

    useImperativeHandle(ref, () => ({
        modalReload: (_id: string, category: string) => {
            document.getElementById("loading").style.display = 'flex';

            if (category === '팝업') {
                axios.get('/getNoticeObject', {params: {_id: _id, type: '0'}}).then(value => {
                    noticeModalObject._id = value.data.data._id;
                    noticeModalObject.usage = value.data.data.usage;
                    noticeModalObject.categoryId = value.data.data.categoryId;
                    noticeModalObject.title = value.data.data.title;
                    noticeModalObject.id = value.data.data.id;
                    noticeModalObject.content = value.data.data.content;
                    noticeModalObject.lookupCount = value.data.data.lookupCount;
                    noticeModalObject.createdAt = value.data.data.createdAt;

                    // document.getElementById("popup_tr").style.display = 'flex';
                    setFromAt(new Date(value.data.data.fromAt));
                    setToAt(new Date(value.data.data.toAt));
                    setEditor(value.data.data.content);
                }).catch(reason => {
                    alert(reason);
                }).finally(() => {
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById('notice_search_modal').style.display = 'flex';
                    setNoticeModalObject(noticeModalObject);
                    setToken(!token);
                });
            } else {
                axios.get('/getNoticeObject', {params: {_id: _id, type: '1'}}).then(value => {
                    noticeModalObject._id = value.data.data._id;
                    noticeModalObject.usage = value.data.data.usage;
                    noticeModalObject.categoryId = value.data.data.categoryId;
                    noticeModalObject.title = value.data.data.title;
                    noticeModalObject.id = value.data.data.id;
                    noticeModalObject.content = value.data.data.content;
                    noticeModalObject.lookupCount = value.data.data.lookupCount;
                    noticeModalObject.createdAt = value.data.data.createdAt;

                    // document.getElementById("popup_tr").style.display = 'none';
                    setEditor(value.data.data.content);
                }).catch(reason => {
                    alert(reason);
                }).finally(() => {
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById('notice_search_modal').style.display = 'flex';
                    setNoticeModalObject(noticeModalObject);
                    setToken(!token);
                });
            }
        }
    }));

    useEffect(() => {
        return {}
    }, [token, noticeModalObject])

    function handleSaveData() {
        const title = noticeModalObject.title;
        const postId = noticeModalObject._id;

        let _content = editor.replaceAll('…', '...');
        if (!valueExist(title)) {
            return;
        }
        if (!valueExist(_content)) {
            return;
        }

        let params = {
            title: title,
            content: _content,
            category: noticeModalObject.categoryId,
            fromAt: fromAt,
            toAt: toAt,
        };

        let url;
        if (valueExist(postId)) {  // Update일 경우
            params._id = postId;
            url = '/editor/noticeUpdate';
        } else {
            url = '/editor/noticeSave';
        }

        axios.get(url, {params: params}).then(value => {
            alert('저장 완료.');
            document.getElementById('notice_search_modal').style.display = 'none';
        }).catch(reason => {
        }).finally(() => {
        });
    }

    const editorConfiguration = {
        language: 'ko',
        placeholder: `내용을 입력해주세요.
   이미지는 복붙 or 드래그 앤 드랍으로 추가할 수 있습니다.`,
        extraPlugins: [uploadPlugin],
    };

    function modalClose() {
        document.getElementById('notice_search_modal').style.display = 'none';
        setNoticeModalObject({ '_id': '', 'usage': false, 'categoryId': '', 'title': '', 'id': '', 'createdAt': 0, 'lookupCount': 0, 'content': ''});
    }

    return (
        <Box id ={"notice_search_modal"} style={{ display: 'none', position: 'absolute', width: '100%', height: '960px', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
            <Box style={{ position: 'fixed', background: 'white', width: '1500px', height: '800px', marginBottom: '150px', border: '1px solid'}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4348cf', width: '1500px', height: '35px'}}>
                    <Box style={{ display: 'flex', width: '1500px' }}>
                        <Box style={{ width: '1460px', paddingLeft: '20px', textAlign: 'start', color: 'white', fontWeight: 600, fontSize: '16px'}}>
                            공지 세부 조회
                        </Box>
                        <Box style={{ cursor: 'pointer', width: '40px', paddingRight: '20px', textAlign: 'end', color: 'white', fontWeight: 600, fontSize: '16px'}} onClick={(e)=>{modalClose()}}>
                            X
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', width: '1500px', paddingTop: '20px' }}>
                    <Box style={{ width: '1400px' }}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ width: '90px' }}>카테고리</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"post_category"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={noticeModalObject.categoryId}></TextField>
                                <TextField hiddenLabel id={"post__id"} style={{marginTop: '-5px', display: 'none'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={noticeModalObject._id}/>
                            </Box>

                            <Box style={{ width: '60px' }}>제목</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '500px' }}>
                                <TextField hiddenLabel id={"post_title"} style={{marginTop: '-5px', width: '500px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={noticeModalObject.title}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '10px' }}>
                            <Box style={{ width: '90px' }}>작성자</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"post_writer"} style={{marginTop: '-5px', width: '300px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={noticeModalObject.id}/>
                            </Box>

                            <Box style={{ width: '60px' }}>작성일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '300px' }}>
                                <TextField hiddenLabel id={"post_createdAt"} style={{marginTop: '-2px'}} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={moment(new Date(noticeModalObject.createdAt)).format("YYYY-MM-DD HH:mm:ss")}/>
                            </Box>

                            <Box style={{ width: '90px' }}>조회</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '112px' }}>
                                <TextField hiddenLabel id={"post_lookupCount"} style={{marginTop: '-2px' }} autoComplete={"off"} InputProps={{readOnly: true, disableUnderline: true}} value={noticeModalObject.lookupCount}/>
                            </Box>
                        </Box>

                        {
                            noticeModalObject.categoryId === '팝업' ?
                                <Box id={"popup_tr"} style={{ display: 'flex', marginTop: '10px' }}>
                                    <Box style={{ width: '90px' }}>시작일</Box>
                                    <Box style={{ width: '15px' }}>:</Box>
                                    <Box style={{ width: '300px' }}>
                                        <DatePicker id={"notice_fromAt"} style={{marginTop: '-5px', width: '300px' }} autoComplete={"off"} selected={fromAt} onChange={(date:Date) => setFromAt(date)} />
                                    </Box>

                                    <Box style={{ width: '60px' }}>종료일</Box>
                                    <Box style={{ width: '15px' }}>:</Box>
                                    <Box style={{ width: '300px' }}>
                                        <DatePicker id={"notice_toAt"} style={{marginTop: '-5px', width: '300px' }} autoComplete={"off"} selected={toAt} onChange={(date:Date) => setToAt(date)} />
                                    </Box>
                                </Box>
                                :
                                <Box id={"popup_tr"} style={{ display: 'flex', marginTop: '35px' }}>
                                </Box>
                        }

                        <Box style={{ height: '20px', borderBottom: '3px solid black' }}></Box>

                        <Box style={{ height: '570px', width: '1450px' }}>
                            <Stack style={{ width: '98%' }}>
                                <Box sx={{mt: 2}}>
                                    <Box style={{ height: '100%'}} className="document-editor">
                                        <Box className="document-editor__toolbar" style={{zIndex:10}}/>
                                        <Box className="document-editor__editable-container" style={{ height: '460px', overflowY: 'scroll'}}
                                             sx={{
                                                 p: {xs: 0, sm: 3},
                                                 background: theme1 => theme1.palette.background.loginWrapper,
                                                 ' div': {
                                                     background: theme1 => theme1.palette.background.primary,
                                                     border: '1px solid',
                                                     borderColor: theme1 => theme1.palette.background.borderColor,
                                                 },
                                             }}>
                                            <Box className="document-editor__editable"
                                                 sx={{
                                                     width: {xs: 1, sm: 0.8},
                                                     margin: '0 auto',
                                                 }}
                                                 id={'content'}>
                                                <CKEditor
                                                    config={editorConfiguration}
                                                    onReady={editor => {
                                                        const toolbarContainer = document.querySelector('.document-editor__toolbar');
                                                        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
                                                        window.editor = editor;
                                                    }}
                                                    onError={({willEditorRestart}) => {
                                                        if (willEditorRestart) {
                                                            window.editor.ui.view.toolbar.element.remove();
                                                        }
                                                    }}
                                                    onChange={(event, editor) => {
                                                        let data = editor.getData();
                                                        setEditor(data);
                                                    }}
                                                    editor={DecoupledEditor}
                                                    data={editor}/>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Divider sx={{mt: 2, mb: 2}}/>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'end',
                                        mb: 2,
                                    }}>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>

                        <Button onClick={handleSaveData} style={{ marginBottom: '10px', marginTop: '10px',marginLeft: '1170px', background: '#7277FF', color: 'white', width: '80px', height: '30px', borderRadius: '6px' }}>저장</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
});

export default NoticeSearchModal;