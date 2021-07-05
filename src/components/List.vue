<template>
    <div>
        <filter-in/>
        <m-table/>
    </div>
</template>

<script>
import FilterIn from './component/Filter.vue';
import mTable from './component/mTable.vue';

export default {
  components: {
    FilterIn,
    mTable,
  },

};
</script>
