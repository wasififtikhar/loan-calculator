const compute = document.querySelector('.buton')

function computeLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(2); //calculate monthly payment
    
    //regedit to add a comma after every three digits
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row
    if(interest_rate > 100) {
        document.querySelector('#payment').textContent = "Rate can't be exceed than 100"
        if ((document.querySelector('#payment').textContent = "Rate can't be exceed than 100")) {
            trans = setTimeout(() => {
                document.querySelector('#payment').classList.remove("trans");
                document.querySelector('#payment').textContent = "";
                document.querySelector('#payment').classList.add("bg-info");
                document.querySelector('#payment').classList.add("text-info");
            }, 6000);
          }
    } else if (amount > 5000000) {
        document.querySelector('#payment').textContent = "The amount is not exceed than 5000000"
        if ((document.querySelector('#payment').textContent = "The amount is not exceed than 5000000")) {
            trans = setTimeout(() => {
                document.querySelector('#payment').classList.remove("trans");
                document.querySelector('#payment').textContent = "";
                document.querySelector('#payment').classList.add("bg-info");
                document.querySelector('#payment').classList.add("text-info");
            }, 6000);
          }
    } else if (months > 300) {
        document.querySelector('#payment').textContent = "There is no calculation for more than 300 months"
        if ((document.querySelector('#payment').textContent = "There is no calculation for more than 300 months")) {
            trans = setTimeout(() => {
                document.querySelector('#payment').classList.remove("trans");
                document.querySelector('#payment').textContent = "";
                document.querySelector('#payment').classList.add("bg-info");
                document.querySelector('#payment').classList.add("text-info");
            }, 6000);
          }
    } else {
        document.querySelector('#payment').textContent = `Monthly Payment = ${payment}` 
    }
    
}
compute.addEventListener('click', () => {
    payment.classList.remove("bg-info");
    payment.classList.remove("text-info");
    payment.classList.add("trans");
    computeLoan();
})