$(function(){
    var d = $('#divy');
    divy.forEach(function(obj,idx){
        d.append('<h4>'+obj.name+'</h4><p>Datum: '+obj.date+'</p><p>Civilizace: '+obj.civilization+'</p><p>Zachované: '+obj.preserved+'</p><p>Zánik: '
        +obj.death+'</p><p>'+obj.text+'</p>');
    });

    $('#divy h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#f0ad4b'});
        } else {
            $(this).css({'background-color':'#484848'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

    /* Vykreslení obrázků */
    var galerieS = $('#galerie-stare div.row');
    divy.forEach(function(obj,idx){
        galerieS.append('<div class="col-sm-3"><figure><img src="img/stare/'+obj.photo+'"alt="'+obj.name+'" class="img-fluid"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
    });


    var n = $('#nove-divy');
    nove.forEach(function(obj,idx){
        n.append('<h4>'+obj.name+'</h4><p>Datum: '+obj.date+'</p><p>Civilizace: '+obj.civilization+'</p><p>Stát: '+obj.state+'</p><p>'+obj.text+'</p>');
    });

    $('#nove-divy h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#f0ad4b'});
        } else {
            $(this).css({'background-color':'#484848'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

    /* Vykreslení obrázků */
    var galerieN = $('#galerie-nove div.row');
    nove.forEach(function(obj,idx){
        galerieN.append('<div class="col-sm-3"><figure><img src="img/nove/'+obj.photo+'"alt="'+obj.name+'" class="img-fluid"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
    });
})


var i = 0;
    window.setInterval(function(){
        $('#zajimavosti div.row img').attr('src','img/'+zajimavosti[i].photo);
        $('#zajimavosti div.row p').text(zajimavosti[i].text);
        i<zajimavosti.length-1 ? i++ : i=0; 
    }, 10000);



var modalStare = $('#odkazyS ul');
divy.forEach(function(obj,idx){
    modalStare.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
});

var modalNove = $('#odkazyN ul');
nove.forEach(function(obj,idx){
    modalNove.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
});
