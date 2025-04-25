import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={clsx("footer", styles.footer)}>
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div className={styles.footerLogo}>
              <img src="https://stylopay-sandbox-ohio-dev-dump-public.s3.amazonaws.com/zoqq.jpg" alt="ZOQQ Logo" />
            </div>
            <div className={styles.footerText}>
              <p>© ZOQQ. All rights reserved. 2024.</p>
            </div>
          </div>
          <div className="col col--3">
            <h4 className={styles.footerTitle}>Product</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/docs/getting-started">Overview</Link>
              </li>
              <li>
                <Link to="/docs/getting-started">Features</Link>
              </li>
              <li>
                <Link to="https://www.zoqq.com/#pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/docs/getting-started">Security</Link>
              </li>
            </ul>
          </div>
          <div className="col col--3">
            <h4 className={styles.footerTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/docs/api-reference/authentication">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/docs/getting-started">Getting Started</Link>
              </li>
              <li>
                <Link to="/docs/getting-started">Tutorials</Link>
              </li>
              <li>
                <Link to="/docs/changelog">Changelog</Link>
              </li>
            </ul>
          </div>
          <div className="col col--3">
            <h4 className={styles.footerTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Careers</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.socialLinks}>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2FZOQQ_Global"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/large-x-logo.png.twimg.2560.png" alt="Twitter" />
            </a>
            <a
              href="https://linkedin.com/company/zoqq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="https://businessyield.com/wp-content/uploads/2022/10/LinkedIn-Logo.png" alt="LinkedIn" />
            </a>
            <a
              href="https://www.youtube.com/@ZOQQ_Global"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt="GitHub" />
            </a>
          </div>
          <div className={styles.legalLinks}>
            <Link to="https://www.zoqq.com/privacy-policy">Privacy Policy</Link>
            <Link to="https://www.zoqq.com/terms-of-use">Terms of Service</Link>
            <Link to="https://www.zoqq.com/privacy-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
