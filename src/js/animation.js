$(document).ready(function() {
    //biographie
    $('#navigation li:nth-child(1)').click(function() {
        $('#bio').slideToggle("slow", function() {});
    });
    //membres
    $('#navigation li:nth-child(2)').click(function() {
        $('#membres').slideToggle("slow", function() {});
    });
    //albums
    $('#navigation li:nth-child(3)').click(function() {
        $('#albums').slideToggle("slow", function() {});
    });
    //concerts
    $('#navigation li:nth-child(4)').click(function() {
        $('#concerts').slideToggle("slow", function() {});
    });
});