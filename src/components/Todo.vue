<template>
  <div class="container">
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
      <li>
        <div class="todos-container-item">
          <span>
            todo1
          </span>
          <span>
            [X]
          </span>
        </div>
      </li>
      <li>
        <div class="todos-container-item">
          <span>
            todo1
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

interface Data {
  todoName: string;
}

export default Vue.extend({
  name: "Todo",
  data: (): Data => ({
    todoName: ""
  }),
  methods: {
    registerTodo() {
      todoService.create(this.todoName);
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
