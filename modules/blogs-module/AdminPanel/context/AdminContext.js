import React, {
    createContext, useState
} from 'react';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    const [adminData, setAdminData] = useState({
        handleSidebar: false,
    });

    const handleHideSidebar = () => {
        setAdminData({
            ...adminData,
            handleSidebar: !adminData.handleSidebar
        });
    };

    return (
        <AdminContext.Provider value={{ adminData, handleHideSidebar }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
