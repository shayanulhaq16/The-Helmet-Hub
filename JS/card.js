
const headerContainer = document.querySelector(".display-header")

const displayHeader = async () => {

    const fetchHeader = await fetch("../Header and Footer/header.html");
    const header = await fetchHeader.text();
    
    headerContainer.innerHTML = header;
    
};

displayHeader();


const footerContainer = document.querySelector(".display-footer");

const displayFooter = async () => {

    const fetchFooter = await fetch("../Header and Footer/footer.html");
    const footer = await fetchFooter.text();

    footerContainer.innerHTML = footer;
    
};

displayFooter();







