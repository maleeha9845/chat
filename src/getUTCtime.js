function getUTCtime(givenTime){
    var today = ''
    if(givenTime){
        today = new Date(givenTime)
    }else{
      today = new Date();
    }
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    try{
        var dateTime = {y: today.getFullYear(), m: today.getMonth()+1, d: today.getDate(), h: today.getHours(), mi: today.getMinutes(), s: today.getSeconds()};
        return dateTime;
    } catch {
        return null
    }

}

exports.getUTCtime = getUTCtime;
