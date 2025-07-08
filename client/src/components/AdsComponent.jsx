import { useEffect } from "react";

export const AdsComponent = ({ dataAdSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error:", err.message);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle w-full max-w-screen-lg mx-auto my-6 rounded-lg shadow-md border border-gray-200"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9347518247329906"
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};