const { src, dest, watch, series, parallel } = require("gulp");
const purgecss = require("gulp-purgecss");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
var exec = require("child_process").exec;

async function buildSite(cb) {
  exec("mukha-ssg", { cwd: "." }, (err, out, stderr) => {
    // console.log(out);
    stderr && console.log(stderr);
    err && console.error(err);
    cb();
  });
}
async function buildCSS() {
  return src("scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("site/config/themes/notepad/assets/"))
    .pipe(sourcemaps.write("."));
  //.pipe(dest("css/"));
}

async function productionCSS() {
  return src("scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(purgecss({ content: ["static/**/*.html"] }))
    .pipe(sass({ style: "compressed" }).on("error", sass.logError))
    .pipe(dest("site/config/themes/notepad/assets/"));
}

async function watchCSS() {
  return watch(["scss/*.scss"], buildCSS);
}

async function watchSite() {
  return watch(["site/"], { delay: 500 }, buildSite);
}

async function watchAll() {
  watchCSS();
  watchSite();
}

exports.watchCSS = watchCSS;
exports.watchSite = watchSite;
exports.css = buildCSS;
exports.buildSite = buildSite;
exports.watchAll = watchAll;
exports.prodCSS = productionCSS;
