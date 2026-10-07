export type TranscriptResponse={text:string};
export type GeneratedMaterial={notes:string;summary:string;exercises:string};

function apiBase(){const base=process.env.EXPO_PUBLIC_API_URL?.replace(/\/$/,"");if(!base)throw new Error("EchoNotes backend is not configured.");return base;}

async function readError(res:Response,fallback:string){try{const data=await res.json();if(data?.error)return new Error(data.error);}catch{}return new Error(fallback);}

export async function transcribe(uri:string):Promise<TranscriptResponse>{
 const form=new FormData();
 form.append("file",{uri,name:"audio.m4a",type:"audio/m4a"} as any);
 const res=await fetch(apiBase()+"/transcribe",{method:"POST",body:form});
 if(!res.ok)throw await readError(res,"Transcription failed.");
 return res.json();
}
export async function generateMaterial(transcript:string):Promise<GeneratedMaterial>{
 const res=await fetch(apiBase()+"/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript})});
 if(!res.ok)throw await readError(res,"Study material generation failed.");
 return res.json();
}
