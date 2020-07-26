import React, { useState, useCallback } from "react";
const _ = require("lodash");

export default function Dropdown(props) {
	const [isExpanded, setIsExpanded] = useState(false);
  const [drop, setDrop] = useState("-Select Value-");
  const {label, button, items} = props;
	const expandMenu = useCallback(() => {
    setIsExpanded(s => !s);
  }, [setIsExpanded]);
  const selectItem = function (item, event) {
    setIsExpanded(!isExpanded);
    setDrop(item.value);
    //event.preventDefault();
   // console.log(e.target.value);
    console.log(item.value)
};
  return (
  	<div className="dropdown">
      <label>{label}</label><br />
  		<button className="dropdown__btn" onClick={ expandMenu }>
        {drop}
  		</button>
      {isExpanded && (
        <div className="dropdown__content">
          <ul className="dropdown__list">
              {_.map(items, item =>
         <li className="dropdown__item" key="dropdown-${label}-${item.value}"><a className="dropdown__link" onClick={() => selectItem(item)}>{item.value}</a></li> 
        )}
           </ul>
        </div>
            )}
  		  </div>
  	);

}
