import React,{useContext}  from 'react'
import CodeEditor from './CodeEditor'
import {Box,styled} from '@mui/material'
import {EditorContext} from '../context/EditorContext'

const  Container=styled(Box)`
    display:flex;
    background-color:#060606;
    height:50vh;
`
const Editor = () => {
  const {html,setHtml,css,setCss,js,setJs}=useContext(EditorContext);

  return (
  <Container>
      <CodeEditor language="HTML"
                  icon='/'
                  color="#FF341"
                  value={html}
                  onChange={setHtml}
            
            />
      <CodeEditor language="CSS"
       icon='*'
       color="#0EBEFF"
       value={css}
       onChange={setCss}
 />
      <CodeEditor language="Javascript"
       icon='{}'
       color="#FCD000"
       value={js}
       onChange={setJs}
 />

</Container>
  )
}

export default Editor
