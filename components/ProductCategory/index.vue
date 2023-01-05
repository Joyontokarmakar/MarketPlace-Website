<template>
     <div class="flex justify-between">
          <di class="flex flex-wrap lg:flex-nowrap justify-start gap-x-2">
               <button class="px-5 py-3 rounded-full text-sm leading-4 font-medium" :class="currentFilter === 'ALL' ? 'bg-[#371C87] text-white' : 'bg-lightGray text-[#371C87]'" @click="setFilter('ALL')">All Categories</button>
               <button class="px-5 py-3 rounded-full text-sm leading-4 font-medium" :class="currentFilter === 'Art' ? 'bg-[#371C87] text-white' : 'bg-lightGray text-[#371C87]'" @click="setFilter('Art')">Art</button>
               <button class="px-5 py-3 rounded-full text-sm leading-4 font-medium" :class="currentFilter === 'Celebrities' ? 'bg-[#371C87] text-white' : 'bg-lightGray text-[#371C87]'" @click="setFilter('Celebrities')">Celebrities</button>
               <button class="px-5 py-3 rounded-full text-sm leading-4 font-medium" :class="currentFilter === 'Gaming' ? 'bg-[#371C87] text-white' : 'bg-lightGray text-[#371C87]'" @click="setFilter('Gaming')">Gaming</button>
               <button class="px-5 py-3 rounded-full text-sm leading-4 font-medium" :class="currentFilter === 'Sport' ? 'bg-[#371C87] text-white' : 'bg-lightGray text-[#371C87]'" @click="setFilter('Sport')">Sport</button>
               <button class="px-5 py-3 rounded-full text-sm leading-4 font-medium" :class="currentFilter === 'Music' ? 'bg-[#371C87] text-white' : 'bg-lightGray text-[#371C87]'" @click="setFilter('Music')">Music</button>
               <button class="px-5 py-3 rounded-full text-sm leading-4 font-medium" :class="currentFilter === 'Crypto' ? 'bg-[#371C87] text-white' : 'bg-lightGray text-[#371C87]'" @click="setFilter('Crypto')">Crypto</button>
          </di>
          <button class="bg-lightGray px-5 py-3 rounded-full text-[#371C87] flex justify-center gap-x-[10px] items-center">
               <img src="../../assets/images/icons/filter-icon.svg" alt=""> <span>All Filters</span>
          </button>
     </div>

     <!-- <div class="grid grid-cols-4 gap-4 mt-10"> -->
     <div class="flex justify-between flex-wrap lg:flex-auto gap-4 mt-10">
          <transition-group class="categories" name="categories" >
               <div class="category" v-for="item in categories" :key="item.id">
                    <div v-if="currentFilter === item.category || currentFilter === 'ALL'" class="h-[373px] w-[270px] rounded-xl bg-white p-[10px]">
                         <div class="relative h-fit">
                              <img class="h-[222px] w-[247px] rounded-xl" :src="item.image" :alt="item.title" />
                              <!-- avatars -->
                              <img class="absolute left-3 -bottom-3 z-10 inline-block w-[30px] rounded-full border-2 border-white" src="../../assets/images/avatar/humanAvatar-3.svg" alt="" />
                              <img class="absolute left-8 -bottom-3 z-20 inline-block w-[30px] rounded-full border-2 border-white" src="../../assets/images/avatar/humanAvatar-4.svg" alt="" />
                              <img class="absolute left-12 -bottom-3 z-30 inline-block w-[30px] rounded-full border-2 border-white" src="../../assets/images/avatar/humanAvatar-5.svg" alt="" />
                              <img class="absolute left-16 -bottom-3 z-30 inline-block w-[30px] rounded-full border-2 border-white" src="../../assets/images/avatar/humanAvatar-6.svg" alt="" />
                         </div>
                         <p class="mt-[10px] text-xl font-bold">{{item.title}}</p>
                         <div class="mt-[11px] flex justify-between">
                              <div class="flex items-center justify-start gap-x-2">
                                   <img class="w-2" src="../../assets/images/icons/greenRombosIcon.svg" alt="" />
                                   <h2 class="text-lg font-bold text-[#00AC4F]">{{item.price}} ETH</h2>
                              </div>
                              <p class="text-gray-600">1 of 321</p>
                         </div>
                         <div class="mt-3 mb-[10px] h-[1px] bg-[#f4f4f4]"></div>
                         <div class="flex items-center justify-between text-[#5539A8]">
                              <div class="rounded-full bg-[#F5F5F5] px-[10px] py-1 font-bold">{{item.availableTime}} left</div>
                              <NuxtLink :to="item.requestUrl" class="font-medium bg-transparent border-0 outline-none">Place a bid</NuxtLink>
                         </div>
                    </div>
               </div>
          </transition-group>
     </div>
</template>

<script setup>
     const currentFilter = ref('ALL');
     const categories = ref([
          {id: 1, image:'https://i.ibb.co/LNJ3jV1/card-1.png', title: "Artwork", category: 'Art', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 2, image:'https://i.ibb.co/Hh63Y31/card-2.png', title: "This NFT", category: 'Celebrities', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 3, image:'https://i.ibb.co/HCPFhGQ/card-3.png', title: "NameCrypto", category: 'Gaming', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 4, image:'https://i.ibb.co/d2DkbbF/card-4.png', title: "KingCrypto", category: 'Sport', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 5, image:'https://i.ibb.co/d2DkbbF/card-4.png', title: "KingCrypto", category: 'Music', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 6, image:'https://i.ibb.co/HCPFhGQ/card-3.png', title: "NameCrypto", category: 'Crypto', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 7, image:'https://i.ibb.co/LNJ3jV1/card-1.png', title: "Artwork", category: 'Art', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 8, image:'https://i.ibb.co/Hh63Y31/card-2.png', title: "This NFT", category: 'Gaming', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 9, image:'https://i.ibb.co/LNJ3jV1/card-1.png', title: "Artwork", category: 'Crypto', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 10, image:'https://i.ibb.co/d2DkbbF/card-4.png', title: "KingCrypto", category: 'Sport', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 11, image:'https://i.ibb.co/Hh63Y31/card-2.png', title: "This NFT", category: 'Celebrities', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 12, image:'https://i.ibb.co/HCPFhGQ/card-3.png', title: "NameCrypto", category: 'Music', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 13, image:'https://i.ibb.co/HCPFhGQ/card-3.png', title: "NameCrypto", category: 'Gaming', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 14, image:'https://i.ibb.co/Hh63Y31/card-2.png', title: "This NFT", category: 'Celebrities', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 15, image:'https://i.ibb.co/LNJ3jV1/card-1.png', title: "Artwork", category: 'Art', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
          {id: 16, image:'https://i.ibb.co/d2DkbbF/card-4.png', title: "KingCrypto", category: 'Sport', price: "0.25", availableTime: "3h 50m 2s", requestUrl:"#"},
     ]);
     const setFilter = (filter) =>{
          currentFilter.value = filter;
     };
</script>

<style>
     .categories-enter {
          transform: scale(0.5) translatey(-80px);
          opacity:0;
     }

     .categories-leave-to{
          transform: translatey(30px);
          opacity:0;
     }

     .categories-leave-active {
          position: absolute;
          z-index:-1;
     }
     .category {
	     transition: all .35s ease-in-out;
     }
</style>