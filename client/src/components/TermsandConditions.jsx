import React from 'react';
import styles from './TermsandConditions.module.css';

const TermsAndConditions = () => {
    return (
        <div className={styles.termsContainer}>
            <h1 className={styles.termsTitle}>Terms and Conditions</h1>
            <p>Welcome to our blog. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions:</p>
            
            <h2 className={styles.termsSubtitle}>1. Acceptance of Terms</h2>
            <p className={styles.termsParagraph}>By accessing and using this blog, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using this blog's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            
            <h2 className={styles.termsSubtitle}>2. Responsible Use</h2>
            <ul className={styles.termsList}>
                <li className={styles.termsListItem}>Do not use offensive, abusive, or harmful language.</li>
                <li className={styles.termsListItem}>No posting of spam, advertisements, or links to other websites.</li>
                <li className={styles.termsListItem}>Respect the privacy and opinions of other users.</li>
                <li className={styles.termsListItem}>No sharing of false or misleading information.</li>
                <li className={styles.termsListItem}>Respect intellectual property rights and cite sources where necessary.</li>
            </ul>
            
            <h2 className={styles.termsSubtitle}>3. Content Ownership</h2>
            <p className={styles.termsParagraph}>All content on this blog, including text, images, and videos, is the property of the blog owner unless otherwise stated. You may not reproduce, distribute, or use the content in any manner without explicit permission.</p>
            
            <h2 className={styles.termsSubtitle}>4. Privacy</h2>
            <p className={styles.termsParagraph}>We respect your privacy. Any personal information you provide to us will be handled in accordance with our Privacy Policy.</p>
            
            <h2 className={styles.termsSubtitle}>5. Modifications to Terms</h2>
            <p className={styles.termsParagraph}>We reserve the right to modify these terms and conditions at any time. Your continued use of the site following any changes signifies your acceptance of the new terms.</p>
            
            <h2 className={styles.termsSubtitle}>6. Governing Law</h2>
            <p className={styles.termsParagraph}>These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State]. You agree to submit to the exclusive jurisdiction of the courts of [Your Country/State].</p>
            
            <p className={styles.termsParagraph}>If you have any questions or concerns about these terms, please contact us at [Your Contact Information].</p>
        </div>
    );
};

export default TermsAndConditions;
