var urlData = 'https://zh.wikipedia.org/w/api.php?action=query&prop=revisions&prop=content&format=json&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=';



var search = function(urlData){
  $.ajax({
url:urlData,
method:'post',
dataType:"json",
success:function(response){
 var x=[];
  for (var pageid in response.query.pages) {
    
    x.push(pageid);
  }
  $(x).each(function(index,elm){
    var page = response.query.pages[x[index]];
    var title = page.title;
    var extract = page.extract;
    
   var href="http://zh.wikipedia.org/wiki/"+encodeURIComponent(title);
    var list =   $('.resultList ol li').eq(index);
  list.find('a').text(title).attr('href', href);
  list.find('p').html(extract);
  });
  }
});
}


$('#keyword').keyup(function(event){
  if (event.keyCode==13){
 $('li').animate({"background-color": "white"},400);
    var keyword =  urlData + $('#keyword').val();
     search(keyword);
    
     
    }
  
 
});