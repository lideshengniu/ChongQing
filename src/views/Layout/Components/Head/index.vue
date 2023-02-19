<template>
  <div class="container">
    <div class="container2">
      <ul></ul>
      <ul class="right">
        <li class="wheather">
          <div class="word">
            <span class="chinese">中文</span>
          </div>
          <div class="icons">
            <SvgIcon name="ArrowDown" class="icon-svg"></SvgIcon>
            <SvgIcon name="cloudy" class="icon-cloudy"></SvgIcon>
          </div>
        </li>
        <li class="date">
          <div class="day"><span v-text="date"></span></div>
          <div class="time"><span v-text="Seconds"></span></div>
        </li>
        <li class="user">
          <SvgIcon name="person" class="icon-person"></SvgIcon>
          <span class="person">admin</span>
          <SvgIcon name="ArrowDown" class="Down"></SvgIcon>

        </li>


      </ul>

    </div>
  </div>
</template>
<script lang='ts' setup>
import { Ref } from "vue"
import { getMonthDays, getSeconds } from "@/utils/date"

const date: Ref<string> = ref<string>(getMonthDays())
const Seconds: Ref<string> = ref<string>(getSeconds())
console.log(date.value)
</script>
<style scoped lang='less'>
@import "./index.less";
</style>
