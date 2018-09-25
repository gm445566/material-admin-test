// For material design
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'jquery/dist/jquery.min.js'

// For main layout
import './templates/layout/layout.js';
import './stylesheet/style.css';

// For all template
import './templates/categories/categories.js';
import './templates/details/details.js';
import './templates/home/home.js';
import './templates/login/login.js';
import './templates/posts/posts.js';
import './templates/users/users.js';
import './templates/comments/comments.js';

// For all routing
import '../lib/chart.js';
import '../lib/routes.js';

if (Meteor.isClient) {
    $(function() {
        // Hide Sections
        $('.section').hide();

        Meteor.setTimeout(function() {
            $(document).ready(function() {
                // Show sections
                $('.section').fadeIn();

                // Hide preloader
                $('.loader').fadeOut();

                //Init Side nav
                $('.sidenav').sidenav();

                // Init Modal
                $('.modal').modal();

                // Init Select
                $('select').formSelect();

                // Init floating action
                $('.fixed-action-btn').floatingActionButton();

                // Counter
                $('.count').each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });

                // Comments - Approve & Deny
                $('.approve').click(function(e) {
                    M.toast({ html: 'Comment Approved', displayLength: 3000 });
                    e.preventDefault();
                });
                $('.deny').click(function(e) {
                    M.toast({ html: 'Comment Denied', displayLength: 3000 });
                    e.preventDefault();
                });

                // Quick Todos
                $('#todo-form').submit(function(e) {
                    const output = `<li class="collection-item">
                        <div>${$('#todo').val()}
                          <a href="#!" class="secondary-content delete">
                            <i class="material-icons">close</i>
                          </a>
                        </div>
                      </li>`;

                    $('.todos').append(output);

                    M.toast({ html: 'Todo Added', displayLength: 3000 });
                    e.preventDefault();
                });

                // Delete Todos
                $('.todos').on('click', '.delete', function(e) {
                    $(this).parent().parent().remove();
                    M.toast({ html: 'Todo Removed', displayLength: 3000 });
                    e.preventDefault();
                });

            });

        }, 1000);
    });
}