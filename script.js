let chosenQuiz = "";
const modal = document.getElementById("nameModal");
document.querySelectorAll("button[data-quiz]").forEach(btn=>{
  btn.addEventListener("click",()=>{chosenQuiz = btn.dataset.quiz;modal.setAttribute("aria-hidden","false")});
});
function saveName(){
  const name = document.getElementById("username").value.trim();
  if(!name) return;
  localStorage.setItem("name",name);
  modal.setAttribute("aria-hidden","true");
  document.getElementById("home").style.display="none";
  document.getElementById(chosenQuiz).style.display="block";
}
function submitQuiz(type,total){
  let score=0;
  document.querySelectorAll(`input[name^=${type[0]}]:checked`).forEach(v=>score+=Number(v.value));
  document.getElementById(type).style.display="none";
  const r=document.getElementById("result");
  r.style.display="block";
  r.innerHTML=`${localStorage.getItem("name")}<br>Score: ${score} / ${total}`;
}
