import React, { useState } from 'react';
import './index.css';

const tabs = [
  'Dashboard', 'Deposit', 'Withdraw', 'Plans', 'Testimonials', 'FAQ',
  'Transactions', 'About Us', 'My Investments', 'Referral', 'Leaderboard',
  'Notifications', 'Terms', 'Market Trends', 'Earnings Calendar',
  'Security Center', 'Settings', 'Live Chat', 'Blog', 'KYC Upload',
  'Investor Resources', 'Notification Settings'
];

function TeslaApp() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="app">
      <header>
        <img src="/tesla-logo.png" alt="Tesla Logo" className="logo" />
        <h1>TeslaUniqueFinance</h1>
      </header>
      <nav>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </nav>
      <main>
        <h2>{activeTab}</h2>
        <p>This is the {activeTab} section.</p>
      </main>
      <footer>
        <p>© 2025 TeslaUniqueFinance.co</p>
        <img src="/elon.jpg" alt="Elon Musk" className="elon" />
      </footer>
    </div>
  );
}

export default TeslaApp;
