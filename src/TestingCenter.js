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
    <div>
      Client
      {testingCenters.map(function(data) {
        return (
          <div>
            {data.name}
          </div>
        )
      })}
    </div>
   );
}
 
export default TestingCenter;