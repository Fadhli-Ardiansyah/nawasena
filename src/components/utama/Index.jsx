import Navbar from "./Navbar";
import JumboTron from "./JumboTron";
import ProfilPerusahaan from "./ProfilPerusahaan";
import VisiMisi from "./VisiMisi";
import Layanan from "./Layanan";
import AlurKerja from "./AlurKerja";
import Paralax from "./Paralax";
import Footer from "./Bawah";

const Utama = () => {
    return (
        <>
            <Navbar />
            <JumboTron />
            <ProfilPerusahaan />
            {/* <VisiMisi /> */}
            <Layanan />
            <AlurKerja />
            <Paralax />
            <Footer />
        </>
    );
};

export default Utama;
