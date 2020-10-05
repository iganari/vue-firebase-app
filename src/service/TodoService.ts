import firebase from "../firebase/firebase";
import { Todo } from "../components/Todo.vue";

class TodoService {
  private db: firebase.firestore.Firestore;
  private detach: () => void;

  constructor(db: firebase.firestore.Firestore) {
    this.db = db;
    this.detach = () => {
      // NO STATEMENT
    };
  }

  subscribe(callback: (todos: Todo[]) => void) {
    this.unsubscribe = this.db.collection("todos").onSnapshot(snapshot => {
      const todos: Todo[] = [];
      snapshot.forEach(doc => {
        todos.push(doc.data() as Todo);
      });
      callback(todos);
    });
  }

  unsubscribe() {
    this.detach();
  }

  create(name: string) {
    this.db.collection("todos").add({
      name,
      isFinished: false
    });
  }
}

export default new TodoService(firebase.firestore());
