<template>
  <div class="left-tools">
    <ul>
      <li>
        <i class="tools select-icon"></i><span>选择</span>
      </li>
      <li>
        <i class="tools addStartEnd-icon"></i><span>自动插入</span>
      </li>
      <li draggable>
        <i class="tools start-icon"></i><span>开始</span>
      </li>
      <li draggable>
        <i class="tools end-icon"></i><span>结束</span>
      </li>
      <li draggable>
        <i class="tools ordinary-icon"></i><span>普通活动</span>
      </li>
      <li draggable>
        <i class="tools block-icon"></i><span>块活动</span>
      </li>
      <li draggable>
        <i class="tools subFlow-icon"></i><span>子活动</span>
      </li>
      <li>
        <i class="tools line-icon"></i><span>转移</span>
      </li>
      <li>
        <i class="tools polyline-icon"></i><span>自转移</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.left-tools {
  width: 160px;
  height: 100%;
  border-right: 1px solid #6e94e0;
}

ul {
  padding: 0 10px;
  color: #757474;
}

ul li {
  list-style-type: none;
  height: 30px;
  line-height: 30px;
  padding: 0 8px;
  border-radius: 4px;
  position: relative;
}

ul li:hover {
  cursor: pointer;
  color: white;
  background-color: #ACB9CB;
}

.left-tools i.tools {
  position: absolute;
  top: 8px;
  display: inline-block;
  width: 16px;
  height: 16px;
  overflow: hidden;
}

.left-tools span {
  margin-left: 20px;
}

.left-tools .select-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0px 0px;
}

.left-tools .addStartEnd-icon {
  background: url('../assets/wf_tools.png');
  background-position: 42px 0px;
}

.left-tools .start-icon {
  background: url('../assets/wf_tools.png');
  background-position: 81px 0px;
}

.left-tools .end-icon {
  background: url('../assets/wf_tools.png');
  background-position: 61px 0px;
}

.left-tools .ordinary-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0px 57px;
}

.left-tools .block-icon {
  background: url('../assets/wf_tools.png');
  background-position: 80px 57px;
}

.left-tools .subFlow-icon {
  background: url('../assets/wf_tools.png');
  background-position: 61px 57px;
}

.left-tools .route-icon {
  background: url('../assets/wf_tools.png');
  background-position: 41px 57px;
}

.left-tools .line-icon {
  background: url('../assets/wf_tools.png');
  background-position: 0 34px;
}

.left-tools .polyline-icon {
  background: url('../assets/wf_tools.png');
  background-position: 81px 34px;
}

.left-tools .loop-icon {
  background: url('../assets/wf_tools.png');
  background-position: 60px 34px;
}
</style>
