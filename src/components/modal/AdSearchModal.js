import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Divider, TextField} from "@material-ui/core";
import "../../css/ckContent.css"
import { forwardRef, useImperativeHandle } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/ko';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/ko';
import axios from "axios";
import AdSearchTypeSelectBox from "../selectBox/AdSearchTypeSelectBox";
import sort_icon from "../../image/sort_icon.png";

const AdSearchModal = forwardRef((props, ref) => {
    const [adSearchModalObject, setAdSearchModalObject] = useState({title: '', type: '', prio: 1, count: 10000, imagePath: ''});
    const [fromAt, setFromAt] = useState(new Date());
    const [toAt, setToAt] = useState(new Date());
    const [token, setToken] = useState(true);
    const [editor, setEditor] = useState('');

    useImperativeHandle(ref, () => ({
        modalReload: (_id: string) => {
            axios.get('/getAdObject', {params: {_id: _id}}).then(value => {
                document.getElementById("ad_search_modal__id").value = value.data.data._id;
                document.getElementById("ad_search_modal_title").value = value.data.data.title;

                let el = document.getElementById('ad_search_modal_type_select_box');
                const str = value.data.data.type;
                for (let i=0; i<el.options.length; i++){
                    if(el.options[i].value === str){
                        el.options[i].selected = true;
                    }
                }

                document.getElementById("ad_search_modal_prio").value = value.data.data.prio;
                document.getElementById("ad_search_modal_count").value = value.data.data.count;
                document.getElementById("ad_search_modal_image_path").src = value.data.data.imagePath;
                adSearchModalObject.imagePath = value.data.data.imagePath;
                setFromAt(new Date(value.data.data.fromAt));
                setToAt(new Date(value.data.data.toAt));

            }).catch(reason => {
                alert(reason);
            }).finally(() => {
                document.getElementById("loading").style.display = 'none';
                document.getElementById('ad_search_modal').style.display = 'flex';

                document.getElementById('ad_search_modal_image_box').style.display = 'flex';
                document.getElementById('ad_search_modal_image_editor_box').style.display = 'none';

                setAdSearchModalObject(adSearchModalObject);
                setToken(!token);
            });
        }
    }));

    useEffect(() => {
        return {}
    }, [token, adSearchModalObject])

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
                            adSearchModalObject.imagePath = res.filename;
                            setAdSearchModalObject(adSearchModalObject);
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
        document.getElementById('ad_search_modal').style.display = 'none';
        setAdSearchModalObject({});
    }

    function getAdSearchTypeData(type){
        adSearchModalObject.type = type;
        setAdSearchModalObject(adSearchModalObject);
    }

    function adChage() {
        let params = {
            _id: document.getElementById("ad_search_modal__id").value,
            title: document.getElementById("ad_search_modal_title").value,
            type: document.getElementById("ad_search_modal_type_select_box").options[document.getElementById("ad_search_modal_type_select_box").selectedIndex].value,
            prio: document.getElementById("ad_search_modal_prio").value,
            count: document.getElementById("ad_search_modal_count").value,
            fromAt: fromAt,
            toAt: toAt,
            imagePath: adSearchModalObject.imagePath
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
        } else if (document.getElementById('ad_search_modal_image_editor_box').style.display === 'flex') {
            if (params.imagePath === '') {
                alert('이미지를 등록하세요.');
                return;
            }
        }

        axios.get('/adChange', {params: params}).then(value => {
            alert('수정 완료.');
            document.getElementById('ad_search_modal').style.display = 'none';
            window.location.reload();
        }).catch(reason => {
        }).finally(() => {
        });
    }

    function adImageChage() {
        adSearchModalObject.imagePath = '';
        setAdSearchModalObject(adSearchModalObject);

        document.getElementById('ad_search_modal_image_box').style.display = 'none';
        document.getElementById('ad_search_modal_image_editor_box').style.display = 'flex';
    }

    return (
        <Box id ={"ad_search_modal"} style={{ display: 'none', position: 'absolute', width: '100%', height: '960px', justifyContent: 'center', alignItems: 'center', zIndex: 5 }}>
            <Box style={{ position: 'fixed', background: 'white', width: '1200px', height: '700px', marginBottom: '150px', border: '1px solid'}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#4348cf', width: '1200px', height: '35px'}}>
                    <Box style={{ display: 'flex' }}>
                        <Box style={{ width: '1100px', paddingLeft: '20px', textAlign: 'start', color: 'white', fontWeight: 600, fontSize: '16px'}}>
                            광고 생성
                        </Box>
                        <Box style={{ cursor: 'pointer', width: '40px', paddingRight: '20px', textAlign: 'end', color: 'white', fontWeight: 600, fontSize: '16px'}} onClick={(e)=>{modalClose()}}>
                            X
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', width: '850px', paddingTop: '20px' }}>
                    <Box style={{ marginLeft: '20px' }}>
                        <Box style={{ display: 'flex' }}>
                            <Box style={{ width: '90px' }}>이름</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '500px', marginLeft: '10px' }}>
                                <TextField hiddenLabel id={"ad_search_modal__id"} style={{marginTop: '-5px', width: '500px', display: 'none' }} autoComplete={"off"} InputProps={{}}/>
                                <TextField hiddenLabel id={"ad_search_modal_title"} style={{marginTop: '-5px', width: '500px' }} autoComplete={"off"} InputProps={{}}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>구분</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <AdSearchTypeSelectBox getAdSearchTypeData={getAdSearchTypeData}/>
                            </Box>

                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>우선순위</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <TextField type='number' hiddenLabel id={"ad_search_modal_prio"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{inputProps: { min: 1 }}}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>노출횟수</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <TextField type='number' hiddenLabel id={"ad_search_modal_count"} style={{marginTop: '-5px' }} autoComplete={"off"} InputProps={{inputProps: { min: 1 }}}/>
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '90px' }}>시작일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <DatePicker id={"ad_search_modal_fromAt"} style={{marginTop: '-5px', width: '300px', zIndex: '2' }} autoComplete={"off"} selected={fromAt} onChange={(date:Date) => setFromAt(date)} />
                            </Box>

                            <Box style={{ width: '90px' }}>종료일</Box>
                            <Box style={{ width: '15px' }}>:</Box>
                            <Box style={{ width: '290px', marginLeft: '10px' }}>
                                <DatePicker id={"ad_search_modal_toAt"} style={{marginTop: '-5px', width: '300px', zIndex: '2' }} autoComplete={"off"} selected={toAt} onChange={(date:Date) => setToAt(date)} />
                            </Box>
                        </Box>

                        <Box style={{ display: 'flex', marginTop: '20px' }}>
                            <Box style={{ width: '115px' }}>배너</Box>
                            <Button style={{ background: '#7277FF', color: 'white', width: '60px', height: '20px', borderRadius: '6px' }} onClick={(e)=>{adImageChage()}}>수정</Button>
                        </Box>
                        <Box id={"ad_search_modal_image_box"} style={{ marginTop: '10px', height: '330px', width: '1150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', overflowY: 'scroll' }}>
                            <img id={"ad_search_modal_image_path"} src={sort_icon}/>
                        </Box>
                        <Box id={"ad_search_modal_image_editor_box"} style={{ display: 'none', marginTop: '10px' }}>
                            <Box sx={{mt: 2, width: '750px'}}>
                                <Box>
                                    <Box className="document-editor__editable-container" style={{ height: '220px', width: '1100px', overflowY: 'scroll'}}>
                                        <Box className="document-editor__editable"
                                             id={'notice_search_content'}>
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
                            <Button style={{ marginBottom: '10px', marginTop: '10px', marginLeft: '1070px', background: '#7277FF', color: 'white', width: '80px', height: '30px', borderRadius: '6px' }} onClick={(e)=>{adChage()}}>저장</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
});

export default AdSearchModal;