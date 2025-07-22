<script setup>

import IftaLabel from 'primevue/iftalabel';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import { variantsMen, variantsWomen, maleNames, femaleNames} from '../JSONS'
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { ref, watch, computed } from 'vue'
import { sendVote } from '../servise.js'
import { toast } from 'vue3-toastify';
import {useLoading} from 'vue-loading-overlay'
import InputText from 'primevue/inputtext';
import { getRandomValue } from '../utils.js'

const $loading = useLoading();
const currenVariant = ref(Object.keys(variantsMen)[0])
const currentName = ref('')

const send = async () => {
 const loader = $loading.show();
  await sendVote(currenVariant.value, currentName.value)
  loader.hide()
  toast.success('отправилось')
}

const isMan = computed(() => currenVariant.value.startsWith('мужчина'))

watch(isMan, (newGender) => {
  console.log('log')
  currentName.value = getRandomValue(newGender ? maleNames : femaleNames)
}, { immediate: true})


</script>

<template>
  <Splitter class="wrapper">
    <SplitterPanel :size="5" :minSize="5" class="menu"> 
     
      <IftaLabel>
          <InputText id="username" v-model.trim="currentName" variant="filled" />
          <label for="username">Имя</label>
      </IftaLabel>
      <div class="display-info">
        <strong>Информация</strong>
        <br />
        <strong>Категория:</strong> {{  currenVariant  }}
        <br />
        <strong>Имя:</strong> {{  currentName  }}
      </div>
         <div class="sender">
        <Button @click="send()"> Отправить </Button>
      </div>
</SplitterPanel>
<SplitterPanel  :minSize="70" class="content" > 
  <div class="content__section">
    <div v-for="variant of Object.keys(variantsMen)" :key="variant" class="content__item">
      <RadioButton v-model="currenVariant" :inputId="variant" name="category" :value="variant" />
      <label :for="variant">{{ variant }}</label>
    </div>
  </div>
  <div class="content__section">
    <div v-for="variant of Object.keys(variantsWomen)" :key="variant" class="content__item">
      <RadioButton v-model="currenVariant" :inputId="variant" name="category" :value="variant" />
      <label :for="variant">{{ variant }}</label>
    </div>
  </div>
</SplitterPanel>
</Splitter>
</template>
<style scoped>
.wrapper{
  height: 90vh;

}
.menu{
  padding: 20px;
}
.content{.sender{
    margin-bottom: 20px;
}
.content__item{
  display: flex;
  padding: 3px 0px;
  gap: 5px;
  user-select: none;
}
  padding: 20px;
  overflow: scroll;
  
  display: flex;
  justify-content: space-between;
}
.content__section{

}
.sender{
    margin-top: 50px;
}
.content__item{
  display: flex;
  padding: 3px 0px;
  gap: 5px;
  user-select: none;
}
.display-info{
  margin-top: 20px;
}
</style>
