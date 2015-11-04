// ==UserScript==
// @name        Telderi.Watch
// @namespace   telderi.watch
// @include     http://www.telderi.ru/ru/watch
// @version     1
// @grant       none
// ==/UserScript==
$(function(){
  var exRURinUSD = 55; // http://bankir.ru/kurs/dollar-ssha-k-rossijskij-rubl
  $('div#all_auctions_watch table.table_list td:nth-last-child(2)').each(function(el){
    var td = $(this);
    var priceRUR = td.find('span').first().html()
    if (!priceRUR) return;
    priceRUR = priceRUR.replace(/\D/g,'');  
    var priceUSD = Math.ceil(priceRUR / exRURinUSD);
    td.children('span:last-child').first().html('<div style="color:green">'+priceUSD+' usd</div>');
  }); 
});