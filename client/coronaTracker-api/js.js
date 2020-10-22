
    
        init()

        function init(){
            var data='';
        
            var url = 'https://api.covid19api.com/summary'
            $.get(url,function(data){
                console.log(data.Global);  
                data =
                
                `
                <td>${data.Global.TotalConfirmed}</td>
                <td>${data.Global.TotalDeaths}</td>
                <td>${data.Global.TotalRecovered}</td> `

                $("#data").html(data);
            })
           
            }
            function refresh(){
                var refcount =0;
                var x = document.getElementById('results');
                var dc = document.createElement('li');
                var y= document.createElement('button');
                var message = "These are the following numbers live..";
                dc.innerHTML=message;
                x.appendChild(dc)

                refcount++;
                clearData();
                

                
                init();
                
            }function clearData(){
                
                $("#data").empty();
             
                init();
               removeC();
                
            }
            function removeC(){
                x.removeChild(dc);
              
            }