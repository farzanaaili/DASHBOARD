import React,{createContext, useContext, useState} from 'react';
// import UserProfile from './../componant/UserProfile';

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    UserProfile:false,
    notification:false,
}
export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] =useState(initialState);
    const [screenSize, SetScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] =useState('#0346d7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
   
const setMode= (e) =>{
    setCurrentMode(e.target.value);
    localStorage('themeMode', e.target.value);
    setThemeSettings(false);
}

const setColor= (color) =>{
    setCurrentColor(color);
    localStorage('colorMode',color);
    setThemeSettings(false);
}

    const handleClick= (clicked) => {
        setIsClicked({...initialState , [clicked] : true});
    }

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize,  SetScreenSize,
        currentColor, currentMode, themeSettings, setThemeSettings, setMode, setColor }}>
            {children}
        </StateContext.Provider>
    )
}

export  const useStateContext =() => useContext (StateContext);
export default ContextProvider


