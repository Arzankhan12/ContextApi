import { useContext,createContext } from "react";

export const ThemeContext = createContext({
  ThemeMode:"light",
  DarkTheme: ()=>{},
  lighTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}
