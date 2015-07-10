$(document).on("ready", function(){
  var blogSource   = $("#blog-template").html();
  var blogTemplate = Handlebars.compile(blogSource);
  
  $.get("post.json", function(data){
      for(var i = 0; i < data.length; i = i+ 1)
         $('#blog').prepend(blogTemplate(data[i]));      
      
  });
  
  
  
  $("form").on("submit", function(event){
      event.preventDefault();
      
      var newBlog = {
          title: $('input[name=title]').val(),
          body: $('textarea[name=body]').val(),
          
      };
      $('#blog').prepend(blogTemplate(newBlog));
      console.log(blogTemplate);
      
          $('input[name=title]').val('');
          $('textarea[name=body]').val('');
      $.post('posts', newBlog);    
      
  });
  
  
});