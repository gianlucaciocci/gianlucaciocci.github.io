//const headings = Array.from(document.getElementsByClassName("entry-content").getElementsByTagName("h2"));
const headings = Array.from(document.querySelector(".entry-content").querySelectorAll("h1, h2, h3, h4, h5, h6"));
const aside = document.querySelector(".widget-toc")

//aside.innerText = "got here!"

const toc = aside.querySelector(".tagcloud")

const ul = document.createElement("ul");
toc.appendChild(ul);
headings.map((heading) => {
    const id = heading.innerText.toLowerCase().replaceAll(" ", "_");
    heading.setAttribute("id", id);
    const anchorElement = `<a href="#${id}">${heading.textContent}</a>`;
    const keyPointer = `<li>${anchorElement}</li>`;
    ul.insertAdjacentHTML("beforeend", keyPointer);
});
const tocAnchors = toc.querySelectorAll("a");
const obFunc = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = headings.indexOf(entry.target);
            tocAnchors.forEach((tab) => {
                tab.classList.remove("active");
            });
            tocAnchors[index].classList.add("active");
            //tocAnchors[index].scrollIntoView({
            //    block: "nearest",
            //    inline: "nearest"
            //});
        };
    });
};
const obOption = {
    rootMargin: "-30px 0% -77%",
    threshold: 1
};
const observer = new IntersectionObserver(obFunc, obOption);
headings.forEach((hTwo) => observer.observe(hTwo));