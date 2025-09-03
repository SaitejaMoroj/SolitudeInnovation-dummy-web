import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "What services does your company offer?",
      answer: `We provide comprehensive business consulting services including strategic planning, digital transformation, financial advisory, operations management, and organizational development. Our team of experts works closely with clients to deliver customized solutions that drive growth and efficiency.`
    },
    {
      question: "How quickly can you respond to new project inquiries?",
      answer: `We typically respond to all inquiries within 4 hours during business hours. For urgent matters, we offer emergency support available 24/7. Project proposals are usually delivered within 24 hours of initial consultation.`
    },
    {
      question: "Do you work with companies of all sizes?",
      answer: `Yes, we work with organizations ranging from startups to Fortune 500 companies. Our scalable approach allows us to tailor our services to meet the specific needs and budget constraints of businesses at any stage of growth.`
    },
    {
      question: "What is your typical project timeline?",
      answer: `Project timelines vary depending on scope and complexity. Small consulting engagements may take 2-4 weeks, while comprehensive transformation projects can span 6-12 months. We provide detailed timelines during the proposal phase.`
    },
    {
      question: "Do you offer remote consulting services?",
      answer: `Absolutely! We offer both on-site and remote consulting services. Our digital collaboration tools enable us to work effectively with clients worldwide, ensuring seamless communication and project delivery regardless of location.`
    },
    {
      question: "How do you ensure project confidentiality?",
      answer: `We take confidentiality very seriously. All team members sign comprehensive non-disclosure agreements, and we implement strict data security protocols. We're also happy to sign additional confidentiality agreements as required by our clients.`
    },
    {
      question: "What are your payment terms and pricing structure?",
      answer: `We offer flexible pricing models including fixed-fee projects, hourly rates, and retainer agreements. Payment terms are typically 30 days net, with milestone-based payments for larger projects. We accept multiple currencies for international clients.`
    },
    {
      question: "Can you provide references from previous clients?",
      answer: `Yes, we can provide references and case studies from previous clients upon request. Due to confidentiality agreements, we'll need to obtain permission from clients before sharing specific details, but we're happy to facilitate reference calls.`
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-background rounded-xl p-6 card-moderate">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 flex items-center">
          <Icon name="HelpCircle" size={24} className="text-primary mr-2" />
          Frequently Asked Questions
        </h3>
        <p className="text-text-secondary text-sm">
          Find answers to common questions about our services and processes.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/20"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors duration-200"
              aria-expanded={openItems.has(index)}
            >
              <span className="font-medium text-text-primary pr-4">
                {item.question}
              </span>
              <Icon
                name={openItems.has(index) ? "ChevronUp" : "ChevronDown"}
                size={20}
                className={`text-text-secondary flex-shrink-0 transition-transform duration-200 ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(index) 
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 pt-0">
                <div className="border-t border-border pt-4">
                  <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-surface rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="MessageCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">
              Still have questions?
            </h4>
            <p className="text-text-secondary text-sm mb-3">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:info@corporate.com"
                className="inline-flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm"
              >
                <Icon name="Mail" size={16} />
                <span>Email Us</span>
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center space-x-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 text-sm"
              >
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-text-primary">Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;