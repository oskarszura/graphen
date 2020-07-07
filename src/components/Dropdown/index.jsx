import React, { useState } from "react";

export default function Dropdown() {
	const [drop, setdrop] = useState(true);
	function dropMenu () {
		setdrop(!drop);
	}
	let dropClass = drop ? "dropdown-content-off" : "dropdown-content";
  return (
  	<div className="dropdown-menu">
  		<button className="dropdown-btn" onClick={ dropMenu }>
  			Dropdown menu
  		</button>
  		<div className= { dropClass }>
  			<ul>
  			<li><a href="#">Sub-menu 1</a></li>
  			<li><a href="#">Sub-menu 2</a></li>
  			<li><a href="#">Sub-menu 3</a></li>
  			<li><a href="#">Sub-menu 4</a></li>
  			</ul>
  		</div>
  	</div>
  	);
}
