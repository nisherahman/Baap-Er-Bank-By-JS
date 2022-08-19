//step-1
document.getElementById('deposit-btn').addEventListener('click', function(){
    //step-2
    const depositBtn = document.getElementById('deposit-input');
    const newDepositAmountString = depositBtn.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   
    //step-3
    const depositElementTotal = document.getElementById('deposit-total');
    const prevDepositTotalString = depositElementTotal.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotalString);

    //step-4
    const currentDepositAmount = prevDepositTotal + newDepositAmount;
    depositElementTotal.innerText = currentDepositAmount;

    //step-5 get balance current total
    const balanceElementTotal = document.getElementById('balance-total');
    const prevBalanceTotalString =  balanceElementTotal.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    //step-6
    const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
    balanceElementTotal.innerText =  currentBalanceTotal;

    //step-7 deposite clear
    depositBtn.value = '';
})