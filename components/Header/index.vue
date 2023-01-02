<template>
     <div class="commonSpacing py-7 border-[#EFEFEF] border-b flex justify-between items-center gap-x-20">
          <div class="flex justify-start items-center gap-x-[45px]">
               <img src="@/assets/images/logo.svg" alt="">
               <div class="h-[47px] w-[1px] bg-[#F4F4F4]"></div>
               <NuxtLink to="/" class="text-base leading-[21px] font-medium"> Marketplace </NuxtLink>
               <NuxtLink to="/" class="text-base leading-[21px] font-medium"> Resource </NuxtLink>
               <NuxtLink to="/" class="text-base leading-[21px] font-medium"> About </NuxtLink>
          </div>
          <div class="flex justify-between gap-x-5">
               <div class="border-[#EFEFEF] border-2 rounded-full px-[14px] flex justify-between h-[50px]">
                    <input type="text" placeholder="Search" class="border-0 focus:outline-none placeholder:text-sm placeholder:font-bold placeholder:text-[#C0C0C0]">
                    <button>
                         <img src="@/assets/images/icons/search-icon.svg" alt="">
                    </button>
               </div>
               <button class="bg-primaryBlue text-white text-sm font-bold border-primaryBlue border-2 rounded-full px-4 h-[50px]">Upload</button>
               <button class="bg-transparent text-primaryBlue text-sm font-bold border-primaryBlue border-2 rounded-full px-4 h-[50px]">Connect Wallet</button>
          </div>
     </div>
</template>

<script>
</script>

<style>

</style>