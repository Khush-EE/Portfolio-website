

function setMode() {
    if(sessionStorage.getItem("mode") == null) {
        sessionStorage.setItem("mode", "light");
        return;
    }

    let root = document.querySelector(":root");

    if(sessionStorage.getItem("mode") == "dark") {
        root.style.setProperty("--image", "url(../images/dark_bg2.jpg)");
        root.style.setProperty("--fontColor", "white");
        root.style.setProperty("--darkColor", "rgb(87, 87, 87)");

    }else{
        root.style.setProperty("--image", "url(../images/bg.jpg)");
        root.style.setProperty("--fontColor", "rgb(70, 70, 70)");
        root.style.setProperty("--darkColor", "rgb(226, 225, 225)");
    }
}

function setColor() {
    if(sessionStorage.getItem("color") == null) {
        sessionStorage.setItem("color", "#30d5c8");
        return;
    }

    let root = document.querySelector(":root");
    let color = sessionStorage.getItem("color");
    root.style.setProperty("--bgColor", color);
}

function toggleMode() {
    let icon = document.getElementById("mode");

    if(sessionStorage.getItem("mode") == null) {
        sessionStorage.setItem("mode", "dark");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        setMode();
        return;
    }

    if(sessionStorage.getItem("mode") == 'light') {
        sessionStorage.setItem("mode", "dark");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }else{
        sessionStorage.setItem("mode", "light");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    
    setMode();
}


document.addEventListener("DOMContentLoaded", () => {
    setMode();
    setColor();
})

