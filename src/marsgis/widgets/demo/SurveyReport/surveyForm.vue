<template>
  <mars-pannel :visible="visible" title="我的弹窗" width="800" right="120" top="150" bottom="40" zIndex="100">
    <a-form ref="formRef" :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" @finish="finish">
      <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]">
        <a-col :span="8"
          ><a-form-item label="名称" name="name"><a-input style="width: 150px" v-model:value="formState.name" /></a-form-item
        ></a-col>
        <a-col :span="8"
          ><a-form-item label="类型" name="type"><a-input style="width: 150px" v-model:value="formState.type" /></a-form-item
        ></a-col>
        <!-- <a-col :span="8"
          ><a-form-item label="唯一标识" name="ID"><a-input style="width: 150px" v-model:value="formState.ID" /></a-form-item
        ></a-col> -->
      </a-row>

      <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]">
        <a-col :span="8"
          ><a-form-item label="位置信息" name="geographicInfo"><a-input style="width: 140px" v-model:value="formState.geographicInfo" /></a-form-item
        ></a-col>
        <a-col :span="8"
          ><a-form-item label="中心经度" name="centerLongitude"
            ><a-input style="width: 140px" v-model:value="formState.centerLongitude" /></a-form-item
        ></a-col>
        <a-col :span="8"
          ><a-form-item label="中心维度" name="centerLatitude"
            ><a-input style="width: 140px" v-model:value="formState.centerLatitude" /></a-form-item></a-col
      ></a-row>
      <a-form-item label="地物信息全局" name="groundFeatureUrl">
        <a-row :size="size" style="height: 150px" type="flex" justify="center" :gutter="[0, 16]"
          ><a-col :span="8">
            <a-upload list-type="picture" :file-list="fileList" @remove="handleRemove" :before-upload="beforeUpload">
              <a-button>
                <!-- <upload-outlined></upload-outlined> -->
                upload
              </a-button></a-upload
            >
          </a-col></a-row
        >
      </a-form-item>
      <a-form-item label="地物信息(单独地物)">
        <a-row :size="size" type="flex" justify="center" :gutter="[15, 16]" style="height: 70px"
          ><a-col :span="8">
            <a-form-item label="变形破坏的建构筑物" :name="['groundFeature', 'anomalous']"
              ><a-input style="width: 200px" v-model:value="formState.groundFeature.anomalous" /></a-form-item></a-col
        ></a-row>
        <a-row :size="size" type="flex" justify="space-around" :gutter="[0, 16]" style="height: 50px">
          <a-col :span="8"
            ><a-form-item label="人工护坡" :name="['groundFeature', 'artificial']"
              ><a-input style="width: 140px" v-model:value="formState.groundFeature.artificial" /></a-form-item
          ></a-col>
          <a-col :span="8"
            ><a-form-item label="梯田" :name="['groundFeature', 'terrace']"
              ><a-input style="width: 140px" v-model:value="formState.groundFeature.terrace" /></a-form-item></a-col></a-row
      ></a-form-item>
      <a-form-item label="坡度(°)">
        <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]"
          ><a-col :span="8"
            ><a-form-item label="单一坡度" :name="['slopeInfo', 'slope']"
              ><a-input style="width: 140px" v-model:value="formState.slopeInfo.slope" /></a-form-item
          ></a-col>
          <a-col :span="8"
            ><a-form-item label="多种坡度" :name="['slopeInfo', 'multipleSlopes']"
              ><a-upload list-type="picture" :file-list="multipleSlopes" @remove="handleRemultipleSlopes" :before-upload="beforeslopesUpload">
                <a-button>
                  <upload-outlined></upload-outlined>
                  Click to Upload
                </a-button>
              </a-upload></a-form-item
            ></a-col
          ></a-row
        ></a-form-item
      >
      <a-form-item label="坡向(°)">
        <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]"
          ><a-col :span="8"
            ><a-form-item label="单一坡向" :name="['slopeInfo', 'singleAspect']"
              ><a-input style="width: 140px" v-model:value="formState.slopeInfo.singleAspect" /></a-form-item
          ></a-col>
          <a-col :span="8"
            ><a-form-item label="多种坡向" :name="['slopeInfo', 'multipleSlopeDirections']">
              <!-- <a-input style="width: 140px" v-model:value="formState.slopeInfo.multipleSlopeDirections" /> -->
              <a-upload list-type="picture" :file-list="allaspect" @remove="handleRemoveallaspect" :before-upload="beforeaspectUpload">
                <a-button>
                  <upload-outlined></upload-outlined>
                  Click to Upload
                </a-button>
              </a-upload>
            </a-form-item></a-col
          >
        </a-row></a-form-item
      >
      <a-form-item label="范围">
        <a-space :size="15">
          <a-row :size="size" type="flex" justify="space-around" :gutter="[30, 16]"
            ><a-col :span="8"
              ><a-form-item label="前缘高程" :name="['range', 'frontHeight']"
                ><a-input style="width: 100px" v-model:value="formState.range.frontHeight" /></a-form-item
            ></a-col>
            <a-col :span="10"
              ><a-form-item label="后缘高程" :name="['range', 'rearHeight']"
                ><a-input style="width: 100px" v-model:value="formState.range.rearHeight" /></a-form-item
            ></a-col>
          </a-row>

          <a-row :size="size" type="flex" justify="space-around" :gutter="[0, 16]"
            ><a-col :span="15"
              ><a-form-item label="前缘宽度" :name="['range', 'frontWidth']"
                ><a-input style="width: 100px" v-model:value="formState.range.frontWidth" /></a-form-item
            ></a-col>
            <a-col :span="8"
              ><a-form-item label="后缘宽度" :name="['range', 'rearWidth']"
                ><a-input style="width: 100px" v-model:value="formState.range.rearWidth" /></a-form-item
            ></a-col>
          </a-row>
        </a-space>
        <a-row>
          <a-col :span="8"
            ><a-form-item label="前后缘高程差" :name="['range', 'diff']"
              ><a-input style="width: 100px" v-model:value="formState.range.diff" /></a-form-item
          ></a-col>
          <a-col :span="8"
            ><a-form-item label="范围" :name="['range', 'area']"><a-input style="width: 100px" v-model:value="formState.range.area" /></a-form-item
          ></a-col>
        </a-row>
        <a-row>
          <a-col :span="6" style="border: 3px solid black; text-align: center">位置/坐标</a-col>
          <a-col :span="6" style="border: 3px solid black">经度(°)</a-col>
          <a-col :span="6" style="border: 3px solid black">纬度(°)</a-col>
          <a-col :span="6" style="border: 3px solid black">高程(m)</a-col></a-row
        >
        <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]"
          ><a-col :span="6">西北角</a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'northwestCorner', 'longitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.northwestCorner.longitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'northwestCorner', 'latitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.northwestCorner.latitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'northwestCorner', 'height']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.northwestCorner.height" /></a-form-item
          ></a-col>
        </a-row>
        <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]"
          ><a-col :span="6">东北角</a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'northwestCorner', 'longitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.northeastCorner.longitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'northwestCorner', 'latitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.northeastCorner.latitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'northwestCorner', 'height']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.northeastCorner.height" /></a-form-item
          ></a-col>
        </a-row>
        <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]"
          ><a-col :span="6">西南角</a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'southwestCorner', 'longitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.southwestCorner.longitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'southwestCorner', 'latitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.southwestCorner.latitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'southwestCorner', 'height']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.southwestCorner.height" /></a-form-item
          ></a-col>
        </a-row>
        <a-row :size="size" type="flex" justify="center" :gutter="[0, 16]"
          ><a-col :span="6">东南角</a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'southeastCorner', 'longitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.southeastCorner.longitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'southeastCorner', 'latitude']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.southeastCorner.latitude" /></a-form-item
          ></a-col>
          <a-col :span="6"
            ><a-form-item :name="['coordinate', 'southeastCorner', 'height']"
              ><a-input style="width: 140px" v-model:value="formState.coordinate.southeastCorner.height" /></a-form-item
          ></a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="地质环境条件" name="geology" :wrapper-col="{ span: 5, offset: 5 }"
        ><a-input style="width: 350px" v-model:value="formState.geology"
      /></a-form-item>
      <a-form-item label="kml" name="fileUrl" :wrapper-col="{ span: 5, offset: 5 }">
        <!-- <a-input style="width: 350px" v-model:value="formState.coordinate.fileUrl" /> -->
        <!-- <a-upload></a-upload> -->
        <a-upload :file-list="kmls" @remove="handleKml" :before-upload="beforekmlUpload" name="file">
          <a-button>
            <upload-outlined></upload-outlined>
            Click to Upload
          </a-button>
        </a-upload>
        <a-button @click="dos">ni</a-button>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 10 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Cancel</a-button>
      </a-form-item>
    </a-form></mars-pannel
  >
