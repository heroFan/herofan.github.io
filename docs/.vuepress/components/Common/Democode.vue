<template>
  <div class="code">
    <div class="code--title">
      <h2>{{title}}</h2>
      <small>{{description}}</small>
    </div>
    <div class="code--demo">
      <div class="code-content">
        <slot></slot>
      </div>
    </div>
    <el-collapse-transition>
      <div v-if="isShow" class="code--segment">
      <slot name="codeText"></slot>
    </div>
    </el-collapse-transition>
    <div v-if="$slots.codeText" class="code--button" @click="handleToggleShow">
      <i class="el-icon-caret-top" v-show="isShow"></i>
      <i class="el-icon-caret-bottom" v-show="!isShow"></i>
      <span>{{codeTextBtn}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  props: ['title', 'description'],
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示代码'
    }
  },
  methods: {
    handleToggleShow() {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style lang="less" scoped>
.code {
  .code--title {
    h2 {
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-size: 18px;
    }

    small {
      font-size: 14px;
      display: inline-block;
      margin: 10px 0;
      color: #5e6d82;
    }
  }
  .code--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6),
      0 1px 2px 0 rgba(232, 237, 250, 0.5);
    .code-content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 4%;
      border-bottom: 1px solid #ddd;
    }
  }
  .code--button {
    font-size: 14px;
    background: #ffffff;
    color: #d3dce6;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }
    // &:hover span {
    // position: absolute;
    // transform: translateX(-30px);
    // line-height: 44px;
    // transition: .3s;
    // display: inline-block;
    // }
  }

  & + .code {
    margin-top: 40px;
  }

  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>

