beforeEach(function(){
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
});

it('Sum total tip amount of all payments on sumPaymentTotal()', function(){
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

});

it('Sum tip percent of single tip', function(){
    expect(calculateTipPercent(100,20)).toEqual(20);
})

it('make new td and append it',function(){
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
});

it('make delete td and append it to tr', function(){
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
});

afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
});
