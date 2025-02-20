import "./style/paralax.css";

const Paralax = () => {
    return (
        <section className="paralax">
            <div className="bgParalax">
                <div className="container text-center">
                    <div className="selogan">
                        <h1>
                            Hubungi Kami Sekarang Juga Dan Dapatkan Konsultasi
                            Gratis Dari Para Ahli SLF, PBG, Dan Arsitektur
                        </h1>
                        <button
                            type="button"
                            className="btn1 btn "
                            onClick={() => toWa()}>
                            <i class="bi bi-whatsapp"></i> Hubungi Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Paralax;
