<style>
:global(body) {
  margin: 0 !important;
  padding: 0 !important;
}

.wrapper {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>

<script lang="ts">
import MyComponent from './components/index.ts';
const name = 'World';
</script>

<div class="wrapper">
  <MyComponent name="{name}" />
</div>
