 var Body = { 
          SetColor :function (color) {
            document.querySelector('body').style.color = color;
            },
          SetBackgroundColor : function (color) {
            document.querySelector('body').style.backgroundColor = color;                              
                                               }                                     
                                               
                                              
        	}
    var link = {
          linkSetColor : function (color) {
              var alist = document.querySelectorAll('a');
    				i = 0;
   				 while(i <alist.length){
        
        			alist[i].style.color = color;
    				i = i+1;
             		}
    		}
    }
    
    function nighthandler(self){
    	 if(self.value === 'night') {
     	Body.SetBackgroundColor('black')
     	Body.SetColor('white');                                                             
     	self.value = 'day';
                                               
    link.linkSetColor('powderblue');
     
                                       
                                             
     } else {
		Body.SetBackgroundColor('white');
     	Body.SetColor('black'); 
     	self.value = 'night';   
                                               
     	link.linkSetColor('blue');
    }
                                              
                                               
     
        
    }