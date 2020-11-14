// variable to receive true or false when button is clicked
let flag = false

const changeColor= (button)=>{

    // logic to test if button was clicked
    if(flag == false){

        //changing style property
        button.style ="color:blue"
        //changing flag status
        flag = true

   }else if(flag == true){

        button.style ="color:red"
        flag = false

   }
       
    
    
}