let copyBtn = document.querySelector('button')
let textarea = document.querySelector('textarea')

copyBtn.addEventListener('click' , () => {
    textarea.select()
})