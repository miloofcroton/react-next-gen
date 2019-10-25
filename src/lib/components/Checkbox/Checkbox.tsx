import React from 'react';

interface CheckboxProps {
  rootID: string;
  id: string;
  name: string;
  value: string;
  label: string;
}

const Checkbox: React.SFC<CheckboxProps> = (
  props: CheckboxProps
): JSX.Element => {
  return (
    <div id={props.rootID}>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
