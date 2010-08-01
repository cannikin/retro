var Retro = {
MAX_ROTATION:3,VOTE_SYMBOL:'&#10003;',addTo:null,
rotate:function(obj) {
var rand = Math.round((Math.random() * (this.MAX_ROTATION*2) - 3) * 10) / 10;
$(obj).css({'-moz-transform':'rotate('+rand+'deg)', '-webkit-transform':'rotate('+rand+'deg)'});},
add:function(obj) {
this.addTo = obj;
$('#intro').hide();
$('#new').find('textarea').addClass('default').attr('value',this.addTo.find('h2').text()+'...').end().show();},
cancel:function() {
$('#new').hide();
this.addTo = null;},
save:function() {
this.addTo.find('ul').append("<li title=\"Click to vote\">"+$('#new textarea').attr('value')+"<span class=\"votes\"></span></li>");
this.rotate(this.addTo.find('li').last().click(function() { Retro.vote(this) }));
this.cancel();},
vote:function(obj) {
$(obj).find('.votes').html($(obj).find('.votes').html() + this.VOTE_SYMBOL);}
};
$(document).ready(function() {
$('#reset').click(function() {if (confirm('Are you sure?')) {location.reload();}return false;});
$('#export').click(function() {$("link").attr("href", $(this).attr('rel'));$("section li").css({'-moz-transform':'none','-webkit-transform':'none'});});
$('section li').each(function() {Retro.rotate(this);});
$('section li').click(function() {Retro.vote(this);return false;});
$('header a').click(function() {Retro.add($(this).parent().parent());return false;});
$('#new').find('a').click(function() {Retro.cancel();return false;}).end().find('textarea').focus(function() {$(this).removeClass('default').attr('value','');}).end().submit(function() {Retro.save();return false;});
$(window).bind('resize',function() {$('#new,#intro').each(function() {$(this).css({'left':($(window).width() / 2) - ($(this).width() / 2)+'px','top':($(window).height() / 2) - ($(this).height() / 2)+'px'});});});
$(window).resize();
$('#intro').find('#go').click(function() {$(this).parent().hide();return false;}).end().show();
var today = new Date();var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
$('#timestamp').text(days[today.getDay()]+', '+today.getDate()+' '+months[today.getMonth()]+' '+today.getFullYear());
});
