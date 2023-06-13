import React from 'react'
import Editor from './components/Editor'
import Header from './components/Header'
import EditorContextProvider from './context/EditorContext'
import Home from './components/Home'

const App = () => {
  return (
    <EditorContextProvider>
       <Home/>
    
    </EditorContextProvider>
    
  
  )
}

export default App
