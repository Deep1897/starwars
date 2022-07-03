  //https://swapi.dev/api/people/?search=${query}
  let id;
  async function getData(){
      let query=document.getElementById("query").value;
       let url=`https://swapi.dev/api/people/?search=${query}`;
      let res= await fetch(url);
      let data= await res.json();
     return (data.results);
    // append(data.results)
  }


  function append(data){

     let container=document.getElementById("container");
     container.innerHTML=null;

      data.forEach( function (el) {
          let p=document.createElement("p");
          p.innerText=el.name;
          container.append(p);
          
      });
   


  }


  async function main(){

     let data= await getData();
     console.log(data)
     append(data);
     
  }

 function debouncing(fun , delay)
 {
     if(id)
     {
         clearTimeout(id)
     }
     id=setTimeout(function(){
         fun();
     },delay)
 }
