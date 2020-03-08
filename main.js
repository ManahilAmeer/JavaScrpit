var todolist = {
  todoArray: [],
  displayTodo: function() {
    console.log("Todolist"); //, this.todoArray);
    for (let index = 0; index < this.todoArray.length; index++) {
      if (this.todoArray[index].completed == true)
        console.log("(X)", this.todoArray[index].text);
      else console.log("()", this.todoArray[index].text);
    }
  },
  addTodos: function(todoData) {
    this.todoArray.push({
      completed: false,
      text: todoData
    });
    this.displayTodo();
  },
  changeTodos: function(index, item) {
    this.todoArray[index].text = item;
    this.displayTodo();
  },
  deleteTodos: function(index) {
    this.todoArray.splice(index, 1);
    this.displayTodo();
  },
  toggleCompleted: function(index) {
    this.todoArray[index].completed = true;
  }
};
todolist.addTodos("item1");
todolist.addTodos("item2");
todolist.addTodos("item3");
var display = document
  .getElementById("DisplayAllBtn")
  .addEventListener("click", function() {
    todolist.displayTodo();
  });
