<template>
  <Header/>
  <NuxtPage/>
  <Footer/>
</template>

<script setup>
  useHead({
    title: 'NFT Marketplace',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { 
        name: 'NFT Marketplace',
        content: 'This project is made for NFT Market Place. This project is made with Nuxt-js (version 3).' 
      }
    ],
    bodyAttrs: {
      class: 'NFT Marketplace'
    }
  })
</script>