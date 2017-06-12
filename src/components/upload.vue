<template>
  <div @click="upload" class="vi-upload">
    <input @change="change" :name="name" ref="file" type="file">
    <input v-model="text" type="text" readonly>
    <button>
      <svg t="1496817238693" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6756" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
        <path d="M864.746438 189.909258 591.457168 189.909258c-36.496216 0-44.818765 26.647917-53.863768 48.63979 0 0-7.151887 17.20587-7.154957 17.214057-9.444093 22.725584-18.60473 47.143717-51.133587 47.143717L158.923034 302.906821c-16.020882 0-29.007661 12.986779-29.007661 29.007661l0 473.170646c0 16.019859 12.986779 29.007661 29.007661 29.007661l705.823404 0c16.019859 0 29.007661-12.986779 29.007661-29.007661L893.754099 449.473945 893.754099 331.914482 893.754099 218.915895C893.753075 202.896036 880.766296 189.909258 864.746438 189.909258z" p-id="6757" fill="#8a8a8a">
        </path>
        <path d="M171.888324 274.387277l292.37393 0c35.31839 0 38.009685-27.453259 46.612621-51.186799 0.002047-0.005117 2.336208-6.945179 4.100388-12.495592L158.923034 210.704886c-16.020882 0-29.007661 12.986779-29.007661 29.007661l0 15.72003 0 18.954701 0 13.712303C129.915373 288.100604 141.262816 274.387277 171.888324 274.387277z" p-id="6758" fill="#8a8a8a">
        </path>
      </svg>
    </button>
  </div>
</template>
<script>
  export default {
    props: {
      name: {
        type: String
      }
    },
    data() {
      return {
        text: ''
      }
    },
    methods: {
      upload() {
        this.$refs.file.click()
      },
      change() {
        const file = this.$refs.file.files[0]
        this.text = file ? file.name : ''
        this.$emit('fileChanged', file)
      }
    }
  }
</script>
<style lang="sass">
  .vi-upload {
    display: inline-block;
    min-height: 2.125rem;
    height: 2.125rem;
    width: 100%;
    position: relative;
    vertical-align: middle;
    margin: .325rem 0;
    line-height: 1;
    input[type='file'] {
      position: absolute;
      opacity: 0;
      width: 0.0625rem;
      height: 0.0625rem;
    }
    input[type='text'] {
      appearance: none;
      padding: .3125rem;
      position: relative;
      border: 1px #d9d9d9 solid;
      width: 100%;
      height: 100%;
      font-size: 0.875rem;
      z-index: 0;
      cursor: pointer;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      margin: 0;
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
      
    }
    &:hover {
      input, button {
        border-color: #787878;
      }
    }
  }
</style>
