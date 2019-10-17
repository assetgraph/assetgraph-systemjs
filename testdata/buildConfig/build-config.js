System.config({
    foo: 123,
    buildConfig: {
        map: {
            css: 'plugin-css/css.js'
        },
        meta: {
            '*.css': {
                loader: 'css'
            }
        }
    },
    testConfig: {}
});
