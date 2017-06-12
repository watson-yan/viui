<template>
  <div v-if="queue.length != 0" class="vi-confirm">
    <section class="cover-mask"></section>
    <article class="confirm-panel">
      <div class="confirm-header">
        <h4>{{queue[0].caption || '提示'}}<span @click="close">+</span></h4>
      </div>
      <div class="confirm-content">
        <section class="icon">
          <svg t="1496298198539" viewBox="0 0 1024 1024" version="1.1" 
            xmlns="http://www.w3.org/2000/svg" p-id="5018" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            width="40" height="40">
            <path d="M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64zM512 832.352c-26.496 0-48-21.504-48-48s21.504-48 48-48 48 21.504 48 48S538.496 832.352 512 832.352zM600.576 505.184C572.736 532.992 544 561.728 544 587.552l0 54.112c0 17.664-14.336 32-32 32s-32-14.336-32-32l0-54.112c0-52.352 40-92.352 75.328-127.648C581.216 434.016 608 407.264 608 385.92c0-53.344-43.072-96.736-96-96.736-53.824 0-96 41.536-96 94.56 0 17.664-14.336 32-32 32s-32-14.336-32-32c0-87.424 71.776-158.56 160-158.56s160 72.096 160 160.736C672 433.792 635.68 470.08 600.576 505.184z" p-id="5019" fill="#1296db">
            </path>
          </svg>
        </section>
        <section class="main" v-html="queue[0].content"></section>
      </div>
      <div class="confirm-footer">
          <section class="confirm-footer-btns">
              <button class="confirm-footer-btn-cancel" @click="cancel">取消</button>
              <button class="confirm-footer-btn-confirm" @click="confirm">确定</button>
          </section>
      </div>
    </article>
  </div>
</template>
<style lang="sass">
.vi-confirm {
  .cover-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(29, 29, 29, 0.7);
    z-index: 100;
  }
  .confirm-panel {
    padding:  0.825rem 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fff;
    width: 420px;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    z-index: 101;
    .confirm-header {
      padding: 0.5rem;
      padding-bottom: 0;
      h4 {
        margin: 0;
        span {
          margin-top: -0.5rem;
          float: right;
          cursor: pointer;
          font-size: 1.5rem;
          color: #666;
          transform: rotate(45deg);
          &:hover {
            color: #1b89de;
          }
        }
      }
    }
    .confirm-content {
      padding: 1rem 0.5rem;
      display: flex;
      .icon, .main {
        align-self: center;
      }
      .icon {
        flex: 0 0 auto;
        padding-right: 0.75rem;
        &>svg {
          vertical-align: middle;
        }
      }
      .main {
        flex: 1 1 auto;
      }
    }
    .confirm-footer {
      overflow:auto;
      _height:1%;
      .confirm-footer-btns {
        padding: 0px 0.5rem;
        float: right;
        button {
          padding: 0 1rem;
          line-height: 2.125rem;
          border: none;
          cursor: pointer;
          border-radius: 3px;
          &.confirm-footer-btn-confirm {
            color: #fff;
            background: #1b89de;
            &:active {
              background: #1b6eae;
            }
          }
          &.confirm-footer-btn-cancel {
            color: #262626;
            background: #fff;
            border: 1px solid #d9d9d9;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      queue: []
    }
  },
  methods: {
    confirm() {
      this.queue[0].callback()
      this.queue.shift()
    },
    cancel() {
      this.queue[0].cancel()
      this.queue.shift()
    },
    close() {
      this.queue.shift()
    }
  }
}
</script>
