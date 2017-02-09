jQuery(document).ready(function() {

    ////////////
    // MEDIUM //
    ////////////

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $(".input-group input").focusout(function(){
        if ($(this).val()){
            $(this).attr('value', $(this).val()).parent().find('.error').hide();
        }
    });

    var ajaxRequest = {};
    ajaxRequest.method = 'GET';
    ajaxRequest.url = 'https://tripco-api.herokuapp.com/medium';
    ajaxRequest.contentType = 'application/json; charset=utf-8';
    ajaxRequest.dataType = 'json';

    $.ajax(ajaxRequest)
        .done(function(response) {
            console.log('response', response);

            var source   = $("#medium-template").html();
            var template = Handlebars.compile(source);
            var context;
            var html;

            $.each(response, function(key, post){
                var postDate = new Date(post.date);
                context = {postTitle: post.title, postSubtitle: post.subtitle, postDate: postDate.getDate() + '/' + postDate.getMonth()+1 + '/' + postDate.getFullYear(), postLink: 'https://medium.com/hotel-coaching/' + post.link};
                html = template(context);
                $('#medium-posts').append(html);
            });

        })
        .fail(function(error) {
            console.log('error', error);
        })
        .always(function(){
            $('.medium-loading').hide();
        });

    $('.sendMailing').on('click', function(e){

        e.preventDefault();

        var form = $(this).parent();
        $(form).find('.error').hide();

        if (!$(form).find('[name=email]').val()) {
            $(form).find('[name=email]').parent().find('.error').css("display", "flex").hide().fadeIn();;
            $(form).find('[name=email]').parent().find('input').focus();
            return false;
        } else if (!validateEmail($(form).find('[name=email]').val())) {
            $(form).find('[name=email]').parent().find('.error').css("display", "flex").hide().fadeIn();;
            $(form).find('[name=email]').parent().find('input').focus();
            return false;
        }

        $('.sendMailing').addClass('sending');
        $('.newsletter-success').hide();
        $('.newsletter-error').hide();

        e.preventDefault();
        $.ajax({
                method: "POST",
                url: "https://tripco-api.herokuapp.com/sendEmail",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({ email: $(form).find('[name=email]').val() })
            })
            .done(function(response) {
                $(form).parent().find('.newsletter-success').show();
                $(form).hide();
            })
            .fail(function(jqXHR, textStatus) {
                $(form).find('.newsletter-error').show();
            })
            .always(function() {
                $('.sendMailing').removeClass('sending');
            });

    });
}); //end of "document ready" event