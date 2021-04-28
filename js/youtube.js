const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      //  함수이름 바꾸면 안된다.
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8',
          playerVars : {
            autoplay : true,
            loop :  true,
            playlist : 'An6LvWQuj_8'
          },
          events : {
            onReady : function(event){
              event.target.mute(); // 음소거
            }
          }
        });
      }

