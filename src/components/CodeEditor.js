import React from 'react'
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

const CodeEditor = () => {
  return (
    <Box>
        <Header>
            <HeadingBox>
            <Box 
                        component="span"
                        style={{
                            background: "red",
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
         /</Box>
                    HTML
            </HeadingBox>
            <CloseFullscreenIcon/>

        </Header>
        <ControlledEditor
        className='cotrolled-editor'
            />
        <Box>

        </Box>

    </Box>
    
  )
}

export default CodeEditor
