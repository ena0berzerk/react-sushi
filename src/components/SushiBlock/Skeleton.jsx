import React from "react";
import ContentLoaded from "react-content-loader";

export default function Skeleton(props) {
  return (
    <>
      <ContentLoaded
        speed={2}
        width={257}
        height={457}
        viewBox="0 0 257 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="pizza-block"
        {...props}
      >
        <rect x="48" y="4" rx="5" ry="5" width="180" height="180" />
        <rect x="92" y="195" rx="2" ry="2" width="97" height="19" />
        <rect x="40" y="223" rx="2" ry="2" width="200" height="28" />
        <rect x="22" y="262" rx="2" ry="2" width="232" height="95" />
        <rect x="24" y="373" rx="2" ry="2" width="100" height="25" />
        <rect x="143" y="371" rx="2" ry="2" width="110" height="30" />
      </ContentLoaded>
    </>
  );
}
