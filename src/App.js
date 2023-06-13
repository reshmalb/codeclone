import React from 'react'
import Editor from './components/Editor'
import Header from './components/Header'
import EditorContextProvider from './context/EditorContext'

const App = () => {
  return (
    <EditorContextProvider>
    <Editor/>   
    
    </EditorContextProvider>
    
  
  )
}

export default App
