<template lang="pug">
    div.sidenav
        h2.title FILTERS
            div.section
                p.section-title Email
                form
                  select(name="serchType" v-model="selectedMethod" @change="setMailFilteringMethod(selectedMethod)")
                      option(value="contains") Email contains
                      option(value="startsWith") Email starts with
                  input(placeholder="Add Email" v-model="value" type="text" @input="setMailFilterText")
            hr
            div.section
                p.section-title Created
                date-picker.date-picker(v-model="time1" @change="setPickedDate" valueType="format")
            hr
</template>
<script>
import {mapMutations} from 'vuex';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
        components: { DatePicker },
    data() {
      return {
        time1: null,
        selectedMethod: '',
        value:""
      };
    },
    methods:{
      ...mapMutations(["setMailFilteringMethod", "setMailFilterText", "setPickedDate"]),
      }
    
}
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.title {
    color: $dark-gray;
    font-size: $md-font;
    margin-left: 20px;
    margin-top: 20px;
}
input {
    margin-top: 20px;
    width: 175px;
    background:$light-gray;
    border: none;
    height: 32px;
    padding-left: 15px;
    outline: none;
    color:$gray;
}
select {
    background: $light-gray;
    border: none;
    width: 175px;
    height: 32px;
    -moz-appearance: none;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #ddd;
    background-size: 0.7rem;
    background-position-x: 9rem;
    outline: none;
}
select:focus {
    outline:none;
}
option{
  font-family: sans-serif;
  color: $dark-gray;
}

.date-picker {
    width: 175px;
}
.section {
    margin-top: 20px;
    width: 75%;
}
.section-title{
  color: black;
  font-size: $md-font;
}

.sidenav {
  height: 100%;
  width: 220px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #f6f7f9;
  overflow-x: hidden;
  padding-top: 20px;
  margin-left: 200px;
}

</style>
