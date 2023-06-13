import React from 'react'
import CodeEditor from './CodeEditor'
import Header from './Header'

const Editor = () => {
  return (
    <div>
      <Header/>
      <CodeEditor language="HTML"/>
      <CodeEditor language="CSS"/>
      <CodeEditor language="Javascript"/>


    </div>
  )
}

export default Editor
