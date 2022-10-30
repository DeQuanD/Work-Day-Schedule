var container = $(".container")
var day = $('#currentDay')
var today = moment().format("dddd, MMMM DD YYYY")
day.text(today) 
var scheduleTime = $('time')
var hour = moment().hour();
console.log(hour)
var Save = $(".saveBtn")
var timeTable = []
    timeTable[9] = "9 am"
    timeTable[10] = "10 am"
    timeTable[11] = "11 am"
    timeTable[12] = "12 pm"
    timeTable[13] = "1 pm"
    timeTable[14] = "2 pm"
    timeTable[15] = "3 pm"
    timeTable[16] = "4 pm"
 var block= $(".time-block") 

 var description = $('textarea')
 
var blockText = block.text()
blockText = 

Save.click(function(){
        localStorage.setItem('event', blockText)
} )
console.log(description)
if(hour == scheduleTime.text() ){
 $('.time-block').css({"background-color": 'green'})
}

//$('.time-block').css({"background-color": 'green'})
console.log(localStorage)


//console.log(timeTable[] )

/*if(i >= 9 && i <= 16){
    for(i< timeTable.length)
    i++
}*/