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
                        pesan="Pemohon dapat mengisi formulir online yang telah tersedia di laman website GNK. Harap mengisi secara lengkap dan benar, termasuk juga alamat surat elektronik (email) dan nomor telepon aktif."
                    />
                    <FragmentAlurKerja
                        judul="2. Verifikasi data"
                        pesan="Tim GNK akan melakukan verifikasi data sesuai dengan formulir yang telah dikirim pemohon. Proses verifikasi akan menggunakan surat elektronik (email) dan telepon."
                    />
                    <FragmentAlurKerja
                        judul="3. Negosiasi"
                        pesan="Pemohon akan mendapatkan harga penawaran beserta Rencana Program dan jadwal pengerjaa kegiatan. Pemohon dapat melakukan proses negosiasi langsung bersama tim GNK."
                    />
                    <FragmentAlurKerja
                        judul="4. Tanda tangan kontrak"
                        pesan="Akan diterbitkan PO (Purchase Order) untuk GNK atau Penandatanganan Surat Perjanjian Kerja/ Kontrak. Pemohon dapat melakukan pembayaran termin pertama melalui rekening GNK yang terdaftar."
                    />
                    <FragmentAlurKerja
                        judul="5. Pekerjaan dimulai"
                        pesan="Pemohon dapat menyetujui Surat Permohonan Survei Lapangan yang dikirimkan GNK. Selanjutnya, tim GNK akan melakukan pekerjaan sesuai tahapan dan jadwal yang telah disepakati."
                    />
                    <FragmentAlurKerja
                        judul="6. Serah terima hasil pekerjaan"
                        pesan="Tim GNK akan menyerahkan soft file hasil pekerjaan. Jika proses pembayaran telah diselesaikan, maka akan dilakukan serah terima cetak dokumen/ hard file hasil pekerjaan."
                    />
                </Row>
            </div>
        </section>
    );
};

export default AlurKerja;
