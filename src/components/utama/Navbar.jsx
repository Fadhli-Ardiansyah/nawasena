import "./style/navbar.css";
import logo from "../../assets/img/logoTerbaru.jpg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed-top shadow-sm">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a href="/">
                        <img
                            src={logo}
                            alt="logoPerusahaan"
                            className=" navbar-brand"
                        />
                    </a>
                    <div
                        className="offcanvas offcanvas-start"
                        data-bs-scroll="true"
                        id="offcanvasWithBothOptions"
                        aria-labelledby="offcanvasWithBothOptionsLabel navbar-collapse ">
                        <div className="navbar-nav justify-content-end">
                            <div className=" offcanvas-header">
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasWithBothOptionsLabel">
                                    GRIYA NAWASENA KONSULTAN
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close  navbar-toggler"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        onClick={() => navigate("")}
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Tentang Kami
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Profil Perusahaan
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Portofolio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                karir
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        onClick={() => navigate("")}
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Layanan
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa pengurusan PBG
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa Pengurusan SLF
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa perencanaan Arsitektur,
                                                Struktur, Dan MEP
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa Pengurusan Soil Test
                                                Investigation
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa Pengurusan Izin Lingkungan
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa Pengurusan SIPA
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa Pengurusan Peil Banjir
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() => navigate("")}>
                                                Jasa Pembuatan Master Plan
                                                Kawasan Pabrik
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <a
                                className="nav-link"
                                href="#"
                                onClick={() => navigate("")}>
                                Galeri
                            </a>
                            <a
                                className="nav-link"
                                href="#"
                                onClick={() => navigate("")}>
                                Artikel
                            </a>
                            <a className="nav-link" href="/hubungikami">
                                Hubungi kami
                            </a>
                        </div>
                    </div>
                    <span
                        className="navbar-toggler-icon navbar-toggler p-3"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
