jQuery(function ($) {
 $(document).ready(function () {
      /* function showbubble(id){
                      let paginator = document.querySelector(".onepage-pagination li a[href='#"+ id + "']");
                       
                       if(id==1){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Mimosa</span>';           
                         bubble.style.display = "block";   
                       }    
                       else if(id==2){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Démonstration</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==3){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Formation</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==4){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Logistique</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==5){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Contact</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==6){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Clients</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==7){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Interesses?</span>';
                         bubble.style.display = "block";      
                       }
                       else if(id==8){
                         let bubble = paginator.innerHTML = '<span class="ms-bubble-paginator" rel="'+ id +'">Mimosa</span>';
                         bubble.style.display = "block";      
                       }
                    }*/

             $(".main").onepage_scroll({
                sectionContainer: ".section-scroll",     
                easing: "ease",                                                                   
                animationTime: 1000,             
                pagination: true,                
                updateURL: false,                
                beforeMove: function(index) {
                  animateCustomersHome(index);
                  amiateOnionHome(index);
                },  
                afterMove: function(index) {
                },   
                loop: false,                     
                keyboard: true,                  
                responsiveFallback: 992,                                                                                                      
                direction: "vertical"              
            });       

 }); 
});

