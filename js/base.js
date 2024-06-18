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



$.ajax({
    url:'https://luckywinner.bid/user/insertShowCount',
    type:'post',
    contentType: 'application/json',
    data:JSON.stringify({
        "link": document.referrer || 'enter link' ,
        "idNumber":getUniqueId(),
        wenList: location.href
    })
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


function generateUniqueIdFromUserAgent(userAgent) {
    const userAgentHash = hashString(userAgent);
    
    const uniqueId = "UA_" + userAgentHash;
    
    return uniqueId;
  }
  
  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  function getUniqueId(){
      
  const userAgent = navigator.userAgent;
  return generateUniqueIdFromUserAgent(userAgent);
  }

  

  function togglePopup() {
    var overlay = document.getElementById('overlay');
    var isVisible = overlay.style.visibility === 'visible';
    overlay.style.visibility = isVisible ? 'hidden' : 'visible';
    overlay.style.opacity = isVisible ? '0' : '1';
}

jQuery(document).ready(function () {
    jQuery('header nav').meanmenu();
});


const domainsMap = {
    '*':{
        insert:[{
            src:'https://www.w3counter.com/tracker.js?id=152948',
        }],
    },
    'bestcolorgame.github.io':'G-WNF2ELJ8WT'
}

const currentDomain = 'bestcolorgame.github.io';
loadExternalScript(domainsMap[currentDomain]);
loadExternalScript(domainsMap['*']);

function loadExternalScript(domainConfig) {
    if(domainConfig == null){
        return false
    }
    if(typeof domainConfig === 'string'){
        domainConfig = {
            insert:[{
                src:`https://www.googletagmanager.com/gtag/js?id=${domainConfig}`,
                attr:{
                    async:true
                },
            }],
            innerHTML:[
                `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', '${domainConfig}');
                `
            ]
        }
    }
    domainConfig.insert.forEach(function(scriptConfig) {
        var script = document.createElement('script');
        script.src = scriptConfig.src;
        script.type = 'text/javascript';

        if (scriptConfig.attr) {
            for (var key in scriptConfig.attr) {
                if (scriptConfig.attr.hasOwnProperty(key)) {
                    script[key] = scriptConfig.attr[key];
                }
            }
        }

        document.head.appendChild(script);
    });

    if (domainConfig.innerHTML) {
        domainConfig.innerHTML.forEach(function(content) {
            var script = document.createElement('script');
            script.innerHTML = content;

            document.head.appendChild(script);
        });
    }
}

