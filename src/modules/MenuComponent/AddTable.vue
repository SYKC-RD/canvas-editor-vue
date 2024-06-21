<script setup lang="ts">
import { ref, inject } from "vue";
import { Table24Regular } from "@vicons/fluent";

const instance = ref();
const tableTitle = ref("插入");
instance.value = inject("instance");
let TablePanel = ref(null);
const colIndex = ref(0);
const rowIndex = ref(0);
// 定义状态变量来控制选项菜单的显示
const showOptions = ref(false);

// 显示/隐藏选项菜单的方法
const ShowOptions = () => {
  showOptions.value = !showOptions.value;
};

// 设置鼠标悬停样式
const hovercolor = ref(false);
const overcolor = () => {
  hovercolor.value = true;
};
const leavecolor = () => {
  hovercolor.value = false;
};
const tablePanel = document.querySelector<HTMLDivElement>(".table-panel")!;
// const tableCellList: HTMLDivElement[][] = []
//   for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr')
//     tr.classList.add('table-row')
//     const trCellList: HTMLDivElement[] = []
//     for (let j = 0; j < 10; j++) {
//       const td = document.createElement('td')
//       td.classList.add('table-cel')
//       tr.append(td)
//       trCellList.push(td)
//     }
//     tablePanel.append(tr)
//     tableCellList.push(trCellList)
//   }
const tableCellList = ref<HTMLDivElement[][]>([]);

const createTable = () => {
  const rows: HTMLDivElement[][] = [];
  for (let i = 0; i < 10; i++) {
    const row: HTMLDivElement[] = [];
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div") as HTMLDivElement;
      row.push(cell);
    }
    rows.push(row);
  }
  tableCellList.value = rows;
};

createTable();

// 移除所有格选择
function removeAllTableCellSelect() {
  tableCellList.value.forEach((tr) => {
    tr.forEach((td) => td.classList.remove("active"));
  });
}
// 设置标题内容
function setTableTitle(payload: string) {
  tableTitle.value = payload;
}
// 恢复初始状态
function recoveryTable() {
  // 还原选择样式、标题、选择行列
  removeAllTableCellSelect();
  setTableTitle("插入");
  colIndex.value = 0;
  rowIndex.value = 0;
  // 隐藏panel
  showOptions.value = !showOptions.value;
}
const handleMouseMove = (evt: MouseEvent) => {
  const celSize = 16;
  const rowMarginTop = 10;
  const celMarginRight = 6;
  const { offsetX, offsetY } = evt;

  removeAllTableCellSelect();

  colIndex.value = Math.ceil(offsetX / (celSize + celMarginRight)) || 1;
  rowIndex.value = Math.ceil(offsetY / (celSize + rowMarginTop)) || 1;

  setTableTitle(`${colIndex.value}×${rowIndex.value}`);
};
const closeTable = () => {
  recoveryTable();
};
const closePannel = () => {
  console.log(rowIndex.value, colIndex.value);

  instance.value.value.command.executeInsertTable(
    rowIndex.value,
    colIndex.value
  );
  recoveryTable();
};
</script>
<template>   
  <div class="menu-item">
    <n-icon-wrapper
      :size="22"
      :color="hovercolor ? '#979da7' : '#f2f4f7'"
      icon-color="#000000"
      @mouseover="overcolor()"
      @mouseleave="leavecolor()"
      @click="ShowOptions()"
    >
      <n-icon size="18" :component="Table24Regular" />
    </n-icon-wrapper>
    <div class="options" v-if="showOptions">
      <div @click="closeTable()" class="table-close">×</div>
      <div class="table-title">
        <span class="table-select">{{ tableTitle }}</span>
        <span>表格</span>
      </div>
      <div
        @mousemove="handleMouseMove"
        class="table-panel"
        @click="closePannel()"
        ref="TablePanel"
      >
        <tr
          v-for="(row, rowIndex) in tableCellList"
          :key="rowIndex"
          class="table-row"
        >
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="table-cell"
          ></td>
        </tr>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item {
  text-align: center;
  position: relative;
}

.options {
  width: 220px;
  height: 310px;
  position: absolute;
  left: 0;
  top: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: block;
  z-index: 99;

  li {
    padding: 5px;
    margin: 5px 0;
    user-select: none;
    transition: all 0.3s;
    list-style: none;
  }

  li:hover {
    background-color: #ebecef;
  }

  li.active {
    background-color: #e2e6ed;
  }
}

.table-panel {
  cursor: pointer;
}

.table-panel .table-row {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  pointer-events: none;
}

.table-panel .table-row .table-cell {
  width: 16px !important;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid #e2e6ed;
  background: #fff;
  position: relative;
  margin-right: 6px;
  pointer-events: none;
}
.table-panel .table-row .table-cell:hover {
  border: 1px solid rgba(73, 145, 242, 0.2);
  background: rgba(73, 145, 242, 0.15);
}
.table-panel .active {
  border: 1px solid rgba(73, 145, 242, 0.2);
  background: rgba(73, 145, 242, 0.15);
}

.table-panel .table-row .table-cel:last-child {
  margin-right: 0;
}
</style>
