const gulp = require('gulp');
const browserSync = require('browser-sync').create();


gulp.task('default', ['watch'])

/* gulp.task('watch', ['array', 'of', 'tasks',
 *        'to', 'complete','before', 'watch'], function (){
 *      ...
 *  })
 */
gulp.task('watch', ['browserSync'], function() {
  // gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/css/**/*.css', browserSync.reload);
  // Other watchers
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './src/',
    },
  });
});
