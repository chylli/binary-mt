module.exports = {
    all: {
        options: {
            format: 'json_flat',
            pretty: true
        },
        files: [{
            dest: global.dist + '/javascript.json',
            src: [
            'src/javascript/lib/jquery.js',
            'src/javascript/lib/moment/moment.js',
            'src/javascript/lib/**/*.js',
            'src/javascript/autogenerated/texts.js',
            'src/javascript/autogenerated/*.js',
            'src/javascript/binary/base/*.js',
            'src/javascript/binary/**/*.js',
            ]
        },
        {
            dest: global.dist + '/binary.json',
            src: [
            'src/javascript/lib/jquery.js',
            'src/javascript/lib/moment/moment.js',
            'src/javascript/lib/**/*.js',
            'src/javascript/autogenerated/texts.js',
            'src/javascript/autogenerated/*.js',
            'src/javascript/binary/base/*.js',
            'src/javascript/binary/**/*.js'
            ]
        }]
    }
};
