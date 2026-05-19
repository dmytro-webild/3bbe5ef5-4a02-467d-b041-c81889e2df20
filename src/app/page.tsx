"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Facebook, Instagram, Leaf, Sparkles, Twitter, Utensils, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLarge"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Milan Restaurant"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="Exquisite Dining at Milan Restaurant"
      description="Experience authentic flavors and fine service in the heart of the city. We bring culinary artistry to every dish we serve."
      kpis={[
        {
          value: "15+",
          label: "Years Served",
        },
        {
          value: "500+",
          label: "Gourmet Dishes",
        },
        {
          value: "4.8",
          label: "Avg Rating",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Book a Table",
          href: "#contact",
        },
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=j5fh6x&_wi=1"
      imageAlt="fine dining restaurant interior"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "asset://hero-avatar-1",
          alt: "Satisfied customer",
        },
        {
          src: "asset://hero-avatar-2",
          alt: "Happy guest",
        },
        {
          src: "asset://hero-avatar-3",
          alt: "Diner enjoying meal",
        },
        {
          src: "asset://hero-avatar-4",
          alt: "Smiling patron",
        },
        {
          src: "asset://hero-avatar-5",
          alt: "Gourmet enthusiast",
        },
      ]}
      avatarText="Join 10,000+ happy food lovers"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Authentic Cuisine",
          icon: Utensils,
        },
        {
          type: "text-icon",
          text: "Premium Ingredients",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Expert Chefs",
          icon: Award,
        },
        {
          type: "text-icon",
          text: "Wine Selection",
          icon: Wine,
        },
        {
          type: "text-icon",
          text: "Elegant Vibe",
          icon: Sparkles,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="A Legacy of Culinary Excellence"
      description="Milan Restaurant was born from a passion for traditional techniques and premium fresh ingredients. We aim to create memories, not just meals."
      subdescription="Every element of our menu reflects the rich heritage of authentic flavors blended with modern presentation standards."
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9axj51&_wi=1"
      mediaAnimation="blur-reveal"
      imageAlt="chef preparing gourmet meal"
    />
  </div>

  <div id="highlights" data-section="highlights">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh Ingredients",
          description: "We source only the finest local produce and authentic spices for our kitchen.",
          buttonIcon: "Leaf",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e1nrb7",
          imageAlt: "gourmet association badge",
        },
        {
          title: "Authentic Recipes",
          description: "Traditional secrets passed down through generations for an authentic taste.",
          buttonIcon: "Scroll",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=j5fh6x&_wi=2",
          imageAlt: "gourmet association badge",
        },
        {
          title: "Elegant Atmosphere",
          description: "The perfect blend of cozy ambiance and refined service for every occasion.",
          buttonIcon: "Wine",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9axj51&_wi=2",
          imageAlt: "gourmet association badge",
        },
        {
          title: "Artistic Plating",
          description: "We believe dining is an art form that starts with the very first visual impression.",
          buttonIcon: "Palette",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e49q3v&_wi=1",
          imageAlt: "gourmet association badge",
        },
      ]}
      title="What Defines Milan"
      description="Discover what makes our culinary experience truly unique and why guests return time after time."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Truffle Tagliatelle",
          price: "$28",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e49q3v&_wi=2",
        },
        {
          id: "2",
          name: "Prime Wagyu Steak",
          price: "$45",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dcr9rg",
        },
        {
          id: "3",
          name: "Neapolitan Margherita",
          price: "$22",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2d8lx3",
        },
        {
          id: "4",
          name: "Dark Forest Mousse",
          price: "$14",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hkfk41",
        },
        {
          id: "5",
          name: "Signature Negroni",
          price: "$16",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4f0z2y",
        },
        {
          id: "6",
          name: "Garden Harvest Salad",
          price: "$18",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6bunbb",
        },
      ]}
      title="Our Signature Dishes"
      description="A curated selection of our finest recipes, crafted to perfection."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alice M.",
          handle: "@alicem",
          testimonial: "The atmosphere is unmatched. Every bite was an absolute delight.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4m1jla",
        },
        {
          id: "2",
          name: "John D.",
          handle: "@johnd",
          testimonial: "Milan Restaurant never fails to impress. Truly fine dining at its best.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=q3xwkc",
        },
        {
          id: "3",
          name: "Sarah P.",
          handle: "@sarahp",
          testimonial: "The staff are professional and the food is out of this world.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4psnmv",
        },
        {
          id: "4",
          name: "David W.",
          handle: "@davidw",
          testimonial: "Best steak I have ever had. The wine pairing was spot on too.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=f3lczb",
        },
        {
          id: "5",
          name: "Elena R.",
          handle: "@elenar",
          testimonial: "An exquisite experience from start to finish. Highly recommend it.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dbgl0v",
        },
      ]}
      showRating={true}
      title="Guest Experiences"
      description="Words from our valued patrons who enjoyed our dining journey."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Culinary Awards 2024",
        "Top Rated Eats",
        "City Gourmet Guild",
        "Michelin Guide Entry",
        "Hospitality Excellence",
        "Dining Weekly",
        "Luxury Taste Association",
      ]}
      title="Recognized for Quality"
      description="Proud to be associated with leading hospitality and culinary organizations."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do I need a reservation?",
          content: "Yes, we highly recommend booking in advance, especially for weekend evenings.",
        },
        {
          id: "2",
          title: "Are there vegetarian options?",
          content: "Yes, we offer a dedicated selection of seasonal vegetarian and vegan dishes.",
        },
        {
          id: "3",
          title: "Is there a dress code?",
          content: "Smart casual is requested for an elegant dining atmosphere.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about planning your visit."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Reserve Your Table"
      description="Join our newsletter for exclusive updates, special menus, and invitations to our dining events."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s62jst"
      mediaAnimation="slide-up"
      buttonText="Get Notified"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Milan Restaurant"
      copyrightText="© 2025 Milan Restaurant. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
