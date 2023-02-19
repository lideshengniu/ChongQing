<template>
  <mars-dialog class="mainss" title="我的弹窗" width="670" right="500" top="40" bottom="400" v-bind="attrs" :visible="visible">
    <a-card title="添加信息" style="width: auto; opacity: 0.9">
      <template #extra> <mars-button class="small-btn" @click="addForm()">添加</mars-button></template>
    </a-card>
    <a-card>
      <a-table :columns="columns" :data-source="TableDatas">
        <template v-slot:bodyCell="{ column, record }">
          <template v-if="column.dataIndex == 'action'"> <mars-button class="small-btn" @click="showForm(record)">操作</mars-button>
            <mars-button class="small-btn" @click="handleExportExcel(record)"> 导出表格</mars-button></template>
        </template>
      </a-table></a-card
    >
  </mars-dialog>
  <!-- <mars-dialog v-bind="attrs" :visible="visible" title="我的弹窗" width="800" right="350" top="10" bottom="40" :closeable="false"
    ><surveryForm class="Forms" v-model:data="data" @show="show" v-model:admin-id="adminId">nihao</surveryForm></mars-dialog
  > -->
  <!-- <surveryForm class="Forms" v-model:data="data">nihao</surveryForm> -->
</template>

<script setup lang="ts">
import { ref, onMounted, useAttrs, Ref, watch } from "vue"
import * as mapWork from "./map"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import { useWidget } from "@mars/common/store/widget"
import surveryForm from "./surveyForm.vue"
// import { useForm } from "/store/index"
// 表格
import useStore from "@/store"
import { jsonToExcel } from "@mars/utils/export-to-excel"
import { destroyObject } from "mars3d-cesium"
const attrs = useAttrs()
const { useForm, useForms } = useStore()
// 获得 表单

const TableDatas = ref()
onMounted(() => {
  useForms.getform()
})
watch(() => useForms.AllTableData, (newVal, oldVal) => {
  TableDatas.value = newVal
  console.log(newVal, "neww")
})
// 展示表单
const show = (a) => {
  visible.value = a
}
const adminId = ref<number | null>(null)
const visible: Ref<boolean> = ref(true)
const consoleS = (xx) => {
  console.log(xx.ID)
}
const formVisible = ref(true)
const columns = [
  // { title: "唯一标识", width: 100, dataIndex: "ID", key: "ID" },
  { title: "名称", width: 100, dataIndex: "name", key: "name" },
  { title: "类型", width: 100, dataIndex: "type", key: "type" },
  {
    title: "操作",
    width: 100,
    dataIndex: "action",
    key: "action"

    // slots: { customRender: "action" }
  }
]
const datas = ref([
  // {
  //   ID: 1,
  //   name: "John Brown",
  //   age: 32
  // },
  // {
  //   ID: 2,
  //   name: "Jim Green",
  //   age: 42
  // }
])
datas.value = useForm.find
const rowKeys = ref<string[]>([])
interface DataItem {
  key: string
  name: string
  age: number
  address: string
}

// const data: DataItem[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York Park"
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 40,
//     address: "London Park"
//   }
// ]

const { currentWidget, updateWidget, activate } = useWidget()

currentWidget.onUpdate(({ data, show }) => {
  datas.value = data

  console.log(data, "ee")
})

useLifecycle(mapWork)

const extent = ref("")

const couter = ref(10)
onMounted(() => {
  setTimeout(() => {
    couter.value = 100
  }, 2000)
})
const showForm = (record) => {
  // visible.value = false
  console.log(record.ID, "ID")
  // activate("surveyForm")
  updateWidget("surveyForm", { ID: record.ID, show: true })
  // adminId.value = record.ID
}
const addForm = () => {
  // activate("surveyForm")
  // visible.value = false
  updateWidget("surveyForm", { show: true })
}
const handleExportExcel = (record) => {
  try {
    console.log(record, "ss")
    const ID = record.ID
    const Data = { ...useForm.form.find((item) => item.ID === ID) }
    console.log(Data, "datass")
    // const { jsonToExcel } = await import("@mars/utils/export-to-excel")
    jsonToExcel({
      data: Data,
      header: {
        ID: "编号",
        name: "名称",
        type: "类型",
        location: "地理位置",
        longitude: "中心精度",
        latitude: "中心维度",
        photo: "地物信息(全局)",
        destroyed: "变形破坏的建构筑物",
        slopeprotection: "人工护坡",
        Terrace: "梯田",
        firstslope: "第一坡度",
        otherslope: "多种坡度",
        firstslopeaspect: "单一坡向",
        otherslopeaspect: "多种坡向",
        snootelevation: "前缘高程",
        Trailingedgeelevation: "后缘高程",
        snootwidth: "前缘宽度",
        Trailingedgewidth: "后缘宽度",
        elevationdifference: "前后缘高度差",
        area: "面积",
        nwlongitude: "西北(经度)",
        nwdimension: "西北(维度)",
        nwelevation: "西北(高程)",
        nelongitude: "东北(经度)",
        nedimension: "东北(维度)",
        neelevation: "东北(高程)",
        swlongitude: "西南(经度)",
        swdimension: "西南(维度)",
        swelevation: "西南(高程)",
        selongitude: "东南(经度)",
        sedimension: "东南(维度)",
        seelevation: "东南(高程)",
        geologicalenvironment: "地质环境条件"
      },
      fileName: "测试.xlsx",
      bookType: "xlsx"
    })
  } catch (err) {
    console.error(err)
  }

}
</script>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<style lang="less">
.mainss {
  position: relative;
  .Forms {
    position: absolute;
    width: 500px;
    height: 500px;
    left: -100px;
    background-color: red !important;
  }
}
</style>
