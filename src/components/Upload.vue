<template>
  <vue-base64-file-upload
    class="v1"
    :accept="accept"
    image-class="v1-image"
    input-class="v1-image"
    @load="onLoad"
  />
</template>

<script>
  import { defineComponent } from 'vue';
  import VueBase64FileUpload from 'vue-base64-file-upload';

  export default defineComponent({
    components: {
      VueBase64FileUpload
    },
    data() {
      return {
        file: ''
      };
    },
    props: {
      accept: String
    },
    methods: {
      onLoad(dataUri) {
        this.file = dataUri
        this.$emit("file", this.file)
      }
    },
    emits: ['file']
  })
</script>