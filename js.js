document.getElementById('convertBtn').addEventListener('click', function() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
  
    if (amount === "" || isNaN(amount)) {
      document.getElementById('result').textContent = "Please enter a valid amount.";
      return;
    }
  
    // Giving them their conversion values
    const exchangeRates = {
      USD: { YEN: 142.26, LPS: 24.10, USD: 1 },
      YEN: { USD: 0.0070, LPS: 0.17, YEN: 1 },
      LPS: { USD: 0.041, YEN: 5.72, LPS: 1 }
    };
  
    // making the convert number be gotten from the 2 values
    const rate = exchangeRates[fromCurrency][toCurrency];
  
    //t0 show asnwer at bottom
    if (rate) {
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById('result').textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
      document.getElementById('result').textContent = "Currency not supported.";
    }
  });
  