import { createPinia } from "pinia"
import type { App } from "vue"
import useForm from "./modules/Forms"
import useForms from "./modules/formss"
const store = createPinia()
export default function useStore() {
  return {
    useForm: useForm(),
    useForms: useForms()
  }
}