</template>
<script lang="ts" setup>
import type { PropType } from "vue"
import { ref, reactive, markRaw, computed, nextTick, UnwrapRef, Ref, useAttrs, toRaw } from "vue"
import { useWidget } from "@mars/common/store/widget"
import { any } from "vue-types"
import useStore from "@/store"
import { AllForm } from "@/api/types/prospecting"
import { queryForms, addPhoto } from "@/api/prospecting"
const { activate, disable, isActivate, updateWidget, currentWidget } = useWidget()
const visible: Ref<boolean> = ref(false)
const { useForm, useForms } = useStore()
const attrs = useAttrs()
const props = defineProps({
  data: {
    type: [],
    default: []
  }
})
interface FormState {
  name: string
  ID: number | undefined
  type: string
  location: string
  longitude: number
  latitude: number
  photo: Record<string, any>
  Groundfeature: Record<string, any>
  slope: Record<string, any>
  slopeaspect: Record<string, any>
  range: Record<string, any>
  geologicalenvironment: string
}
const size = ref("default")
const labelCol = ref({ span: 0 })
const wrapperCol = ref({ span: 0 })
const formRef = ref()
// const props = defineProps({
//   roleId: {
//     type: Number as PropType<number | null>,
//     default: null
//   }
// })
interface FileItem {
  uid: string
  name?: string
  status?: string
  response?: string
  url?: string
  preview?: string
  originFileObj?: any
  file?: string | Blob
}
// : Ref<FormState>
const formState = ref({
  name: "0",
  id: "" || undefined,
  // ID: undefined,
  type: "0",
  geographicInfo: "", // 位置信息
  centerLongitude: 0, // 中心经度
  centerLatitude: 0, // 中心维度
  groundFeatureUrl: "",
  groundFeature: {
    // 地物信息(单独地物)
    artificial: "0", // 人工护坡
    anomalous: "0", // 被破坏的
    terrace: "0" // 梯田
  },
  slopeInfo: {
    slope: "0", // 单一坡度
    multipleSlopes: "0", // 多种坡度
    singleAspect: "0", // 单一坡向
    multipleSlopeDirections: "0" // 多种坡向
  },
  range: {
    frontHeight: 0, // 前缘高程
    rearHeight: 0, // 后缘高程
    frontWidth: 0, // 前缘宽度
    rearWidth: 0, // 后缘宽度
    diff: 0, // 前后缘高程差
    area: 0 // 范围
  },
  coordinate: {
    northwestCorner: {
      longitude: "0",
      latitude: "0",
      height: "0"
    },
    northeastCorner: {
      longitude: "0",
      latitude: "0",
      height: "0"
    },
    southwestCorner: {
      longitude: "0",
      latitude: "0",
      height: "0"
    },
    southeastCorner: {
      longitude: "0",
      latitude: "0",
      height: "0"
    },

    // northwestcorner: {
    //   nwlongitude: 0, // 经度} //西北角
    //   nwdimension: 0,
    //   nwelevation: 0
    // },
    // northeastcorner: {
    //   nelongitude: 0, // 经度} //西北角
    //   nedimension: 0,
    //   neelevation: 0
    // },
    // southwestcorner: {
    //   swlongitude: 0, // 经度} //西北角
    //   swdimension: 0,
    //   swelevation: 0
    // },
    // southeastcorner: {
    //   selongitude: 0, // 经度} //西北角
    //   sedimension: 0,
    //   seelevation: 0
    // },
    fileUrl: "0" // kml
  },
  geology: "0"
})
const ID: Ref<number> = ref(0)
const tables: typeof formState[] = reactive([])
const rules = {
  // ID: { required: true, message: "Please select Activity zone", trigger: "change" },
  name: { required: true, message: "Please select Activity zone", trigger: "change" },
  type: { required: true, message: "Please select Activity zone", trigger: "change" },
  geographicInfo: { required: true, message: "Please select Activity zone", trigger: "change" },
  centerLongitude: { required: true, message: "Please select Activity zone", trigger: "change" },
  centerLatitude: { required: true, message: "Please select Activity zone", trigger: "change" },

  groundFeatureUrl: { required: false, message: "Please select Activity zone", trigger: "change" },
  groundFeature: {
    anomalous: { required: true, message: "Please select Activity zone", trigger: "change" },
    artificial: { required: true, message: "Please select Activity zone", trigger: "change" },
    terrace: { required: true, message: "Please select Activity zone", trigger: "change" }
  },
  slopeInfo: {
    slope: { required: true, message: "Please select Activity zone", trigger: "change" },
    multipleSlopes: { required: true, message: "Please select Activity zone", trigger: "change" },
    singleAspect: { required: true, message: "Please select Activity zone", trigger: "change" },
    multipleSlopeDirections: { required: true, message: "Please select Activity zone", trigger: "change" }
  },

  range: {
    frontHeight: { required: true, message: "Please select Activity zone", trigger: "change" },
    Trailingedgeelevation: { required: true, message: "Please select Activity zone", trigger: "change" },
    rearHeight: { required: true, message: "Please select Activity zone", trigger: "change" },
    frontWidth: { required: true, message: "Please select Activity zone", trigger: "change" },
    rearWidth: { required: true, message: "Please select Activity zone", trigger: "change" },
    area: { required: true, message: "Please select Activity zone", trigger: "change" },
    diff: { required: true, message: "Please select Activity zone", trigger: "change" }
  },
  coordinate: {
    northwestCorner: {
      longitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      latitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      height: { required: true, message: "Please select Activity zone", trigger: "change" }
    },
    northeastCorner: {
      longitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      latitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      height: { required: true, message: "Please select Activity zone", trigger: "change" }
    },
    southwestCorner: {
      longitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      latitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      height: { required: true, message: "Please select Activity zone", trigger: "change" }
    },
    southeastCorner: {
      longitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      latitude: { required: true, message: "Please select Activity zone", trigger: "change" },
      height: { required: true, message: "Please select Activity zone", trigger: "change" }
    },
    fileUrl: {
      required: true,
      message: "Please select Activity zone",
      trigger: "change"
    }
  },

  geology: { required: true, message: "Please select Activity zone", trigger: "change" }
}
// uP photos
const fileList = ref<FileItem[]>([])
const photos: string[] = []
const beforeUpload = async (file) => {
  console.log(file, "file")

  const a: string = await useForms.addphote(file)
  formState.value.groundFeatureUrl = a.replace("http://localhost:15130/", "http://1.14.72.127/")
  photos.push(a.replace("http://localhost:15130/", "http://1.14.72.127/"))
  fileList.value.push({
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: a.replace("http://localhost:15130/", "http://1.14.72.127/")
  })

  return false
}
const handleRemove = (file: FileItem) => {
  const index = fileList.value.indexOf(file)
  const newFileList = fileList.value.slice()
  newFileList.splice(index, 1)
  fileList.value = newFileList
}
interface EmitsType {
  (e: "update:data", value: []): void
  (e: "update:visible", value: boolean): void
  (e: "show", value: boolean): void
  (e: "adminId", value: number): number
}
const datastable: Ref<any[]> = ref([])
const datasall = []
const emit = defineEmits<EmitsType>()
const show: Ref<boolean> = ref(false)
function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, "Object")
}
function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  console.log("target", target, key in target)
  for (key in target) {
    // isObject(src[key])
    src[key] = isObject(target[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]) // 如果是属性是对象
  }
  return src
}
const onSubmit = async () => {
  formRef.value
    .validate()
    .then(() => {
      console.log(">>>>>>>>>>>>>>>")

      const StringPhotos = photos.join()
      console.log(StringPhotos)
      formState.value.groundFeatureUrl = StringPhotos

      if (formState.value.id) {
        useForms.updatas(JSON.parse(JSON.stringify(formState.value)))
      } else {
        useForms.addforms(JSON.parse(JSON.stringify(formState.value)))
      }
      // useForms.addforms(onloadForm)
      // console.log("-----------  -1", deepMerge({}, toRaw(formState.value)))

      // datasall.push("-------0", JSON.parse(JSON.stringify(formState.value)))
      // console.log(toRaw(ref({ a: 1, b: { c: 2, b: 2 } }).value), "test")
      // console.log({ ...toRaw(formState.value) })
      // const o = { ...toRaw(formState.value) }
      const o = JSON.parse(JSON.stringify(formState.value))
      useForm.AddData(o)
      // console.log("------1", o)
      // console.log("------2", { ...formState.value })

      datasall.push(o)
      // console.log(datasall, "olkk")
      // console.log(datasall[0], "datasall")
      // datastable.value.push({ ID: formState.value.ID, name: formState.value.name, age: 2 })
      // useForm.findData({ ID: formState.value.ID, name: formState.value.name, age: 2 })
      emit("update:data", datastable.value as any)

      console.log(datastable.value)
      formRef.value.resetFields()

      emit("show", show.value)
      updateWidget("Survey-report", {
        data: datastable.value
      })
      visible.value = false
    })

    .catch((error) => {
      console.log("error", error)
    })

  // const valid = await formRef.value.validate()
  // if (!valid) {
  //   return
  // }

  // props.data.push()
  console.log(1)
}
// 修改
// async function query(id) {
//    const tabledatas = await queryForms(id)
// }
currentWidget.onUpdate(async ({ id, show }) => {
  visible.value = show
  console.log(id, "id")
  // console.log(await queryForms(id), "IDSSS")
  if (id || id === 0) {
    const tabledatas = await queryForms(id)
    fileList.value = [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url: tabledatas.groundFeatureUrl
      }
    ]

    multipleSlopes.value = [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url: tabledatas.slopeInfo.multipleSlopes
      }
    ]
    allaspect.value = [
      {
        uid: "-1",
        name: "xxx.png",
        status: "done",
        url: tabledatas.slopeInfo.multipleSlopeDirections
      }
    ]

    // delete tabledatas.id
    console.log(tabledatas, "tabledatas")
    formState.value = tabledatas
  } else {
    fileList.value = []
    multipleSlopes.value = []
    allaspect.value = []

    formState.value = {
      name: "0",
      id: "" || undefined,
      // ID: undefined,
      type: "0",
      geographicInfo: "", // 位置信息
      centerLongitude: 0, // 中心经度
      centerLatitude: 0, // 中心维度
      groundFeatureUrl: "",
      groundFeature: {
        // 地物信息(单独地物)
        artificial: "0", // 人工护坡
        anomalous: "0", // 被破坏的
        terrace: "0" // 梯田
      },
      slopeInfo: {
        slope: "0", // 单一坡度
        multipleSlopes: "0", // 多种坡度
        singleAspect: "0", // 单一坡向
        multipleSlopeDirections: "0" // 多种坡向
      },
      range: {
        frontHeight: 0, // 前缘高程
        rearHeight: 0, // 后缘高程
        frontWidth: 0, // 前缘宽度
        rearWidth: 0, // 后缘宽度
        diff: 0, // 前后缘高程差
        area: 0 // 范围
      },
      coordinate: {
        northwestCorner: {
          longitude: "0",
          latitude: "0",
          height: "0"
        },
        northeastCorner: {
          longitude: "0",
          latitude: "0",
          height: "0"
        },
        southwestCorner: {
          longitude: "0",
          latitude: "0",
          height: "0"
        },
        southeastCorner: {
          longitude: "0",
          latitude: "0",
          height: "0"
        },

        // northwestcorner: {
        //   nwlongitude: 0, // 经度} //西北角
        //   nwdimension: 0,
        //   nwelevation: 0
        // },
        // northeastcorner: {
        //   nelongitude: 0, // 经度} //西北角
        //   nedimension: 0,
        //   neelevation: 0
        // },
        // southwestcorner: {
        //   swlongitude: 0, // 经度} //西北角
        //   swdimension: 0,
        //   swelevation: 0
        // },
        // southeastcorner: {
        //   selongitude: 0, // 经度} //西北角
        //   sedimension: 0,
        //   seelevation: 0
        // },
        fileUrl: "0" // kml
      },
      geology: "0"
    }
  }
})
const finish = () => {
  alert("nihao")
  console.log("nihaoa-----------")
}
// 多方向
const allaspect = ref([])
const beforeaspectUpload = async (file) => {
  console.log(file, "file")

  const a: string = await useForms.addphote(file)
  formState.value.slopeInfo.multipleSlopeDirections = a.replace("http://localhost:15130/", "http://1.14.72.127/")
  // photos.push(a.replace("http://localhost:15130/", "http://1.14.72.127/"))
  allaspect.value.push({
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: a.replace("http://localhost:15130/", "http://1.14.72.127/")
  })

  return false
}
const handleRemoveallaspect = (file: FileItem) => {
  const index = allaspect.value.indexOf(file)
  const newFileList = allaspect.value.slice()
  newFileList.splice(index, 1)
  allaspect.value = newFileList
}
// 多角度
const multipleSlopes = ref([])
const beforeslopesUpload = async (file) => {
  const a: string = await useForms.addphote(file)
  formState.value.slopeInfo.multipleSlopes = a.replace("http://localhost:15130/", "http://1.14.72.127/")
  // photos.push(a.replace("http://localhost:15130/", "http://1.14.72.127/"))
  multipleSlopes.value.push({
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url: a.replace("http://localhost:15130/", "http://1.14.72.127/")
  })
}
const handleRemultipleSlopes = (file: FileItem) => {
  const index = multipleSlopes.value.indexOf(file)
  const newFileList = multipleSlopes.value.slice()
  newFileList.splice(index, 1)
  multipleSlopes.value = newFileList
}

