import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralCardAds extends Struct.ComponentSchema {
  collectionName: 'components_general_card_ads';
  info: {
    displayName: 'Card - ADS';
    icon: 'pin';
  };
  attributes: {
    Background: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.String;
    Headline: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'general.link', true>;
  };
}

export interface GeneralCardBenefits extends Struct.ComponentSchema {
  collectionName: 'components_general_card_benefits';
  info: {
    displayName: 'Card - Benefits';
    icon: 'stack';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Headline: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images'>;
  };
}

export interface GeneralCardContact extends Struct.ComponentSchema {
  collectionName: 'components_general_card_contacts';
  info: {
    displayName: 'Card - Contact';
    icon: 'sun';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Link: Schema.Attribute.Component<'general.link', false>;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface GeneralCardEmployee extends Struct.ComponentSchema {
  collectionName: 'components_general_card_employees';
  info: {
    displayName: 'Card - Employee';
    icon: 'user';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Photo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Position: Schema.Attribute.String;
    Quote: Schema.Attribute.Text;
    Stretch: Schema.Attribute.Boolean;
  };
}

export interface GeneralCardFaq extends Struct.ComponentSchema {
  collectionName: 'components_general_card_faqs';
  info: {
    displayName: 'Card - FAQ';
    icon: 'question';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'general.link', true>;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface GeneralCardIntro extends Struct.ComponentSchema {
  collectionName: 'components_general_card_intros';
  info: {
    displayName: 'Card - Intro';
    icon: 'pencil';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
  };
}

export interface GeneralCardMediaAndText extends Struct.ComponentSchema {
  collectionName: 'components_general_card_media_and_texts';
  info: {
    displayName: 'Card - Media & Text';
    icon: 'picture';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'general.link', true>;
    Media: Schema.Attribute.Media<'images' | 'videos', true>;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface GeneralCardSponsor extends Struct.ComponentSchema {
  collectionName: 'components_general_card_sponsors';
  info: {
    displayName: 'Card - Sponsor';
    icon: 'bell';
  };
  attributes: {
    Alt: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Url: Schema.Attribute.String;
  };
}

export interface GeneralCardTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_general_card_testimonials';
  info: {
    displayName: 'Card - Testimonials';
    icon: 'sun';
  };
  attributes: {
    Person_Name: Schema.Attribute.String;
    Person_Photo: Schema.Attribute.Media<'images'>;
    Person_Position: Schema.Attribute.String;
    Quote: Schema.Attribute.Text;
  };
}

export interface GeneralCardTile extends Struct.ComponentSchema {
  collectionName: 'components_general_card_tiles';
  info: {
    displayName: 'Card - Tile';
    icon: 'dashboard';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images' | 'videos'>;
    Tag: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface GeneralCardTimeline extends Struct.ComponentSchema {
  collectionName: 'components_general_card_timelines';
  info: {
    displayName: 'Card - Timeline';
    icon: 'write';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images'>;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
    Year: Schema.Attribute.Integer;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
  };
  attributes: {
    AriaLabel: Schema.Attribute.String;
    External: Schema.Attribute.Boolean;
    Style: Schema.Attribute.Enumeration<['Primary', 'Secondary']>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GroupsGroupFaq extends Struct.ComponentSchema {
  collectionName: 'components_groups_group_faqs';
  info: {
    displayName: 'Group - FAQ';
    icon: 'bulletList';
  };
  attributes: {
    FAQ: Schema.Attribute.Component<'general.card-faq', true>;
    Headline: Schema.Attribute.String;
  };
}

export interface PageBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
  };
  attributes: {
    Background: Schema.Attribute.Media<'images' | 'videos'>;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'general.link', true>;
    Stretch: Schema.Attribute.Boolean;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface PageBenefits extends Struct.ComponentSchema {
  collectionName: 'components_page_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'stack';
  };
  attributes: {
    Benefits: Schema.Attribute.Component<'general.card-benefits', true>;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
  };
}

export interface PageContact extends Struct.ComponentSchema {
  collectionName: 'components_page_contacts';
  info: {
    displayName: 'Contact';
    icon: 'sun';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Items: Schema.Attribute.Component<'general.card-contact', true>;
    Label: Schema.Attribute.String;
    Style: Schema.Attribute.Enumeration<
      ['LeftBottomGreen', 'LeftBottomViolet', 'RightTopGreen', 'RightTopViolet']
    >;
  };
}

export interface PageEmployees extends Struct.ComponentSchema {
  collectionName: 'components_page_employees';
  info: {
    displayName: 'Employees';
    icon: 'star';
  };
  attributes: {
    Employees: Schema.Attribute.Component<'general.card-employee', true>;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
  };
}

export interface PageFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    FAQ: Schema.Attribute.Component<'groups.group-faq', true>;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images'>;
  };
}

export interface PageGallery extends Struct.ComponentSchema {
  collectionName: 'components_page_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    Gallery: Schema.Attribute.Media<'images', true>;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    Background: Schema.Attribute.Media<'images' | 'videos'>;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'general.link', true>;
    Style: Schema.Attribute.Enumeration<
      ['LeftBottomGreen', 'LeftBottomViolet', 'RightTopGreen', 'RightTopViolet']
    >;
    Video: Schema.Attribute.Media<'videos'>;
  };
}

export interface PageIntro extends Struct.ComponentSchema {
  collectionName: 'components_page_intros';
  info: {
    displayName: 'Intro';
    icon: 'pencil';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Intros: Schema.Attribute.Component<'general.card-intro', true>;
    Label: Schema.Attribute.String;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface PageLocation extends Struct.ComponentSchema {
  collectionName: 'components_page_locations';
  info: {
    displayName: 'Location';
    icon: 'pinMap';
  };
  attributes: {
    Address: Schema.Attribute.Text;
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images'>;
    Position: Schema.Attribute.String;
    Working_Days: Schema.Attribute.String;
  };
}

export interface PageMediaAndText extends Struct.ComponentSchema {
  collectionName: 'components_page_media_and_texts';
  info: {
    displayName: 'Media & Text';
    icon: 'brush';
  };
  attributes: {
    Background: Schema.Attribute.Enumeration<
      ['LeftBottomGreen', 'LeftBottomViolet', 'RightTopGreen', 'RightTopViolet']
    >;
    Headline: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'general.link', true>;
    Media: Schema.Attribute.Media<'images' | 'videos'>;
    Reversed: Schema.Attribute.Boolean;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface PageMediaAndTextList extends Struct.ComponentSchema {
  collectionName: 'components_page_media_and_text_lists';
  info: {
    displayName: 'Media & Text List';
    icon: 'bulletList';
  };
  attributes: {
    Items: Schema.Attribute.Component<'general.card-media-and-text', true>;
  };
}

export interface PageSponsors extends Struct.ComponentSchema {
  collectionName: 'components_page_sponsors';
  info: {
    displayName: 'Sponsors';
    icon: 'bell';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Sponsors: Schema.Attribute.Component<'general.card-sponsor', true>;
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultMarkdown';
        }
      >;
  };
}

export interface PageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_page_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'quote';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Testimonials: Schema.Attribute.Component<'general.card-testimonials', true>;
  };
}

export interface PageTiles extends Struct.ComponentSchema {
  collectionName: 'components_page_tiles';
  info: {
    displayName: 'Tiles';
    icon: 'dashboard';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Tiles: Schema.Attribute.Component<'general.card-tile', true>;
  };
}

export interface PageTimeline extends Struct.ComponentSchema {
  collectionName: 'components_page_timelines';
  info: {
    displayName: 'Timeline';
    icon: 'write';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Timeline: Schema.Attribute.Component<'general.card-timeline', true>;
  };
}

export interface ProductUsp extends Struct.ComponentSchema {
  collectionName: 'components_product_usps';
  info: {
    displayName: 'USP';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.card-ads': GeneralCardAds;
      'general.card-benefits': GeneralCardBenefits;
      'general.card-contact': GeneralCardContact;
      'general.card-employee': GeneralCardEmployee;
      'general.card-faq': GeneralCardFaq;
      'general.card-intro': GeneralCardIntro;
      'general.card-media-and-text': GeneralCardMediaAndText;
      'general.card-sponsor': GeneralCardSponsor;
      'general.card-testimonials': GeneralCardTestimonials;
      'general.card-tile': GeneralCardTile;
      'general.card-timeline': GeneralCardTimeline;
      'general.link': GeneralLink;
      'groups.group-faq': GroupsGroupFaq;
      'page.banner': PageBanner;
      'page.benefits': PageBenefits;
      'page.contact': PageContact;
      'page.employees': PageEmployees;
      'page.faq': PageFaq;
      'page.gallery': PageGallery;
      'page.hero': PageHero;
      'page.intro': PageIntro;
      'page.location': PageLocation;
      'page.media-and-text': PageMediaAndText;
      'page.media-and-text-list': PageMediaAndTextList;
      'page.sponsors': PageSponsors;
      'page.testimonials': PageTestimonials;
      'page.tiles': PageTiles;
      'page.timeline': PageTimeline;
      'product.usp': ProductUsp;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
