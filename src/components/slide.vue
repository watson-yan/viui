<template>
  <div class="vi-slide">
    <ul ref="slider" :style="{width: list.length * 100 + '%', left: 0}">
      <li v-for="item of list" :style="{width: (1/list.length) * 100 + '%'}">
          <template v-if="item.url">
            <a :href="item.url"
              :style="{backgroundImage: 'url(' + item.imgUrl + ')', display: 'block'}"
              :alt="item.url"></a>
          </template>
          <template v-else>
            <a :style="{backgroundImage: 'url(' + item.imgUrl + ')', display: 'block'}"
              :alt="item.url"></a>
          </template>
      </li>
    </ul>
    <ul class="vi-slide-btns">
      <li v-for="n of list.length" @click="tab(n-1)">
        <span :class="{active: active == n-1}">&nbsp;</span>
      </li>
    </ul>
    <button @click="pre" class="vi-slide-arrow vi-slide-arrow-left">
      <svg t="1496909755223" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1862"><path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z" p-id="1863" fill="#ffffff"></path></svg>
    </button>
    <button @click="next" class="vi-slide-arrow vi-slide-arrow-right">
      <svg t="1496909679434" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1040"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="1041" fill="#ffffff"></path></svg>
    </button>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true
      },
      duration: {
        type: Number,
        default: 5000
      }
    },
    data() {
      return {
        interval: null,
        active: 0
      }
    },
    created() {
      this.start() // 开始播放
    },
    methods: {
      // 播放幻灯片
      start() {
        this.interval = setInterval(() => {
          this.move()
        }, this.duration)
      },
      // 幻灯片的移动事件
      move() {
        const imgList = this.$refs.slider // 图片列表
        const totalW = imgList.offsetWidth // 图片列表的宽度
        const w = totalW / this.list.length  // 每一张图片的宽度
        const left = parseInt(imgList.style.left, 0)
        imgList.style.left =
               Math.abs(left) === totalW - w ? 0 : `${left - w}px`
        this.active = Math.abs(left) === totalW - w ? 0 : this.active + 1
      },
      stop() {
        clearInterval(this.interval)
      },
      // 切换到指定索引
      tab(n) {
        this.stop()
        const totalW = this.$refs.slider.offsetWidth
        const w = totalW / this.list.length  // 每一张图片的宽度
        this.$refs.slider.style.left = `-${n * w}px`
        this.active = n
        this.start()
      },
      // 上一张
      pre() {
        const nextIndex = this.active === 0 ? this.list.length - 1 : this.active - 1
        this.tab(nextIndex)
      },
      // 下一张
      next() {
        const nextIndex = this.active === this.list.length - 1 ? 0 : this.active + 1
        this.tab(nextIndex)
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>
<style lang="sass">
  .vi-slide {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    ul {
      margin: 0;
      padding: 0;
      height: 100%;
      position: absolute;
      list-style: none;
      font-size: 0;
      transition: all .5s ease;
      li {
        height: 100%;
        float: left;
        a {
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
      }
      &:after {
        content: '';
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        font-size: 0;
      }
    }
    .vi-slide-btns {
      position: absolute;
      height: auto;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      li {
        span {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          margin: 6px;
          border-radius: 100%;
          background: #999;
          cursor: pointer;
          &.active {
            background: #fff;
          }
        }
      }
    }
    .vi-slide-arrow {
      display: none;
      position: absolute;
      padding: 0.5rem;
      top: 50%;
      border: none;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.3);
      transform: translateY(-50%);
      &:hover {
        background: rgba(0, 0, 0, 0.6);
      }
      &:focus {
        outline: none;
      }
      &.vi-slide-arrow-left {
        left: 2rem;
      }
      &.vi-slide-arrow-right {
        right: 2rem;
      }
    }
    &:hover {
      .vi-slide-arrow {
        display: inline-block;
      }
    }
  }
</style>
