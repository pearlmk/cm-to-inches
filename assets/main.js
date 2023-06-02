function convert(){
    let cmVal = Number(document.getElementById("input").value)
    let inchVal = cmVal/2.45
    let result = document.getElementById("rst")
    result.innerHTML= inchVal.toFixed(2)+ " "+ "inches" 
}