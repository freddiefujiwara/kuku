# kuku
Multiplication table in Japanese

# demo
[![demo](http://freddiefujiwara.com/kuku/images/demo.gif)](https://freddiefujiwara.com/kuku/)

[TRY IT](https://freddiefujiwara.com/kuku/)

# how to deploy
## fork this
fork https://github.com/freddiefujiwara/kuku

## setup cloud functions
./cloud-functions/index.js and package.json -> deploy to your google cloud functions

## modify ./docs/index.html
```javascript
const play = (message) => {
                        const a = document.getElementById('audio');
			a.pause();
			a.currentTime = 0;
		        a.src = `https://[YOUR CLOUD FUNCTIONS].cloudfunctions.net/tts?mp3=mp3&lang=ja&message=${encodeURIComponent(message)}`;
			a.play();
		    }
```
## set up gh-pages
![gh-pages](http://freddiefujiwara.com/kuku/images/gh-pages.png)
