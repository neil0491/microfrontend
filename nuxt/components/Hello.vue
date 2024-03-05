<script setup>
import { defineAsyncComponent } from "vue";
import ErrorComponent from "../components/ErrorComponent.vue";
import LoadingComponent from "../components/Loading.vue";

const HomeView = defineAsyncComponent({
  // the loader function
  loader: () =>
    import("aboute/HomeView"),

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
    <ClientOnly>
      <!-- <template #fallback>
        <LoadingComponent />
      </template>
      <template #placeholder>
        placeholder
      </template> -->
      <HomeView />
    </ClientOnly>
  </div>
</template>
