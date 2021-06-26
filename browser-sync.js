/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | Please report any issues you encounter:
 |  https://github.com/shakyShane/browser-sync/issues
 |
 | For up-to-date information about the options:
 |  https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File
 |
 */
// eslint-disable-next-line no-undef
module.exports = {
    files: ["dist/css/*.css", "dist/js/*.js", "dist/**/*.html"],
    serveStatic: [{
        route: '/project-madurai-website',
        dir: 'dist'
    }],
    ghostMode: false,
};