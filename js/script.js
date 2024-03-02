/*===============typing animation=============*/
var typed = new Typed(".typing", {
    strings: [" ", "Web Developer", "Coder", ""],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true
})

/* ================ Aside =============*/
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i= 0; i<totalNavList; i++)
{
    const a= navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        for(let i = 0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }

        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTooglerBtn();
        }
    })
    
}
function showSection(element)
{
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split('#')[1];
    document.querySelector("#" + target).classList.add("active")
}
const navTooglerBtn = document.querySelector(".nav-toogler"),
    aside  = document.querySelector(".aside");
    navTooglerBtn.addEventListener("click", () =>
    {
        asideSectionTooglerBtn();
    })
    function asideSectionTooglerBtn()
    {
        aside.classList.toggle("open");
        navTooglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toogle("open");
        }
    }
