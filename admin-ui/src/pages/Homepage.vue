<template>
  <div class="container container-fluid" style="width: 80vw !important;">
    <h1 class="my-3">İstatistikler:</h1>
    <div class="row">
      <div class="col">
        <StatusCard title="Kurs Sayısı" text="0" imgSrc="course-count.jpg" imgAlt="course-count"/>
      </div>
      <div class="col">
        <StatusCard title="Blog Sayısı" text="0" imgSrc="blog-count.jpg" imgAlt="blog-count"/>
      </div>
      <div class="col">
        <StatusCard title="Görüntülenme Sayısı" text="0" imgSrc="view-count.jpg" imgAlt="view-count"/>
      </div>
    </div>
  </div>
</template>


<script>
import StatusCard from '@/components/StatusCard/StatusCard.vue'

export default {
  name: 'Homepage',
  components: {
    StatusCard
  }
}
</script>
