<template>
  <div class="container">
    <div class="navbar-container">
      <span class="navbar-user">ユーザー名</span>
      <button class="navbar-logout">Logout</button>
    </div>
    <h1>Todo App</h1>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import todoService from "@/service/TodoService";

export interface Todo {
  name: string;
  isFinished: boolean;
}

interface Data {
  todos: Todo[];
  todoName: string;
}

export default Vue.extend({
  name: "Todo",
  data: (): Data => ({
    todos: [],
    todoName: ""
  }),
  mounted() {
    todoService.subscribe(this.fetchTodos);
  },
  beforeDestroy() {
    todoService.unsubscribe();
  },
  methods: {
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
