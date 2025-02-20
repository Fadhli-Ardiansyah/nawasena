import "./style/jumbotron.css";

const JumboTron = () => {
    const toWa = () => {
        const wa = "https://wa.me/6282310925005";
        window.open(wa, "_blank");
        return;
    };
    return (
        <section className="bgJumbotron ">
            <div className="jumbotron text-center">
                <div className="container">
                    <h1 className="display-3">
                        <span className="firstTeks">GRIYA NAWASENA</span>{" "}
                        KONSULTAN
                    </h1>
                    <p className="lead ">
                        PLANNING, ENGINEERING, MANAGEMENT AND LEGAL PERMITTION
                        CONSULTANT
                    </p>

                    <button
                        type="button"
                        className="btn1 btn "
                        onClick={() => toWa()}>
                        <i class="bi bi-whatsapp"></i> Hubungi Sekarang
                    </button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 1440 320">
                <path
                    fill="rgba(255, 255, 255, 0.2"
                    fill-opacity="1"
                    d="M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 1440 320">
                    <path
                        fill="#f5f5f5"
                        fill-opacity="1"
                        d="M0,224L48,208C96,192,192,160,288,176C384,192,480,256,576,272C672,288,768,256,864,229.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </svg>
        </section>
    );
};

export default JumboTron;
