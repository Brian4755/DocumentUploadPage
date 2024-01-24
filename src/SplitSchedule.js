const SplitSchedule = () => {
  return ( 
    <div>
      Split schedule using social distancing?
      <br />
      <label>
        <input type="radio" checked={true} />
        Yes
      </label>
      <label>
        <input type="radio" checked={false} />
        No
      </label>
    </div>
   );
}
 
export default SplitSchedule;