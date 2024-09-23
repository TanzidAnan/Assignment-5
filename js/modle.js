function showScetionById(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    

    document.getElementById(id).classList.remove('hidden')
}

function getInputByNumber(id){
    const inputValue =document.getElementById(id).value;
    const inputNumber =parseFloat(inputValue);
    return inputNumber;
}

function getCrrentInputBy(id){
    const currentNumberEl =document.getElementById(id).innerText;
    const currentNumber =parseFloat(currentNumberEl);
    return currentNumber
}