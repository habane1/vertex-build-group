import { COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

export function Contact() {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Contact" id="contact" />

        {/* Google Maps */}
        <div className="w-full h-80 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2!2d-75.6972!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzE3LjQiTiA3NcKwNDEnNTAuMCJX!5e0!3m2!1sen!2sca!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column — form */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
              Inquiries
            </h3>
            <p className="text-text-body mb-8">
              Have a project in mind or need a quote? Give us a call at{" "}
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-navy hover:text-yellow transition-colors duration-200"
              >
                {COMPANY.phone}
              </a>{" "}
              or send us a message below
            </p>

            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Contact Us
            </h3>
            <ContactForm />
          </div>

          {/* Right column — address */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Head Office
            </h3>
            <div className="text-text-body space-y-1 mb-8">
              <p>{COMPANY.address.street}</p>
              <p>
                {COMPANY.address.city}, {COMPANY.address.state}{" "}
                {COMPANY.address.zip}
              </p>
              <p className="mt-3">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-navy hover:text-yellow transition-colors duration-200"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p>
                Tel:{" "}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="md:text-inherit hover:text-yellow transition-colors duration-200"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p>Fax: {COMPANY.fax}</p>
            </div>

            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Employment
            </h3>
            <p className="text-text-body mb-8">
              Interested in joining the Vertex team? Send your resume and a
              brief cover letter to:{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-navy hover:text-yellow transition-colors duration-200"
              >
                {COMPANY.email}
              </a>
            </p>

            {/* Get a quote CTA */}
            <div className="mt-8">
              <div className="w-16 h-1 bg-yellow mb-4" />
              <h3 className="font-heading text-2xl font-bold text-gray-900">
                Get a quote:{" "}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-yellow transition-colors duration-200"
                >
                  {COMPANY.phone}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
