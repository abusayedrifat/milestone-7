// localStorage.setItem('userId');

const addtoLocalStorage = () =>{
    const inputId = document.getElementById('input-variable');
    const id = inputId.value;
    const inputValue = document.getElementById('input-value');
    const value = inputValue.value;


    if (id && value) {
        localStorage.setItem(id, value)
    }
    inputValue.value = '';
    inputId.value = '';
    
}


const num = 5

let test = (num > 3) ? true : false

console.log(test)