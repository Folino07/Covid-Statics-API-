window.onload = iniciar;

function iniciar (){
   let boton = document.getElementById("btnCargar");
   boton.addEventListener ("click",clickBoton);
   }

   async function cargarUrl (url){
       let response = await fetch (url);
       return response.json();
   }


   async function clickBoton () {

    let pais = document.getElementById("selectPais").value

    
       let json = await cargarUrl(`https://api.covid19tracking.narrativa.com/api/2020-06-12/country/${pais}`) 
  console.log (json)

  let estadisticas = json.dates["2020-06-12"].countries[pais];
console.log(estadisticas);



document.getElementById ("today_confirmed").innerHTML = estadisticas.today_confirmed;
document.getElementById ('today_deaths').innerHTML = estadisticas.today_deaths;
document.getElementById ('today_hospitalised_patients_with_symptoms').innerHTML = estadisticas.today_hospitalised_patients_with_symptoms;
document.getElementById ("today_intensive_care").innerHTML = estadisticas.today_intensive_care;

 
//today_new_confirmed: 
//today_new_deaths: 
//today_new_hospitalised_patients_with_symptoms: 
//today_new_intensive_care: 
//today_new_open_cases: 
//today_new_recovered: 

}