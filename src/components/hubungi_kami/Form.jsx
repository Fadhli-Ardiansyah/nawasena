import { Col, Row } from "react-bootstrap";
import "./style/form.css";

const Form = () => {
    return (
        <section className="form">
            <div className="container containerForm">
                <Row>
                    <Col className="col-12 col-md-6">
                        <h6 className="mt-3">Alamat Head Office</h6>
                        <p>
                            Komp. Puri Anggrek Blok F11 No.1, Kel. Teritih, Kec.
                            Walantaka, Kota Serang - Prov. Banten
                        </p>
                        <h6 className="mt-3">Alamat Workshop</h6>
                        <p>
                            Jl. Syekh Moh. Nawawi Albantani, Kel. Sukajaya, Kec.
                            Curug, Kota Serang - Prov. Banten
                        </p>
                        <h6>Jam oprasional</h6>
                        <p>
                            Senin s.d Jumat <p>08.00 - 17.00</p>
                        </p>
                        <div className="alamat mt-4 mb-2">
                            <div className="container sosialMedia">
                                <Row>
                                    <Col className="col-3">
                                        <a href="">
                                            <h5>
                                                <i class="bi bi-whatsapp"></i>
                                            </h5>
                                        </a>
                                    </Col>
                                    <Col className="col-3">
                                        <a href="">
                                            <h5>
                                                <i class="bi bi-instagram"></i>
                                            </h5>
                                        </a>
                                    </Col>
                                    <Col className="col-3">
                                        <a href="">
                                            <h5>
                                                <i class="bi bi-linkedin"></i>
                                            </h5>
                                        </a>
                                    </Col>
                                    <Col className="col-3">
                                        <a href="">
                                            <h5>
                                                <i class="bi bi-facebook"></i>
                                            </h5>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <form>
                            <div class="mb-3 mt-3">
                                <label for="namaUser" class="form-label">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="namaUser"
                                    placeholder="example123"
                                />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="noTelp" class="form-label">
                                    No Telp
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="noTelp"
                                    placeholder="+62"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">
                                    Gmail
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="pesan" class="form-label">
                                    pesan
                                </label>
                                <textarea
                                    type="text"
                                    class="form-control pesan"
                                    id="pesan"
                                />
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </form>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Form;
