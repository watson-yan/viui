<template>
    <div v-if="queue.length > 0" class="popup-message">
        <template v-for="(item, index) of queue">
            <transition name="slide-fade">
                <section :class="clsName(item)">
                    <div v-if="item.caption" class="message-title">
                        {{item.caption}}
                    </div>
                    <div class="message-text">
                        {{item.content}}
                    </div>
                    <span class="message-closer" @click="remove(index)">+</span>      
                </section>
            </transition>        
        </template>
    </div>
</template>
<script>
export default {
  data() {
    return {
      queue: [] // 消息队列
    }
  },
  methods: {
    clsName(item) {
      let className = 'message-item'
      if (item.type) {
        className = `${className} ${item.type}`
      }
      return className
    },
    remove(index) {
      this.queue.splice(index, 1)
    }
  }
}
</script>
<style lang="sass">
.popup-message {
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  z-index: 1061;
  .message-item {
    display: block;
    margin: .3125rem;
    padding: .625rem;
    min-width: 200px;
    cursor: default;
    max-width: 300px;
    position: relative;
    background-color: #e5f3fb;
    color: #1d1d1d;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
    &.info, &.success, &.alert, &.warning {
        color: #fff;
    }
    &.success { background: #60a917;}
    &.info { background: #1ba1e2;}
    &.alert { background: #ce352c;}
    &.warning { background: #fa6800;}
    .message-title {
        font-size: 1rem;
    }
    .message-text {
        font-size: 0.875rem;
    }
    .message-closer {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 16px;
        cursor: pointer;
        font-weight: 800;
        transform: rotate(45deg);
    }
  }
}
/* 动画效果 */
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>

