var Loader = {
    deinitialise: function() {
        $('.hidden').removeClass('hidden');
        setTimeout(function() {
            $('#loadingContent').fadeOut();
        }, 500);
    }
}  