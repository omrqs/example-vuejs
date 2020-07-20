<template>
  <v-app id="main">
    <div v-show="!['welcome'].includes($route.name)">
      <core-drawer />
      <core-toolbar />
    </div>
    <core-view />
    <core-snackbar />
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
