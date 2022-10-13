
var textResult = $("#result")

function insertNumber(number) {
    
    var presentNumber = textResult.val()
    
    textResult.val(presentNumber + number)
}


// clear Result

function clnResult() {
    textResult.val('')
}


// result calculation

function calculate() {
    var result = eval(textResult.val())
    textResult.val( result +" Ans")
}

// Delete number one by one


function deleteNumber(){
    var deletvalu = textResult.val()
    
    if (deletvalu != '') {
        textResult.val(deletvalu.slice(0,-1))
    }
}