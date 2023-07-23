const generateDummyData = () => {
  return {
    todoList: [
      {
        id: 1,
        name: 'Task 1',
        status: 'todo',
        description: 'This is task 1 in the To Do list.',
      },
      {
        id: 2,
        name: 'Task 2',
        status: 'todo',
        description: 'This is task 2 in the To Do list.',
      },
      {
        id: 3,
        name: 'Task 3',
        status: 'todo',
        description: 'This is task 3 in the To Do list.',
      },
    ],
    inProgressList: [
      {
        id: 4,
        name: 'Task 4',
        status: 'inprogress',
        description: 'This is task 4 in the In Progress list.',
      },
      {
        id: 5,
        name: 'Task 5',
        status: 'inprogress',
        description: 'This is task 5 in the In Progress list.',
      },
    ],
    doneList: [
      {
        id: 6,
        name: 'Task 6',
        status: 'done',
        description: 'This is task 6 in the Done list.',
      },
      {
        id: 7,
        name: 'Task 7',
        status: 'done',
        description: 'This is task 7 in the Done list.',
      },
    ],
  };
};

export default generateDummyData;
