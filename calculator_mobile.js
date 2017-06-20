var insert_flag="yes"; var PI=3.14159265358979323846;
var SQRPI=1.77245385090551602730;
var RR=0.577215664901532860605129;
var LN2=0.69314718055994530942;
var LN3=1.09861228866810969140;
var LN10=2.30258509299404568402;
var E1=2.7182818284590452353602874;
var DEG=0.01745329251994329577; var RAD=57.29577951308232087680; var e=E1;
//var max_st=[[biΝd]];
var π = 3.1415926535897932384623846;
var ln10 = 2.30258509299404568401799145468;
var ln2 = 0.693147180559945309417232121458 ;
var M =0.434294481903251827651128918917; function Math_c(){ this.isTrue = true ;}
Math_c.prototype.round = function(nub){ var nub_a=nub;
var nub_m= m_nub_m(nub_a); var nub_p= m_abs(m_nub_p(nub_a)); var ans_1=0;
if( nub_m >0 && nub_p >=0.5){ ans_1=nub_m+1; }
if( nub_m >0 && nub_p < 0.5){ ans_1=nub_m ; }
if( nub_m <0 && nub_p >=0.5){ ans_1=nub_m-1; }
if( nub_m <0 && nub_p < 0.5){ ans_1=nub_m; }

return ans_1; 
}
var mc = new Math_c(); 
var display_width = 35; function doGetCaretPosition (ctrl) {

var CaretPos = 0;
if (document.selection) {

ctrl.focus ();
var Sel = document.selection.createRange ();

Sel.moveStart ('character', -ctrl.value.length);

CaretPos = Sel.text.length;
}
else if (ctrl.selectionStart || ctrl.selectionStart == '0')
CaretPos = ctrl.selectionStart;

return (CaretPos);

}
function setCaretPosition(ctrl, pos)
{

if(ctrl.setSelectionRange)
{
ctrl.focus();
ctrl.setSelectionRange(pos,pos);
}
else if (ctrl.createTextRange) {
var range = ctrl.createTextRange();
range.collapse(true);
range.moveEnd('character', pos);
range.moveStart('character', pos);
range.select();
}
}
function string_lg(it){ var this_it = it ; 
var str_lg = this_it.length;
return (str_lg);
}
function string_lg_1(){ var str_lg = string_lg(calc.input.value);
return (str_lg);
}
function cursor_position() {
var nub = doGetCaretPosition(document.getElementById('input'));

return (nub);
}
function cursor_position_set(n) {
var string_s = document.getElementById('input');
var nub_set = setCaretPosition(string_s , n) ;
}

function cursor_left_1() {
s_chang_visible_all(); 
var no = cursor_position();


var lg = string_lg_1();
var input_str = calc.input.value.trim();

var new_str = input_str.substr(0,no) + input_str.substr(no,lg-1);
document.getElementById('input').value = new_str;
cursor_position_set(no-1) ; 
if(no==0){cursor_position_set(0); } 
}
function cursor_right_1() {
s_chang_visible_all(); 
var no = cursor_position();
var lg = string_lg_1();

if(no <= lg){
setCaretPosition(document.getElementById('input'),no+1);
}
}
function cursor_up_1(){ s_chang_visible_all(); var arry = m_count_newline();
var arry_lg =arry.length;
var arry_ref=[]; arry_ref.push(0);
for(i=0; i<arry_lg ;i++){

arry_ref.push(arry[i]+1);

}
var no = cursor_position();
var arry_ref_lg=arry_ref.length; 
var arry_small=[];
for(i=0; i<arry_ref_lg ;i++){
if(arry_ref[i] <= no){ arry_small.push(arry_ref[i]);
}
} 
arry_small_lg = arry_small.length;
var arry_small_2=[]; arry_small_2=arry_small.reverse(); var test_lg = arry_small_2.length;

if(test_lg >=2){

var ref_down = arry_small_2[0]; var ref_up = arry_small_2[1]; 
if(((ref_down-ref_up)>(no-ref_down))&&((no-ref_down)< display_width)) { var new_no = ref_up+no-ref_down;}
if(((ref_down-ref_up)<=(no-ref_down))&&((no-ref_down)< display_width)){ var new_no = ref_down-1;}
if((no-ref_down) > display_width){ var new_no = no-display_width;}

} 
if((test_lg ==1)&&(no > display_width)){ var new_no = no-display_width;}
if((test_lg ==1)&&(no <= display_width)){ var new_no = no;} 


setCaretPosition(document.getElementById('input'),new_no);
scroll_cursor();
}
function cursor_down_1(){ s_chang_visible_all(); var arry = m_count_newline();
var arry_lg =arry.length;
var no = cursor_position();
var lg = string_lg_1();
if(lg <= no) { no = lg;} var arry_small=[];

for(i=0; i<arry_lg ;i++){
if(arry[i] <=no){ arry_small.push(arry[i]);
}
} 
var arry_small_lg = arry_small.length; 

var arry_lager=[];
for(i=0; i< arry_lg ;i++){
if(arry[i] > no){ arry_lager.push(arry[i]);
}
} 

var arry_lager_lg = arry_lager.length;
if(arry_small_lg >=1){
var ref_1 = arry_small[arry_small_lg -1 ];} else{ var ref_1=0;}

if(arry_lager_lg >=1){ var ref_2 = arry_lager[0];}
else{ var ref_2=0;}

if(arry_small_lg >=0 && arry_lager_lg >=1){
var trans_1=(no-ref_1) % display_width;
if((ref_2-no) >= display_width){ 
var new_no = no + display_width;
}
else{ var new_no = ref_2+trans_1;}
}
if(arry_small_lg ==0 && arry_lager_lg >=1){
var trans_1=(no-ref_1) % display_width;
if((ref_2-no) >= display_width){ 
var new_no = no + display_width;
}
else{ var new_no = ref_2+trans_1+1;} }

if(arry_small_lg >= 1 && arry_lager_lg ==0){
var trans_1=(no-ref_1) % display_width;
if((lg-no) >= display_width){ 
var new_no = no + display_width;}

else{ var new_no = no ;}
}
if(arry_small_lg == 0 && arry_lager_lg ==0){

if((lg-no) >= display_width){ 
var new_no = no + display_width;}

else{ var new_no = no ;}
}


setCaretPosition(document.getElementById('input'),new_no);
scroll_cursor();

}
function cursor_position_row(){ var arry = m_count_newline();
var arry_lg =arry.length;
var no = cursor_position();
var lg = string_lg_1(); if(lg <= no) { no = lg;} var row_nub=0;
for(i=0; i< arry_lg ;i++){
var nub_1=arry[i];

if(i==0 && nub_1<no ){
var nub_1=arry[i];
var row_nub = row_nub+ m_abs(m_nub_m((nub_1-0)/display_width))+2; }
if(i > 0 && nub_1 < no ){
var nub_1=arry[i];
var nub_2=arry[i+1];
var row_nub = row_nub + m_abs(m_nub_m((nub_2-nub_1)/display_width))+1; }

}
arry =[];
return row_nub; 
}
function cursor_re_start(nub){ var nub_a=nub;
var arry = m_count_semicolon();
var arry_lg =arry.length;
var no = cursor_position();
var input_str_a = calc.input.value; var lg = string_lg_1();
if(lg <= no) { no = lg;} var arry_small=[];

for(i=0; i<arry_lg ;i++){
if(arry[i] <=no){ arry_small.push(arry[i]);
}
} 
var arry_small_lg = arry_small.length; 

var arry_lager=[];
for(i=0; i< arry_lg ;i++){
if(arry[i] > no){ arry_lager.push(arry[i]);
}
} 

var arry_lager_lg = arry_lager.length;
input_str_1="";
input_str_2="";
input_str_3="";

if(arry_small_lg >0 && arry_lager_lg >0){
var input_str_1 = input_str_a.substr(0 ,arry_small[arry_small_lg-1]+1); var input_str_2 = input_str_a.substring(arry_small[arry_small_lg-1]+1,arry_lager[0]+1); var input_str_3 = input_str_a.substr(arry_lager[0]+1,lg-arry_lager[0]); }
if(arry_small_lg ==0 && arry_lager_lg>0){

var input_str_1 = ""; var input_str_2 = input_str_a.substring(0 ,arry_lager[0]+1); var input_str_3 = input_str_a.substr(arry_lager[0]+1 ,lg-arry_lager[0]); }

if(arry_small_lg >0 && arry_lager_lg==0){

var input_str_1 = input_str_a.substring(0 ,lg); var input_str_2 = ""; var input_str_3 = ""; }


if(nub_a==1){ return input_str_1; }
if(nub_a==2){ return input_str_2; }
if(nub_a==3){ return input_str_3; } 

}
function cursor_coords(event){ var x=event.clientX;
var y=event.clientY;
var ys=event.screenY;
s_chang_visible_all(); return data_a;
}
var repeat_bs;
var repeat_del;
var repeat_sp;
var repeat_left;
var repeat_right;
var repeat_up;
var repeat_down;
function m_repeat_fu(nub){ 
var nub_a=nub;
if(nub_a==0){
repeat_bs = setInterval("backspace()" , 1); } 
if(nub_a==1){
repeat_del = setInterval("delete_a()" , 100); } if(nub_a==2){
repeat_sp = setInterval("space_1()" , 100); } if(nub_a==3){
repeat_left = setInterval("cursor_left_1()" , 100); } if(nub_a==4){
repeat_right = setInterval("cursor_right_1()" , 100); } if(nub_a==5){
repeat_up = setInterval("cursor_up_1()" , 100); } if(nub_a==6){
repeat_down = setInterval("cursor_down_1()" , 100); } 

}
function m_stop_repeat_fu(nub){
var nub_a=nub;
if(nub_a==0){
clearInterval(repeat_bs); } if(nub_a==1){
clearInterval(repeat_del); } if(nub_a==2){
clearInterval(repeat_sp); } if(nub_a==3){
clearInterval(repeat_left); } if(nub_a==4){
clearInterval(repeat_right); } if(nub_a==5){
clearInterval(repeat_up); } if(nub_a==6){
clearInterval(repeat_down); } 
}
function backspace(){
s_chang_visible_all(); var no = cursor_position();

var lg = string_lg_1();
var input_str = calc.input.value.trim();


var new_str = input_str.substr(0,no-1) + input_str.substr(no,lg-1);
document.getElementById('input').value = new_str;
cursor_position_set(no-1) ; scroll_cursor(); 
}
function delete_a(){

s_chang_visible_all(); var no = cursor_position();

var lg = string_lg_1();
var input_str = calc.input.value;

var new_str = input_str.substr(0,no) + input_str.substr(no+1,lg);

document.getElementById('input').value = new_str;
cursor_position_set(no) ; 
}
function clear_all_1(item_1){

s_chang_visible_all(); 
var item_a=item_1;

s_chang_sum(item_a); var input_str = calc.input.value;
var new_str ="";
document.getElementById('input').value = new_str;
cursor_position_set(0) ; 
}
function space_1(){
s_chang_visible_all(); 

var no = cursor_position();

var lg = string_lg_1();
var input_str = calc.input.value;
if(insert_flag=="yes"){
var new_str = input_str.substr(0,no) +" "+ input_str.substr(no,lg);
}
else{
var new_str = input_str.substr(0,no) +" "+ input_str.substr(no+1,lg);
} 
document.getElementById('input').value = new_str;
cursor_position_set(no+1) ; 
}
function key_1(char_1){
var char_1=char_1;

s_chang_sum(char_1); var char_lg = char_1.length; var no = cursor_position(); var lg = string_lg_1();
var input_str = calc.input.value;
if(char_1== "h("){
if(insert_flag=="yes"){
var new_str = input_str.substr(0,no-1) +char_1+ input_str.substr(no,lg);
}
else{ 
var new_str = input_str.substr(0,no-1) +char_1+ input_str.substr(no+char_lg,lg);} }
else{
if(insert_flag=="yes"){
var new_str = input_str.substr(0,no) +char_1+ input_str.substr(no,lg);
}
else{
var new_str = input_str.substr(0,no) +char_1+ input_str.substr(no+char_lg,lg);
}
}
document.getElementById('input').value = new_str;
cursor_position_set(no+char_lg) ; 


s_check_nb(new_str); s_check_end(new_str); scroll_cursor(); }
var insert_flag="not"; function rept_1(char_1, nb){
var char_1 = char_1;
var nb = nb;
var char_t="";
for(var n =0; n < nb+1 ;n++){
char_t = char_t +char_1;
}

return (char_t);
}
function enter_1(){ s_chang_visible_all(); 
var no = cursor_position();
var lg = string_lg_1(); var input_str = calc.input.value;
var rten = input_str.charCodeAt(no); if(rten !=13 && rten !=10){
var new_str = input_str.substring(0,no) +'\r'+ input_str.substring(no,lg); }
if(rten ==13 ){
var new_str = input_str.substr(0,no) +'\r'+'\r'+ input_str.substr(no,lg); } 

if(rten ==10){
var new_str = input_str.substr(0,no) +'\r'+'\n'+ input_str.substr(no,lg); }
document.getElementById('input').value = new_str;


cursor_position_set(no+1) ; scroll_cursor();

}
function newline_1(){ s_chang_visible_all(); var no = cursor_position();
var s_lg = string_lg_1(); var input_str = calc.input.value;

var new_str = input_str+'\n' ; document.getElementById('input').value = new_str;
var new_ln_w = string_lg_1(); 
cursor_position_set(new_ln_w) ; }

