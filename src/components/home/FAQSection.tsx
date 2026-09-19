import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is the fabric quality and GSM of your apparel?',
    answer: 'Our Oversized T-shirts are crafted from 240 GSM fine loopknit 100% pure combed cotton with a bio-washed, pre-shrunk finish. Our Hoodies and Sweatshirts are built from heavyweight 320 GSM cotton fleece with brushed interior loops, and our Polos feature breathable 220 GSM honeycomb pique cotton.'
  },
  {
    question: 'How does high-density embroidery compare to standard DTF or screen prints?',
    answer: 'Unlike printed tees that crack, peel, or fade over time, our high-density embroidery uses Madeira polyneon and silk-finish threads stitched directly into the fibers with up to 50,000+ stitches. It never peels, is machine washable, and develops an authentic premium textured feel.'
  },
  {
    question: 'How does the custom photo or logo embroidery process work?',
    answer: 'Simply select your garment and upload your image (photo, logo, or vector artwork) in our Custom Studio. Our in-house digitizers craft a contour stitch proof. We share a high-res digital preview via WhatsApp before needle production begins.'
  },
  {
    question: 'What are the delivery timelines and shipping charges across India?',
    answer: 'We provide ALL INDIA FREE DELIVERY on all orders! Custom and curated drops are dispatched within 24 to 48 hours from our Himachal studio and reach most major metros within 3 to 5 business days with live SMS and WhatsApp tracking.'
  },
  {
    question: 'What if the size does not fit me? What is your exchange policy?',
    answer: 'We offer a 100% hassle-free 7-Day Size Exchange! If the garment does not fit the way you desire, message us on WhatsApp with your Order ID, and our courier partner will arrange a doorstep replacement pickup.'
  },
  {
    question: 'Do you offer bulk corporate or college event discounts?',
    answer: 'Yes! We offer automatic tiered discounts: Buy 2 pieces save 10%, Buy 3+ pieces save 20%. For bulk orders above 25 units for corporate merchandise or college fests, reach out directly on WhatsApp (+91 70506 99367) or email tailorvisit.kt@gmail.com for custom GST invoices and wholesale tier pricing.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" style={{
      padding: '5rem 0',
      background: 'var(--bg-surface-elevated)',
      borderTop: '1px solid var(--border-subtle)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">
            <HelpCircle size={14} />
            Got Questions?
          </span>
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-desc">
            Everything you need to know about our heavyweight fabric, custom Tajima embroidery, delivery, and guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: isOpen ? '1px solid rgba(230, 57, 70, 0.5)' : '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: isOpen ? '#e63946' : 'var(--text-primary)',
                    background: isOpen ? 'rgba(230, 57, 70, 0.05)' : 'transparent'
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    color={isOpen ? '#e63946' : 'var(--text-secondary)'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '1rem'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '0.85rem',
                    animation: 'fadeIn 0.2s ease'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
