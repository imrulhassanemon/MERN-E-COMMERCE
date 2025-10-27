import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    return (
        <div className='flex min-h-screen w-full'>
            {/* admin slide bar  */}
            <AdminSidebar/>
            <div className='flex flex-1 flex-col '>
                {/* admin Header  */}
                <AdminHeader/>

                <main className='flex-1 bg-muted/40 flex md:p-6'>
                    <Outlet></Outlet>
                </main>

            </div>

        </div>
    );
};

export default AdminLayout;