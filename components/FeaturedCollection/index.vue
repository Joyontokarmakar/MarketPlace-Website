<template>
     <div class="">
          <div class="flex items-stretch justify-start gap-x-2">
               <img class="h-[272px] w-[265px] rounded-xl" :src="props.mainImg" alt="" />
               <div class="flex w-[103px] flex-col justify-between gap-y-2">
                    <img v-for="(item, index) in props.childImg" :key="index" class="h-[85px] w-[183px] rounded-xl" :src="item" alt="" />
               </div>
          </div>
          <div class="mt-2 flex w-full items-center justify-start">
               <div class="w-[235px]">
                    <p class="text-xl font-bold">{{props.name}}</p>
                    <div class="mt-2 flex items-center justify-start gap-x-3">
                         <img class="w-8" :src="props.authorImg" alt="" />
                         <p class="text-sm font-bold">by {{props.user}}</p>
                    </div>
               </div>
               <NuxtLink :to="props.url" class="text-center block rounded-full border-2 border-blue-800 py-[7px] px-2 text-sm font-bold text-blue-800 transition duration-200 ease-in hover:bg-blue-800 hover:text-white">Total {{props.items}} Items</NuxtLink>
          </div>
     </div>
</template>

<script setup>
     const props = defineProps({
          index: {type: Number},
          mainImg: {type: String},
          childImg: {type: Object},
          authorImg: {type: String},
          name: {type: String},
          user: {type: String},
          items: {type: Number},
          url: {type: String},
     })
</script>

<style>

</style>