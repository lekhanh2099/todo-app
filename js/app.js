/**
 *  Hàm lấy DOM
 */

function getEle(ele) {
    return document.querySelector(ele);
};

/**
 * Lấy thông tin input và mảng chứa các task
 */

let addTodo = getEle('#addItem');

// List task
let listTask = new ListTask();

// Validation

let validate = new Validation();


getLocalStorage();

addTodo.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Add new task')
    let task = getEle('#newTask').value;
    isValid = true;
    isValid &= validate.checkEmpty(task, 'Todo empty');
    isValid &= validate.checkTask(task, listTask.arrTask, 'Already exist');
    // isValid &= validate.checkTaskDone(task, listTask.doneTask, 'Trùng rồi');
    getEle('#newTask').value = '';
    
    if (isValid) {
        let newTask = new AddTask(this.newTask = task);
        listTask.addTask(newTask);
        createTask(listTask.arrTask);
        setLocalStorage();
    }

});

// addTodo.addEventListener('click', function() {

// });

/**
 * In danh sách task vừa tạo vào html
 */

function createTask(task) {
    let content = '';
    for (let i = 0; i < task.length; i++) {
        content += `
        <li class="">
            <span>${task[i].newTask}</span>
            <div class="">
                <button class="btn-del" onclick="deleteTask('${task[i].idDelete}')"><i class="fas fa-minus-circle"></i></button>
                <button class="btn-done" onclick="doneTask('${task[i].idDone}')"><i class="fas fa-check-circle"></i></button>
            </div>
        </li>
        `;
    };
    getEle('#todo').innerHTML = content;
};

/**
 * Kiểm tra trùng
 */

/**
 * Xoá task
 */
function deleteTask(idTask) {
    alert('Do you want to delete task?');
    listTask.deleteTask(idTask);
    createTask(listTask.arrTask);
    setLocalStorage();
};

/**
 * Done task
 */

function doneTask(doneId) {
    alert('Check done task');
    let task = listTask.getTask(doneId);
    listTask.addDoneTask(task);
    createDoneTask(listTask.doneTask);
    listTask.deleteTaskDone(doneId);
    createTask(listTask.arrTask);
    setLocalStorage();
};

function createDoneTask(task) {
    let content = '';
    for (let i = 0; i < task.length; i++) {
        content += `
        <li class="">
        <span>${task[i].newTask}</span>
        <div class="">
        <button class="btn-del" onclick="deleteTaskDone('${task[i].idDeleteDone}')"><i class="fas fa-minus-circle"></i></button>
        </div>
        </li>
        `;
    };
    getEle('#completed').innerHTML = content;
};



function deleteTaskDone(idDeleteTaskDone) {
    alert('Delete task done');
    listTask.deleteDone(idDeleteTaskDone);
    createDoneTask(listTask.doneTask);
    setLocalStorage();
};















/**
 * Lưu vào local storage
 */

function setLocalStorage() {
    let dataTasks = JSON.stringify(listTask.arrTask);
    localStorage.setItem('ListTasks', dataTasks);
    let dataDone = JSON.stringify(listTask.doneTask);
    localStorage.setItem('ListTasksDone', dataDone);
};



/**
 * Tạo lại list sao khi f5...()
 */

function getLocalStorage() {
    if (localStorage.getItem('ListTasks')) {
        listTask.arrTask = JSON.parse(localStorage.getItem('ListTasks'));
        createTask(listTask.arrTask);
    };
    if (localStorage.getItem('ListTasksDone')) {
        listTask.doneTask = JSON.parse(localStorage.getItem('ListTasksDone'));
        createDoneTask(listTask.doneTask);
    };
};

