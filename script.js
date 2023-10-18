let copyBtn = document.querySelector('button')
let textarea = document.querySelector('textarea')

copyBtn.addEventListener('click' , () => {
    textarea.select()
    let textValue = textarea.value

    navigator.clipboard.writeText(textValue)
    copyBtn.innerText = 'کپی شد'
    copyBtn.style.backgroundColor = '#03a9f4'

    setTimeout( () => {
        copyBtn.innerText = 'کپی کن'
        copyBtn.style.backgroundColor = '#b3e5fc'
    } , 1500)
    
})