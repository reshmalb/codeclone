import React, { useContext,useState } from 'react'
import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
const HeadingBox=styled(Box)`
            background:#1d1e22;
            display:flex;
            padding:9px 12px;
          `;
const Header=styled(Box)`
display: flex;
justify-content: space-between;
background: #060606;
color: #AAAEBC;
font-weight: 700;
`;
const Container=styled(Box)`
        display:flex;
        flex-direction:column;
        flex-grow:1;
        flex-basis:0;
        padding:0 8px;
        `

const CodeEditor = ({language,icon,color,value,onChange}) => {
  const [open,setOpen]=useState(true)

  const handleChange=(editor,data,value)=>{
    onChange(value)

  }
  return (
  <Container  style={open ? null : {flexGrow:0}}>
        <Header>
            <HeadingBox>
            <Box 
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >                      
         {icon}</Box>
                    {language}
            </HeadingBox>
            <CloseFullscreenIcon
            fontSize='small'
            style={{alignSelf:"center"}}
            onClick={()=>setOpen(prev=>!prev)}/>

        </Header>
        <ControlledEditor
        className='cotrolled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme:'material',
          mode:'xml',
          lineNumbers:true


        }}
            />
        <Box>

        </Box>

   </Container>
  )
}

export default CodeEditor
