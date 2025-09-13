const elements = document.getElementsByClassName("blog-subtitle");

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  if (element.textContent.length > 40) {
    element.textContent = element.textContent.slice(0, 40) + "...";
  }
}
