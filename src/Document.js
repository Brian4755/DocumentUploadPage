import ClientSelect from "./ClientSelect";
import Confirmation from "./Confirmation";
import SplitSchedule from "./SplitSchedule";
import Tolerance from "./Tolerance";
import Import from "./Import";

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
      <Import />
      <div className="location-checking">
        Location Checking:
        <p>All Available!</p>
      </div>
      <ClientSelect />
      <div className="elapse-data">
        Elapse Data Checking:
        <p>No Elapsed Dates!</p>
      </div>
      <Tolerance />
      <Confirmation />
    </div>
   );
}
 
export default Document;