import React, { useContext, useState } from 'react';

const SideDrawerContext = React.createContext();
const SideDrawerUpdateContext = React.createContext();

export const useSideDrawer = () => useContext(SideDrawerContext);
export const useSideDrawerUpdate = () => useContext(SideDrawerUpdateContext);

export const SideDrawerProvider = ({ children }) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

    return (
        <SideDrawerContext.Provider value={drawerIsOpen}>
            <SideDrawerUpdateContext.Provider value={toggleDrawer}>
                {children}
            </SideDrawerUpdateContext.Provider>
        </SideDrawerContext.Provider>
    );
}