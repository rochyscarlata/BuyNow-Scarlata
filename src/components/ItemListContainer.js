import React from "react";

function ItemListContainer({alert}) {
  return (
    <div className="container">
      <div class="notification is-primary  has-text-centered">
        
       <strong>{alert}</strong>
       
      </div>
    </div>
  );
}

export default ItemListContainer;
