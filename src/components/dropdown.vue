<template>
  <div class="dropdown">
    <button @click.stop="toggle" 
      :class="{ button: true, 'dropdown-toggle': true, 'active-toggle': show}">Menu</button>
    <ul v-show="show" :class="{'split-content': true, 'dropdown-menu': true, 'dropdown-menu-right': right}">
      <li v-for="item of menu" @click.stop="choose(item)">
        <a :class="{'disabled': item.disabled}">{{item.content}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
      props: {
        title: {
          type: String,
          default: 'Menu'
        },
        menu: {
          type: Array,
          required: true
        },
        right: {
          type: Boolean,
          required: false
        }
      },
      data() {
        return {
          show: false,
          value: null
        }
      },
      watch: {
        show(val) {
          if (val) {
            document.addEventListener('click', this.close)
          } else {
            document.removeEventListener('click', this.close)
          }
        }
      },
      methods: {
        toggle() {
          this.show = !this.show
        },
        choose(item) {
          if (!item.disabled) {
            this.$emit('choice', item.value)
          }
        },
        close() {
          this.show = false
        }
      }
    }
</script>
<style lang="sass">
  .dropdown {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    .button {
      padding: 0 1rem;
      height: 2.125rem;
      text-align: center;
      vertical-align: middle;
      background-color: #ffffff;
      border: 1px #d9d9d9 solid;
      color: #262626;
      cursor: pointer;
      display: inline-block;
      outline: none;
      font-size: .875rem;
      margin: .15625rem 0;
      position: relative;
      &.dropdown-toggle {
        padding-right: 1.625rem;
        &:before {
          display: block;
          position: absolute;
          vertical-align: middle;
          color: transparent;
          font-size: 0;
          content: "";
          height: 5px;
          width: 5px;
          background-color: transparent;
          border-left: 1px solid;
          border-bottom: 1px solid;
          border-color: #1d1d1d;
          top: 50%;
          left: 100%;
          margin-left: -1rem;
          margin-top: -0.1625rem;
          z-index: 2;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          transition: all 0.3s ease;
        }
        &.active-toggle:before {
          -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
          transition: all 0.3s ease;
        }
      }
    }
    .dropdown-menu {
      margin: 0;
      padding: 0;
      width: auto;
      text-align: left;
      background: #ffffff;
      max-width: 15.625rem;
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
          padding: .5rem 1.5rem;
          text-decoration: none;
          vertical-align: middle;
          position: relative;
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
      &.dropdown-menu-right {
        right: 0;
        left: auto;
      }
    }
  }
</style>
