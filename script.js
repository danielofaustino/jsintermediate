// variable to receive true or false when button is clicked
let flag = false
// variable to receive how many times the button was changed the color
let cont = 1

const changeColor= (button)=>{

    let Paragraph = document.getElementById('p1')
    // logic to test if button was clicked
    if(flag == false){

        //changing style property
        button.style ="color:blue"
        //changing flag status
        flag = true
        Paragraph.innerText = cont++

   }else if(flag == true){

        button.style ="color:red"
        flag = false
        Paragraph.innerText = cont++
   }
       
    
    
}