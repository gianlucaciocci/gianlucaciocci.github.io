
/**
 * Main JS file for BlogInn behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function () {
        // Responsive video embeds
        $('.entry-content').fitVids();

        // Navigation
        $('#menu-toggle').click(function () {
            var _this = $(this);
            _this.toggleClass('toggled-on').attr('aria-expanded', _this.attr('aria-expanded') === 'false' ? 'true' : 'false');
            $('.nav-menu').slideToggle();
        });
        $(window).bind('resize orientationchange', function () {
            if ($('#menu-toggle').is(':hidden')) {
                $('#menu-toggle').removeClass('toggled-on').attr('aria-expanded', 'false');
                $('.nav-menu').removeAttr('style');
            }
        });

        // Scroll to top
        $('#top-link').on('click', function (e) {
            $('html, body').animate({ 'scrollTop': 0 });
            e.preventDefault();
        });
    });

}(jQuery));


/*
 * FitVids 1.1
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
!function (t) { "use strict"; t.fn.fitVids = function (e) { var i = { customSelector: null }; if (!document.getElementById("fit-vids-style")) { var r = document.head || document.getElementsByTagName("head")[0], d = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}", a = document.createElement("div"); a.innerHTML = '<p>x</p><style id="fit-vids-style">' + d + "</style>", r.appendChild(a.childNodes[1]) } return e && t.extend(i, e), this.each(function () { var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"]; i.customSelector && e.push(i.customSelector); var r = t(this).find(e.join(",")); r = r.not("object object"), r.each(function () { var e = t(this); if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) { var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(), r = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10), d = i / r; if (!e.attr("id")) { var a = "fitvid" + Math.floor(999999 * Math.random()); e.attr("id", a) } e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * d + "%"), e.removeAttr("height").removeAttr("width") } }) }) } }(window.jQuery || window.Zepto);



// //const headings = Array.from(document.getElementsByClassName("entry-content").getElementsByTagName("h2"));
// const headings = Array.from(document.querySelector(".entry-content").querySelectorAll("h1, h2, h3, h4, h5, h6"));
// const aside = document.querySelector(".widget-toc")

// //aside.innerText = "got here!"

// const toc = aside.querySelector(".tagcloud")

// const ul = document.createElement("ul");
// toc.appendChild(ul);
// headings.map((heading) => {
//     const id = heading.innerText.toLowerCase().replaceAll(" ", "_");
//     heading.setAttribute("id", id);
//     const anchorElement = `<a href="#${id}">${heading.textContent}</a>`;
//     const keyPointer = `<li>${anchorElement}</li>`;
//     ul.insertAdjacentHTML("beforeend", keyPointer);
// });
// const tocAnchors = toc.querySelectorAll("a");
// const obFunc = (entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             const index = headings.indexOf(entry.target);
//             tocAnchors.forEach((tab) => {
//                 tab.classList.remove("active");
//             });
//             tocAnchors[index].classList.add("active");
//             //tocAnchors[index].scrollIntoView({
//             //    block: "nearest",
//             //    inline: "nearest"
//             //});
//         };
//     });
// };
// const obOption = {
//     rootMargin: "-30px 0% -77%",
//     threshold: 1
// };
// const observer = new IntersectionObserver(obFunc, obOption);
// headings.forEach((hTwo) => observer.observe(hTwo));