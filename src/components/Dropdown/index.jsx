import React, { useState } from "react";

export default function Dropdown(props) {
	const [isExpanded, setIsExpanded] = useState(true);
  const {label, dropdown, submenu} = props;
	function dropMenu () {
		setIsExpanded(!isExpanded);
	}
	const dropClass = isExpanded ? "dropdown__content-off" : "dropdown__content";
  return (
  	<div className="dropdown">
      <label>{label}</label>
  		<button className="dropdown__btn" onClick={ dropMenu }>
        {dropdown}
  		</button>
  		<div className= { dropClass }>
  			<ul>
  			 <li><a href="#">{submenu}</a></li>
  			 <li><a href="#">{submenu}</a></li>
         <li><a href="#">{submenu}</a></li>
  			</ul>
  		</div>
  	</div>
  	);
}
