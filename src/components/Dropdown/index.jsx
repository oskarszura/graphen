import React, { useState, useCallback } from "react";

export default function Dropdown(props) {
	const [isExpanded, setIsExpanded] = useState(false);
  const {label, dropdown, items} = props;
	const expandMenu = useCallback(() => {
    setIsExpanded(s => !s);
  }, [setIsExpanded]);

  return (
  	<div className="dropdown">
      <label>{items.label}</label><br />
  		<button className="dropdown__btn" onClick={ expandMenu }>
        {dropdown}
  		</button>
      {isExpanded && (
        <div className="dropdown__content">
          <ul>
              {items.map(item => (
        <li><a href="#">{item.value}</a></li>
        ))}
           </ul>
        </div>
            )}
  		  </div>
  	);
}
