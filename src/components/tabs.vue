<template>
  <div class="vi-tabs">
    <ul>
      <li v-for="item of list" 
        :class="{active: item.name === value}" 
        @click="updateValue(item.name)">{{item.name}}</li>
    </ul>
    <article v-for="item of list" v-show="item.name === value">
      <slot :name="item.name" ></slot>
    </article>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true
      },
      value: {
        type: String,
        default() {
          return this.list[0].name
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      updateValue(val) {
        this.$emit('update:value', val)
      }
    }
  }
</script>
<style lang="sass">
.vi-tabs {
  &>ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow:auto;
    _height:1%;
    border-bottom: 2px solid #1ba1e2;
    li {
      float: left;
      padding: 0.5rem 1.2rem;
      cursor: pointer;
      &.active {
        color: #fff;
        background: #1ba1e2;
      }
      &:hover:not(.active) {
        background: #eee;
      }
    }
  }
}
</style>
