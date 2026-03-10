import { useMemo, useState } from 'react'

const tabs = [
  {
    id: 'buying',
    label: 'Buying',
    faqs: [
      {
        q: 'How do I get pre-approved for a mortgage?',
        a: 'Start with a lender to review income, credit, and down payment. A strong pre-approval strengthens offers and sets a clear price range.'
      },
      {
        q: 'How long does a home purchase usually take?',
        a: 'With a signed contract and lending lined up, most closings take 30–45 days. Cash deals can close faster.'
      },
      {
        q: 'Do I need a buyer’s agent?',
        a: 'Yes. Your agent protects your interests, negotiates terms, schedules inspections, and coordinates with lenders and escrow—typically at no cost to you as the buyer.'
      }
    ]
  },
  {
    id: 'selling',
    label: 'Selling',
    faqs: [
      {
        q: 'What should I do before listing?',
        a: 'Declutter, deep clean, handle obvious repairs, and stage key rooms. Great photos and pricing strategy drive attention in the first 72 hours.'
      },
      {
        q: 'How is my home price determined?',
        a: 'We run a comparative market analysis, assess condition and upgrades, and factor current demand to set a price that attracts buyers without leaving money on the table.'
      },
      {
        q: 'Do open houses still matter?',
        a: 'They create momentum the first weekend. Combined with high-quality digital marketing, they help surface serious buyers quickly.'
      }
    ]
  },
  {
    id: 'financing',
    label: 'Financing',
    faqs: [
      {
        q: 'How much should I put down?',
        a: 'Down payments range from 3% to 20%+. The right number balances monthly payment comfort, PMI costs, and keeping cash for reserves or improvements.'
      },
      {
        q: 'Fixed vs. adjustable rate?',
        a: 'Fixed rates give payment stability for the long term. ARMs can start lower if you plan to sell or refinance within the initial fixed period.'
      },
      {
        q: 'Can I buy if I’m self-employed?',
        a: 'Yes. Expect to provide two years of tax returns, profit-and-loss statements, and proof of ongoing business income.'
      }
    ]
  }
]

function Questions() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const currentFaqs = useMemo(() => tabs.find(t => t.id === activeTab)?.faqs || [], [activeTab])

  return (
    <section className="questions-section container" id="questions">
      <div className="questions-header">
        <p className="eyebrow">FAQs</p>
        <h2>Questions We Answer Every Week</h2>
        <p className="subhead">Pick a topic and open the dropdown to see the quick answer.</p>
      </div>

      <div className="questions-tabs" role="tablist" aria-label="Frequently asked question topics">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab-button ${activeTab === tab.id ? 'is-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="accordion-list" role="presentation">
        {currentFaqs.map((item, idx) => (
          <details className="accordion-item" key={item.q + idx}>
            <summary>
              <span>{item.q}</span>
              <span className="accordion-caret" aria-hidden="true">⌄</span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default Questions
