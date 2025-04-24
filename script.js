//change text content dynamically
document.getElementById('change-txt').addEventListener('click',() =>{
    const text=document.getElementById('dynamic-text');
    text.textContent='Text has been updated via javascript';
    text.style.color='purple';
    text.style.fontWeight='bold';
});

//Add or remove an element when button is clicked.
document.getElementById('toggle-box-btn').addEventListener('click',() =>{
    const container = document.getElementById('box-container');
    const existingBox = document.getElementById('dynamic-box');

    if (existingBox){
        container.removeChild(existingBox);
    }else{
        const box = document.createElement('div');
        box.id='dynamic-box';
        box.textContent='Hello there sir/madam!';
        box.style.backgroundColor='lightblue';
        box.style.padding='1rem';
        box.style.marginTop='1rem';
        box.style.borderRadius='8px';
        container.appendChild(box);
    }
});