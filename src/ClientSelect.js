import { useState } from "react"

const ClientSelect = () => {

  const [check, setCheck] = useState(true)

  function handleCheckSingle() {
    setCheck(true)
  }
  function handleCheckMultiple() {
    setCheck(false)
  }



  const testingCenters = [{
    name: 'Testing Center 1'
  },
  {
    name: 'Testing Center 2'
  },
  {
    name: 'Testing Center 3'
  },
  {
    name: 'Testing Center 4'
  }]

  return ( 
    <div className="testing-centers">
      Client
      <label>
        <input type="radio" checked={check} onClick={handleCheckSingle}/>
        Single
        <input type="radio" checked={!check} onClick={handleCheckMultiple}/>
        Multiple
      </label>
      {testingCenters.map(function(data) {
        return (
          <div key={data.name}>
            {data.name}
            <select className="import-selection">
              <option value=''>Select Client</option>
            </select>
          </div>
        )
      })}
    </div>
   );
}
 
export default ClientSelect;