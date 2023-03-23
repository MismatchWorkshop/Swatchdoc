
let $ListItems = [];
let count = 0;
let item_interval = null;

let $AccordionSections = [];
let accordion_interval_count = 0;
let accordion_interval = null;

let $Columns = [];
let col_interval_count = 0;
let col_interval = null;
let total_columns = 1;

window.onload = function() {

    accordion_interval = setInterval(function() {
        if(!$AccordionSections.length && accordion_interval_count < 101){
            $AccordionSections = rsd_get_accordion_sections();
            //console.log(count, 'AccordionSections:' , $AccordionSections);
            accordion_interval_count++;
        }else{
            clearInterval(accordion_interval);
            rsd_init_accordion_sections($AccordionSections);
        }      
    }, 100);

}

function rsd_get_accordion_sections() {
    const sections = document.querySelectorAll('.rsd-accordion-section');
    //console.log("RSD Get Accordion Sections", sections.length, accordion_interval_count);
    return sections;
}

function rsd_init_accordion_sections($Sections) {
    const vspace = 25;
    $Sections.forEach(($Item, i)=>{
        let $Wrapper = $Item.closest(".ui-widget");
        let $Content = null;
        if($Wrapper) {
            $Wrapper.classList.add("ui-widget--rsd-accordion");
            $Content = $Wrapper.nextElementSibling.firstChild;
        }

        let $Trigger = $Item.querySelector(".rsd-accordion__title > button");
        if($Trigger) {
            console.log("Trigger", $Trigger);
            $Trigger.addEventListener("click", (e)=> {
                console.log("Trigger:Click", $Trigger.classList);
                $Wrapper.classList.toggle("open");
                if ($Content.style.maxHeight) {
                    $Content.style.maxHeight = null;
                  } else {
                    $Content.style.maxHeight = $Content.scrollHeight + (vspace * 1) + "px";
                  }
            });
        }


        if(i==$Sections.length-1 && $Content) {
            $Content.classList.add("rsd-accordion--last-content");
        }else{
            console.log("Lost");
        }
    });
}

function rsd_get_columns() {
    const $Columns = document.querySelectorAll('.container--main .col');
    console.log("RSD Get Columns", $Columns.length, col_interval_count);
    return $Columns;
}


function rsd_init_columns($Columns) {
    $Columns.forEach(($Column, i)=>{
        const has_button = $Column.querySelector(".rsd-card__heading.has-button, .rsd-card__heading.has-back");
        if(has_button) {
            $Column.classList.add("has-button");
        }
    });
}