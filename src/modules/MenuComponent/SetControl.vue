<script setup lang="ts">
import { ref, inject } from "vue";
import { ControlButton24Regular } from "@vicons/fluent";
// import { NAME_PLACEHOLDER } from "@hufe921/canvas-editor/dist/src/editor/dataset/constant/ContextMenu";
import { ControlType,ElementType}from '@/components/Editor'
import { Dialog } from "@/components/Dialog/Dialog";
const instance = ref();
instance.value = inject("instance");

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

// 定义分割线列表
const dividers = [
  { name: "文本", value: "text" },
  { name: "列举", value: "select" },
  { name: "日期", value: "date" },
  { name: "复选框", value: "checkbox" },
  { name: "单选框", value: "radio" },
 
];

// 设置分割线
const setOption = (item: any) => {
  var type= item.value
  switch (type) {
      case ControlType.TEXT:
        new Dialog({
          title: '文本控件',
          data: [
            {
              type: 'text',
              label: '占位符',
              name: 'placeholder',
              required: true,
              placeholder: '请输入占位符'
            },
            {
              type: 'text',
              label: '默认值',
              name: 'value',
              placeholder: '请输入默认值'
            }
          ],
          onConfirm: (payload: any[]) => {
            const placeholder = payload.find(
              p => p.name === 'placeholder'
            )?.value
            if (!placeholder) return
            const value = payload.find(p => p.name === 'value')?.value || ''
            instance.value.value.command.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: '',
                control: {
                  type,
                  value: value
                    ? [
                        {
                          value
                        }
                      ]
                    : null,
                  placeholder
                }
              }
            ])
          }
        })
        break
      case ControlType.SELECT:
        new Dialog({
          title: '列举控件',
          data: [
            {
              type: 'text',
              label: '占位符',
              name: 'placeholder',
              required: true,
              placeholder: '请输入占位符'
            },
            {
              type: 'text',
              label: '默认值',
              name: 'code',
              placeholder: '请输入默认值'
            },
            {
              type: 'textarea',
              label: '值集',
              name: 'valueSets',
              required: true,
              height: 100,
              placeholder: `请输入值集JSON，例：\n[{\n"value":"有",\n"code":"98175"\n}]`
            }
          ],
          onConfirm: (payload: any[]) =>{
            const placeholder = payload.find(
              p => p.name === 'placeholder'
            )?.value
            if (!placeholder) return
            const valueSets = payload.find(p => p.name === 'valueSets')?.value
            if (!valueSets) return
            const code = payload.find(p => p.name === 'code')?.value
            instance.value.value.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: '',
                control: {
                  type,
                  code,
                  value: null,
                  placeholder,
                  valueSets: JSON.parse(valueSets)
                }
              }
            ])
          }
        })
        break
      case ControlType.CHECKBOX:
        new Dialog({
          title: '复选框控件',
          data: [
            {
              type: 'text',
              label: '默认值',
              name: 'code',
              placeholder: '请输入默认值，多个值以英文逗号分割'
            },
            {
              type: 'textarea',
              label: '值集',
              name: 'valueSets',
              required: true,
              height: 100,
              placeholder: `请输入值集JSON，例：\n[{\n"value":"有",\n"code":"98175"\n}]`
            }
          ],
          onConfirm: (payload: any[]) =>{
            const valueSets = payload.find(p => p.name === 'valueSets')?.value
            if (!valueSets) return
            const code = payload.find(p => p.name === 'code')?.value
            instance.value.value.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: '',
                control: {
                  type,
                  code,
                  value: null,
                  valueSets: JSON.parse(valueSets)
                }
              }
            ])
          }
        })
        break
      case ControlType.RADIO:
        new Dialog({
          title: '单选框控件',
          data: [
            {
              type: 'text',
              label: '默认值',
              name: 'code',
              placeholder: '请输入默认值'
            },
            {
              type: 'textarea',
              label: '值集',
              name: 'valueSets',
              required: true,
              height: 100,
              placeholder: `请输入值集JSON，例：\n[{\n"value":"有",\n"code":"98175"\n}]`
            }
          ],
          onConfirm: (payload: any[]) =>{
            const valueSets = payload.find(p => p.name === 'valueSets')?.value
            if (!valueSets) return
            const code = payload.find(p => p.name === 'code')?.value
            instance.value.value.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: '',
                control: {
                  type,
                  code,
                  value: null,
                  valueSets: JSON.parse(valueSets)
                }
              }
            ])
          }
        })
        break
      case 'date':
        new Dialog({
          title: '日期控件',
          data: [
            {
              type: 'text',
              label: '占位符',
              name: 'placeholder',
              required: true,
              placeholder: '请输入占位符'
            },
            {
              type: 'text',
              label: '默认值',
              name: 'value',
              placeholder: '请输入默认值'
            },
            {
              type: 'select',
              label: '日期格式',
              name: 'dateFormat',
              value: 'yyyy-MM-dd hh:mm:ss',
              required: true,
              options: [
                {
                  label: 'yyyy-MM-dd hh:mm:ss',
                  value: 'yyyy-MM-dd hh:mm:ss'
                },
                {
                  label: 'yyyy-MM-dd',
                  value: 'yyyy-MM-dd'
                }
              ]
            }
          ],
          onConfirm: (payload: any[]) => {
            const placeholder = payload.find(
              p => p.name === 'placeholder'
            )?.value
            if (!placeholder) return
            const value = payload.find(p => p.name === 'value')?.value || ''
            const dateFormat =
              payload.find(p => p.name === 'dateFormat')?.value || ''
              instance.value.value.executeInsertElementList([
              {
                type: ElementType.CONTROL,
                value: '',
                control: {
                  type,
                  dateFormat,
                  value: value
                    ? [
                        {
                          value
                        }
                      ]
                    : null,
                  placeholder
                }
              }
            ])
          }
        })
        break
      default:
        break
    
  }

    showOptions.value = !showOptions.value;
};
</script>
<template>
  <div class="menu-item">
    <n-popover placement="bottom" trigger="hover">
      <template #trigger>
        <n-icon-wrapper
          :size="22"
          :color="hovercolor ? '#979da7' : '#f2f4f7'"
          icon-color="#000000"
          @mouseover="overcolor()"
          @mouseleave="leavecolor()"
          @click="ShowOptions()"
        >
          <n-icon size="18" :component="ControlButton24Regular" />
        </n-icon-wrapper>
      </template>
      <span> 控件 </span>
    </n-popover>
    <div class="options" v-if="showOptions">
      <li v-for="(item, index) in dividers" :key="index" @click="setOption(item)">
        {{ item.name }}
      </li>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu-item {
  width: 30px;
  text-align: center;
  position: relative;
}

.select {
  border: none;
  font-size: 12px;
  line-height: 24px;
  user-select: none;
}

.select::after {
  position: absolute;
  content: "";
  top: 11px;
  width: 0;
  height: 0;
  right: 2px;
  border-color: #767c85 transparent transparent;
  border-style: solid solid none;
  border-width: 3px 3px 0;
}

.options {
  width: 150px;
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
</style>
