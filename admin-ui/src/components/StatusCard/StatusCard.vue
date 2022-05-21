<template>
  <b-card
      :title="title"
      :img-src="imageUrl"
      :img-alt="imgAlt"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
  >
    <b-card-text class="stats-font">
      {{ text }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'Statuscard',
  props: {
    title: {
      type: String,
      default: 'Card Title'
    },
    imgSrc: {
      type: null,
    },
    imgAlt: {
      type: String,
      default: 'Image'
    },
    imgTop: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: 'Card text'
    }
  },
  computed: {
    imageUrl() {
      return require('@/assets/' + this.imgSrc);
    }
  }
};
</script>

<style>
.stats-font {
  font-size: 1.5rem;
  color: #1f1f1f;
}
</style>
