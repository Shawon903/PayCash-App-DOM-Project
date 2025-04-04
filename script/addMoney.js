// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const amount = document.getElementById('amount').value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById('pin').value;
//     const convertedPin = parseInt(pin);
//     const mainBalance = document.getElementById("main-balance").innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//     if(amount && pin){
//     if(convertedPin===1234){
//         const sum = convertedMainBalance + convertedAmount;
//         document.getElementById("main-balance").innerText=sum;
//         }
//         else{
//             alert('enter a valid pin');
//         }
//     }
//     else{
//         alert('enter amount')
//     }
// })

//  Module-28.2

// document.getElementById('cashout').style.display = 'none';
// document.getElementById('add-money-box').addEventListener('click', function(){
//     document.getElementById('addmoney').style.display = 'block';
//     document.getElementById('cashout').style.display = 'none';
// })
// document.getElementById('cashout-box').addEventListener('click', function(){
//     document.getElementById('addmoney').style.display = 'none';
//     document.getElementById('cashout').style.display = 'block';
// })

// // add money button
// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const accNumber = document.getElementById('acc-number').value;
//     const pinNumber = document.getElementById('pin').value;
//     const amount = document.getElementById('amount').value;
//     const convertedAmount = parseFloat(amount);
//     const convertedPin = parseInt(pinNumber);
//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//     if(accNumber.length === 11){
//         if(convertedPin === 1234){
//             const sum = convertedAmount + convertedMainBalance;
//             document.getElementById('main-balance').innerText= sum;
//         }
//     }
//     else{
//         alert('tik nai')
//     }
// })

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault;
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const account = document.getElementById("acc-number").value;
    const mainBalance = getInnerTextByID('main-balance');
    console.log(mainBalance);
    const selectedBank = document.getElementById('allbank').value;
    console.log(selectedBank);

    if(amount < 0){
        alert('you do not have sufficient balance');
        return;
    }

    if(account.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdandValue('main-balance', sum);

            const container = document.getElementById('transaction-container');
            // const p = document.createElement('p');
            // p.innerText = ` added ${amount} from this ${account} account.`;
            // console.log(p);
            // container.appendChild(p);
            const div = document.createElement('div');
            div.classList.add("bg-zinc-50")
            div.innerHTML = `
            <h1 class="text-red-300">Added Money from ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>Account Number: ${account}</p>
            `
            container.appendChild(div);
        }
        else{
            console.log('pin tik nai');
        }
    }
    else{
        console.log('account number tik nai')
    }
})
function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}
document.getElementById("logout-btn").addEventListener("click", function() {
    window.location.href = 'index.html'
});