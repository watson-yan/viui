<template>
  <div class="vi-select" :style="{width: width + 'px'}">
    <div class="vi-select-input">
      <input type="text" :value="selectedText" @click.stop="show = !show" readonly>
      <span class="arrow-down" :style="{left: width - 16 + 'px'}"></span>
    </div>
    <ul v-if="show" class="dropdown-menu" :style="{width: width + 'px'}">
      <li v-for="item of options" @click="select(item)">
        <a>{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 200
    },
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: Object
    }
  },
  data() {
    return {
      show: false,
      selectedText: ''
    }
  },
  mounted() {
    // 如果传入默认选中值的话
    if (this.selected) {
      this.options.forEach((option) => {
        if (option.text === this.selected.text || option.value === this.selected.value) {
          this.selectedText = option.text
          this.$emit('update:selected', this.selected)
        }
      })
    }
  },
  watch: {
    show() {
      if (this.show) {
        document.body.addEventListener('click', this.tab)
      } else {
        document.body.removeEventListener('click', this.tab)
      }
    }
  },
  methods: {
    select(item) {
      this.selectedText = item.text
      this.$emit('update:selected', item)
    },
    tab() {
      this.show = false
    }
  }
}
</script>
<style lang="sass">
  .vi-select {
    position: relative;
    display: inline-block;
    .vi-select-input {
      margin: .325rem 0;
      height: 2.125rem;
      min-height: 2.125rem;
      input {
        appearance: none;
        padding: .375rem;
        padding-right: 1.4rem;
        position: relative;
        border: 1px #d9d9d9 solid;
        width: 100%;
        height: 100%;
        font-size: 0.875rem;
        z-index: 0;
        cursor: pointer;
      }
      .arrow-down {
        display: block;
        position: absolute;
        top: 19px;
        border-top: 4px solid #888;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
    }
    .dropdown-menu {
      margin: 2px 0 0 0;
      padding: 0;
      width: auto;
      text-align: left;
      background: #ffffff;
      max-height: 20rem;
      overflow: auto;
      list-style: none inside none;
      border-collapse: separate;
      position: absolute;
      z-index: 1000;
      left: 0;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
      li {
        display: block;
        float: none;
        position: relative;
        line-height: 1.25rem;
        &:hover {
          a:not(.disabled) {
            color: white;
            background: #59cde2;
          }
        }
        a {
          color: #727272;
          font-size: .875rem;
          display: block;
          float: none;
          padding: .4rem 1.5rem;
          text-decoration: none;
          vertical-align: middle;
          position: relative;
          white-space: nowrap;
          min-width: 12.5rem;
          border: none;
          cursor: pointer;
          word-break: break-all;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &.disabled {
            color: #999;
            background: #eee;
            cursor: not-allowed;
          }
        }
      }
    }
  }
</style>

