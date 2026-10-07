import * as SQLite from "expo-sqlite";
export type StoredNote={id:string;title:string;createdAt:string;audioUri?:string;transcript?:string;notes?:string;summary?:string;exercises?:string;tags:string[];folderId?:string};
let db:SQLite.SQLiteDatabase|null=null;
export async function initDatabase(){if(!db)db=await SQLite.openDatabaseAsync("echonotes.db");await db.execAsync(`CREATE TABLE IF NOT EXISTS notes(id TEXT PRIMARY KEY,title TEXT NOT NULL,createdAt TEXT NOT NULL,audioUri TEXT,transcript TEXT,notes TEXT,summary TEXT,exercises TEXT,tags TEXT,folderId TEXT);`);return db;}
export async function saveNote(n:StoredNote){const d=await initDatabase();await d.runAsync(`INSERT OR REPLACE INTO notes VALUES (?,?,?,?,?,?,?,?,?,?)`,n.id,n.title,n.createdAt,n.audioUri??null,n.transcript??null,n.notes??null,n.summary??null,n.exercises??null,JSON.stringify(n.tags??[]),n.folderId??null);}
export async function listNotes(){const d=await initDatabase();const rows=await d.getAllAsync<any>("SELECT * FROM notes ORDER BY createdAt DESC");return rows.map(r=>({...r,tags:JSON.parse(r.tags||"[]")}));}
export async function getNote(id:string){const d=await initDatabase();const row=await d.getFirstAsync<any>("SELECT * FROM notes WHERE id = ?",id);if(!row)return null;return {...row,tags:JSON.parse(row.tags||"[]")};}
