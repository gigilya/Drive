import React from 'react'
import "./FoldersPage.css"
import Header from '../../components/headers/Header'
import ButtonFile from '../../components/buttons/ButtonFile'
import FileIcon from '../../resource/icons/file.svg'
import VertIcon from '../../resource/icons/more_vert.svg'
import ButtonVert from '../../components/buttons/ButtonVert'
import NavigationFolder from '../../components/NavigationFolder/NavigationFolder'

export default function FoldersPage() {
  return (
    <body>
      <div>
        <Header/>
        <NavigationFolder/>
      </div>
      <div className='files'>
        <h1 className='h1'>Label</h1>
        <hr className='hr-files'></hr>
        <ButtonFile src={FileIcon}/>
        <ButtonVert src={VertIcon}/>
        <hr className='hr-files'></hr>
        <ButtonFile src={FileIcon}/>
        <ButtonVert src={VertIcon}/>
        <hr className='hr-files'></hr>
        <ButtonFile src={FileIcon}/>
        <ButtonVert src={VertIcon}/>
        <hr className='hr-files'></hr>
        <ButtonFile src={FileIcon}/>
        <ButtonVert src={VertIcon}/>
        <hr className='hr-files'></hr>
        <ButtonFile src={FileIcon}/>
        <ButtonVert src={VertIcon}/>
        <hr className='hr-files'></hr>
        <ButtonFile src={FileIcon}/>
        <ButtonVert src={VertIcon}/>
        <hr className='hr-files'></hr>
      </div>

    </body>
  )
}
