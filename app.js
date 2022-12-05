//!------------ SORTED ARRAY -------------------//

const max=50;
const array = [];

for(let i=0; i<10; i++){
    let calc = Math.floor(Math.random()*(max+1));
    while(array.includes(calc)){
        calc=Math.floor(Math.random()*(max+1));
    }
    array.push(calc);
    array.sort(function(y, z){return y - z})
};
console.log(array);


// for(let i=0; i<10; i++){
//     const random = Math.floor(Math.random()*max)+1;
//     console.log(random);
// }


//!------------ FIFO & LIFO -------------------//

console.log("-FIFO & LIFO-");
    
//!---FIFO or LIFO SELECTION-----

function SwitchButtons(buttonId) {
    var hideBtn, showBtn, hBtn, sBtn;
    
    if (buttonId == 'button1') {
    
      showBtn = 'button1';
      hideBtn = 'button2';
      sBtn = 'btn-shift';
      hBtn = 'btn-pop';
    } if (buttonId == 'button2'){
      showBtn = 'button2';
      hideBtn = 'button1';
      sBtn = 'btn-pop';
      hBtn = 'btn-shift';
    }
    document.getElementById(hideBtn).style.display = 'none'; 
    document.getElementById(showBtn).style.display = ''; 
    document.getElementById(hBtn).style.display = 'none';
    document.getElementById(sBtn).style.display = '';
    


    const langList = document.getElementById("lang-list");
    const newUl = document.createElement("ul");
    langList.appendChild(newUl);
    const addBtn = document.querySelector("#btn");
    const shiftBtn = document.querySelector("#btn-shift");
    const popBtn = document.querySelector("#btn-pop");
    const numInput = document.querySelector("#input");

    const numArr = [];

     //!---ADD-----

    addBtn.addEventListener("click", () => {
      
        if (!numInput.value) {
          alert("Please enter 8 numbers");
        }else {
          numArr.push(numInput.value);
          newUl.innerHTML += `<li>${numInput.value}</li>`;
          numInput.value = "";
          
        }
        if(numArr.length >= 8)
        {
          addBtn.disabled = true;
          console.log(numArr);
        }
        numInput.focus();
      });

      numInput.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
          addBtn.click();
        }
      });

      const newLangList = document.getElementById("new-list");
      const neUl = document.createElement("ul");
      newLangList.appendChild(neUl);
      const newArr=[];
      
      popBtn.addEventListener("click", () => {
        

        //!---POP-----
      
      neUl.innerHTML += `<li>${newPop.apply(this,numArr).toString()}</li>`;
      //*---Pop button disabled time-----
      if(numArr.length < 1){
        popBtn.disabled = true;
      }  
       }); 
       
       //?---Pop function-----
       function newPop(){
          newArr.push(numArr[numArr.length-1])
          numArr.length-=1;

          console.log(numArr)
        return newArr[newArr.length-1];
       }


       //!---SHIFT-----


      shiftBtn.addEventListener("click", () => {
          neUl.innerHTML += `<li>${newShift().toString()}</li>`;//shift
          
          numInput.value = "";  
          //*---Shift button disabled time-----
          if(numArr.length < 1){
            shiftBtn.disabled = true;
          }   
          
       });


       let start=0;

       //?---Shift function-----
      function newShift(){
      
        const result= numArr[start++];    
        let c=0;

        for (let i=start; i<numArr.length; ++i){
          numArr[c++]=numArr[i];
        }
        start=0;
        numArr.length=c;
        console.log(numArr);
        
       
      return result
    }
   
}




 
  