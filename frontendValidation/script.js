document.getElementById("submit").onclick = function() {
    //for form2
    let newtask = document.getElementById("newtask").value;

    if (newtask.includes(">") || newtask.includes("<")) {
        document.getElementById("newTaskError").style.display = "block";
    }
    //for form3
    let newTask = document.createElement("LI");
    newTask.innerHTML = myTask;
    document.getElementById("myTasksList").appendChild(newTask);
}