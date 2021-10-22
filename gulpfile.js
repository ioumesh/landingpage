const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minify = require("gulp-minify");
// import minifyimg from ('gulp-imagemin')

gulp.task("styles", () => {
  return gulp
    .src("scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("css"));
});

gulp.task("minify", () => {
  return gulp.src("js/*.js").pipe(minify()).pipe(gulp.dest("js"));
});

gulp.task("minifyimg", () => {
  return gulp.src("images/*").pipe(minifyimg()).pipe(gulp.dest("minImages"));
});
gulp.task("watch", () => {
  return gulp.watch("scss/*.scss", (done) => {
    gulp.series(["styles"])(done);
  });
});
