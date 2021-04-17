import * as SQLite from 'expo-sqlite'
const db=SQLite.openDatabase("post.db")

export class DB{
    static init() {
        return new Promise((resolve,reject) =>{
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, date TEXT, img TEXT, booked INT)',
                    [],
                    resolve(),
                    (_, error)=>reject(error)
                )
            })
        })
    }
    static load() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM posts',
                    [],
                    (_, data) => resolve(data.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }
    static addPost({text, img, date, booked}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'INSERT INTO posts (text, img, date, booked) VALUES(?,?,?,?)',
                    [text,img,date,booked],
                    (_, data) => resolve(data.insertId),
                    (_, error) => reject(error)
                )
            })
        })
    }
     static removePost(id) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM posts WHERE id=?',
                    [id],
                    resolve(),
                    (_, error) => reject(error)
                )
            })
        })
    }
    static toggleBooked({id, booked}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE posts SET booked=? WHERE id=?',
                    [booked?0:1, id],
                    resolve(),
                    (_, error) => reject(error)
                )
            })
        })
    }
}