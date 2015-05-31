var App = {
    Models: {},
    Collections: {},
    Views: {},
    Contacts: null,
    Directory: null
};

$(function() {
    window.matt = new App.Models.Contact({
        firstName: 'Matt',
        lastName: 'Harris',
        phoneNumber: '4062234225',
        email: 'matthaeus.harris@gmail.com'
    });

    App.Contacts = new App.Collections.Contact();
    App.Contacts.add(window.matt);

    App.Contacts.add({
        firstName: 'Antonia',
        lastName: 'Mancini',
        phoneNumber: '6502694001',
        email: 'gypsyvegan@gmail.com'
    });



    App.Directory = new App.Views.Directory({
        el: $('#display')
    });

    App.Directory.render();

    App.Contacts.on('add remove', function() {
        App.Directory.render();
    });

});