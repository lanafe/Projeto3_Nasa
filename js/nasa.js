// let buscarButton = document.querySelector("#buscar");
//let data2 = document.querySelector("#procura");

//document.addEventListener("click",()=>{
    //console.log("button pressed");
    //sendApiRequest();
//})

//async function sendApiRequest (){
  //  let API_KEY = "QjZThVyVKLyDiCGWSeHMNTR3Bcih2fNwnpxphMk1"
    //console.log(data2);
    //let responde = await fetch("https://api.nasa.gov/planetary/apod?api_key=QjZThVyVKLyDiCGWSeHMNTR3Bcih2fNwnpxphMk1")
    //console.log(response);
    //let data = await responde.json();
    //console.log(data);
    //useApiData(data);
//}

  //  function useApiData(data){
    //    document.querySelector("#content").innerHTML += data.explanation;
      //  document.querySelector("#content").innerHTML += '<img src="${data.url}">';
//}
function buscaFotoDoDiaAPOD() {
    const key = 'QjZThVyVKLyDiCGWSeHMNTR3Bcih2fNwnpxphMk1'
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}`,
        dataType: 'json',
        success: function(dados) {
            document.getElementById('imgApod').src = dados.url
        }
    })
}

buscaFotoDoDiaAPOD()