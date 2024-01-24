const Confirmation = () => {
  return ( 
    <div className="document-confirmation">
      Data in the import file is correct. Please press Continue to import.
      <br/>
      <button className="continue-btn">Continue import</button>
      <button className="cancel-btn">Cancel</button>
    </div>
   );
}
 
export default Confirmation;