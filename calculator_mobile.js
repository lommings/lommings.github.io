
 
var insert_flag="yes";   //旗標

var PI=3.14159265358979323846;
var SQRPI=1.77245385090551602730;
var RR=0.577215664901532860605129;
var LN2=0.69314718055994530942;
var LN3=1.09861228866810969140;
var LN10=2.30258509299404568402;
var E1=2.7182818284590452353602874;
var DEG=0.01745329251994329577;      //rad
var RAD=57.29577951308232087680;      //。 
var e=E1;
var max_st=[[biΝd]];
var π = 3.1415926535897932384623846;
var ln10 = 2.30258509299404568401799145468;
var ln2 = 0.693147180559945309417232121458 ;
var M =0.434294481903251827651128918917;  // M =log10e


 
  // //////////////////////////////////////////////////////classical model  "↓"



 function Math_c(){               //classical
      this.isTrue = true ;}
 
  Math_c.prototype.round = function(nub){     //round function

             //取 4佘 5 入  整數
   var nub_a=nub;
   var nub_m= m_nub_m(nub_a);      //取 point 前 整數部分 含 -符號
   var nub_p= m_abs(m_nub_p(nub_a));      //取 point 後 小數部分

 
   var ans_1=0;
    if( nub_m >0 && nub_p >=0.5){  ans_1=nub_m+1; }
    if( nub_m >0 && nub_p < 0.5){  ans_1=nub_m ; }
    if( nub_m <0 && nub_p >=0.5){  ans_1=nub_m-1; }
    if( nub_m <0 && nub_p < 0.5){  ans_1=nub_m; }

   
       return ans_1; 

}

var mc = new Math_c();   //class head 
  
// mc.round(nub) // 執行



  // ////////////////////////////////////////////////////////classical model  "↑"

  //  //////////////////////////////////////////////////////////////////////////   cursor  "↓" 遊標

   var display_width = 35;   //與設定有差異(35  )
   function doGetCaretPosition (ctrl) {
     
    	var CaretPos = 0;
    	// IE Support
    	if (document.selection) {
     
    		ctrl.focus ();
    		var Sel = document.selection.createRange ();
     
    		Sel.moveStart ('character', -ctrl.value.length);
     
    		CaretPos = Sel.text.length;
    	}
    	// Firefox support
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


 function string_lg(it){        //字串長度
        var this_it = it ;    

        var str_lg = this_it.length;

        return (str_lg);
      }


 function string_lg_1(){        //getElementById input 字串長度

        var str_lg = string_lg(calc.input.value);

        return (str_lg);
      }



    function cursor_position()     //get cursor  位置
     {

       var nub = doGetCaretPosition(document.getElementById('input'));

       
       return (nub);

     }


   function cursor_position_set(n)     //set cursor  位置
     {

       var string_s = document.getElementById('input');
       var nub_set = setCaretPosition(string_s , n)

     }

  
 


     function cursor_left_1()         //set cursor  left
    {
        s_chang_visible_all();     //key 解禁


        

        var no = cursor_position();
       
           
        var lg = string_lg_1();

        var input_str = calc.input.value.trim();
          
        var new_str = input_str.substr(0,no) + input_str.substr(no,lg-1);
          document.getElementById('input').value = new_str;

         cursor_position_set(no-1) ;    //set cursor  位置
                
         if(no==0){cursor_position_set(0); }    //set cursor  位置

           
      }




    function cursor_right_1()          //set cursor  right
    {
        s_chang_visible_all();     //key 解禁
       
        var no = cursor_position();
        var lg = string_lg_1();
          
        if(no <= lg){
    	 setCaretPosition(document.getElementById('input'),no+1);
                    }

    }



 function cursor_up_1(){               //set cursor  up    //new

     s_chang_visible_all();     //key 解禁

    var arry = m_count_newline();
    var arry_lg =arry.length;
    var arry_ref=[];                 //起點

        arry_ref.push(0);

      for(i=0; i<arry_lg ;i++){
                           
                   arry_ref.push(arry[i]+1);
                               
                               }

    var no = cursor_position();
    var arry_ref_lg=arry_ref.length; 


     var arry_small=[];
            for(i=0; i<arry_ref_lg ;i++){
                if(arry_ref[i] <= no){             //小於 cursor 之 return index
                   arry_small.push(arry_ref[i]);
                                 }
                                     }   
        arry_small_lg = arry_small.length;

      var arry_small_2=[];   //取最靠近2筆
           arry_small_2=arry_small.reverse(); //排序 大在前

      var  test_lg = arry_small_2.length;
          
            if(test_lg >=2){
                
               var ref_down = arry_small_2[0];    //下起點位置
               var ref_up = arry_small_2[1];      //上起點位置

              
                 if(((ref_down-ref_up)>(no-ref_down))&&((no-ref_down)< display_width)) {    //上行較長
                    var new_no = ref_up+no-ref_down;}

                 if(((ref_down-ref_up)<=(no-ref_down))&&((no-ref_down)< display_width)){   //上行較短
                    var new_no = ref_down-1;}

                  if((no-ref_down) > display_width){     //本行 大於 display_width
                    var new_no = no-display_width;}
  
                                                  } 

               if((test_lg ==1)&&(no > display_width)){ //本行 大於 display_width
                  var new_no = no-display_width;}

                if((test_lg ==1)&&(no <= display_width)){ //本行 小(等)於 display_width
                  var new_no = no;}       //位 不變
                  


 
                      //newline 位移
                
              
         setCaretPosition(document.getElementById('input'),new_no);
          scroll_cursor();


   }

 





   function cursor_down_1(){                //set cursor  down

      s_chang_visible_all();     //key 解禁

      var arry = m_count_newline();
      var arry_lg =arry.length;
         var no = cursor_position();
         var lg = string_lg_1();
         if(lg <= no) { no = lg;}    //修飾最後 cursor 位置


           var arry_small=[];
  

            for(i=0; i<arry_lg ;i++){
                if(arry[i] <=no){             //小於= cursor 之 return index
                   arry_small.push(arry[i]);
                                 }
                                     }  

            var arry_small_lg = arry_small.length; 

       
            var arry_lager=[];

            for(i=0; i< arry_lg ;i++){
                if(arry[i] > no){             //大於 cursor 之 return index
                   arry_lager.push(arry[i]);
                                 }
                                     }  
  
 
            var arry_lager_lg = arry_lager.length;

            if(arry_small_lg >=1){
              var ref_1 = arry_small[arry_small_lg -1 ];}  //最靠近 cursor 之 return 位置; 較小
             else{  var ref_1=0;}
             
 
             if(arry_lager_lg >=1){                       //最靠近 cursor 之 return 位置; 較大
               var ref_2 = arry_lager[0];}
                  else{  var ref_2=0;}
             



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
                    else{ var new_no = ref_2+trans_1+1;}  //+1
                                                  }


        

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

function cursor_position_row(){                //計算 cursor  行數 位置
    var arry = m_count_newline();

     //alert(arry);

    var arry_lg =arry.length;

      //alert(arry_lg);

    var no = cursor_position();

    //alert(no); 

    var lg = string_lg_1();          //getElementById input 字串長度

       //alert(lg); 

         if(lg <= no) { no = lg;}    //修飾最後 cursor 位置

   var row_nub=0;


    for(i=0; i< arry_lg ;i++){

    var nub_1=arry[i];
    

       if(i==0 && nub_1<no ){
          var nub_1=arry[i];
          var row_nub = row_nub+ m_abs(m_nub_m((nub_1-0)/display_width))+2;  //取小數點前整數  
              }
       if(i > 0 && nub_1 < no ){
         var nub_1=arry[i];
         var nub_2=arry[i+1];

        var row_nub = row_nub + m_abs(m_nub_m((nub_2-nub_1)/display_width))+1;  //取小數點前整數
        }

        
                            }

  arry =[];

   //alert("row_nb="+row_nub);
 
  return row_nub; 

}


 function cursor_re_start(nub){                //截取 cursor (;)semicolon間字串  //重新計算
      var nub_a=nub;
      var arry = m_count_semicolon();
      var arry_lg =arry.length;
         var no = cursor_position();

         var input_str_a = calc.input.value;  //輸入字串
         var lg = string_lg_1();
         if(lg <= no) { no = lg;}    //修飾最後 cursor 位置


           var arry_small=[];
  

            for(i=0; i<arry_lg ;i++){
                if(arry[i] <=no){             //小於= cursor 之 semicolon
                   arry_small.push(arry[i]);
                                 }
                                     }  

            var arry_small_lg = arry_small.length; 

      
            var arry_lager=[];

            for(i=0; i< arry_lg ;i++){
                if(arry[i] > no){              //大於 cursor 之 semicolon
                   arry_lager.push(arry[i]);
                                 }
                                     }  
  
             var arry_lager_lg = arry_lager.length;


            input_str_1="";
            input_str_2="";
            input_str_3="";

   
        if(arry_small_lg >0 && arry_lager_lg >0){
           var input_str_1 = input_str_a.substr(0 ,arry_small[arry_small_lg-1]+1);                         //含最後;
           var input_str_2 = input_str_a.substring(arry_small[arry_small_lg-1]+1,arry_lager[0]+1);         //含最後;
           var input_str_3 = input_str_a.substr(arry_lager[0]+1,lg-arry_lager[0]);                          //含最後;
                                              }

 
         if(arry_small_lg ==0 && arry_lager_lg>0){
                     
           var input_str_1 = "";                                                    //不含最後;
           var input_str_2 = input_str_a.substring(0 ,arry_lager[0]+1);             //含最後;
           var input_str_3 = input_str_a.substr(arry_lager[0]+1 ,lg-arry_lager[0]);  //含最後;
                                                             }
        

         if(arry_small_lg >0 && arry_lager_lg==0){
       
           var input_str_1 = input_str_a.substring(0 ,lg);      //最後含;
           var input_str_2 = "";                                             //不含最後;
           var input_str_3 = "";                                             //不含最後;
                                                             }
          
  
      if(nub_a==1){ return input_str_1; }

      if(nub_a==2){ return input_str_2; }
      if(nub_a==3){ return input_str_3; } 
  

}

// //

function cursor_coords(event){      //新增 cursor 做標
 
  var x=event.clientX;
  var y=event.clientY;

  var ys=event.screenY;

   s_chang_visible_all(); //解鎖



  //var data_a= "x="+x +";y="+y;

  // alert("cursor_x="+x);
   //alert("cursor_y="+y);
  // alert("screen_y="+ys);

  return data_a;
 }


//  //////////////////////////////////////////////////////////////////////////   cursor   "↑"


//  //////////////////////////////////////////////////////////////////////////   key  "↓"

 
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
        repeat_bs = setInterval("backspace()" , 1);  }   //repeat 
    
    if(nub_a==1){
        repeat_del = setInterval("delete_a()" , 100);  }   //repeat

    if(nub_a==2){
        repeat_sp = setInterval("space_1()" , 100);  }   //repeat
    if(nub_a==3){
        repeat_left = setInterval("cursor_left_1()" , 100);  }   //repeat
     if(nub_a==4){
        repeat_right = setInterval("cursor_right_1()" , 100);  }   //repeat
      if(nub_a==5){
        repeat_up = setInterval("cursor_up_1()" , 100);  }   //repeat
      if(nub_a==6){
        repeat_down = setInterval("cursor_down_1()" , 100);  }   //repeat

      
      
  }


 function m_stop_repeat_fu(nub){

  var nub_a=nub;
    if(nub_a==0){
      clearInterval(repeat_bs); }    //stop repeat
     if(nub_a==1){
      clearInterval(repeat_del); }    //stop repeat
     if(nub_a==2){
      clearInterval(repeat_sp); }    //stop repeat
    if(nub_a==3){
      clearInterval(repeat_left); }    //stop repeat
    if(nub_a==4){
      clearInterval(repeat_right); }    //stop repeat 
    if(nub_a==5){
      clearInterval(repeat_up); }    //stop repeat 
    if(nub_a==6){
      clearInterval(repeat_down); }    //stop repeat 
   



 }



 


