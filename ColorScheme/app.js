const colorForm = document.getElementById('color-post');
const colorPicker = document.getElementById('color-picker');
const colorSchemeContainer = document.getElementById('color-scheme');

colorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedColor = colorPicker.value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.slice(1)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const colorScheme = data.colors.map(color => color.hex.value);
            console.log(colorScheme);
            colorSchemeContainer.innerHTML = colorScheme.map(color => `<div class="color-item"><div class="color-box" style="background-color: ${color};"></div> <span class="color-value">${color}</span></div>`).join('');
        })
})