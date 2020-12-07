import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'
import './index.scss'
// require videojs style
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
