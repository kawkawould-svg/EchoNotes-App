import {AudioModule,RecordingPresets,setAudioModeAsync,useAudioRecorder} from "expo-audio";
export async function requestMic(){const p=await AudioModule.requestRecordingPermissionsAsync();return p.granted;}
export async function prepareAudio(){await setAudioModeAsync({playsInSilentMode:true,allowsRecording:true});}
export {RecordingPresets,useAudioRecorder};