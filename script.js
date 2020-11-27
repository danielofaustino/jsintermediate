
window.onload = function(){

    let button = document.getElementsByTagName("button")[0]
    let Paragraph = document.getElementsByTagName('p')[0]
    let input = document.getElementsByTagName('input')[0]
    let header = document.getElementsByTagName("h1")[0]
    

    // variable to receive true or false when button is clicked
    let flag = false
    // variable to receive how many times the button was changed the color
    let cont = 1
        

    // functions
    
    const changeH1= () =>{
    
        header.innerText = input.value
    } 

    const changeColor= ( )=>{

        
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

    // Events
    button.addEventListener("click",changeColor)
    input.addEventListener('input',changeH1)
}
