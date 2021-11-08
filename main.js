let btn = document.querySelector("#modal");
let modalContainer = document.querySelector(".modal-container");
let close = document.querySelector(".close");

const users = ['user','admin@gmail.com','admin'];

let eye = document.querySelector(".fa-eye");
let eye_slash = document.querySelector(".fa-eye-slash");

btn.addEventListener("click",function()
{
    modalContainer.classList.add("bgactive");
    btn.style.display = "none";
});

close.addEventListener("click",function()
{
    modalContainer.classList.remove("bgactive");
    btn.style.display = "block";
});

window.onclick = function(event)
{
    if(modalContainer == event.target)
    {
        modalContainer.classList.remove("bgactive");
        btn.style.display = "block";
    }
}

eye.onclick = function()
{
    eye_slash.style.visibility = "visible";
    eye.style.visibility = "hidden";
    document.getElementById("password").setAttribute("type","text");
}

eye_slash.onclick = function()
{
    eye.style.visibility = "visible";
    eye_slash.style.visibility = "hidden";
    document.getElementById("password").setAttribute("type","password");
}


function nom()
{
    let user = document.myform.user;

    if(user.value == users[0])
    {
        document.querySelectorAll("span")[0].innerHTML = '<i class="fas fa-check"></i>';
    }
    else
    {
        document.querySelectorAll("span")[0].innerHTML = '<i class="fas fa-times"></i>';
    }
}

function nom2()
{
    let email = document.myform.email;

    if(email.value == users[1])
    {
        document.querySelectorAll("span")[1].innerHTML = '<i class="fas fa-check"></i>';
    }
    else
    {
        document.querySelectorAll("span")[1].innerHTML = '<i class="fas fa-times"></i>';
    }
}

function nom3()
{
    let password = document.myform.password;

    if(password.value == users[2])
    {
        document.querySelectorAll("span")[2].innerHTML = '<i class="fas fa-check"></i>';
    }
    else
    {
        document.querySelectorAll("span")[2].innerHTML = '<i class="fas fa-times"></i>';
    }
}