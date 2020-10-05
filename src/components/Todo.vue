<template>
  <div class="container">
    <div class="navbar-container">
      <template v-if="!!user">
        <span class="navbar-user">ログイン中のユーザー: {{ user.email }}</span>
        <button @click="logout" class="navbar-logout">ログアウト</button>
      </template>
      <template v-else>
        <label for="email">メールアドレス</label>
        <input
          v-model="email"
          id="email"
          class="navbar-container-email"
          type="email"
        />
        <label for="password">パスワード</label>
        <input
          v-model="password"
          id="password"
          class="navbar-container-password"
          type="password"
        />
        <button @click="login" class="navbar-login">ログイン</button>
        <button @click="register" class="navbar-register">登録</button>
      </template>
    </div>
    <h1>Todo App</h1>
    <template v-if="!!user">
      <div class="input-form">
        <label for="todo_name">タスク名</label>
        <input
          v-model="todoName"
          id="todo_name"
          class="input-form-name"
          type="text"
        />
        <button @click="registerTodo" class="input-form-submit">登録</button>
      </div>
      <ul class="todos-container">
        <li v-for="(todo, index) in todos" :key="index">
          <div class="todos-container-item">
            <span>
              {{ todo.name }}
            </span>
            <span>
              [X]
            </span>
          </div>
        </li>
      </ul>
    </template>
    <template v-else>
      <div>ログインして下さい</div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import authenticationService from "@/service/AuthenticationService";
import todoService from "@/service/TodoService";
import firebase from "firebase";

export interface Todo {
  name: string;
  isFinished: boolean;
}

interface Data {
  user: firebase.User | null;
  email: string;
  password: string;
  todos: Todo[];
  todoName: string;
}

export default Vue.extend({
  name: "Todo",
  data: (): Data => ({
    user: null,
    email: "",
    password: "",
    todos: [],
    todoName: ""
  }),
  mounted() {
    authenticationService.subscribe(this.setUser);
    todoService.subscribe(this.fetchTodos);
  },
  beforeDestroy() {
    authenticationService.unsbscribe();
    todoService.unsubscribe();
  },
  methods: {
    setUser(user: firebase.User) {
      this.user = user;
    },
    async register() {
      await authenticationService.register(this.email, this.password);
    },
    async login() {
      await authenticationService.login(this.email, this.password);
    },
    async logout() {
      await authenticationService.logout();
      this.user = null;
    },
    fetchTodos(todos: Todo[]) {
      this.todos = todos;
    },
    registerTodo() {
      todoService.create(this.todoName);
      this.todoName = "";
    }
  }
});
</script>

<style lang="scss">
// 全体のレイアウト
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
}

// ヘッダーのレイアウト
.navbar {
  &-container {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }

  &-logout {
    margin-left: 4px;
  }
}

// タスク入力フォームのレイアウト
.input-form {
  &-name {
    margin-left: 4px;
  }
  &-submit {
    margin-left: 4px;
  }
}

// Todoタスクのレイアウト
.todos {
  &-container {
    background-color: white;
  }
}
</style>
