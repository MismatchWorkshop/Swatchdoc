!function(){var t=[],l=0,e=null;window.onload=function(){e=setInterval((function(){var n;!t.length&&l<101?(t=document.querySelectorAll(".rsd-accordion-section"),l++):(clearInterval(e),25,(n=t).forEach((function(t,l){var e=t.closest(".ui-widget"),o=null;e&&(e.classList.add("ui-widget--rsd-accordion"),o=e.nextElementSibling.firstChild);var i=t.querySelector(".rsd-accordion__title > button");i&&(console.log("Trigger",i),i.addEventListener("click",(function(t){console.log("Trigger:Click",i.classList),e.classList.toggle("open"),o.style.maxHeight?o.style.maxHeight=null:o.style.maxHeight=o.scrollHeight+25+"px"}))),l==n.length-1&&o?o.classList.add("rsd-accordion--last-content"):console.log("Lost")})))}),100)}}();