$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


$(function() {
    $(".nav-link").on("click", (event) => {
      $(".navbar-nav").find(".active").removeClass('active');
      $(event.target).parent().addClass('active');
    });
    });
    
     $(function() {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
    });
    
    function printHash() {
    var hs = this.hash;
    var par = ('a[href="'+ hs + '"]');
    bcout.innerHTML = this.hash.substr(1);
    $(".navbar-nav").find(".active").removeClass('active');
    $(".navbar-nav").find('a[href="'+ this.hash + '"]').parent().addClass('active');
    
    }

    $(document).ready(function () {

        $("#sidebar").mCustomScrollbar({
             theme: "minimal"
        });
    
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    
    });

    $(document).ready(function () {

        $("#sidebar").mCustomScrollbar({
             theme: "minimal"
        });
    
        $('#sidebarCollapse').on('click', function () {
            // open or close navbar
            $('#sidebar').toggleClass('active');
            // close dropdowns
            $('.collapse.in').toggleClass('in');
            // and also adjust aria-expanded attributes we use for the open/closed arrows
            // in our CSS
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    
    });