import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './services/conversionService.js';

function clearFields() {
  $('showErrors').text ("");
}

function showConversion (conversion) {
  if(conversion.conversion_rates) {

    let destCode = "EUR";
    $('.showConversion').append(`<p> Your conversion rate for  from is ${conversion.conversion_rates[destCode]} and your funds are worth  `)
    // console.log(conversionRate);
  } else {
    $('.showErrors').html(`<p> Your query returned an error: ${conversion}`)
  }

}

$(document).ready(function() {
  
  $('#convert').click(function() {
    const baseCode = "USD";
    
    clearFields();
    (async function() {
      const conversion = await Conversion.getConversion(baseCode);
      showConversion(conversion);
     
      console.log(conversion);
    })();
  });
});