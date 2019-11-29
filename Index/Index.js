//* Login Form popup
//!PLS PUT THIS BACK IN LATER!!!!!
window.onload = function openpopup1() {
    myModal.style.display = "block";
}

//* Login Info Check
var username = localStorage.getItem('Username');
var password = localStorage.getItem('Password');
var exampletaskstat = localStorage.getItem('exampletask')
var extask = document.getElementById('undoneTaskExample')
var incompCont = document.getElementById('incompCont')

function login() {
    if(loginForm.usernameInput.value === username){
        if(loginForm.passwordInput.value === password){
            myModal.style.display = "none";
            test()
            if(exampletaskstat == 'off'){
                console.log('off')
                incompCont.parentNode.removeChild()
            } else{
                console.log('on')

            }
        }
        else{
            alert("Invalid Password")
        }
    }
    else {
        alert("Invalid Username")
    }
}

function test() {
    var database = localStorage.getItem('database')
    var databaseArr = JSON.parse(database)

    for(i = 0; i < databaseArr.length; i++){
        if(databaseArr[i].username === username) {
            var label = document.getElementById('headerEntry').value
            var newTask = document.createElement('li');
            var taskArr = localStorage.getItem('database');
            
            // Setting the li id
            var liid = document.createAttribute('id');
            liid.value = 'undoneTask';
            newTask.setAttribute('id', 'undoneTask');

            // Add label
            var labeltitle = document.createElement('label');
            labeltitle.innerHTML = databaseArr[i].task;
            newTask.appendChild(labeltitle);
            var labelclass = document.createAttribute('class');
            labelclass.value = 'taskLabel';
            labeltitle.setAttribute('class', 'taskLabel');

            // Adding the trash button
            var trashbutton = document.createElement('button');
            newTask.appendChild(trashbutton);
            var tbuttonid = document.createAttribute('id');
            tbuttonid.value = 'trashbutton';
            trashbutton.setAttribute('id', 'trashbutton');
            var removetask = document.createAttribute('onclick');
            removetask.value = 'trash()';
            trashbutton.setAttribute('onclick', 'trash()');

            // Adding the trash bin icon
            var trashbinicon = document.createElement('img');
            trashbinicon.src = "../indexTESTBUILD/Untitled-3.png";
            trashbutton.appendChild(trashbinicon);
            var trashid = document.createAttribute('id');
            trashid.value = 'heejin';
            trashbinicon.setAttribute('id', 'heejin');

            // Appending the final li
            document.getElementById('incompCont').appendChild(newTask);
        }
    }
}

//* For the search bar/add button
function addbutton() {
    var label = document.getElementById('headerEntry').value
    var newTask = document.createElement('li');
    var taskArr = localStorage.getItem('database');
    var data = [];
    var exampleTask = document.getElementById('undoneTaskExample')

    if(label !== '') {
        // Setting the li id
        var liid = document.createAttribute('id');
        liid.value = 'undoneTask';
        newTask.setAttribute('id', 'undoneTask');

        // Add label
        var labeltitle = document.createElement('label');
        labeltitle.innerHTML = label;
        newTask.appendChild(labeltitle);
        var labelclass = document.createAttribute('class');
        labelclass.value = 'taskLabel';
        labeltitle.setAttribute('class', 'taskLabel');

        // Adding the trash button
        var trashbutton = document.createElement('button');
        newTask.appendChild(trashbutton);
        var tbuttonid = document.createAttribute('id');
        tbuttonid.value = 'trashbutton';
        trashbutton.setAttribute('id', 'trashbutton');
        var removetask = document.createAttribute('onclick');
        removetask.value = 'trash()';
        trashbutton.setAttribute('onclick', 'trash()');

        // Adding the trash bin icon
        var trashbinicon = document.createElement('img');
        trashbinicon.src = "../indexTESTBUILD/Untitled-3.png";
        trashbutton.appendChild(trashbinicon);
        var trashid = document.createAttribute('id');
        trashid.value = 'heejin';
        trashbinicon.setAttribute('id', 'heejin');

        // Appending the final li
        document.getElementById('incompCont').appendChild(newTask);

        // Delete the example task
        exampleTask.parentNode.removeChild(undoneTaskExample)

        localStorage.setItem('exampletask', 'off')

        if(taskArr === null) {
            data = [{
                task: document.getElementById('headerEntry').value,
                username: localStorage.getItem('Username')
            }]
            localStorage.setItem('database', JSON.stringify(data))

        } else {
            data = JSON.parse(taskArr)
            data.push({
                task: document.getElementById('headerEntry').value,
                username: localStorage.getItem('Username')
            })
            localStorage.setItem('database', JSON.stringify(data))
        }
    } else {
        alert('Please enter your task in the bar above');
    }
}

//* Trash Button
function trash() {
    var yn = confirm('Are you sure? This deletes the top most task.');
    var database = localStorage.getItem('database')

    if(yn == true){
    var tasktoremove = document.getElementById('undoneTask')
    tasktoremove.remove()
    removedata = JSON.parse(database)
    removedata.shift([0])
    localStorage.setItem('database', JSON.stringify(removedata))
    } else{
        alert('Your task was not deleted. Make sure to complete it!')
    }
}

//* Dark Mode
var x = '0';

function darken() {
    if (x == '0'){
        document.getElementById('dmicon').src = "../indexTESTBUILD/i24_photoedit_brightness-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(25, 25, 25)";
        document.getElementById('incompTitle').style.color = "rgb(255, 255, 255)";
        document.getElementById('compTitle').style.color = "rgb(255, 255, 255)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(170, 170, 170)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        x = '1';
    } else{
        document.getElementById('dmicon').src = "../indexTESTBUILD/nightmode-512.png";
        document.getElementById('html').style.backgroundColor = "rgb(240, 240, 240, 0.98)";
        document.getElementById('incompTitle').style.color = "rgb(0, 0, 0)";
        document.getElementById('compTitle').style.color = "rgb(0, 0, 0)";
        document.getElementById('darkmode').style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById('headerRec').style.boxShadow = "0px 4px 6px black;";
        x = '0';
    } 
}