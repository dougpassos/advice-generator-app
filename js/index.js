window.addEventListener("load", () => {
  mainAdvice();
});

async function mainAdvice() {
  const {idAdvice, fraseAdvice} = await getAdviceAPI();
  fillAdvice(idAdvice, fraseAdvice);  
}

function fillAdvice(id, advice) {
  document.querySelector("#id-advice").innerHTML = id
  document.querySelector("#advice-frase").innerHTML = advice;  
}

async function getAdviceAPI() {
  let idAdvice = '';
  let fraseAdvice = '';
  try {
      const respApi = await fetch('https://api.adviceslip.com/advice');
      const adviceData = await respApi.json();
      idAdvice = adviceData.slip.id;
      fraseAdvice = adviceData.slip.advice
      
  } catch (error) {
      idAdvice = '0000';
      fraseAdvice = `'Apologies, I'm the one who needs help'`
      
      console.log(error);
  } finally {
    return { idAdvice, fraseAdvice };
  }  
}
