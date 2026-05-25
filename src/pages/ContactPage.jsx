import PageShell from '../components/PageShell.jsx';

function ContactPage() {
  return (
    <PageShell>
      <section className="static-page">
        <span className="eyebrow">Contact</span>
        <h1>Kontak StudyMate</h1>
        <p>
          Hubungi tim StudyMate untuk masukan, kerja sama, atau pertanyaan
          mengenai fitur rencana belajar frontend.
        </p>

        <div className="contact-grid">
          <article className="contact-card">
            <span>Email</span>
            <strong>hello@studymate.local</strong>
          </article>
          <article className="contact-card">
            <span>Alamat</span>
            <strong>Surabaya, Indonesia</strong>
          </article>
          <article className="contact-card">
            <span>Instagram</span>
            <strong>@studymate.app</strong>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

export default ContactPage;
