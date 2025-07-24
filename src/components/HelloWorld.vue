<template>
  <div>
    <HomeBanner />
    <TechList />
    <CaseList />
    <AppFooter />
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'
import CaseList from '@/components/CaseList.vue'
import TechList from '@/components/TechList.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBanner,
    TechList,
    CaseList,
    AppFooter
  }
}
</script>