<template>
  <div class="graph-prop">
    <div class="prop-title">节点属性：</div>
    <ul>
      <Li>
        <span>ID:</span><span>test1</span>
      </Li>
      <Li>
        <span>名称:</span><span>test2</span>
      </Li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.graph-prop {
  height: 20%;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  list-style-type: none;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-bottom: 1px solid #cbd8f3;
}

ul li span {
  display: inline-block;
  width: 25%;
  color: gray;
}

.prop-title {
  line-height: 40px;
  padding-left: 6px;
  text-align: middle;
  background-color: #d7dfef;;
}
</style>
