document.addEventListener('DOMContentLoaded', function() {
const todo = [];
document.querySelector('#task').onsubmit = function (event){
event.preventDefault();
const li = document.createElement('li');
var task_text = document.getElementById('title-of-task').value;
var task_priority = document.getElementById('priority-of-task').value;
var task_status;
var task_status_values = document.querySelectorAll('[name=status-of-task]');

for (var i = 0; i< task_status_values.length;i++){
if (task_status_values[i].checked){
task_status = task_status_values[i].value;
}
}

var task_html = `<div class = "task-html"> <table style="width:100%;border:1px solid black;">
  <tr>
    <td style ="border:1px solid black;text-align:center;"><span>Task - ${task_text} </span></td>
    <td style ="border:1px solid black;text-align:center;"><span> Priority - ${task_priority} </span></td>
    <td style = "border:1px solid black;text-align:center;"><span> Status - ${task_status} </span></td>
  </tr>
</table></div>
<button class = "mark-as-complete" style="width: 10%;
padding: 10px;
margin-left:0;
background: #d9d9d9;
color: #000000;
text-align: center;
font-size: 12px;
cursor: pointer;
transition: 0.3s;
font-family: Verdana, Geneva, sans-serif;
font-weight: bold"> Completed </button>
<button class = "remove" style="width: 10%;
padding: 10px;
margin-left:0;
background: #d9d9d9;
color: #000000;
text-align: center;
font-size: 12px;
cursor: pointer;
transition: 0.3s;
font-family: Verdana, Geneva, sans-serif;
font-weight: bold"> Remove </button>`;

li.innerHTML = task_html

if (task_text == "" || task_priority =="") {
  alert("Enter all task information");
} else {
todo.push(task_text);
document.querySelector('#array_for_tasks').append(li);
document.querySelector('#title-of-task').value = '';
return false;
}
};


document.addEventListener('click', function(event){
element = event.target;
if (element.className === 'mark-as-complete' || element.className === 'completed'){
element.parentElement.querySelector('.task-html').style.textDecoration = "line-through";
element.task_status = "completed";
}
if (element.className === 'remove'){
element.parentElement.remove();
}
})


});
