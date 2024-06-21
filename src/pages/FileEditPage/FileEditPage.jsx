import React from 'react'
import "./FileEditPage.css"
import Header from '../../components/headers/Header'
import NavigationFolder from '../../components/NavigationFolder/NavigationFolder'

export default function FoldersPage() {
  return (
    <body>
      <div>
        <Header/>
        <NavigationFolder/>
      </div>
      <div className='cont'>
        <h1 className='h1'>Label</h1>
        <div className='file-editor'>

        </div>
      </div>

    </body>
  )
}
