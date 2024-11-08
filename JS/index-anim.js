var tl = gsap.timeline();

tl.from('.nav-logo',{
    y:-100,
    delay:0.2,
    duration:0.3,
    stagger: 0.2,
    opacity:0,
})
tl.from('.nav-part2, .links, .links a',{
    y:-100,
    duration:0.3,
    stagger: 0.2,
    opacity:0,
})
tl.from('.left h1, p',{
    opacity: 0,
    x:-100,
    stagger:0.1,
})
tl.from('.btns',{
    opacity:0,
    y:20,
})
tl.from('.right',{
    opacity:0,
    scale:0,
},'-=1')