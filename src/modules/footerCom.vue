<template>
  <div v-show="showCatalog" class="catalog" editor-component="catalog">
    <div class="catalog__header">
      <span>目录</span>
      <div @click="closeCatalog()" class="catalog__header__close">
        <i></i>
      </div>
    </div>
    <div class="catalog__main"></div>
  </div>
  <div class="footer" editor-component="footer">
    <div>
      <div @click="switchlog()" class="catalog-mode" title="目录">
        <i></i>
      </div>
      <div style="position: relative" @click="clickPage()" class="page-mode">
        <i title="页面模式(分页、连页)"></i>
        <div v-if="showOptions" class="option">
          <ul>
            <li @click="clickPagemode('paging')" class="active">分页</li>
            <li @click="clickPagemode('continuity')">连页</li>
          </ul>
        </div>
      </div>
      <span
        >可见页码：<span class="page-no-list">
          {{ pageList }}
        </span></span
      >
      <span
        >页面：<span class="page-no">{{ PageNumber }}</span
        >/<span class="page-size">{{ pageSizenum }}</span></span
      >
      <span>字数：<span class="word-count">{{ wordNum }}</span></span>
    </div>
    <!-- <div class="editor-mode" title="编辑模式(编辑、清洁、只读、表单)">
     {{ modeType }}
    </div> -->
    <div>
      <div @click="scaleMin()" class="page-scale-minus" title="缩小(Ctrl+-)">
        <i></i>
      </div>
      <span
        @click="pageScale()"
        class="page-scale-percentage"
        title="显示比例(点击可复原Ctrl+0)"
        >{{ percentage }}%</span
      >
      <div @click="scaleMax()" class="page-scale-add" title="放大(Ctrl+=)">
        <i></i>
      </div>
      <div class="paper-size" @click="pageSize()">
        <i title="纸张类型"></i>
        <div v-if="showOptions" class="option">
          <ul>
            <li
              v-for="(item, index) in papersize"
              @click="clickPagesize(item)"
              :key="index"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div @click="clickDict()" class="paper-direction">
        <i title="纸张方向"></i>
        <div v-if="showdict" class="option">
          <ul>
            <li @click="paperDict('vertical')">纵向</li>
            <li @click="paperDict('horizontal')">横向</li>
          </ul>
        </div>
      </div>
      <div @click="paparMargin()" class="paper-margin" title="页边距">
        <i></i>
      </div>
      <div @click="fullScreen()" class="fullscreen" title="全屏显示">
        <i></i>
      </div>
      <div @click="editConfig()" class="editor-option" title="编辑器设置">
        <i></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, inject } from "vue";
import { Dialog } from "@/components/Dialog/Dialog";
import { ICatalogItem } from "@/components/Editor";
import { nextTick } from "vue";
import { debounce } from '@/utils/index'
// 注入全局instance
const instance = ref();
instance.value = inject("instance");
const showCatalog = ref(false);
const showOptions = ref(false);
const showdict = ref(false);
const showSize = ref(false);
const percentage = ref(100);
const PageNumber = ref(1);
const pageList = ref(1);
const pageSizenum = ref(1);
const wordNum = ref(0)
const papersize = [
  { name: "A4", value: "794*1123" },
  { name: "A2", value: "1593*2251" },
  { name: "A3", value: "1125*1593" },
  { name: "A5", value: "565*796" },
  { name: "5号信封", value: "412*488" },
  { name: "6号信封", value: "450*866" },
  { name: "7号信封", value: "609*862" },
  { name: "9号信封", value: "862*1221" },
  { name: "法律用纸", value: "813*1266" },
  { name: "信纸", value: "813*1054" },
];
// const modeType = ref('编辑模式')
const editConfig = () => {
  const options = instance.value.value.command.getOptions();
  new Dialog({
    title: "编辑器配置",
    data: [
      {
        type: "textarea",
        name: "option",
        width: 350,
        height: 300,
        required: true,
        value: JSON.stringify(options, null, 2),
        placeholder: "请输入编辑器配置",
      },
    ],
    onConfirm: (payload: any[]) => {
      const newOptionValue = payload.find((p) => p.name === "option")?.value;
      if (!newOptionValue) return;
      const newOption = JSON.parse(newOptionValue);
      instance.value.value.command.executeUpdateOptions(newOption);
    },
  });
};
async function updateCatalog() {
  const catalog = await instance.value.value.command.getCatalog();
  const catalogMainDom =
    document.querySelector<HTMLDivElement>(".catalog__main")!;
  catalogMainDom.innerHTML = "";
  if (catalog) {
    const appendCatalog = (
      parent: HTMLDivElement,
      catalogItems: ICatalogItem[]
    ) => {
      for (let c = 0; c < catalogItems.length; c++) {
        console.log(catalogItems);

        const catalogItem = catalogItems[c];
        const catalogItemDom = document.createElement("div");
        catalogItemDom.classList.add("catalog-item");
        // 渲染
        const catalogItemContentDom = document.createElement("div");
        catalogItemContentDom.classList.add("catalog-item__content");
        const catalogItemContentSpanDom = document.createElement("span");
        catalogItemContentSpanDom.innerText = catalogItem.name;
        catalogItemContentDom.append(catalogItemContentSpanDom);
        // 定位
        catalogItemContentDom.onclick = () => {
          instance.value.value.command.executeLocationCatalog(catalogItem.id);
        };
        catalogItemDom.append(catalogItemContentDom);
        if (catalogItem.subCatalog && catalogItem.subCatalog.length) {
          appendCatalog(catalogItemDom, catalogItem.subCatalog);
        }
        // 追加
        parent.append(catalogItemDom);
      }
    };
    appendCatalog(catalogMainDom, catalog);
  }
}

