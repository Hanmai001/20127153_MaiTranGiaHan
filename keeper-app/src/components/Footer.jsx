import React from "react";

function Footer() {
    const cur_year = new Date();
    const year = cur_year.getFullYear();
    return <footer><p id="copyright">Copyright &copy; {year}</p></footer>
};

export default Footer;