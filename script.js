// variable to receive true or false when button is clicked
let flag = false

// function to change the color property in style of #p1 element
const changeColor= ()=>{

   // getting element that has p1 in id name 
   let paragraph = document.getElementById("p1")

    // logic to test if button was clicked
    if(flag == false){

        //changing style property
        paragraph.style ="color:blue"
        //changing flag status
        flag = true

   }else if(flag == true){

        paragraph.style ="color:red"
        flag = false

   }
       
    
    
}