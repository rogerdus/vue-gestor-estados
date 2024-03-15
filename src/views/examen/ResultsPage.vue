<template>
  <div class="card">
    <results />
  </div>
  <div class="card">
    <div>
      <answers />
    </div>
  </div>
</template>
<script>
import Results from '@/components/examen/Results.vue'
import answers from '@/components/examen/Answers.vue';

export default {
    components: {
        Results,
        answers
    }
};
</script>
