function buscaFotoDoDiaAPOD() {
  let data = $('#procura').val();
    const key = 'QjZThVyVKLyDiCGWSeHMNTR3Bcih2fNwnpxphMk1'
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        dataType: 'json',
        success: function(dados) {
            document.getElementById('imgApod').src = dados.url
        }
    })
}