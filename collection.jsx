import React from 'react';

export function Collection() {
  return (
    <main>
        <div className="container">
            <h1>Add New Tank</h1>
            <p>Fill in this form to add a new tank to your collection! :)</p>
        
            <label for="collection-tank-size-input"><b>Tank Size</b></label>
            <input id="collection-tank-size-input" type="text" placeholder="Enter Tank Size" name="collection-tank-size-input" required/>
        
            <label for="collection-tank-units-input"><b>Units (Gallons, Liters, etc.)</b></label>
            <input id="collection-tank-units-input" type="text" placeholder="Enter Units of Measure" name="collection-tank-units-input" required/>
    
            <label for="collection-tank-dimensions-input"><b>Dimensions (Optional)</b></label>
            <input id="collection-tank-dimensions-input" type="text" placeholder="Enter Dimensions" name="collection-tank-dimensions-input"/>
        
            <label for="collection-tank-num-fish-input"><b># of Fish</b></label>
            <input id="collection-tank-num-fish-input" type="text" placeholder="Enter Number of Fish in Tank" name="collection-tank-num-fish-input" required/>

            <label for="collection-tank-description-input"><b>Tank Description</b></label>
            <input id="collection-tank-description-input" type="text" placeholder="Enter Tank Description" name="collection-tank-description-input"/>
        
            <div className="clearfix">
              <button type="button" className="cancelbtn" onclick="location.href='home_page.html'">Cancel</button>
              <button type="submit" className="collection-new-submit-btn" onclick="addToCollection()">Add to My Collection</button>
            </div>
        </div>
    </main>
  );
}