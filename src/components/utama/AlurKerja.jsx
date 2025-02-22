import { Col, Row } from "react-bootstrap";
import "./style/alurKerja.css";

const FragmentAlurKerja = (props) => {
    return (
        <>
            <Col className="col-12 col-lg-4 mb-5">
                <h5 className="judul">{props.judul}</h5>
                <p className="pesan">{props.pesan}</p>
            </Col>
        </>
    );
};

const AlurKerja = () => {
    return (
        <section className="alurKerja">
            <h1 className=" text-center">Alur Kerja</h1>
            <h5
                className="text-center mb-5
            ">
                PT GRIYA NAWASENA KONSULTAN
            </h5>
            <div className="container">
                <Row>
                    <FragmentAlurKerja
                        judul="1. Isi formulir"
                        pesan="Pengisian Formulir
                        Pemohon diminta untuk mengisi formulir secara online melalui website GNK. Pastikan data yang
                        diinput lengkap dan benar, termasuk alamat email serta nomor telepon yang aktif.
"
                    />
                    <FragmentAlurKerja
                        judul="2. Verifikasi data"
                        pesan="Tim GNK akan meninjau dan memverifikasi informasi yang dikirim oleh pemohon. Verifikasi ini dilakukan melalui email dan telepon untuk memastikan keakuratan data.
"
                    />
                    <FragmentAlurKerja
                        judul="3.Diskusi & negosiasi"
                        pesan="Pemohon akan menerima rincian harga, rencana kerja, serta jadwal pelaksanaan. Jika diperlukan, pemohon dapat berdiskusi dan bernegosiasi langsung dengan tim GNK.
"
                    />
                    <FragmentAlurKerja
                        judul="4. Tanda tangan kontrak"
                        pesan="Setelah kesepakatan tercapai, GNK akan menerbitkan Purchase Order (PO) atau Surat Perjanjian Kerja. Pemohon diwajibkan melakukan pembayaran termin pertama ke rekening GNK yang terdaftar.

"
                    />
                    <FragmentAlurKerja
                        judul="5. Pekerjaan dimulai"
                        pesan="Pemohon akan menerima dan menyetujui Surat Permohonan Survei Lapangan sebelum pekerjaan dimulai. Tim GNK kemudian akan menjalankan pekerjaan sesuai dengan jadwal yang telah disepakati.
"
                    />
                    <FragmentAlurKerja
                        judul="6. Serah terima hasil pekerjaan"
                        pesan="GNK akan menyerahkan file hasil pekerjaan dalam bentuk soft copy. Jika pembayaran telah selesai, pemohon juga dapat menerima cetak dokumen atau hard copy hasil pekerjaan"
                    />
                </Row>
            </div>
        </section>
    );
};

export default AlurKerja;