// 上传kml
// 上传kml

const kmls = ref([])
const beforekmlUpload = async (file) => {
  console.log(file, "45454545")
  const data = await addPhoto(file)
  data.replace("http://localhost:15130/", "http://1.14.72.127/")
  kmls.value.push({
    uid: "-1",
    name: `${file.name}.kml`,
    status: "done",
    url: data.replace("http://localhost:15130/", "http://1.14.72.127/")
  })
  // formState.value.coordinate.fileUrl = await beforeUpdates(file, kmls)
}
const handleRemoves = (file: FileItem, fileList: Ref<FileItem[]> = ref([])) => {
  const index = fileList.value.indexOf(file)
  const newFileList = fileList.value.slice()
  newFileList.splice(index, 1)
  fileList.value = newFileList
}
const handleKml = (file) => {
  handleRemoves(file, kmls)
}
function urlToBase64(url: string, mineType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement("CANVAS") as any
    const ctx = canvas!.getContext("2d")
    // const urlS = URL.createObjectURL(url)

    const img = new Image()
    img.crossOrigin = ""
    img.onload = function () {
      if (!canvas || !ctx) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject("ccc")
      }
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(mineType || "image/png")
      console.log(dataURL, "urllll")
      canvas = null
      resolve(dataURL)
    }
    console.log("///////")

    img.src = url
    console.log(img, "src...")
  })
}
function downloadByOnlineUrl(url: string, filename: string, mime?: string, bom?: any) {
  console.log(url, "urlllll")
  urlToBase64(url).then((base64) => {
    downloadByBase64(base64, filename, mime, bom)
  })
}
function downloadByBase64(buf: string, filename: string, mime?: string, bom?: any) {
  const base64Buf = dataURLtoBlob(buf)
  console.log(base64Buf, "base64Buf")
  // const blobURL = window.URL.createObjectURL(base64Buf)
  // console.log(blobURL, "xxxxxx")
  downloadByData(base64Buf, filename, mime, bom)
}
function dataURLtoBlob(base64Buf: string): Blob {
  const arr = base64Buf.split(",")
  const typeItem = arr[0]
  const mime = typeItem.match(/:(.*?);/)![1]
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n) // stringObject.charCodeAt(index)
    // index 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
  }
  return new Blob([u8arr], { type: mime })
}
function downloadByData(data: any, filename: string, mime?: string, bom?: any) {
  const blobData = typeof bom !== "undefined" ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mime || "application/octet-stream" })

  const blobURL = window.URL.createObjectURL(blob)
  console.log(blobURL, "xxxxxx")
  const tempLink = document.createElement("a")
  tempLink.style.display = "none"
  tempLink.href = blobURL
  tempLink.setAttribute("download", filename)
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank")
  }
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  window.URL.revokeObjectURL(blobURL)
}

