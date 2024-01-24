const TestingCenter = () => {

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
 
export default TestingCenter;