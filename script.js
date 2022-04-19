// menu.click = function func_name() {
//     var x = document.getElementById("myTopnav");

//     if(x.className === "topnav") {
//         x.className += "responsive";
//     } else {
//         this.click.className = "topnav";
//     }
// }

// делаем выпадающее меню слева /получилось
menu.onclick = function myFunction(){
    var x = document.getElementById ("myTopnav");

    if(x.className === "topnav"){
        x.className += " responsive";
    }

    else {
        x.className = "topnav";
    }
}