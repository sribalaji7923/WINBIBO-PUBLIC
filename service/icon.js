import React from 'react';

const Icon = ({
  iconName,
  iconColor = '#fff',
  fontSize = '20px',
  cursor = 'pointer',
  className = '',
  ...props
}) => {
  return (
    <i
      {...props}
      className={`fas fa-${iconName} ${className}`}
      style={{
        fontSize,
        cursor,
        color: iconColor,
      }}
    />
  );
};

export default Icon;
