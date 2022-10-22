import React from 'react';
import { Outlet } from 'react-router-dom';

function Page1() {
  return (
    <div className="page1">
      Page1
      <Outlet />
    </div>
  );
}

export default Page1;
