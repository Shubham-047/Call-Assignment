//reference of the div where rendering is happening
var col = document.getElementById("display");
col.setAttribute("class", "horizon");

//given array
var sale = [
  "choose",
  "hi",
  "hello",
  "bye",
  "sales",
  "grow",
  "right",
  "left",
  "forward",
  "backward",
  "direction",
];
var call = [
  "choose",
  "DSA",
  "JAVA",
  "Python",
  "c++",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "MERN",
  "MEAN",
];

//two empty array for storing selected value
var res1 = [];
var res2 = [];


//variable for selecting value
var selected1;
var selected2;

//function to find unique elements from 1st select box
function unique1(e) {
  selected1 = e.target.value;
  res1.push(selected1); // pushing the selected value to the empty array
}

//function to find unique elements from 2st select box
function unique2(e) {
  selected2 = e.target.value;
  res2.push(selected2); // pushing the selected value to the empty array
}

//function to add new selectBoxes

var id = 0;
function funAdd() {
  var sel = document.createElement("select");
  sel.setAttribute("id", `select${id}`);

  for (let i = 0; i < sale.length; i++) {
    sel.addEventListener("change", unique1); //calling the function for setting the unique value for 1st select box

    var op = document.createElement("option"); //creating and adding options to select box

    if (!res1.includes(sale[i])) {
      // checking if the element is present earlier in the empty array then not adding that option
      op.value = sale[i];
      op.text = sale[i];
      sel.append(op);
    }
  }

  //for creation of select boxes
  var sel1 = document.createElement("select");
  sel1.setAttribute("id", `select1${id}`);
  for (var i = 0; i < call.length; i++) {
    sel1.addEventListener("change", unique2); //calling the function for setting the unique value for 1st select box
    var op = document.createElement("option"); //creating and adding options to select box
    if (!res2.includes(call[i])) {
      // checking if the element is present earlier in the empty array then not adding that option
      op.value = call[i];
      op.text = call[i];
      sel1.append(op);
    }
  }

  //creation of delete button
  const delBtn = document.createElement("button");

  delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  delBtn.value = id;
  delBtn.setAttribute("class", "btn");
  delBtn.setAttribute("id", `delete${id}`);
  delBtn.setAttribute("onclick", `fun3(${id})`);

  col.append(sel, sel1, delBtn);
  id++;
}

funAdd();

//function for removing the select boxes

function fun3(a) {
  let s = document.getElementById(`select${a}`);
  let s1 = document.getElementById(`select1${a}`);
  let btn = document.getElementById(`delete${a}`);

  s.style.display = "none";

  res1.pop();
  s1.style.display = "none";
  res2.pop();
  btn.style.display = "none";
}

//function for displaying the all elements in key valye pair;
function fun4() {
  var obj = {};
  for (var i = 0; i < res1.length; i++) {
    obj[res1[i]] = res2[i];
  }
 
  let data = document.getElementById("jsonData");
  data.innerHTML = JSON.stringify(obj);
}
