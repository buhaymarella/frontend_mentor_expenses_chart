fetch('data.json')
.then(response => {
    if (!response.ok){
        throw new Error ('Network response was not ok' + response.statusText);
    }
    return response.json();
})
.then( data => {
    data.forEach(item =>{
        const div = document.getElementById(item.day);
        const label = document.getElementById(`label-${item.day}`);
        const amount = document.getElementById(`amount-${item.day}`);
        let isToggle = false;
        if (div){
            div.style.height = `${item.amount * 2}px`;
            label.innerHTML = `${item.day}`;
            amount.innerText = `$${item.amount}`;
            div.addEventListener('mouseenter', () => {
                amount.style.display = 'block';
            })
            div.addEventListener('mouseleave', () => {
                amount.style.display = 'none';
            })
            div.addEventListener('click', () => {
                isToggle = !isToggle;
                if(isToggle){
                    amount.style.display = 'block';
                    div.style.backgroundColor = 'hsl(186, 34%, 60%)';
                }else{
                    amount.style.display = 'none';
                    div.style.backgroundColor = 'hsl(10, 79%, 65%)';
                }
            })
        }
    })
    
    console.log(data);

}).catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
})

