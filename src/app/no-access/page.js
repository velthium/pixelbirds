"use client";

import Title from "@/components/Title";

const NoAccessPage = () => {
  return (
    <div className="container text-center py-5">
      <Title title="Access Denied" />
      <p>You do not own the required NFT to access this page.</p>
    </div>
  );
};

export default NoAccessPage;
