const getBlogSchema = (blogData, url) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "headline": blogData?.title,
      "description": blogData?.description,
      "image": "blog image",
      "author": {
        "@type": "Organization",
        "name": "Aicvpro",
        "url": "https://www.aicvpro.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Aicvpro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aicvpro.com/assets/images/company-logo.svg"
        }
      },
      "datePublished": blogData?.publishedAt,
      "dateModified": blogData?.updatedAt
    };
  
    return schema;
  };
  
  export default getBlogSchema;