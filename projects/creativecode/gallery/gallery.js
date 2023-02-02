const randomim = document.getElementById("randomgen");
randomim.addEventListener("mouseover", (e) => updateIm);

function updateIm() {
    //https://www.w3schools.com/jsref/jsref_random.asp
    let x = Math.random() * 9;
    if (x == 0) {
        randomim.src = "./images/Sketch Two_Random_1.png";
    } else if (x == 1) {
        // https://www.w3schools.com/jsref/prop_img_src.asp
        randomim.src = "./images/Sketch Two_Random_6.png";
    } else if (x == 2) {
        randomim.src = "./images/Sketch Two_Random_11.png";
    } else if (x == 3) {
        randomim.src = "./images/Sketch Two_Random_12.png";
    } else if (x == 4) {
        randomim.src = "./images/Sketch Two_Random_14.png";
    } else if (x == 5) {
        randomim.src = "./images/Sketch Two_Random_16.png";
    } else if (x == 6) {
        randomim.src = "./images/Sketch Two_Random_17.png";
    } else if (x == 7) {
        randomim.src = "./images/Sketch Two_Random_20.png";
    } else if (x == 8) {
        randomim.src = "./images/Sketch Two_Random_21.png";
    } else if (x == 9) {
        randomim.src = "./images/Sketch Two_Random_26.png";
    }
}