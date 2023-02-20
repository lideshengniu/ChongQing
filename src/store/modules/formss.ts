import { defineStore } from "pinia"
import { getForms, queryForms, addForms, deleteForms, addPhoto } from "@/api/prospecting"
export default defineStore("prospecting", {
  state: () => {
    return {
   AllTableData: []
    }
  },
actions: {
 async getform() {
       const Alldata = await getForms()
       this.AllTableData = Alldata
       console.log(this.AllTableData, "hehe")
       return Alldata
},
async queryforms(id) {
      const Alldata = await queryForms(id)
      return Alldata
},
async addforms(data) {
  const Alldata = await addForms(data)
  console.log(Alldata, "all@@@@@@@@@@@@")
  return Alldata
},
async deleteforms(id) {
  const Alldata = await deleteForms(id)
  console.log(Alldata, "all")
  return Alldata
},
async addphote(file) {
  console.log("aaaa")
  const Alldata = await addPhoto(file)
  return Alldata
}
}
})
