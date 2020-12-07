<template>
  <div class="mod-video-components">
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"

      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"

      @statechanged="playerStateChanged($event)"
      @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>

  export default {
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        playerOptions: {
          preload: 'none',
          muted: false,
          language: 'cn',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          poster: ''
        }
      }
    },
    computed: {
      player () {
        return this.$refs.videoPlayer.player
      }
    },
    created () {
      Object.assign(this.playerOptions, this.options)
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player)
      },
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        console.log('player end!', player)
      },
      onPlayerWaiting(player) {
        console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        console.log('player Playing!', player)
      },
      onPlayerLoadeddata(player) {
        console.log('player loadingdata!', player)
      },
      onPlayerTimeupdate(player) {
        console.log('player onPlayerTimeupdate!', player)
      },
      onPlayerCanplay(player) {
        console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        console.log('player Canplaythrough!', player)
      },

      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>

<style scoped lang="less">
</style>
