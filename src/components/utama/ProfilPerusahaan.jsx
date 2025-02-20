import { Row, Col } from "react-bootstrap";
import "./style/profilPerushaan.css";
import img1 from "../../assets/img/workhouse.png";

const ProfilPerusahaan = () => {
    return (
        <section className="profilPerusahaan">
            <div className="container">
                <h1 className=" text-center">Profil Perusahaan</h1>
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className=" col-lg-4 col-md-12 col-12 mt-2 ">
                            <img src={img1} className=" img-fluid" />
                        </Col>
                        <Col className=" col-lg-8 col-md-12 col-12 ps-lg-5 mt-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti quam similique ipsum
                                saepe, vitae omnis. Pariatur nemo ut asperiores
                                sit rerum quibusdam suscipit labore et ipsa
                                quaerat eaque, ex unde architecto dolorum
                                perspiciatis sunt similique quis illo facilis
                                velit nulla autem. Ducimus velit vero ab
                                tempora, harum doloribus similique deleniti.
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Id voluptatibus quam odio
                                suscipit recusandae, fugiat ratione libero culpa
                                nulla, consectetur saepe maiores nihil
                                reprehenderit! Distinctio necessitatibus veniam
                                optio facere repudiandae.
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ad nemo perferendis cum
                                dolorum similique! Eos iusto illum perspiciatis
                                molestias cum.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default ProfilPerusahaan;
