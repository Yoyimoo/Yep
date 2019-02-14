<p id="demo"></p>

<script>
try {
  alert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>
