const inputBox=document.getElementById("input-box");
const task=document.getElementById("task");

function addTask(){
  if(inputBox.value===''){
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    task.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputBox.value="";
  saveData();
}

inputBox.addEventListener("keydown", function(e){
  if (e.code==='Enter'){
    addTask();
  }
});

task.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);


function saveData(){
  localStorage.setItem("data",task.innerHTML);
}

function displayData(){
  task.innerHTML=localStorage.getItem("data");
}

displayData();