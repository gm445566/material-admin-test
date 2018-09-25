import { Template } from 'meteor/templating';
import './categories.html';

Template.categories_modal.onRendered(function() {
    // Init Modal
    $('.modal').modal();
});