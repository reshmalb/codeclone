import { createContext, useState } from "react";

const EditorContext=createContext();

const EditorContextProvider=({children})=>{
        const [html,setHtml]=useState('')
    const [css,setCSS]=useState('')
    const [js,setJs]=useState('')
    return(
        <EditorContext.Provider value={{
            html,
            setHtml,
            css,
            setCSS,
            js,
            setJs
        }}>
        {children}
        </EditorContext.Provider>
    )
}
export default EditorContextProvider;