//selecting Inputbox

var disp = document.getElementById("display")
function vick(value) {
    disp.value = disp.value + value
}

//assign the function all clear to the button
function displayclear() {
    disp.value = ""
}
//assign the function delete button
function deleted(event)
{
   let display=document.getElementById("display")
   display.value=display.value.slice(0,-1)
}

/*
function calculateresult()
{
    try{
        let expression=document.getElementById("display")
        expression=expression.replace(/Math.sin\(/g, 'Math.sin(Math.PI/180*')
        expression=expression.replace(/Math.cos\(/g, 'Math.cos(Math.PI/180*')
        expression=expression.replace(/Math.tan\(/g, 'Math.tan(Math.PI/180*')
        document.getElementById("display").value=eval(expression)
    }
    catch(e)
    {
        document.getElementById("display").value='Error'
    }
}
    */


//assign the mathamatical value in "=" button

function calculateResult() {
    const display = document.getElementById("display")
    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = 'Syntax Error'
    }
}