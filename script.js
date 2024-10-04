const display = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
     
        const value = this.innerText;
        
        
        if (value === 'AC') {
            display.innerText = '';
        } 
    
        else if (value === 'DEL') {
            display.innerText = display.innerText.slice(0, -1);
        } 
        
        else if (value === '=') {
        
            let expression = display.innerText.replace('X', '*').replace('÷', '/');
            
           
            if (expression && isValidExpression(expression)) {
                display.innerText = eval(expression); 
            } else {
                display.innerText = 'Error'; 
            }
        } 
       
        else {
            display.innerText += value;
        }
    });
});


function isValidExpression(expression) {

    const lastChar = expression.slice(-1);
    const operators = ['+', '-', '*', '/'];
    
    if (operators.includes(lastChar)) {
        return false; 
    }
    
    return true; 
}