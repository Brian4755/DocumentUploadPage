import TestingCenter from "./TestingCenter";
import Confirmation from "./Confirmation";

const Document = () => {
  return ( 
    <div className="document-page">
      <button className="document-close">X</button>
      <div className="document-title">
        Document Upload
      </div>
      <select className="import-selection">
        <option value=''>Select Import Name:</option>
      </select>
      <div>
        Split schedule using social distancing?
      </div>
      <div className="document-file-import">
        Select a manifest that you'd like to import
      </div>
      <div>
        Location Checking
        <p>All Available!</p>
      </div>
      <div>
        Elapse Data Checking:
        <p>No Elapsed Dates!</p>
      </div>
      <div>
        Tolerance Window
      </div>
      <TestingCenter />
      <Confirmation />
    </div>
   );
}
 
export default Document;