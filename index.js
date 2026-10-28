let header = document.getElementById("header");
let button = document.getElementById("button1");
let clicked = false;

button.onclick = function(){
   
    if(clicked === false)
    {
        clicked = true;

        header.textContent = "Made By Your One And Only DanzelGamer, Youtube: @DanzelGamer ";
        header.style.color = "pink";
    }
    else
    {
        clicked = false;

        header.textContent = "Your perfect escape starts here.";
        header.style.color = "white";
    }

}
