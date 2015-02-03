module.exports = function(grunt) {
    'use strict';

    // Load grunt task automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);


	grunt.initConfig({

        // Variaveis para rotas
        dirs: {
            app: 'app',
            dist: 'dist',
            js: 'assets/js',
            css: 'assets/css',
            fonts: 'assets/fonts',
            img: 'assets/img',
            sass: 'assets/sass'
        },

        pkg: grunt.file.readJSON( 'package.json' ),

        watch: {

            options:{
                livereload: true,
            },

            sass: {
                files: '<%= dirs.app %>/<%= dirs.sass %>/**/*',
                tasks: [
                    'compass:dev',
                    'notify:compass'
                ]
            },

            js: {
                options: {
                    event: ['changed']
                },

                files: [
                    '<%= dirs.app %>/<%= dirs.js %>{,*/}*.js',
                    '<%= dirs.app %>/<%= dirs.js %>/modules/**/*.js'
                ],
                tasks: [
                    'jshint:js',
                    'notify:js'
                ]
            },

            html: {
                files: [
                    // carregamento automático do browser para as atualizações das extensões abaixo
                    '*.{html,htm,shtml,shtm,xhtml,php,jsp,asp,aspx,erb,ctp}'
                ]
            }

        },

        connect: {

            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: true,
                    base: 'app',
                    open: true
                }
            }

        },

        // Notificações
        notify: {
            compass: {
                options: {
                    title: 'SASS - <%= pkg.title %>',
                    message: 'Compilado e minificado com sucesso!'
                }
            },
            js: {
                options: {
                    title: 'Javascript - <%= pkg.title %>',
                    message: 'Minificado e validado com sucesso!'
                }
            },
            image: {
                options: {
                    title: '<%= pkg.title %>',
                    message: 'Imagens otimizadas com sucesso!'
                }
            }
        },

        copy: {

            app: {
                expand: true,
                cwd: 'app',
                src: '**',
                dest: 'dist'
            }

        },

        compass: {

            dev: {
                options: {
                    sassDir: '<%= dirs.app %>/<%= dirs.sass %>',
                    cssDir: '<%= dirs.app %>/<%= dirs.css %>',
                    imagesDir: '<%= dirs.app %>/<%= dirs.img %>',
                    relativeAssets: true,
                    outputStyle: 'expanded', //nested, expanded, compact, compressed
                }
            },

            dist: {
                options: {
                    sassDir: '<%= dirs.dist %>/<%= dirs.sass %>',
                    cssDir: '<%= dirs.dist %>/<%= dirs.css %>',
                    imagesDir: '<%= dirs.dist %>/<%= dirs.img %>',
                    relativeAssets: true,
                    environment: 'production',
                    outputStyle: 'compressed',
                    force: true
                }
            }

        },

        csscomb: {

            dev: {
                options: {
                    config: '/.csscomb.json'
                },
                files: {
                    '<%= dirs.app %>/<%= dirs.css %>style.css': ['<%= dirs.app %>/<%= dirs.css %>style.css'],
                    '<%= dirs.app %>/<%= dirs.css %>style-ie.css': ['<%= dirs.app %>/<%= dirs.css %>style-ie.css']
                }
            },

            dist: {
                options: {
                    config: '/.csscomb.json'
                },
                files: {
                    '<%= dirs.dist %>/<%= dirs.css %>style.css': ['<%= dirs.dist %>/<%= dirs.css %>style.css'],
                    '<%= dirs.dist %>/<%= dirs.css %>style-ie.css': ['<%= dirs.dist %>/<%= dirs.css %>style-ie.css']
                }
            }

        },

        scsslint: {

            options: {
                config: '.scss-lint.yml'
            },            
            files: [
                '<%= dirs.dist %>/<%= dirs.sass %>/**/*.scss'
            ]

        },

        clean: {

            dist: {
                src: 'dist'
            }

        },

        concat: {

            dist: {
                src: [                  
                    '<%= dirs.app %>/<%= dirs.js %>/vendor/jquery/dist/jquery.min.js',
                    '<%= dirs.app %>/<%= dirs.js %>/modules/**.js'
                ],
                dest: '<%= dirs.app %>/<%= dirs.js %>/scripts.js'
            }

        },      

        uglify: {

            options: {
                mangle: true,
                extDot: 'last'
            },
            target: {
                files: {
                    '<%= dirs.dist %>/<%= dirs.js %>/scripts.js': ['<%= dirs.app %>/<%= dirs.js %>/scripts.js']
                }
            }

        },

        jshint: {

            options: {
                "node": true,
                "browser": true,
                "esnext": true,
                "bitwise": true,
                "camelcase": true,
                "curly": true,
                "eqeqeq": true,
                "immed": true,
                "indent": 4,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "quotmark": "single",
                "undef": true,
                "unused": true,
                "strict": true,
                "trailing": true,
                "smarttabs": true,
                "jquery": true
            },

            js: {
                src:['<%= dirs.app %>/<%= dirs.js %>/modules/**/*.js']
            }

        }

	});

    // Registrand Tasks
    grunt.registerTask('build', [
        'clean',
        'copy',
        'compass:dist',
        'csscomb:dist',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'connect',
        'clean',
        'compass:dev',
        'csscomb:dev',  
        'notify:compass',
        'concat',
        'uglify',
        'watch'
    ]);

}