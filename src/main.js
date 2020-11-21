import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './services/conversionService.js';

function clearFields() {
  $('.showErrors').text ("");
  $('.showConversion').text("")
}

function showConversion (conversion, destCode, baseCode, inputValue) {
  if(conversion.conversion_rates) {
    $('.showConversion').append(`<p> The conversion rate for ${baseCode} to  ${destCode} is ${conversion.conversion_rates[destCode]} and your funds are worth ${(inputValue * conversion.conversion_rates[destCode]).toFixed(2)} ${destCode} `)
  } else {
    $('.showErrors').html(`<p> Your query returned an error: ${conversion}`)
  }
}

$(document).ready(function() {
  
  $('#convert').click(function() {
    const baseCode = $('select#baseCode').val();
    const destCode =  $('select#destCode').val();
    const inputValue = $('input.inputValue').val();
    
    clearFields();
    (async function() {
      const conversion = await Conversion.getConversion(baseCode);
      showConversion(conversion, destCode, baseCode, inputValue);
    })();
  });
});