<template>
  <div>
    <AppHeader />
    <HomeBanner />
    <TechList />
    <CaseList />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import CaseList from '@/components/CaseList.vue'
import TechList from '@/components/TechList.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    HomeBanner,
    TechList,
    CaseList,
    AppFooter
  }
}
</script>