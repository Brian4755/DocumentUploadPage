import { useState } from "react";

const SplitSchedule = () => {
  const [check, setCheck] = useState(true)

  function handleCheckYes() {
    setCheck(true)
  }
  function handleCheckNo() {
    setCheck(false)
  }


  return ( 
    <div>
      Split schedule using social distancing?
      <br />
      <label>
        <input type="radio" checked={check} onClick={handleCheckYes}/>
        Yes
        <input type="radio" checked={!check} onClick={handleCheckNo}/>
        No
      </label>
    </div>
   );
}
 
export default SplitSchedule;