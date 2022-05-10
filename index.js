let numberOfShapes = 8
let shapesArray = []
let container = document.getElementById("container")

for (let i=0; i < numberOfShapes; i++) {
    shapesArray.push(i)
}

for (let i=0; i < shapesArray.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', `shape${i+1}`);
    const newContent = document.createTextNode(i+1);
    newDiv.appendChild(newContent);
    container.appendChild(newDiv);
    newDiv.classList.add("shape");
    let topRight = Math.floor((Math.random())*16)+5
    let topLeft = Math.floor(Math.random()*16)+5
    let bottomRight = Math.floor(Math.random()*16)+5
    let bottomLeft = Math.floor(Math.random()*16)+5
    let width = Math.floor(Math.random()*80)+40
    console.log(width)
    newDiv.style.cssText += 
    `width:${width}px;border-radius:${topLeft}em ${topRight}em ${bottomLeft}em ${bottomRight}em;`;
}








