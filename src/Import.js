const Import = () => {
  return ( 
    <div className="document-file-import">
      Select a manifest that you'd like to import
      <br />
      {/* <label for='files'>Upload Manifest</label> */}
      <input className='file' type='file' />
    </div>
   );
}
 
export default Import;