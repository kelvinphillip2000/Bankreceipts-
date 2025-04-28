function generateReceipt() {
  // Get values
  var senderName = document.getElementById('senderName').value;
  var senderAcc = document.getElementById('senderAcc').value;
  var receiverName = document.getElementById('receiverName').value;
  var receiverAcc = document.getElementById('receiverAcc').value;
  var bankName = document.getElementById('bankName').value;
  var amount = document.getElementById('amount').value;
  var memo = document.getElementById('memo').value;
  var status = document.getElementById('status').value;

  // Hide form, show receipt
  document.getElementById('form-page').style.display = 'none';
  document.getElementById('receipt-page').style.display = 'block';

  // Build receipt content
  var receiptHtml = `
    <div class="receipt">
      <h2>Bank Transfer Receipt</h2>
      <p><strong>Sender:</strong> ${senderName} (${senderAcc})</p>
      <p><strong>Receiver:</strong> ${receiverName} (${receiverAcc})</p>
      <p><strong>Bank:</strong> ${bankName}</p>
      <p><strong>Amount:</strong> $${amount}</p>
      <p><strong>Memo:</strong> ${memo}</p>
      <p><strong>Status:</strong> ${status}</p>
      <p><small>Generated on ${new Date().toLocaleString()}</small></p>
    </div>
  `;

  document.getElementById('receipt-content').innerHTML = receiptHtml;
}

function goBack() {
  document.getElementById('receipt-page').style.display = 'none';
  document.getElementById('form-page').style.display = 'block';
}
