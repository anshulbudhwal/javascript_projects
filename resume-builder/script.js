function addNewWEField(){
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("wefield")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Name")

    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton")

    weOb.insertBefore(newNode,weAddButtonOb)
}
function addNewAQField(){
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("aqfield")
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Name")

    let aqOb=document.getElementById("aq")
    let aqAddButtonOb=document.getElementById("aqAddButton")
    aqOb.insertBefore(newNode,aqAddButtonOb)
}

//Generating CV
function generateCV(){

    // adding name
    let namefield=document.getElementById("namefield").value;
    let nameT1=document.getElementById("nameT1")

    nameT1.innerHTML=namefield

    document.getElementById("nameT2").innerHTML=namefield

    // contact details
    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value

    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value

    // social media links
    document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value
    document.getElementById("instaT").innerHTML=document.getElementById("instafield").value
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedfield").value

    // objectives
    document.getElementById("obT").innerHTML=document.getElementById("obfield").value

    // work Experience 
    let wes=document.getElementsByClassName("wefield")
    let str=""
    for(let e of wes){
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str

    // Academic Qualification  
    let aq=document.getElementsByClassName("aqfield")
    let str1=""
    for(let e of aq){
        str1=str1+`<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1

    // profile photo k
    let file=document.getElementById("imgfield").files[0];

    if(file){
        let reader=new FileReader()
    reader.readAsDataURL(file);

    reader.onloadend=function(){
    document.getElementById("imgtemp").src=reader.result;

    }
    }
    
    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-templete").style.display="block"
}

// print cv 
function printCV(){
    window.print();
}

