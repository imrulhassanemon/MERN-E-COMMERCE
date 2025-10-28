import React from 'react';
import { Outlet } from 'react-router-dom';
import ShoppingHeader from './ShoppingHeader';

const ShoppingLayout = () => {
    return (
        <div className='flex flex-col bg-white overflow-hidden'>
            {/* Common Header component of our shopping view  */}
            <ShoppingHeader/>
            <main className='flex flex-col w-full'>
                <Outlet/>
            </main>    
        </div>
    );
};

export default ShoppingLayout;