import Dexie from "dexie";

const db = new Dexie("Tasksbase")

db.version(1).stores({
    tasks: '++id, date, time, title, completed'
})

export default db;