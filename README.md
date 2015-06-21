# page-slider

Creates a page for every DIV that covers the entire browser window. Each page slides up with a click of the mouse.

```
<div id="pageSliderContainer">
	<div class="page">Born to Run (1975)</div>
	<div class="page">Darkness on the Edge of Town (1978)</div>
	<div class="page">The River (1980)</div>
</div>
```

```
<script>
	$('#pageSliderContainer').pageSlider({
		pageClass: 'page'
	});
</script>
```