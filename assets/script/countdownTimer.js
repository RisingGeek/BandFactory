var fdate = new Date('September 18, 2018 00:00:00');
var expired = setInterval(timeLeft,1000);
function timeLeft() {
    var date = new Date();
    var diff = fdate - date;
    var days = Math.floor(diff/(1000*60*60*24));
    var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    var seconds = Math.floor((diff%(1000*60))/1000);

    var time = [days, hours, minutes, seconds];
    var arr = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'];

    var result = document.getElementById('result');
    result.innerHTML='';
    for(var i in time) {
        result.innerHTML += '<div class="col-sm-3">' +
                                '<div class="well">' +
                                    '<h1>'+time[i]+'</h1>' +
                                    '<span>'+arr[i]+'</span>' +
                                '</div>' +
                            '</div>';
    }
    if(diff<0) {
        clearInterval(expired);
        result.innerHTML = '';
        var coming = document.querySelector('.coming-soon');
        var h1 = coming.querySelector('h1');
        h1.innerHTML = 'EXPIRED';
    }
}