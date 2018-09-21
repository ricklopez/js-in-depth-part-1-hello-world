
console.log("Hello From Main.js");

var el = document.getElementsByClassName("title").item(0);

function bar(y){
    var x = "World";
    if (y)
        console.log(y + " from bar() param");
    else
        console.log(x + " from bar() body");
};

function foo(a){
    var y = a;
    console.log(y +" from foo() param");
    return function(){
        bar(y);
    }
}
bar();
var z = foo("Hello");
z();

function changeColor(event){
    event.preventDefault();
    var colorValue = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(colorValue);
    event.target.style.color = colorValue;
}

el.addEventListener('click', changeColor);
