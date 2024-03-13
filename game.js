let boxes = document.querySelectorAll(".box")
let resetbtn =document.querySelector("#reset-btn")
let newGameBtn=document.querySelector("#newgame")
let msg= document.querySelector("#msg")
let mstcontainer= document.querySelector(".msgcontainer")
let turn0 = true
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turn0=true
    boxenabled();
    mstcontainer.classList.add("hide")
}

boxes.forEach( (box)=> {
   
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0){
            box.innerText='0';
            turn0=false
        }
        else{
            box.innerText="X"
            turn0=true
        }
        box.Disabled=true;
        checkWinner();
    })
    
});
const boxdisabled=()=>{
    for(box of boxes){
        box.disabled=true;
    }}

 const boxenabled=()=>{
        for(box of boxes){
            box.disabled=false;
            box.innerText=""
        }
}
const showWinner = (winner) => {
    msg.innerText =`Congratulatoins, Winner is ${winner}`
    mstcontainer.classList.remove("hide");
    boxdisabled();

}

const checkWinner =()=>{
    for(let pattern of winPatterns){
       
            let pos1Value = boxes[pattern[0]].innerText;
            let pos2Value = boxes[pattern[1]].innerText;
            let pos3Value = boxes[pattern[2]].innerText;

            if (pos1Value != "" && pos2Value != "" && pos3Value != "" ){
                if(pos1Value==pos2Value && pos2Value==pos3Value){
                    console.log("winner",pos1Value)
                    showWinner(pos1Value);
                }
            }
    
    }
}
newGameBtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)






// let pos1Value=boxes[winPatterns[0]].innerText
//         let pos2Value=boxes[winPatterns[1]].innerText
//         let pos3Value=boxes[winPatterns[2]].innerText

//         if (pos1Value !="" && pos2Value !="" && pos3Value !="" ){
//             if(pos1Value===pos2Value && pos2Value===pos3Value){
//                 console.log("winner")
//             }
//         }
    