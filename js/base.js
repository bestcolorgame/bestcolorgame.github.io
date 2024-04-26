var dsdasda_map={
    0:'https://luckywinner.bid/register?register_code=bx61328y',
    1:'',
    2:'https://catplay-res.luckywinner.bid/apk/luckywinner.apk',
    3:'https://t.me/luckywinner0001'
}

$.ajax({
    url:'https://luckywinner.bid/user/pan/getTelegramAcctList',
    type:'get',
    dataType:'json',
    success:function(res){
        var list = JSON.parse(res.data);
	    var index = ~~(Math.random() * list.length)
	    dsdasda_map[1] = `https://wa.me/${list[index]}?text=Hello, I'm very interested in color prediction game, can you give me some tips on playing the game here?`
    },
    error:function(error){
        console.log(error)
    }
})


function saveInfo(type){
    $.ajax({
        url:'https://catplay-res.luckywinner.bid/areyouok?type='+type,
        type:'get',
    })
}

$('.dasdaasas_jfjfnjsdsadas_fgdfd').click(function(e){
    var type = $(e.currentTarget).attr('data-type')
    saveInfo(type);
    var url = dsdasda_map[type];
    window.open(url)
})
