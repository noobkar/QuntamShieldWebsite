import React from 'react';

import styles from "./privacy-policy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <main className="main-content">
      <div className="container">
        <div className={styles["policy-container"]}>
          <div className={styles["policy-header"]}>
            <h1>Privacy Policy</h1>
            <p>At QuantumShield VPN, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
          </div>
          <div className="policy-section">
            <h2>Introduction</h2>
            <p>QuantumShield VPN (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is dedicated to protecting your privacy and handling your data with transparency. This Privacy Policy describes the information we collect, how we use it, and the choices you have regarding your data when you use our VPN services, visit our website, or interact with our applications.</p>
            <p>By using our services, you agree to the practices described in this Privacy Policy. If you do not agree with our policies and practices, you should not use our services.</p>
          </div>
          <div className="policy-section">
            <h2>Information We Collect</h2>
            <p>We are committed to the principle of minimizing data collection. We collect only what is necessary to provide our VPN service and continuously improve user experience.</p>
            <h3>Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Email address (for account management and communication)</li>
              <li>Payment information (processed securely by our payment providers)</li>
            </ul>
            <h3>VPN Usage Data</h3>
            <p>We maintain a strict no-logs policy for VPN connections. This means:</p>
            <ul>
              <li>We do NOT log your browsing history, traffic destination, data content, or DNS queries</li>
              <li>We do NOT store connection timestamps, session information, IP addresses, bandwidth usage, or traffic data</li>
              <li>We do NOT store VPN server IP addresses that you connect to</li>
            </ul>
            <h3>App Usage Data</h3>
            <p>To improve our service, we collect anonymous app diagnostics and crash reports, including:</p>
            <ul>
              <li>Successful connection attempts</li>
              <li>Connection failures</li>
              <li>App crashes</li>
            </ul>
            <p>This information is aggregated and cannot be traced back to individual users.</p>
            <h3>Website Information</h3>
            <p>When you visit our website, we may collect:</p>
            <ul>
              <li>IP address (temporarily, for security purposes)</li>
              <li>Browser type and settings</li>
              <li>Device information</li>
              <li>Pages visited and features used</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Providing, maintaining, and improving our VPN services</li>
              <li>Processing your subscription payments</li>
              <li>Communicating with you about service updates, offers, and promotions</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Detecting and preventing fraudulent activities and security breaches</li>
              <li>Complying with legal obligations</li>
              <li>Analyzing usage patterns to improve user experience</li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>Information Sharing</h2>
            <p>We do not sell, rent, or trade your personal information with third parties. We may share limited information in the following circumstances:</p>
            <h3>Service Providers</h3>
            <p>We work with third-party service providers who help us operate our business, such as payment processors, email communication services, and analytics providers. These providers have access to your information only to perform tasks on our behalf and are obligated to maintain confidentiality.</p>
            <h3>Legal Compliance</h3>
            <p>We may disclose information if required by law, regulation, legal process, or governmental request. However, given our no-logs policy, we would have minimal information to provide in response to such requests.</p>
            <h3>Business Transfers</h3>
            <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any change in ownership or uses of your personal information.</p>
            <h3>With Your Consent</h3>
            <p>We may share your information with third parties when you have given us your consent to do so.</p>
          </div>
          <div className="policy-section">
            <h2>Security Measures</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:</p>
            <ul>
              <li>256-bit AES encryption for all VPN connections</li>
              <li>Secure transmission of data using HTTPS</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Strict access controls for our staff</li>
              <li>Secure data storage with encryption</li>
            </ul>
            <p>While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security.</p>
          </div>
          <div className="policy-section">
            <h2>Your Rights and Choices</h2>
            <p>We respect your privacy rights and provide you with reasonable access and control over your data. Depending on your location, you may have the following rights:</p>
            <h3>Access and Update</h3>
            <p>You can access and update your account information through your account settings or by contacting our support team.</p>
            <h3>Data Portability</h3>
            <p>You can request a copy of your personal data in a structured, commonly used, and machine-readable format.</p>
            <h3>Deletion</h3>
            <p>You can request the deletion of your personal data. We will comply with such requests unless we have a legal obligation to retain certain information.</p>
            <h3>Marketing Communication</h3>
            <p>You can opt out of receiving promotional emails by following the unsubscribe instructions in each email or by contacting us directly.</p>
            <h3>Cookies</h3>
            <p>Most web browsers are set to accept cookies by default. You can choose to set your browser to remove or reject cookies, but this may affect the functionality of our website.</p>
          </div>
          <div className="policy-section">
            <h2>Children&apos;s Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child without verification of parental consent, we will take steps to remove that information from our servers.</p>
          </div>
          <div className="policy-section">
            <h2>International Data Transfers</h2>
            <p>We operate globally and may transfer, store, and process your information in countries other than your own. We ensure that data transfers comply with applicable laws and employ appropriate safeguards when transferring data outside of your region.</p>
          </div>
          <div className="policy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.</p>
            <p>We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after the changes have been made will constitute your acceptance of the changes.</p>
          </div>
          <div className="policy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>Email: privacy@quantumshieldvpn.com</p>
            <p>Address: 123 Privacy Street, Secure City, 10101, Encryption Country</p>
          </div>
          <div className="policy-date">
            <p>Last updated: May 10, 2025</p>
          </div>
        </div>
      </div>
    </main>
  );
}
