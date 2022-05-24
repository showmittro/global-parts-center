import React from 'react';

const HomeBanner = () => {
  return (
    <div>
      <div class="lg:container lg:mx-auto">
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="https://www.pngfind.com/pngs/m/596-5961227_pc-laptop-computer-repairing-hd-png-download.png" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 class="text-4xl font-bold">Welcome to Our Global Parts Center!</h1>
              <p class="py-6">Welcome to Our Parts Department. The Parts Department at Global Hyundai maintains a comprehensive inventory of high quality genuine OEM parts.</p>
              <button class="btn btn-primary font-bold">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;