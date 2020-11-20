import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './services/conversionService.js';

function clearFields() {
  $('showErrors').text ("");
}
// class completeConversion  {
//   constructor(destCode, baseCode, fundsConverting) {
//     this.destCode = destCode
//     this.baseCode = baseCode
//     this.fundsConverting = fundsConverting
//     //this.conversion = (`conversion.conversion_rates.${this.destCode}`)
//     this.conversionFormula = this.fundsConverting * this.conversion;
//   }

// }

function showConversion (conversion) {
  if(conversion.conversion_rates) {
    let conversionRate = `${conversion.conversion_rates.destCode}`;
    $('.showConversion').append(`<p> Your conversion rate for  from is ${conversion.conversion_rates.EUR} and your funds are worth  `)
    console.log(conversionRate);
  } else {
    $('.showErrors').html(`<p> Your query returned an error: ${conversion}`)
  }

}

$(document).ready(function() {
  
  $('#convert').click(function() {
    let baseCode = "USD";
    // let destCode = "EUR";
    // let fundsConverting = 100;
    // let newConversion = new completeConversion(baseCode, destCode, fundsConverting)
    clearFields();
    (async function() {
      const conversion = await Conversion.getConversion(baseCode);
      showConversion(conversion);
      // console.log(newConversion);
      console.log(conversion);
    })();
  });
});