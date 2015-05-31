var App = {
    Models: {},
    Collections: {},
    Contacts: null
};

$(function() {
    window.matt = new App.Models.Contact({
        firstName: 'Matt',
        lastName: 'Harris',
        phoneNumber: '4062234225',
        email: 'matthaeus.harris@gmail.com'
    });

    App.Contacts = new App.Collections.Contact();
    App.Contacts.add(window.matt)

    App.Contacts.add({
        firstName: 'Antonia',
        lastName: 'Mancini',
        phoneNumber: '6502694001',
        email: 'gypsyvegan@gmail.com'
    });

    App.Contacts.add({});

    var contactListing = '';

    App.Contacts.each(function(contact) {
        contactListing += '<div>' +
            contact.get('firstName') + " " +
            contact.get('lastName') + " ";

        if (contact.isValid()) {
            contactListing += "(valid)";
        } else {
            contactListing += "(invalid)";
        }
        contactListing += "</div>";
    });
    $('#display').html(contactListing);
});