/* 1. 
 */
function calculateProdTotal(price, quantity) {
    total = price * quantity;
    return (total);

}

/* 2.
 */
function calculateSubtotal(prodTotals) {
    subtotal = subtotalBananas + subtotalApples + subtotalOranges;
    return (subtotal);
}

/* 3.
 */
function calculateTaxes(grossTotal, taxRate) {
    taxes = TAX_RATE * subtotal;
    return (taxes);
}

/* 4.
 */
function calculateTotal(grossTotal, addedShipping, addedTax) {
    total = subtotal + shipping + taxes;
    return (total); // replace this!
}

/* 5. We want to inform the users when certain items run out of stock
      Complete the function below to update the label for product availability
      as users add items to their shopping cart.
      Input: product is either "banana", "apple", or "orange"
      Input: selected is the amount selected on the shopping cart
      Input: availability is the total amount in stock available
      Output: none

      This assignment is a little flexible. Given the combination of number
      of items selected and the product availability, you can choose what 
      message you would like to tell the users and under what conditions. 
      We suggest you tell the users when there is limited supply and when
      the item is out of stock.
      
      NOTE: To update the label you need to call the following function:
                updateProdAvailabilityLabel(product, label, availability)
            Input: product - pass along the same product argument
            Input: label - any string you would like as a message
            Input: availability - one of the following options: 
                    OUT_OF_STOCK, LIMITED_SUPPLY, AVAILABLE
            the label will change font color based on selection (green, yellow, red)

*/
function updateProdAvailability(product, selected, availability) {
    if (selected <= (.5 * availability)) {
        updateProdAvailabilityLabel(product, "Limited Supply", LIMITED_SUPPLY)
    } else if (availability >= selected) {
        updateProdAvailabilityLabel(product, "In-Stock", AVAILABLE)
    } else if (availability < selected) {
        updateProdAvailabilityLabel(product, "Out of Stock", OUT_OF_STOCK)
    }
}