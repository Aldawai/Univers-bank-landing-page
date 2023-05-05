const elements = document.querySelectorAll(".show"),
  transfert_pricing = document.querySelector(".transfers-pricing"),
  scroller = document.querySelector("a.scroll");

let timeout,
  isScrolling = false;

const options = {
  root: null,
  rootMargin: `0px 0px 0px 0px`,
  threshold: 0.6,
};

const observer = new IntersectionObserver(observerCallback, options);

function observerCallback(entries, observer) {
  entries.forEach((Entry) => {
    if (Entry.isIntersecting) {
      Entry.target.classList.remove("show");
    } else {
      if (!Entry.target.classList.contains("no-backwards")) {
        Entry.target.classList.add("show");
      }
    }
  });
}

elements.forEach((element) => {
  observer.observe(element);
});

transfert_pricing.addEventListener("mouseenter", (e) => {
  transfert_pricing.classList.add("apparition-box");
});

scroller.addEventListener("click", (e) => {
  let timeout = setTimeout(() => {
    isScrolling = false;
  }, 3000);
  isScrolling = true;
  if (scroller.classList.contains("scroll-down")) {
    setHrefToSection();
  } else {
    setHrefToHeader();
  }
});

function setHrefToHeader() {
  scroller.classList.add("scroll-down");
  scroller.classList.remove("back-to-top");
  scroller.setAttribute("href", "#header");
}

function setHrefToSection() {
  scroller.classList.remove("scroll-down");
  scroller.classList.add("back-to-top");
  scroller.setAttribute("href", "#section");
}

window.addEventListener("scroll", (e) => {
  const ScrollTop = document.documentElement.scrollTop;
  if (!isScrolling) {
    if (ScrollTop > 300) {
      setHrefToSection();
    } else {
      setHrefToHeader();
    }
  }
});
