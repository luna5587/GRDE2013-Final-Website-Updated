//register gsap plugin
gsap.registerPlugin(ScrollTrigger);

//responsive nav bar
  //get items
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  // when user clicks toggle new function
  hamburger.addEventListener("click", sideMenu);
    function sideMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
  }

// nav bar resizing animation
//create new scroll trigger
  ScrollTrigger.create({
    animation:gsap.from(".nav-bar", {
      scale:1.1,  //nav bar will adjust scale according to position on page
    }),
    scrub:true,
    trigger: "#Home", //trigger for animation
    start: "top bottom",
    endTrigger: '#About', // trigger will end at About section
    end: 'top center',
  });

// progress bar
  // create new function
  window.onscroll = function() {progressIndicator()};
  function progressIndicator(){
    var winScroll = document.body.scrollTop || 
    document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //calculate height of page scrolled
    var scrolled = (winScroll / height) * 100; // convert scrolled percentage into the width of the progress bar
    document.getElementById("progress-bar").style.width = scrolled + "%"; //change width
  }

//scroll animations
//Home page
    const tlhome = gsap.timeline({
      scrollTrigger: {
          trigger: '#Home', //trigger for animation
          start: "center bottom",
          end: 'bottom 20%',
      }
    })
      ScrollTrigger.create({
        trigger: '#Home',
        // nav bar slides down from top
        animation: gsap.from('.nav-bar, #progress-bar', {duration: 1, opacity: 0, y:-200}),
      })
