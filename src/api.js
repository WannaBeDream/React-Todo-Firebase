import { db } from "./firebase";

export function getLists() {
    return db.collection("lists")
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            return items;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
};

export function getListTodos(listId) {
    return db.collection("todos").where("listId", "==", listId)
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            return items;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
};


export function createTodo(data) {
    return db.collection("todos")
        .add({
            ...data,
            completed: false,
        })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));

}

export function deleteTodo(todoId) {
    return db.collection("todos").doc(todoId).delete().then(() => {
        console.log("Document successfully deleted!");
    }).then(() => todoId).catch(function (error) {
        console.error("Error removing document: ", error);
    });

}

export function updateTodo(todoId, data) {
  return  db.collection("todos").doc(todoId).update(data)
        .then( () => 
            console.log("Document successfully updated!")
        );
    
}