<template>
  <button 
    @click="addItemToGroup_STORE"
    class="add-remove-btns--add flex-1"
    >Add
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['addItemToGroup_STORE']),
  }
}
</script>

<style scoped>
.add-remove-btns--add {
  width: auto;
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  border-left: 1px solid var(--backgroundGrey);
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: .1rem .5rem;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.add-remove-btns--add:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
</style>
