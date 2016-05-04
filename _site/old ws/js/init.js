<!DOCTYPE HTML>
<html>
    	<head>
		<title>gianlucaciocci.com - Gianluca Ciocci personal page</title>
		
			<meta name="description" content="Write an awesome description for your new site here. You can edit this
 line in _config.yml. It will appear in your document head meta (for
Google search results) and in your feed.xml site description.
">
		
		<meta name="author" content="Gianluca Ciocci">
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<link rel="alternate" type="application/atom+xml" title="Sketching ideas." href="/atom.xml" />
	</head>
    <body>
        
        <!-- Header -->
	<section id="header">
		<header>
			<span class="image avatar"><img src="/images/avatar.jpg" alt="" /></span>
			<h1 id="logo">Gianluca Ciocci</h1>
			<p>Sketching notes. Just take it as it is</p>
		</header>
		<nav id="nav">
			<ul>
				<li><a href="#one" class="active">What Is This All About?</a></li>
				<li><a href="#two">About me</a></li>
				<li><a href="#three">Things I Can Do</a></li>
				<li><a href="#four">A Few Accomplishments</a></li>
				<li><a href="#five">Some Writing</a></li>
			</ul>
		</nav>
		<footer>
			<ul class="icons">
				
					<li><a href="https://www.linkedin.com/in/gianlucaciocci" target="_blank" class="icon fa-linkedin"><span class="label">LikedIn</span></a></li>
				

				
					<li><a href="http://github.com/gianlucaciocci" target="_blank" class="icon fa-github"><span class="label">Github</span></a></li>
				
				
				
					<li><a href="http://twitter.com/gianlucaciocci" target="_blank" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
				

				
				<li><a href="mailto:me@gianlucaciocci.com" target="_blank" class="icon fa-envelope"><span class="label">Email</span></a></li>
				

				
				<li><a href="/atom.xml" target="_blank" class="icon fa-rss"><span class="label">RSS</span></a></li>
				
			</ul>
		</footer>
	</section>
        <div id="wrapper">
            <!-- Main -->
            <div id="main">
                /*
	Read Only by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: { href: '/css/style.css', containers: '45em', grid: { gutters: ['2em', 0] } },
			xlarge: { media: '(max-width: 1680px)', href: '/css/style-xlarge.css' },
			large: { media: '(max-width: 1280px)', href: '/css/style-large.css', containers: '42em', grid: { gutters: ['1.5em', 0] }, viewport: { scalable: false } },
			medium: { media: '(max-width: 1024px)', href: '/css/style-medium.css', containers: '85%!' },
			small: { media: '(max-width: 736px)', href: '/css/style-small.css', containers: '90%!', grid: { gutters: ['1.25em', 0] } },
			xsmall: { media: '(max-width: 480px)', href: '/css/style-xsmall.css' }
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				titleBar: {
					breakpoints: 'medium',
					width: '100%',
					height: 44,
					position: 'top-left',
					side: 'top',
					html: '<span class="toggle" data-action="toggleLayer" data-args="sidePanel"></span><span class="title" data-action="copyText" data-args="logo"></span>'
				},
				sidePanel: {
					breakpoints: 'medium',
					hidden: true,
					width: { small: 275, medium: '20em' },
					height: '100%',
					animation: 'pushX',
					position: 'top-right',
					side: 'right',
					orientation: 'vertical',
					clickToHide: true,
					html: '<div data-action="moveElement" data-args="header"></div>'
				}
			}
		}
	});

	$(function() {

		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');

		// Forms (IE<10).
			var $form = $('form');
			if ($form.length > 0) {

				$form.find('.form-button-submit')
					.on('click', function() {
						$(this).parents('form').submit();
						return false;
					});

				if (skel.vars.IEVersion < 10) {
					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();
				}

			}

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly()
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Prevent default behavior.
							event.preventDefault();

						// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

			// Initialize scrollzer.
				$.scrollzer(ids, { pad: 300, lastHack: true });

	});

})(jQuery);

            </div>
            <!-- Footer -->
<section id="footer">
	<div class="container">
		<ul class="copyright">			
			<li>&copy; 2016 Gianluca Ciocci. All rights reserved.</li>
		</ul>
	</div>
</section>
		</div>

        <!-- Scripts -->
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.scrollzer.min.js"></script>
            <script src="assets/js/jquery.scrolly.min.js"></script>
            <script src="assets/js/skel.min.js"></script>
            <script src="assets/js/util.js"></script>
            <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
            <script src="assets/js/main.js"></script>
	</body>
</html>


<!-- Asynchronous Google Analytics snippet -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-77272252-1', 'auto');
  ga('send', 'pageview');

</script>




<!--
<script>
  var _gaq = _gaq || [];
  var pluginUrl =
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
  _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
  _gaq.push(['_setAccount', 'gianlucaciocci']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
-->