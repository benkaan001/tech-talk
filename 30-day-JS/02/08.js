/*
The following todoList has three tasks.
Create an addTask, removeTask, editTask, toggleTask, toggleAll, removeAll
functions to modify the todoList.
*/
let todoList = [
  {
    task: 'Prepare JS Test',
    time: '4/3/2019 8:30',
    completed: true,
  },
  {
    task: 'Give JS Test',
    time: '4/3/2019 10:00',
    completed: false,
  },
  {
    task: 'Assess Test Result',
    time: '4/3/2019 1:00',
    completed: false,
  },
];

// use object destructuring
const addTask = (newTask) => {
  const { task, time, completed } = newTask;

  todoList.push(newTask);
  return todoList;
};

// console.log(
//   addTask({
//     task: 'start coding in JAVA!!!',
//     time: '4/21/2022 1:01',
//     completed: true,
//   })
// );

// remove task on the basis of completion status
const removeTask = () => {
  return todoList.filter((task) => {
    return task.completed !== true;
  });
};

console.log(removeTask());

// edit task on the basis of completion status
const editTask = (taskName) => {
  return todoList.filter((task) => {
    if (task.task === taskName) {
      task.completed = true;
    }
  });
};
console.log(editTask('Give JS Test')); // { task: 'Give JS Test', time: '4/3/2019 10:00', completed: true },

// removeAll task
const removeAll = () => {
  return ([...todoList] = []);
};

console.log(removeAll()); // []
console.log(todoList); // []
