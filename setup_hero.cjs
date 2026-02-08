const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'hanif-fixed');

// 1. Create HeroFloatingCards component
const heroCardsContent = `"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import img1 from "@/assets/images/hero-bg.jpg";
import img2 from "@/assets/images/service-floor.jpg";
import img3 from "@/assets/images/service-wall.jpg";
import img4 from "@/assets/images/service-bathroom.jpg";
import img5 from "@/assets/images/about-story.jpg";

const images = [img1, img2, img3, img4, img5, img1, img2, img3];

export default function HeroFloatingCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {images.map((src, idx) => (
        <CardContainer key={idx} className="inter-var w-full h-full" containerClassName="py-1">
          <CardBody className="bg-white/10 backdrop-blur-sm relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/20 w-auto h-auto rounded-xl p-2 border">
            <CardItem translateZ="50" className="w-full">
              <img
                src={src}
                className="h-24 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt={'gallery-' + idx}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}`;

fs.writeFileSync(path.join(baseDir, 'components/HeroFloatingCards.tsx'), heroCardsContent);
console.log('Created components/HeroFloatingCards.tsx');

// 2. Modify index.tsx to import CSS
const indexTsxPath = path.join(baseDir, 'index.tsx');
let indexTsx = fs.readFileSync(indexTsxPath, 'utf8');
if (!indexTsx.includes("import './index.css';")) {
    indexTsx = indexTsx.replace("import App from './App';", "import './index.css';\nimport App from './App';");
    fs.writeFileSync(indexTsxPath, indexTsx);
    console.log('Updated index.tsx');
}

// 3. Overwrite Home.tsx
const homePath = path.join(baseDir, 'pages/Home.tsx');
const homeContent = `
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  ImageIcon,
  Loader2
} from 'lucide-react';
import { SERVICES, REVIEWS, PHONE_NUMBER, WHATSAPP_LINK } from '../constants';
import { getAllGalleryProjects } from '../utils/db';
import { GalleryProject } from '../types';
import SEO from '../components/SEO';
import heroImage from '../assets/images/hero-bg.jpg';
import HeroFloatingCards from '../components/HeroFloatingCards';

const Home: React.FC = () => {
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllGalleryProjects().then(res => {
      // Show latest 2 projects on home page
      setProjects(res.sort((a, b) => b.createdAt - a.createdAt).slice(0, 2));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <SEO title="Professional Tile Installation" description="Expert floor and wall tiling for bathrooms, kitchens, and renovations in Mowe, Lagos, and Ogun State. Quality is our gold standard." />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional Tile Finishing"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-2xl lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-gold/90 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                <ShieldCheck size={16} />
                Quality Finishing Guaranteed
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Expert Tiling for <span className="gold-accent">Modern Homes</span> in Nigeria
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                We provide professional floor and wall tiling for bathrooms, kitchens, and renovations in Mowe, Lagos, and Ogun State. Durable, clean, and elegant results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="bg-gold text-white px-8 py-4 rounded-md font-bold text-center hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Book Site Inspection
                </Link>
                <div className="flex gap-4">
                  <a
                    href={\`tel:\${PHONE_NUMBER}\`}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-md font-bold text-center hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone size={20} /> Call
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-4 rounded-md font-bold text-center hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
               <HeroFloatingCards />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="gold-accent mb-2"><CheckCircle size={32} /></div>
              <span className="text-sm font-semibold">100% Satisfaction</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="gold-accent mb-2"><MapPin size={32} /></div>
              <span className="text-sm font-semibold">Lagos & Ogun Service</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="gold-accent mb-2"><Clock size={32} /></div>
              <span className="text-sm font-semibold">Timely Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="gold-accent mb-2"><ShieldCheck size={32} /></div>
              <span className="text-sm font-semibold">Premium Materials</span>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Section - Dynamic Transformations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-base text-gold font-bold tracking-wide uppercase">Transformation</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">The HanifGold Difference</p>
            </div>
            <Link to="/gallery" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-bold hover:bg-gold hover:text-white transition-all">
              View All Projects
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20"><Loader2 className="animate-spin text-gold" size={48} /></div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project) => (
                <div key={project.id} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <Link to="/gallery" className="block grid grid-cols-2 gap-2 rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all">
                    <div className="relative">
                      {project.imageBefore ? (
                        <img src={project.imageBefore} alt="Before" className="w-full h-64 object-cover" />
                      ) : (
                        <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400 font-bold italic">No Before Image</div>
                      )}
                      <span className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 text-[10px] font-bold rounded">BEFORE</span>
                    </div>
                    <div className="relative">
                      <img src={project.imageAfter} alt="After" className="w-full h-64 object-cover" />
                      <span className="absolute top-2 left-2 bg-gold text-white px-3 py-1 text-[10px] font-bold rounded">AFTER</span>
                    </div>
                  </Link>
                  <div className="flex justify-between items-center px-2">
                    <h4 className="text-xl font-bold text-gray-800">{project.title}</h4>
                    <span className="text-xs font-bold text-gold uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <ImageIcon className="mx-auto text-gray-200 mb-4" size={48} />
              <p className="text-gray-500 font-medium max-w-sm mx-auto">No gallery transformations uploaded yet. Start sharing your work in the Admin panel!</p>
              <Link to="/admin" className="text-gold font-bold text-sm mt-4 inline-block hover:underline">Go to Admin Panel</Link>
            </div>
          )}
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base text-gold font-bold tracking-wide uppercase mb-2">Our Expertise</h2>
          <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">Professional Tiling Solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                  {service.id === 'floor' && <Clock size={32} />}
                  {service.id === 'wall' && <CheckCircle size={32} />}
                  {service.id === 'bathroom' && <ShieldCheck size={32} />}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                <Link to="/services" className="text-gold font-bold text-sm hover:underline flex items-center justify-center gap-1">
                  Read Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-gold font-bold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold sm:text-4xl">What Our Clients Say</p>
            <div className="flex justify-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="#D4AF37" className="text-gold" />)}
            </div>
            <p className="mt-2 text-sm text-gray-400">5.0 Star Rating on Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-gray-800 p-8 rounded-2xl relative">
                <div className="flex gap-1 mb-4 text-gold">
                  {Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center font-bold text-gold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold">{review.name}</h5>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
             Book a site inspection today for accurate measurements and a professional quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/book" className="bg-white text-gold px-10 py-5 rounded-md font-extrabold text-lg shadow-xl hover:bg-gray-50 transition-all">
              Book Inspection Now
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-5 rounded-md font-extrabold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={24} /> Message WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
`;

fs.writeFileSync(homePath, homeContent);
console.log('Updated pages/Home.tsx');
