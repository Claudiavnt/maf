document.addEventListener('DOMContentLoaded', function () {
  var navbarContainer = document.getElementById('mainav');

  var currentPage = window.location.pathname.split('/').pop(); // Ottieni il nome della pagina corrente
    var listItem = document.createElement('ul');
    listItem.className = 'clear mainav-inline';
    listItem.innerHTML = `
      <li class="${currentPage === 'index.html' ? 'active' : ''}"><a href="index.html">Home</a></li>
      <li class="${currentPage === 'visita.html' ? 'active' : ''}"><a href="visita.html">Come Visitare</a></li>
      <li class="${currentPage === 'eventi.html' ? 'active' : ''}"><a href="#">Eventi</a></li>
      <li class="${currentPage === 'educazione.html' ? 'active' : ''}"><a href="educazione.html">Educazione</a></li>
      <li class="${currentPage === 'child.html' ? 'active' : ''}"><a href="#">MAF CHILD</a></li>
      <li class="${currentPage === 'podcast.html' ? 'active' : ''}"><a href="#">Podcast</a></li>
    `;
    navbarContainer.appendChild(listItem);

    $('[data-toggle="tooltip"]').tooltip()
});