function scroll_x_y(){
var elem = document.getElementById('input');
var x_1=elem.scrollLeft;
var y_1=elem.scrollTop;



elem.scrollTop = elem.scrollHeight ; 
}
function scroll_cursor(){ var text_area = document.getElementById('input');
var y_t=text_area.scrollTop;
var y_h=text_area.scrollHeight ;


var n_cur = cursor_position_row(); 
text_area.scrollTop = 9999 ; 
};
function m_n(n){ var nn=n;
var test_point = m_nub_p(nn); if(test_point > 0){
return message_1(7); }
if(nn < 0){
return message_1(7);} 

var sum_total=1;
if(nn==0){ 
sum_total=1; }
if(nn >0){

for(var i = 1 ; i < (nn+1) ; i++){
sum_total=sum_total* i;
}
}

return sum_total; 
}
function m_n_o(n){ var nn=n;

var sum_total=1;
if(nn==0){ 
sum_total=1; }
if(nn >0 && (nn%2==1)){

for(var i = 1 ; i <= (nn+1)/2 ; i++){
sum_total=sum_total* (i*2-1);
}
}
if(n<0){
return "n <0 ";}

return sum_total; 
}
function m_n_e(n){ var nn=n;

var sum_total=1;
if(nn==0){ 
sum_total=1; }
if(nn >0 && (nn%2==0)){

for(var i = 1 ; i <= (nn+1)/2 ; i++){
sum_total=sum_total* (i*2);
}
}
if(n<0){
return "n <0 ";}
return sum_total; 
}
function m_n_oe(n){ var nn=n;

var sum_total=1;
if(nn==0){ 
sum_total=1; }
if(nn >0 ){

for(var i = 1 ; i < nn+1 ; i++){
sum_total=sum_total* (i*2-1)/(i*2);
}
}
if(n<0){
return "n <0 ";}
return sum_total; 
}
function m_p(n,k){ var nn=n;
var kk=k;
var sum_total=1;
}
function m_c(n,k){ var nn=n;
var kk=k;
var sum_total=0;
if(kk==0){sum_total=1;}
if(kk==nn){sum_total=1;}
if(( nn>=0 && nn<kk) ||(kk<0 && nn>=0)){sum_total=0;}
if((nn>=kk)&& (kk>=1)){

sum_total= m_n(nn) /(m_n(nn-kk) * m_n(kk)) ;

}

return sum_total; 
}
function m_c_u(n,k){ var nn=n;
var kk=k;
var sum_total=0;
if(kk==0){sum_total=1;}
if(kk==nn){sum_total=1;}
if(( nn>=0 && nn<kk) ||(kk<0 && nn>=0)){sum_total=0;}
if((nn>=kk)&& (kk>=1)){


sum_total= m_n(nn) /(m_n(nn-kk) * m_n(kk)) ;

}

return sum_total; 
}
function m_exp(x){
var zz=x;
var nn=100; var sum_total_m=1;
var ee = 2.718281828459045235360287471353; var sum_total_p=0; 

var ee_100 = m_pow_m(ee,100); var ee_10 = m_pow_m(ee,10); var zzm= m_abs(m_nub_m(zz)); 

var zzp= m_abs(m_nub_p(zz)); if(zzm == 0){ sum_total_m=1};　　　　 var zzm_1_100 = zzm/100;
var zzm_1_10 = zzm/10;
if(zzm >= 100){
for(var i = 1 ; i < zzm_1_100 ; i++){
sum_total_m=sum_total_m * ee_100 ; zzm = zzm - 100; 
if(zzm < 100){ i = zzm_1_100 ;} }
}
if(zzm >= 10){
for(var i = 1 ; i < zzm_1_10 ; i++){
sum_total_m=sum_total_m * ee_10 ; zzm = zzm - 10; 
if(zzm < 10){ i = zzm_1_10 ;} }
}
if(zzm >= 1){
for(var i = 1 ; i <= zzm ; i++){
sum_total_m=sum_total_m * ee ; }
}

if(zzp ==0){sum_total_p=1};　　 　　 if(zzp > 0 && zzp < 1){
sum_total_p= m_series_e(zzp/2); 

sum_total_p = sum_total_p*sum_total_p;
}

var sum_total = sum_total_m/sum_total_p; 
if( x < 0){
var sum_total = sum_total_m/sum_total_p; var sum_total = (1.0e0/sum_total)}; if( x < 0 && sum_total ==0 ){

var ans_1= message_1(10);
return ans_1 ; } 
return sum_total; 

}
function m_pow_x(base,p){ var p= 0.33333333333333334;
var ans_1 =Math.pow(base,p); return ans_1;
}
function m_pow(base,p){ var bb=base;
var pp=p;
var ans_1;
var ppi=0;
var ppp=0;
var ans_2=1;
var ppi = m_nub_m(pp) ; if(ppi-pp !=0){
var ppp = m_nub_p(pp) ; }
else{ var ppp =0;}


if(bb==1){ ans_1=1; return ans_1; } else if( pp == 0) { ans_1=1; return ans_1; }
else if(bb==0 && pp >0) { ans_1=0; return ans_1; }
else if(bb==0 && pp < 0) { ans_1=""; return ans_1; }
else if(bb==0 && pp ==0) { ans_1=1; return ans_1; }

else if(bb !=0 && ppi !=0 && ppp==0 ){ ans_1= m_pow_m(bb,pp);
}
else if(ppp !=0 && bb > 0){ 
var bb_a = m_ln(bb);
if(m_abs(pp)==0.3333333333333333 && m_abs(bb) <= 42875 ){ ans_1= m_exp( m_fixed((m_abs(pp) * bb_a),15)) ; 
}

else{ 
ans_1= m_exp( m_abs(pp) * bb_a ) ; 
}
var test_data = m_nub_p(ans_1); if(m_abs(pp)==0.3333333333333333 && m_abs(bb) > 42875 && (m_abs(test_data) >0.99999 || m_abs(test_data) <0.000001)){
ans_1= m_fixed(ans_1,6); }
if(m_abs(pp)==0.3333333333333333 && m_abs(bb) > 42875 && (m_abs(test_data) <=0.99999 && m_abs(test_data) >=0.000001)){
var ans_1 =Math.pow(base,pp); }
if( pp < 0 ){ var ans_1= (1/ans_1) ;} 
}


else if(ppp !=0 && bb < 0){
ans_1=message_1(6); }

return ans_1; 

}
function m_ln(x){ var xx=x;
var xxabs = Number(m_abs(xx)); if ( xx == 0){ var ans_t = message_1(13); return ans_t; }
if ( xx < 0) { var ans_t =message_1(5); return ans_t; }

var ee = 2.718281828459045235360287471353; var count_m = m_cut_nub_m(xxabs); var count_p = m_cut_nub_p(xxabs); var count_t = count_m+count_p+1;
var ans_0 = 0;

var ee_10 =m_pow_m(ee,10); var ee_7 =m_pow_m(ee,7); var ee_5 =m_pow_m(ee,5); var ee_3 =m_pow_m(ee,3); 
while(xxabs >= ee_10){
xxabs = xxabs/ee_10;
ans_0=ans_0+10;

}
while(xxabs >= ee_7){
xxabs = xxabs/ee_7;
ans_0=ans_0+7;


}
while(xxabs >= ee_5){
xxabs = xxabs/ee_5;
ans_0=ans_0+5;

}
while(xxabs >= ee_3){
xxabs = xxabs/ee_3;
ans_0=ans_0+3;

}
while(xxabs >= ee){ xxabs = xxabs/ee;
ans_0=ans_0+1;

}
while(xxabs > 1.5 && xxabs < ee){ 

xxabs = (xxabs)/(ee); 
ans_0=ans_0 + 1;

}


while(xxabs < 0.00005 ){ 
xxabs = (xxabs)*(ee_10); 
ans_0=ans_0 - 10;

}
while(xxabs < 0.5 ){ 
xxabs = (xxabs)*(ee); 
ans_0=ans_0 - 1;
}
var ans_1 = m_series_ln_a_z(xxabs) ; 

var ans_t =ans_0 + ans_1;
if(xx<0){ ans_t=1.0/ans_t; 
}


return ans_t;
}
function m_log(x){ var M = 0.434294481903251827651128918917;
var xx=x;
var xxabs = Number(m_abs(xx)); var count_m = m_cut_nub_m(xxabs); var count_p = m_cut_nub_p(xxabs); var count_t = count_m+count_p+1;
var ans_0 = 0;
if ( xx == 0){ var ans_t = message_1(14) ; return ans_t;} 
if ( xx < 0) { var ans_t = message_1(9); return ans_t;} 

if(xxabs >=1000){
for(var i=0; i< count_t-1 ;i++){ xxabs = xxabs/1000;
ans_0=ans_0+3;
if(xxabs < 1000){ var i=count_t ;} }
}
if(xxabs >=10){
for(var i=0; i< count_t-1 ;i++){ xxabs = xxabs/10;
ans_0=ans_0+1;
if(xxabs < 10){ var i=count_t ;} }
}
if(xxabs > 0 && xxabs < 1){ 

for(var j=0; j< count_t ;j++){ xxabs = (xxabs)*(10); 
ans_0=ans_0 - 1;
if(xxabs > 1){ var j=count_t ;} }
}

var ans_1 = M * m_ln(xxabs) ; 

var ans_t =ans_0 + ans_1;
if(xx<0){ ans_t=1.0/ans_t; 
}

return ans_t;
}
function m_pi_mod_lag_m(x){ var xx = m_abs(x); var xx=x;
var data_tt=0;
var data_tt = m_pi_mod_lag(xx);
var i=0;
while ( data_tt > 6.283185307179587 && i< 20 ){ var data_tt = m_pi_mod_lag(data_tt);
var i=i+1; }
if(x < 0){ data_tt= -data_tt;}
else { data_tt= data_tt;} 
return data_tt;
}
function m_pi_mod_lag(x){ var xx = m_abs(x); var xx_ng = m_nub_p(xx); var xx_ps = m_nub_m(xx); var str_2pi="628318530717958647692528676655900576839433879875020";
var data_t=0;

var xx_ng_lg = xx_ng.toString().length;
var xx_ps_lg = xx_ps.toString().length;
if(xx_ng !=0 ){
xx_ng = xx_ng*1000000000000000;} else{ xx_ng=0;}

var count_nb = (xx_ps.toString().length)*10;
var nub_ps = str_2pi.substr(0,xx_ps_lg); var nub_ng = str_2pi.substr(xx_ps_lg,15); 
var nub_ps_1 = str_2pi.substr(0,xx_ps_lg-1); var nub_ng_1 = str_2pi.substr(xx_ps_lg-1,15); nub_ps= parseInt(nub_ps); 
nub_ng =parseInt(nub_ng); nub_ps_1=parseInt(nub_ps_1);
nub_ng_1=parseInt(nub_ng_1);

var str_2_nub= str_2pi.substr(0,xx_ps_lg) +"."+ str_2pi.substr(xx_ps_lg,15); 
var doub = Math.floor((xx_ps + xx_ng*m_pow(10,-15))/(nub_ps_1 + nub_ng_1*m_pow(10,-15)));
var rem_ng = xx_ng - nub_ng_1*doub;
var rem_ps = xx_ps - nub_ps_1*doub;

rem_ng_lg = rem_ng.toString().length;
xx = rem_ps + rem_ng*m_pow(10,-15) ; xx= xx/m_pow(10,(xx_ps.toString().length-2 )); if(x < 0){ data_t= -xx;}
else { data_t= xx;} 

return data_t;

}
function m_pi_mod(x){ 
var xx = m_abs(x); var data_lg = xx.length ;
var data_ng = m_nub_p(xx); var data_ps = m_nub_m(xx); var zz_quot= xx/6.2831853071795865 ; var zz_quot=Math.floor(zz_quot); 
if(xx <=1000000 ){ var zz_remain_1= (xx*1000000000000000 % (6283185307179586 ))/1000000000000000; var zz_remain_2= (xx*1000000000000000 % (6283185307179587 ))/1000000000000000; var zz=(zz_remain_1*0.523074713233441 + zz_remain_2*0.476925286766559); }
if(xx > 1000000 && xx <= 100000000 ){ var zz_remain_1= (xx*100000000000 % (628318530717 ))/100000000000; var zz_remain_2= (xx*100000000000 % (628318530718 ))/100000000000; var zz=(zz_remain_1*0.041352307471324 +zz_remain_2*0.958647692528676 ); }
if(xx > 100000000 && xx <= 1000000000 ){ var zz_remain_1= (xx*1000000000 % (6283185307 ))/1000000000; var zz_remain_2= (xx*1000000000 % (6283185308 ))/1000000000; var zz=(zz_remain_1*0.8204135230747133 +zz_remain_2*0.1795864769252867 ); }
if(xx > 1000000000 ){ var zz_remain_1= (xx*100000000 % 628318530)/100000000; var zz_remain_2= (xx*100000000 % 628318531)/100000000; var zz=(zz_remain_1*0.2820413523074714 + zz_remain_2 *0.7179586476925286); }

if(x<0){ zz = zz*(-1);}

return zz; 
}
function m_sin(x){
var xx=x;
var sum_total=0;


if( m_abs(xx)<=20 && m_abs(xx) > 6.28318530717958647692){ var zz = (xx*1000000000000000 % 6283185307179586.47)/1000000000000000; }
if( m_abs(xx) <= 6.28318530717958647692) { var zz = xx ;}
if( m_abs(xx)>20){
sum_total=Math.sin(xx);
return sum_total;}





var nn=200; 

if(zz >PI/2 && zz<=PI) { var zz=PI-zz ;} if(zz >PI && zz<=3*PI/2) { var zz=-(zz-PI);} if(zz >3*PI/2 && zz<=2*PI) { var zz=-6.28318530717958647692+zz ;} 
if(zz < -PI/2 && zz>=-PI) { var zz=-(PI+zz) ;} if(zz < -PI && zz>=-3*PI/2) { var zz=-(zz+PI);} if(zz < -3*PI/2 && zz>= -2*PI) { var zz= (2*PI+zz);} 
for(var i = 0 ; i < (nn+1) ; i++){
var k=2*i+1;
sum_total=sum_total+ Math.pow(-1,i)*Math.pow(zz,k)/m_n(k); }
return sum_total; 
}
function m_cos(x){
var xx=x;
var sum_total=0;
if( m_abs(xx)<=20 && m_abs(xx) > 6.28318530717958647692){ var zz = (xx*1000000000000000 % 6283185307179586.47)/1000000000000000; }
if( m_abs(xx) <= 6.28318530717958647692) { var zz = xx ;}

if( m_abs(xx)>20){
sum_total=Math.cos(xx);
return sum_total;}


var nn=200; 

if(zz >PI && zz<=3*PI/2) { var zz=2*PI-zz;} if(zz >3*PI/2 && zz<=2*PI) { var zz=-zz ;} 
if(zz <= 0 && zz >= -PI/2) { var zz = -zz ;} 
if(zz < -PI/2 && zz>=-PI) { var zz=-zz ;} if(zz < -PI && zz>=-3*PI/2) { var zz=2*PI+ zz ;} if(zz < -3*PI/2 && zz>= -2*PI) { var zz= (2*PI+zz);} 
for(var i = 0 ; i < (nn+1) ; i++){
var k=2*i;
sum_total=sum_total+ Math.pow(-1,i)*Math.pow(zz,k)/m_n(k); }

return sum_total; 
}
function m_cos_1(x){ var xx= m_abs(x); if( m_abs(xx)<= 25 && m_abs(xx) >6.28318530717958647){ 

var xx = xx % 6.28318530717958647692;
}
if( m_abs(xx)>25){
sum_total=Math.cos(xx);
return sum_total;}


var yy=(1570796326794896619-xx*m_pow(10,18))/m_pow(10,18); 
var sum_total=m_sin(yy); 
return sum_total; 
}
function m_tan(x){
var xx = m_abs(x);
if( xx <=10 && xx > 3.141592653589793238466433){ 
var xx = (xx*1000000000000000 % 3141592653589793.238466433 )/1000000000000000;
}

if( xx > 1.570796326794896619 && xx <= 3.141592653589793238466433) { var xx = xx - 3.141592653589793238466433 ;}
if( xx >10){
sum_total=Math.tan(x);
return sum_total;}

var zz=xx; 
var yy = m_sin(zz);
var xx_c = m_cos(zz);

var sum_total=0.0;


if(xx_c !=0){
sum_total = (yy*m_pow(10,17))/(xx_c*m_pow(10,17)); }
if( x < 0){ sum_total = - sum_total;} 
if(xx_c == 0.0 && yy>0.0 ) 
{ 
sum_total = message_1(11); }
if(xx_c == 0.0 && yy<0.0 ) 
{ 
sum_total = message_1(12); }

return sum_total; 
}
function m_cot(x){
var zz = x;
if(zz <=100 && zz >=-100){ var zz = (zz*10000000000 % 31415926535.8979323 )/10000000000; }
else{ sum_total=Math.cot(zz);
return sum_total;}
var yy = m_sin(zz);
var xx = m_cos(zz);


var sum_total=0.0;


if(yy !=0){
sum_total = (xx*m_pow(10,16))/(yy*m_pow(10,16)); }

if(yy == 0.0 && xx>0.0 ) 
{ 
sum_total = message_1(15); }
if(yy == 0.0 && xx<0.0 ) 
{ 
sum_total = message_1(16); }

return sum_total; 
}
function m_sinh(x){ var zz=x;

var sum_total=0;
var pexp=m_exp(zz);
var nexp=m_exp(-zz);
sum_total=(pexp-nexp)/2;

return sum_total; 
}
function m_sinh_1(x){ var zz=x;
var nn=100; var sum_total=0;
if(zz==0.0){ sum_total=0;}
if(zz !=0.0){
for(var i = 0 ; i < (nn+1) ; i++){
var k=2*i+1;
sum_total=sum_total+m_pow(zz,k)/m_n(k); }
}

return sum_total; 
}
function m_cosh(x){ var zz=x;

var sum_total=0;
var pexp=m_exp(zz);
var nexp=m_exp(-zz);
sum_total=(pexp+nexp)/2;

return sum_total; 
}
function m_cosh_1(x){
var zz=x;

var nn = 100; var sum_total=0;
for(var i = 0 ; i < (nn+1) ; i++){
var k=2*i; 
sum_total=sum_total+ Math.pow(zz,k)/m_n(k); }

return sum_total; 
}
function m_tanh(x){
var zz = x;
var yy = m_sinh(zz);
var xx = m_cosh(zz);

var sum_total=0.0;
if(x >= 30){ sum_total =1;}
if(x <=-30){ sum_total =-1;}
if((x <30) && (x >-30 )){
sum_total = yy/xx; } 


return sum_total; 
}
function m_asin(x){
var zz = m_abs(x);

var nn =1900; var sum_total=0;


if((zz >0.8) && (zz < 1)){ var zz2=zz*zz;
var zz3 = (1*m_pow(10,16)-zz2*m_pow(10,16))/m_pow(10,16);

var zz5 = m_pow(zz3,0.5); 
for(var i = 0 ; i < (nn+1) ; i++){ var k=2*i+1;
sum_total=sum_total+ m_n_oe(i)*m_pow(zz5,k)/(k); 
} 

sum_total= 1.570796326794896619 - sum_total; }
if((zz <=0.8) && (zz >0)){
for(var i = 0 ; i < (nn+1) ; i++){ var k=2*i+1;

sum_total=sum_total+ m_n_oe(i)*m_pow(zz,k)/(k); 
} 

}
if( x < 0){ sum_total=sum_total*(-1) ; }
if( zz == 0){ sum_total=0 ; }
if( zz == 1){ sum_total=(1/2) * 3.1415926535897932384623846; }
if( x == -1){ sum_total=(-1/2) * 3.1415926535897932384623846; } 

if( zz >1 || zz< -1){ 
var ans_1= message_1(1);

return ans_1; 
}


return sum_total; 
}
function m_asin_2(x){
var zz = x;

var nn = 150; var sum_total=zz;

if((zz < 1) && (zz > -1)){
for(var i = 1 ; i < (nn+1) ; i++){
var k=2*i+1;
sum_total=sum_total+ (m_n_o(2*i-1)/m_n_e(2*i))*Math.pow(zz,k)/(k );

} 

}

if( zz == 1){ sum_total=1/2 * 3.1415926535897932384623846; }
if( zz == -1){ sum_total=-1/2 * 3.1415926535897932384623846; } 

if( zz >1 || zz< -1){ sum_total="超出range " ;}


return sum_total; 
}
function m_asin_1(x){
var zz = x;

var nn = 85; var sum_total=0;
var sum_total_1=0;
var sum_total_2=0;
if((zz < 1) && (zz > -1)){
for(var i = 0 ; i < (nn+1) ; i++){
var k = 2*i +1;
var j = 2*i;
var mc = m_c(j,i);
var pw1 = Math.pow(zz,k);
var pw2 =Math.pow(4,i);
sum_total=sum_total+ (mc/pw2)*(pw1/k); } 

}

if( zz == 1){ sum_total=1/2 * 3.1415926535897932384623846; }
if( zz == -1){ sum_total=-1/2 * 3.1415926535897932384623846; } 

if( zz >1 || zz< -1){ sum_total="<-- error :asin(x);|x|<= 1 -->" ;}


return sum_total; 
}
function m_acos(x){
var zz = x;
var nn=m_asin(x);
var π= 3.1415926535897932384623846;

var ans_1 = (15707963267948966.19 - nn*m_pow(10,16))/m_pow(10,16) ; if( zz >1 || zz< -1){ 
var ans_1= message_1(2);

return ans_1; 
}
return ans_1; 
}
function m_acos_1(x){
var x1 = 1 - Math.pow(x,2) ;
var x2 = Math.pow(x1 ,1/2);

var ans_1= m_asin(x2) ;
return ans_1;
}
function m_atan_1(x){
var zz = x;

var nn =2000; var sum_total=0;

if((zz < 1) && (zz > -1)){
for(var i = 0 ; i < (nn+1) ; i++){ var k=2*i+1;
sum_total=sum_total+ Math.pow(-1,i)*Math.pow(zz,k)/(k); 
} 

}



return sum_total; 
}
function m_atan(x){
var x1 = Math.pow(x,2) +1 ;
var x2 = Math.pow(x1 ,1/2);
var x3 = x/x2 ;

var ans_1= m_asin(x3) ;
return ans_1; 
}
function m_asinh(x){
var xx=x;
var ans_1= m_ln(xx+ Math.pow(xx*xx+1,0.5));
return ans_1; 
}
function m_acosh(x){
var xx=x;
if(xx >=1){
var ans_1= m_ln(xx+ Math.pow(xx*xx-1,0.5));
}
else{

ans_1="<-- error :acosh(x);x >= 1 -->"
}
return ans_1; 
}
function m_atanh(x){
var xx=x;
if((xx < 1) && (xx > -1)){
var ans_1= 0.5 * m_ln((1+xx)/(1-xx));
}
else{

ans_1="<-- error :atanh(x);|x|< 1 -->"
}
return ans_1; 
}
function message_1(n){
var nn = n;
var message_1;
switch(nn){
case 1:
message_1 = "<-- Msg : asin(x) , |x|<= 1 -->" ;
break;
case 2:
message_1 = "<-- Msg : acos(x) , |x|<= 1 -->" ;
break;
case 3:
message_1 = "<-- Msg : acosh(x) , x >= 1 -->" ;
break;
case 4:
message_1 = "<-- Msg : atanh(x) , |x|< 1 -->" ;
break;
case 5:
message_1 = "<-- Msg : ln(x) , x > 0 -->" ;
break;
case 6:
message_1 = "<-- Msg : b ^p , when b<0 and p decimal point except zero , complex logarithm-->" ;
break;
case 7:
message_1 = "<-- Msg : n! , n ∈ N -->" ;
break; 
case 8:
message_1 = "<-- Msg : () , no data -->" ;
break;
case 9:
message_1 = "<-- Msg : log(x) , x > 0 -->" ;
break;
case 10:
message_1 = "<-- Msg : exp(x) value approximation to 0 -->" ;
break;
case 11:
message_1 = "<-- Msg : tan(x) value to infinity -->" ;
break;
case 12:
message_1 = "<-- Msg : tan(x) value to -infinity -->" ;
break;

case 13:
message_1 = "<-- Msg : ln(0) value to -infinity -->" ;
break;
case 14:
message_1 = "<-- Msg : log(0) value to -infinity -->" ;
break;
case 15:
message_1 = "<-- Msg : cot(x) value to infinity -->" ;
break;
case 16:
message_1 = "<-- Msg : cot(x) value to -infinity -->" ;
break;
default:

}
return message_1; 
}
function m_del4_2f_char(s,c){ 
var ss=s;
var cc=c;
var ss_lg=ss.length; 
var cc_lg=cc.length;

var pos=ss.lastIndexOf(cc);

var partstring = ss.substr((pos+cc_lg),ss_lg);

return partstring ; 
}
function m_count_newline(){ var lg = string_lg_1();

var input_str = calc.input.value ;
var rten = ""; var arr =[];
for(var i=1 ; i<=lg ;i++){
var rten = input_str.charCodeAt(i); if(rten ==10 || rten ==13){
arr.push(i);
}
}

return arr;
}
function m_count_semicolon(){ var lg = string_lg_1();

var input_str = calc.input.value ;
var rten = ""; var arr =[];
for(var i=1 ; i<=lg ;i++){
var rten = input_str.charCodeAt(i); if(rten ==59 ){
arr.push(i);
}
}

return arr;
}
function m_replace(str_s ,old_s ,new_s ){ var ss = str_s.trim();
var oo = old_s.trim(); var nn = new_s.trim(); var ss_lg = ss.length;
var oo_lg = oo.length; var nn_lg = nn.length; var new_ss = ss ; var fg =0 ; 
for(var i=0 ; i < ss_lg ; i++){

var oo_part = ss.substr(i,oo_lg);
if(oo_part == oo){

var new_ss = new_ss.substr(0, i+fg) + nn +new_ss.substr(i+oo_lg + fg , ss_lg-1+fg);

var fg = fg+(nn_lg-oo_lg); }
}

return new_ss;
}
function m_replace_star(str_s ){ var str_1=str_s;
var str_new = m_replace(str_1 ,')m',')*m');
for(var i=0;i<=9;i++){
str_new = m_replace(str_new ,i+'m',i+'*m');
}


return str_new;
}
function m_str_spec_part_bf(str ,spec){ var str_1 = str.trim();
var spec_1= spec;




var pos = str_1.indexOf(spec_1) ; 

var mark_1 =str_1[pos - 1]; var count_1 = 1 ;
var count_mark = pos ;
if(mark_1 ==")"){

for(var i= pos-2;0 <= i ; i=i-1){
var mark_ref = str_1[i];
if(mark_ref ==")"){
count_1 = count_1 +1 ;}
if(mark_ref =="("){
count_1 = count_1-1 ;}

if(count_1==0){
var count_mark = i ;
i=-1; }
}
}

if((mark_1 >=0 && mark_1<=9)) {
var count_mark = pos-1; for(var i = pos - 2; 0 <= i ; i=i-1){
var mark_ref = str_1[i];

if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°' || mark_ref =='π' || mark_ref=='.'){ 
var count_mark = i ;
}
else{ 

i=-1 ; } 

}
}

