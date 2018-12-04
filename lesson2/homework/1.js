
  function showTab(event){
    let tabNumber = event.target.dataset.tab;     
    
     
    document.querySelector(`.tab[data-tab="${tabNumber}"]`).classList.add("active");
  }
  function closeTabs(){
    let active =document.querySelectorAll(`.tab.active`)
    Array.from(active).forEach((tab)=>{
      tab.classList.remove("active");
    });
  } 
  let buttons = document.getElementsByClassName("showButton");
  let buttonContainer = document.getElementById("buttonContainer");
  let deleteAll = document.createElement("button");
  deleteAll.innerText = "Close";
  deleteAll.addEventListener("click", closeTabs);
  buttonContainer.appendChild(deleteAll);

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", showTab);
  });
  
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
