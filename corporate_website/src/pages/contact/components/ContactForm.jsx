import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedService, setSelectedService] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const services = [
    { value: 'strategic-consulting', label: 'Strategic Consulting' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
    { value: 'business-analytics', label: 'Business Analytics' },
    { value: 'operations-excellence', label: 'Operations Excellence' },
    { value: 'other', label: 'Other Services' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success response
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 4 hours.'
      });
      
      reset();
      setSelectedService('');
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Let's Start a Conversation
        </h2>
        <p className="text-text-secondary">
          Ready to transform your business? Fill out the form below and our expert team 
          will get back to you with a customized solution within 4 hours.
        </p>
      </div>

      {submitStatus && (
        <div className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
          submitStatus.type === 'success' ?'bg-emerald-50 border border-emerald-200' :'bg-red-50 border border-red-200'
        }`}>
          <Icon 
            name={submitStatus.type === 'success' ? 'CheckCircle' : 'AlertCircle'} 
            size={20} 
            className={submitStatus.type === 'success' ? 'text-emerald-600' : 'text-red-600'} 
          />
          <p className={submitStatus.type === 'success' ? 'text-emerald-800' : 'text-red-800'}>
            {submitStatus.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              First Name *
            </label>
            <Input
              {...register('firstName', { 
                required: 'First name is required',
                minLength: { value: 2, message: 'First name must be at least 2 characters' }
              })}
              className={errors.firstName ? 'border-red-500' : ''}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Last Name *
            </label>
            <Input
              {...register('lastName', { 
                required: 'Last name is required',
                minLength: { value: 2, message: 'Last name must be at least 2 characters' }
              })}
              className={errors.lastName ? 'border-red-500' : ''}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
              className={errors.email ? 'border-red-500' : ''}
              placeholder="your.email@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <Input
              type="tel"
              {...register('phone')}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Company Name *
            </label>
            <Input
              {...register('company', { required: 'Company name is required' })}
              className={errors.company ? 'border-red-500' : ''}
              placeholder="Your Company Name"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Job Title
            </label>
            <Input
              {...register('jobTitle')}
              placeholder="e.g., CEO, Director, Manager"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Service Interest *
          </label>
          <select
            {...register('service', { required: 'Please select a service' })}
            className={`w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
              errors.service ? 'border-red-500' : ''
            }`}
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Budget Range
          </label>
          <select
            {...register('budget')}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            <option value="">Select budget range...</option>
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Project Timeline
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Immediate', '1-3 months', '3-6 months', '6+ months'].map((timeline) => (
              <label key={timeline} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  {...register('timeline')}
                  value={timeline.toLowerCase().replace(/\s+/g, '-')}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm text-text-secondary">{timeline}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Project Details *
          </label>
          <textarea
            {...register('message', { 
              required: 'Please provide project details',
              minLength: { value: 10, message: 'Please provide more details (minimum 10 characters)' }
            })}
            rows={6}
            className={`w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
              errors.message ? 'border-red-500' : ''
            }`}
            placeholder="Tell us about your project, goals, challenges, and how we can help you succeed..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Privacy Consent */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            {...register('privacy', { required: 'Please accept our privacy policy' })}
            className="mt-1 text-primary focus:ring-primary"
          />
          <div className="text-sm">
            <span className="text-text-secondary">
              I agree to the{' '}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>{' '}
              and consent to being contacted regarding this inquiry. *
            </span>
            {errors.privacy && (
              <p className="mt-1 text-red-600">{errors.privacy.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 text-lg font-semibold"
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Icon name="Send" size={20} className="mr-2" />
              Send Message
            </>
          )}
        </Button>

        <div className="text-center text-sm text-text-secondary">
          <Icon name="Shield" size={16} className="inline mr-1" />
          Your information is secure and confidential
        </div>
      </form>
    </div>
  );
};

export default ContactForm;