const dos = () => {
  // http://1.14.72.127/profile/hy2.png
  // http://1.14.72.127/profile/55-02.kml

  // downloadByOnlineUrl("http://1.14.72.127/profile/55-02.kml", "nihao", "application/vnd.google-earth.kml+xml")
  downloadByOnlineUrl("http://1.14.72.127/profile/55-02.kml", "nihao", "application/vnd.google-earth.kml+xml")

  // const tempLink = document.createElement("a")
  // tempLink.style.display = "none"
  // const filename = "ni"
  // const blobURL = "http://1.14.72.127/profile/hy2.png"
  // tempLink.href = blobURL
  // tempLink.setAttribute("download", filename)
  // if (typeof tempLink.download === "undefined") {
  //   tempLink.setAttribute("target", "_blank")
  // }
  // document.body.appendChild(tempLink)
  // tempLink.click()
  // document.body.removeChild(tempLink)
  // window.URL.revokeObjectURL(blobURL)
  // downloadByOnlineUrl("http://1.14.72.127/profile/hy2.png", "nihao", "application/vnd.google-earth.kml+xml")
  console.log(111111)
}
// 重置表单
const resetForm = () => {
  formRef.value.resetFields()
  visible.value = false
}
</script>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<style scoped lang="less">
.ss {
  width: 100%;
  // background-color: red;
  height: 100%;
}
:deep(.ant-button) {
  background: rgba(18, 127, 224, 0.93);
}
</style>
