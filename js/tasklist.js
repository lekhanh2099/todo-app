function ListTask() {
    this.arrTask = [];
    this.addTask = function (task) {
        this.arrTask.push(task);
    };
    /**
     * Tìm vị trí của task
     */

    this.findIndexDone = function (idTask) {
        let index = -1;
        for (let i = 0; i < this.arrTask.length; i++) {
            if (this.arrTask[i].idDone === idTask) {
                index = i;
            };
        };
        return index;
    };

    /**
     * Lấy thông tin của 1 task
     */

    this.getTask = function (idTask) {
        let index = this.findIndexDone(idTask);
        if (index !== -1) {
            return this.arrTask[index];
        };
    };

    /**
     * Xoá task
     */

    this.deleteTask = function (idTask) {
        for (let i = 0; i < this.arrTask.length; i++) {
            if (this.arrTask[i].idDelete === idTask) {
                this.arrTask.splice(i, 1);
            };
        };
    };

    /**
     * Done task
    */
    this.deleteTaskDone = function (idTaskDone) {
        for (let i = 0; i < this.arrTask.length; i++) {
            if (this.arrTask[i].idDone === idTaskDone) {
                this.arrTask.splice(i, 1);
            };
        };
    };

    this.doneTask = [];
    this.addDoneTask = function (taskDone) {
        this.doneTask.push(taskDone);
    };

    this.deleteDone = function (idDelDone) {
        for (let i = 0; i < this.doneTask.length; i++) {
            if (this.doneTask[i].idDeleteDone === idDelDone) {
                this.doneTask.splice(i, 1);
            };
        };
    };
};


