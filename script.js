function sumar() {
  const select1 = document.getElementById("pregunta1");
  const select2 = document.getElementById("pregunta2");
  const select3 = document.getElementById("pregunta3");
  const select4 = document.getElementById("pregunta4");
  const select5 = document.getElementById("pregunta5");
  const select6 = document.getElementById("pregunta6");
  const select7 = document.getElementById("pregunta7");
  const select8 = document.getElementById("pregunta8");
  const select9 = document.getElementById("pregunta9");
  const select10 = document.getElementById("pregunta10");

  let c = 0;

  for (let i = 0; i < select1.selectedOptions.length; i++) {
    c = c + parseFloat(select1.selectedOptions[i].value);
  }

  for (let i = 0; i < select2.selectedOptions.length; i++) {
    c = c + parseFloat(select2.selectedOptions[i].value);
  }

  for (let i = 0; i < select3.selectedOptions.length; i++) {
    c = c + parseFloat(select3.selectedOptions[i].value);
  }
  
  for (let i = 0; i < select4.selectedOptions.length; i++) {
    c = c + parseFloat(select4.selectedOptions[i].value);
  }

  for (let i = 0; i < select5.selectedOptions.length; i++) {
    c = c + parseFloat(select5.selectedOptions[i].value);
  }

  for (let i = 0; i < select6.selectedOptions.length; i++) {
    c = c + parseFloat(select6.selectedOptions[i].value);
  }

  for (let i = 0; i < select7.selectedOptions.length; i++) {
    c = c + parseFloat(select7.selectedOptions[i].value);
  }

  for (let i = 0; i < select8.selectedOptions.length; i++) {
    c = c + parseFloat(select8.selectedOptions[i].value);
  }

  for (let i = 0; i < select9.selectedOptions.length; i++) {
    c = c + parseFloat(select9.selectedOptions[i].value);
  }

  for (let i = 0; i < select10.selectedOptions.length; i++) {
    c = c + parseFloat(select10.selectedOptions[i].value);
  }

  if (c >= 1 && c <= 15) {
    document.getElementById("Resultado").innerText = "Resultado: ¡Felicidades! Parece que estás manejando muy bien tu bienestar mental. Mantener una actitud positiva y prácticas saludables puede estar contribuyendo a tu bienestar general. Sigue dedicando tiempo a actividades que te traigan alegría y continúa cuidándote a ti mismo/a. Recuerda que el autocuidado es importante incluso cuando te sientes bien, así que no dudes en mantener tus rutinas saludables y buscar apoyo si alguna vez sientes que necesitas un poco más de ayuda para lidiar con los desafíos de la vida.";
  } else if (c >= 16 && c <= 30) {
    document.getElementById("Resultado").innerText = "Resultado: Parece que estás experimentando algunos desafíos en tu bienestar mental. Puede ser útil tomarte un tiempo para reflexionar sobre lo que podría estar causando estos sentimientos y considerar hablar con alguien de confianza sobre lo que estás experimentando. Recuerda que no estás solo/a y que hay recursos disponibles para ayudarte a superar estos obstáculos. Considera hablar con un profesional de la salud mental para obtener apoyo y orientación adicional. Practicar técnicas de autocuidado como la meditación, el ejercicio regular y mantener una dieta equilibrada también puede ser beneficioso para tu bienestar general.";
  } else if (c >= 31 && c <= 50) {
    document.getElementById("Resultado").innerText = "Resultado: Parece que estás experimentando una carga significativa en tu bienestar mental en este momento. Es importante que te tomes en serio estos sentimientos y busques ayuda profesional lo antes posible. Hablar con un terapeuta o consejero puede proporcionarte un espacio seguro para explorar tus pensamientos y emociones, así como estrategias para manejar mejor tus desafíos. No tengas miedo de alcanzar a tus seres queridos y pedir apoyo durante este tiempo difícil. Recuerda que la recuperación es un proceso y que con el tiempo y el apoyo adecuado, puedes superar estos desafíos y volver a un lugar de mayor bienestar emocional.";
  }
}
