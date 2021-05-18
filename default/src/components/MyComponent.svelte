<style lang="scss">
@import '../styles/vars';

h1 {
  margin: auto;
  color: $color;
  font-weight: lighter;
  font-size: 5rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>

<script lang="ts">
export var name = 'World';

export var textColor = '#ff0313';
</script>

<h1 style="color: {textColor}">Hello {name}!</h1>
