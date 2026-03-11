import React from "react";

//learn from mistake: casesensitive props passed cartItem props recieved CartItem, make sure to return after using array method
const Cartitem = ({ cartItem }) => {
  return <div className="text-white">{cartItem.name}</div>;
};

export default Cartitem;
