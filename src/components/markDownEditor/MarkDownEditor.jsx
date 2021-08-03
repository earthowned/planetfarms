import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToMarkdown from "draftjs-to-markdown";
import Button from "../button/Button";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import { RichUtils } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

import './MarkDownEditor.scss'

const MarkDownEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [markDown, setMarkDown] = useState(false);
    const [markDownText, setMarkDownText] = useState(null);

    function onEditorStateChange(editorState) {
        setEditorState(editorState);
    }

    function changeToMarkDown() {
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        setMarkDownText(draftToMarkdown(rawContentState));
        setMarkDown(true)
    }

     function changeToEditor() {
         
         const markDownData = markdownToDraft(markDownText);
         const rawMarkDown = convertFromRaw(markDownData);

        setEditorState(EditorState.createWithContent(rawMarkDown))
        setMarkDown(false)
    }

        function uploadImageCallBack(file) {
        // return new Promise(
        //     (resolve, reject) => {
        //     const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
        //     xhr.open('POST', 'https://api.imgur.com/3/image');
        //     xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
        //     const data = new FormData(); // eslint-disable-line no-undef
        //     data.append('image', file);
        //     xhr.send(data);
        //     xhr.addEventListener('load', () => {
        //         const response = JSON.parse(xhr.responseText);
        //         resolve(response);
        //     });
        //     xhr.addEventListener('error', () => {
        //         const error = JSON.parse(xhr.responseText);
        //         reject(error);
        //     });
        //     },
        // );
        }

        const toolbarOptions = {
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'image', 'remove', 'history'],
            image: {
                className: 'button-color',
                uploadCallback: uploadImageCallBack,
                previewImage: true 
            },
            // blockType: {
            //     className: 'button-color'
            // },
            // inline: {
            //     className: 'button-color'
            // },
            // history: {
            //     className: 'button-color'
            // },
            // remove: {
            //     className: 'button-color'
            // },
            // fontSize: {
            //     className: 'button-color'
            // },
            // fontFamily: {
            //     className: 'button-color'
            // },
            // list: {
            //     className: 'button-color'
            // },
            // textAlign: {
            //     className: 'button-color'
            // },
            // link: {
            //     className: 'button-color'
            // },
            
        }

        // const styleButton = (array) => {

        //   const customStyle =  array.map(item => Object.prototype.constructor({`${item ":" "button-color"}`}))
        //     return [...customStyle]
        // }

        // const styledButtonClass = styleButton(toolbarOptions.options);
        // console.log(styledButtonClass)

        //styling mark down editor
        const editorStyle = {
            border: "0.5px solid var(--dropdowns)",
            backgroundColor: "var(--cards)", 
            height: "200px",
            borderRadius: '4px',
            color: 'var(--primary-white)', 
            marginBottom: "40px",
            padding: '8px',
            overflowY: "auto"
        }

        const toolbarStyle = {
            background: 'var(--dropdowns)',
            marginBottom: "14px",
            border: "0.5px solid var(--dropdowns)",
            borderRadius: '4px',
            padding: '8px'
        }

    return (
        <>
            <div className="mark-down-container">
                {!markDown ? <Editor
                    toolbarStyle={toolbarStyle}
                    editorStyle={editorStyle}
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbar={toolbarOptions}
                    // toolbarCustomButtons={[<CustomOption />]}
                /> 
                : <textarea style={editorStyle} value={markDownText} onChange={e => setMarkDownText(e.target.value)} />
                }
                {
                !markDown
                ? <button className="secondary-btn markdown-button" onClick={changeToMarkDown}>Mark down</button>
                : <button className="secondary-btn markdown-button" onClick={changeToEditor}>Editor</button>
                }
            </div>
        <div>
        </div>
        </>
    )
}

// const CustomOption = ({editorState, onChange}) => {

//     const toggleMarkDown = () => {
//     const newState = RichUtils.toggleInlineStyle(
//       editorState,
//       'Mark Down',
//     );
//     if (newState) {
//       onChange(newState);
//     }
//   };
//     return(<div className="rdw-storybook-custom-option" onClick={toggleMarkDown}>MD</div>)
// }

export default MarkDownEditor
