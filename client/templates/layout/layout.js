import { Template } from 'meteor/templating';

import './layout.html';

Template.nav.helpers({
    isSelected: function(param) {
        var current_route = Router.current().route.getName();
        return current_route && current_route === param ? 'active' : '';
    }
});

Template.nav.events({
    'click .home-click': function() {

        Router.go('/');
        document.location.reload(true);
    },
});