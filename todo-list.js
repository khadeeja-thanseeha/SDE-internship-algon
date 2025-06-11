class Todo {
  constructor() {
    this.todos = [];
  }

  // Adds a new todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Removes a todo at the specified index
  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  // Updates the todo at the given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  // Returns all todos
  getAll() {
    return this.todos;
  }

  // Returns the todo at the given index
  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    }
    return null; // Or throw an error if preferred
  }

  // Clears all todos
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
