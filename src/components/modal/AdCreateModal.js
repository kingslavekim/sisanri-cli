import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Divider, TextField} from "@material-ui/core";
import "../../css/ckContent.css"
import { forwardRef, useImperativeHandle } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/ko';
import AdCreateTypeSelectBox from "../selectBox/AdCreateTypeSelectBox";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/ko';
import axios from "axios";

const AdCreateModal = forwardRef((props, ref) => {
    const [adCreateModalObject, setAdCreateModalObject] = useState({title: '', type: '', prio: 1, count: 10000, imagePath : ''});
    const [fromAt, setFromAt] = useState(new Date());
    const [toAt, setToAt] = useState(new Date());
    const [token, setToken] = useState(true);
    const [editor, setEditor] = useState('');

    useImperativeHandle(ref, () => ({
        modalReload: () => {
            document.getElementById('ad_create_modal').style.display = 'flex';
            document.getElementById("ad_create_modal_type_select_box").selectedIndex = 0;
            document.getElementById("ad_create_modal_prio").value = '1';
            document.getElementById("ad_create_modal_count").value = '10000';
            setFromAt(new Date());
            setToAt(new Date());
        }
    }));

    useEffect(() => {
        return {}
    }, [token, adCreateModalObject])

    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append('files', file);
                        fetch(`/uploadAdFiles`, {
                            method: 'post',
                            body: body,
                        }).then((res) => res.json()).then((res) => {
                            adCreateModalObject.imagePath = res.filename;
                            setAdCreateModalObject(adCreateModalObject);
                            setToken(!token);
                        }).catch((err) => {
                            reject(err);
                        });
                    });
                });
            },
        };
    }

    function uploadPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }

    const editorConfiguration = {
        language: 'ko',
        placeholder: `사진을 등록해주세요. 복붙 or 드래그 앤 드랍으로 추가할 수 있습니다.`,
        extraPlugins: [uploadPlugin],
    };

    function modalClose() {
        document.getElementById('ad_create_modal').style.display = 'none';
        setAdCreateModalObject({});
    }

    function getAdCreateTypeData(type){
        adCreateModalObject.type = type;
        setAdCreateModalObject(adCreateModalObject);
    }

    function adSave() {
        let params = {
            title: document.getElementById("ad_create_modal_title").value,
            type: document.getElementById("ad_create_modal_type_select_box").options[document.getElementById("ad_create_modal_type_select_box").selectedIndex].value,
            prio: document.getElementById("ad_create_modal_prio").value,
            count: document.getElementById("ad_create_modal_count").value,
            fromAt: fromAt,
            toAt: toAt,
            imagePath: adCreateModalObject.imagePath
        };

        if (params.title === '') {
            alert('제목을 기입하세요.');
            return;
        } else if (params.type === '') {
            alert('구분을 설정하세요.');
            return;
        } else if (params.prio === '') {
            alert('우선순위를 설정하세요.');
            return;
        } else if (params.count === '') {
            alert('노출횟수를 설정하세요.');
            return;
        } else if (params.fromAt === '') {
            alert('시작일을 설정하세요.');
            return;
        } else if (params.toAt === '') {
            alert('종료일을 설정하세요.');
            return;
        } else if (params.imagePath === '') {
            alert('이미지를 등록하세요.');
            return;
        }

        axios.get('/adSave', {params: params}).then(value => {
            alert('저장 완료.');
            document.getElementById('ad_create_modal').style.display = 'none';
            window.location.reload();
        }).catch(reason => {
        }).finally(() => {
        });
    }

    return (
        <Box id ={"ad_create_modal"} style={{ display: 'none', position: 'absolute', width: '100%', height: '960px', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
            <Box style={{ position: 'fixed', background: 'white', width: '850px', height: '690px', marginBottom: '150px', border: '1px solid'}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4348cf', width: '850px', height: '35px'}}>
                    <Box style={{ display: 'flex', width: '1000px' }}>
                        <Box style={{ width: '760px', paddingLeft: '20px', textAlign: 'start', color: 'white', fontWeight: 600, fontSize: '16px'}}>
                            광고 생성
                        </Box>
                        <Box style={{ cursor: 'pointer', width: '40px', paddingRight: '20px', textAlign: 'end', color: 'white', fontWeight: 600, fontSize: '16px'}} onClick={(e)=>{modalClose()}}>
                            X
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', width: '1500px', paddingTop: '20px' }}>
                    <Box style={{ width: '1400px' }}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ width: '90px' }}>이름</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '500px', marginLeft: '10px'  }}>
                                <TextField hiddenLabel id={"ad_create_modal_title"} style={{marginTop: '-5px', width: '500px' }} autoComplete={"off"} InputProps={{}}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>구분</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <AdCreateTypeSelectBox getAdCreateTypeData={getAdCreateTypeData}/>
                            </Box>

                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>우선순위</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <TextField type='number' hiddenLabel id={"ad_create_modal_prio"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{inputProps: { min: 1 }}}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>노출횟수</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <TextField type='number' hiddenLabel id={"ad_create_modal_count"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{inputProps: { min: 1 }}}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>시작일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <DatePicker id={"ad_create_modal_fromAt"} style={{marginTop: '-5px', width: '300px' }} autoComplete={"off"} selected={fromAt} onChange={(date:Date) => setFromAt(date)} />
                            </Box>

                            <Box style={{ width: '90px' }}>종료일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <DatePicker id={"ad_create_modal_toAt"} style={{marginTop: '-5px', width: '300px' }} autoComplete={"off"} selected={toAt} onChange={(date:Date) => setToAt(date)} />
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>배너</Box>
                        </Box>
                        <Box style={{ display: 'flex', marginTop: '10px' }}>
                            <Box sx={{mt: 2, width: '750px'}}>
                                <Box>
                                    <Box className="document-editor__editable-container" style={{ height: '220px', overflowY: 'scroll'}}>
                                        <Box className="document-editor__editable"
                                             id={'notice_create_content'}>
                                            <CKEditor
                                                config={editorConfiguration}
                                                onReady={editor => {
                                                    window.editor2 = editor;
                                                }}
                                                onError={({willEditorRestart}) => {
                                                    if (willEditorRestart) {
                                                        window.editor2.ui.view.toolbar.element.remove();
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
                        </Box>

                        <Box style={{ display: 'flex' }}>
                            <Button style={{ marginBottom: '10px', marginTop: '10px',marginLeft: '670px', background: '#7277FF', color: 'white', width: '80px', height: '30px', borderRadius: '6px' }} onClick={(e)=>{adSave()}}>저장</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
});

export default AdCreateModal;