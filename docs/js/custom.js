Reveal.initialize({
			dependencies: [{
				src: 'plugin/markdown/marked.js'
			}, {
				src: 'plugin/markdown/markdown.js'
			}],
			markdown: {
				smartypants: true
			},
			// Display controls in the bottom right corner
			controls: true,
			// Display a presentation progress bar
			progress: true,
			// Display the page number of the current slide
			slideNumber: true,
			// Push each slide change to the browser history
			history: true,            
            center: false,
		});		
	Reveal.configure({ transition: 'none', transitionSpeed: 'fast'});