//after home page - make elements scroll faster
  const tlhomeafter = gsap.timeline({
    scrollTrigger: {
        trigger: '#About',
        start: "center bottom",
        scrub: true
    }
  })
  tlhomeafter.to('.hero-1-container, .caption', {y:-35, duration: 0.2}, "-=0.3");

  //about page
    const tlabout = gsap.timeline({
      scrollTrigger: {
          trigger: '#about-text',
          start: "center bottom",
          scrub: true,
      }
    })
    tlabout.from('#about-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3");

  //what page
    const tlwhat = gsap.timeline({
      scrollTrigger: {
          trigger: '#blue-background',
          start: "center bottom",
          scrub: true,
      }
    })
    tlwhat.from('#what-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3")
    //question mark spin animation as user scrolls
    .from('#question-mark', {rotation: 360 * 3, duration: 1, ease: "none"}, "-=0.8"); 

  // why page
    const tlwhy = gsap.timeline({
      scrollTrigger: {
          trigger: '#why-heading',
          start: "center bottom",
          scrub: true,
      }
    })
    tlwhy.from('#why-heading', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3")
    .from('.statistics-info', {opacity:0, y:-50, duration: 1, ease: "power4.out"}, "-=0.3");

    // statistics page
      const tlstats = gsap.timeline({
        scrollTrigger: {
            trigger: '.statistics-info',
            start: "center bottom",
            scrub: true,
        }
      });
      tlstats.from('#why-text', {opacity:0, y:-100, duration: 0.6, ease: "power4.out"}, "-=0.3");

    // act page
      const tlact = gsap.timeline({
        scrollTrigger: {
            trigger: '.action-container',
            start: "center bottom",
            scrub: true,
        }
      })
      tlact.from('#action-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"});

    // inspire page
      const tlinspire = gsap.timeline({
        scrollTrigger: {
            trigger: '.inspire-swiper',
            start: "center bottom",
            scrub: true,
        }
      })
      tlinspire.from('#inspire-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"});

    // hashtag animation
      const tlhashtag = gsap.timeline({
        scrollTrigger: {
            trigger: '.inspire-swiper',
            start: "center bottom",
            scrub: true,
        }
      })
        tlhashtag.from('#hashtag', {duration: 2, x: -300, rotate: 360, ease: "power4.out"});

    // footer animation
      const tlfooter = gsap.timeline({
        scrollTrigger: {
            trigger: '#footer-wrapper',
            start: "center bottom",
            scrub: true,
        }
      })
      // footer slide in from bottom as user scrolls
        tlfooter.from('#footer-wrapper', {duration: 1, y: 400, ease: "power4.out"})

//

// audio functions
  // create new audio files
    const natureSound = new Audio('audio/nature.wav')
    const scribbleSound = new Audio('audio/scribble.wav')
  // create variables to use - draw in audio
    const natureImg = document.querySelector('.leaves-container')
    const sunImg = document.querySelector('#sun');
    const scribbleImg = document.querySelector('#scribble');
    const questionImg = document.querySelector('#question-mark');
    const hashtagImg = document.querySelector('#hashtag');
  // 
    // when user hovers over leaves image, nature sounds will play
      natureImg.addEventListener('mouseover', () => { // listen for when user hovers over
          natureSound.play() // play sound when user hovers
      })
      natureImg.addEventListener('mouseleave', () => {
        natureSound.pause() // pause sound when user's mouse leaves
      })
    // when user hovers over any drawing, pencil sound will play
      scribbleImg.addEventListener('mouseover', () => {// listen for when user hovers over
        scribbleSound.play()
      })
      scribbleImg.addEventListener('mouseleave', () => { // pause sound when user's mouse leaves
        scribbleSound.pause()
      })
      sunImg.addEventListener('mouseover', () => {// listen for when user hovers over
        scribbleSound.play()
      })
      sunImg.addEventListener('mouseleave', () => { // pause sound when user's mouse leaves
        scribbleSound.pause()
      })
      questionImg.addEventListener('mouseover', () => {// listen for when user hovers over
        scribbleSound.play()
      })
      questionImg.addEventListener('mouseleave', () => { // pause sound when user's mouse leaves
        scribbleSound.pause()
      })
      hashtagImg.addEventListener('mouseover', () => {// listen for when user hovers over
        scribbleSound.play()
      })
      hashtagImg.addEventListener('mouseleave', () => { // pause sound when user's mouse leaves
        scribbleSound.pause()
      })

  // statistics section
    gsap.from ('.statistics', {
      autoAlpha:0, 
      y:40
    });
    gsap.to(".statistics", {
        duration:2, 
        autoAlpha:1, 
        y:0, 
        scrollTrigger: "#why-heading",
        ease: "power2.inOut",
    });

  //parallax scrolling images
    gsap.utils.toArray('.img-container').forEach(container => {
        const img = container.querySelector('img');
        const tl = gsap.timeline({
        scrollTrigger: { trigger: container, scrub: true, pin: false,}
      });
      tl.fromTo(img, { yPercent: -12, ease: 'none'  }, { yPercent: 8, ease: 'none'});
      });

  //statistics animations
    gsap.from([".meter-1"], {
      strokeDashoffset: "360", // initial ring will be set to 0
    })
    gsap.to([".meter-1"], {
      duration:1.4, 
      strokeDashoffset: "120", // ring will move be 120
      scrollTrigger: ".meter",
      ease: "power2.inOut",
    });

    gsap.from([".meter-2"], {
      strokeDashoffset: "360", // initial ring will be set to 0
    })
    gsap.to([".meter-2"], {
      duration:1.4, 
      strokeDashoffset: "40", // ring will move be 40
      scrollTrigger: ".meter",
      ease: "power2.inOut",
    });

    // carousel controllable
      var swiper = new Swiper(".action-swiper", {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        freeMode: true, // users can grab slides scroll horizontally
        navigation: { // nav buttons
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    // automatic carousel
      var swiper = new Swiper(".inspire-swiper",{
        loop: true, //carousel will loop through slides
        autoplay: {
          delay: 0, // carousel will keep moving automatically
        },
        autoplayDisableOnInteraction:true, // stops moving when user interacts with carousel
        slidesPerView: '4',
        spaceBetween: 100,
        speed: 1500,   // This will move the carousel every 1.5 seconds
        grabCursor: true,
      });

    // blob svg animations
    const blob1Path = "M8.99982 247C109.747 538.413 -120 761.5 109.746 883.774C360.5 970.5 696 813 610 538.413C514 297 426.5 363.5 360.5 156.999C262.329 -150.16 -56.9301 56.2959 8.99982 247Z";
    const blob2Path = "M91.1963 152.076C-156.703 836.782 157.164 1004.87 363.746 1004.78C652.209 976.431 814.814 895.442 864 659.415C864 565.121 846.061 417.894 652.209 189.388C381.983 -129.144 138.19 22.2772 91.1963 152.076Z";
    const blob = document.querySelector("#blob");
    const blob2 = document.querySelector("#blob2");
        
    // hover over blob
    blob.addEventListener('mouseover', ()=>{
      // anime.js and timeline set up
      const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo",
      });
      // add animations to timeline
      timeline.add({
        targets: ".blob1",
        d: [{value: blob1Path}]
      })
      });
      blob.addEventListener('mouseout', ()=>{
        // anime.js and timeline set up
        const timeline = anime.timeline({
          duration: 750,
          easing: "easeOutExpo",
        });
        // add animations to timeline
        timeline.add({
          targets: ".blob1",
          d: [{value: blob2Path}]
        })
        });

          // hover over blob
    blob2.addEventListener('mouseover', ()=>{
      // anime.js and timeline set up
      const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo",
      });
      // add animations to timeline
      timeline.add({
        targets: ".blob2",
        d: [{value: blob2Path}]
      })
      });
      blob2.addEventListener('mouseout', ()=>{
        // anime.js and timeline set up
        const timeline = anime.timeline({
          duration: 750,
          easing: "easeOutExpo",
        });
        // add animations to timeline
        timeline.add({
          targets: ".blob2",
          d: [{value: blob1Path}]
        })
        });

  
  ScrollTrigger.matchMedia({
    "(max-width: 1024px)"() {
              // carousel controllable
              var swiper = new Swiper(".action-swiper", {
                slidesPerView: 4,
                spaceBetween: 30,
                freeMode: true, // users can grab slides scroll horizontally
                navigation: { // nav buttons
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
        
            // automatic carousel
              var swiper = new Swiper(".inspire-swiper",{
                loop: true, //carousel will loop through slides
                autoplay: {
                  delay: 0, // carousel will keep moving automatically
                },
                slidesPerView: '3',
                spaceBetween: 90,
                speed: 1500,   // This will move the carousel every 1.5 seconds
                grabCursor: true,
              });
    }
  })


  ScrollTrigger.matchMedia({
    "(max-width: 768px)"() {
    const tlact = gsap.timeline({
      scrollTrigger: {
          trigger: '#action-text',
      }
    })
    tlact.from('#action-text', {opacity:0, y:-100, duration: 1, ease: "power4.out"});

        // carousel controllable
        var swiper = new Swiper(".action-swiper", {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true, // users can grab slides scroll horizontally
          navigation: { // nav buttons
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
  
      // automatic carousel
        var swiper = new Swiper(".inspire-swiper",{
          loop: true, //carousel will loop through slides
          autoplay: {
            delay: 0, // carousel will keep moving automatically
          },
          slidesPerView: '3',
          spaceBetween: 90,
          speed: 1500,   // This will move the carousel every 1.5 seconds
          grabCursor: true,
        });
  }
  })



  // mobile media
  ScrollTrigger.matchMedia({
    "(max-width: 418px)"() {
      
      //parallax scrolling img animations
      gsap.utils.toArray('.img-container').forEach(container => {
      const img = container.querySelector('img');
      const tl = gsap.timeline({
      scrollTrigger: { trigger: container, scrub: true, pin: false,}
      });
      tl.fromTo(img, { yPercent: -5, ease: 'none'  }, { yPercent: 5, ease: 'none'});
      });

      // home
          ScrollTrigger.create({
            trigger: '#Home',
            animation: gsap.from('.nav-bar, #progress-bar', {duration: 0, opacity: 0, y:-200}),
          })
      const tlhomeafter = gsap.timeline({
        scrollTrigger: {
            trigger: '#About',
        }
        })
        tlhomeafter.to('.hero-1-container, .caption', {y:5, duration: 0.5, ease: "power4.out"}, "-=0.3");

      // about
        const tlabout = gsap.timeline({
          scrollTrigger: {
              trigger: '#Home',
          }
        })
        tlabout.from('#about-text', {opacity:0, duration: 1, ease: "power4.out"})
        .from('.leaves-container, .clean-up-container', {opacity: 0, duration: 2, ease: "power4.out"});

      // what
        const tlwhat = gsap.timeline({
          scrollTrigger: {
              trigger: '#blue-background',
          }
        })
        tlwhat.from('#what-text', {opacity:0, y:-40, duration: 2, ease: "power4.out"}, "-=0.3")
        .from('#question-mark', {rotation: 360 * 3, duration: 1, ease: "none"}, "-=0.8");

      // why
        const tlwhy = gsap.timeline({
          scrollTrigger: {
              trigger: '#why-heading',
          }
        })
        tlwhy.from('#why-heading', {opacity:0, y:-100, duration: 1, ease: "power4.out"}, "-=0.3")
        .from('.statistics-info', {opacity:0, y:-50, duration: 1, ease: "power4.out"}, "-=0.3");

      // statistics
        const tlstats = gsap.timeline({
        scrollTrigger: {
            trigger: '.action-swiper',
        }
        });
        tlstats.from('#why-text', {opacity:0, y:-40, duration: 0.6, ease: "power4.out"}, "-=0.3");

      // act
        const tlact = gsap.timeline({
          scrollTrigger: {
              trigger: '#Act-scroll',
              start: "center bottom",
              scrub: true,
          }
        })
        tlact.from('#action-text', {opacity:1, y:-20, duration: 1, ease: "power4.out"});

      // inspire
        const tlinspire = gsap.timeline({
          scrollTrigger: {
              trigger: '.inspire-swiper',
              start: "center bottom",
              scrub: true,
          }
        })
        tlinspire.from('#inspire-text', {opacity:1, y:-20, duration: 1, ease: "power4.out"});

      // hashtag animation
        const tlhashtag = gsap.timeline({
          scrollTrigger: {
              trigger: '.inspire-swiper',
              start: "center bottom",
              scrub: true,
          }
        })
        tlhashtag.from('#hashtag', {duration: 2, x: -40, rotate: 360, ease: "power4.out"});
      
      // footer
        const tlfooter = gsap.timeline({
          scrollTrigger: {
              trigger: '#footer-wrapper',
              start: "center bottom",
              scrub: true,
          }
        })
        tlfooter.from('#footer-wrapper', {duration: 2, opacity:1, y:-200, ease: "power4.out"}, "-=0.6")

        // carousel controllable
        var swiper = new Swiper(".action-swiper", {
          slidesPerView: 2, 
          spaceBetween: 30,
        });
        // automatic carousel
        var swiper = new Swiper(".inspire-swiper",{
          slidesPerView: 2,
          spaceBetween: 80,
        });
    },
  })