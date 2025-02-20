import { Row, Col } from "react-bootstrap";
import "./style/visimisi.css";

const VisiMisi = () => {
    return (
        <section className="visiMisi">
            <div className="container">
                <Row className="justify-content-center ">
                    <Col className=" col-lg-6 col-md-12 col-12 mb-5">
                        <h1 className=" text-center">visi</h1>

                        <ul>
                            <li>
                                <p className=" mt-3">
                                    Menjadi perusahaan pilihan utama di bidang
                                    jasa konsultan perencana dalam perizinan
                                    konstruksi
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col className=" col-lg-6 col-md-12 col-12 mb-5">
                        <h1 className=" text-center">Misi</h1>
                        <ul>
                            <li>
                                <p className=" mt-3">
                                    Mengutamakan kreatifitas, inovatif, dan
                                    dedikatif dalam pekerjaan perencanaan
                                </p>
                            </li>
                            <li>
                                <p>
                                    Memberikan solusi terbaik dengan memegang
                                    komitmen, dalam memenuhi kebutuhan klien
                                </p>
                            </li>
                            <li>
                                <p>
                                    Memberikan layanan yang profesional &
                                    berkesinambungan, sehingga tercipta ‘special
                                    feeling’
                                </p>
                            </li>
                            <li>
                                <p>
                                    Memberdayakan pengetahuan, pengalaman, dan
                                    rasa nyaman dari anggota perusahaan bagi
                                    tujuan bisnis, pengabdian profesi & sosial
                                </p>
                            </li>
                            <li>
                                <p>
                                    Memberikan yang terbaik untuk kepentingan
                                    bersama tanpa dibatasi oleh ruang dan waktu
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default VisiMisi;
