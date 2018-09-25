# material-admin-test

This project for apply material design to web by using [meteor](https://www.meteor.com/) js framework


### Setup
 ```
 git clone https://github.com/gm445566/material-admin-test.git myapp
cd myapp
meteor npm install
  ```

### Initial project starting 
I  add package by using npm

- meteor npm i materialize-css --save
- meteor npm i jquery@3.2.1 --save
- meteor add iron:router

because I have problem with installing by "meteor add materialize-css ". You will change "package.json" at mainModule client to be "index.js"
```javascript
"meteor": {
        "mainModule": {
            "client": "client/index.js",
            "server": "server/main.js"
        },
        "testModule": "tests/main.js"
    }
```



### Design
This project will have template/section each content that is

- categories
- comments
- details
- home
- layout
- login
- posts
- users

in jquery coding I use 

```javascript

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

```

or you can use

```javascript
Template.layout.onRendered(function() {
    // code here
})
```
### Screenshots

![alt text](https://raw.githubusercontent.com/gm445566/material-travelville/master/readme/screen1.png)
![alt text](https://raw.githubusercontent.com/gm445566/material-travelville/master/readme/screen2.png)
![alt text](https://raw.githubusercontent.com/gm445566/material-travelville/master/readme/screen3.png)

project reference from [Udemy course of Traversy Media](https://www.udemy.com/materialize-css-from-scratch-with-5-projects/)