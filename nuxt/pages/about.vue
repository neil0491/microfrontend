<script setup>
import { defineAsyncComponent } from "vue";
import ErrorComponent from "../components/ErrorComponent.vue";
import LoadingComponent from "../components/Loading.vue";

const AboutView = defineAsyncComponent({
  // the loader function
  loader: () =>
    import("aboute/AboutView").then((e) => {
      return e;
    }),

  // A component to use while the async component is loading
  loadingComponent: LoadingComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 0,

  // A component to use if the load fails
  errorComponent: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});
</script>

<template>
  <div>
    It's About Page from Nuxt. Next string Import from Module:
    <ClientOnly>
      <AboutView />
    </ClientOnly>
  </div>
</template>
