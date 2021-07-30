import React from 'react';
import './button.ui.scss';

interface buttonProps {
  className?: string,
  onClick: any,
  disabled?: boolean,
  name: string
}

const Button = (props: buttonProps) => {
  const { className, onClick, disabled, name } = props;
  return (
    <div className="button_component">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${className} btn btn_default`}
        type="submit"
      >
        {name}
      </button>
    </div>
  )
}

Button.defaultProps = {
  className: "",
  disabled: false
}

export default Button;
