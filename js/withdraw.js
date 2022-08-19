
//STEP-1
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //STEP-2
    const withdrawBtn = document.getElementById('withdraw-field');
    const withdrawString =  withdrawBtn.value;
    const newWithdrawTotal = parseFloat(withdrawString);

    //STEP-7
    withdrawBtn.value = '';

    if(isNaN(newWithdrawTotal)){
        alert('please provide a valid number');
        return;
    }
    
    //STEP-3
    const withDrawTotalElement =  document.getElementById('withdraw-total');
    const withDrawTotalString =  withDrawTotalElement.innerText;
    const prevWithDrawTotal = parseFloat(withDrawTotalString);
    
    //STEP-5
    const totalBalanceElement = document.getElementById('balance-total');
    const balanceWithdrawString =  totalBalanceElement.innerText;
    const totalBalanceAmount = parseFloat( balanceWithdrawString);

    if(newWithdrawTotal > totalBalanceAmount){
        alert('baap er bank e eto tk nai');
        return;
    }
    //STEP-4
    const totalWithdrawAmout =   prevWithDrawTotal + newWithdrawTotal;
    withDrawTotalElement.innerText = totalWithdrawAmout;
    
    //STEP-6
    const totalAmount =  totalBalanceAmount - newWithdrawTotal;
    totalBalanceElement.innerText =  totalAmount;
})