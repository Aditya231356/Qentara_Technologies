import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Qentara Technologies",
  description:
    "Privacy Policy for Qentara Technologies - Premium Web Development Agency in India",
};

export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Document Card */}
        <div className="bg-card-bg border border-slate-800 rounded-2xl p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold gradient-text mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-sm">
              Last Updated: {currentYear}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              At Qentara Technologies ("Company", "we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage our services.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              1. Information We Collect
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We collect information to provide better services to all our users. The types of information we collect include:
            </p>
            
            <h3 className="text-lg font-semibold text-slate-50 mb-3 mt-5">
              Personal Information
            </h3>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details (company name, address, business type)</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-50 mb-3 mt-5">
              Technical Information
            </h3>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information (device type, operating system)</li>
              <li>Access dates and times</li>
              <li>Pages viewed and interaction data</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          {/* Section 2: How We Use Information */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              2. How We Use Information
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li>Deliver and maintain our services</li>
              <li>Communicate with you about projects, inquiries, and updates</li>
              <li>Improve and optimize our website functionality</li>
              <li>Understand how users interact with our website</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
            <div className="text-slate-300 leading-relaxed bg-emerald-500/10 border-l-4 border-emerald-500 p-4 mt-4 rounded-r-lg">
              <p className="font-semibold text-emerald-400">
                We do NOT sell, trade, or otherwise transfer your personal information to outside parties. We do not share your personal information with third parties for marketing purposes.
              </p>
            </div>
          </section>

          {/* Section 3: Portfolio & Project Showcase Clause */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              3. Portfolio & Project Showcase Clause
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              By engaging Qentara Technologies for web development services, you grant us permission to display completed website projects in our portfolio, social media channels, marketing materials, and case studies.
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              <strong className="text-slate-50">What we may display:</strong>
            </p>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li>Website design and layout</li>
              <li>General project description (without sensitive details)</li>
              <li>Client name (with permission) or "Confidential Client"</li>
              <li>Project timeline and scope</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mb-3">
              <strong className="text-slate-50">What we will NEVER display:</strong>
            </p>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li>Confidential business data or strategies</li>
              <li>Passwords, login credentials, or admin access</li>
              <li>Dashboard screenshots with sensitive information</li>
              <li>Financial records or revenue data</li>
              <li>Customer databases or user information</li>
              <li>Internal business documents</li>
            </ul>
            <div className="text-slate-300 leading-relaxed bg-primary/10 border-l-4 border-primary p-4 mt-4 rounded-r-lg">
              <p className="font-semibold text-primary mb-2">NDA Option:</p>
              <p className="text-slate-300">If you require additional confidentiality, you may request a Non-Disclosure Agreement (NDA) before the project begins. Please discuss this with us in writing prior to project commencement, and we will be happy to accommodate your requirements.</p>
            </div>
          </section>

          {/* Section 4: Data Protection */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              4. Data Protection
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li>Secure socket layer (SSL) encryption for data transmission</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Secure data storage practices</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security. You provide your personal information at your own risk.
            </p>
          </section>

          {/* Section 5: Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              5. Third-Party Services
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We may engage third-party service providers to assist in operating our business and providing services to you. These third parties may have access to your personal information only to perform specific tasks on our behalf. The types of third-party services we use include:
            </p>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li><strong className="text-slate-50">Hosting Providers:</strong> For website hosting and infrastructure</li>
              <li><strong className="text-slate-50">Payment Gateways:</strong> For processing payments securely</li>
              <li><strong className="text-slate-50">Analytics Tools:</strong> To understand website traffic and user behavior</li>
              <li><strong className="text-slate-50">Email Services:</strong> For communication and newsletters</li>
              <li><strong className="text-slate-50">Customer Support Tools:</strong> For handling inquiries and support requests</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party service providers you interact with.
            </p>
          </section>

          {/* Section 6: Data Retention */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              6. Data Retention
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy:
            </p>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li>Project-related data: Retained for the duration of the project and for a reasonable period thereafter for support and reference purposes</li>
              <li>Communication data: Retained as long as necessary to respond to your inquiries</li>
              <li>Marketing data: Retained until you unsubscribe or request deletion</li>
              <li>Analytics data: Retained in aggregated, anonymized form</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              When personal information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.
            </p>
          </section>

          {/* Section 7: User Rights */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              7. User Rights
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="text-slate-300 leading-relaxed list-disc pl-6 space-y-2 mb-4">
              <li><strong className="text-slate-50">Right to Access:</strong> You may request a copy of the personal information we hold about you.</li>
              <li><strong className="text-slate-50">Right to Correction:</strong> You may request correction of inaccurate or incomplete personal information.</li>
              <li><strong className="text-slate-50">Right to Deletion:</strong> You may request deletion of your personal information, subject to certain legal obligations.</li>
              <li><strong className="text-slate-50">Right to Object:</strong> You may object to the processing of your personal information in certain circumstances.</li>
              <li><strong className="text-slate-50">Right to Data Portability:</strong> You may request a copy of your data in a structured, commonly used format.</li>
              <li><strong className="text-slate-50">Right to Withdraw Consent:</strong> You may withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>

          {/* Section 8: Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information without parental consent, please contact us immediately. If we discover that we have collected personal information from a child without parental consent, we will delete that information promptly.
            </p>
          </section>

          {/* Section 9: Governing Law */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              9. Governing Law
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              This Privacy Policy shall be governed by and construed in accordance with the laws of <strong className="text-slate-50">India</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Any disputes arising out of or relating to this Privacy Policy or our data practices shall be subject to the exclusive jurisdiction of the courts located in <strong className="text-slate-50">India</strong>.
            </p>
          </section>

          {/* Section 10: Contact Information */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-50 mb-4 pb-2 border-b border-slate-700">
              10. Contact Information
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="text-slate-300 leading-relaxed bg-background p-5 rounded-xl border border-slate-700">
              <p className="mb-2"><strong className="text-slate-50">Qentara Technologies</strong></p>
              <p className="mb-2">India</p>
              <p className="mb-2">Email: qentara.web@gmail.com</p>
              <p className="mb-2">Phone: +91 9264231356</p>
              <p>Website: https://qentara.com</p>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-slate-700 text-center">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Qentara Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

