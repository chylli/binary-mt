pjax_config_page("/home", function() {
    return {
        onLoad: function() {
            $('#btn_sign_in').attr('href', Login.login_url());
            $('.link-to-binary-home').attr('href', page.url.url_for('home', '', true));
        }
    };
});
