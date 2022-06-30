function readDataFromLS(){
    let data = localStorage.getItem('items');
    if (!data){
        return []
    }
    return JSON.parse(data);
    
}

function addToLocalStorage(productID){
    let existingData = readDataFromLS()
    let found = false
    for (let item of existingData){
        if (item.id == productID){
            item.quantity++
            found = true;
        }        
    }
    if(!found){
        existingData.push({id:productID, quantity:1})
    }    
    localStorage.setItem('items', JSON.stringify(existingData))
}

module.exports = {
    addToLocalStorage,
    readDataFromLS
}