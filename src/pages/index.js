import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Footer from "../components/Footer";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container text--center">
        <Heading as="h1" className="hero__title">
          Welcome to ZOQQ Developer Hub
        </Heading>
        <p className="hero__subtitle">
          Build your global payment platform with powerful, secure, and flexible
          APIs.
        </p>
        {/* <div className="margin-top--md">
    <Link
      className="button button--primary button--lg"
      to="/docs/guides/overview">
      📘 Read the Guides
    </Link>
  </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Modular APIs for Banking, Card Issuance, Crypto, FX, and Global Payments."
    >
      <HomepageHeader />

      <main className="container">
        {/* Reduced top margin and made top and bottom margins equal */}
        <section className="margin-top--md margin-bottom--md">
          {/* Added consistent margin around the heading */}
          <h2 className="text--center margin-top--md margin-bottom--md">
            Platform Capabilities
          </h2>
          <div className="row">
            {[
              {
                title: "Banking-as-a-Service",
                description:
                  "Issue wallets, virtual accounts, and manage multi-currency flows across 190+ countries. Seamless onboarding and compliance.",
                link: "/docs/api-reference/accounts",
                icon: "🏦",
              },
              {
                title: "Card Issuance",
                description:
                  "Issue and control virtual or physical cards. Set limits, channels, and manage spend — all via API.",
                link: "/docs/api-reference/cards",
                icon: "💳",
              },
              {
                title: "Crypto On-Ramp / Off-Ramp",
                description:
                  "Enable fiat-to-crypto and crypto-to-fiat swaps with zero fees, deep liquidity, and stable pricing.",
                link: "/docs/api-reference/foreignExchange",
                icon: "₿",
              },
              {
                title: "FX & Global Payouts",
                description:
                  "Collect and remit funds across currencies. Convert in-wallet or during payout with competitive FX rates.",
                link: "/docs/api-reference/payout",
                icon: "🌐",
              },
            ].map((item, index) => (
              <div className="col col--6 margin-bottom--lg" key={index}>
                <Link
                  to={item.link}
                  className={styles.cardLink}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="card shadow--md"
                    style={{
                      height: "100%",
                      transition: "transform 0.2s",
                      ":hover": { transform: "translateY(-4px)" },
                    }}
                  >
                    <div className="card__header">
                      <div className={styles.cardHeaderContent}>
                        <span className={styles.cardIcon}>{item.icon}</span>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                      </div>
                    </div>
                    <div className="card__body">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="margin-top--md margin-bottom--md">
          <h2 className="text--center margin-top--md margin-bottom--md">
            💼 Who Uses ZOQQ?
          </h2>
          <div className="row">
            {[
              {
                title: "E-commerce Platforms & Marketplaces",
                description:
                  "Online marketplaces and e-commerce platforms leveraging our payment solutions.",
              },
              {
                title: "Freelancer & Gig Platforms",
                description:
                  "Platforms enabling seamless payments for freelancers and gig workers globally.",
              },
              {
                title: "Crypto & Stablecoin Apps",
                description:
                  "Applications facilitating crypto transactions and stablecoin operations.",
              },
              {
                title: "OTAs & Travel Aggregators",
                description:
                  "Travel platforms managing multi-currency bookings and payments.",
              },
              {
                title: "Influencers & Creator Payout Platforms",
                description:
                  "Platforms handling creator economy payments and monetization.",
              },
              {
                title: "Global SMEs & Enterprises",
                description:
                  "Businesses managing international payments and financial operations.",
              },
            ].map((item, index) => (
              <div className="col col--4 margin-bottom--lg" key={index}>
                <div className="card shadow--md">
                  <div className="card__header">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="card__body">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="margin-top--xl text--center">
          <h2>📚 What's Next?</h2>
          <p>Choose your path and start building with ZOQQ:</p>
          <div className="row">
            <div className="col col--4 padding-horiz--md margin-bottom--sm">
              <Link
                className="button button--primary button--block"
                to="/docs/getting-started"
              >
                📘 Read the Guides
              </Link>
            </div>
            <div className="col col--4 padding-horiz--md margin-bottom--sm">
              <Link
                className="button button--primary button--block"
                to="/docs/api-reference/authentication"
              >
                🔧 Explore API Reference
              </Link>
            </div>
            <div className="col col--4 padding-horiz--md margin-bottom--sm">
              <Link
                className="button button--primary button--block"
                to="/docs/changelog"
              >
                📅 View Changelog
              </Link>
            </div>
          </div>
        </section>

        <section className="margin-top--xl text--center">
          <h2>📬 Need Help?</h2>
          <p>
            Contact us at <a href="mailto:sales@zoqq.com">sales@zoqq.com</a> or
            join our support chat.
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
