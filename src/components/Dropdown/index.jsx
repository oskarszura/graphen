// @flow
import React, { useState, useCallback } from "react";
import * as _ from "lodash";

type Props = {
  initValue: string,
  label: string,
  items: $ReadOnlyArray<{value: string, label: string}>
};

export default function Dropdown(props: Props) {
  const { initValue, label, items } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initValue);
  const expandMenu = useCallback(() => {
    setIsExpanded(isShown => !isShown);
  }, [setIsExpanded]);
 /* const selectItem = useCallback(
    item => {
      console.log(item);
      setIsExpanded(false);
      setSelectedItem(_.find(items, function(o) {console.log(o.value); console.log(item.value); if (o.value == item.value) { return item.label;}  })
        );
      console.log(selectedItem);
      console.log(item.label);
    },
    [setIsExpanded, setSelectedItem]
  ); */
  const selectItem = useCallback(
    item => {
      setIsExpanded(false);
      let result = _.find(items, function(o) { return o.value === item.value });
      setSelectedItem(result.label) 
    },
    [setIsExpanded, setSelectedItem]
    );

  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor="dropdown__label">
        {label}
      </label>
      <div className="dropdown__menu">
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
                  onClick={() => selectItem(item)}
                >
                  <a className="dropdown__link">{item.label}</a>
                </li>
              ))}
              {/* eslint-enable jsx-a11y/no-static-element-interactions */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
