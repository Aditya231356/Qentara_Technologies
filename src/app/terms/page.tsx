import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Qentara Technologies",
  description:
    "Terms and Conditions for Qentara Technologies - Premium Web Development Agency in India",
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Document Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600 font-serif">
              Last Updated: {currentYear}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <p className="font-serif text-gray-700 leading-relaxed text-lg">
              Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the services provided by Qentara Technologies ("Company", "we", "our", or "us"). Your access to and use of our services is conditioned on your acceptance of and compliance with these Terms.
            </p>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              1. Acceptance of Terms
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed">
              By accessing and using the services of Qentara Technologies, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using Qentara Technologies&apos; services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
            </p>
          </section>

          {/* Section 2: Services Offered */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              2. Services Offered
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              Qentara Technologies provides the following professional services:
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Website Development</li>
              <li>E-commerce Solutions</li>
              <li>UI/UX Design Services</li>
              <li>Search Engine Optimization (SEO)</li>
            </ul>
          </section>

          {/* Section 3: Payment Policy */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              3. Payment Policy – 100% Prepaid Only
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed">
              <strong>All services provided by Qentara Technologies require 100% advance payment prior to the commencement of any work.</strong> No work will commence until the full payment has been received and cleared. Payment can be made through bank transfer, credit/debit cards, or other payment methods as agreed upon between both parties.
            </p>
          </section>

          {/* Section 4: Strict No Refund Policy */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              4. Strict No Refund Policy
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed">
              <strong>NO REFUND UNDER ANY CIRCUMSTANCES.</strong> Once payment has been received, no refunds will be issued under any circumstances, including but not limited to:
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 mt-4 space-y-2">
              <li>Client dissatisfaction with the delivered work</li>
              <li>Project cancellation after work has commenced</li>
              <li>Change of business direction or priorities</li>
              <li>Failure to communicate or respond from the client&apos;s side</li>
              <li>Any other reason whatsoever</li>
            </ul>
            <p className="font-serif text-gray-700 leading-relaxed mt-4">
              We encourage all clients to thoroughly discuss their requirements before making payment. Our team is available for consultations prior to project commencement.
            </p>
          </section>

          {/* Section 5: Free Upgrade & Support Policy */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              5. Free Upgrade & Support Policy
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              Qentara Technologies provides complimentary support and upgrades following project delivery, the duration of which varies based on the selected package:
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li><strong>Basic Package:</strong> 1 month free support</li>
              <li><strong>Standard Package:</strong> 3 months free support</li>
              <li><strong>Premium Package:</strong> 6 months free support</li>
            </ul>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              <strong>What is included in free support:</strong>
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li>Minor edits and modifications</li>
              <li>Bug fixes and error corrections</li>
              <li>Technical assistance and troubleshooting</li>
            </ul>
            <p className="font-serif text-gray-700 leading-relaxed">
              <strong>What is NOT included in free support:</strong>
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 mt-4 space-y-2">
              <li>Redesign of existing pages or components</li>
              <li>Development of new features or functionalities</li>
              <li>Major structural changes to the website</li>
              <li>Content updates beyond minor adjustments</li>
            </ul>
            <p className="font-serif text-gray-700 leading-relaxed mt-4">
              Extended support beyond the free period can be availed at additional charges as mutually agreed upon.
            </p>
          </section>

          {/* Section 6: Client Responsibilities */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              6. Client Responsibilities
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              The client agrees to:
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Provide clear and complete project requirements in a timely manner</li>
              <li>Respond to communications within reasonable timeframes</li>
              <li>Provide necessary content, materials, and access credentials promptly</li>
              <li>Review and provide feedback on deliverables within agreed timelines</li>
              <li>Ensure they have the legal right to use any materials provided</li>
              <li>Make timely payments as per the agreed schedule</li>
            </ul>
          </section>

          {/* Section 7: Intellectual Property */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              7. Intellectual Property
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed">
              <strong>Full ownership of all intellectual property rights transfers to the client only after complete payment has been received.</strong> Until such time as full payment is made, all intellectual property rights shall remain with Qentara Technologies.
            </p>
            <p className="font-serif text-gray-700 leading-relaxed mt-4">
              Upon full payment, the client shall receive:
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 mt-4 space-y-2">
              <li>Source code and files (where applicable)</li>
              <li>Design assets and documentation</li>
              <li>Full ownership of the developed website/application</li>
              <li>Usage rights to third-party libraries and components</li>
            </ul>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              8. Limitation of Liability
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              Qentara Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="font-serif text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on the services</li>
              <li>Any content obtained from the services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="font-serif text-gray-700 leading-relaxed mt-4">
              The total liability of Qentara Technologies shall not exceed the total amount paid by the client for the specific service giving rise to the claim.
            </p>
          </section>

          {/* Section 9: Governing Law */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              9. Governing Law
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in <strong>India</strong>.
            </p>
            <p className="font-serif text-gray-700 leading-relaxed mt-4">
              By using our services, you expressly consent to the jurisdiction of Indian courts for any legal proceedings arising from these Terms.
            </p>
          </section>

          {/* Section 10: Contact Information */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              10. Contact Information
            </h2>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="font-serif text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Qentara Technologies</strong></p>
              <p className="mb-2">India</p>
              <p className="mb-2">Email: qentara.web@gmail.com</p>
              <p>Website: https://admirable-crepe-e81e2c.netlify.app/</p>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
            <p className="font-serif text-gray-600 text-sm">
              © {currentYear} Qentara Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
