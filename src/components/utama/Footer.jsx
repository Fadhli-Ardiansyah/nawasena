import { Col, Row } from "react-bootstrap";
import "./style/footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <div className="tile">
                <div className="container">
                    <Row>
                        <h5 className="">PT GRIYA NAWASENA KONSULTAN</h5>
                        <Col className="col-12 col-md-6 mb-2 ">
                            <h6>Tergabung Dengan </h6>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                            <h6>Sertifikasi</h6>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </Col>
                        <Col className="col-12 col-md-6 mb-2 sosial">
                            <h6>Alamat Head Office</h6>
                            <p>
                                Komp. Puri Anggrek Blok F11 No.1, Kel. Teritih,
                                Kec. Walantaka, Kota Serang - Prov. Banten
                            </p>
                            <h6>Alamat Workshop</h6>
                            <p>
                                Jl. Syekh Moh. Nawawi Albantani, Kel. Sukajaya,
                                Kec. Curug, Kota Serang - Prov. Banten
                            </p>
                            <ul>
                                <li>
                                    <span className="bi bi-whatsapp"></span> +62
                                    853-1149-9323
                                </li>
                                <li>
                                    <span className="bi bi-envelope-at me-1"></span>
                                    griyanawasenakonsultan@gmail.com
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="copyRight text-center shadow-lg">
                <p>PT GRIYA NAWASENA KONSULTAN © 2025 All rights reserved</p>
            </div>
        </section>
    );
};

export default Footer;
