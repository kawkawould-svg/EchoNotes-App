export type TranscriptResponse={text:string};
export async function transcribe(uri:string):Promise<TranscriptResponse>{
 const base=process.env.EXPO_PUBLIC_API_URL;
 if(!base) throw new Error("Set EXPO_PUBLIC_API_URL to your secure backend.");
 const form=new FormData();
 form.append("file",{uri,name:"audio.m4a",type:"audio/m4a"} as any);
 const res=await fetch(base+"/transcribe",{method:"POST",body:form});
 if(!res.ok) throw new Error("Transcription failed");
 return res.json();
}
export async function generateMaterial(transcript:string){
 const base=process.env.EXPO_PUBLIC_API_URL;
 if(!base) throw new Error("Set EXPO_PUBLIC_API_URL to your secure backend.");
 const res=await fetch(base+"/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript})});
 if(!res.ok) throw new Error("Generation failed");
 return res.json();
}