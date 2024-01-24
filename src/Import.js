import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Import = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  },[])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return ( 
    <div className="document-file-import">
      Select a manifest that you'd like to import
      <div className="drag-container">
        <div {...getRootProps()} className="drag-n-drop">
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag & Drop Here Or <span>Browse</span></p>
          }
        </div>
        <button>Upload manifest</button>
      </div>
    </div>
   );
}
 
export default Import;