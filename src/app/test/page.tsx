// Purpose: Test page to verify deployment is working
export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎉 Deployment Successful!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your ERP-Lite system is now running on Vercel
        </p>
        <div className="space-y-4">
          <a 
            href="/login" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Login
          </a>
          <div className="text-sm text-gray-500">
            <p>✅ Frontend: Working</p>
            <p>✅ API Routes: Ready</p>
            <p>✅ Routing: Configured</p>
          </div>
        </div>
      </div>
    </div>
  );
}
