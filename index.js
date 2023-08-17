// Write your solution in this file!
let employee = {
    name : "Default",
    streetAddress : "Fake St"
}

function updateEmployeeWithKeyAndValue(e,k,v){
    let newemp = {...e}
    newemp[k] = v
    return(newemp)
}
function destructivelyUpdateEmployeeWithKeyAndValue(e,k,v){
    e[k] = v
    return(e)
}
function deleteFromEmployeeByKey(e,k,v){
    let newemp = {...e}
    delete newemp[k]
    return(newemp)
}
function destructivelyDeleteFromEmployeeByKey(e,k,v){
    delete e[k]
    return(e)
}