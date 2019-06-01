function addComponent(){
    let para = document.createElement("P");                       // Create a <p> node
    let t = document.createTextNode("This is a paragraph.");      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    for(let i = 0;i > 8;i++){
        document.getElementById("sheet-field").appendChild(para); 
    }
}

// $(document).ready(function(){
//   $("button").click(function(){
//     $("div").hide();
//   });
// });
