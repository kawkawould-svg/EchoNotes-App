import {View,Text,StyleSheet,Pressable,ScrollView} from "react-native";
import {useRouter} from "expo-router";
import {useTheme} from "@/hooks/useTheme";
import {spacing,radius,typography} from "@/constants/theme";

export default function Home(){
 const router=useRouter(); const {colors}=useTheme();
 return <ScrollView style={{backgroundColor:colors.background}} contentContainerStyle={s.container}>
  <Text style={[typography.small,{color:colors.mutedText}]}>WELCOME BACK</Text>
  <Text style={[typography.title,{color:colors.text,marginTop:6}]}>EchoNotes ✨</Text>
  <Text style={{color:colors.mutedText,fontSize:15,marginTop:6}}>Turn your lectures into study material.</Text>
  <Pressable onPress={()=>router.push("/record")} style={[s.hero,{backgroundColor:colors.lavender}]}>
   <Text style={{fontSize:36}}>🎙️</Text><View style={{flex:1}}><Text style={[typography.heading,{color:colors.text}]}>New recording</Text><Text style={{color:colors.text,marginTop:4}}>Record or import audio</Text></View><Text style={{fontSize:26}}>›</Text>
  </Pressable>
  <Text style={[typography.heading,{color:colors.text,marginTop:28,marginBottom:12}]}>Your study space</Text>
  <View style={s.grid}>
   <Pressable onPress={()=>router.push("/library")} style={[s.card,{backgroundColor:colors.mint}]}><Text style={s.icon}>📚</Text><Text style={[s.cardTitle,{color:colors.text}]}>Library</Text><Text style={{color:colors.mutedText}}>Your materials</Text></Pressable>
   <Pressable onPress={()=>router.push("/settings")} style={[s.card,{backgroundColor:colors.peach}]}><Text style={s.icon}>⚙️</Text><Text style={[s.cardTitle,{color:colors.text}]}>Settings</Text><Text style={{color:colors.mutedText}}>Theme & preferences</Text></Pressable>
  </View>
  <View style={[s.empty,{backgroundColor:colors.surface,borderColor:colors.border}]}>
   <Text style={{fontSize:30}}>📝</Text><Text style={[typography.heading,{color:colors.text,marginTop:8}]}>No notes yet</Text><Text style={{color:colors.mutedText,textAlign:"center",marginTop:5}}>Create your first recording and EchoNotes will organize it for you.</Text>
  </View>
 </ScrollView>
}
const s=StyleSheet.create({container:{padding:spacing.lg,paddingTop:60,paddingBottom:40},hero:{marginTop:28,borderRadius:radius.lg,padding:20,flexDirection:"row",alignItems:"center",gap:14},grid:{flexDirection:"row",gap:12},card:{flex:1,borderRadius:radius.md,padding:18,minHeight:145},icon:{fontSize:28,marginBottom:14},cardTitle:{fontSize:18,fontWeight:"700",marginBottom:5},empty:{marginTop:20,borderRadius:radius.md,borderWidth:1,padding:28,alignItems:"center"}});