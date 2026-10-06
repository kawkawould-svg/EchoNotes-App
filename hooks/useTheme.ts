import {useColorScheme} from "react-native";
import {darkColors,lightColors} from "@/constants/theme";
export type ThemeMode="light"|"dark"|"system";
export function useTheme(mode:ThemeMode="system"){const systemScheme=useColorScheme();const isDark=mode==="dark"||(mode==="system"&&systemScheme==="dark");return{mode,isDark,colors:isDark?darkColors:lightColors};}