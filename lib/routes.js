Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {
            path: '/',
            template: 'home'
        })
        /*   this.route('/', function() {
              this.render('home');
          }); */
    this.route('/categories', function() {
        this.render('categories');
    });
    this.route('/comments', function() {
        this.render('comments');
    });
    this.route('/users', function() {
        this.render('users');
    });
    this.route('/categories/details', function() {
        this.render('categories_detail');
    });
    this.route('/posts', function() {
        this.render('posts');
    });
    this.route('/login', function() {
        this.render('login');
    });

    /* this.route('test02', {
        path: '/test02',
        template: 'test02'
    }); */
})