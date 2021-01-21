function AddTask(task) {
    this.idDone = Math.floor(Math.random() * 100).toString();
    this.idDelete = Math.floor(Math.random() * 100).toString();
    this.idDeleteDone = Math.floor(Math.random() * 100).toString();
    this.newTask = task;
};