// ==UserScript==
// @name        Telderi List
// @namespace   telderi.list
// @include     http://www.telderi.ru/ru/search*
// @version     1
// @grant       none
// ==/UserScript==
$(function() {
  var exRURinUSD = 55; // http://bankir.ru/kurs/dollar-ssha-k-rossijskij-rubl
  setTimeout(function () {
    $('table#sites_list>tbody>tr>td:last-child').each(function(el){
      var td = $(this);
      var priceRUR = td.find('span').first().html()
      if (!priceRUR) return;
      priceRUR = priceRUR.replace(/\D/g,'');  
      var priceUSD = Math.ceil(priceRUR / exRURinUSD);
      if (td.children('span').length<2) td.append('<br /><span class="small"></span>');
      
      td.children('span.green').removeClass('green');
      td.children('span:last-child').first().html('<div style="color:green">'+priceUSD+' usd</div>');
    }); 
  }, 3000);
});


