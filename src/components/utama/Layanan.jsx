import { Col, Row } from "react-bootstrap";
import "./style/layanan.css";
import peilBanjir from "../../assets/logo/layanan/JasaPengurusanPeilBanjir.png";
import pbg from "../../assets/logo/layanan/JasaPengurusanPersetujuanBagunananGedung.png";
import slf from "../../assets/logo/layanan/JasaPengurusanLaikFungsi.png";
import soilInsvest from "../../assets/logo/layanan/JasaPengurusanSoilInvestigation.png";
import sipa from "../../assets/logo/layanan/JasaPengurusanSIPA.png";
import masterPlan from "../../assets/logo/layanan/JasaPembuatanMasterPlanKawasanPabrik.png";
import izinLingkungan from "../../assets/logo/layanan/JasaPengurusanIzinLingkungan.png";
import arsitektur from "../../assets/logo/layanan/JasaPengurusanAsitektur,Struktur,danMEP.png";

const FragmentLayanan = (props) => {
    return (
        <>
            <Col className="card-layanan col-lg-5 col-md-12 col-sm-12 col-10 mb-3">
                <a className=" text-decoration-none" href={props.link}>
                    <Row className=" justify-content-between ">
                        <Col className=" col-lg-4 col-xl-3 col-sm-3  col-md-2 col-5 align-content-sm-center">
                            <div className="logo ">
                                <img src={props.img} alt="" />
                            </div>
                        </Col>
                        <Col className=" col-lg-8 col-xl-9 col-sm-9  col-md-10 col-7 align-content-center">
                            <h5 className="judulLayanan">{props.judul}</h5>
                            <p className="mt-1">{props.pesan}</p>
                        </Col>
                    </Row>
                </a>
            </Col>
        </>
    );
};

const Layanan = () => {
    return (
        <section className="layanan">
            <div className="container mt-5">
                <h1 className=" text-center ">Layanan</h1>
                <Row className=" justify-content-md-between justify-content-center">
                    <FragmentLayanan
                        link=""
                        img={pbg}
                        judul="Jasa Pengurusan PBG"
                        pesan="Membantu pengurusan Persetujuan Bangunan Gedung agar sesuai dengan regulasi yang berlaku.
"
                    />
                    <FragmentLayanan
                        link=""
                        img={slf}
                        judul="Jasa Pengurusan SLF"
                        pesan="Penilaian teknis dan uji kelayakan bangunan untuk mendapatkan Sertifikat Laik Fungsi.
"
                    />
                    <FragmentLayanan
                        link=""
                        img={arsitektur}
                        judul="Jasa Perencanaan Arsitektur"
                        pesan="Konsultan desain bangunan mencakup arsitektur, struktur, dan sistem mekanikal, elektrikal, serta perpipaan.
"
                    />
                    <FragmentLayanan
                        link=""
                        img={soilInsvest}
                        judul="Jasa Pengurusan Soil Test Investigation"
                        pesan="Uji tanah untuk mengetahui daya dukung dan karakteristik tanah sebelum pembangunan.
"
                    />
                    <FragmentLayanan
                        link=""
                        img={izinLingkungan}
                        judul="Jasa Pengurusan Izin Lingkungan "
                        pesan="Pengurusan dokumen lingkungan seperti SPPL, UKL-UPL, dan AMDAL sesuai ketentuan pemerintah.
"
                    />
                    <FragmentLayanan
                        link=""
                        img={sipa}
                        judul="Jasa Pengurusan SIPA"
                        pesan="Izin pengusahaan air tanah dan permukaan untuk kebutuhan industri dan bisnis.
"
                    />
                    <FragmentLayanan
                        link=""
                        img={peilBanjir}
                        judul="Jasa Pengurusan Peil Banjir"
                        pesan="Studi dan pengukuran tinggi banjir untuk perencanaan bangunan yang aman dari risiko genangan.
"
                    />
                    <FragmentLayanan
                        link=""
                        img={masterPlan}
                        judul="Jasa Pembuatan Master Plan"
                        pesan="Perencanaan tata letak dan fasilitas kawasan industri untuk operasional yang lebih efisien."
                    />
                </Row>
            </div>
        </section>
    );
};

export default Layanan;
