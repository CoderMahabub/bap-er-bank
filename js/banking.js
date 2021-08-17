//Handle Deposit BTN Event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDespositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDespositAmount);
    depositTotal.innerText = newDepositTotal;


    //Update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalance = previousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalance;

    //Clear the input Field
    depositInput.value = '';

});

//Handle Withdraw BTN Event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withDrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withDrawInput.value);
    // console.log(newWithdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotal.innerText = currentWithdrawTotal;

    //Update Account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalance;

    //Clear Input Field
    withDrawInput.value = '';
});