function backspace(){

   //alert("ll");

      s_chang_visible_all();     //key 解禁


      //s_chang_sum("<=x");      //防呆 //新增//需open

     // alert("ll");

        var no = cursor_position();
           
        var lg = string_lg_1();

        var input_str = calc.input.value.trim();
      
          
        var new_str = input_str.substr(0,no-1) + input_str.substr(no,lg-1);
          document.getElementById('input').value = new_str;

         cursor_position_set(no-1) ;    //set cursor  位置


             scroll_cursor();    //轉頁 新增
 
     
             }







function delete_a(){
       
      s_chang_visible_all();     //key 解禁

        var no = cursor_position();
           
        var lg = string_lg_1();

        var input_str = calc.input.value;

        
        var new_str = input_str.substr(0,no) + input_str.substr(no+1,lg);
                  

        document.getElementById('input').value = new_str;

         cursor_position_set(no) ;    //set cursor  位置
         
             }



function clear_all_1(item_1){
  
  s_chang_visible_all();    //暫close
       

   var item_a=item_1;

    

      s_chang_sum(item_a);     //防呆  //暫close

    var input_str = calc.input.value;
    var new_str ="";
      document.getElementById('input').value = new_str;
       cursor_position_set(0) ;    //set cursor  位置

      


 }



function space_1(){
      s_chang_visible_all();     //key 解禁
  
     
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

         cursor_position_set(no+1) ;    //set cursor  位置
         
             }



function key_1(char_1){


     //alert("oo");

      var char_1=char_1;
   
         s_chang_sum(char_1);      //防呆 

      var char_lg = char_1.length;  //代入字串長度

      var no = cursor_position();  //暫不用

      var lg = string_lg_1();
      var input_str = calc.input.value;

      if(char_1== "h("){

         if(insert_flag=="yes"){
              var new_str = input_str.substr(0,no-1) +char_1+ input_str.substr(no,lg);
                             }
           else{ 
              var new_str = input_str.substr(0,no-1) +char_1+ input_str.substr(no+char_lg,lg);}  //去掉前(
                }
      else{
            if(insert_flag=="yes"){
              var new_str = input_str.substr(0,no) +char_1+ input_str.substr(no,lg);
                             }
           else{
             var new_str = input_str.substr(0,no) +char_1+ input_str.substr(no+char_lg,lg);
                }
                      }



      document.getElementById('input').value = new_str;

        cursor_position_set(no+char_lg) ;    //set cursor  位置// 手機必用
          
           
         
            s_check_nb(new_str);         //  check 是否隱藏 ")"

           s_check_end(new_str);        //尾 2碼 之隱藏 //cos 

            scroll_cursor();    //轉頁 新增
  }



 var insert_flag="not";   //旗標




function rept_1(char_1, nb){
   var char_1 = char_1;
   var nb = nb;
   var char_t="";
     for(var n =0; n < nb+1 ;n++){

         char_t = char_t +char_1;
     }

  
       return (char_t);

}



function enter_1(){      //cursor 及後面字串換行

     s_chang_visible_all();     //key 解禁
        
   var no = cursor_position();

 

   var lg = string_lg_1();             //getElementById input 字串長度
   var input_str = calc.input.value;

   var rten = input_str.charCodeAt(no);   //chk carriage return 及 new line

    if(rten !=13 && rten !=10){
        var new_str = input_str.substring(0,no) +'\r'+ input_str.substring(no,lg);        //+'\r' carriage return
                  }
 
     if(rten ==13 ){
       var new_str = input_str.substr(0,no) +'\r'+'\r'+ input_str.substr(no,lg);        //+'\r' carriage return 
       }   
       
     if(rten ==10){
       var new_str = input_str.substr(0,no) +'\r'+'\n'+ input_str.substr(no,lg);        //+'\r' carriage return 
       }

     document.getElementById('input').value = new_str;


   
  
         cursor_position_set(no+1) ;    //set cursor  位置   1 ='\r' 

   scroll_cursor();
     
}






function newline_1(){                 //cursor 在所有字串 後,換行

    s_chang_visible_all();     //key 解禁


   var no = cursor_position();
   var s_lg = string_lg_1();             //getElementById input 字串長度
   var input_str = calc.input.value;

     
   var new_str = input_str+'\n' ;     //+'\r' carriage return   or '\n' newline 

    document.getElementById('input').value = new_str;
 
       var new_ln_w = string_lg_1();  

    cursor_position_set(new_ln_w) ;    //set cursor  位置

      }


    


//  //////////////////////////////////////////////////////////////////////////   key   "↑"
//  //////////////////////////////////////////////////////////////////////////   display   "↓" 


 function scroll_x_y(){
       var elem = document.getElementById('input');
       var x_1=elem.scrollLeft;
       var y_1=elem.scrollTop;

       


    
      //alert("y="+y_1);
     

     //alert("z1="+elem.scrollHeight);

         // elem.scrollTop =999;

        elem.scrollTop = elem.scrollHeight ; //set   ???

      // alert("z2="+elem.scrollTop);

          
   }


function scroll_cursor(){       //配和 cursor  scroll_cursor()//暫停

      var text_area = document.getElementById('input');

       var y_t=text_area.scrollTop;
       var y_h=text_area.scrollHeight ;

           
    

      var n_cur = cursor_position_row();  //位置

        // var c_data = Math.floor((y_h-y_t)/3) +1;  //取大不取小

         // var c_data = Math.floor(y_h-y_t)+1 ;  //取大不取小 px

           //  var c_data = 20 ;  //取大不取小 px 

        if(n_cur >=3){       //3減小
    
         text_area.scrollTop = y_t + 50 ;   //取大不取小 px 50
                      }
          
  
 };







