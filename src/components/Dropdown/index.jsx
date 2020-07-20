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
        <div className="dropdown-content">
          <ul className="dropdown-content__list">
              {items.map(item => (
        <li className="dropdown-content__item"><a className="dropdown-content__link" href="#">{item.value}</a></li>
        ))}
           </ul>
        </div>
            )}
  		  </div>
  	);
}
