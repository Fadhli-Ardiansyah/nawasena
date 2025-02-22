import "./style/btnWhatsapp.css";

const BtnWhatsapp = () => {
    const toWa = () => {
        const wa = "https://wa.me/6282310925005";
        window.open(wa, "_blank");
        return;
    };
    return (
        <>
            <button type="button" className="btn1 btn " onClick={() => toWa()}>
                <i class="bi bi-whatsapp"></i> Hubungi Sekarang
            </button>
        </>
    );
};

export default BtnWhatsapp;
