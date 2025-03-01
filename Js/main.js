document.getElementById("imageButton").addEventListener('click', function () {
    // alert("Button clicked!");
    document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // console.log("Button clicked!");
});


const today = new Date().toDateString();

document.getElementById("today-date").innerHTML = today;