/*
Template Name: Penyler
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
File: Mobile Menu JS

Thanks to:
"Convert a Menu to a Dropdown for Small Screens" from Chris Collier - http://css-tricks.com/convert-menu-to-dropdown/
"Submenu's with a dash" Daryn St. Pierre - http://jsfiddle.net/bloqhead/Kq43X/
*/

$('<div class="menu-icon"><i class="fa fa-bars"></i></div><ul class="clear menu-dropdown"></ul>').appendTo("#mainav");

$("#mainav a").each(function(){
  var e=$(this);
  var isActive = e.parent().hasClass("active");
  // Creare un elemento li e aggiungerlo a menuDropdown
  var listItem = $("<li class='menu-dropdown-list p-2'></li>");
  // Aggiungere la classe "active" se necessario
  if (isActive) {
     listItem.addClass("active");
  }
  listItem.append("<a href='" + e.attr("href") + "'>" + e.text() + "</a>").appendTo("#mainav .menu-dropdown");
});

// Nascondi la select inizialmente
$("#mainav .menu-dropdown").hide();

// Aggiungi l'evento di click all'icona del menu
$(".menu-icon").click(function() {
   // Mostra o nascondi la select quando l'icona del menu viene cliccata
   $("#mainav .menu-dropdown").toggle();
});

// Aggiungi l'evento di cambio alla select nel menu
$(".menu-dropdown li a").click(function() {
  window.location = $(this).attr("href");
  // Nascondi il menu dopo aver cliccato su un elemento
  $(".menu-dropdown").hide();
});
