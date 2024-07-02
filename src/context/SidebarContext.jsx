import { createContext, useState } from "react";

// create context
export const SidebarContext = createContext(null);

const SidebarContextProvider = ({ children }) => {
    // sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () =>{
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose, handleOpen}}>{children}</SidebarContext.Provider>;
};

export default SidebarContextProvider;
