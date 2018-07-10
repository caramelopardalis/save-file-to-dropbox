require('isomorphic-fetch');
const Dropbox = require('dropbox').Dropbox;
const accessToken = 'YOUR ACCESS TOKEN';

var dbx = new Dropbox({
    accessToken: accessToken
});
dbx.filesListFolder({path: ''})
.then(function(response) {
console.log(response);
})
.catch(function(error) {
console.log(error);
});

function create() {
    browser.menus.create({
        id: 'sftd-root',
        title: browser.i18n.getMessage('sftd-root'),
        type: [
            'image'
        ]
    }, onCreated);
}

function onCreated() {
    if (runtime.lastError != null) {
        return;
    }
}