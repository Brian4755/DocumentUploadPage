import TestingCenter from "./TestingCenter";
import Confirmation from "./Confirmation";
import SplitSchedule from "./SplitSchedule";

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
      <SplitSchedule />
      <div className="document-file-import">
        Select a manifest that you'd like to import
      </div>
      <div className="location-checking">
        Location Checking
        <p>All Available!</p>
      </div>
      <TestingCenter />
      <div className="elapse-data">
        Elapse Data Checking:
        <p>No Elapsed Dates!</p>
      </div>
      <div className="tolerance-window">
        Tolerance Window
      </div>
      <Confirmation />
    </div>
   );
}
 
export default Document;