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
      setSelectedItem(item.label);
    },
    [setIsExpanded, setSelectedItem]
  );

  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="dropdown__label">
        {label}
      </label>
      <br />
      <button className="dropdown__btn" onClick={expandMenu}>
        {selectedItem}
      </button>
      {isExpanded && (
        <div className="dropdown__content">
          <ul className="dropdown__list">
            {/* eslint-disable jsx-a11y/no-static-element-interactions */}
            {_.map(items, item => (
              <li
                className="dropdown__item"
                key={`dropdown-${label}-${item.label}`}
              >
                <a className="dropdown__link" onClick={() => selectItem(item)}>
                  {item.label}
                </a>
              </li>
            ))}
            {/* eslint-enable jsx-a11y/no-static-element-interactions */}
          </ul>
        </div>
      )}
    </div>
  );
}
