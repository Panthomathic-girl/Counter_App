const countValue = document.querySelector('#counter');

const increment = () => {
    //Get the valur for UI
    let value = parseInt(countValue.innerText);
    //Increment the value
    value = value + 1;
    //Set the value onto UI
    countValue.innerText = value;
}


function decrement() {
    //Get the valur for UI
    let value = parseInt(countValue.innerText);
    //Increment the value
    value = value - 1;
    //Set the value onto UI
    countValue.innerText = value;
}

// parseInt ---> Used for converting STRING to INT.