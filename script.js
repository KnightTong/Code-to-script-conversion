function tojs() {
    $("#result").val("var sb=\'" + $("#content").val().replace(/\\/g, "\\").replace(/\\/g, "\\/").replace(/\'/g, "\"").replace(/\"/g, "\"").split('\n').join("\';\nsb+=\'") + "\';");
}

function tohtml() {
    document.getElementById('result').value = $("#content").val().replace(/var sb=\"/g, "").replace(/sb\+\=\"/g, "").replace(/"\;/g, "").replace(/\\\"/g, "\"").replace(/\\\'/g, "\'").replace(/\\\//g, "\/").replace(/\\\\/g, "\\")
}
function Empty() {
     //$("#content").val(""); 
     $("#result").val(""); 
     $("#content").select() 
    }
function htmltoarray() {
    var contentstr = $("#content").val();
    $("#result").val("[\'" + contentstr.replace(/\\/g, "\\").replace(/\\/g, "\\/").replace(/\'/g, "\"").replace(/\"/g, "\"").split('\n').join("\',\'") + "\']");
}
function tomc() {
    var a="";
    var content=$("#content").val();
    var content_params=$("#content_params").val();
    var str = content_params.replace(/\[|\]/g,"").replace(/[\r\n]/g, "");
    console.log(str);
    var s=str.split(',')
    for(var i = 0;i<s.length;i++){
        a +=content.replace(/xparams/g,s[i]);
        a +="\n";
    //SS.insertAdjacentHTML("afterEnd",s[i]+'<INPUT type=radio name="radio"><br>');
    }

    $("#result").val(a);
}