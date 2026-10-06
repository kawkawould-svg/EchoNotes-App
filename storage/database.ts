export type StoredNote={id:string;title:string;createdAt:string;audioUri?:string;transcript?:string;notes?:string;summary?:string;tags:string[];folderId?:string};
let notes:StoredNote[]=[];
export async function initDatabase(){return true;}
export async function listNotes(){return [...notes].sort((a,b)=>b.createdAt.localeCompare(a.createdAt));}
export async function saveNote(note:StoredNote){notes=[note,...notes.filter(n=>n.id!==note.id)];return note;}
export async function getNote(id:string){return notes.find(n=>n.id===id);}
export async function deleteNote(id:string){notes=notes.filter(n=>n.id!==id);}