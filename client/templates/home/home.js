import { Template } from 'meteor/templating';
import './home.html';

Template.modal.onRendered(function() {
    // Init Modal
    $('.modal').modal();
});