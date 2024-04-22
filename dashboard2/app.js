let menu = () => {
    // alert("Click ")
    // document.getElementsByClassName('sidebar')[0].style.margin-left = 30vw;
    document.getElementsByClassName('sidebar')[0].style.marginLeft = '100vw';
    document.getElementsByClassName('sidebar')[0].style.width = "100%"
    // document.getElementsByClassName('sidebar')[0].style.marginTop = '45px';
    // document.getElementsByClassName('sidebar')[0].style.top = '30';
    
}
$(document).ready(function(){
    var sidebarOpen = false;
    $('.menu-btn').click(function(){
        if(sidebarOpen == false){
            $('.sidebar').css('left', '0');
            sidebarOpen = true;
        }
        else{
            $('.sidebar').css('left', '-100vw');
            sidebarOpen = false;
        }



    });
})

