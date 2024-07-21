//quest 1
const buttonRemoveText = document.querySelector("button");
const buttonChangeBackground = document.querySelector("#blueGround");

//quest 2
function remover () {
    console.dir(buttonRemoveText);
}
function changed(event) {
    console.dir(event.target);
}

buttonRemoveText.addEventListener("click", remover);
document.body.children[2].children[6].addEventListener("click", changed);

//quest 3
const remove = document.body.children[2].children[3];
const change = document.body.children[2].children[1];
//quest 4

// function remover() {
//     remove.remove();
// };

// function changed() {
//     //change.classList.add("changed");

//     change.style.backgroundColor = "rgb(0 ,0 , 256)";
// };

buttonRemoveText.addEventListener("click", remover);
buttonChangeBackground.addEventListener("click", changed);