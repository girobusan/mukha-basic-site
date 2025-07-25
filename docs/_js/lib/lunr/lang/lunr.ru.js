/*!
 * Lunr languages, `Russian` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Mihai Valentin
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

!function (e, n) {
  "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n() : n()(e.lunr);
}(this, function () {
  return function (e) {
    if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
    if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
    e.ru = function () {
      this.pipeline.reset(), this.pipeline.add(e.ru.trimmer, e.ru.stopWordFilter, e.ru.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.ru.stemmer));
    }, e.ru.wordCharacters = "Ѐ-҄҇-ԯᴫᵸⷠ-ⷿꙀ-ꚟ︮︯", e.ru.trimmer = e.trimmerSupport.generateTrimmer(e.ru.wordCharacters), e.Pipeline.registerFunction(e.ru.trimmer, "trimmer-ru"), e.ru.stemmer = function () {
      var n = e.stemmerSupport.Among,
        r = e.stemmerSupport.SnowballProgram,
        t = new function () {
          function e() {
            for (; !W.in_grouping(S, 1072, 1103);) {
              if (W.cursor >= W.limit) return !1;
              W.cursor++;
            }
            return !0;
          }
          function t() {
            for (; !W.out_grouping(S, 1072, 1103);) {
              if (W.cursor >= W.limit) return !1;
              W.cursor++;
            }
            return !0;
          }
          function w() {
            b = W.limit, _ = b, e() && (b = W.cursor, t() && e() && t() && (_ = W.cursor));
          }
          function i() {
            return _ <= W.cursor;
          }
          function u(e, n) {
            var r, t;
            if (W.ket = W.cursor, r = W.find_among_b(e, n)) {
              switch (W.bra = W.cursor, r) {
                case 1:
                  if (t = W.limit - W.cursor, !W.eq_s_b(1, "а") && (W.cursor = W.limit - t, !W.eq_s_b(1, "я"))) return !1;
                case 2:
                  W.slice_del();
              }
              return !0;
            }
            return !1;
          }
          function o() {
            return u(h, 9);
          }
          function s(e, n) {
            var r;
            return W.ket = W.cursor, !!(r = W.find_among_b(e, n)) && (W.bra = W.cursor, 1 == r && W.slice_del(), !0);
          }
          function c() {
            return s(g, 26);
          }
          function m() {
            return !!c() && (u(C, 8), !0);
          }
          function f() {
            return s(k, 2);
          }
          function l() {
            return u(P, 46);
          }
          function a() {
            s(v, 36);
          }
          function p() {
            var e;
            W.ket = W.cursor, (e = W.find_among_b(F, 2)) && (W.bra = W.cursor, i() && 1 == e && W.slice_del());
          }
          function d() {
            var e;
            if (W.ket = W.cursor, e = W.find_among_b(q, 4)) switch (W.bra = W.cursor, e) {
              case 1:
                if (W.slice_del(), W.ket = W.cursor, !W.eq_s_b(1, "н")) break;
                W.bra = W.cursor;
              case 2:
                if (!W.eq_s_b(1, "н")) break;
              case 3:
                W.slice_del();
            }
          }
          var _,
            b,
            h = [new n("в", -1, 1), new n("ив", 0, 2), new n("ыв", 0, 2), new n("вши", -1, 1), new n("ивши", 3, 2), new n("ывши", 3, 2), new n("вшись", -1, 1), new n("ившись", 6, 2), new n("ывшись", 6, 2)],
            g = [new n("ее", -1, 1), new n("ие", -1, 1), new n("ое", -1, 1), new n("ые", -1, 1), new n("ими", -1, 1), new n("ыми", -1, 1), new n("ей", -1, 1), new n("ий", -1, 1), new n("ой", -1, 1), new n("ый", -1, 1), new n("ем", -1, 1), new n("им", -1, 1), new n("ом", -1, 1), new n("ым", -1, 1), new n("его", -1, 1), new n("ого", -1, 1), new n("ему", -1, 1), new n("ому", -1, 1), new n("их", -1, 1), new n("ых", -1, 1), new n("ею", -1, 1), new n("ою", -1, 1), new n("ую", -1, 1), new n("юю", -1, 1), new n("ая", -1, 1), new n("яя", -1, 1)],
            C = [new n("ем", -1, 1), new n("нн", -1, 1), new n("вш", -1, 1), new n("ивш", 2, 2), new n("ывш", 2, 2), new n("щ", -1, 1), new n("ющ", 5, 1), new n("ующ", 6, 2)],
            k = [new n("сь", -1, 1), new n("ся", -1, 1)],
            P = [new n("ла", -1, 1), new n("ила", 0, 2), new n("ыла", 0, 2), new n("на", -1, 1), new n("ена", 3, 2), new n("ете", -1, 1), new n("ите", -1, 2), new n("йте", -1, 1), new n("ейте", 7, 2), new n("уйте", 7, 2), new n("ли", -1, 1), new n("или", 10, 2), new n("ыли", 10, 2), new n("й", -1, 1), new n("ей", 13, 2), new n("уй", 13, 2), new n("л", -1, 1), new n("ил", 16, 2), new n("ыл", 16, 2), new n("ем", -1, 1), new n("им", -1, 2), new n("ым", -1, 2), new n("н", -1, 1), new n("ен", 22, 2), new n("ло", -1, 1), new n("ило", 24, 2), new n("ыло", 24, 2), new n("но", -1, 1), new n("ено", 27, 2), new n("нно", 27, 1), new n("ет", -1, 1), new n("ует", 30, 2), new n("ит", -1, 2), new n("ыт", -1, 2), new n("ют", -1, 1), new n("уют", 34, 2), new n("ят", -1, 2), new n("ны", -1, 1), new n("ены", 37, 2), new n("ть", -1, 1), new n("ить", 39, 2), new n("ыть", 39, 2), new n("ешь", -1, 1), new n("ишь", -1, 2), new n("ю", -1, 2), new n("ую", 44, 2)],
            v = [new n("а", -1, 1), new n("ев", -1, 1), new n("ов", -1, 1), new n("е", -1, 1), new n("ие", 3, 1), new n("ье", 3, 1), new n("и", -1, 1), new n("еи", 6, 1), new n("ии", 6, 1), new n("ами", 6, 1), new n("ями", 6, 1), new n("иями", 10, 1), new n("й", -1, 1), new n("ей", 12, 1), new n("ией", 13, 1), new n("ий", 12, 1), new n("ой", 12, 1), new n("ам", -1, 1), new n("ем", -1, 1), new n("ием", 18, 1), new n("ом", -1, 1), new n("ям", -1, 1), new n("иям", 21, 1), new n("о", -1, 1), new n("у", -1, 1), new n("ах", -1, 1), new n("ях", -1, 1), new n("иях", 26, 1), new n("ы", -1, 1), new n("ь", -1, 1), new n("ю", -1, 1), new n("ию", 30, 1), new n("ью", 30, 1), new n("я", -1, 1), new n("ия", 33, 1), new n("ья", 33, 1)],
            F = [new n("ост", -1, 1), new n("ость", -1, 1)],
            q = [new n("ейше", -1, 1), new n("н", -1, 2), new n("ейш", -1, 1), new n("ь", -1, 3)],
            S = [33, 65, 8, 232],
            W = new r();
          this.setCurrent = function (e) {
            W.setCurrent(e);
          }, this.getCurrent = function () {
            return W.getCurrent();
          }, this.stem = function () {
            return w(), W.cursor = W.limit, !(W.cursor < b) && (W.limit_backward = b, o() || (W.cursor = W.limit, f() || (W.cursor = W.limit), m() || (W.cursor = W.limit, l() || (W.cursor = W.limit, a()))), W.cursor = W.limit, W.ket = W.cursor, W.eq_s_b(1, "и") ? (W.bra = W.cursor, W.slice_del()) : W.cursor = W.limit, p(), W.cursor = W.limit, d(), !0);
          };
        }();
      return function (e) {
        return "function" == typeof e.update ? e.update(function (e) {
          return t.setCurrent(e), t.stem(), t.getCurrent();
        }) : (t.setCurrent(e), t.stem(), t.getCurrent());
      };
    }(), e.Pipeline.registerFunction(e.ru.stemmer, "stemmer-ru"), e.ru.stopWordFilter = e.generateStopWordFilter("алло без близко более больше будем будет будете будешь будто буду будут будь бы бывает бывь был была были было быть в важная важное важные важный вам вами вас ваш ваша ваше ваши вверх вдали вдруг ведь везде весь вниз внизу во вокруг вон восемнадцатый восемнадцать восемь восьмой вот впрочем времени время все всегда всего всем всеми всему всех всею всю всюду вся всё второй вы г где говорил говорит год года году да давно даже далеко дальше даром два двадцатый двадцать две двенадцатый двенадцать двух девятнадцатый девятнадцать девятый девять действительно дел день десятый десять для до довольно долго должно другая другие других друго другое другой е его ее ей ему если есть еще ещё ею её ж же жизнь за занят занята занято заняты затем зато зачем здесь значит и из или им именно иметь ими имя иногда их к каждая каждое каждые каждый кажется как какая какой кем когда кого ком кому конечно которая которого которой которые который которых кроме кругом кто куда лет ли лишь лучше люди м мало между меля менее меньше меня миллионов мимо мира мне много многочисленная многочисленное многочисленные многочисленный мной мною мог могут мож может можно можхо мои мой мор мочь моя моё мы на наверху над надо назад наиболее наконец нам нами нас начала наш наша наше наши не него недавно недалеко нее ней нельзя нем немного нему непрерывно нередко несколько нет нею неё ни нибудь ниже низко никогда никуда ними них ничего но ну нужно нх о об оба обычно один одиннадцатый одиннадцать однажды однако одного одной около он она они оно опять особенно от отовсюду отсюда очень первый перед по под пожалуйста позже пока пор пора после посреди потом потому почему почти прекрасно при про просто против процентов пятнадцатый пятнадцать пятый пять раз разве рано раньше рядом с сам сама сами самим самими самих само самого самой самом самому саму свое своего своей свои своих свою сеаой себе себя сегодня седьмой сейчас семнадцатый семнадцать семь сих сказал сказала сказать сколько слишком сначала снова со собой собою совсем спасибо стал суть т та так такая также такие такое такой там твой твоя твоё те тебе тебя тем теми теперь тех то тобой тобою тогда того тоже только том тому тот тою третий три тринадцатый тринадцать ту туда тут ты тысяч у уж уже уметь хорошо хотеть хоть хотя хочешь часто чаще чего человек чем чему через четвертый четыре четырнадцатый четырнадцать что чтоб чтобы чуть шестнадцатый шестнадцать шестой шесть эта эти этим этими этих это этого этой этом этому этот эту я \ufeffа".split(" ")), e.Pipeline.registerFunction(e.ru.stopWordFilter, "stopWordFilter-ru");
  };
});