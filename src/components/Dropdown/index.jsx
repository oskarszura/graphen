// @flow
import React, { useState, useCallback } from "react";
import * as _ from "lodash";

type Props = {
  button: string,
  label: string,
  items: Array<string>
};

export default function Dropdown(props: Props) {
  const { button, label, items } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(button);
  const expandMenu = useCallback(() => {
    setIsExpanded(s => !s);
  }, [setIsExpanded]);
  const selectItem = useCallback(
    item => {
      setIsExpanded(s => !s);
      setSelectedItem(item.value);
    },
    [setIsExpanded, setSelectedItem]
  );
  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="dropdown__label">{label}</label>
      <br />
      <button className="dropdown__btn" onClick={expandMenu}>
        {selectedItem}
      </button>
      {isExpanded && (
        <div className="dropdown__content">
          <ul className="dropdown__list">
            {_.map(items, item => (
              <li
                className="dropdown__item"
                key={`dropdown-${label}-${item.value}`}
              >
                <a className="dropdown__link" onClick={() => selectItem(item)}>
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
