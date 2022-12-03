import React from 'react';

export  function AdminLayout(props) {
    const { children } = props;
  return (
    <div>
        <h2>Se está usando Admin_LAyout</h2>
        { children }
    </div>
  );
}
