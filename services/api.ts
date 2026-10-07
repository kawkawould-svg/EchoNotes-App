export type TranscriptResponse={text:string};
export type GeneratedMaterial={notes:string;summary:string;exercises:string};

function apiBase(){const base=process.env.EXPO_PUBLIC_API_URL?.replace(/\/$/,"");if(!base)throw new Error("EchoNotes backend is not configured.");return base;}

async function readError(res:Response,fallback:string){try{const data=await res.json();if(data?.error)return new Error(data.error);}catch{}return new Error(fallback);}

function audioMeta(uri:string,providedName?:string){
 const fromName=providedName&&/\.[a-z0-9]+$/i.test(providedName)?providedName:null;
 const fromUri=uri.match(/\.([a-z0-9]+)(?:[?#].*)?$/i)?.[1];
 const ext=(fromName?.split(".").pop()||fromUri||"m4a").toLowerCase();
 const safeExt=["m4a","mp3","wav","webm","ogg","opus","flac","mp4","mpeg","mpga"].includes(ext)?ext:"m4a";
 const name=fromName||`audio.${safeExt}`;
 const mime={m4a:"audio/mp4",mp3:"audio/mpeg",wav:"audio/wav",webm:"audio/webm",ogg:"audio/ogg",opus:"audio/opus",flac:"audio/flac",mp4:"audio/mp4",mpeg:"audio/mpeg",mpga:"audio/mpeg"}[safeExt]||"audio/mp4";
 return {name,mime};
}

export async function transcribe(uri:string,providedName?:string):Promise<TranscriptResponse>{
 const fileResponse=await fetch(uri);
 if(!fileResponse.ok)throw new Error("Could not read the recorded audio.");
 const blob=await fileResponse.blob();
 const meta=audioMeta(uri,providedName);
 const typedBlob=new Blob([blob],{type:meta.mime});
 const form=new FormData();
 form.append("file",typedBlob,meta.name);
 const res=await fetch(apiBase()+"/transcribe",{method:"POST",body:form});
 if(!res.ok)throw await readError(res,"Transcription failed.");
 return res.json();
}
export async function generateMaterial(transcript:string):Promise<GeneratedMaterial>{
 const res=await fetch(apiBase()+"/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript})});
 if(!res.ok)throw await readError(res,"Study material generation failed.");
 return res.json();
}
