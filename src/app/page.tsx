"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLarge"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Menu", id: "menu" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Milan Restaurant"
            button={{ text: "Reservations", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            title="Authentic Italian Flavors in the Heart of the City"
            description="Milan Restaurant offers a curated culinary journey through Italy, combining traditional techniques with contemporary elegance."
            testimonials={[
              { name: "Elena V.", handle: "@elena_v", testimonial: "The truffle tagliatelle is a life-changing experience. Simply incredible!", rating: 5 }
            ]}
            buttons={[{ text: "View Menu", href: "#menu" }, { text: "Reserve a Table", href: "#contact" }]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=j5fh6x"
            imageAlt="Fine dining restaurant dining room"
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            title="Where Tradition Meets Artistry"
            description="Founded with a passion for authentic Italian cuisine, Milan Restaurant brings fresh ingredients and ancestral recipes to your plate."
            metrics={[
              { value: "15+", title: "Years of Culinary Excellence" },
              { value: "50+", title: "Handcrafted Recipes" },
              { value: "4.9", title: "Average Patron Rating" }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9axj51"
            useInvertedBackground={true}
          />
        </div>

        <div id="highlights" data-section="highlights">
          <FeatureCardSeven
            animationType="slide-up"
            textboxLayout="split"
            title="Our Core Philosophy"
            description="We believe in simplicity, freshness, and the power of shared dining moments."
            useInvertedBackground={false}
            features={[
              { title: "Farm-to-Table Produce", description: "Sourced from local farms daily.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=leaf" },
              { title: "Artisan Craftsmanship", description: "Every dish is meticulously plated.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=chef" },
              { title: "Premium Selection", description: "Exclusive wines and imported cheeses.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wine" },
              { title: "Cozy Ambiance", description: "The perfect setting for celebration.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=table" }
            ]}
          />
        </div>

        <div id="menu" data-section="menu">
          <ProductCardTwo
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            textboxLayout="split"
            title="Signature Menu"
            description="Discover our carefully selected main courses, appetizers, and signature desserts."
            useInvertedBackground={false}
            products={[
              { id: "1", brand: "Pasta", name: "Truffle Tagliatelle", price: "$28", rating: 5, reviewCount: "128", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1" },
              { id: "2", brand: "Meat", name: "Prime Wagyu Steak", price: "$45", rating: 5, reviewCount: "95", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2" },
              { id: "3", brand: "Pizza", name: "Neapolitan Margherita", price: "$22", rating: 4, reviewCount: "82", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3" }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            title="What Our Guests Say"
            description="Honest feedback from food enthusiasts who visit us regularly."
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Marco Rossi", date: "Oct 2024", title: "Exceptional!", quote: "The most authentic Italian meal I've had in years. The service is top-notch.", avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=p1", tag: "Foodie" }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Frequently Asked Questions"
            description="Get answers to common queries about dining with us."
            faqs={[
              { id: "1", title: "Is a reservation required?", content: "For groups larger than 4, we recommend booking 24 hours in advance." },
              { id: "2", title: "Do you accommodate allergies?", content: "Yes, please inform your server about any dietary restrictions upon arrival." },
              { id: "3", title: "Are there parking facilities?", content: "Valet parking is available at the entrance after 6 PM." }
            ]}
            faqsAnimation="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Contact Us"
            description="Have a special request or event inquiry? Drop us a message."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true }
            ]}
            textarea={{ name: "message", placeholder: "How can we assist you?", rows: 4, required: true }}
            buttonText="Send Request"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            logoText="Milan Restaurant"
            columns={[
              { title: "Quick Links", items: [{ label: "Home", href: "#" }, { label: "Menu", href: "#menu" }] },
              { title: "Find Us", items: [{ label: "123 Gourmet St, City Center", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}