var str_part_b= str_1.substring(count_mark,pos);


return str_part_b;
}
function m_str_spec_part_af(str ,spec){ 
var str_1 = str.trim();
var str_a_lg = str_1.length;
var spec_1= spec;
var spec_a_lg = spec_1.length;
var pos = str_1.indexOf(spec_1) ; var mark_1 =str_1[pos +spec_a_lg]; var count_a = 1 ;
var count_mark=2500; if(mark_1 =="("){

for(var i= (pos + spec_a_lg+1) ; i < str_a_lg ; i++){
var mark_ref = str_1[i];
if(mark_ref =="("){
count_a = count_a +1 ;}
if(mark_ref ==")"){
count_a = count_a-1 ;}

if(count_a==0){
var count_mark = i+1 ;
i = str_a_lg ; }
}
}



if(mark_1 >=0 && mark_1<=9) {
for(var i = pos + spec_a_lg; i < str_a_lg ; i++){
var mark_ref = str_1[i];

if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°' || mark_ref =='π' || mark_ref=='.') { }
else{ 
var count_mark = i ;
i= str_a_lg; } 
}
}

if(mark_1 =='.') { for(var i = pos + spec_a_lg+1; i < str_a_lg ; i++){
var mark_ref = str_1[i];

if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°' || mark_ref =='π' ) { }
else{ 
var count_mark = i ;
i= str_a_lg; } 
}
}
if(mark_1 =='π') { var count_mark = pos+spec_a_lg+1 } ; if(mark_1 =="-") {
for(var i = pos + spec_a_lg+1; i < str_a_lg ; i++){
var mark_ref = str_1[i];

if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°' || mark_ref =='π'|| mark_ref=='.' ) { }
else{ 
var count_mark = i ;


i= str_a_lg; } 
}
}

if(mark_1 =='^') { var count_mark = pos+spec_a_lg } ; 

var str_part_b= str_1.substring(pos+spec_a_lg ,count_mark); 

return str_part_b;

}
function m_fact(str){ var str_1=str;
var part_bf = m_str_spec_part_bf(str_1 ,'!');

var part_bf_lg = part_bf.length;

if(part_bf_lg > 0 && part_bf[0] =='(' ){
str_1 = str_1.replace(part_bf+'!' , "m_n"+part_bf ) ; } 
if(part_bf_lg > 0 && part_bf[0] !='(' ){
str_1 = str_1.replace(part_bf+'!' , "(m_n("+part_bf+'))'); 
}
if(part_bf_lg == 0){ str_1 = str_1.replace(part_bf+'!' , "(m_n("+1+'))'); } return str_1;
}
function m_star(str){ 

var str_1 = str;

var part_bf = m_str_spec_part_bf(str_1 ,"π"); 
var part_bf_lg = part_bf.length;

if(part_bf_lg > 0 ){
str_1 = str_1.replace(part_bf+"π" , part_bf+'*3.14159265358979323846' ) ; } 

if(part_bf_lg == 0){ str_1 = str_1.replace(part_bf+"π" , part_bf+'31415926535897932.3846/10000000000000000' ) ; } 
return str_1;
}
function m_star_deg(str){ 

var str_1 = str;

var part_bf = m_str_spec_part_bf(str_1 ,"°"); var part_bf_lg = part_bf.length;

if(part_bf_lg > 0 ){
str_1 = str_1.replace(part_bf+"°" , part_bf+' * 0.01745329251994329577 ' ) ; } 
if(part_bf_lg == 0){ str_1 = str_1.replace(part_bf+"°" , part_bf+'0.01745329251994329577' ) ; } return str_1;
}
function m_fun_aft(str,spec1,spec2){ var str_1=str; var spec_1=spec1;
var spec_2=spec2;
var part_aft = m_str_spec_part_af(str_1 ,spec_1);
var part_aft_lg = part_aft.length;

if(part_aft_lg > 0 && part_aft[0] =='(' ){

str_1 = str_1.replace(spec_1 , spec2 ) ; } 
if(part_aft_lg > 0 && part_aft[0] !='(' ){

str_1 = str_1.replace(spec_1+part_aft , "("+spec2 +"("+part_aft+')'+")" ); 
}

if(part_aft_lg == 0 && spec2 =="eee" ){ str_1 = str_1.replace(spec_1+part_aft , "("+spec2 +"("+1+')'+")" ); } if(part_aft_lg == 0 && spec2 !="eee" ){ str_1 = "error, not data" ; }

return str_1;
}
function m_hat_bf_aft(str,spec1,spec2){ var str_1=str; 
var spec_1=spec1;
var spec_2=spec2;
var part_aft =""; var part_bf = m_str_spec_part_bf(str_1 ,spec1);
var part_bf_lg = part_bf.length;
var part_aft = m_str_spec_part_af(str_1 ,spec_1);
var part_aft_lg = part_aft.length;
var part_aft_1=part_aft;
var part_bf_1=part_bf;
if(part_aft[0] =='(' && part_aft[part_aft_lg-1] ==')'){ part_aft_1= part_aft.substr(1,part_aft_lg-2);
}
else{ part_aft_1= part_aft;}
if(part_bf[0] =='(' && part_bf[part_bf_lg-1] ==')'){ part_bf_1= part_bf.substr(1,part_bf_lg-2);
}
else{part_bf_1= part_bf;}

if((part_bf_lg > 0) && (part_aft_lg > 0 )){
str_1 = str_1.replace(part_bf+spec_1+part_aft , "("+spec2+"("+part_bf_1 +','+part_aft_1+")"+")" ) ; } 

if(part_aft_lg == 0 || part_bf_lg == 0 ){ str_1 = "error, not data" ; }

return str_1;
}
function m_str_spc_count(str,spec){ var str_1 = str;
var spec_1 = spec;
var str_1_lg = str_1.length;
var spec_1_lg = spec_1.length;
var count_1 = 0;
for(var i=0;i<str_1_lg;i++){

var str_ref= str_1.substr(i,spec_1_lg) ;
if(str_ref == spec_1){
count_1=count_1+1;
i= i+ spec_1_lg -1 ;} }
return count_1;
}
function m_str_spc_index(str,spec){ var str_1 = str;
var spec_1 = spec;
var str_1_lg = str_1.length;
var spec_1_lg = spec_1.length;
var index_1 = 0; for(var i=0;i<(str_1_lg-spec_1_lg+1);i++){

var str_ref= str_1.substr(i,spec_1_lg) ;
if(str_ref == spec_1){
index_1=i;
return index_1; 
} }

return index_1;
}
function m_str_spc_index_m(str,spec){ var str_1 = str;
var spec_1 = spec;
var str_1_lg = str_1.length;
var spec_1_lg = spec_1.length;

var nub_count = m_str_spc_count(str_1,spec_1); var A=m_new_mtx(nub_count,2); var k=0 ; 
for(var i=0;i<(str_1_lg-spec_1_lg+1);i++){

var str_ref= str_1.substr(i,spec_1_lg) ;
if(str_ref == spec_1){
A[k][0]=i;
A[k][1]= spec_1;
k=k+1; 
} 
}

return A;
}
function m_str_spc_index_m_2(str,spec_1,spec_2){ var str_a = str;
var spec_a = spec_1;
var spec_b = spec_2;
var str_a_lg = str_a.length;
var spec_a_lg = spec_a.length;
var spec_b_lg = spec_b.length;
var nub_count_a = m_str_spc_count(str_a,spec_a); var nub_count_b = m_str_spc_count(str_a,spec_b); var A=m_new_mtx((nub_count_a+nub_count_b),2); var k=0 ; var m=0 ; for(var i=0;i < str_a_lg;i++){

var str_ref_a= str_a.substr(i,spec_a_lg) ;
if(str_ref_a == spec_a){
A[k][0]=i;
A[k][1]= spec_a;
k=k+1; 
} 
var str_ref_b= str_a.substr(i,spec_b_lg) ;
if(str_ref_b == spec_b){
A[k][0]=i;
A[k][1]= spec_b;
k=k+1; 
} 
}

return A;
}
function m_str_spc_index_m_2_sp(str,spec_1,spec_2){ var str_a = str; var spec_a = spec_1; var spec_b = spec_2;
var str_a_lg = str_a.length;
var spec_a_lg = spec_a.length;
var spec_b_lg = spec_b.length;
var nub_count_a = m_str_spc_count(str_a,spec_a); var nub_count_b = m_str_spc_count(str_a,spec_b); var A=m_new_mtx((nub_count_a+nub_count_b),2); var k=0 ; var m=0 ; for(var i=0;i < str_a_lg;i++){
var str_bf_a = str_a.substr(i-1,1) ; var str_af_h = str_a.substr(i+3,1) ; var str_af_a = str_a.substr(i+3,1) ; 
var str_af_b = str_a.substr(i+1,1) ; 

var str_ref_a= str_a.substr(i,spec_a_lg) ;
if(str_ref_a == spec_a && str_bf_a !="a" && str_af_h !="h" && str_af_a !="(" ){
A[k][0]=i;
A[k][1]= spec_a;
k=k+1; 
} 
var str_ref_b= str_a.substr(i,spec_b_lg) ;
if(str_ref_b == spec_b && str_af_b !=")" ){
A[k][0]=i;
A[k][1]= spec_b;
k=k+1; 
} 
}

return A;
}
function m_str_spc_index_m_2_st(str,spec_1,spec_2){ var str_a = str; var spec_a = spec_1; var spec_b = spec_2;
var str_a_lg = str_a.length;
var spec_a_lg = spec_a.length;
var spec_b_lg = spec_b.length;
var nub_count_a = m_str_spc_count(str_a,spec_a); var nub_count_b = m_str_spc_count(str_a,spec_b); var A=m_new_mtx((nub_count_a+nub_count_b),2); var k=0 ; var m=0 ; for(var i=0;i < str_a_lg;i++){
var str_bf_a = str_a.substr(i-1,1) ; 

var str_ref_a= str_a.substr(i,spec_a_lg) ;
if(str_ref_a == spec_a && str_bf_a !="a" ){
A[k][0]=i;
A[k][1]= spec_a;
k=k+1; 
} 
var str_ref_b= str_a.substr(i,spec_b_lg) ;
if(str_ref_b == spec_b ){
A[k][0]=i;
A[k][1]= spec_b;
k=k+1; 
} 
}

return A;
}
function m_str_spc_inter(str,spec_1,spec_2){ var str_1 = str;
var spec_a = spec_1;
var spe2_2 = spec_2;
var str_1_lg = str_1.length;

var index_1 = 0; 
var index_2 = 0; 

index_1 = m_str_spc_index(str,spec_a);
index_2 = m_str_spc_index(str,spe2_2);
var new_str =str_1.substring(index_1,index_2+1); return new_str;
}
function m_str_spc_inter_2word(str,spec_1,spec_2){ var str_1 = str;
var spec_a = spec_1;
var spe2_2 = spec_2;
var str_1_lg = str_1.length;

var index_1 = 0; 
var index_2 = 0; 

index_1 = m_str_spc_index(str,spec_a);
index_2 = m_str_spc_index(str,spe2_2);
var new_str =str_1.substring(index_1,index_2+2); return new_str;
}
function m_str_spc_inter_m_word(str,spec_1,spec_2){ var str_1 = str; var spec_a = spec_1; var spec_b = spec_2; var str_1_lg = str_1.length;

var index_1 = 0; 
var index_2 = 0; 

index_1 = m_str_spc_index(str,spec_a);
index_2 = m_str_spc_index(str,spec_b);
var new_str =str_1.substring((index_1+spec_a.length) ,(index_2+spec_b.length-1)); return new_str;
}
function m_str_spc_inter_m_word_rp_sum(str ){ var str_1 = str;
var str_1_lg = str_1.length;
str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"sin" ,"π"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"sin(" ,"π)"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"cos" ,"π"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"cos(" ,"π)"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"tan" ,"π"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"tan(" ,"π)"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"sin" ,"°"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"sin(" ,"°)"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"cos" ,"°"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"cos(" ,"°)"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"tan" ,"°"); str_1 = m_str_spc_inter_m_word_rp_s(str_1 ,"tan(" ,"°)"); 
return str_1;
}
function m_str_spc_inter_m_word_rp_s(str ,sins ,pi){ var str_1 = str;
var str_1_lg = str_1.length;
var sin_a=sins;
var pi_a=pi;



if((sin_a=="sin\("|| sin_a=="cos\(" || sin_a=="tan\(") && (pi_a=="π\)")){ var AA = m_str_spc_index_m_2_st(str_1,sin_a,"π)");}
else { var AA =[];}

if( AA.length !==0){ 

for(var i= (AA.length-2) ;i >=0 ; i--){ 
if(AA[i][1]== sin_a && AA[i+1][1]== "π)"){

var data_sin_new = str_1.substring(AA[i][0]+4,AA[i+1][0]); var sinpib=AA[i][0];
var sinpia=AA[i+1][0];

if((sinpia-sinpib) == 4){ data_sin_new =1; return str_1;} if(data_sin_new =="-"){ data_sin_new =-1; return str_1;} 
var nub_add = m_str_spc_count(data_sin_new,"+"); if(data_sin_new.substr(0,1) =="-" && data_sin_new.length >1 ){
var data_sin_new_1=data_sin_new.substr(1,data_sin_new.length -1); var nub_sub = m_str_spc_count(data_sin_new_1,"-"); 
}
else{ var nub_sub = m_str_spc_count(data_sin_new,"-");} var nub_mul = m_str_spc_count(data_sin_new,"*"); var nub_div = m_str_spc_count(data_sin_new,"/"); var nub_pow = m_str_spc_count(data_sin_new,"^"); var nub_sum_op = nub_add+nub_sub+nub_mul+nub_div+nub_pow;
if( nub_sum_op > 0 ){ return str_1; } 

var data_sin_new_p= m_nub_m(data_sin_new); 
var data_sin_new_n= m_nub_p(data_sin_new); 
var pow_lg= data_sin_new_n.toString().length;
if(sin_a!="tan\("){
if((data_sin_new_p % 2)==0){
data_sin_new = data_sin_new_n;} if((data_sin_new_p % 2) != 0 && data_sin_new_n >= 0 ){ data_sin_new = 1+data_sin_new_n;}
if((data_sin_new_p % 2) != 0 && data_sin_new_n < 0 ){ data_sin_new = -1+data_sin_new_n;}
if(sin_a=="sin\("){ if(data_sin_new >=0 && data_sin_new<=0.5){ data_sin_new = data_sin_new;} if(data_sin_new >0.5 && data_sin_new<=1){ data_sin_new = eval((Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new >1 && data_sin_new<=1.5){ data_sin_new = eval((Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new >1.5 && data_sin_new<=2){ data_sin_new = data_sin_new;} if(data_sin_new <=0 && data_sin_new>=-0.5){ data_sin_new = data_sin_new;} if(data_sin_new <-0.5 && data_sin_new>=-1){ data_sin_new = eval((-Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1 && data_sin_new>=-1.5){ data_sin_new = eval((-Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1.5 && data_sin_new>=-2){ data_sin_new = data_sin_new;} 
}
if(sin_a=="cos\("){ if(data_sin_new >=0 && data_sin_new<=0.5){ data_sin_new = data_sin_new;} if(data_sin_new >0.5 && data_sin_new<=1){ data_sin_new = data_sin_new;} if(data_sin_new >1 && data_sin_new<=1.5){ data_sin_new = eval((2*Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new >1.5 && data_sin_new<=2){ data_sin_new = eval((2*Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <=0 && data_sin_new>=-0.5){ data_sin_new = -data_sin_new;} if(data_sin_new <-0.5 && data_sin_new>=-1){ data_sin_new = eval((Math.pow(10,pow_lg)+data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1 && data_sin_new>=-1.5){ data_sin_new = eval((2*Math.pow(10,pow_lg)+data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1.5 && data_sin_new>=-2){ data_sin_new = eval((2*Math.pow(10,pow_lg)+data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} }
}

if(sin_a == "tan\("){ 
data_sin_new = data_sin_new_n;
if(data_sin_new >=0 && data_sin_new<=0.5){ data_sin_new = data_sin_new;} if(data_sin_new >0.5 && data_sin_new<=1){ data_sin_new = (data_sin_new-1);} 
if(data_sin_new <=0 && data_sin_new>=-0.5){ data_sin_new = data_sin_new;} if(data_sin_new <-0.5 && data_sin_new>=-1){ data_sin_new = (data_sin_new+1);} }




var str_1 = str_1.substring(0 ,(AA[i][0]+4))+ data_sin_new + str_1.substring(AA[i+1][0] ,str_1_lg); 
} } } 

if((sin_a=="sin"|| sin_a=="cos" || sin_a=="tan") && (pi_a=="π")){
var BB = m_str_spc_index_m_2_sp(str_1,sin_a,"π");}
else { var BB =[];}
if(BB.length !=0){
for(var i= (BB.length-2) ;i >=0 ; i--){ if(BB[i][1]== sin_a && BB[i+1][1]== "π"){
var data_sin_new = str_1.substring(BB[i][0]+3,BB[i+1][0]); var sinpib=BB[i][0];
var sinpia=BB[i+1][0];

if((sinpia-sinpib) == 3){ data_sin_new =1; return str_1;} if(data_sin_new =="-"){ data_sin_new =-1; return str_1;} 
var nub_add = m_str_spc_count(data_sin_new,"+"); if(data_sin_new.substr(0,1) =="-" && data_sin_new.length >1 ){
var data_sin_new_1=data_sin_new.substr(1,data_sin_new.length -1); var nub_sub = m_str_spc_count(data_sin_new_1,"-"); 
}
else{ var nub_sub = m_str_spc_count(data_sin_new,"-");} 
var nub_mul = m_str_spc_count(data_sin_new,"*"); var nub_div = m_str_spc_count(data_sin_new,"/"); var nub_pow = m_str_spc_count(data_sin_new,"^"); var nub_sum_op = nub_add+nub_sub+nub_mul+nub_div+nub_pow;
if( nub_sum_op > 0 ){ return str_1; } 


var data_sin_new_p= m_nub_m(data_sin_new); var data_sin_new_n= m_nub_p(data_sin_new); 
var pow_lg= data_sin_new_n.toString().length; 

if(sin_a !="tan"){
if((data_sin_new_p % 2)==0){
data_sin_new = data_sin_new_n;} if((data_sin_new_p % 2) != 0 && data_sin_new_n >= 0 ){ data_sin_new = 1+data_sin_new_n;}
if((data_sin_new_p % 2) != 0 && data_sin_new_n < 0 ){ data_sin_new = -1+data_sin_new_n;}

if(sin_a=="sin"){ if(data_sin_new >=0 && data_sin_new<=0.5){ data_sin_new = data_sin_new;} if(data_sin_new >0.5 && data_sin_new<=1){ data_sin_new = eval((Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new >1 && data_sin_new<=1.5){ data_sin_new = eval((Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new >1.5 && data_sin_new<=2){ data_sin_new = data_sin_new;} if(data_sin_new <=0 && data_sin_new>=-0.5){ data_sin_new = data_sin_new;} if(data_sin_new <-0.5 && data_sin_new>=-1){ data_sin_new = eval((-Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1 && data_sin_new>=-1.5){ data_sin_new = eval((-Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1.5 && data_sin_new>=-2){ data_sin_new = data_sin_new;} 
}
if(sin_a=="cos"){ if(data_sin_new >=0 && data_sin_new<=0.5){ data_sin_new = data_sin_new;} if(data_sin_new >0.5 && data_sin_new<=1){ data_sin_new = data_sin_new;} if(data_sin_new >1 && data_sin_new<=1.5){ data_sin_new = eval((2*Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new >1.5 && data_sin_new<=2){ data_sin_new = eval((2*Math.pow(10,pow_lg)-data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <=0 && data_sin_new>=-0.5){ data_sin_new = -data_sin_new;} if(data_sin_new <-0.5 && data_sin_new>=-1){ data_sin_new = eval((Math.pow(10,pow_lg)+data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1 && data_sin_new>=-1.5){ data_sin_new = eval((2*Math.pow(10,pow_lg)+data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} if(data_sin_new <-1.5 && data_sin_new>=-2){ data_sin_new = eval((2*Math.pow(10,pow_lg)+data_sin_new*Math.pow(10,pow_lg))/Math.pow(10,pow_lg));} }
}

if(sin_a == "tan"){ 
data_sin_new = data_sin_new_n;
if(data_sin_new >=0 && data_sin_new<=0.5){ data_sin_new = data_sin_new;} if(data_sin_new >0.5 && data_sin_new<=1){ data_sin_new = (data_sin_new-1);} 
if(data_sin_new <=0 && data_sin_new>=-0.5){ data_sin_new = data_sin_new;} if(data_sin_new <-0.5 && data_sin_new>=-1){ data_sin_new = (data_sin_new+1);} 
}

var str_1 = str_1.substring(0 ,(BB[i][0]+3))+ data_sin_new + str_1.substring(BB[i+1][0] ,str_1_lg); 
} } } if((sin_a=="sin\("|| sin_a=="cos\(" || sin_a=="tan\(") && (pi_a=="°\)")){ var CC = m_str_spc_index_m_2_st(str_1,sin_a,"°)");}
else { var CC =[];}

if( CC.length !==0){ 

for(var i= (CC.length-2) ;i >=0 ; i--){ 
if(CC[i][1]== sin_a && CC[i+1][1]== "°)"){

var data_sin_new = str_1.substring(CC[i][0]+4,CC[i+1][0]); var sinpib=CC[i][0];
var sinpia=CC[i+1][0];

if((sinpia-sinpib) == 4){ data_sin_new =1; return str_1;} if(data_sin_new =="-"){ data_sin_new =-1; return str_1;} 

var nub_add = m_str_spc_count(data_sin_new,"+"); if(data_sin_new.substr(0,1) =="-" && data_sin_new.length >1 ){
var data_sin_new_1=data_sin_new.substr(1,data_sin_new.length -1); var nub_sub = m_str_spc_count(data_sin_new_1,"-"); 
}
else{ var nub_sub = m_str_spc_count(data_sin_new,"-");} 
var nub_mul = m_str_spc_count(data_sin_new,"*"); var nub_div = m_str_spc_count(data_sin_new,"/"); var nub_pow = m_str_spc_count(data_sin_new,"^"); var nub_sum_op = nub_add+nub_sub+nub_mul+nub_div+nub_pow;

if( nub_sum_op > 0 ){ return str_1; } 



var data_sin_new_p= m_nub_m(data_sin_new); data_sin_new_p=data_sin_new_p % 360; var data_sin_new_n= m_nub_p(data_sin_new); 

if(sin_a!="tan\("){

data_sin_new = data_sin_new_p + data_sin_new_n;
if(sin_a=="sin\("){ if(data_sin_new >=0 && data_sin_new<=90){ data_sin_new = data_sin_new;} if(data_sin_new >90 && data_sin_new<=180){ data_sin_new = (180-data_sin_new);} if(data_sin_new >180 && data_sin_new<=270){ data_sin_new = (180-data_sin_new);} if(data_sin_new >270 && data_sin_new<=360){ data_sin_new = data_sin_new-360;} if(data_sin_new <=0 && data_sin_new>=-90){ data_sin_new = data_sin_new;} if(data_sin_new <-90 && data_sin_new>=-180){ data_sin_new = (-180-data_sin_new);} if(data_sin_new <-180 && data_sin_new>=-270){ data_sin_new = (-180-data_sin_new);} if(data_sin_new <-270 && data_sin_new>=-360){ data_sin_new = 360+data_sin_new;} }
if(sin_a=="cos\("){ if(data_sin_new >=0 && data_sin_new<=90){ data_sin_new = data_sin_new;} if(data_sin_new >90 && data_sin_new<=180){ data_sin_new = data_sin_new;} if(data_sin_new >180 && data_sin_new<=270){ data_sin_new = (360-data_sin_new);} if(data_sin_new >270 && data_sin_new<=360){ data_sin_new = (360-data_sin_new);} if(data_sin_new <=0 && data_sin_new>=-90){ data_sin_new = -data_sin_new;} if(data_sin_new <-90 && data_sin_new>=-180){ data_sin_new = 180+data_sin_new ;} if(data_sin_new <-180 && data_sin_new>=-270){ data_sin_new = 360+data_sin_new;} if(data_sin_new <-270 && data_sin_new>=-360){ data_sin_new = 360+data_sin_new;} }
}

if(sin_a == "tan\("){ data_sin_new_p=data_sin_new_p % 180;
data_sin_new = data_sin_new_p + data_sin_new_n;
if(data_sin_new >=0 && data_sin_new<=90){ data_sin_new = data_sin_new;} if(data_sin_new >90 && data_sin_new<=180){ data_sin_new = (data_sin_new-180);} 
if(data_sin_new <=0 && data_sin_new>=-90){ data_sin_new = data_sin_new;} if(data_sin_new <-90 && data_sin_new>=-180){ data_sin_new = (data_sin_new+180);} 
} 




var str_1 = str_1.substring(0 ,(CC[i][0]+4))+ data_sin_new + str_1.substring(CC[i+1][0] ,str_1_lg); 
} } } 

if((sin_a=="sin"|| sin_a=="cos" || sin_a=="tan") && (pi_a=="°")){
var DD = m_str_spc_index_m_2_sp(str_1,sin_a,"°");}
else { var DD =[];}
if(DD.length !=0){
for(var i= (DD.length-2) ;i >=0 ; i--){ if(DD[i][1]== sin_a && DD[i+1][1]== "°"){
var data_sin_new = str_1.substring(DD[i][0]+3,DD[i+1][0]); var sinpib=DD[i][0];
var sinpia=DD[i+1][0];

if((sinpia-sinpib) == 3){ data_sin_new =1; return str_1;} if(data_sin_new =="-"){ data_sin_new =-1; return str_1;} 
var nub_add = m_str_spc_count(data_sin_new,"+"); 
if(data_sin_new.substr(0,1) =="-" && data_sin_new.length >1 ){
var data_sin_new_1=data_sin_new.substr(1,data_sin_new.length -1); var nub_sub = m_str_spc_count(data_sin_new_1,"-"); 
}
else{ var nub_sub = m_str_spc_count(data_sin_new,"-");} var nub_mul = m_str_spc_count(data_sin_new,"*"); var nub_div = m_str_spc_count(data_sin_new,"/"); var nub_pow = m_str_spc_count(data_sin_new,"^"); var nub_sum_op = nub_add+nub_sub+nub_mul+nub_div+nub_pow;
if( nub_sum_op > 0 ){ return str_1; } 

var data_sin_new_p= m_nub_m(data_sin_new); 
data_sin_new_p=data_sin_new_p % 360; var data_sin_new_n= m_nub_p(data_sin_new); 


if(sin_a !="tan"){
data_sin_new = data_sin_new_p + data_sin_new_n;
if(sin_a=="sin"){ if(data_sin_new >=0 && data_sin_new<=90){ data_sin_new = data_sin_new;} if(data_sin_new >90 && data_sin_new<=180){ data_sin_new = (180-data_sin_new);} if(data_sin_new >180 && data_sin_new<=270){ data_sin_new = (180-data_sin_new);} if(data_sin_new >270 && data_sin_new<=360){ data_sin_new = data_sin_new-360;} if(data_sin_new <=0 && data_sin_new>=-90){ data_sin_new = data_sin_new;} if(data_sin_new <-90 && data_sin_new>=-180){ data_sin_new = (-180-data_sin_new);} if(data_sin_new <-180 && data_sin_new>=-270){ data_sin_new = (-180-data_sin_new);} if(data_sin_new <-270 && data_sin_new>=-360){ data_sin_new = 360+data_sin_new;} }
if(sin_a=="cos"){ if(data_sin_new >=0 && data_sin_new<=90){ data_sin_new = data_sin_new;} if(data_sin_new >90 && data_sin_new<=180){ data_sin_new = data_sin_new;} if(data_sin_new >180 && data_sin_new<=270){ data_sin_new = (360-data_sin_new);} if(data_sin_new >270 && data_sin_new<=360){ data_sin_new = (360-data_sin_new);} if(data_sin_new <=0 && data_sin_new>=-90){ data_sin_new = -data_sin_new;} if(data_sin_new <-90 && data_sin_new>=-180){ data_sin_new = 180+data_sin_new ;} if(data_sin_new <-180 && data_sin_new>=-270){ data_sin_new = 360+data_sin_new;} if(data_sin_new <-270 && data_sin_new>=-360){ data_sin_new = 360+data_sin_new;} }
}
if(sin_a == "tan"){ data_sin_new_p=data_sin_new_p % 180;
data_sin_new = data_sin_new_p + data_sin_new_n;
if(data_sin_new >=0 && data_sin_new<=90){ data_sin_new = data_sin_new;} if(data_sin_new >90 && data_sin_new<=180){ data_sin_new = (data_sin_new-180);} 
if(data_sin_new <=0 && data_sin_new>=-90){ data_sin_new = data_sin_new;} if(data_sin_new <-90 && data_sin_new>=-180){ data_sin_new = (data_sin_new+180);} 
} 
var str_1 = str_1.substring(0 ,(DD[i][0]+3))+ data_sin_new + str_1.substring(DD[i+1][0] ,str_1_lg); 
} } } 

return str_1;
}
function m_str_spc_end(str,spec){ var str_1 = str;
var spec_1 = spec;
var str_1_lg = str_1.length;
var spec_1_lg = spec_1.length;
var str_ref="";
for(var i=(str_1_lg-spec_1_lg);i<str_1_lg;i=(i+spec_1_lg)){

var str_ref= str_1.substr(i,spec_1_lg) ;
if(str_ref == spec_1){

return 1; } 
else{ 

return 0 ;} 
}

}
function m_fact_many(str){ var str_1 = str;
var nub_1 = m_str_spc_count(str_1,'!'); for(var i=0; i< nub_1 ; i++){
str_1 = m_fact(str_1); }
return str_1;
}
function m_star_many(str){ 
var str_1 = str;

var nub_1 = m_str_spc_count(str_1,"π"); for(var i=0; i< nub_1 ; i++){
str_1 = m_star(str_1); }
str_1 = str_1.replace( /pi/g, "π") ; return str_1;
}
function m_star_deg_many(str){ var str_1 = str;

var nub_1 = m_str_spc_count(str_1,"°"); for(var i=0; i< nub_1 ; i++){
str_1 = m_star_deg(str_1); 
}
str_1 = str_1.replace( /deg/g, "°") ; return str_1;
}
function m_fun_aft_many(str,spec1,spec2){ var str_1=str;
var spec_1=spec1;
var spec_2=spec2;
var nub_1 = m_str_spc_count(str_1,spec_1); for(var i=0; i< nub_1 ; i++){
str_1 = m_fun_aft(str_1,spec_1,spec_2); }
return str_1;
}
function m_hat_bf_aft_many(str,spec1,spec2){ var str_1=str;
var spec_1=spec1;
var spec_2=spec2;
var nub_1 = m_str_spc_count(str_1,spec_1); 
for(var i=0; i< nub_1 ; i++){
str_1 = m_hat_bf_aft(str_1,spec_1,spec_2); }

return str_1;

}
function m_str_b_sec(str,spec){ var str_1 = str;
var spec_1 = spec;
var index_a= m_str_spc_index(str_1,spec_1); 
var str_b_part=str_1.substr(0 ,index_a);

return str_b_part;
}
function m_str_math_replacec(this_it){ var this_it_a = this_it;
this_it_a = this_it_a.toLowerCase(); this_it_a = m_fun_aft_many(this_it_a ,' ',''); this_it_a = m_fun_aft_many(this_it_a ,'asinh','azh'); this_it_a = m_fun_aft_many(this_it_a ,'asin','azz'); this_it_a = m_fun_aft_many(this_it_a ,'sinh','zzh'); this_it_a = m_fun_aft_many(this_it_a ,'sin','zzz'); this_it_a = m_fun_aft_many(this_it_a ,'acosh','ayh'); this_it_a = m_fun_aft_many(this_it_a ,'acos','ayy'); this_it_a = m_fun_aft_many(this_it_a ,'cosh','yyh'); this_it_a = m_fun_aft_many(this_it_a ,'cos','yyy'); this_it_a = m_fun_aft_many(this_it_a ,'atanh','axh'); this_it_a = m_fun_aft_many(this_it_a ,'atan','axx'); this_it_a = m_fun_aft_many(this_it_a ,'tanh','xxh'); this_it_a = m_fun_aft_many(this_it_a ,'tan','xxx'); this_it_a = this_it_a.replace(/azh/g , "m_asinh"); this_it_a = this_it_a.replace(/azz/g , "m_asin"); this_it_a = this_it_a.replace(/zzh/g , "m_sinh"); this_it_a = this_it_a.replace(/zzz/g , "m_sin"); this_it_a = this_it_a.replace(/ayh/g , "m_acosh"); this_it_a = this_it_a.replace(/ayy/g , "m_acos"); this_it_a = this_it_a.replace(/yyh/g , "m_cosh"); this_it_a = this_it_a.replace(/yyy/g , "m_cos"); this_it_a = this_it_a.replace(/axh/g , "m_atanh"); this_it_a = this_it_a.replace(/axx/g , "m_atan"); this_it_a = this_it_a.replace(/xxh/g , "m_tanh"); this_it_a = this_it_a.replace(/xxx/g , "m_tan"); this_it_a = m_fun_aft_many(this_it_a ,'exp','eee'); this_it_a = this_it_a.replace(/eee/g , "m_exp"); this_it_a = m_fun_aft_many(this_it_a ,'ln','nnn'); this_it_a = this_it_a.replace(/nnn/g , "m_ln"); this_it_a = m_fun_aft_many(this_it_a ,'log','ggg'); this_it_a = this_it_a.replace(/ggg/g , "m_log"); this_it_a = m_fact_many(this_it_a); this_it_a = m_star_many(this_it_a); this_it_a = this_it_a.replace(/π/g , "(31415926535897932.3846/10000000000000000) "); this_it_a = this_it_a.replace(/\/1°/g , "*100000000*5729577951.308232087680/10000000000000000 "); this_it_a = this_it_a.replace(/\/°/g , "*100000000*5729577951.308232087680/10000000000000000 "); this_it_a = m_star_deg_many(this_it_a); 
this_it_a = this_it_a.replace(/°/g , "(1745329251994329.577/100000000000000000) "); this_it_a = m_hat_bf_aft_many(this_it_a ,'^','hhh');
this_it_a = this_it_a.replace(/hhh/g , "m_pow"); this_it_a = m_replace_star(this_it_a) ; return this_it_a;
}

function cursor_sec_recal_t( ){ 
var str_a = cursor_re_start(1); var str_b = cursor_re_start(2); var str_c = cursor_re_start(3); 
var new_str ="";
var str_2_0_1 = m_str_b_sec(str_b,"<--"); var str_2_0_2 = m_str_b_sec(str_b,"="); 
if(str_2_0_1.length >0){
var str_2_0=str_2_0_1;}
else{
var str_2_0=str_2_0_2;}

var str_2_0_r = m_str_math_replacec(str_2_0); var str_2_0_r_ans = eval(str_2_0_r); 
if( str_2_0_r_ans >=0 || str_2_0_r_ans < 0){ 
var new_str = str_a+str_2_0.trim()+"="+str_2_0_r_ans.toString().trim()+";"+str_c ;
document.getElementById('input').value = ""; document.getElementById('input').value = new_str;
}
else {

str_2_0_r_ans = m_str_spc_inter( str_2_0_r_ans,"<",">"); document.getElementById('input').value = ""; 
document.getElementById('input').value = str_a+str_2_0 ;
newline_1(); document.getElementById('input').value += str_2_0_r_ans+";" +str_c ; 

}


}
function m_oct_nb(str_a) { 
var stra=str_a;
var lg=stra.length;


for(var i=0;i<(lg-1);i++){
var char_1= stra.toString().substr(0,1); var char_2= stra.toString().substr(1,1); 

var index_1= m_str_spc_index(stra,"1") ; var index_2= m_str_spc_index(stra,"2") ; var index_3= m_str_spc_index(stra,"3") ; var index_4= m_str_spc_index(stra,"4") ; var index_5= m_str_spc_index(stra,"5") ; var index_6= m_str_spc_index(stra,"6") ; var index_7= m_str_spc_index(stra,"7") ; var index_8= m_str_spc_index(stra,"8") ; var index_9= m_str_spc_index(stra,"9") ; 

if(char_1=="0" && (index_1==1 || index_2==1 ||index_3==1 || index_4==1 ||index_5==1 || index_6==1 ||index_7==1 || index_8==1 ||index_9==1 || char_2=="0" )){ 
var stra=stra.substring(1,lg);} 

}
var lg=stra.length; 

for(var i=0;i<(lg-1);i++){
var stra =m_replace(stra ,"+00" ,"+0" ) ; var stra =m_replace(stra ,"+01" ,"+1" ) ; var stra =m_replace(stra ,"+02" ,"+2" ) ; var stra =m_replace(stra ,"+03" ,"+3" ) ; var stra =m_replace(stra ,"+04" ,"+4" ) ; var stra =m_replace(stra ,"+05" ,"+5" ) ; var stra =m_replace(stra ,"+06" ,"+6" ) ; var stra =m_replace(stra ,"+07" ,"+7" ) ; var stra =m_replace(stra ,"+08" ,"+8" ) ; var stra =m_replace(stra ,"+09" ,"+9" ); var stra =m_replace(stra ,"-00" ,"-0" ) ; var stra =m_replace(stra ,"-01" ,"-1" ) ; var stra =m_replace(stra ,"-02" ,"-2" ) ; var stra =m_replace(stra ,"-03" ,"-3" ) ; var stra =m_replace(stra ,"-04" ,"-4" ) ; var stra =m_replace(stra ,"-05" ,"-5" ) ; var stra =m_replace(stra ,"-06" ,"-6" ) ; var stra =m_replace(stra ,"-07" ,"-7" ) ; var stra =m_replace(stra ,"-08" ,"-8" ) ; var stra =m_replace(stra ,"-09" ,"-9" ) ; var stra =m_replace(stra ,"*00" ,"*0" ) ; var stra =m_replace(stra ,"*01" ,"*1" ) ; var stra =m_replace(stra ,"*02" ,"*2" ) ; var stra =m_replace(stra ,"*03" ,"*3" ) ; var stra =m_replace(stra ,"*04" ,"*4" ) ; var stra =m_replace(stra ,"*05" ,"*5" ) ; var stra =m_replace(stra ,"*06" ,"*6" ) ; var stra =m_replace(stra ,"*07" ,"*7" ) ; var stra =m_replace(stra ,"*08" ,"*8" ); var stra =m_replace(stra ,"*09" ,"*9" ) ; var stra =m_replace(stra ,"/00" ,"/0" ) ; var stra =m_replace(stra ,"/01" ,"/1" ); var stra =m_replace(stra ,"/02" ,"/2" ) ; var stra =m_replace(stra ,"/03" ,"/3" ) ; var stra =m_replace(stra ,"/04" ,"/4" ) ; var stra =m_replace(stra ,"/05" ,"/5" ) ; var stra =m_replace(stra ,"/06" ,"/6" ) ; var stra =m_replace(stra ,"/07" ,"/7" ) ; var stra =m_replace(stra ,"/08" ,"/8" ) ; var stra =m_replace(stra ,"/09" ,"/9" ) ; var stra =m_replace(stra ,"^00" ,"^0" ); var stra =m_replace(stra ,"^01" ,"^1" ); var stra =m_replace(stra ,"^02" ,"^2" ); var stra =m_replace(stra ,"^03" ,"^3" ); var stra =m_replace(stra ,"^04" ,"^4" ) ; var stra =m_replace(stra ,"^05" ,"^5" ); var stra =m_replace(stra ,"^06" ,"^6" ); var stra =m_replace(stra ,"^07" ,"^7" ) ; var stra =m_replace(stra ,"^08" ,"^8" ); var stra =m_replace(stra ,"^09" ,"^9" ); var stra =m_replace(stra ,"(00" ,"(0" ) ; var stra =m_replace(stra ,"(01" ,"(1" ) ; var stra =m_replace(stra ,"(02" ,"(2" ); var stra =m_replace(stra ,"(03" ,"(3" ); var stra =m_replace(stra ,"(04" ,"(4" ) ; var stra =m_replace(stra ,"(05" ,"(5" ) ; var stra =m_replace(stra ,"(06" ,"(6" ) ; var stra =m_replace(stra ,"(07" ,"(7" ) ; var stra =m_replace(stra ,"(08" ,"(8" ) ; var stra =m_replace(stra ,"(09" ,"(9" ); var stra =m_replace(stra ,"(-00" ,"(-0" ); var stra =m_replace(stra ,"(-01" ,"(-1" ); var stra =m_replace(stra ,"(-02" ,"(-2" ) ; var stra =m_replace(stra ,"(-03" ,"(-3" ); var stra =m_replace(stra ,"(-04" ,"(-4" ) ; var stra =m_replace(stra ,"(-05" ,"(-5" ) ; var stra =m_replace(stra ,"(-06" ,"(-6" ) ; var stra =m_replace(stra ,"(-07" ,"(-7" ); var stra =m_replace(stra ,"(-08" ,"(-8" ) ; var stra =m_replace(stra ,"(-09" ,"(-9" ) ; 
}
return stra ;

}
function m_abs(x){ var ans_1 = x ;
if(ans_1 < 0 ){ 
ans_1= ans_1*(-1);
}
return ans_1; 
}
function m_sing(nub){ var nn = nub;
var res = nn % 2;
return res; 
}
function m_sgn(base,p){ var bb = base ;
var pp = p ;
var rr = m_sing(pp);
var ans_1 = -1;
if(bb==-1 && rr==0){
ans_1 = 1;
}

return ans_1; 
}
function m_cut_nub_m(nub){ var nn = m_abs(nub); var nn_lg = nn.toString().length; 
var count_p =0 ; 
for(var i =0 ; i < (nn_lg) ; i++){
if(nn >=1 ){
count_p =count_p +1;
nn = nn/10;
}
}
if(nub < 0 ){count_p = count_p +1;} 
return count_p; 
}
function m_cut_nub_p(nub){ var nn=nub;
var nn_lg = nn.toString().trim().length; var nn_m = m_cut_nub_m(nub); 
var count_p = nn_lg - nn_m -1 ; 
return count_p; 
}
function m_nub_m(nub){ var nn = nub; 
var mb = m_cut_nub_m(nn); if(nn<0){mb=mb+1;} var ans_1= nn.toString().substr(0,mb);

ans_1=Number(ans_1);

return ans_1; 

}
function m_nub_p(nub){ var nn = nub;
var mm = m_nub_m(nn); 
var ans_1= nn - mm ;

var power_n = m_cut_nub_p(nn) ;
var data_n=Math.pow(10,power_n);
ans_1 = Math.round(ans_1*data_n)/data_n ;

return ans_1; 

}
function m_round(nub){ var nub_a=nub;
var nub_m= m_nub_m(nub_a); var nub_p= m_abs(m_nub_p(nub_a)); 
var ans_1=0;
if( nub_m >0 && nub_p >=0.5){ ans_1=nub_m+1; }
if( nub_m >0 && nub_p < 0.5){ ans_1=nub_m ; }
if( nub_m <0 && nub_p >=0.5){ ans_1=nub_m-1; }
if( nub_m <0 && nub_p < 0.5){ ans_1=nub_m; }
return ans_1; 
}
function m_nub_pit_1(pit_n){ var pit_a = m_abs(pit_n); 
var ans_1=1;

if(pit_n > 0){
for(var i=0 ; i< pit_a ;i++){
ans_1=ans_1*10 ;
}
}
if(pit_n < 0){
for(var j=0 ; j< pit_a ;j++){
ans_1=ans_1 / 10 ;
}
}

return ans_1; 
}
function m_series_e(base){ var z_a = base; var nn=100; var item_a=1 ;
var sum_a =1;
for(var i=1; i<nn ;i++){
item_a=item_a * (-(z_a/i));

sum_a = sum_a+item_a;
}
return sum_a; 
}
function m_series_ln_a_z(base){ var z_a = base-1; var nn=100; var item_a=0 ;
var sum_a =0;
for(var i=1; i< nn ;i++){

item_a= (-1)*m_pow_m(-1,i) * m_pow_m(z_a,i)/i; 
sum_a = sum_a+item_a;
}

return sum_a; 
}
function m_pow_m(base,pit_n){ var base_a=m_abs(base);
var base_i = base; var base_p = m_nub_p(base_a); var pit_a=m_abs(pit_n);
var pit_sta=m_abs(pit_n);
var pit_i=pit_n; var base_2=0;
var base_4=0;
var base_5=0;
var base_10=0;
var base_20=0;
var base_40=0;
var base_50=0;
var base_100=0;
var base_200=0;
var base_400=0;
var base_800=0;
var base_1600=0;
var base_tot =1;
for(var i=0; i<12 ;i++){ if(pit_a >=2 ) { var base_2=base_a*base_a ;
}
if(pit_a >=4 ) { var base_4=base_2*base_2 ;
}
if(pit_a >=5 ) { var base_5=base_a*base_4 ;
}
if(pit_a >=10 ) { var base_10=base_5*base_5 ;
}
if(pit_a >=20 ) { var base_20=base_10*base_10 ;
}
if(pit_a >=30 ) { var base_30=base_20*base_10 ;
}
if(pit_a >=40 ) { var base_40=base_20*base_20 ;
}
if(pit_a >=50 ) { var base_50=base_40*base_10 ;
}
if(pit_a >=100 ) { var base_100=base_50*base_50 ;
}
if(pit_a >=200 ) { var base_200=base_100*base_100 ;
}
if(pit_a >=400 ) { var base_400=base_200*base_200 ;
}
if(pit_a >=800 ) { var base_800=base_400*base_400 ;
}
if(pit_a >=1600 ) { var base_1600=base_800*base_800 ;
}
}


if(pit_a >=1600 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_1600 ;

var pit_a = pit_a-1600;
if(pit_a < 1600 ){ j=pit_sta ;} }
}

if(pit_a >=800 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_800 ;

var pit_a = pit_a-800;
if(pit_a < 800 ){ j=pit_sta ;} }
}
if(pit_a >=400 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_400 ;

var pit_a = pit_a-400;
if(pit_a < 400 ){ j=pit_sta ;} }
}
if(pit_a >=200 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_200 ;

var pit_a = pit_a-200;
if(pit_a < 200 ){ j=pit_sta ;} }
}
if(pit_a >=100 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_100 ;

var pit_a = pit_a-100;
if(pit_a < 100 ){ j=pit_sta ;} }
}
if(pit_a >=50 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_50 ;

var pit_a = pit_a-50;
if(pit_a < 50 ){ j=pit_sta ;} }
}
if(pit_a >=30 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_30 ;

var pit_a = pit_a-30;
if(pit_a < 30 ){ j=pit_sta ;} }
}
if(pit_a >=10 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_10 ;

var pit_a = pit_a-10;
if(pit_a < 10 ){ j=pit_sta ;} }
}

if(pit_a >=5 ){ 
for(var j=0; j< pit_a ;j++){ var base_tot= base_tot* base_5 ;

var pit_a = pit_a-5;
if(pit_a < 5 ){ j = pit_sta ;} }
}
if(pit_a < 5 ){ 

for(var j=0; j< pit_a ;j++){ 
var base_tot= base_tot* base_a ;

}
} 

if(base_i > 0 && pit_i < 0 ){
var base_tot= 1/base_tot ; }

if((base_i < 0 && pit_i > 0) && (pit_sta%2 !=0)){ 
var base_tot= - base_tot ; }

if(base_i < 0 && pit_i > 0 && (pit_sta % 2) ==0){ 
var base_tot= base_tot ; }
if(base_i < 0 && pit_i < 0 && (pit_sta % 2) !=0){
var base_tot= - 1/base_tot ; }
if(base_i < 0 && pit_i < 0 && (pit_sta % 2) ==0){
var base_tot= 1/base_tot ; }

return base_tot;
}
function m_fixed(nub,pit_n){ 
var nub_a = nub;
var pit_a = pit_n;

var nub_a_s =nub_a.toString().trim();

var nub_a_s_lg = nub_a_s.length;
var index_pit_a= m_str_spc_index(nub_a_s,"."); var index_e = m_str_spc_index(nub_a_s,"e"); var new_nub_a_s = "";
var next_nub = ""; 
if(index_e==0 && index_pit_a ==0 ){ if( nub_a_s_lg >= 17 && nub_a >=0){
var data_def= nub_a_s_lg-16;

new_nub_a_s= nub_a_s.substr(0,1)+"."+nub_a_s.substr(1,pit_n)+"e+"+(data_def+16-1);
return new_nub_a_s;

}


if(nub_a_s_lg >= 18 && nub_a < 0){
var data_def= nub_a_s_lg-17;

new_nub_a_s="-"+nub_a_s.substr(1,1)+"."+nub_a_s.substr(2,pit_n)+"e+"+(data_def+16-1);
return new_nub_a_s ; }


if((nub_a_s_lg < 17 && nub_a >=0)||(nub_a_s_lg < 18 && nub_a < 0)) {
new_nub_a_s=nub_a;}
}
if(index_e==0 && index_pit_a !=0 ){ var shift_a = index_pit_a+pit_a+1;
next_nub = nub_a_s.substr(shift_a,1);

var next_nub= Number(next_nub);
if( next_nub >4 && nub_a>0){ nub_a_str=nub_a.toString();

nub_a = parseFloat(nub_a_str.substr(0,shift_a)) +m_pow_m(0.1,pit_a); 
}
if( next_nub >4 && nub_a< 0){ 
nub_a_str=nub_a.toString();

nub_a = parseFloat(nub_a_str.substr(0,shift_a)) -m_pow_m(0.1,pit_a); 
}



nub_a_s =nub_a.toString().trim();
new_nub_a_s =nub_a_s.substr(0,shift_a);

}
if(index_e != 0 && (index_e-index_pit_a-1-pit_a) >0 ){ var shift_a = index_pit_a+pit_a+1;

next_nub = nub_a_s.substr(shift_a,1);
var next_nub= Number(next_nub);

var nub_a_p = nub_a_s.substr(0,shift_a); if( next_nub >4 && nub_a>0){ 
nub_a_p = Number(nub_a_p);
nub_a_p_str=nub_a_p.toString();
nub_a_p = parseFloat(nub_a_p_str.substr(0,shift_a)) +m_pow_m(0.1,pit_a); }

if( next_nub >4 && nub_a<0){ 
nub_a_p = Number(nub_a_p);
nub_a_p_str=nub_a_p.toString();
nub_a_p = parseFloat(nub_a_p_str.substr(0,shift_a)) -m_pow_m(0.1,pit_a); }
nub_a_p =nub_a_p.toString().trim();
new_nub_a_s =nub_a_p+nub_a_s.substr(index_e,(nub_a_s_lg-index_e)); 

}

if(index_e != 0 && (index_e-index_pit_a-1-pit_a) <= 0 ){ 
new_nub_a_s = nub_a_s; }
var new_nub = Number(new_nub_a_s);

return new_nub;
}
function m_c_fixed(nub_1,nub_2,end_nub){ var nub_a=nub_1;
var nu2_0=nub_2;
var nub_c=end_nub;
var nub_a_s =nub_a.toString().trim();
var nub_a_s_lg = nub_a_s.length;
var nu2_0_s =nu2_0.toString().trim();
var nu2_0_s_lg = nu2_0_s.length;
var lg=nub_a_s_lg+nu2_0_s_lg;

var new_nub = m_fixed(nub_c,lg); return new_nub;
}
function m_delay_1(){
var d1= new Date();
var tc = d1.getMilliseconds();
return tc; 
}
function m_delay_ms(ms){
var data_a = new Date();
var cur_date =null;
do{cur_date =new Date();}
while((cur_date -data_a) < ms ){}

}
function m_add(a_nub,b_nub){ var nub_a = a_nub.toString(); var nub_b = b_nub.toString(); var nub_a_m = m_nub_m(a_nub) ; var nub_a_p = m_nub_p(a_nub) ; var nub_b_m = m_nub_m(nub_b) ; var nub_b_p = m_nub_p(nub_b) ; var nub_a_m_lg = nub_a_m.toString().length; var nub_a_p_lg = nub_a_p.toString().length;
if(nub_a_m_lg >=20 || nub_a_p_lg >=20 ){ return "over 20 " ;} var nub_b_m_lg = nub_b_m.toString().length; var nub_b_p_lg = nub_b_p.toString().length;


var A = m_new_mtx(3,6);
if(nub_a_m_lg >14){
A[0][0] = nub_a_m.toString().substr(0,nub_a_m_lg-14); A[0][1] = nub_a_m.toString().substr(nub_a_m_lg-14,7); A[0][2] = nub_a_m.toString().substr(nub_a_m_lg-7,7);} if(nub_a_m_lg < 14){ A[0][0] = 0;} if(nub_a_m_lg >7 && nub_a_m_lg <=14){
A[0][0] = 0; A[0][1] = nub_a_m.toString().substr(0,nub_a_m_lg-7); A[0][2] = nub_a_m.toString().substr(nub_a_m_lg-7,7);} if(nub_a_m_lg < 7){ A[0][1] = 0;} if(nub_a_m_lg >0 && nub_a_m_lg <=7){
A[0][0] = 0; A[0][1] = 0; A[0][2] = nub_a_m.toString().substr(0,nub_a_m_lg);} 
if(nub_a_p_lg >16){ A[0][4] = nub_a_p.toString().substr(2,7); A[0][5] = nub_a_p.toString().substr(9,7); A[0][6] = nub_a_p.toString().substring(16,nub_a_p_lg);} if(nub_a_p_lg < 16){ A[0][6] = 0;} if(nub_a_p_lg >9 && nub_a_p_lg <=16){
A[0][4] = nub_a_p.toString().substr(2,7); A[0][5] = nub_a_p.toString().substring(9,nub_a_p_lg); A[0][6] = 0 ;} 
if(nub_a_p_lg < 9 && nub_a_p_lg > 2){ A[0][5] = 0;} if(nub_a_p_lg >2 && nub_a_p_lg <=9){
A[0][4] = nub_a_p.toString().substring(2,nub_a_p_lg); A[0][5] = 0; A[0][6] = 0;} if(nub_a_p_lg == 0 ){ A[0][4] =0;}
if(nub_b_m_lg >14){
A[1][0] = nub_b_m.toString().substr(0,nub_b_m_lg-14); A[1][1] = nub_b_m.toString().substr(nub_b_m_lg-14,7); A[1][2] = nub_b_m.toString().substr(nub_b_m_lg-7,7);} if(nub_b_m_lg < 14){ A[1][0] = 0;} if(nub_b_m_lg >7 && nub_b_m_lg <=14){
A[1][0] = 0; A[1][1] = nub_b_m.toString().substr(0,nub_b_m_lg-7); A[1][2] = nub_b_m.toString().substr(nub_b_m_lg-7,7);} if(nub_b_m_lg < 7){ A[1][1] = 0;} if(nub_b_m_lg >0 && nub_b_m_lg <=7){
A[1][0] = 0; A[1][1] = 0; A[1][2] = nub_b_m.toString().substr(0,nub_b_m_lg);} if(nub_b_p_lg >16){ A[1][4] = nub_b_p.toString().substr(2,7); A[1][5] = nub_b_p.toString().substr(9,7); A[1][6] = nub_b_p.toString().substring(16,nub_b_p_lg);} if(nub_b_p_lg < 16){ A[1][6] = 0;} if(nub_b_p_lg >9 && nub_b_p_lg <=16){
A[1][4] = nub_b_p.toString().substr(2,7); A[1][5] = nub_b_p.toString().substring(9,nub_b_p_lg); A[1][6] = 0 ;} 
if(nub_b_p_lg < 9 && nub_b_p_lg > 2){ A[1][5] = 0;} if(nub_b_p_lg >2 && nub_b_p_lg <=9){
A[1][4] = nub_b_p.toString().substring(2,nub_b_p_lg); A[1][5] = 0; A[1][6] = 0;} if(nub_b_p_lg == 0 ){ A[1][4] =0;}
if(a_nub < 0){
for(var i=0;i<6;i++){
A[0][i]= A[0][i]*(-1);}
}
if(b_nub < 0){
for(var j=0;j<6;j++){
A[1][j]= A[1][j]*(-1);}
}
for(var n=0;n<6;n++){
A[2][n]= parseInt(A[0][n])+parseInt(A[1][n]) ;} 
return A;
}
function s_chang_hidden_array(array_1){ var array_a = array_1;
var array_a_lg = array_a.length;
var array_nb="";
for(var i=0; i< array_a_lg ; i++){
array_nb=array_a[i];

s_chang_hidden_nub(array_nb);
}
}
function s_chang_hidden_nub(nub_1){ var nub_a = nub_1;
document.getElementById(nub_a).disabled=true; document.getElementById(nub_a).style.opacity=0.5;
}

function s_nub_array(nub_1){ var nub_a=nub_1;
var array_a=[];
s_chang_visible_all(); 

switch(nub_a){
case "1_0":
array_a=["1_0","1_1","1_2","1_4","2_0","5_1","5_5"];
break;
case "1_1":
array_a=["1_0","1_1","1_4","1_5","1_6","1_2","2_0","2_2","2_3","2_4","2_5","2_6","3_2","3_3","3_4","3_5","3_6","4_2","4_3","4_4","4_5","4_6","5_1","5_2","5_4","5_5","5_6"];
break;
case "1_2":
array_a=["1_0","1_1","1_4","1_2","2_0","2_1","2_3","2_4","2_5","3_1","2_2","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];
break;
case "1_3":

array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1","5_2","5_5"];
break;

case "1_4":

array_a=["1_5","1_6","2_6","4_6","5_1","5_2","5_6"];
break;
case "1_5":
array_a=["1_1","1_2","1_4","2_0","2_1","2_2","2_3","2_4","2_5","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];

break;

case "1_6":
array_a=["1_2","1_5","1_6","2_6","4_6","5_1","5_2","5_6"];
break;
case "2_0":
array_a=["1_0","1_1","1_2","1_4","2_0","5_1","5_5"];
break;
case "2_1":
array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2","5_6"];
break;
case "2_2":
array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_1"];
break;
case "2_3": array_a=["1_4","5_1"];
break;
case "2_4":
array_a=["1_4","5_1"];
break;
case "2_5":
array_a=["1_4","5_1"];
break;
case "2_6":
array_a=["1_2","1_5","1_6","2_6","4_6","5_1","5_6"];
break;


case "3_1":
array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2","5_6"];
break;
case "3_2":
array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_1","5_2","5_6"];
break;
case "3_3":
array_a=["1_4","5_1"];
break;
case "3_4":
array_a=["1_4","5_1"];
break;
case "3_5":
array_a=["1_4","5_1"];
break;
case "3_6":
array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1","5_6"];
break;

case "4_1":
array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2"];
break;

case "4_2":
array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_1","5_2","5_6"];
break;


case "4_3":
array_a=["1_4","5_1"];
break;
case "4_4":
array_a=["1_4","5_1"];
break;
case "4_5":
array_a=["1_4","5_1"];
break;
case "4_6":
array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1","5_6"];
break;

case "5_0": array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1","5_2","5_5"];
break;
case "5_1": 
array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2","5_6"];
break;
case "5_2":
array_a=["1_6","2_6","4_6","5_1","5_2","5_6"];
break;


case "5_3":
array_a=["1_5","1_6","2_6","4_6","5_1","5_2","5_5"];
break;
case "5_4":
array_a=["1_4","5_1"]; 

break;


case "5_5":
array_a=["1_1","1_0","1_2","1_4","2_0","2_1","2_2","3_1","3_2","4_1","4_2","5_1","5_2","5_5"];
break;
case "5_6":
array_a=["1_5","1_6","2_6","4_6","5_1","5_2","5_5"];
break; 


}


return array_a;
}
function s_map(item_1){
var item_a = item_1;
var item_a_p =item_a.substr(1,1); var A = m_new_mtx(5,7);
var B = m_new_mtx(5,7);
var T = m_new_mtx(5,7);
var item_map="" ;
var A=[["°","a","!","<=x","(",")","/"],
["π","sin","exp","7","8","9","*"],
["help","cos","ln","4","5","6","-"],
["open","tan","log","1","2","3","+"],
["←","h","^","ac","0",".","="]]; 
var B=[["1_0","1_1","1_2","1_3","1_4","1_5","1_6"],
["2_0","2_1","2_2","2_3","2_4","2_5","2_6"],
["3_0","3_1","3_2","3_3","3_4","3_5","3_6"],
["4_0","4_1","4_2","4_3","4_4","4_5","4_6"],
["5_0","5_1","5_2","5_3","5_4","5_5","5_6"]];

if( item_a_p =="_"){
T=A;
A=B;
B=T; } 
var lg_c=A[0].length; var lg_r=A.length; for(var i=0; i<lg_r;i++){
for(var j=0; j<lg_c;j++){
if( item_a== A[i][j]){ 

item_map=B[i][j] ;

} 

}
}

return item_map; 
}
function s_chang_visible_all(){

for(var i=1;i <= 5;i++){ for(var j=0;j <= 6;j++){ var item_n= i+"_"+j;
document.getElementById(item_n).disabled=false;

document.getElementById(item_n).style.opacity=1; }
}

}
function s_chang_sum(item){ s_chang_visible_all(); var item_1=item;
var item_a= s_map(item_1); var array_a = s_nub_array(item_a); s_chang_hidden_array(array_a); }
function s_check_nb(str){ var str_1=str;
var befor_a = m_str_spc_count(str_1,"("); var after_a = m_str_spc_count(str_1,")"); 

if( befor_a <=after_a){ 

}
}
function s_check_end(str){ var str_1=str;
var asin_1 = m_str_spc_end(str_1,"asin");
var acos_1 = m_str_spc_end(str_1,"acos");
var acosh_1 = m_str_spc_end(str_1,"acosh");
var atanh_1 = m_str_spc_end(str_1,"atanh");
var asin1_1 = m_str_spc_end(str_1,"asin1"); var acos1_1 = m_str_spc_end(str_1,"acos1");
var asin_1_1 = m_str_spc_end(str_1,"asin-1"); var acos_1_1 = m_str_spc_end(str_1,"acos-1");

var ln_0 = m_str_spc_end(str_1,"ln0"); var log_0 = m_str_spc_end(str_1,"log0"); 
var ln_1 = m_str_spc_end(str_1,"ln0."); var log_1 = m_str_spc_end(str_1,"log0."); 
var a_0=m_str_spc_end(str_1,"0"); var a_1=m_str_spc_end(str_1,"1"); var a_2=m_str_spc_end(str_1,"2"); var a_3=m_str_spc_end(str_1,"3"); var a_4=m_str_spc_end(str_1,"4"); var a_5=m_str_spc_end(str_1,"5"); var a_6=m_str_spc_end(str_1,"6"); var a_7=m_str_spc_end(str_1,"7"); var a_8=m_str_spc_end(str_1,"8"); var a_9=m_str_spc_end(str_1,"9"); var a_ =m_str_spc_end(str_1,"."); var array_a=[]; if(a_0==1 || a_1==1 || a_2==1 || a_3==1 ||a_4==1 || a_5==1 || a_6==1 || a_7==1 ||a_8==1 || a_9==1 || a_==1 ){ array_a=["1_1","2_1","2_2","3_1","3_2","4_1","4_2"]; }
if(asin_1==1 || acos_1==1 ){ array_a=["1_2","2_0","2_3","2_4","2_5","3_3","3_4","3_5","4_2","4_4","4_5"]; }
if(acosh_1==1 ){ array_a=["1_0","3_6","5_4","5_5"]; }
if(atanh_1==1 ){ array_a=["2_0","2_3","2_4","2_5","3_3","3_4","3_5","4_3","4_4","4_5",]; }
if(asin1_1==1 || acos1_1==1 ||asin_1_1==1 || acos_1_1==1){ array_a=["1_0","1_1","1_2","2_1","2_0","2_2","2_3","2_4","2_5","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_2","5_4","5_5"];
}

if(ln_0==1 || log_0==1 ){ array_a=["1_0","1_1","1_2","1_4","1_5","1_6","2_0","2_1","2_2","2_3","2_4","2_5","2_6","3_1","3_2","3_3","3_4","3_5","3_6","4_1","4_2","4_3","4_4","4_5","4_6","5_1","5_2","5_4"];
}
if(ln_1==1 || log_1==1 ){ 
array_a=["4_2","5_2"]; 
}
s_chang_hidden_array(array_a); }
function s_check_str_char(str,char_a ){ var str_1= str;
var str_lg = str_1.length;
var char_1=char_a;
var char_lg=char_1.length;
var A = m_new_mtx(1,str_lg); var data_a = -1;
var jj=0;

var data_count=0;
for(var i=0;i<str_lg;i++){
var data_a = str_1.indexOf(char_1,i);
if(data_a >=0){ A[0,jj]=data_a;
data_count=data_count+1;
jj=jj+1;

var i=data_a+(char_lg-1) ; }

}

return data_count ; }
function s_check_str_equal(str ){ var str_1=str;
var data_a = s_check_str_char(str_1,"=");
return data_a ; }
function s_check_str_equation(str ){ var str_1=str;
str_1 = str_1.replace(/m_asinh\(/g,''); str_1 = str_1.replace(/m_asin\(/g,''); str_1 = str_1.replace(/m_sinh\(/g,''); str_1 = str_1.replace(/m_sin\(/g,''); 
str_1 = str_1.replace(/m_acosh\(/g,''); str_1 = str_1.replace(/m_acos\(/g,''); str_1 = str_1.replace(/m_cosh\(/g,''); str_1 = str_1.replace(/m_cos\(/g,''); str_1 = str_1.replace(/m_atanh\(/g,''); str_1 = str_1.replace(/m_atan\(/g,''); str_1 = str_1.replace(/m_tanh\(/g,''); str_1 = str_1.replace(/m_tan\(/g,''); str_1 = str_1.replace(/m_n\(/g,''); str_1 = str_1.replace(/m_exp\(/g,''); str_1 = str_1.replace(/m_ln\(/g,''); str_1 = str_1.replace(/m_log\(/g,''); str_1 = str_1.replace(/m_pow\(/g,''); 
str_1 = str_1.replace(/\(/g,''); str_1 = str_1.replace(/\)/g,''); str_1 = str_1.replace(/\,/g,''); str_1 = str_1.replace(/0|1|2|3|4|5|6|7|8|9/g,''); 
str_1 = str_1.replace(/\+|\-|\*|\/|\./g,''); 
str_1=str_1.trim(); 

return str_1 ;
}
function m_new_mtx(rows,cols){
var A =new Array(rows); for(var m=0; m<A.length; m++){
A[m]= new Array(cols); } return A;
}
function calculate(item_1){
s_chang_visible_all(); var str_part_lg= string_lg_1(); var str_cursor_pos = cursor_position(); 
if(str_part_lg >str_cursor_pos){ 

cursor_sec_recal_t( ); } 
var item_a=calc.input.value; 
var it = calc.input.value;


var this_s = it.trim(); 


var this_it = m_del4_2f_char(it,';').trim(); 

var this_it = m_str_spc_inter_m_word_rp_sum(this_it); 
this_it = m_str_math_replacec(this_it); this_it = m_oct_nb(this_it); var data_chk1 = s_check_str_char(this_s,"(" ); var data_chk2 = s_check_str_char(this_s,")" ); 


if(data_chk1-data_chk2 !=0){
document.getElementById('input').value += " "+"<- error '(' != ')' ->" +";" ;
newline_1(); 
scroll_cursor();
return;
}
var data_equal = s_check_str_equal(this_it); if(data_equal > 0){
document.getElementById('input').value += " "+"<- error '= ' no supplore ->" + ";" ;
newline_1(); 
scroll_cursor();
return;
}
var data_equation = s_check_str_equation(this_it ); if(data_equation !="" || data_equation==null){
document.getElementById('input').value += " "+"<- error 'equation ' no supplore ->" + ";" ;
newline_1(); 
scroll_cursor(); 
return;
}



var this_data = eval(this_it); 



var this_data_abs=m_abs(this_data); 


var power_n = document.getElementById('input2').value;
var power_a = Number(power_n); 

if( eval(this_it)>=0 || eval(this_it) < 0){ 

document.getElementById('input').value = this_s.trim()+" = "+m_fixed(eval(this_it),power_a).toString() +";" ;

}
else {
var error_str =eval(this_it) ;

error_str = m_str_spc_inter_2word( error_str,"<","->"); 
document.getElementById('input').value = this_s.trim() ; 
document.getElementById('input').value += " "+error_str +";" ; 

}

newline_1();
s_chang_sum("="); 
scroll_cursor(); 


}

function str_inser(str ,index_it, wd){ var str=str ; var index_it=index_it; var wd = wd ; var str_leg = str.length;


var str_new=str.substr(0,index_it) +wd+ str.substr((index_it),str_leg);

return str_new ;
}

function str_wdnb(str,index_it){ var str=str ; var index_it=index_it; var str_leg = str.length;
var nb =0 ; 

for(var i=index_it; i<str_leg;i++){

var nb_new = str.substr(index_it,index_it+1) ;
if( (nb_new <=9 && nb_new>=0)||( nb_new =".") ||( nb_new ="π")){

nb=nb+1; }

}

return nb ;
}