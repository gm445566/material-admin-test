import { Template } from 'meteor/templating';
import './details.html';

Template.categories_detail.onRendered(function() {
    CKEDITOR.replace('body');
});