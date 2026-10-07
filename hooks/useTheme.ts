import {useColorScheme} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {darkColors,lightColors} from "@/constants/theme";
import {useEffect,useState} from "react";

export type ThemeMode="light"|"dark"|"system";
const KEY="echonotes.theme";

export function useTheme(){
 const systemScheme=useColorScheme();
 const [mode,setModeState]=useState<ThemeMode>("system");
 useEffect(()=>{AsyncStorage.getItem(KEY).then(v=>{if(v==="light"||v==="dark"||v==="system")setModeState(v)});},[]);
 const setMode=async(next:ThemeMode)=>{setModeState(next);await AsyncStorage.setItem(KEY,next);};
 const isDark=mode==="dark"||(mode==="system"&&systemScheme==="dark");
 return {mode,isDark,colors:isDark?darkColors:lightColors,setMode};
}
