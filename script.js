let button1 = document.getElementByClass('button1')
button1.addEventListener('click', smoothscroll)

function smoothscroll(){
    formaSend.scrollIntoView({behavior: 'smooth'})
}
//               TABS                //
//$(document).ready(function(){
//    $('.container_of_tabs').on('click', '.tab', function(){
//        $('.container_of_tabs').find('active').removeClass('active');
//        $(this).addClass('active');
//        $('.tab-form').eq($(this).index()).addClass('active');
//   });
//});