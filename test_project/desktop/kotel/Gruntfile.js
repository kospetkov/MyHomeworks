module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'assets/css/style.css' : 'assets/css/scss/build.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                // We need to `freeze` browsers versions for testing purposes.
                //browsers: ['opera 12', 'ff 15', 'chrome 25']
            },
            single_file: {
                src: 'assets/css/style.css',
                dest: 'assets/css/style.css'
            }
            // your_target: {
            //     // Target-specific file lists and/or options go here.
            // }
        },
        watch: {
            css: {
                files: ['assets/css/scss/{,*/}{,*/}{,*/}*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });
    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['sass', 'autoprefixer', 'watch']);
};