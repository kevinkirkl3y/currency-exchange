import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './services/conversionService.js';

function clearFields() {
  $('showErrors').text ("");
}

function showConversion (conversion) {
  
  console.log(conversion);
  if(conversion.conversion_rates) {
    $('.showConversion').html(`<p> Your conversion rate for  from is ${conversion.conversion_rates.EUR}`)
  } else {
    $('.showErrors').html(`<p> Your query returned an error: ${conversion}`)
  }

}

$(document).ready(function() {
  
  $('#convert').click(function() {
    let base = "USD";
    clearFields();
    (async function() {
      const conversionAPI = await Conversion.getConversion(base);
      showConversion(conversionAPI);
      console.log(conversionAPI);
    })();
  });
});