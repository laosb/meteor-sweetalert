Package.describe({
    name: 'china:sweetalert',
    summary: "Sweet Alert without Google web fonts.",
    version: '0.3.2',
    git: 'https://github.com/laosb/meteor-sweetalert.git',
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'sweetalert/lib/sweet-alert.html',
        'sweetalert/lib/sweet-alert.css',
        'sweetalert/lib/sweet-alert.js'
    ], ['client']);

    if(api.export){

    }
})
