import {View,Text,Pressable,StyleSheet} from "react-native";
import {useRouter} from "expo-router"; import {useTheme} from "@/hooks/useTheme"; import {spacing,radius,typography} from "@/constants/theme";
export default function Record(){const r=useRouter();const {colors}=useTheme();return <View style={[s.page,{backgroundColor:colors.background}]}>
<Pressable onPress={()=>r.back()}><Text style={{color:colors.primary,fontSize:17}}>‹ Back</Text></Pressable>
<Text style={[typography.title,{color:colors.text,marginTop:28}]}>Record / Import</Text>
<Text style={{color:colors.mutedText,marginTop:8}}>Choose how you want to add your lecture.</Text>
<Pressable style={[s.option,{backgroundColor:colors.lavender}]} onPress={()=>r.push("/processing")}><Text style={s.big}>🎙️</Text><View><Text style={[typography.heading,{color:colors.text}]}>Record in EchoNotes</Text><Text style={{color:colors.mutedText}}>Start a new voice recording</Text></View></Pressable>
<Pressable style={[s.option,{backgroundColor:colors.babyBlue}]} onPress={()=>r.push("/processing")}><Text style={s.big}>📁</Text><View><Text style={[typography.heading,{color:colors.text}]}>Import audio</Text><Text style={{color:colors.mutedText}}>m4a · mp3 · wav</Text></View></Pressable>
</View>}
const s=StyleSheet.create({page:{flex:1,padding:spacing.lg,paddingTop:60},option:{marginTop:18,padding:20,borderRadius:radius.lg,flexDirection:"row",alignItems:"center",gap:16},big:{fontSize:34}});