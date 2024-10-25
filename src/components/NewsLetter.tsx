import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  email: string;
}

const NewsletterSubscription: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: ''
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Add your API call here
      console.log('Submitting email:', formData.email);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({ email: '' });
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-red-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Subscribe to my newsletter and never miss out on new content, behind-the-scenes footage, and exclusive tips.
        </p>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
          {error && (
            <p className="text-white text-sm bg-red-700 p-2 rounded-lg">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;