const switchlog = () => {
  showCatalog.value = !showCatalog.value;
  if (showCatalog.value) {
    updateCatalog();
  }
};
const closeCatalog = () => {
  switchlog();
};
const clickPage = () => {
  showOptions.value = !showOptions.value;
};
const clickPagemode = (type: any) => {
  instance.value.value.command.executePageMode(type);
};
const pageScale = () => {
  instance.value.value.command.executePageScaleRecovery();
};
// instance.value.value.listener.pageScaleChange = function (payload: any) {
//   percentage.value = Math.floor(payload * 10 * 10);
// };
// instance.value.value.listener.intersectionPageNoChange = function (
//   payload: any
// ) {
//   PageNumber.value = payload + 1;
// };
// instance.value.value.listener.visiblePageNoListChange = function (
//   payload: any
// ) {
//   const text = payload.map((i) => i + 1).join("、");
//   console.log(text);
  
//   pageList.value = text;
// };
// instance.value.value.listener.pageSizeChange = function (payload: any) {
//   pageSizenum.value = payload;
// };

const handleContentChange = async function () {
    // 字数
    const wordCount = await instance.value.value.command.getWordCount()
   wordNum.value  =  wordCount || 0
   console.log(wordCount);
   
    // 目录
    if (showCatalog) {
      nextTick(() => {
        updateCatalog()
      })
    }
  }
  // instance.value.value.listener.contentChange = debounce(handleContentChange, 200)
  handleContentChange()
const scaleMin = () => {
  instance.value.value.command.executePageScaleMinus();
};
const scaleMax = () => {
  instance.value.value.command.executePageScaleAdd();
};
const fullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
const pageSize = () => {
  showSize.value = !showSize.value;
};
const clickPagesize = (item: any) => {
  const paperType = item.value;
  const [width, height] = paperType.split("*").map(Number);
  instance.value.value.command.executePaperSize(width, height);
};
//纸张方向
const clickDict = () => {
  showdict.value = !showdict.value;
};
const paperDict = (item: any) => {
  instance.value.value.command.executePaperDirection(item);
};
//頁邊距
const paparMargin=()=>{
  const [topMargin, rightMargin, bottomMargin, leftMargin] =
      instance.value.value.command.getPaperMargin()
    new Dialog({
      title: '页边距',
      data: [
        {
          type: 'text',
          label: '上边距',
          name: 'top',
          required: true,
          value: `${topMargin}`,
          placeholder: '请输入上边距'
        },
        {
          type: 'text',
          label: '下边距',
          name: 'bottom',
          required: true,
          value: `${bottomMargin}`,
          placeholder: '请输入下边距'
        },
        {
          type: 'text',
          label: '左边距',
          name: 'left',
          required: true,
          value: `${leftMargin}`,
          placeholder: '请输入左边距'
        },
        {
          type: 'text',
          label: '右边距',
          name: 'right',
          required: true,
          value: `${rightMargin}`,
          placeholder: '请输入右边距'
        }
      ],
      onConfirm: (payload: any[]) => {
        const top = payload.find(p => p.name === 'top')?.value
        if (!top) return
        const bottom = payload.find(p => p.name === 'bottom')?.value
        if (!bottom) return
        const left = payload.find(p => p.name === 'left')?.value
        if (!left) return
        const right = payload.find(p => p.name === 'right')?.value
        if (!right) return
        instance.value.value.command.executeSetPaperMargin([
          Number(top),
          Number(right),
          Number(bottom),
          Number(left)
        ])
      }
    })
}
</script>
<style lang="less">
.catalog {
  width: 250px;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 100px;
  padding: 0 20px 40px 20px;
}

