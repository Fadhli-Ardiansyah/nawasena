import BtnWhatsapp from "../../fragments/BtnWhatsapp";
import "./style/paralax.css";

const Paralax = () => {
    return (
        <section className="paralax">
            <div className="bgParalax">
                <div className="container text-center">
                    <div className="selogan">
                        <h1>
                            Jangan Ragu Untuk Hubungi Kami Sekarang Juga Dan
                            Dapatkan Konsultasi Gratis Dari Para Ahli SLF, PBG,
                            Dan Arsitektur
                        </h1>
                        <BtnWhatsapp />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Paralax;
