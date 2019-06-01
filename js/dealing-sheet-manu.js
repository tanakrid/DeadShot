function addComponent(){
    let para = document.createElement("P");                       // Create a <p> node
    let t = document.createTextNode("This is a paragraph.");      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    for(let i = 0;i > 8;i++){
        document.getElementById("sheet-field").appendChild(para); 
    }
}

function test(){
    // let para = document.createElement("p");
    // let node = document.createTextNode("This is new.");

    // let node1 = document.getElementById("goods");
    // para.appendChild(node);
    // let element = document.getElementById("head");
    // element.appendChild(para);
    // element.appendChild(node1);
    let temp = "<div>testtesttesttset</div>";
    let node = document.createElement("div");
    let subNode = document.createElement("div");
    node.appendChild()
    let result;
    for(let i = 0;i < 9;i++){
        // result += temp;  
        document.getElementById("sheet-field").innerHTML += temp;
  
    }
    // document.getElementById("sheet-field").innerHTML += result;
}
window.onload = test;