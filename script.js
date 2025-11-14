alert("Welcome to our website please register here")


const handleInput = (inputNumber) {
    const currentInput= document.querySelector('
        inputContainer input:nth-child(${inputNumber})');
        const nextInput = document.querySelector('.inputContainer
        input:nth-child(${inputNumber + 1})');

        if (currentInput.value.length ===1 &&nextInput) {
            nextInput.disabled = false;
            nextInput.focus();
            const allInutsfilled = Array.from(document.querySelectorAll
            ('.inputContainer input')).every(input=input.value.
            length===1 ); 
        }
}




