$(document).ready(function() {
    $('#name').on('keyup',function() {
        let name = $('#name').val();
        $('.text-success').html(name);
    })
    $('#description').on('keyup',function() {
        let description = $('#description').val();
        $('.text-success').html(description);
    })
})
