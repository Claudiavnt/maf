document.addEventListener('DOMContentLoaded', function () {
  var footer = document.getElementById('footer');

    var divFooter = document.createElement('div');
    divFooter.className = 'footer container-fluid';
    divFooter.innerHTML = `
    <div class="row col-md-12 col-sm-12">
        <div class="footer_logo col-md-2 col-sm-12 p-4">
          <img src="images/logo_sinistra.svg" alt="Logo Sinistra">
        </div>

        <div class="footer_info col-md-3 col-sm-12 mt-4">
          <p class="footer_info_title">DOVE TROVARCI</p>
          <p class="footer_info_text d-flex mt-4">
              <span class="mr-2"><i class="fa fa-university" aria-hidden="true"></i></span>
              <span class="ml-2">Villa Comunale <br> C.so della Repubblica <br> 03024 Ceprano (FR)</span>
          </p>
        </div>

        <div class="footer_info col-md-3 col-sm-12 mt-4">
          <p class="footer_info_title">CONTATTI</p>
          <p class="footer_info_text mt-4">
              <i class="fa fa-phone mr-2" aria-hidden="true"></i>Tel. 0775 9174237
          </p>
          <p class="footer_info_text mt-3">
              <i class="fa fa-envelope mr-2" aria-hidden="true"></i>info@museoceprano.it</p>
          </p>
          <p class="footer_info_text mt-3">
              Ti aspettiamo sui nostri social per<br>rimanere sempre aggiornato sulle<br>novità del MAF
          </p>
          <p class="footer_info_text mt-3">
              <a href="https://www.facebook.com/museofregellae" target="_blank" aria-hidden="true">
                <i class="fa fa-facebook social-logo" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/museoarcheologicofregellae/" target="_blank" aria-hidden="true">
                <i class="fa fa-instagram social-logo" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/@museoarcheologicodifregell9779" target="_blank" aria-hidden="true">
                <i class="fa fa-youtube-play social-logo" aria-hidden="true"></i>
              </a>
          </p>
        </div>

        <div class="footer_info col-md-2 col-sm-12 mt-4">
          <p class="footer_info_title">ORARI</p>
          <p class="footer_info_text d-flex mt-4">
              <span class="mr-2"><i class="fa fa-clock-o" aria-hidden="true"></i></span>
              <span class="ml-2">Tutti i sabati dalle 10.00 alle 13.00</span>
          </p>
          <p class="footer_info_text mt-3">
              Prenota la tua visita al <br>museo di Fregellae<br>Ti aspettiamo!
          </p>

        </div>

        <div class="footer_logo col-md-2 col-sm-12 p-4">
          <img src="images/logo_destra.svg" alt="Logo Destra">
      </div>
    </div>
    `;
    footer.appendChild(divFooter);
});
