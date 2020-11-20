import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './services/conversionService.js';

function clearFields() {
  $('showErrors').text ("");
}

function showConversion (conversion, destCode, baseCode, inputValue) {
  if(conversion.conversion_rates) {
    $('.showConversion').append(`<p> Your conversion rate for ${destCode} from  ${baseCode} is ${conversion.conversion_rates[destCode]} and your funds are worth ${inputValue * conversion.conversion_rates[destCode]} `)
  } else {
    $('.showErrors').html(`<p> Your query returned an error: ${conversion}`)
  }
}

$(document).ready(function() {
  
  $('#convert').click(function() {
    const baseCode = "USD";
    const destCode = "AED"
    const inputValue = 100;
    
    clearFields();
    (async function() {
      const conversion = await Conversion.getConversion(baseCode);
      showConversion(conversion, destCode, baseCode, inputValue);
     
      console.log(conversion);
    })();
  });
});