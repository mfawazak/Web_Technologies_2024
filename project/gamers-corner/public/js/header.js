const links = document.querySelectorAll(".links");

links.forEach(link => {
    const currentLink = window.location.pathname.substring(1)

    if(currentLink == "" && link.innerHTML.toLowerCase() == "home")
        link.classList.add("active")

    else if(currentLink != "" && link.innerHTML.toLowerCase().includes(currentLink))
        link.classList.add("active")

    else
        link.classList.remove("active")
});