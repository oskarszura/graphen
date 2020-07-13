import React, { useState } from "react";

export default function Dropdown() {
	const [isExpandedn, setIsExpanded] = useState(true);
  const {label, dropdown, sub-menu} = this.props;
	function dropMenu () {
		setdrop(!isExpanded);
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
  			 <li><a href="#">{sub-menu}</a></li>
  			 <li><a href="#">{sub-menu}</a></li>
  			 <li><a href="#">{sub-menu}</a></li>
  			 <li><a href="#">{sub-menu}</a></li>
  			</ul>
  		</div>
  	</div>
  	);
}
