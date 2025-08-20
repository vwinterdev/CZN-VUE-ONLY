<script setup>
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import {  employersVariants,  maleNames, femaleNames} from '../JSONS'
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { ref, watch, computed } from 'vue'
import { sendVoteEmployers } from '../servise.js'
import { toast } from 'vue3-toastify';
import {useLoading} from 'vue-loading-overlay'
import InputText from 'primevue/inputtext';
import IftaLabel from 'primevue/iftalabel';
import { getRandomValue } from '../utils.js'

const $loading = useLoading();
const currenVariant = ref(Object.keys(employersVariants)[0])
const currentName = ref('')

const send = async () => {
 const loader = $loading.show();
  await sendVoteEmployers(currenVariant.value, currentName.value)
  loader.hide()
  toast.success('отправилось')
}

const isMan = computed(() => currenVariant.value.startsWith('мужчина'))

watch(isMan, (newGender) => {
  console.log('log')
  currentName.value = getRandomValue(newGender ? maleNames : femaleNames)
}, { immediate: true})

const isMobile = computed(() => window.innerWidth < 768)
</script>

<template>
  <Splitter class="wrapper" :layout="isMobile ? 'vertical' : 'horizontal'">
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
    <div v-for="variant of Object.keys(employersVariants)" :key="variant" class="content__item">
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
  overflow: auto;
}
.content{
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
