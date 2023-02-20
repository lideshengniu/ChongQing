import { Widget } from "@mars/common/store/widget"

const FunctionModule:Widget[] = [{
  component: markRaw(defineAsyncComponent(() => import("@mars/widgets/demo/Function/index.vue"))),
  name: "FunctionAll",
  autoDisable: true
}]
export default FunctionModule
