//defined array for storing user given inpput values
var electricalData=[]

function submitBtn(){
    var electricalItemName= document.getElementById('name').value
    var itemCount= document.getElementById('noOfItems').value
    var hrsPerDay= document.getElementById('hrsPerDay').value
    var unitsPerHr= document.getElementById('unitsPerDay').value
    var eleObj={}
    eleObj.eName= electricalItemName
    eleObj.eCount= itemCount
    eleObj.eHrsPerDay= hrsPerDay
    eleObj.eUnitsPerHr= unitsPerHr
    electricalData.push(eleObj)
//    Validation
    if(electricalItemName=='' || itemCount == ''|| hrsPerDay == 0 || unitsPerDay == 0 ){
        var error=document.getElementById('error')
        error.innerText=" fill details"
    }else{
        totalCostPerDay()
    }
}

function totalCostPerDay(){
    
    var tbody= document.querySelector('.tbody')
    tbody.innerHTML=''
    electricalData.forEach(function(ele, ind){
        var tr= document.createElement('tr')
        var tdIndex= document.createElement('td')
        var tdItem= document.createElement('td')
        var tdCount= document.createElement('td')
        var tdUnitsPerHrs= document.createElement('td')
        var tdUnitsPerDay=document.createElement('td')
        var tdTotalConsumptionsPerday= document.createElement('td')
        tdIndex.innerText= ind+1
        tdItem.innerText = ele.eName
        tdCount.innerText = ele.eCount
        tdUnitsPerHrs.innerText = ele.eUnitsPerHr
        var res= Math.ceil(Number(ele.eUnitsPerHr)*Number(ele.eHrsPerDay)* Number(ele.eCount))
        tdUnitsPerDay.innerText = res
        tdUnitsPerDay.setAttribute('class', 'unitsPerDay')
        //console.log(totalBill)
        
        tr.appendChild(tdIndex)
        tr.appendChild(tdItem)
        tr.appendChild(tdCount)
        tr.appendChild(tdUnitsPerHrs)
        tr.appendChild(tdUnitsPerDay)
        tbody.appendChild(tr)
        
        // tdunits = ele.eNmae
    })
    console.log(electricalData)
    getdetails()
    
}
//display the total bill per day and month
function getdetails(){
    var totalBill=0
    var table= document.querySelector('.table')

    // console.log(table.children[1].lastElementChild.childNodes[4].innerText)
    // console.log(table.querySelectorAll('td').length)

    var tableRows=table.querySelectorAll('td')
    var tableLength=tableRows.length

    for(var ele=0; ele<tableLength; ele++){
        if(tableRows[ele].className == 'unitsPerDay'){
            totalBill+=Math.ceil(Number(tableRows[ele].innerHTML))
        }
    }

    //Per Day Power Consumption

    var perDay= document.getElementById('perDay')
    // var perDay= document.createElement('p')
    perDay.innerHTML=Math.ceil(totalBill) +' Units'
    // display.appendChild(perDay)

    //per month power consumption
    var perMonth= document.getElementById('perMonth')
    var totalBillPerMonth= Math.ceil(30*Number(totalBill))
    perMonth.innerHTML=totalBillPerMonth+' Units'
    
    //cost per Month
    var costPerMonth=0
    if(totalBillPerMonth<=100){
        costPerMonth= Math.ceil(totalBillPerMonth * 4);
    }else if( totalBillPerMonth<=300){
        costPerMonth= Math.ceil(totalBillPerMonth * 5);
    }else if(totalBillPerMonth<=500){
        costPerMonth= Math.ceil(totalBillPerMonth * 7);
    }else{
        costPerMonth= Math.ceil(totalBillPerMonth * 10);
    }
    
    var cost= document.getElementById('costPerMonth')
    cost.innerHTML=costPerMonth

    console.log(totalBill)
}