export type SupportedAudio="m4a"|"mp3"|"wav";
export function isSupportedAudio(uri:string){return /\.(m4a|mp3|wav)(\?.*)?$/i.test(uri);}
export async function transcribeAudio(_uri:string){throw new Error("Transcription service not configured yet. Add your backend/API integration.");}