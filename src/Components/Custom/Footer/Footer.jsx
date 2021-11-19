import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-auto mb-4 font-subtitle text-pale_blue">
            <p>
                {" "}
                Copyright &copy; ~ bLu.<span className="text-blue">
                    Я
                </span> ~ {currentYear}
            </p>
        </footer>
    );
};

export default Footer;
