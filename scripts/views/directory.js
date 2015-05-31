App.Views.Directory = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, 'render');
    },

    render: function() {
        var $container = this.$('.listing').empty();
        console.log($container);
        App.Contacts.each(function(contact) {
            console.log(contact);
            console.log($container);
            new App.Views.Contact({
                model: contact,
                $container: $container
            }).render();
        });

        return this;
    }
});