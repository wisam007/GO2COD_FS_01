import React from "react";

const HomePage = () => {
  return (
    <div className="p-3 flex-col space-y-2 items-center justify-center">
      <div className="mockup-window bg-base-300 border flex">
        <div>
          {/* User info div */}
          <div className="flex space-x-2 bg-white h-36 w-1/4">
            <div className="avatar placeholder p-2 h-20">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <span className="text-xl">AB</span>
              </div>
            </div>
          </div>

          {/* blog Header and body div */}
          <div></div>
        </div>
      </div>

      <div className="mockup-window bg-base-300 border"></div>
    </div>
  );
};

export default HomePage;
