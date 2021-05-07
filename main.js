function handleSingleTicket(id, isTrue) {
    const singlePrice = getPrice(id);
    let quantity = getQty(id);
    if (isTrue ) {
      quantity++;
      updateQty(id, quantity);
    } 
    if(isTrue == false  && quantity > 0) {
      quantity--;
      updateQty(id, quantity);
    }
    updateProductPrice(id, quantity);
    updateSubTotal();
    updateTotal();
  }
  
  function updateSubTotal() {
    const firstClass = document.getElementById(`first_ticket-price`).innerText;
    const economyClass = document.getElementById("economy_ticket-price").innerText;
    const subtotal = parseInt(firstClass) + parseInt(economyClass);
  
    document.getElementById("subtotal").innerText = subtotal;
  }
  
  function updateTotal() {
    const subtotal = document.getElementById("subtotal").innerText;
  
    const vat = parseInt(subtotal) * 0.1;
    document.getElementById("vat").innerText = vat.toFixed(2);
  
    const total = parseInt(subtotal) + vat;
    document.getElementById("total").innerText = total;
  }
  
  function updateProductPrice(id, qty) {
    let productTotal;
    if(id === 'first_ticket'){
        productTotal = 150 * qty;
    } 
    if (id === 'economy_ticket' ){
        productTotal = 100 * qty;
    }
    document.getElementById(`${id}-price`).innerText = productTotal;
  }
  
  function getPrice(id) {
    const price = document.getElementById(`${id}-price`).innerText;
    return price;
  }
  
  
  function getQty(id) {
    const qty = document.getElementById(`${id}-qty`).value;
    return qty;
  }
  
  function updateQty(id, value) {
    document.getElementById(`${id}-qty`).value = value;
  }


  