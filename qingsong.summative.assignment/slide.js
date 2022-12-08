
const images = ['./image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg', './image/6.jpg'];
let imgNow = 0;
let t;

let dotContainer = document.getElementById("dot-container");
for(let i=0; i<images.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.id = "dot"+i;
    dot.addEventListener("click", function() {
        clearTimeout(t);
        dotID = this.getAttribute("id");
        imgNow = Number(dotID.replace("dot", ""));
        document.getElementById("img-show").src = images[imgNow];
        for(let i=0; i<dots.length; i++) {
            dots[i].className = "dot";
        }
        this.className = "dot selected";
        t = setTimeout( ()=>{ timer(); }, 1000*2);
    });
    dotContainer.appendChild(dot);
}
let defaultDot = document.getElementById("dot0").className = "dot selected";

let dots = document.getElementsByClassName("dot");

t = setTimeout( ()=>{ 
    timer();
}, 1000*2);

document.getElementById("img-show").addEventListener("mouseover", function() { 
    clearTimeout(t);
});
document.getElementById("img-show").addEventListener("mouseout", function() { 
    t = setTimeout( ()=>{ timer(); }, 1000*2);
});

let previous = document.getElementById("to-pre");
previous.addEventListener("click", function() { 
    clearTimeout(t);
    changeImage(true);
    t = setTimeout( ()=>{ timer(); }, 1000*2);
});
let next = document.getElementById("to-next");
next.addEventListener("click", function() { 
    clearTimeout(t);
    changeImage(false); 
    t = setTimeout( ()=>{ timer(); }, 1000*2);
});

function timer() {
    changeImage(false);
    t = setTimeout( ()=>{ timer(); }, 1000*2);
}

function changeImage(direction) {
    for(let i=0; i<dots.length; i++) {
        dots[i].className = "dot";
    }
    if(direction) {
        if(imgNow == 0) {
            imgNow = images.length-1;
        } else {
            imgNow -= 1;
        }
        document.getElementById("img-show").src = images[imgNow]; 
        dots[imgNow].className = "dot selected";
    } else {
        if(imgNow == images.length-1) {
            imgNow = 0;
        } else {
            imgNow += 1;
        }
        document.getElementById("img-show").src = images[imgNow];
        dots[imgNow].className = "dot selected";
    }
}