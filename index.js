function hide(){
    let temp = document.getElementById('first');
    let temp2= document.getElementById('second');
    temp.style.filter ="blur(4px)";
    temp2.style.display="block";
}
function form(){
    let temp = document.getElementById('second');
    let temp2= document.getElementById('first');
    temp2.style.filter="blur(0px)";
    temp.style.display="none";
}
function hide2(){
    let temp = document.getElementById('first');
    let temp2= document.getElementById('third');
    temp.style.filter ="blur(4px)";
    temp2.style.display="block";
}
function form2(){
    let temp = document.getElementById('third');
    let temp2= document.getElementById('first');
    temp2.style.filter="blur(0px)";
    temp.style.display="none";
}