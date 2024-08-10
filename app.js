function loco(){

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });
  document.querySelector('#work-link').addEventListener('click', () =>{
    locoScroll.scrollTo('#work');
  })
  document.querySelector('#about-link').addEventListener('click', () =>{
    locoScroll.scrollTo('#about');
  })
}
function magnet(){

  let links = document.querySelectorAll('.pages a');

  links.forEach(function(link){
      let bounding = link.getBoundingClientRect();
  
      window.addEventListener('resize' , function(){
          bounding = link.getBoundingClientRect();
      });
  
      link.addEventListener('mousemove', function(e){
          const mouseX = (e.pageX - bounding.left) - 15;
          const mouseY =( e.pageY - bounding.top ) + 2;
          gsap.to(link , {
              x: mouseX - bounding.width / 2 * 0.4,
              y: mouseY - bounding.width / 2 * 0.4,
              duration:0.8,
              ease:'power3.Out',
          });
      });
      link.addEventListener('mouseleave', function(){
          gsap.to(link , {
              x:0,
              y:0,
              duration:0.8,
              ease:'elastic.out(0.5,0.3)',
  
          });
      });
  });
  
  let links1 = document.querySelectorAll('.pages p');

  links1.forEach(function(link1){
      let bounding = link1.getBoundingClientRect();
  
      window.addEventListener('resize' , function(){
          bounding = link1.getBoundingClientRect();
      });
  
      link1.addEventListener('mousemove', function(e){
          const mouseX = (e.pageX - bounding.left) - 15;
          const mouseY =( e.pageY - bounding.top ) + 2;
          gsap.to(link1 , {
              x: mouseX - bounding.width / 2 * 0.4,
              y: mouseY - bounding.width / 2 * 0.4,
              duration:0.8,
              ease:'power3.Out',
          });
      });
      link1.addEventListener('mouseleave', function(){
          gsap.to(link1 , {
              x:0,
              y:0,
              duration:0.8,
              ease:'elastic.out(0.5,0.3)',
  
          });
      });
  });
  
}
function abouth(){
    var clutter = "";
    document.querySelector('.about p').textContent.split(' ').forEach(function(dets){
      clutter += `<span> ${dets} </span>`
      document.querySelector('.about p').innerHTML = clutter
    })
    
    gsap.to('.about p>span', {
      scrollTrigger:{
        trigger: ".side-about p",
        scroller:'main',
        start:'-140% 50%',
        // markers:true,
        end:'top 59%',
        scrub:.5,
      },
      stagger:.2,
      color:"#1C1D20",
    })  
};
function aboutp(){
    var clutter1 = "";
    document.querySelector('.side-about p').textContent.split(' ').forEach(function(dets){
      clutter1 += `<span> ${dets} </span>`
      document.querySelector('.side-about p').innerHTML = clutter1
    })
    
    gsap.to('.side-about p>span', {
      scrollTrigger:{
        trigger: ".side-about p",
        scroller:'main',
        start:'-140% 48%',
        end:'top 59%',
        scrub:.5,
      },
      stagger:.2,
      color:"#1C1D20",
    })  
};

document.querySelectorAll('.box').forEach(function(boxs){
  var rotate = 0;
  var diffrot = 0;
boxs.addEventListener('mouseleave', function(){
      gsap.to(boxs.querySelector('img') , {
          opacity:0,
          ease: Power3,
          duration: .5,
      });
  })
boxs.addEventListener('mousemove', function(dets){
  var diff = dets.clientY - boxs.getBoundingClientRect().top;
  diffrot = dets.clientX - rotate;
  rotate = dets.clientX;
  gsap.to(boxs.querySelector('img') , {
      opacity:1,
      ease: Power3,
      top :diff,
      left :dets.clientX - 200,
      rotate :gsap.utils.clamp(-20, 20, diffrot*0.08),
  });
})
})

function forum(){
  let form = document.querySelector('.contact-form')

  document.querySelector('.contact-main button').addEventListener('click', function(){
    // form.style.display = 'inline-block';
    gsap.to(form, {
      duration: 0.3,
      visibility: "visible",
      opacity: 1,
    });
    gsap.to('main', {
      duration: .3,
      opacity: 0.7,
      filter: 'blur(5px)',
    });
  })
  
  
  document.querySelector('.pages>a').addEventListener('click', function(){
    // form.style.display = 'inline-block';
    gsap.to(form, {
      duration: 0.3,
      visibility: "visible",
      opacity: 1,
    });
    gsap.to('main', {
      duration: .3,
      opacity: 0.7,
      filter: 'blur(5px)',
    });
  })
  document.querySelector('.contact-form>i').addEventListener('click', function(){
    // form.style.display = 'inline-block';
    gsap.to(form, {
      duration: 0.3,
      visibility: "hidden",
      opacity: 0,
    });
    gsap.to('main', {
      duration: .3,
      opacity: 1,
      filter: 'blur(0px)',
    });
  })
}

setTimeout(() => {
  document.querySelector('.loader h1').innerText = 'Hola.'
  }, 700);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Bonjour.'
  }, 800);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Ciao.'
  }, 900);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'こんにちは'
  }, 1000);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Hallo '
  }, 1100);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Habari.'
  }, 1250);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Bonjour '
  }, 1400);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'こんにちは'
  }, 1500);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Hallo.'
  }, 1600);
  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Hello.'
  }, 1700);


window.addEventListener('load',function(){
  gsap.to('.loader',{
    top:'-100%',
    delay:1,
    ease:'power3.inOut',
    duration:1,
  })
})
loco();
magnet();
abouth();
aboutp();
forum();