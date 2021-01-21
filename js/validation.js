function Validation() {
    this.checkEmpty = function (input, message) {
        if (input === '') {
            alert(message);
            return false;
        };
        return true;
    };
    this.checkTask = function (input, listTask, message) {
        for (let i = 0; i < listTask.length; i++) {
            if (input.toLowerCase() === listTask[i].newTask.toLowerCase()) {
                alert(message);
                return false;
            };
        };
        return true;
    };
    this.checkController = function (message) {
        if (input === '') {
            alert(message);
            return false;
        };
        return true;
    };
};