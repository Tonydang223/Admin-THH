import React from 'react';
import {Outlet} from 'react-router-dom';
const LayoutCore = () => {
    return (
        <>
          <Outlet />
        </>
    );
}

export default LayoutCore;
