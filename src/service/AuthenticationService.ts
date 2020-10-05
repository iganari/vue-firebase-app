import firebase from "../firebase/firebase";

class AuthenticationService {
  private auth: firebase.auth.Auth;
  private detach: () => void;

  constructor(auth: firebase.auth.Auth) {
    this.auth = auth;
    this.detach = () => {
      // NO STATEMENT
    };
  }

  async register(email: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }

  subscribe(setUser: (user: firebase.User) => void) {
    this.detach = this.auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      }
    });
  }

  unsbscribe() {
    this.detach();
  }
}

export default new AuthenticationService(firebase.auth());
