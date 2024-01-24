import TestingCenter from "./TestingCenter";
import Confirmation from "./Confirmation";

const Document = () => {
  return ( 
    <div className="document-page">
      <div className="document-title">Document Upload</div>
      <select>
        <option value=''>Select Import Name:</option>
      </select>
      <div className="document-file-import">Select a manifest that you'd like to import</div>
      <div>Elapse Data Checking:</div>
      <div>Tolerance Window</div>
      <div>Split schedule using social distancing?</div>
      <div>Location Checking</div>
      <div>Client</div>
      <TestingCenter />
      <Confirmation />
    </div>
   );
}
 
export default Document;