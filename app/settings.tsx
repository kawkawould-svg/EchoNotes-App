import {View,Text,Pressable,StyleSheet,ScrollView} from "react-native";
import {useRouter} from "expo-router";
import {useTheme,ThemeMode} from "@/hooks/useTheme";
import {spacing,radius,typography} from "@/constants/theme";

export default function Settings(){
 const r=useRouter(); const {colors,mode,setMode}=useTheme();
 const modes:ThemeMode[]=["system","light","dark"];
 return <ScrollView style={{backgroundColor:colors.background}} contentContainerStyle={s.page}>
  <Pressable onPress={()=>r.back()}><Text style={{color:colors.primary,fontSize:17}}>‹ Back</Text></Pressable>
  <Text style={[typography.title,{color:colors.text,marginTop:24}]}>Settings</Text>
  <Text style={{color:colors.mutedText,marginTop:8}}>Customize how EchoNotes looks on your device.</Text>
  <Text style={[typography.heading,{color:colors.text,marginTop:28}]}>Appearance</Text>
  <View style={s.options}>{modes.map(item=><Pressable key={item} onPress={()=>setMode(item)} style={[s.option,{backgroundColor:colors.surface,borderColor:item===mode?colors.primary:colors.border}]}><Text style={{color:colors.text,fontSize:16,textTransform:"capitalize"}}>{item}</Text><Text style={{color:item===mode?colors.primary:colors.mutedText,fontWeight:"700"}}>{item===mode?"✓":""}</Text></Pressable>)}</View>
  <View style={[s.about,{backgroundColor:colors.surface,borderColor:colors.border}]}>
   <Text style={[typography.heading,{color:colors.text,fontSize:18}]}>EchoNotes</Text>
   <Text style={{color:colors.mutedText,marginTop:5}}>Your personal lecture-to-study-material assistant.</Text>
   <Text style={{color:colors.mutedText,marginTop:14}}>Version 1.0.0</Text>
  </View>
 </ScrollView>
}
const s=StyleSheet.create({page:{flexGrow:1,padding:spacing.lg,paddingTop:60,paddingBottom:40},options:{marginTop:12,gap:10},option:{padding:17,borderRadius:radius.md,borderWidth:1,flexDirection:"row",justifyContent:"space-between"},about:{marginTop:28,padding:18,borderRadius:radius.md,borderWidth:1}});
