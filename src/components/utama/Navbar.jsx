import "./style/navbar.css";
// import logo from "../../assets/img/logo.png";
import logo from "../../assets/img/logoTerbaru.jpg";

const Navbar = () => {
    return (
        <div className="fixed-top shadow-sm">
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <img
                        src={logo}
                        alt="logoPerusahaan"
                        className=" navbar-brand"
                    />
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
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Tentang Kami
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Profil Perusahaan
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Portofolio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
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
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Layanan
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa pengurusan PBG
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa Pengurusan SLF
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa perencanaan Arsitektur,
                                                Struktur, Dan MEP
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa Pengurusan Soil Test
                                                Investigation
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa Pengurusan Izin Lingkungan
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa Pengurusan SIPA
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa Pengurusan Peil Banjir
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                Jasa Pembuatan Master Plan
                                                Kawasan Pabrik
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <a className="nav-link" href="#">
                                Galeri
                            </a>
                            <a className="nav-link" href="#">
                                Artikel
                            </a>
                            <a className="nav-link" href="#">
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
