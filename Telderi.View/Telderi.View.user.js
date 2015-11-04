// ==UserScript==
// @name        Telderi.View
// @namespace   telderi.view
// @include     http://www.telderi.ru/ru/view*
// @version     1
// @grant       none
// ==/UserScript==
$(function() {
    var exRURinUSD = 55; // http://bankir.ru/kurs/dollar-ssha-k-rossijskij-rubl
    
    var priceRUR = $('#td_price_start').html();
    priceRUR = $('<div>'+priceRUR+'</div>');
    priceRUR.find('a').remove();
    priceRUR = priceRUR.text().replace(/\D/g,'');  
    var priceUSD = Math.ceil(priceRUR / exRURinUSD);
    $('#td_price_start').parent().find('td:last-child').append(' ~ '+priceUSD+' usd');

    priceRUR = $('#td_price_optimal').html();
    priceRUR = $('<div>'+priceRUR+'</div>');
    priceRUR.find('a').remove();
    priceRUR = priceRUR.text().replace(/\D/g,'');  
    priceUSD = Math.ceil(priceRUR / exRURinUSD);
    $('#td_price_optimal').parent().find('td:last-child').append(' ~ '+priceUSD+' usd');    
    
    $('div.text div.item div.title-part').each(function(){

      if ($(this).text().indexOf('Среднемесячный доход')<0) return;
      var priceSpan = $(this).siblings('.data-part').find('span').first();
      var priceRUR = $(priceSpan).html();
      priceRUR = priceRUR.replace(/\D/g,'');  
      
      var priceUSD = Math.ceil(priceRUR / exRURinUSD);      
      $(priceSpan).append(' / '+priceUSD + ' usd');
    });
});