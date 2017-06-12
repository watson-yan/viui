<template>
	<div class="vi-pagination">
    <button class="pagination-pre" v-if="currentNum!=1" @click="prePage">
      <svg t="1496909755223" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1862"><path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z" p-id="1863" fill="#666"></path></svg>
    </button>	
    <template v-if="showFirst" >
      <button @click="choose(1)" class="btn-item pagination-pre">1</button>
      <button class="ellipsis">&nbsp;...&nbsp;</button> 
    </template>
    <section class="pagination-btn-group">
      <button v-for="item in pagerList" @click="choose(item)"
        :class="{'active': currentNum == item}">{{item}}</button>
    </section>
    <template v-if="showLast">
      <button class="ellipsis">&nbsp;...&nbsp;</button>
      <button @click="choose(totalPagesNum)" class="btn-item pagination-next">{{totalPagesNum}}</button>
    </template>
    <button class="pagination-next" v-if="currentNum != totalPagesNum" @click="nextPage" 
      style="border-left: none;">
      <svg t="1496909679434" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1040"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="1041" fill="#666"></path></svg>
    </button>
    <section v-if="showTotal" class="pagination-total-show">
      共{{total}}页
    </section>
	</div>
</template>
<script>
export default {
  props: {
    pn: {  // 当前页
      type: Number,
      default: 1
    },
    total: {  // 数据总数
      type: Number,
      required: true
    },
    size: {   // 分页大小
      type: Number,
      default() {
        return 10
      }
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    next: {
      type: Function,
      default(n) {
        this.$route.query.pn = n
        this.$router.push({ path: this.$route.path, query: this.$route.query })
      }
    }
  },
  data() {
    return {
      currentNum: 1,  // 当前页码
      totalPagesNum: 1, // 总页数(默认为1) = Math.ceil(数据总数 / 分页大小)
      pagerList: [],
      showFirst: false,
      showLast: false
    }
  },
  created() {
    this.totalPagesNum = Math.ceil(this.total / this.size)
    this.getPagerList()
  },
  watch: { // 监视当前页，随时更新中间的页码
    currentNum() {
      if (this.pagerList.length === 0) {
        return
      }
      this.getPagerList()
    }
  },
  methods: {
    choose(n) { // 选择
      this.currentNum = n
      if (this.next && typeof this.next === 'function') {
        this.next(n)
      }
    },
    prePage() { // 上一页
      this.currentNum = this.currentNum === 1 ? this.currentNum : this.currentNum - 1
      this.choose(this.currentNum)
    },
    nextPage() { // 下一页
      this.currentNum =
        this.currentNum === this.totalPagesNum ? this.totalPagesNum : this.currentNum + 1
      this.choose(this.currentNum)
    },
    getPagerList() {  // 获取中间部分的页码
      const component = this
      component.pagerList = []
      if (component.totalPagesNum <= 10) {
        for (let i = 1; i <= component.totalPagesNum; i++) {
          component.pagerList.push(i)
        }
      } else {
        let start = 1
        let end = 0
        if (component.currentNum >= 5) {
          start = component.currentNum - 2
        }
        if (component.currentNum <= component.totalPagesNum - 3) {
          end = (component.currentNum === component.totalPagesNum - 3)
                ? start + 5 : start + 4
        } else {
          start = component.totalPagesNum - 4
          end = component.totalPagesNum
        }
        for (let i = start; i <= end; i++) {
          component.pagerList.push(i)
        }
        component.showFirst = start > 2
        component.showLast = end < component.totalPagesNum - 1
      }
    }
  }
}
</script>
<style lang="sass">
	.vi-pagination {
		text-align: center;
    font-size: 0;
    button{
      padding: 5px 10px;
      color: #666;
      background: #fff;
      border: 1px solid #d9d9d9;
      outline: none;
      cursor: pointer;
      font-size: 0.875rem;
      &:hover {
        color: #007ACC;
      }
    }
    .pagination-btn-group {
      display: inline;
      button {
        &.active {
          color: #fff;
          background: #007ACC;
          border: 1px solid #007abb;
        }
        &:not(:last-child) {
          border-right: none;
        }
      }
    }
    .pagination-pre:first-child {
      border-right: none;
    }
    .pagination-total-show {
      display: inline-block;
      vertical-align: middle;
      padding-left: 1.75rem;
      line-height: 2.2rem;
      font-size: 0.875rem;
      color: #666;
    }
    .ellipsis {
      border-left: none;
      border-right: none;
    }
	}
</style>
