
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Create a new list item when clicking on the "Add" button
function newElement1() {
    var li = document.createElement("div");
    var inputValue = document.getElementById("myInput1").value;
    var inputValueB = document.getElementById("myInput1B").value;

    var t = document.createTextNode(inputValue);
    var space = document.createTextNode("             ");
    var tB = document.createTextNode(inputValueB);

    li.appendChild(tB);
    li.appendChild(space);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must input an item!");
    } else {
        document.getElementById("myUL1").appendChild(li);
    }
    document.getElementById("myInput1").value = "";
    document.getElementById("myInput1B").value = ""

    // here is the button logic
    var btn = document.createElement("button");

    $(btn).attr("id", "Btn1");
    $(btn).addClass("btn btn-primary custom"); //add custom to allow hover css

    var txt = document.createTextNode("Bought");
    btn.appendChild(txt);
    li.appendChild(btn);



    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Create a new list item when clicking on the "Add" button
function newElement2() {
    var li = document.createElement("div");
    var inputValue = document.getElementById("myInput2").value;
    var inputValueB = document.getElementById("myInput2B").value;

    var t = document.createTextNode(inputValue);
    var space = document.createTextNode("             ");
    var tB = document.createTextNode(inputValueB);

    li.appendChild(tB);
    li.appendChild(space);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must input an item!");
    } else {
        document.getElementById("myUL2").appendChild(li);
    }
    document.getElementById("myInput2").value = "";
    document.getElementById("myInput2B").value = ""

// here is the button logic
    var btn = document.createElement("button");
    var txt = document.createTextNode("Bought");
    btn.appendChild(txt);
    li.appendChild(btn);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Create a new list item when clicking on the "Add" button
function newElement3() {
    var li = document.createElement("div");
    var inputValue = document.getElementById("myInput3").value;
    var inputValueB = document.getElementById("myInput3B").value;

    var t = document.createTextNode(inputValue);
    var space = document.createTextNode("             ");
    var tB = document.createTextNode(inputValueB);

    li.appendChild(tB);
    li.appendChild(space);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must input an item!");
    } else {
        document.getElementById("myUL3").appendChild(li);
    }
    document.getElementById("myInput3").value = "";
    document.getElementById("myInput3B").value = ""

// here is the button logic
    var btn = document.createElement("button");
    var txt = document.createTextNode("Bought");
    btn.appendChild(txt);
    li.appendChild(btn);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Create a new list item when clicking on the "Add" button
function newElement4() {
    var li = document.createElement("div");
    var inputValue = document.getElementById("myInput4").value;
    var inputValueB = document.getElementById("myInput4B").value;

    var t = document.createTextNode(inputValue);
    var space = document.createTextNode("             ");
    var tB = document.createTextNode(inputValueB);

    li.appendChild(tB);
    li.appendChild(space);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must input an item!");
    } else {
        document.getElementById("myUL4").appendChild(li);
    }
    document.getElementById("myInput4").value = "";
    document.getElementById("myInput4B").value = ""


// here is the button logic
    var btn = document.createElement("button");
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    var txt = document.createTextNode("Bought");

    btn.appendChild(txt);
    li.appendChild(btn);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}