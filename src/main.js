import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './services/conversionService.js';

function clearFields() {
  $('showErrors').text ("");
}
// function completeConversion (){
//   this.destCode = destCode
//   this.baseCode = baseCode
//   this.fundsConverting = fundsConverting
//   console.log(conversion);
//   this.conversion = (`conversion.conversion_rates.${this.destCode}`)
//   this.conversionFormula = this.fundsConverting * this.conversion;
// }

function showConversion (conversion) {
  if(conversion.conversion_rates) {
    $('.showConversion').append(`<p> Your conversion rate for  from is ${conversion.conversion_rates.EUR} and your funds are worth `)
  } else {
    $('.showErrors').html(`<p> Your query returned an error: ${conversion}`)
  }

}

$(document).ready(function() {
  
  $('#convert').click(function() {
    let baseCode = "USD";
    let destCode = "EUR";
    let fundsConverting = 100;
    clearFields();
    (async function() {
      const conversion = await Conversion.getConversion(baseCode);
      showConversion(conversion, baseCode, destCode, fundsConverting);
      console.log(conversion);
    })();
  });
});