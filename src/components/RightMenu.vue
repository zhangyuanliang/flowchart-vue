<template>
  <ul>
    <li>
      <i class="el-icon-close"></i>删除
    </li>
    <li>
      <i class="fa fa-book" aria-hidden="true"></i>属性
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
  ul {
    position: absolute;
    top: 100px;
    left: 200px;
    width: 70px;
    padding: 2px 4px;
    border: 1px solid #4481bf;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    color: #4481bf;
    user-select: none;
    font-size: 12px;
  }

  ul li {
    text-align: center;
    list-style-type: none;
    padding: 4px 2px;
    cursor: pointer;
    border-radius: 3px;
  }

  ul li:hover {
    background-color: #d4d4d4;
    color: #0a6db3;
  }

  ul li i {
    margin-right: 6px;
  }
</style>
