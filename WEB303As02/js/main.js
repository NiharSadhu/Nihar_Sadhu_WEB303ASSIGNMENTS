// WEB303 Assignment 2



$("document").ready(function () {
    

    const prospect = $('#prospect');
    const convert = $('#convert');
    const retain = $('#retain');

    const content = $('#content');

    function getContent(e) {
        content.slideUp(700, ()=>{

            const fileName = `${e.target.id}.html`;
    
            const xhr = new XMLHttpRequest();
            xhr.open('GET', "../" + fileName, true);
    
            xhr.onload = function(){

                content.html(this.responseText);
                content.slideDown();
            }
    
            xhr.send();
        });

    }
    prospect.click(getContent);
    convert.click(getContent);
    retain.click(getContent);
});



// $("document").ready(function () {


//     // triggering click 
//     $("#prospect").click(function () {

//         $("#content").hide();
//         // bringing html in the website through load function
//         $("#content").load("../prospect.html", function () {

//             $("#content").fadeIn(2000);
//        });
//    });


//    $("#convert").click(function () {


//     $("#content").hide();
//     // bringing html in the website through load function
//     $("#content").load("../convert.html", function () {

//         $("#content").fadeIn(2000);
//    });
// });

// $("#retain").click(function () {

//     $("#content").hide();
//     // bringing html in the website through load function
//     $("#content").load("../retain.html", function () {

//         $("#content").fadeIn(2000);
//    });
// });


// });

