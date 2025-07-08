const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin flex items-center justify-center">
        <span className="text-yellow-600 font-bold text-lg">$</span>
      </div>
    </div>
  );
};

export default LoadingScreen;