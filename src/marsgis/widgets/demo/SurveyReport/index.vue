<template>
  <mars-dialog class="mainss" title="我的弹窗" width="750" right="500" top="40" bottom="400" v-bind="attrs"
    :visible="visible">
    <a-card title="添加信息" style="width: auto; opacity: 0.9">
      <template #extra> <mars-button class="small-btn" @click="addForm()">添加</mars-button></template>
    </a-card>
    <a-card>
      <a-table :columns="columns" :data-source="TableDatas">
        <template v-slot:bodyCell="{ column, record }">
          <template v-if="column.dataIndex == 'action'">
            <a-space direction="horizontal" style="width:150px">
              <mars-button class="small-btn" @click="showForm(record)">修改</mars-button>
              <mars-button class="small-btn" @click="handleExportExcel(record)"> 导出表格</mars-button>
              <mars-button class="small-btn" @click="deleteForm(record)"> 删除</mars-button>
              <a-modal ref="alertModal" title="是否删除" v-model:visible="visibleAlert" :confirm-loading="confirmLoading" @ok="handleOk(record)" >
             <p>{{ modalText }}</p>
    </a-modal>
            </a-space>

          </template>
        </template>
      </a-table></a-card>

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
import { deleteForms } from "@/api/prospecting"
import useStore from "@/store"
import { jsonToExcel } from "@/utils/export-to-excel"
import { destroyObject } from "mars3d-cesium"
import type{ ModalProps } from "node_modules/ant-design-vue/lib/modal/index"
// import useStore from '@/store'
const visibleAlert = ref<boolean>(false)
const confirmLoading = ref<boolean>(false)
const modalText = ref<string>("Content of the modal")
const alertModal = ref()
const handleOk = async(record) => {
   modalText.value = "The modal will be closed after two seconds"

   confirmLoading.value = true
   deleteForms(record.id)

  //   formLoading.value = false
  const datas = await useForms.getform().finally(() => {
    visibleAlert.value = false
    confirmLoading.value = false
  })
  datas.value = datas

}
// 确认删除

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
  { title: "唯一标识", width: 100, dataIndex: "id", key: "id" },
  { title: "名称", width: 100, dataIndex: "name", key: "name" },
  { title: "类型", width: 100, dataIndex: "type", key: "type" },
  {
    title: "操作1",
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
  console.log(record.id, "ID")
  // activate("surveyForm")
  updateWidget("surveyForm", { id: record.id, show: true })
  // adminId.value = record.ID
}
const addForm = () => {
  // activate("surveyForm")
  // visible.value = false
  updateWidget("surveyForm", { show: true, id: undefined })
}
// 导出
const handleExportExcel = async (record) => {
  // try {
  console.log(record, "ss/////////")
  // const ID = record.ID
  const Data = await useForms.queryforms(record.id)
  console.log(Data, "datass22//")
  // const { jsonToExcel } = await import("@mars/utils/export-to-excel")
  jsonToExcel({
    data: Data,
    header: {
      id: "编号",
      name: "名称",
      type: "类型",
      geographicInfo: "地理位置",
      centerLongitude: "中心精度",
      centerLatitude: "中心维度",
      groundFeatureUrl: "地物信息(全局)",
      artificial: "变形破坏的建构筑物",
      anomalous: "人工护坡",
      terrace: "梯田",
      slope: "第一坡度",
      multipleSlopes: "多种坡度",
      singleAspect: "单一坡向",
      multipleSlopeDirections: "多种坡向",
      frontHeight: "前缘高程",
      rearHeight: "后缘高程",
      frontWidth: "前缘宽度",
      rearWidth: "后缘宽度",
      diff: "前后缘高度差",
      area: "面积",
      northwestCornerlongitude: "西北(经度)",
      northwestCornerlatitude: "西北(维度)",
      northwestCornerheight: "西北(高程)",
      //
      northeastCornerlongitude: "东北(经度)",
      northeastCornerlatitude: "东北(维度)",
      northeastCornerheight: "东北(高程)",
      //
      southwestCornerlongitude: "西南(经度)",
      southwestCornerlatitude: "西南(维度)",
      southwestCornerheight: "西南(高程)",
      //
      southeastCornerlongitude: "东南(经度)",
      southeastCornerlatitude: "东南(维度)",
      southeastCornerheight: "东南(高程)",
      geology: "地质环境条件",
      fileUrl: "kml/ovobj"
    },
    fileName: "测试.xlsx",
    bookType: "xlsx"
  })
  // } catch (err) {
  //   console.error(err, "nimeinimienimei")
  // }

}
// 删除

const deleteForm = async (record) => {

  visibleAlert.value = true
  // alertModal.value.bodyStyle = { }
  console.log(alertModal.value, "@@@@@@@")
  // deleteForms(record.id)
  // //   formLoading.value = false
  // const datas = await useForms.getform()
  // datas.value = datas
  // console.log(datas, "datas")
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
