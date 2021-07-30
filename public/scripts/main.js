"use strict";var select=function(e){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:document).querySelector(e)},selectAll=function(e){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(e)},header=select(".header"),headerScroll="header-scroll";window.addEventListener("scroll",function(){window.scrollY>=2*header.offsetHeight?header.classList.add(headerScroll):header.classList.remove(headerScroll)});var popularCarousel=select("#popular-home .popular-carousel"),testtiContent=select(".testi-content"),owlCarousel=select(".owl-carousel"),cursorCarousel=selectAll(".cursor-carousel"),carouselActive="carousel-active",mouseDown=function(e){e.classList.add(1<arguments.length&&void 0!==arguments[1]?arguments[1]:carouselActive)},mouseUp=function(e){e.classList.remove(1<arguments.length&&void 0!==arguments[1]?arguments[1]:carouselActive)};cursorCarousel.forEach(function(e){e.addEventListener("mousedown",function(){mouseDown(e)}),e.addEventListener("mouseup",function(){mouseUp(e)})}),$(popularCarousel).slick({autoplay:!0,autoplaySpeed:2e3,prevArrow:"<button class='btn-carousel btn-carousel_left'><i class= 'fas fa-chevron-left' aria-hidden='true'></i></button>",nextArrow:"<button class='btn-carousel btn-carousel_right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),$(testtiContent).slick({autoplay:!0,autoplaySpeed:2e3,prevArrow:"<button class='btn-carousel btn-carousel_left'><i class= 'fas fa-chevron-left' aria-hidden='true'></i></button>",nextArrow:"<button class='btn-carousel btn-carousel_right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:1400,settings:{infinite:!0,slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),$(owlCarousel).slick({arrows:!1,autoplay:!0,autoplaySpeed:3e3,cssEase:"ease-in",easing:"linear",responsive:[{breakpoint:1400,settings:{infinite:!0,slidesToShow:4,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}}]});var btnBackTop=select(".btn-backTop"),btnBackTopScroll="btn-backTop_scroll",slider=selectAll(".slider");window.addEventListener("scroll",function(e){window.scrollY>=slider.clientHeight?btnBackTop.classList.add(btnBackTopScroll):btnBackTop.classList.remove(btnBackTopScroll)});var blogForm=selectAll(".blog-form"),blogFormIcon=selectAll(".blog-form_icon"),blogFormList=selectAll(".blog-form_list"),blogFormListItems=selectAll(".blog-form_list--items"),blogFormListContainer=selectAll(".blog-form_list ul"),blogFormListTitle=selectAll(".blog-form_list--title"),blogFormJs="blog-form_js";blogFormList.forEach(function(t){blogFormListTitle.forEach(function(o){o.addEventListener("click",function(e){t.contains(o)&&o==e.target?(t.classList.toggle(blogFormJs),blogFormListItems.forEach(function(e){t.contains(e)&&e.addEventListener("click",function(){o.innerHTML=e.innerHTML,t.classList.remove(blogFormJs)})})):t.classList.remove(blogFormJs)})})}),blogFormListContainer.forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),window.addEventListener("click",function(t){blogFormList.forEach(function(o){blogFormListTitle.forEach(function(e){t.target!==e&&o.contains(e)&&o.classList.remove(blogFormJs)})})});var loader=select(".preloader"),loaderFunc=function(){setTimeout(function(){loader.style.opacity="0",loader.style.visibility="hidden"},5200)};loaderFunc();var map=void 0;function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:16,lng:108},zoom:8})}var form=select(".form"),formGroup=selectAll(".form-group"),formItems=selectAll(".form-items"),btnForm=select(".btn-form");function removeTextForm(){selectAll(".form-warning").forEach(function(e){return e.remove()})}function setErrorForm(e,o){var t=e.parentNode,e=document.createElement("p");e.className="form-warning";o=document.createTextNode(o);e.appendChild(o),t.appendChild(e),t.classList.add("error"),t.classList.remove("successForm")}function setSuccessForm(e){e=e.parentNode;e.classList.add("successForm"),e.classList.remove("error")}btnForm.addEventListener("click",function(e){e.preventDefault(),removeTextForm(),formItems.forEach(function(o){var e=o.getAttribute("data-validation-required-message"),t=o.value.trim();""===t&&(setErrorForm(o,e),selectAll(".form-warning").forEach(function(e){o.parentNode.contains(e)&&o.addEventListener("click",function(){e.remove()})})),""!==t&&setSuccessForm(o)})});