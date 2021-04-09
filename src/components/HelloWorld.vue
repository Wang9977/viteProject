<template>
  <div class="todo">
    <div class="todo-form">
      <div class="todo-input">
        <el-input @keyup.enter="handleAddList" v-model="contentRef" type="text" placeholder="请输入事项内容" />
      </div>
      <el-button type="button" @click="handleAddList">添加事项</el-button>
    </div>
    <div class="todo-show">
    <ul class="list" v-if="listRev.length">
      <li class="list-item" v-for="(item,index) of listRev" :id="item.id" :key="item.id">
        <el-checkbox v-model="item.status">{{item.title}}</el-checkbox>
        <!-- <div class="item-label" :class="item.status?'done':''">{{item.title}}</div> -->
        <div class="action-btn">
          <!-- <el-button size='mini' class="success" v-if="!item.status" @click="handleStatusChange(index,true)">完成</el-button>
          <el-button size='mini' class="reset" v-if="item.status" @click="handleStatusChange(index,false)">激活</el-button>
          <el-button size='mini' class="delete" @click="handleRemove(index)">删除</el-button> -->
          <i class="el-icon-circle-close" @click="handleRemove(index)"/>
          
        </div>
      </li>
    </ul> 
    <!-- <el-table
      v-if="listRev.length"
      :data="listRev"
      style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template #default="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table> -->
    <p v-else>暂无待办事项..</p>
  </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, watchEffect } from "vue";

// 事项接口
interface IList {
  id: number;
  title: string;
  status: boolean;
}
export default {
  setup() {
    let listRev = reactive<Array<IList>>([]);
    let contentRef = ref<string | null>(null);
    let idRef = ref<number>(0);
    // 事项添加
    const handleAddList = () => {
      if (!contentRef.value) return alert("请输入事项内容");
      if (listRev.find((item) => item.title === contentRef.value)) {
        return alert("该事项已存在，请输入其他事项吧~");
      }
      listRev.push({
        title: contentRef.value,
        id: ++idRef.value,
        status: false,
      });
      contentRef.value = "";
    };

    // 事项完成
    const handleStatusChange = (index: number, status: boolean) => {
      listRev[index].status = status;
    };

    // 事项删除
    const handleRemove = (index: number) => {
      listRev.splice(index, 1);
    };
    const count = ref(0);
    const add = () => count.value++;

    watchEffect(() => {
      console.log("contentRef changed", contentRef.value);
    });
    return {
      listRev,
      contentRef,
      handleAddList,
      handleStatusChange,
      handleRemove,
    };
  },
};
</script>
<style scoped>
.todo-form{
  padding: 20px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-show{
  padding: 20px;
  background-color: antiquewhite;
}
.list-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-icon-circle-close:hover{
  color: red;
}
</style>

