<template>
    <div v-if="queue.length != 0" class="vi-alert">
        <section class="cover-mask"></section>
        <article class="alert-panel">
            <div class="alert-header">
                <h4>{{queue[0].caption || '提示'}}<span @click="close">+</span></h4>
            </div>
            <div class="alert-content">
                <section class="icon" v-if="queue[0].type">
                    <svg v-if="queue[0].type == 'success'" t="1496298054274" viewBox="0 0 1024 1024" 
                      version="1.1" xmlns="http://www.w3.org/2000/svg" 
                      p-id="4855" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42">
                      <path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM727.232 438.432l-256.224 259.008c-0.064 0.064-0.192 0.096-0.256 0.192-0.096 0.064-0.096 0.192-0.192 0.256-2.048 1.984-4.576 3.2-6.944 4.544-1.184 0.672-2.144 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.968 2.336-4.096 0-8.224-0.8-12.096-2.4-1.28-0.544-2.304-1.632-3.52-2.304-2.368-1.344-4.832-2.528-6.88-4.544-0.064-0.064-0.096-0.192-0.16-0.256-0.064-0.096-0.192-0.096-0.256-0.192l-126.016-129.504c-12.32-12.672-12.032-32.928 0.64-45.248 12.672-12.288 32.896-12.064 45.248 0.64l103.264 106.112 233.28-235.84c12.416-12.576 32.704-12.704 45.248-0.256C739.52 405.6 739.648 425.856 727.232 438.432z" p-id="4856" fill="#60a917">
                      </path>
                    </svg>
                    <svg v-if="queue[0].type == 'info'" t="1496297962574" viewBox="0 0 1024 1024" 
                      version="1.1" xmlns="http://www.w3.org/2000/svg" 
                      p-id="4535" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42">
                      <path d="M512 65.984C266.048 65.984 65.984 266.048 65.984 512S266.048 958.016 512 958.016 958.016 757.952 958.016 512 757.952 65.984 512 65.984zM544 736c0 17.696-14.304 32-32 32s-32-14.304-32-32l0-288c0-17.696 14.304-32 32-32s32 14.304 32 32L544 736zM512 352c-26.496 0-48-21.536-48-48C464 277.472 485.504 256 512 256s48 21.472 48 48C560 330.464 538.496 352 512 352z" p-id="4536" fill="#59cde2">
                      </path>
                    </svg>
                    <svg v-if="queue[0].type == 'error'" t="1496298274186" viewBox="0 0 1024 1024" 
                      version="1.1" xmlns="http://www.w3.org/2000/svg" 
                      p-id="5309" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42">
                      <path d="M512 64C264.992 64 64 264.96 64 512s200.96 448 448 448c247.008 0 448-200.96 448-448S759.04 64 512 64zM694.752 649.984c12.48 12.544 12.448 32.768-0.064 45.248-6.24 6.208-14.4 9.344-22.592 9.344-8.224 0-16.416-3.136-22.656-9.408l-137.6-138.016-138.048 136.576c-6.24 6.144-14.368 9.248-22.496 9.248-8.256 0-16.48-3.168-22.752-9.504-12.416-12.576-12.32-32.8 0.256-45.248l137.888-136.384-137.376-137.824c-12.48-12.512-12.448-32.768 0.064-45.248 12.512-12.512 32.736-12.448 45.248 0.064l137.568 137.984 138.048-136.576c12.544-12.448 32.832-12.32 45.248 0.256 12.448 12.576 12.32 32.832-0.256 45.248l-137.888 136.384L694.752 649.984z" p-id="5310" fill="#ce352c">
                      </path>
                    </svg>
                    <svg v-if="queue[0].type == 'warning'" t="1496297920040" viewBox="0 0 1024 1024" 
                    version="1.1" xmlns="http://www.w3.org/2000/svg" 
                    p-id="4380" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42">
                      <path d="M942.656 769.376 602.112 159.584c-22.144-39.712-55.104-62.496-90.304-62.496-35.232 0-68.16 22.784-90.368 62.528L81.312 769.344c-22.016 39.456-24.256 79.456-6.112 110.4C93.344 910.624 129.664 928 174.88 928l674.24 0c45.184 0 81.536-17.376 99.648-48.256C966.944 848.8 964.672 808.832 942.656 769.376zM480 320c0-17.664 14.336-32 32-32s32 14.336 32 32l0 288c0 17.696-14.336 32-32 32s-32-14.304-32-32L480 320zM512 832.128c-26.528 0-48-21.504-48-48s21.472-48 48-48 48 21.504 48 48S538.528 832.128 512 832.128z" p-id="4381" fill="#fa6800">
                      </path>
                    </svg>
                </section>
                <section class="main" v-html="queue[0].content"></section>
            </div>
            <div class="alert-footer">
              <section class="alert-footer-btns">
                  <button @click="ok">确定</button>
              </section>
            </div>
        </article>
    </div>
</template>
<script>
export default {
  data() {
    return {
      queue: []
    }
  },
  methods: {
    close() {
      this.queue.shift()
    },
    ok() {
      this.queue[0].callback()
      this.queue.shift()
    }
  }
}
</script>
<style lang="sass">
.vi-alert {
  .cover-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(29, 29, 29, 0.7);
    z-index: 100;
  }
  .alert-panel {
    padding:  0.825rem 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fff;
    width: 420px;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    z-index: 101;
    .alert-header {
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
    .alert-content {
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
    .alert-footer {
      overflow:auto;
      _height:1%;
      .alert-footer-btns {
        padding: 0px 0.5rem;
        float: right;
        button {
          padding: 0 1rem;
          line-height: 2.125rem;
          border: none;
          cursor: pointer;
          color: #262626;
          background: #fff;
          border: 1px solid #d9d9d9;
          border-radius: 3px;
          &:active {
            background: #eee;
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

