<template>
     <div class="flex items-center justify-start gap-x-5">
          <img :src="props.cardImg" alt="" />
          <div class="">
               <p class="text-xl font-bold">{{props.name}}</p>
               <div class="mt-2 flex items-center justify-start gap-x-3">
                    <img class="w-8" :src="props.userImg" alt="" />
                    <div class="flex items-center justify-start gap-x-2 rounded-md border-2 border-green-600 p-2 text-sm text-green-600">
                         <img class="w-2" src="../../assets/images/icons/greenRombosIcon.svg" alt="" />
                         <p class="text-xs font-bold">{{props.price}}</p>
                    </div>
                    <p class="text-gray-600">{{props.index}} of {{props.length}}</p>
               </div>
               <NuxtLink :to="props.url" class="w-3/5 mt-[15px] block rounded-full border-2 bg-white border-blue-800 py-2 px-3 text-sm font-normal text-blue-800 transition duration-200 ease-in hover:bg-blue-800 hover:text-white">Place a bid</NuxtLink>
          </div>
     </div>
</template>

<script setup>
     const props = defineProps({
          index: {type: Number},
          length: {type: Number},
          name: {type: String},
          price: {type: String},
          cardImg: {type: String},
          userImg: {type: String},
          url: {type: String},
     })
</script>

<style>

</style>