.catalog .catalog__header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e6ed;
}

.catalog .catalog__header span {
  color: #3d4757;
  font-size: 14px;
  font-weight: bold;
}

.catalog .catalog__header i {
  width: 16px;
  height: 16px;
  cursor: pointer;
  display: inline-block;
  background: url(@/assets/images/close.svg) no-repeat;
  transition: all 0.2s;
}

.catalog .catalog__header > div:hover {
  background: rgba(235, 238, 241);
}

.catalog__main {
  height: calc(100% - 60px);
  padding: 10px 0;
  overflow-y: auto;
  overflow-x: hidden;
}
.footer {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f2f4f7;
  z-index: 9;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 12px;
  padding: 0 4px 0 20px;
  box-sizing: border-box;
}

.footer > div:first-child {
  display: flex;
  align-items: center;
}

.footer .catalog-mode {
  padding: 1px;
  position: relative;
}

.footer .catalog-mode i {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  cursor: pointer;
  display: inline-block;
  background-image: url("@/assets/images/catalog.svg");
}

.footer .page-mode {
  padding: 1px;
  position: relative;
}

.footer .page-mode i {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  cursor: pointer;
  display: inline-block;
  background-image: url("@/assets/images/page-mode.svg");
}

.footer .options {
  width: 70px;
  position: absolute;
  left: 0;
  bottom: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: none;
}

.footer .options.visible {
  display: block;
}

.footer .options li {
  padding: 5px;
  margin: 5px 0;
  user-select: none;
  transition: all 0.3s;
  text-align: center;
  cursor: pointer;
}

.footer .options li:hover {
  background-color: #ebecef;
}

.footer .options li.active {
  background-color: #e2e6ed;
}

.footer > div:first-child > span {
  display: inline-block;
  margin-right: 5px;
  letter-spacing: 1px;
}

.footer > div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer > div:last-child > div {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer > div:last-child > div:hover {
  background: rgba(25, 55, 88, 0.04);
}

.footer > div:last-child i {
  width: 16px;
  height: 16px;
  display: inline-block;
  cursor: pointer;
}

.footer .editor-option i {
  background-image: url("@/assets/images/option.svg");
}

.footer .page-scale-minus i {
  background-image: url("@/assets/images/page-scale-minus.svg");
}

.footer .page-scale-add i {
  background-image: url("@/assets/images/page-scale-add.svg");
}

.footer .page-scale-percentage {
  cursor: pointer;
  user-select: none;
}

.footer .fullscreen i {
  background-image: url("@/assets/images/request-fullscreen.svg");
}

.footer .fullscreen.exist i {
  background-image: url("@/assets/images/exit-fullscreen.svg");
}

.footer .paper-margin i {
  background-image: url("@/assets/images/paper-margin.svg");
}

.footer .editor-mode {
  cursor: pointer;
  user-select: none;
}

.footer .paper-size {
  position: relative;
}

.footer .paper-size i {
  background-image: url("@/assets/images/paper-size.svg");
}

.footer .paper-size .options {
  right: 0;
  left: unset;
}

.footer .paper-direction {
  position: relative;
}

.footer .paper-direction i {
  background-image: url("@/assets/images/paper-direction.svg");
}

.footer .paper-direction .options {
  right: 0;
  left: unset;
}

.ce-contextmenu-signature {
  background-image: url("@/assets/images/signature.svg");
}

.ce-contextmenu-word-tool {
  background-image: url("@ /assets/images/word-tool.svg");
}
.option {
  width: 80px;
  position: absolute;
  left: 0;
  bottom: 25px;
  padding: 10px;
  background: #fff;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
  border: 1px solid #e2e6ed;
  border-radius: 2px;
  display: block;
  z-index: 99;
  ul {
    position: relative;
    left: -45px;
    width: 100%;
  }
  li {
    width: 100%;
    padding: 5px;
    margin: 5px 0;
    user-select: none;
    transition: all 0.3s;
    list-style: none;
  }

  li:hover {
    background-color: #ebecef;
  }
}
</style>
