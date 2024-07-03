function clickme(){
var flname=document.getElementById("fname").value;
document.write("Hello "+flname+" your Request has been succesfully submited.");
document.write("<br>");
document.write("And we will contact you soon...");
document.write("<br>");
document.write(`<a href="index.html"">Click Me to go to Home page</a>`);
}
var a=0;
var a1=0;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var a6=0;
var a7=0;
var a8=0;
var b1=0;
var b2=0;
var b3=0;
var b4=0;
var b5=0;
var b6=0;
var b7=0;
var b8=0;
var total=0;
function click1(){
    a+=1;
    a1+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function click2(){
    a+=1;
    a2+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function click3(){
    a+=1;
    a3+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function click4(){
    a+=1;
    a4+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function click5(){
    a+=1;
    a5+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function click6(){
    a+=1;
    a6+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function click7(){
    a+=1;
    a7+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function click8(){
    a+=1;
    a8+=1;
    document.getElementById("cartmain").innerHTML=a;
}
function cartbutton(){
    b1=a1*285;
    b2=a2*360;
    b3=a3*190;
    b4=a4*210;
    b5=a5*85;
    b6=a6*90;
    b7=a7*60;
    b8=a8*120;
    if(a==0){
        document.write(`<h1><center>Add Items to Cart.</center></h1>`);
    }
    else{
        var x1=document.getElementById("d1").innerHTML;
        var x2=document.getElementById("d2").innerHTML;
        var x3=document.getElementById("d3").innerHTML;
        var x4=document.getElementById("d4").innerHTML;
        var x5=document.getElementById("d5").innerHTML;
        var x6=document.getElementById("d6").innerHTML;
        var x7=document.getElementById("d7").innerHTML;
        var x8=document.getElementById("d8").innerHTML;
        document.write(`${x1}`);
        if(a1>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Andhra Chilli Chicken : ${a1}<center></h1><h1>Total : ${b1}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Andhra Chilli Chicken : 0<center></h1><h1>Total : ${b1}</h1></div><hr>`);
        }
        document.write(`${x2}`);
        if(a2>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Pork Vindaloo : ${a2}<center></h1><h1>Total : ${b2}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Pork Vindaloo : 0<center></h1><h1>Total : ${b2}</h1></div><hr>`);
        }
        document.write(`${x3}`);
        if(a3>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Phall Curry : ${a3}<center></h1><h1>Total : ${b3}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Phall Curry : 0<center></h1><h1>Total : ${b3}</h1></div><hr>`);
        }
        document.write(`${x4}`);
        if(a4>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Kolhapuri Chicken : ${a4}<center></h1><h1>Total : ${b4}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Kolhapuri Chicken : 0<center></h1><h1>Total : ${b4}</h1></div><hr>`);
        }
        document.write(`${x5}`);
        if(a5>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Carrot Cake : ${a5}<center></h1><h1>Total : ${b5}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Carrot Cake : 0<center></h1><h1>Total : ${b5}</h1></div><hr>`);
        }
        document.write(`${x6}`);
        if(a6>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Cheesecake : ${a6}<center></h1><h1>Total : ${b6}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Cheesecake : 0<center></h1><h1>Total : ${b6}</h1></div><hr>`);
        }
        document.write(`${x7}`);
        if(a7>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Ice Cream : ${a7}<center></h1><h1>Total : ${b7}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Ice Cream : 0<center></h1><h1>Total : ${b7}</h1></div><hr>`);
        }
        document.write(`${x8}`);
        if(a8>=0){
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Milkshakes : ${a8}<center></h1><h1>Total : ${b8}</h1></div><hr>`);
        }
        else{
            document.write(`<div style="display:flex;justify-content:space-between;"><h1><center>Quantity of Milkshakes : 0<center></h1><h1>Total : ${b8}</h1></div><hr>`);
        }
        total=b1+b2+b3+b4+b5+b6+b7+b8;
        document.write(`<h1 style="float:right;">Total : ${total}</h1>`);
    }
}