import { Template } from 'meteor/templating';
import './posts.html';

Template.posts_modal.onRendered(function() {
    // Init Modal
    $('.modal').modal();
});