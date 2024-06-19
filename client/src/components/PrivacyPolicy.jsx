import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <div className={styles.privacyContainer}>
            <h1 className={styles.privacyTitle}>Privacy Policy</h1>
            <p className={styles.privacyParagraph}>Welcome to our blog. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            
            <h2 className={styles.privacySubtitle}>1. Information We Collect</h2>
            <p className={styles.privacyParagraph}>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className={styles.privacyList}>
                <li className={styles.privacyListItem}>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
                <li className={styles.privacyListItem}>Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, and operating system.</li>
            </ul>
            
            <h2 className={styles.privacySubtitle}>2. Use of Your Information</h2>
            <p className={styles.privacyParagraph}>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className={styles.privacyList}>
                <li className={styles.privacyListItem}>Create and manage your account.</li>
                <li className={styles.privacyListItem}>Email you regarding your account or order.</li>
                <li className={styles.privacyListItem}>Improve our website and services.</li>
            </ul>
            
            <h2 className={styles.privacySubtitle}>3. Disclosure of Your Information</h2>
            <p className={styles.privacyParagraph}>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className={styles.privacyList}>
                <li className={styles.privacyListItem}>By Law or to Protect Rights</li>
                <li className={styles.privacyListItem}>Business Transfers</li>
                <li className={styles.privacyListItem}>Third-Party Service Providers</li>
            </ul>
            
            <h2 className={styles.privacySubtitle}>4. Security of Your Information</h2>
            <p className={styles.privacyParagraph}>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
            
            <h2 className={styles.privacySubtitle}>5. Contact Us</h2>
            <p className={styles.privacyParagraph}>If you have questions or comments about this Privacy Policy, please contact us at [Your Contact Information].</p>
        </div>
    );
};

export default PrivacyPolicy;
