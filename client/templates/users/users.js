import { Template } from 'meteor/templating';
import './users.html';

Template.users_modal.onRendered(function() {
    // Init Modal
    $('.modal').modal();
});