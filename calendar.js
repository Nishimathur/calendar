// watch
let Items = document.getElementsByClassName("item")

setInterval(()=>{

    let MyDate = new Date();
    let h = MyDate.getHours();
    let m = MyDate.getMinutes();
    let s = MyDate.getSeconds();

    Items[0].innerHTML = h
    Items[1].innerHTML = m
    Items[2].innerHTML = s

},1000)


let mydata = new Date()
function RenderDate()
{
     mydata.setDate(1)
     let D = mydata.getDay()
     console.log(mydata.getDay())
     let endDate = new Date(
     mydata.getFullYear(),
     mydata.getMonth() + 1,
     0
     ).getDate()

  // prev
    let prevDate = new Date(
     mydata.getFullYear(),
     mydata.getMonth() ,
     0
     ).getDate()

   // carntdate 
   let today = new Date()
   let months = [
    "January", "February","March","April", "May", "June", "July","August", "September", "October","November","December"
    ]
   let M = document.getElementById("month")
   M.innerHTML = months[mydata.getMonth()]

   // prev
   let cells = "";
   for(let x = D; x > 0; x--)
   {
     cells+= "<div class ='prevdate'>" + (prevDate - x + 1) + "</div>"
   }
   // date
    for(let i = 1; i <= endDate; i++)
    {
      if(i == today.getDate() && mydata.getMonth() == today.getMonth())
        {
         cells+= "<div class = 'today'>" + i + "</div>";
        }
    else{
        cells+= "<div>" + i + "</div>";

     }
    
}
let days = document.getElementsByClassName("days")
days[0].innerHTML = cells
} 
// change
function moveDate(para){
    if(para == 'prev')
    {
        mydata.setMonth(mydata.getMonth() - 1)
    }
    else if (para == 'next'){
        mydata.setMonth(mydata.getMonth() + 1)
    }
    RenderDate()
   
}
let months = [
    "January", "February","March","April", "May", "June", "July","August", "September", "October","November","December"
    ]
let d = document.getElementById("date")
   d.innerHTML = mydata.getDate()

let  m = document.querySelector(".m")
m.innerHTML = months[mydata.getMonth()]

let year = document.getElementById("year")
year.innerHTML = mydata.getFullYear()

  