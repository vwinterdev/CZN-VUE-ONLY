<script setup>
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import { variantsMen, variantsWomen } from '../JSONS'
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { ref } from 'vue'
import { sendVote } from '../servise.js'
import { toast } from 'vue3-toastify';
import {useLoading} from 'vue-loading-overlay'
const $loading = useLoading();
const currenVariant = ref(Object.keys(variantsMen)[0])

const send = async () => {
 const loader = $loading.show();
  await sendVote(currenVariant.value)
  loader.hide()
  toast.success('отправилось')
}


</script>

<template>
  <Splitter class="wrapper">
    <SplitterPanel :size="5" :minSize="5" class="menu"> 
      <div class="sender">
        <Button @click="send()"> Отправить </Button>
      </div>
      <div>
        <strong>Выбран:</strong> {{  currenVariant  }}
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
.content{
  padding: 20px;
  overflow: scroll;
  
  display: flex;
  justify-content: space-between;
}
.content__section{

}
.sender{
    margin-bottom: 20px;
}
.content__item{
  display: flex;
  padding: 3px 0px;
  gap: 5px;
  user-select: none;
}
</style>
