/* Your code here */

/* Page navigation */

function showPage1() {
    console.log("function showPage1()");
    document.querySelector("#page-1").style.display = "";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "none";
}

function showPage2() {
    console.log("function showPage2()");
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "";
    document.querySelector("#page-3").style.display = "none";
}

function showPage3() {
    console.log("function showPage3()");
    document.querySelector("#page-1").style.display = "none";
    document.querySelector("#page-2").style.display = "none";
    document.querySelector("#page-3").style.display = "";
}

showPage1();

console.log("App javascript run");