import React, { useContext,useEffect,useState } from 'react'

import { EditorContext } from '../context/EditorContext'
import {Box,styled} from '@mui/material'
const Container=styled(Box)`
    height:41vh;
`;
const Result = () => {
    const {html,css,js}=useContext(EditorContext)
    const [doc,setDoc]=useState('')


    const sourcecode=`
    <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
    </html>
    `;
    useEffect(()=>{
        const timeout=setTimeout(() => {
            setDoc(`
            <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
            </html>
            `)
            
        }, 1000);
        return()=>clearTimeout(timeout)

    },[html,css,js])
  return (
   <Container>
  <iframe
            srcDoc={doc}
            title="Output"
            sandbox='allow-scripts'
            width="100%"
            height="100%"
        />

   </Container>
      

   
  )
}

export default Result