//  //////////////////////////////////////////////////////////////////////////   display "↑" 
//  //////////////////////////////////////////////////////////////////////////   customer math   "↓"
 

  function m_n(n){             // n! 階乘    n 正整數 >=0

       var nn=n;

       var test_point = m_nub_p(nn);        //取 point 後 小數部分


        if(test_point > 0){
           return message_1(7);        //非整數 error
                          }

        if(nn < 0){
             return message_1(7);}     //n>=0
   
      
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


function m_n_o(n){             // 奇數! 階乘    n 正奇整數 >=0   1*3*5*7*.....

       var nn=n;
      
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


function m_n_e(n){             // 數! 階乘    n 正..整數 >=0   2*4*6*8*.....

       var nn=n;
      
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


function m_n_oe(n){             //     1*3*5*7*..../2*4*6*8*.....

       var nn=n;
      
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



function m_p(n,k){           //p(n,k)=n!/(n-k)!    //排列
    var nn=n;
    var kk=k;
    var sum_total=1;

}


function m_c(n,k){           //(n,k)= n!/((n-k)! * k!)    //組合 Combination

    var nn=n;
    var kk=k;
    var sum_total=0;
     if(kk==0){sum_total=1;}
     if(kk==nn){sum_total=1;}
     if(( nn>=0 && nn<kk) ||(kk<0 && nn>=0)){sum_total=0;}
     if((nn>=kk)&& (kk>=1)){
  
       sum_total=  m_n(nn) /(m_n(nn-kk) * m_n(kk)) ;
                            
                            }

   
   return sum_total; 
}


function m_c_u(n,k){           //(n,k)= n!/((n-k)! * k!)    //組合 Combination up上半部

    var nn=n;
    var kk=k;
    var sum_total=0;
     if(kk==0){sum_total=1;}
     if(kk==nn){sum_total=1;}
     if(( nn>=0 && nn<kk) ||(kk<0 && nn>=0)){sum_total=0;}
     if((nn>=kk)&& (kk>=1)){
  
   
       sum_total=  m_n(nn) /(m_n(nn-kk) * m_n(kk)) ;

                            
                            }

   
   return sum_total; 
}




  function m_exp(x){

       var zz=x;
       var nn=100;        //設定執行次數
       var sum_total_m=1;
       var ee = 2.718281828459045235360287471353;    //
       var sum_total_p=0; 
     
          var ee_100 = m_pow_m(ee,100); //ee 100次方
          var ee_10 = m_pow_m(ee,10);   //ee 10次方

       var zzm= m_abs(m_nub_m(zz));      //取 point 前 正整數部分 , 含 -符號   //絕對值

  
   

       var zzp= m_abs(m_nub_p(zz));              //取 point 後 正小數部分 

         if(zzm == 0){ sum_total_m=1};　　　　//正　整數部分

        var zzm_1_100 = zzm/100;
        var zzm_1_10 = zzm/10;


        if(zzm >= 100){
           for(var i = 1 ; i <  zzm_1_100 ; i++){
            sum_total_m=sum_total_m * ee_100 ;         //平方作法   100倍
            zzm = zzm - 100; 
                    if(zzm < 100){  i = zzm_1_100 ;}        //跳出

                                        }
                  }


         if(zzm >= 10){
           for(var i = 1 ; i <  zzm_1_10 ; i++){
            sum_total_m=sum_total_m * ee_10 ;         //平方作法   10倍
            zzm = zzm - 10; 
                    if(zzm < 10){  i = zzm_1_10 ;}        //跳出

                                        }
                  }





        if(zzm >= 1){
           for(var i = 1 ; i <= zzm ; i++){
            sum_total_m=sum_total_m * ee ;         //平方作法
                                        }
                  }

   
        if(zzp ==0){sum_total_p=1};　　   　　//小數部分

        if(zzp > 0 && zzp < 1){

                sum_total_p= m_series_e(zzp/2);   //級數作法   //增加速收斂  zzp/2
        
       
            sum_total_p = sum_total_p*sum_total_p;

                              }

     

      var sum_total = sum_total_m/sum_total_p; //小數部分除,變號

    
      if( x < 0){
      var sum_total = sum_total_m/sum_total_p;  //小數部分除,變號
      var sum_total = (1.0e0/sum_total)};  //負數取倒數


      if( x < 0 && sum_total ==0 ){

                
                 var ans_1= message_1(10);

                 return   ans_1 ; }   //去掉 0的產生  實際為趨近 zero  "->0 ,approximation zero"

     
     return sum_total; 
   
   }


function m_pow(base,p){                      // (-1)^2=1 已處理 //  Math.pow(0.5,300.2)=4.2736140814882916e-91
                                                                   // m_pow(0.005,300.2)=0

                                                                   //Math.pow(0.005,100.4)= 9.475201082736407e-232
                                                                  // Math.pow(0.0055,100.4)=1.3564819687931545e-227  

                  //m_pow(200,133)=1.0889035741470031e+306  //base=200  p 最大133
                  //m_pow(300,124)=1.4555783429306887e+307  //base=300  p 最大124
   var bb=base;
   var pp=p;
   var ans_1;
   var ppi=0;
   var ppp=0;
    var ans_2=1;
 

   var ppi = m_nub_m(pp) ;       //取 point 前 整數部分 , 含 -符號
      if(ppi-pp !=0){
         var ppp = m_nub_p(pp) ;   //取 point 後 小數部分
                       }
       else{ var ppp =0;}

     
  
    if(bb==1){ ans_1=1;  return ans_1; }            //立刻 output

    else if( pp == 0) { ans_1=1; return ans_1;  }
    else if(bb==0 && pp >0) { ans_1=0; return ans_1;  }

    else if(bb==0 && pp < 0) { ans_1="undefined"; return ans_1; }

    else if(bb==0 && pp ==0) { ans_1=1; return ans_1; }

     
    //else if(bb !=0 && ppi ==0 && ppp==0 ){ans_1=1;}  //指數 為0時


    else if(bb !=0 && ppi !=0 && ppp==0 ){     //指數 整數

        ans_1= m_pow_m(bb,pp);

             }

     else if(ppp !=0 && bb > 0){      //bb ^ pp =M   ; M=exp(pp * ln(bb))  //指數 有小數
        
          var bb_a = m_ln(bb);

               ans_1= m_exp( m_abs(pp) * bb_a) ;
   

               if( pp < 0 ){ var  ans_1=  (1/ans_1) ;}   //取倒數    
          

        }
  
  
     else if(ppp !=0 && bb < 0){
         ans_1=message_1(6); //"需複數解";
        }
  

   // if(ans_1==0 && base!=0){ ans_1=message_1(10);}  //暫不執行  影響 m_asin

        return ans_1; 
    
 }






 // ln(123.456)=ln(1.23456*10^2)
 //  = ln(1.23456)+ln(10^2) =  ln(1.23456)+2*ln(10)  
 //  = ln(1.23456)+2 * 2.30258509299404568401799145468 


function m_ln(x){       //  x>0
  var xx=x;
  var xxabs = Number(m_abs(xx));  //轉數字


    if ( xx == 0){ var ans_t = message_1(13); return ans_t; }
    if ( xx < 0) {  var ans_t =message_1(5); return ans_t; }


  

  var ee = 2.718281828459045235360287471353; //常數
  var count_m = m_cut_nub_m(xxabs);             // count 整數位數  >0  位數  , 含 -符號
 

  var count_p = m_cut_nub_p(xxabs);             // count 小數位數  <0  位數  , 不含 -符號  不含 point
 

 var count_t = count_m+count_p+1;
  var ans_0 = 0;

   

  var ee_10 =m_pow_m(ee,10);  //ee 10次方 = 22026.465794806707
  var ee_7 =m_pow_m(ee,7);   // ee 7次方 = 1096.633158428458
  var ee_5 =m_pow_m(ee,5);   // ee 5次方 = 148.4131591025766
  var ee_3 =m_pow_m(ee,3);    //ee 3次方 = 20.08553692318766                        //ee  =2.718281828459045

      

      while(xxabs >= ee_10){
                                 //快數取出10 的指數部分  
           xxabs = xxabs/ee_10;
            ans_0=ans_0+10;
                                             
                     }


      while(xxabs >= ee_7){
                                  //快數取出10 的指數部分  
           xxabs = xxabs/ee_7;
            ans_0=ans_0+7;
                
                                   
                     }

      while(xxabs >= ee_5){
                                   //快數取出5 的指數部分  
           xxabs = xxabs/ee_5;
            ans_0=ans_0+5;
                
                     }

       while(xxabs >= ee_3){
                                 //快數取出5 的指數部分  
           xxabs = xxabs/ee_3;
            ans_0=ans_0+3;
                
                           }



      while(xxabs >= ee){                  //ee=2.718281828459045
                                           //取出1 的指數部分  +5 增加回圈數
           xxabs = xxabs/ee;
            ans_0=ans_0+1;
                 
                     }


       while(xxabs > 1.5  && xxabs < ee){ 
         
                                            //取出1 的指數部分
               xxabs = (xxabs)/(ee); 
                ans_0=ans_0 + 1;
                    
                      }

    
   



     while(xxabs < 0.00005 ){ 
                                          //取出1 的指數部分
             xxabs = (xxabs)*(ee_10); 
                ans_0=ans_0 - 10;
                  
                      }





      while(xxabs < 0.5 ){ 
                                            //取出1 的指數部分
             xxabs = (xxabs)*(ee); 
                ans_0=ans_0 - 1;

                           }




     var ans_1 = m_series_ln_a_z(xxabs) ;   //由公式作法   0.5 < xxabs  <1.5 
     
     
     var ans_t =ans_0 + ans_1;

       if(xx<0){              //負值
           ans_t=1.0/ans_t;   
               }
       

                        
  return ans_t;
}




function m_log(x){       //log x = M * ln x  ;   M =loge =0.43429 44819 03251 82765 11289 18917 
  var M = 0.434294481903251827651128918917;
  var xx=x;
  var xxabs = Number(m_abs(xx));  //轉數字


  var count_m = m_cut_nub_m(xxabs);             // count 整數位數  >0  位數  , 含 -符號
  var count_p = m_cut_nub_p(xxabs);             // count 小數位數  <0  位數  , 不含 -符號  不含 point
  var count_t = count_m+count_p+1;
  var ans_0 = 0;


      if ( xx == 0){ var ans_t = message_1(14) ;  return ans_t;} 
      if ( xx < 0) {  var ans_t = message_1(9); return ans_t;} 

    

     if(xxabs >=1000){
          for(var i=0; i< count_t-1 ;i++){    //加數 取出10 的指數部分  
           xxabs = xxabs/1000;
            ans_0=ans_0+3;
                 if(xxabs < 1000){ var i=count_t ;} //跳出

                                     }
                     }

 
      if(xxabs >=10){
          for(var i=0; i< count_t-1 ;i++){    //取出10 的指數部分  
           xxabs = xxabs/10;
            ans_0=ans_0+1;
                 if(xxabs < 10){ var i=count_t ;} //跳出

                                     }
                     }


       if(xxabs > 0 && xxabs < 1){ 
         
           for(var j=0; j< count_t ;j++){    //取出10 的指數部分
               xxabs = (xxabs)*(10); 
                ans_0=ans_0 - 1;

                    if(xxabs > 1){ var j=count_t ;} //跳出

                                      }
                      }

    
     var ans_1 = M * m_ln(xxabs) ;    //由公式作法
     
     
     var ans_t =ans_0 + ans_1;

       if(xx<0){              //負值
           ans_t=1.0/ans_t;   
               }
     

  return ans_t;
}


function m_sin(x){

   var zz = x % (3.14159265358979323846 * 2);   // x >2 pi 
       var nn=100;       //設定執行次數
       var sum_total=0;

      

         if(zz >PI/2 && zz<=PI) { var zz=PI-zz ;}             //轉 2 項

         if(zz >PI && zz<=3*PI/2) { var zz=-(zz-PI);}         //轉 3

         if(zz >3*PI/2 && zz<=2*PI) { var zz=-(2*PI-zz);}    //轉 4

         if(zz < -PI/2 && zz>=-PI) { var zz=-(PI+zz) ;}       //轉3

         if(zz < -PI && zz>=-3*PI/2) { var zz=-(zz+PI);}       //轉2

         if(zz < -3*PI/2 && zz>= -2*PI) { var zz= (2*PI+zz);}  // 轉1

          

         for(var i = 0 ; i < (nn+1) ; i++){

           var k=2*i+1;
            sum_total=sum_total+ Math.pow(-1,i)*Math.pow(zz,k)/m_n(k);     //級數作法


              }
          
      

       //alert(sum_total);

     return sum_total; 
}


function m_cos(x){         //cos(x) = sin(pi/2 -x )

     var zz = x % (3.14159265358979323846 * 2);   // x >2 pi ;

     var yy=PI/2 -zz; 
     var sum_total=m_sin(yy);


     return sum_total; 


   }



function m_tan(x){
 
 
      var zz = x;

      var yy = m_sin(zz);
      var xx = m_cos(zz);

     
      
       var sum_total=0.0;

  
         
       if(xx !=0){
          sum_total = yy/xx;     //公式作法
                        }

     
        if(xx == 0.0 && yy>0.0 ) 
         {   
           sum_total = message_1(11); }

       if(xx == 0.0 && yy<0.0 ) 
         {   
           sum_total = message_1(12); }

         

     return sum_total; 

   }


function m_cot(x){
 
 
      var zz = x;

      var yy = m_sin(zz);
      var xx = m_cos(zz);

     
      
       var sum_total=0.0;

  
         
       if(yy !=0){
          sum_total = xx/yy;     //公式作法
                        }

     
        if(yy == 0.0 && xx>0.0 ) 
         {   
           sum_total = message_1(15); }

       if(yy == 0.0 && xx<0.0 ) 
         {   
           sum_total = message_1(16); }

         

     return sum_total; 

   }



function m_sinh(x){   //new間
 
      var zz=x;
      
      var sum_total=0;
      var pexp=m_exp(zz);
      var nexp=m_exp(-zz);

      sum_total=(pexp-nexp)/2;
      

     return sum_total; 

   }




function m_sinh_1(x){   //-5  ~ +5 間
 
      var zz=x;
       //var zz = x % (3.14159265358979323846 * 2);   // x >2 pi 
       var nn=100;       //設定執行次數
       var sum_total=0;

      if(zz==0.0){ sum_total=0;}

      if(zz !=0.0){
         for(var i = 0 ; i < (nn+1) ; i++){

           var k=2*i+1;
            sum_total=sum_total+m_pow(zz,k)/m_n(k);     //級數作法
                                           }

               }

   
     return sum_total; 

   }



function m_cosh(x){    //new間
 
      var zz=x;
      
      var sum_total=0;
      var pexp=m_exp(zz);
      var nexp=m_exp(-zz);

      sum_total=(pexp+nexp)/2;
      

       return sum_total; 

   }



function m_cosh_1(x){
 
       var zz=x;
    
       var nn = 100;       //設定執行次數
       var sum_total=0;


         for(var i = 0 ; i < (nn+1) ; i++){

           var k=2*i;  

            sum_total=sum_total+ Math.pow(zz,k)/m_n(k);     //級數作法


              }

      
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
          sum_total = yy/xx;     //公式作法
          }                   
      
      

     return sum_total; 

   }





function m_asin(x){
 
      var zz = m_abs(x);

          
       var nn =1000;       //設定執行次數  //次數不足影響精度
       var sum_total=0;

     
    
    if((zz >0.7) && (zz < 1)){             //分段執行 避免 x>0.99 誤差  級數產生誤差    //加速級數收斂

        var  zz2=zz*zz;
        var  zz3 = 1-zz2;

     

        var  zz5 = m_pow(zz3,0.5);  //開方

             
            for(var i = 0 ; i < (nn+1) ; i++){    //i由 0 star?

               var k=2*i+1;

            sum_total=sum_total+ m_n_oe(i)*m_pow(zz5,k)/(k);   // m_n_oe(i) 先做  m_exp( Math.abs(pp) * m_ln(bb))
  
                                          } 
               

             sum_total= (PI/2)-sum_total;  //90度 補角作法   避免 x>0.99 誤差
                 

                             }




     if((zz <=0.7) && (zz >0)){

         for(var i = 0 ; i < (nn+1) ; i++){    //i由 0 star?

        var k=2*i+1;

               

            sum_total=sum_total+ m_n_oe(i)*m_pow(zz,k)/(k);   // m_n_oe(i) 先做  m_exp( Math.abs(pp) * m_ln(bb))

  
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
        
       var nn = 150;       //設定執行次數  //次數不足影響精度
       var sum_total=zz;
       
 
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
        
       var nn = 85;       //設定執行次數  //次數不足影響精度
       var sum_total=0;
       var sum_total_1=0;
       var sum_total_2=0;
 
     if((zz < 1) && (zz > -1)){

         for(var i = 0 ; i < (nn+1) ; i++){

           var k = 2*i +1;
           var j = 2*i;

              //級數作法

          //   sum_total=sum_total+ m_c(j,i)*Math.pow(zz,k)/(k * Math.pow(4,i));

             var mc = m_c(j,i);
             var pw1 = Math.pow(zz,k);
             var pw2 =Math.pow(4,i);
             sum_total=sum_total+ (mc/pw2)*(pw1/k);    //避免 infinity  運算次序調整

                                          }    
               
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


    var ans_1= π/2 - nn;

    if( zz >1 || zz< -1){ 
            var ans_1= message_1(2);
            
            return ans_1; 

                         }

   return ans_1; 
 }


function m_acos_1(x){

    var x1 = 1 - Math.pow(x,2)  ;
    var x2 = Math.pow(x1 ,1/2);
  
    var ans_1= m_asin(x2) ;

   return ans_1;
 }


function m_atan_1(x){
 
      var zz = x;
        
       var nn =2000;       //設定執行次數  //次數不足影響精度
       var sum_total=0;
       
 
     if((zz < 1) && (zz > -1)){

         for(var i = 0 ; i < (nn+1) ; i++){    //

        var k=2*i+1;

            sum_total=sum_total+ Math.pow(-1,i)*Math.pow(zz,k)/(k);   //  先做
  
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




//  //////////////////////////////////////////////////////////////////////////   customer math   "↑"


//  //////////////////////////////////////////////////////////////////////////   error : "↓" message
function message_1(n){
  var nn = n;
  var message_1;

     switch(nn){
       case 1:
          message_1 = "<--  Msg : asin(x) , |x|<= 1 -->" ;
          break;
        case 2:
          message_1 = "<--  Msg : acos(x) , |x|<= 1 -->" ;
          break;
        case 3:
          message_1 = "<--  Msg : acosh(x) , x >= 1 -->" ;
          break;
        case 4:
          message_1 = "<--  Msg : atanh(x) , |x|< 1 -->" ;
          break;
        case 5:
          message_1 = "<--  Msg : ln(x) , x > 0 -->" ;
          break;

        case 6:
          message_1 = "<--  Msg : b ^p , when b<0 and p decimal point except zero , complex logarithm-->" ;
          break;
         case 7:
          message_1 = "<--  Msg : n! ,  n ∈ N -->" ;
          break; 

         case 8:
          message_1 = "<--  Msg : () ,  no data -->" ;

          break;

          case 9:
          message_1 = "<--  Msg : log(x) , x > 0 -->" ;
          break;

          case 10:
          message_1 = "<--  Msg : exp(x) value approximation to  0 -->" ;
          break;

          case 11:
          message_1 = "<--  Msg : tan(x) value  to  infinity -->" ;
          break;

          case 12:
          message_1 = "<--  Msg : tan(x) value  to  -infinity -->" ;
          break;
        
          case 13:
          message_1 = "<--  Msg : ln(0) value  to  -infinity -->" ;
          break;

          case 14:
          message_1 = "<--  Msg : log(0) value  to  -infinity -->" ;
          break;


          case 15:
          message_1 = "<--  Msg : cot(x) value  to  infinity -->" ;
          break;

          case 16:
          message_1 = "<--  Msg : cot(x) value  to  -infinity -->" ;
          break;

       default:
         

                }

 return message_1; 

 }

//  //////////////////////////////////////////////////////////////////////////   error : "↑"message


//  //////////////////////////////////////////////////////////////////////////   string string  "↓"
    //  結束符號前字串 刪除    處理display 
  function m_del4_2f_char(s,c){     //s 為字串   c結束字  //刪除
    
     var ss=s;
     var cc=c;
     var ss_lg=ss.length; 
     var cc_lg=cc.length;

  
     var pos=ss.lastIndexOf(cc);

    

     var partstring = ss.substr((pos+cc_lg),ss_lg);

    

 
  return partstring ; 
    }


 function m_count_newline(){     //計算string  newline 及 return 位置
    var lg = string_lg_1();
    
    var input_str = calc.input.value ;


    var rten = "";  // carriage return 及 new line
    var arr  =[];
      for(var i=1 ; i<=lg ;i++){
         var rten = input_str.charCodeAt(i);  // carriage return 及 new line
             if(rten ==10 || rten ==13){
                   arr.push(i);
                                       }

                                }


    
     return arr;

  }

function m_count_semicolon(){     //計算string  ";"  位置
    var lg = string_lg_1();
    
    var input_str = calc.input.value ;


    var rten = "";  // carriage return 及 new line
    var arr  =[];
      for(var i=1 ; i<=lg ;i++){
         var rten = input_str.charCodeAt(i);  // semicolon
             if(rten ==59 ){
                   arr.push(i);
                                       }

                                }


     
     return arr;

  }




function m_replace(str_s ,old_s ,new_s ){          //  new str replace old str  字串取代

    var ss = str_s.trim();
    var oo = old_s.trim();  //2
    var nn = new_s.trim();  //3
    var ss_lg = ss.length;
    var oo_lg = oo.length;  //2
    var nn_lg = nn.length;  //3 
    var new_ss = ss ;       //初態設定相同
    var fg =0 ;             //new str and old str  length diff

     

      for(var i=0 ; i < ss_lg ; i++){
  
       var oo_part = ss.substr(i,oo_lg);

           if(oo_part == oo){
            

               var new_ss = new_ss.substr(0, i+fg) + nn  +new_ss.substr(i+oo_lg + fg , ss_lg-1+fg);

               
                 var fg = fg+(nn_lg-oo_lg);    //處理多筆

                            }

                                     }

       
     return new_ss;

}


function m_replace_star(str_s ){          //  m_fuc 前有數字 或")" 則中間加 *
    var str_1=str_s;

 // alert("uu="+str_1);   //pi^2 ??/

    var str_new = m_replace(str_1 ,')m',')*m');

        for(var i=0;i<=9;i++){

          str_new = m_replace(str_new ,i+'m',i+'*m');
            }
    
  
   return str_new;
}





function m_str_spec_part_bf(str ,spec){          //    取特殊字前之部分數字字串[含 () ]   , b為前  a為後    //處理  n!
     var str_1 = str.trim();
     var spec_1= spec;

    
                //π^2 例外刪除
                 
        

     
        var pos = str_1.indexOf(spec_1) ; 
                                                   

     var mark_1 =str_1[pos - 1];        //取前1碼
     var count_1 = 1 ;
     var count_mark = pos ;

       //alert("ooo="+spec_1);

      //alert("ooo1="+pos);

       // alert("ooo2="+ mark_1);



          if(mark_1 ==")"){
            

           for(var i= pos-2;0 <= i  ; i=i-1){
              var mark_ref = str_1[i];

                 if(mark_ref ==")"){
                     count_1 = count_1 +1 ;}
                 if(mark_ref =="("){
                     count_1 = count_1-1 ;}
                                            
                  if(count_1==0){
                     var count_mark = i ;
                       i=-1;                  // 跳出                   
                                          }
                                           }
                           }

            
          if((mark_1 >=0 && mark_1<=9)) {

             var count_mark = pos-1;   //前1碼

           for(var i = pos - 2; 0 <= i   ; i=i-1){
              var mark_ref = str_1[i];
                                    
                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.'){      

                        var count_mark = i ;
                                                       }
                   else{  

                     
                           i=-1 ;                               //跳出 
                                             }     
                                                    
                                                  }
                                  }
   
         var str_part_b= str_1.substring(count_mark,pos);


         
       
     return str_part_b;

}


function m_str_spec_part_af(str ,spec){          //    取特殊字 後 之部分數字字串[含 () ]   , b為前  a為後    //處理  n!
    

     var str_1 = str.trim();
     var str_a_lg = str_1.length;
     var spec_1= spec;
     var spec_a_lg = spec_1.length;

     var pos = str_1.indexOf(spec_1) ;  //特殊字 之 index
     var mark_1 =str_1[pos +spec_a_lg];        //取後1碼
     var count_a = 1 ;
     var count_mark=100;


          if(mark_1 =="("){
            

           for(var i= (pos + spec_a_lg+1) ; i < str_a_lg  ; i++){
              var mark_ref = str_1[i];

                 if(mark_ref =="("){
                     count_a = count_a +1 ;}
                 if(mark_ref ==")"){
                     count_a = count_a-1 ;}
                                            
                  if(count_a==0){
                     var count_mark = i+1 ;
                       i = str_a_lg ;                  // 跳出                   
                                 }
                                                   }
                           }

       

     
         
          if(mark_1 >=0 && mark_1<=9) {
           for(var i = pos + spec_a_lg;  i < str_a_lg  ; i++){
              var mark_ref = str_1[i];

                

                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' || mark_ref=='.') {      //反述
                                                       }
                   else{  

                     var count_mark = i ;

                         i= str_a_lg;                      }     // 跳出  
                                                    
                                                  }
                                  }

           
           if(mark_1 =='.') {                                     //第1碼為小數點
           for(var i = pos + spec_a_lg+1;  i < str_a_lg  ; i++){
              var mark_ref = str_1[i];

               

                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π' ) {      //反述
                                                       }
                   else{  

                     var count_mark = i ;

                         i= str_a_lg;                      }     // 跳出  
                                                    
                                                  }
                                  }






          if(mark_1 =='π') {  var count_mark = pos+spec_a_lg+1 } ;   //特例



             //....................................處理  第1碼負值

              if(mark_1 =="-") {

            for(var i = pos + spec_a_lg+1;  i < str_a_lg  ; i++){
              var mark_ref = str_1[i];

                 

                   if((mark_ref <= 9 && mark_ref >= 0 )||mark_ref =='°'  || mark_ref =='π'|| mark_ref=='.' ) {      //反述
                                                       }
                   else{  

                     var count_mark = i ;
                  
                      

                         i= str_a_lg;                      }     // 跳出  
                                                    
                                                  }
                                  }

     
             //....................................


         var str_part_b= str_1.substring(pos+spec_a_lg ,count_mark);    //後

        

     return str_part_b;

  
}






  function m_fact(str){                                  // 處理 n! 函數    1筆
    var str_1=str;
    var part_bf = m_str_spec_part_bf(str_1 ,'!');

    

    var part_bf_lg = part_bf.length;

    


     if(part_bf_lg > 0 &&  part_bf[0] =='(' ){
        str_1 = str_1.replace(part_bf+'!' , "m_n"+part_bf ) ;  }           //自製函數取代  ,已有()

          

     if(part_bf_lg > 0 &&  part_bf[0] !='(' ){
        str_1 = str_1.replace(part_bf+'!' , "(m_n("+part_bf+'))');             //自製函數取代  // 增加 前後括號  //優先權

            

                        }

     // if(part_bf_lg == 0){  str_1 = "error :n! ; n=''" ; }

         if(part_bf_lg == 0){  str_1 = str_1.replace(part_bf+'!' , "(m_n("+1+'))'); }   //修正   ! =  1!

     return str_1;

   }



 function m_star(str){                                 // 處理 pi   1筆   *pi
    
   
    var str_1 = str;
   
    var part_bf = m_str_spec_part_bf(str_1 ,"π");  //
    var part_bf_lg = part_bf.length;

  

    if(part_bf_lg > 0 ){
        str_1 = str_1.replace(part_bf+"π" , part_bf+'*3.141592653589793' ) ; }           //自製函數取代  ,已有()  //修正 3.141592653589793

         
   
    if(part_bf_lg == 0){  str_1 = str_1.replace(part_bf+"π" , part_bf+'3.141592653589793' ) ; }     //修正 3.141592653589793

     
     return str_1;

   }



function m_star_deg(str){                                 // 處理   degree  1筆  
    
   
    var str_1 = str;
   
    var part_bf = m_str_spec_part_bf(str_1 ,"°");  //
    var part_bf_lg = part_bf.length;

   
    if(part_bf_lg > 0 ){
        str_1 = str_1.replace(part_bf+"°" , part_bf+'* 0.017453292519943' ) ; }           //自製函數取代  ,已有() //修正

           
    if(part_bf_lg == 0){  str_1 = str_1.replace(part_bf+"°" , part_bf+'0.017453292519943' ) ; }   //修正

     
     return str_1;

   }


function m_fun_aft(str,spec1,spec2){                   // 處理   exp ln log  sin cos tan sinh cosh tanh 1筆 // spec2 = 'zzz'  型示輸出
   var str_1=str;                                              // asin  asinh 
   var spec_1=spec1;
   var spec_2=spec2;
   var part_aft =  m_str_spec_part_af(str_1 ,spec_1);
    var part_aft_lg = part_aft.length;
   

   if(part_aft_lg > 0 &&  part_aft[0] =='(' ){
      
        str_1 = str_1.replace(spec_1 ,  spec2 ) ;      //自製函數取代  zzz 轉換中間值
                                                }           //自製函數取代  ,已有()

          

     if(part_aft_lg > 0 &&  part_aft[0] !='(' ){
       
        str_1 = str_1.replace(spec_1+part_aft , "("+spec2 +"("+part_aft+')'+")" );              //自製函數取代  zzz 轉換中間值  // 增加 前後括號//優先權

           

                        }


      if(part_aft_lg == 0 && spec2 =="eee" ){  str_1 = str_1.replace(spec_1+part_aft , "("+spec2 +"("+1+')'+")" );  }   //處理 exp = exp1 

      if(part_aft_lg == 0 && spec2 !="eee" ){  str_1 = "error,  not data" ; }

     

     return str_1;


}


function m_hat_bf_aft(str,spec1,spec2){                   // 處理  hat ^  1筆   spec1= '^'
  var str_1=str;                                              
   var spec_1=spec1;
   var spec_2=spec2;


    //alert("s0="+str_1);

   var part_bf = m_str_spec_part_bf(str_1 ,spec1);

       // alert("s11="+part_bf); //



   var part_bf_lg = part_bf.length;

   var part_aft =  m_str_spec_part_af(str_1 ,spec_1);
   var part_aft_lg = part_aft.length;

   var part_aft_1=part_aft;
   var part_bf_1=part_bf;

   if(part_aft[0] =='(' && part_aft[part_aft_lg-1] ==')'){    //去( )
          part_aft_1= part_aft.substr(1,part_aft_lg-2);
    }
    else{  part_aft_1= part_aft;}
 
   if(part_bf[0] =='(' && part_bf[part_bf_lg-1] ==')'){    //去( )
          part_bf_1= part_bf.substr(1,part_bf_lg-2);
    }
    else{part_bf_1= part_bf;}

    

 
   if((part_bf_lg > 0)  && (part_aft_lg > 0 )){

        str_1 = str_1.replace(part_bf+spec_1+part_aft , "("+spec2+"("+part_bf_1 +','+part_aft_1+")"+")" ) ;  }        //自製函數取代 ,已有() // 增加 前後括號//優先權
 

        
                
 
     if(part_aft_lg == 0 || part_bf_lg == 0 ){  str_1 = "error,  not data" ; }

     // alert("s12="+str_1);
    

     return str_1;

}


  function m_str_spc_count(str,spec){            //計算特殊字串 在 長字串 數量count
   var str_1 = str;
   var spec_1 = spec;
   var str_1_lg = str_1.length;
   var spec_1_lg = spec_1.length;
   var count_1 = 0;

     for(var i=0;i<str_1_lg;i++){
   
       var str_ref= str_1.substr(i,spec_1_lg) ;
            if(str_ref == spec_1){
               count_1=count_1+1;
                 i= i+ spec_1_lg -1 ;}  // 位移   -1 因 i++

                                }

     return count_1;

   }


function m_str_spc_index(str,spec){            //計算特殊字串 在 長字串  之第1個 index
   var str_1 = str;
   var spec_1 = spec;
   var str_1_lg = str_1.length;
   var spec_1_lg = spec_1.length;
   var index_1 = 0;                      //失敗

     for(var i=0;i<str_1_lg;i++){
   
       var str_ref= str_1.substr(i,spec_1_lg) ;
            if(str_ref == spec_1){
               index_1=i;
             return index_1;       // 找到第1個 index
     
                                 }  // 之第1個 index  star 0

                                }

    
     return index_1;

   }


function m_str_spc_inter(str,spec_1,spec_2){            //計算特殊字串 在 長字串  取spec1(含),spec2(含) 間字串   //<  >
   var str_1 = str;
   var spec_a = spec_1;
   var spe2_2 = spec_2;

   var str_1_lg = str_1.length;
   
   var index_1 = 0; 
   var index_2 = 0; 
                    
       index_1 = m_str_spc_index(str,spec_a);
       index_2 = m_str_spc_index(str,spe2_2);

   var new_str =str_1.substring(index_1,index_2+1);   //取spec1(含),spec2(含) 間字串

       return new_str;

   }



function m_str_spc_inter_2word(str,spec_1,spec_2){            //計算特殊字串 在 長字串  取spec1(含),spec2(含) 間字串   //<  >
   var str_1 = str;
   var spec_a = spec_1;
   var spe2_2 = spec_2;

   var str_1_lg = str_1.length;
   
   var index_1 = 0; 
   var index_2 = 0; 
                    
       index_1 = m_str_spc_index(str,spec_a);
       index_2 = m_str_spc_index(str,spe2_2);

   var new_str =str_1.substring(index_1,index_2+2);   //取spec1(含),spec2(含) 間字串

       return new_str;

   }



function m_str_spc_end(str,spec){            //計算特殊字串 是否在 長字串 結尾
   var str_1 = str;
   var spec_1 = spec;
   var str_1_lg = str_1.length;
   var spec_1_lg = spec_1.length;
   var str_ref="";

     for(var i=(str_1_lg-spec_1_lg);i<str_1_lg;i=(i+spec_1_lg)){
   
       var str_ref= str_1.substr(i,spec_1_lg) ;
            if(str_ref == spec_1){

              
               return 1;         //yes

                }  
           else{ 
              
                 return 0 ;}     //no
        
                                }

     
   }








  function m_fact_many(str){                         // 處理 n! 函數    多筆

      var str_1 = str;
      var nub_1 = m_str_spc_count(str_1,'!');   //count !

          for(var i=0; i< nub_1 ; i++){
            str_1 =  m_fact(str_1);   //一次處理 1筆 

             }

      return  str_1;

  }


 function m_star_many(str){                                 // 處理 pi  多筆
   
    var str_1 = str;
    
    var nub_1 = m_str_spc_count(str_1,"π");   //count !

    for(var i=0; i< nub_1 ; i++){
            str_1 =  m_star(str_1);   //一次處理 1筆 

               }

      str_1 = str_1.replace( /pi/g, "π") ;  //還原
     return  str_1;

  }


 function m_star_deg_many(str){                              // 處理   degree  多筆  

   var str_1 = str;
    
    var nub_1 = m_str_spc_count(str_1,"°");   //count !

      for(var i=0; i< nub_1 ; i++){
            str_1 =  m_star_deg(str_1);   //一次處理 1筆 
           
             }

    str_1 = str_1.replace( /deg/g, "°") ;  //還原
      return  str_1;

 }


function m_fun_aft_many(str,spec1,spec2){                    // 處理   exp ln log  sin cos tan sinh cosh tanh   多筆 
   var str_1=str;
   var spec_1=spec1;
   var spec_2=spec2;

   var nub_1 = m_str_spc_count(str_1,spec_1);   //count !

   for(var i=0; i< nub_1 ; i++){
            str_1 =  m_fun_aft(str_1,spec_1,spec_2);     //一次處理 1筆 

               }

       return  str_1;
 
}



function m_hat_bf_aft_many(str,spec1,spec2){                   // 處理  hat ^  多筆   spec1= '^'
   var str_1=str;
   var spec_1=spec1;
   var spec_2=spec2;

   var nub_1 = m_str_spc_count(str_1,spec_1);   //count !
   for(var i=0; i< nub_1 ; i++){
            str_1 =  m_hat_bf_aft(str_1,spec_1,spec_2);     //一次處理 1筆 

                   }

    

   return  str_1;

    
}


function m_str_b_sec(str,spec){     //取"="前之字串  spec="="
 
   var str_1 = str;
   var spec_1 = spec;
   var index_a= m_str_spc_index(str_1,spec_1);           //計算特殊字串 在 長字串  之第1個 index

   
   var str_b_part=str_1.substr(0 ,index_a);

  
   return  str_b_part;

}





function m_str_math_replacec(this_it){         //自製公式取代 display

 var this_it_a = this_it;

            this_it_a = this_it_a.toLowerCase(); //大寫轉小寫//增加

             this_it_a = m_fun_aft_many(this_it_a ,' ','');   // 代 " "  空白取消

            this_it_a = m_fun_aft_many(this_it_a ,'asinh','azh');   //azh 代  asinh     //第1次 處理  三角部分
            this_it_a = m_fun_aft_many(this_it_a ,'asin','azz');   //azz 代  asin
            this_it_a = m_fun_aft_many(this_it_a ,'sinh','zzh');   //zzh 代  sinh
            this_it_a = m_fun_aft_many(this_it_a ,'sin','zzz');   //zzz 代  sin
            this_it_a = m_fun_aft_many(this_it_a ,'acosh','ayh');   //ayh 代  acosh
            this_it_a = m_fun_aft_many(this_it_a ,'acos','ayy');   //ayy 代  acos
            this_it_a = m_fun_aft_many(this_it_a ,'cosh','yyh');   //yyh 代  cosh
            this_it_a = m_fun_aft_many(this_it_a ,'cos','yyy');   //yyy 代  cos
            this_it_a = m_fun_aft_many(this_it_a ,'atanh','axh');   //axh 代  atanh
            this_it_a = m_fun_aft_many(this_it_a ,'atan','axx');   //axx 代  atan
            this_it_a = m_fun_aft_many(this_it_a ,'tanh','xxh');   //xxh 代  tanh
            this_it_a = m_fun_aft_many(this_it_a ,'tan','xxx');   //xxx 代  tan


             this_it_a = this_it_a.replace(/azh/g , "m_asinh");   //自製函數取代      //第2次 處理   三角部分
             this_it_a = this_it_a.replace(/azz/g , "m_asin");   //自製函數取代  
             this_it_a = this_it_a.replace(/zzh/g , "m_sinh");   //自製函數取代  
             this_it_a = this_it_a.replace(/zzz/g , "m_sin");   //自製函數取代             
             this_it_a = this_it_a.replace(/ayh/g , "m_acosh");   //自製函數取代  
             this_it_a = this_it_a.replace(/ayy/g , "m_acos");   //自製函數取代  
             this_it_a = this_it_a.replace(/yyh/g , "m_cosh");   //自製函數取代  
             this_it_a = this_it_a.replace(/yyy/g , "m_cos");   //自製函數取代  
             this_it_a = this_it_a.replace(/axh/g , "m_atanh");   //自製函數取代   
             this_it_a = this_it_a.replace(/axx/g , "m_atan");   //自製函數取代  
             this_it_a = this_it_a.replace(/xxh/g , "m_tanh");   //自製函數取代  
             this_it_a = this_it_a.replace(/xxx/g , "m_tan");   //自製函數取代  


             this_it_a = m_fun_aft_many(this_it_a ,'exp','eee');   //          第1次處理   指數部分 
             this_it_a = this_it_a.replace(/eee/g , "m_exp");   //自製函數取代      //第2次 處理

             this_it_a = m_fun_aft_many(this_it_a ,'ln','nnn');   //          第1次處理   指數部分 
             this_it_a = this_it_a.replace(/nnn/g , "m_ln");   //自製函數取代      //第2次 處理

             this_it_a = m_fun_aft_many(this_it_a ,'log','ggg');   //          第1次處理   指數部分 
             this_it_a = this_it_a.replace(/ggg/g , "m_log");   //自製函數取代      //第2次 處理

             this_it_a = m_fact_many(this_it_a);                 // 處理 n!

             this_it_a = m_star_many(this_it_a);                // 處理 pi  多筆

          // alert("1="+this_it_a);

             this_it_a = this_it_a.replace(/π/g , "(3.14159265358979323846) ");       //取代 replace


         
              
             this_it_a =  m_star_deg_many(this_it_a);           // 處理   degree  多筆
             this_it_a = this_it_a.replace(/°/g , "(3.14159265358979323846/180) ");   //取代 replace

    // alert("2="+this_it_a);
             this_it_a = m_hat_bf_aft_many(this_it_a ,'^','hhh');

    //alert("3="+this_it_a);

             this_it_a = this_it_a.replace(/hhh/g , "m_pow");   //自製函數取代      //第2次 處理

             this_it_a = m_replace_star(this_it_a) ;         //  m_fuc 前有數字 或")" 則中間加 *

        // alert("5="+this_it_a);   

return  this_it_a;

}
  
 function cursor_sec_recal_t( ){                //截取 cursor (;)semicolon間字串  //重新計算 total

    
    var str_a = cursor_re_start(1);                //截取 cursor (;)semicolon間字串  //重新計算
    var str_b = cursor_re_start(2);                //截取 cursor (;)semicolon間字串  //重新計算
    var str_c = cursor_re_start(3);                //截取 cursor (;)semicolon間字串  //重新計算
      
     var new_str ="";

    var str_2_0_1 = m_str_b_sec(str_b,"<--");          //取"<--"前之字串  spec="<--"
    var str_2_0_2 = m_str_b_sec(str_b,"=");          //取"="前之字串  spec="="
       
      if(str_2_0_1.length >0){

         var str_2_0=str_2_0_1;}
       else{
          var str_2_0=str_2_0_2;}




     
    var str_2_0_r =  m_str_math_replacec(str_2_0);     //自製公式取代 display


    var str_2_0_r_ans = eval(str_2_0_r);             //計算值

     
 if( str_2_0_r_ans >=0 || str_2_0_r_ans < 0){    //顯示數字

          
        var new_str = str_a+str_2_0.trim()+"="+str_2_0_r_ans.toString().trim()+";"+str_c ;

          document.getElementById('input').value = "";        //clear 
           document.getElementById('input').value = new_str;


                                           }

       else {

         
            str_2_0_r_ans =  m_str_spc_inter( str_2_0_r_ans,"<",">");    //取字串

         document.getElementById('input').value = "";        //clear 
  

         document.getElementById('input').value = str_a+str_2_0 ;
               newline_1();                 //增加一空行

         document.getElementById('input').value +=  str_2_0_r_ans+";" +str_c ;   //顯示文字 error :message

       
        
             }

    
     
  }



 function m_oct_nb(str_a) {             //處理 8進位為 10進位  // +0nub  -0nub  *0nub /0nub  ^0nub  (0nub  (-0nub --> = - * / ^
                                        //                     
                                                               // 第一碼為 0nub 刪除 0  //新增
  var stra=str_a;
  var lg=stra.length;

   
   //alert(stra);
     
 
   for(var i=0;i<(lg-1);i++){

     var char_1= stra.toString().substr(0,1);  //取第1碼
     var char_2= stra.toString().substr(1,1);  //取第2碼

       //alert("0c="+char_2);
       
    
     var index_1= m_str_spc_index(stra,"1") ; //計算特殊字串 在 長字串  之第1個 index
     var index_2= m_str_spc_index(stra,"2") ; //計算特殊字串 在 長字串  之第1個 index
     var index_3= m_str_spc_index(stra,"3") ; //計算特殊字串 在 長字串  之第1個 index
     var index_4= m_str_spc_index(stra,"4") ; //計算特殊字串 在 長字串  之第1個 index
     var index_5= m_str_spc_index(stra,"5") ; //計算特殊字串 在 長字串  之第1個 index
     var index_6= m_str_spc_index(stra,"6") ; //計算特殊字串 在 長字串  之第1個 index
     var index_7= m_str_spc_index(stra,"7") ; //計算特殊字串 在 長字串  之第1個 index
     var index_8= m_str_spc_index(stra,"8") ; //計算特殊字串 在 長字串  之第1個 index
     var index_9= m_str_spc_index(stra,"9") ; //計算特殊字串 在 長字串  之第1個 index


         //  alert("0b="+index_0);
         // alert("0a="+index_6);
           

    
         if(char_1=="0" && (index_1==1 || index_2==1 ||index_3==1 || index_4==1 ||index_5==1 || index_6==1 ||index_7==1 || index_8==1 ||index_9==1 || char_2=="0" )){ 
             var  stra=stra.substring(1,lg);}   //第1碼省掉 // 第一碼為 0nub 刪除 0
       
               //  alert("0d="+stra);

            
                          }


       //alert("00="+stra);

      var lg=stra.length;  
   
       for(var i=0;i<(lg-1);i++){

        var stra =m_replace(stra ,"+00" ,"+0" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"+01" ,"+1" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"+02" ,"+2" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"+03" ,"+3" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"+04" ,"+4" )  ;        //  new str replace old str  字串取代
        var stra =m_replace(stra ,"+05" ,"+5" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"+06" ,"+6" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"+07" ,"+7" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"+08" ,"+8" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"+09" ,"+9" );          //  new str replace old str  字串取代  

        var stra =m_replace(stra ,"-00" ,"-0" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"-01" ,"-1" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"-02" ,"-2" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"-03" ,"-3" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"-04" ,"-4" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"-05" ,"-5" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"-06" ,"-6" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"-07" ,"-7" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"-08" ,"-8" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"-09" ,"-9" ) ;         //  new str replace old str  字串取代  

        var stra =m_replace(stra ,"*00" ,"*0" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"*01" ,"*1" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"*02" ,"*2" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"*03" ,"*3" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"*04" ,"*4" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"*05" ,"*5" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"*06" ,"*6" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"*07" ,"*7" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"*08" ,"*8" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"*09" ,"*9" ) ;         //  new str replace old str  字串取代  

        var stra =m_replace(stra ,"/00" ,"/0" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"/01" ,"/1" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"/02" ,"/2" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"/03" ,"/3" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"/04" ,"/4" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"/05" ,"/5" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"/06" ,"/6" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"/07" ,"/7" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"/08" ,"/8" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"/09" ,"/9" ) ;         //  new str replace old str  字串取代

        var stra =m_replace(stra ,"^00" ,"^0" );          //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"^01" ,"^1" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"^02" ,"^2" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"^03" ,"^3" );          //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"^04" ,"^4" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"^05" ,"^5" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"^06" ,"^6" );          //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"^07" ,"^7" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"^08" ,"^8" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"^09" ,"^9" );          //  new str replace old str  字串取代  

        var stra =m_replace(stra ,"(00" ,"(0" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"(01" ,"(1" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(02" ,"(2" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(03" ,"(3" );          //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"(04" ,"(4" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(05" ,"(5" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(06" ,"(6" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"(07" ,"(7" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(08" ,"(8" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(09" ,"(9" );          //  new str replace old str  字串取代  

        var stra =m_replace(stra ,"(-00" ,"(-0" );          //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"(-01" ,"(-1" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(-02" ,"(-2" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(-03" ,"(-3" );          //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"(-04" ,"(-4" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(-05" ,"(-5" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(-06" ,"(-6" ) ;         //  new str replace old str  字串取代  
        var stra =m_replace(stra ,"(-07" ,"(-7" );          //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(-08" ,"(-8" ) ;         //  new str replace old str  字串取代
        var stra =m_replace(stra ,"(-09" ,"(-9" ) ;         //  new str replace old str  字串取代
   

                                }

     //alert("01="+stra);

   return stra ;

   
  }



//  //////////////////////////////////////////////////////////////////////////   string    "↑"


//  //////////////////////////////////////////////////////////////////////////   nuber   "↓"

   function m_abs(x){         //abs 

    var ans_1 = x ;
   if(ans_1 < 0 ){   
      ans_1= ans_1*(-1);
                 }
       return ans_1; 
     }


 function m_sing(nub){        // even =0 ; odd = 1
    var nn = nub;
    var res = nn % 2;
 
        return res; 
    }

 function m_sgn(base,p){         //out +1 or -1  ; base= -1 

    var bb = base ;
    var pp = p ;
    var rr = m_sing(pp);
    var ans_1 = -1;

      if(bb==-1 && rr==0){
        ans_1 = 1;
        }
  
      return ans_1;  

     }



function m_cut_nub_m(nub){             // count 整數位數  >0  位數  , 含 -符號
    var nn = m_abs(nub);                //abs 值
    var nn_lg = nn.toString().length;  //數字長度     
          
    var count_p =0 ; 
       for(var i =0  ; i < (nn_lg) ; i++){
            if(nn >=1 ){
              count_p =count_p +1;
               nn = nn/10;
                       }
                                         }
      if(nub < 0 ){count_p = count_p +1;}   // -符號加入

  

      return count_p;    

  }

function m_cut_nub_p(nub){             // count 小數位數  <0  位數  , 不含 -符號 及 point 符號
    var nn=nub;
    var nn_lg = nn.toString().trim().length;  //數字長度   含 -符號

    var nn_m = m_cut_nub_m(nub);       // count 整數位數  >0  位數  , 含 -符號
          
    var count_p = nn_lg - nn_m -1 ;    // - point 符號
      
        return count_p;    

  }




function m_nub_m(nub){         //取 point 前 整數部分 , 含 -符號 
   var nn = nub; 
   var mb = m_cut_nub_m(nn);   // count 整數位數 含 -符號

  if(nn<0){mb=mb+1;}        //負值 new

   var ans_1= nn.toString().substr(0,mb);


  
    ans_1=Number(ans_1);


    
    return ans_1; 
     
}


function m_nub_p(nub){         //取 point 後 小數部分
   var nn = nub;
   var mm = m_nub_m(nn);      //取 point 前 整數部分 含 -符號
   
     var ans_1= nn - mm ;


  
   var power_n = m_cut_nub_p(nn) ;
 
   var data_n=Math.pow(10,power_n);

       ans_1 = Math.round(ans_1*data_n)/data_n ;

   
     return ans_1; 
     
}

function m_round(nub){            //取 4佘 5 入  整數
   var nub_a=nub;
   var nub_m= m_nub_m(nub_a);      //取 point 前 整數部分 含 -符號
   var nub_p= m_abs(m_nub_p(nub_a));      //取 point 後 小數部分

  
   var ans_1=0;
    if( nub_m >0 && nub_p >=0.5){  ans_1=nub_m+1; }
    if( nub_m >0 && nub_p < 0.5){  ans_1=nub_m ; }
    if( nub_m <0 && nub_p >=0.5){  ans_1=nub_m-1; }
    if( nub_m <0 && nub_p < 0.5){  ans_1=nub_m; }


      return ans_1; 

}

function m_nub_pit_1(pit_n){    // 進位所需  + 1   // pit_n  3 正 >0 ,  -3 負<0    ,pit_n 為整數

  var pit_a = m_abs(pit_n);  
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


function m_series_e(base){       //base >0  整數時  , exp 之級型態級數     1+z/1+z2/2!+z3/3!......
 
 var z_a = base;        //base 
 
 var nn=100;           //loop次數
 var item_a=1 ;
 var sum_a =1;

  for(var i=1; i<nn ;i++){

     item_a=item_a * (-(z_a/i));

    
     sum_a = sum_a+item_a;

  }

    return sum_a; 

}




function m_series_ln_a_z(base){        // ln(1+z) = z - z2/2 + z3/3 -z4/4 +......//base =1+z;   |z|<1  //   0 <base <2
   var z_a = base-1;                   //加速收斂    0.5 <= base <=1.5
   var nn=100;           //loop次數
   var item_a=0 ;
   var sum_a =0;

  for(var i=1; i< nn ;i++){

   
     item_a=  (-1)*m_pow_m(-1,i) * m_pow_m(z_a,i)/i;      

     sum_a = sum_a+item_a;

  }

  

    return sum_a; 



}



function m_pow_m(base,pit_n){       //base >0 ,pit_n 為整數時(無小數部分)



   var base_a=m_abs(base);

   var base_i = base; //原值



   var base_p = m_nub_p(base_a);      //取 point 後 小數部分



   var pit_a=m_abs(pit_n);
   var pit_sta=m_abs(pit_n);
   var pit_i=pit_n;  //原值

 
   var base_2=0;
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

     for(var i=0; i<12 ;i++){                        //產生reference
        if(pit_a >=2 ) { var  base_2=base_a*base_a ;
                              }
        if(pit_a >=4 ) { var  base_4=base_2*base_2 ;
                              }
        if(pit_a >=5 ) { var  base_5=base_a*base_4 ;
                              }
        if(pit_a >=10 ) { var base_10=base_5*base_5 ;
                              }
        if(pit_a >=20 ) { var  base_20=base_10*base_10 ;
                               }
        if(pit_a >=40 ) { var  base_40=base_20*base_20 ;
                               }
        if(pit_a >=50 ) { var  base_50=base_40*base_10 ;
                               }
        if(pit_a >=100 ) { var base_100=base_50*base_50 ;
                               }
        if(pit_a >=200 ) { var  base_200=base_100*base_100 ;
                                }
        if(pit_a >=400 ) { var  base_400=base_200*base_200 ;
                                }
        if(pit_a >=800 ) { var  base_800=base_400*base_400 ;
                               }
        if(pit_a >=1600 ) { var  base_1600=base_800*base_800 ;
                                 }

        }

   
  
           if(pit_a >=1600 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_1600 ;
            
               var  pit_a = pit_a-1600;
                   if(pit_a < 1600 ){ j=pit_sta ;}  //跳出

                              }
                            }

  
    if(pit_a >=800 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_800 ;
            
               var  pit_a = pit_a-800;
                   if(pit_a < 800 ){ j=pit_sta ;}  //跳出

                              }
                            }

   if(pit_a >=400 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_400 ;
            
               var  pit_a = pit_a-400;
                   if(pit_a < 400 ){ j=pit_sta ;}  //跳出

                              }
                            }

   if(pit_a >=200 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_200 ;
           
               var  pit_a = pit_a-200;
                   if(pit_a < 200 ){ j=pit_sta ;}  //跳出

                              }
                            }
     if(pit_a >=100 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_100 ;
          
               var  pit_a = pit_a-100;
                   if(pit_a < 100 ){ j=pit_sta ;}  //跳出

                              }
                            }
      if(pit_a >=50 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_50 ;
           
               var  pit_a = pit_a-50;
                   if(pit_a < 50 ){ j=pit_sta ;}  //跳出

                              }
                            }

      if(pit_a >=10 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_10 ;
          
               var  pit_a = pit_a-10;
                   if(pit_a < 10 ){ j=pit_sta ;}  //跳出

                              }
                            }

     


         if(pit_a >=5 ){ 
             for(var j=0; j< pit_a ;j++){       //處理
               var  base_tot= base_tot* base_5 ;
             
               var  pit_a = pit_a-5;
                 if(pit_a < 5 ){ j = pit_sta ;}  //跳出


                              }
                            }



     if(pit_a < 5 ){ 

     

       for(var j=0; j< pit_a ;j++){       //處理
          
               var  base_tot= base_tot* base_a ;

                          
               
                            }
                    } 
 

       
     if(base_i > 0 && pit_i < 0 ){
           var  base_tot= 1/base_tot ;    //負指數 產生導數

             }
   
     if((base_i < 0 && pit_i > 0)  && (pit_sta%2 !=0)){    //
            var  base_tot= - base_tot ;     //奇數指數 
             }
   
      if(base_i < 0 && pit_i > 0  && (pit_sta % 2) ==0){   //
            var  base_tot=  base_tot ;      //偶數指數 
             }

      if(base_i < 0 && pit_i < 0  && (pit_sta % 2) !=0){
            var  base_tot= - 1/base_tot ;    //負奇數指數 
             }

       if(base_i < 0 && pit_i < 0  && (pit_sta % 2) ==0){
            var  base_tot=  1/base_tot ;     //負偶數指數 
             }

          
       
   return base_tot;
}



function m_fixed(nub,pit_n){        //取小數點後 (pit_n) 幾位 ,四捨五入

  
   var nub_a = nub;
   var pit_a = pit_n;
   
   var nub_a_s =nub_a.toString().trim();
     
   var nub_a_s_lg = nub_a_s.length;

   var index_pit_a= m_str_spc_index(nub_a_s,".");          //計算特殊字串 在 長字串  之第1個 indexm_index
   var index_e = m_str_spc_index(nub_a_s,"e");             //return 0 表示找不到
   var new_nub_a_s = "";
   var next_nub = ""; 



      if(index_e==0){       //無指數 //先四捨五入
         var shift_a = index_pit_a+pit_a+1;
          
            next_nub = nub_a_s.substr(shift_a,1);
            var next_nub= Number(next_nub);

               if( next_nub >4){
                 nub_a = nub_a +m_pow_m(0.1,pit_a); //先四捨五入

                }

                nub_a_s =nub_a.toString().trim();

                new_nub_a_s =nub_a_s.substr(0,shift_a);
            
                    }




        if(index_e != 0 && (index_e-index_pit_a-1-pit_a) >0 ){       //有指數 //先四捨五入
         var shift_a = index_pit_a+pit_a+1;
          
            next_nub = nub_a_s.substr(shift_a,1);
            var next_nub= Number(next_nub);

               

               var nub_a_p = nub_a_s.substr(0,shift_a);   //有無四捨五入

               if( next_nub >4){
                  
                     nub_a_p = Number(nub_a_p);
                     nub_a_p = nub_a_p +m_pow_m(0.1,pit_a);   //先四捨五入  //前段

                }
                 

                nub_a_p =nub_a_p.toString().trim();

                new_nub_a_s =nub_a_p+nub_a_s.substr(index_e,(nub_a_s_lg-index_e)); //前段 + 後段指數

                  
            
                    }
  
            if(index_e != 0 && (index_e-index_pit_a-1-pit_a) <= 0 ){  
                 new_nub_a_s = nub_a_s;  //不變

                 }


  var new_nub = Number(new_nub_a_s);
 
   
  return new_nub;

}


function m_c_fixed(nub_1,nub_2,end_nub){        //消除c語言影響小數點後誤差 。
    var nub_a=nub_1;
    var nu2_0=nub_2;
    var nub_c=end_nub;
    var nub_a_s =nub_a.toString().trim();
    var nub_a_s_lg = nub_a_s.length;
    var nu2_0_s =nu2_0.toString().trim();
    var nu2_0_s_lg = nu2_0_s.length;

    var lg=nub_a_s_lg+nu2_0_s_lg;
     
    var new_nub = m_fixed(nub_c,lg);   //取小數點後 (pit_n) 幾位 ,四捨五入

 return new_nub;
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

   while((cur_date -data_a)  < ms ){}

            
  }

//  //////////////////////////////////////////////////////////////////////////   nuber    "↑"


//  //////////////////////////////////////////////////////////////////////////   防呆1      "↓"





function s_chang_hidden_array(array_1){     //陣列元素 隱藏
   var array_a = array_1;
   var array_a_lg = array_a.length;
   var array_nb="";

     for(var i=0; i< array_a_lg ; i++){

      array_nb=array_a[i];

       

        s_chang_hidden_nub(array_nb);

      }

}


function s_chang_hidden_nub(nub_1){      //隱藏 單筆
   var nub_a = nub_1;
       document.getElementById(nub_a).disabled=true;                  //隱藏
       //document.getElementById(nub_a).setAttribute("disabled","disabled");//隱藏 同上
       //document.getElementById(nub_a).style.backgroundColor="#6495ed";
         document.getElementById(nub_a).style.opacity=0.5;

      // document.getElementById(nub_a).style.color="while";
}
  


function s_nub_array(nub_1){      //產生將隱藏 之 陣列元素
    var nub_a=nub_1;
    var array_a=[];

     s_chang_visible_all();       //所有還原顯示

  
  
    switch(nub_a){

     case "1_0":
      array_a=["1_0","1_1","1_2","1_4","2_0","5_1","5_5"];
      break;

    case "1_1":
      array_a=["1_0","1_1","1_4","1_5","1_6","1_2","2_0","2_2","2_3","2_4","2_5","2_6","3_2","3_3","3_4","3_5","3_6","4_2","4_3","4_4","4_5","4_6","5_1","5_2","5_4","5_5"];
      break;

    case "1_2":
      array_a=["1_0","1_1","1_4","1_2","2_0","2_1","2_3","2_4","2_5","3_1","2_2","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];

      break;

      case "1_3":
     
      array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1","5_2","5_5"];
      break;
  
    case "1_4":
      
      array_a=["1_5","1_6","2_6","4_6","5_1","5_2"];
      break;
    case "1_5":
      array_a=["1_0","1_1","1_2","1_4","1_5","2_0","2_1","2_2","2_3","2_4","2_5","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_4","5_5"];
     
      break;
   
    case "1_6":
      array_a=["1_2","1_5","1_6","2_6","4_6","5_1","5_2"];
      break;

    case "2_0":
       array_a=["1_0","1_1","1_2","1_4","2_0","5_1","5_5"];
      break;

    case "2_1":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2"];
      break;
    case "2_2":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_1","5_2"];
      break;

    case "2_3":                //7
      array_a=["1_4","5_1"];
      break;
    case "2_4":
     array_a=["1_4","5_1"];
      break;
    case "2_5":
      array_a=["1_4","5_1"];
      break;
    case "2_6":
      array_a=["1_2","1_5","1_6","2_6","4_6","5_1"];
      break;
   
   
    case "3_1":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2"];
      break;

   case "3_2":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_1","5_2"];
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
      array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1"];
      break;
   
    case "4_1":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2"];
      break;
    
      case "4_2":
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_1","5_2"];
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
      array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1"];
      break;
   
    case "5_0":   //???
      array_a=["1_2","1_5","1_6","2_6","3_6","4_6","5_1","5_2","5_5"];
      break;

   case "5_1":                                                  
      array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","4_1","4_2","4_6","5_2"];
      break;

    case "5_2":
     array_a=["1_1","1_2","1_5","1_6","2_1","2_2","2_6","3_1","3_2","3_6","4_1","4_2","4_6","5_1","5_2"];
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
  var item_a_p =item_a.substr(1,1); //取 "_"     

  var A = m_new_mtx(5,7);
  var B = m_new_mtx(5,7);
  var T = m_new_mtx(5,7);

  var item_map="" ;

   var A=[["°","a","!","<=x","(",")","/"],
         ["π","sin","exp","7","8","9","*"],
         ["help","cos","ln","4","5","6","-"],
         ["open","tan","log","1","2","3","+"],
         ["←","h","^","ac","0",".","="]];                  // n!
         

   var B=[["1_0","1_1","1_2","1_3","1_4","1_5","1_6"],
          ["2_0","2_1","2_2","2_3","2_4","2_5","2_6"],
          ["3_0","3_1","3_2","3_3","3_4","3_5","3_6"],
          ["4_0","4_1","4_2","4_3","4_4","4_5","4_6"],
          ["5_0","5_1","5_2","5_3","5_4","5_5","5_6"]];
          
     if( item_a_p =="_"){
        T=A;
        A=B;
        B=T;  }    //map change 

  
   var lg_c=A[0].length;    //column  l
   var lg_r=A.length;        //row


 
   for(var i=0; i<lg_r;i++){
     for(var j=0; j<lg_c;j++){
         if( item_a== A[i][j]){ 

         

             item_map=B[i][j] ;
              
                              } 
         
                           }
                          }
  

    return item_map; 
}





function s_chang_visible_all(){

   

     for(var i=1;i <= 5;i++){     //row

       for(var j=0;j <= 6;j++){   //col

       var item_n= i+"_"+j;
          document.getElementById(item_n).disabled=false;
              
          document.getElementById(item_n).style.opacity=1;      //修改
                            }
                          }
     
                  }



function s_chang_sum(item){     //綜整
   s_chang_visible_all();       //所有還原顯示
   var item_1=item;
   var item_a= s_map(item_1);    //map 之 對應 item

   var array_a = s_nub_array(item_a);      //產生將隱藏 之 陣列元素

     s_chang_hidden_array(array_a);    //陣列元素 隱藏 

}

//  //////////////////////////////////////////////////////////////////////////   防呆1    "↑"

//  //////////////////////////////////////////////////////////////////////////   防呆2    "↓"

   function s_check_nb(str){        //check "(" 及 ")" 之數量差
      var str_1=str;
      var befor_a = m_str_spc_count(str_1,"(");  //計算特殊字串 在 長字串 數量count
      var after_a = m_str_spc_count(str_1,")");  //計算特殊字串 在 長字串 數量count 

     
     

          if( befor_a <=after_a){   
           
            // s_chang_hidden_nub("4_3");      //隱藏 單筆

                          }
     }



//  //////////////////////////////////////////////////////////////////////////   防呆2    "↑"

//  //////////////////////////////////////////////////////////////////////////   防呆3    "↓"

 
   function s_check_end(str){                             //check 2碼以上 字串  asin acos atan 
       var str_1=str;
       var asin_1 = m_str_spc_end(str_1,"asin");
       var acos_1 = m_str_spc_end(str_1,"acos");
       var acosh_1 = m_str_spc_end(str_1,"acosh");
       var atanh_1 = m_str_spc_end(str_1,"atanh");

       var asin1_1 = m_str_spc_end(str_1,"asin1");        //check 3碼以上 字串  asin1 acos1 atan1 
       var acos1_1 = m_str_spc_end(str_1,"acos1");

       var asin_1_1 = m_str_spc_end(str_1,"asin-1");        //check4 碼以上 字串  asin1 acos1 atan1 
       var acos_1_1 = m_str_spc_end(str_1,"acos-1");



      // var asin_t = m_str_spc_end(str_1,"asin(");          //含 after "("  //可運算
      // var acos_t = m_str_spc_end(str_1,"acos(");
       var acosh_t = m_str_spc_end(str_1,"acosh(");
       var atanh_t = m_str_spc_end(str_1,"atanh(");   

     

       var asin1_t = m_str_spc_end(str_1,"asin(1");     //含 after "("   //check 3碼以上 字串  asin1 acos1 atan1 
       var acos1_t = m_str_spc_end(str_1,"acos(1");

       var asin_1_t = m_str_spc_end(str_1,"asin(-1");               //check4 碼以上 字串  asin1 acos1 atan1 
       var acos_1_t = m_str_spc_end(str_1,"acos(-1");


       var ln_0 = m_str_spc_end(str_1,"ln0");        // 避免 error
       var log_0 = m_str_spc_end(str_1,"log0");        //避免 error
       var ln_a = m_str_spc_end(str_1,"ln(0");        // 避免 error
       var log_a = m_str_spc_end(str_1,"log(0");        //避免 error

       var ln_1 = m_str_spc_end(str_1,"ln0.");        // 避免 error
       var log_1 = m_str_spc_end(str_1,"log0.");        //避免 error
       var ln_t = m_str_spc_end(str_1,"ln(0.");        // 避免 error
       var log_t = m_str_spc_end(str_1,"log(0.");        //避免 error


 

       var array_a=[];    //產生將隱藏 之 陣列元素

           if(asin_1==1 || acos_1==1  ){                                             //check 2碼
                array_a=["1_2","2_0","2_3","2_4","2_5","3_3","3_4","3_5","4_2","4_4","4_5"]; }

          if(acosh_1==1 ||  acosh_t==1){                    //>=1
                array_a=["1_0","3_6","5_4","5_5"]; }

          if(atanh_1==1  || atanh_t==1){                 //<1
                array_a=["2_0","2_3","2_4","2_5","3_3","3_4","3_5","4_3","4_4","4_5",]; }

          if(asin1_1==1 || acos1_1==1 ||asin_1_1==1 || acos_1_1==1||asin1_t==1||acos1_t==1||asin_1_t==1||acos_1_t==1){                 //check 3碼
                array_a=["1_0","1_1","1_2","2_1","2_0","2_2","2_3","2_4","2_5","3_1","3_2","3_3","3_4","3_5","4_1","4_2","4_3","4_4","4_5","5_1","5_2","5_4","5_5"];
                  }
               
           if(ln_0==1 || log_0==1 ||ln_a==1||log_a==1){                 //error state
                array_a=["1_0","1_1","1_2","1_4","1_5","1_6","2_0","2_1","2_2","2_3","2_4","2_5","2_6","3_1","3_2","3_3","3_4","3_5","3_6","4_1","4_2","4_3","4_4","4_5","4_6","5_1","5_2","5_4"];
                  }

            if(ln_1==1 || log_1==1 ||ln_t==1 || log_t==1 ){ 
                 array_a=["4_2","5_2"];  
             }


       s_chang_hidden_array(array_a);    //陣列元素 隱藏 

  }







//  //////////////////////////////////////////////////////////////////////////   防呆3    "↑"


function s_check_str_char(str,char_a ){       //char 在 str 中之index 數量 存距陣內 //計算出現次數
     var str_1= str;
     var str_lg = str_1.length;
     var char_1=char_a;
     var char_lg=char_1.length;

    var A = m_new_mtx(1,str_lg);  // NEW MTX

     var data_a = -1;
     var jj=0;
     
   var data_count=0;

  for(var i=0;i<str_lg;i++){

    var data_a = str_1.indexOf(char_1,i);

           // alert("data_a="+data_a);

          if(data_a >=0){  A[0,jj]=data_a;

               data_count=data_count+1;

               jj=jj+1;

                
              var i=data_a+(char_lg-1) ;       //找到 index   //(char_lg-1)  處理連續符號
                 }
   
       }
                          
 // alert(data_count);

    return  data_count ;  //計算出現次數
 }


function s_check_str_equal(str ){    // str 中之 "=" 數量

   var str_1=str;
   var data_a = s_check_str_char(str_1,"=");

     return  data_a ;  //計算 "=" 出現次數
}

function s_check_str_equation(str ){       //str 是否可執行

  var str_1=str;

      str_1 = str_1.replace(/m_asinh\(/g,'');   //"" 取代  m_asinh(     // 處理  delete 三角部分
      str_1 = str_1.replace(/m_asin\(/g,'');    //"" 取代  m_asin(      // 處理  delete 三角部分
      str_1 = str_1.replace(/m_sinh\(/g,'');    //"" 取代  m_sinh(      // 處理  delete 三角部分
      str_1 = str_1.replace(/m_sin\(/g,'');     //"" 取代  m_sin(       // 處理  delete 三角部分


       //alert("str_1="+str_1);
       
      str_1 = str_1.replace(/m_acosh\(/g,'');   //"" 取代  m_acosh(     // 處理  delete 三角部分
      str_1 = str_1.replace(/m_acos\(/g,'');    //"" 取代  m_acos(      // 處理  delete 三角部分
      str_1 = str_1.replace(/m_cosh\(/g,'');    //"" 取代  m_cosh(      // 處理  delete 三角部分
      str_1 = str_1.replace(/m_cos\(/g,'');     //"" 取代  m_cos(       // 處理  delete 三角部分

      str_1 = str_1.replace(/m_atanh\(/g,'');   //"" 取代  m_atanh(     // 處理  delete 三角部分
      str_1 = str_1.replace(/m_atan\(/g,'');    //"" 取代  m_atan(      // 處理  delete 三角部分
      str_1 = str_1.replace(/m_tanh\(/g,'');    //"" 取代  m_tanh(      // 處理  delete 三角部分
      str_1 = str_1.replace(/m_tan\(/g,'');     //"" 取代  m_tan(      // 處理  delete 三角部分 

      str_1 = str_1.replace(/m_n\(/g,'');     //"" 取代  m_n(       // 處理 n! 部分 
      str_1 = str_1.replace(/m_exp\(/g,'');   //"" 取代  m_exp(     // 處理 exp 部分 
      str_1 = str_1.replace(/m_ln\(/g,'');    //"" 取代  m_ln(      // 處理 ln 部分 
      str_1 = str_1.replace(/m_log\(/g,'');   //"" 取代  m_log(     // 處理 log 部分
 
          // alert("str1="+str_1);

      str_1 = str_1.replace(/m_pow\(/g,'');   //"" 取代  m_pow(     // 處理 pow 部分 

          //alert("str2="+str_1);
    
      str_1 = str_1.replace(/\(/g,'');   //"" 取代 (     // 處理 ( 部分 
      str_1 = str_1.replace(/\)/g,'');   //"" 取代 )     // 處理 ) 部分 
      str_1 = str_1.replace(/\,/g,'');   //"" 取代 ,     // 處理 , 部分 

      str_1 = str_1.replace(/0/g,'');   //"" 取代 0     // 處理 0 部分 
      str_1 = str_1.replace(/1/g,'');   //"" 取代 1     // 處理 1 部分 
      str_1 = str_1.replace(/2/g,'');   //"" 取代 2     // 處理 2 部分
      str_1 = str_1.replace(/3/g,'');   //"" 取代 3     // 處理 3 部分 
      str_1 = str_1.replace(/4/g,'');   //"" 取代 4     // 處理 4 部分 
      str_1 = str_1.replace(/5/g,'');   //"" 取代 5     // 處理 5 部分
      str_1 = str_1.replace(/6/g,'');   //"" 取代 6     // 處理 6 部分
      str_1 = str_1.replace(/7/g,'');   //"" 取代 7     // 處理 7 部分 
      str_1 = str_1.replace(/8/g,'');   //"" 取代 8     // 處理 8 部分 
      str_1 = str_1.replace(/9/g,'');   //"" 取代 9     // 處理 9 部分

      str_1 = str_1.replace(/\+/g,'');   //"" 取代 +     // 處理 + 部分
      str_1 = str_1.replace(/\-/g,'');   //"" 取代 -     // 處理 - 部分 
      str_1 = str_1.replace(/\*/g,'');   //"" 取代 *     // 處理 * 部分 
      str_1 = str_1.replace(/\//g,'');   //"" 取代 /     // 處理 / 部分  
      str_1 = str_1.replace(/\./g,'');   //"" 取代 .    // 處理 . 部分  

      str_1=str_1.trim();  //
     
  //alert("str3="+str_1);

    return  str_1 ;


}




//  //////////////////////////////////////////////////////////////////////////   防呆5    "↑"




//  //////////////////////////////////////////////////////////////////////////   mtx    "↓"

function m_new_mtx(rows,cols){

     var A =new Array(rows);                          //列(rows)

      for(var m=0; m<A.length; m++){
          A[m]= new Array(cols); }                     //欄位(columns)

  return A;
}

//  //////////////////////////////////////////////////////////////////////////   mtx    "↑"


    function calculate(item_1){

      //......................................
             s_chang_visible_all();          //key 解禁 



          // alert("ppp");

             var str_part_lg= string_lg_1();             //getElementById input 字串長度
             var str_cursor_pos = cursor_position();     //get cursor  位置
       

         if(str_part_lg >str_cursor_pos){  
           
                cursor_sec_recal_t( );                //截取 cursor (;)semicolon間字串  //重新計算 total
                                         } 



        // alert("pppp");

              var item_a=calc.input.value;  //保持原型


         

          var it = calc.input.value;
    
     //........................................

        

      var this_s = it.trim();           //原值    //字串中間空白刪除

    
        
                                
      var this_it = m_del4_2f_char(it,';').trim();        //結束符號前字串 刪除 //s 為字串   c結束字


         
     

          this_it = m_str_math_replacec(this_it);         //自製函數取代 

          //alert(this_it);  


          this_it =  m_oct_nb(this_it);    //             //處理 8進位為 10進位   //新增 //+0 -0 *0 /0  0



            // //////////

           var data_chk1 = s_check_str_char(this_s,"(" ); //test "(" 數量  //this_s//原值    //字串中間空白刪除

           // alert("data_1="+data_chk1);

           var data_chk2 = s_check_str_char(this_s,")" ); //test ")" 數量     //this_s//原值    //字串中間空白刪除

            
    
            // alert("data_2="+data_chk2);

           // alert("this_s="+this_s);

             
               if(data_chk1-data_chk2 !=0){

                  document.getElementById('input').value += "     "+"<- error '(' != ')' ->" +";"  //顯示文字   error :message
                   newline_1(); 
                      return;
                                          }

              var data_equal = s_check_str_equal(this_it);    //test "=" 數量     //this_it


                 if(data_equal > 0){

                  document.getElementById('input').value += "     "+"<- error  '= ' no supplore  ->" + ";"  //顯示文字   error :message
                    newline_1(); 
                       return;
                                          }


                  // alert(this_it); // test

               var data_equation =  s_check_str_equation(this_it );       //str 是否可執行

                  // alert(this_it); // test
                  // alert(data_equation ); // test
 
                  if(data_equation !="" || data_equation==null){

                           //alert("data_equation="+data_equation ); // test

                      document.getElementById('input').value += "     "+"<- error  'equation ' no supplore  ->" + ";"  //顯示文字   error :message

                          newline_1(); 
                         return;
                                          }

               
                

                // alert(this_it); // test

             // /////

           

        var this_data =  eval(this_it);      // 

           // try{                                       // test error
           //     if(isNaN(this_data)) throw "error"; }
           // catch(err){
           //     alert(err);
           //           }
         
           
          // alert("ll="+this_data);

            

        var this_data_abs=m_abs(this_data);     
                                                             
  
      var power_n = document.getElementById('input2').value;

      var power_a=Number(power_n); 

      
       //alert("lll="+power_a);
     
    if( eval(this_it)>=0 || eval(this_it) < 0){    //顯示數字

          
        document.getElementById('input').value = this_s.trim()+"="+m_fixed(eval(this_it),power_a).toString() +";";
                                           }

       else {

          var error_str =eval(this_it) ;

            

               error_str =  m_str_spc_inter_2word( error_str,"<","->");            //計算特殊字串 在 長字串  取spec1(含),spec2(含) 間字串   //<  >

               

          document.getElementById('input').value = this_s.trim()  ;  

                                                   //增加一空行
          document.getElementById('input').value += "     "+error_str +";"  //顯示文字   error :message

           
                                                    
             }

    
         // scroll_x_y();          //test ing screet_top

           //cursor_coords(event);  //test cursor

          newline_1();

           s_chang_sum("=");     //防呆 //暫停


            // scroll_x_y();          //test ing screet_top

            // cursor_coords(event);  //test cursor


          scroll_cursor();   //暫時 close 關閉  //暫不用 //???
  
            //scroll_x_y();
           
          //初值:計算到小數點第6位

      

         }


     //  ///
       
       



      


       
     

      function str_inser(str ,index_it, wd){          //string index insert char   插入字串

        var str=str ;              //字串
        var index_it=index_it;    // index 後
        var wd = wd ;             //加入字
        var str_leg = str.length;
   
             

      var str_new=str.substr(0,index_it) +wd+ str.substr((index_it),str_leg);

       

             return str_new  ;

       }

  
     function str_wdnb(str,index_it){          // 統計 string index 後 之 0-9 , . ,π 之數量

        var str=str ;              //字串
        var index_it=index_it;    // index 後
        var str_leg = str.length;
        var nb =0 ; 
           
          for(var i=index_it; i<str_leg;i++){
             
                var nb_new = str.substr(index_it,index_it+1) ;
                    if( (nb_new <=9 && nb_new>=0)||( nb_new =".") ||( nb_new ="π")){
                              
                             nb=nb+1;                                               }
           

                                            }
                 
             return nb ;
 

       }




