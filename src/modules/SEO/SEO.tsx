import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const SEO = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isRussian = location.pathname.startsWith("/ru");
  const lang = isRussian ? "ru" : "en";
  const locale = isRussian ? "ru_RU" : "en_US";

  const baseUrl = "https://www.lukovskii.com";
  const canonicalUrl = isRussian ? `${baseUrl}/ru` : baseUrl;
  const ogImageUrl = `${baseUrl}/og-image.jpg`;

  const title = t("meta.title");
  const description = t("meta.description");

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang alternate links */}
      <link rel="alternate" hrefLang="en" href={baseUrl + "/"} />
      <link rel="alternate" hrefLang="ru" href={baseUrl + "/ru"} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl + "/"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="LUKOVSKii" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={isRussian ? "en_US" : "ru_RU"} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEO;
