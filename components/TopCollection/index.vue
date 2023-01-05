<template>
     <div class="flex justify-start items-center gap-x-[25px] mt-3">
          <span class="text-2xl leading-6 font-bold">{{props.index}}</span>
          <div class="relative">
               <img class="w-[60px]" :src="props.img" alt="" />
               <img v-if="props.verified" class="absolute top-0 left-10 z-10 w-[26px]" src="@/assets/images/icons/verify-icon.svg" alt="" />
          </div>
          <div>
               <p class="text-base font-medium leading-4">{{props.name}}</p>
               <div class="flex items-center justify-start gap-x-2 mt-[15px]">
                    <img class="w-2" src="../../assets/images/icons/blackRombosIcon.svg" alt="" />
                    <h2 class="text-sm leading-[14px] font-semibold text-[#636363]">{{props.amount}}</h2>
               </div>
          </div>
          <p class="text-xl leading-5 font-semibold" :class="props.status === 'positive' ? 'text-[#14C8B0]': 'text-[#FF002E]'">{{props.impression}}</p>
     </div>
</template>

<script setup>
     const props = defineProps({
          index: {type: Number},
          name: {type: String},
          img: {type: String},
          amount: {type: String},
          impression: {type: String},
          verified: {type: Boolean},
          status: {type: String},
     })
</script>

<style>

</style>