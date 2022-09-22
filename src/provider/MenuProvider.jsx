import { createContext,useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = (props) => {
    const {children} = props;
    const [menuInfo, setMenuInfo] = useState([]);
    return(
        <MenuContext.Provider value={{menuInfo, setMenuInfo}}>
            {children}
        </MenuContext.Provider>
    )
}
export const useMenuContext = () => useContext(MenuContext);