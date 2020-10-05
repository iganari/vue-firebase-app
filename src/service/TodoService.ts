import firebase from "../firebase/firebase";

class TodoService {
  db: firebase.firestore.Firestore;

  constructor(db: firebase.firestore.Firestore) {
    this.db = db;
  }

  create(name: string) {
    this.db.collection("todos").add({
      name,
      isFinished: false
    });
  }
}

export default new TodoService(firebase.firestore());
