
function randomTxId() {
  let s = '';
  for (let i = 0; i < 16; i++) {
    s += Math.floor(Math.random() * 16).toString(16);
  }
  return 'TX' + s.toUpperCase();
}

function generateReceipt() {
  const senderName = document.getElementById('senderName').value.trim();
  const senderAcc  = document.getElementById('senderAcc').value.trim();
  const receiverName = document.getElementById('receiverName').value.trim();
  const receiverAcc  = document.getElementById('receiverAcc').value.trim();
  const bankName = document.getElementById('bankName').value;
  const amount   = document.getElementById('amount').value;
  const memo     = document.getElementById('memo').value.trim();
  const status   = document.getElementById('status').value;

  const logos = {
    sent:    '<i class="fa-solid fa-circle-check" style="color:green;"></i>',
    pending: '<i class="fa-solid fa-hourglass-half" style="color:orange;"></i>',
    failed:  '<i class="fa-solid fa-circle-xmark" style="color:red;"></i>'
  };

  const texts = {
    sent: 'Payment Successful',
    pending: 'Payment Pending',
    failed: 'Payment Failed'
  };

  const receiptHtml = \`
    <div class="receipt-box">
      <div class="status-icon">\${logos[status]}</div>
      <h3>\${texts[status]}</h3>
      <div class="receipt-item"><strong>Bank:</strong> \${bankName}</div>
      <div class="receipt-item"><strong>Transaction ID:</strong> \${randomTxId()}</div>
      <div class="receipt-item"><strong>Date:</strong> \${new Date().toLocaleString()}</div>
      <hr>
      <div class="receipt-item"><strong>Sender:</strong> \${senderName} (\${senderAcc})</div>
      <div class="receipt-item"><strong>Receiver:</strong> \${receiverName} (\${receiverAcc})</div>
      <div class="receipt-item"><strong>Amount:</strong> $\${parseFloat(amount).toFixed(2)}</div>
      <div class="receipt-item"><strong>Memo:</strong> \${memo}</div>
    </div>
  \`;

  document.getElementById('form-page').style.display = 'none';
  document.getElementById('receipt-page').style.display = 'block';
  document.getElementById('receipt-content').innerHTML = receiptHtml;
}

function goBack() {
  document.getElementById('form-page').style.display = 'block';
  document.getElementById('receipt-page').style.display = 'none';
}
