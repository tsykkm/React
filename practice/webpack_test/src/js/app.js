import additionCalculator from './modules/addition-calculator'
import taxCalculator from './modules/tax-calculator'
import $ from 'jquery'

var item1Price = 900
var item2Price = 600
var totalPrice = additionCalculator(item1Price, item2Price)
var tax = 1.08
var priceIncludeTax = taxCalculator(totalPrice, tax)

console.log(priceIncludeTax)
$('body').html(priceIncludeTax)
