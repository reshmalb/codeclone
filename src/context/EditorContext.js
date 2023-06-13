import { createContext, useState } from "react";

export const EditorContext=createContext();

const EditorContextProvider=({children})=>{
        const [html,setHtml]=useState('')
    const [css,setCss]=useState('')
    const [js,setJs]=useState('')
    return(
        <EditorContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
        {children}
        </EditorContext.Provider>
    )
}
export default EditorContextProvider;