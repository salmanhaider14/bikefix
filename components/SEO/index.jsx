import { NextSeo } from "next-seo";

export default ({ title, description, canonical, ...props }) => {
  return (
    <NextSeo
      title={
        title ||
        "Bike-Fixup - Affordable and Professional Bike Services in India"
      }
      description={
        description ||
        "Get professional periodic two-wheeler service, doorstep bike repair, engine care, engine repair, genuine spare parts, and much more done at affordable prices in India."
      }
      canonical={canonical}
      {...props}
    />
  );
};
