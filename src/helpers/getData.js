function readDataFromLS(){
    let data = localStorage.getItem('items');
    if (!data){
        return []
    }
    return JSON.parse(data);
    
    
}

function addToLocalStorage(data){   
    localStorage.setItem('items', JSON.stringify(data))
}

module.exports = {
    addToLocalStorage,
    readDataFromLS
}