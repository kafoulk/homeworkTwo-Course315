
function initListeners() {
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
    $(".submit").click(function(e){
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        console.log("inputs "+ firstName + lastName)
    });
    $("#edit").click(function(e){
        e.preventDefault();

        let userObj = {
            fName: "Todd",
            lName: "Shelton",
        };

        console.log(userObj);
        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        // console.log("inputs "+ firstName + lastName)
    });
}

function changeRoute () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "")
    // console.log(hashTag + " " + pageID);

    if(pageID !="") {    $.get(`pages/${pageID}/${pageID}.html`, function(data){
        console.log("data " + data);
        $("#app").html(data);
    });
   } else {
        $.get(`pages/home/home.html`, function(data){
        console.log("data " + data);
        $("#app").html(data);
    });
   }

}


function initURLListener (){
        $(window).on("hashchange", changeRoute);
    changeRoute();
}




$(document).ready(function(){
    initListeners();
    initURLListener();
});