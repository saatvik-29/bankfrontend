export const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              The information provided on BankersDen is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6">No Financial Advice</h2>
            <p>
              The content on this website should not be construed as financial, legal, or professional advice. Always consult with qualified professionals before making financial decisions.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content or practices of these sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
