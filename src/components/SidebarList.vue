<template>
  <q-item clickable :href="path">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface sidebarType {
  title: string;
  caption?: string;
  icon?: string;
  path: string;
}
withDefaults(defineProps<sidebarType>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
