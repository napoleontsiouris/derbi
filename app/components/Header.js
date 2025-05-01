"use client";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-area ">
                <div className="header-top_area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-md-12 col-lg-8">
                                <div className="short_contact_list">
                                    <ul>
                                        <li><a href="#"> <i className="fa fa-phone"></i> +1 (454) 556-5656</a></li>
                                        <li><a href="#"> <i className="fa fa-envelope"></i>Yourmail@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-lg-4">
                                <div className="social_media_links d-none d-lg-block">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-xs-3 col-3">
                                <div className="logo">
                                    <a href="index.html">
                                        <img className="logo" src="img/logo.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 d-none d-lg-block">
                                {/* Desktop Menu - Unchanged */}
                                <div className="main-menu">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="index.html">Αρχική</a></li>
                                            <li><a href="About.html">Η Δερβιτσάνη</a></li>
                                            <li><a href="#">Ο Σύλλογος <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="single-blog.html">Ιστορία</a></li>
                                                    <li><a href="blog.html">Τμήματα</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Συμμετοχές</a></li>
                                            <li><a href="contact.html">Εκδηλώσεις</a></li>
                                        </ul>
                                    </nav>
                                    <div className="Appointment">
                                        <div className="book_btn d-none d-lg-block">
                                            <a data-scroll-nav='1' href="#">Κάντε μία δωρεά</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Menu Toggle Button */}
                            <div className="col-9 d-block d-lg-none d-flex justify-content-end">
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="mobile-menu-toggle"
                                >
                                    ☰
                                </button>

                                {/* Mobile Menu Content */}
                                {/* Full-screen mobile menu overlay */}
                                {menuOpen && (
                                    <div className="mobile-menu-overlay">
                                        <button onClick={() => setMenuOpen(false)} className="close-btn">✕</button>
                                        <ul className="mobile-nav">
                                            <li><a href="index.html">Αρχική</a></li>
                                            <li><a href="About.html">Η Δερβιτσάνη</a></li>
                                            <li>
                                                <a href="#">Ο Σύλλογος</a>
                                                <ul>
                                                    <li><a href="single-blog.html">Ιστορία</a></li>
                                                    <li><a href="blog.html">Τμήματα</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Συμμετοχές</a></li>
                                            <li><a href="contact.html">Εκδηλώσεις</a></li>
                                            <li><a href="#" className="donate-link">Κάντε μία δωρεά</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Screen Mobile Menu Styles */}
            <style jsx>{`
                .mobile-menu-toggle {
                    background: none;
                    border: none;
                    font-size: 20px;
                    font-weight: bold;
                    padding: 10px 15px;
                    cursor: pointer;
                }

                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: white;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 20px;
                    overflow-y: auto;
                    animation: fadeIn 0.3s ease-in-out;
                }

                .close-btn {
                    align-self: flex-end;
                    font-size: 28px;
                    border: none;
                    background: none;
                    cursor: pointer;
                    margin-bottom: 20px;
                    color: black;
                }

                .mobile-nav {
                    list-style: none;
                    padding: 0;
                    width: 100%;
                }

                .mobile-nav li {
                    margin-bottom: 16px;
                }

                .mobile-nav li ul {
                    padding-left: 15px;
                    margin-top: 8px;
                }

                .mobile-nav a {
                    font-size: 18px;
                    color: #333;
                    text-decoration: none;
                }

                .donate-link {
                    display: inline-block;
                    margin-top: 20px;
                    background-color: #007bff;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 6px;
                    text-align: center;
                    text-decoration: none;
                }

                .donate-link:hover {
                    background-color: #0056b3;
                }

                @keyframes fadeIn {
                    from { opacity: 0 }
                    to { opacity: 1 }
                }
            `}</style>
        </header>
    );
}
