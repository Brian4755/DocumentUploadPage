import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileLines} from '@fortawesome/free-solid-svg-icons'

const Import = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0].size)
    setFileName(acceptedFiles[0].name)
    setFileSize(acceptedFiles[0].size/1000 + 'KB')
  },[])

  const [fileName, setFileName] = useState()
  const [fileSize, setFileSize] = useState()

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return ( 
    <div className="document-file-import">
      Select a manifest that you'd like to import
      <div className="drag-container">
        <div {...getRootProps()} className="drag-n-drop">
          <FontAwesomeIcon icon={faFileLines} id='icon-file'/>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag & Drop Here Or <span>Browser</span></p>
          }
        </div>
        <button>Upload manifest</button>
      </div>
      <div>{fileName}</div>
      <div>{fileSize}</div>
    </div>
   );
}
 
export default Import;