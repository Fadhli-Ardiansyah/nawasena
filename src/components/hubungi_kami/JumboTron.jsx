import "./style/jumboTron.css";

const JumboTron = () => {
    return (
        <section className="jumbotron align-content-end">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.48866035117646!2d106.1664994817412!3d-6.171547874636331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e421ff17c400197%3A0x6e836d7bfa04e6d!2sYou%20Fotocopy!5e1!3m2!1sid!2sid!4v1740215853383!5m2!1sid!2sid"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
};

export default JumboTron;
