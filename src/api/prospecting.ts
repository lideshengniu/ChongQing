import request from "@/utils/request"
export const getForms = () => {
  return request({
  method: "GET",
  url: "/form/all"
  })
}
export const queryForms = (id) => {
return request({
  method: "POST",
  url: "/form/all",
  data: { id }
})
}
export const addForms = (data) => {
  return request({
    method: "POST",
    url: "/form/add",
    data
  })
}
export const deleteForms = (id) => {
return request({
  method: "POST",
  url: "/form/delete",
  data: { id }
})
}
export const addPhoto = (data) => {
  const formdata = new FormData()
  // data.append("name", "upload")
  formdata.append("file", data)
  // for (const k in params) {
  //   data.append(k, params[k])
  // }
  return request({
    method: "POST",
    url: "/form/upload",
    headers: {
      "Content-Type": "multipart/form-data;charset=utf-8"
   },
    data: formdata
  })
}