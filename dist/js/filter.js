$(function(){
  $('#all').click(function(){
    $('.item').hide();
    return false;
  });
  
  $('#cakes').click(function(){
    $('.item').show();
    $('.item').not('.cakes').hide();
    return false;
  });
  
  $('#cupcakes').click(function(){
    $('.item').show();
    $('.item').not('.cupcakes').hide();
    return false;
  });
  
  $('#cookies').click(function(){
    $('.item').show();
    $('.item').not('.cookies').hide();
    return false;
  });
});