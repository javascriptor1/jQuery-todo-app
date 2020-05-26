$('ul').on('click','li',function(){
  $(this).toggleClass('completed')
})
$('ul').on('click','span',function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    })
    e.stopPropagation()
})

$('input[type="text"]').keypress(function(e){
    if (e.which === 13){
       let todoText = $(this).val()
       $('ul').append("<li>" + "<span class=\"delete\">&#8998;</span>" + todoText + "</li>")
       $(this).val(' ')
    }
})

$('#plus').click(function(){
    $('input').fadeToggle()
})

