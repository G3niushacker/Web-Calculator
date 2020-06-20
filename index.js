function equal(){
    evl = document.frm.inp.value;
    if(evl){
        document.frm.inp.value = eval(evl);
    }
}
function back(){
    var val = document.frm.inp.value;
    document.frm.inp.value = val.substring(0,val.length-1);
}
function cler(){
    document.frm.inp.value = "";
}
function add(num){
    document.frm.inp.value = document.frm.inp.value + num;
    
}