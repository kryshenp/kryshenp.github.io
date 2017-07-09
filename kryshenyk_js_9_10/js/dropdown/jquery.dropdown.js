$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(500)
            .switchClass( "colored", "black", 200, 'easeOutCirc' );
        },

        function(){
            $(this).children('.sub-menu').slideUp(1500);
            $('.sub-menu-list').parent().switchClass( "black", "colored", 200 ).stop( true, true );
        }
    );
});
