export const initialSiteData = {
  en: {
    brand: "The Modern Barber",
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      subtitle: "STYLE IS A WAY TO SAY WHO YOU ARE",
      title: "Experience the Art of Premium Barbering",
      description: "Dedicated to offering the highest quality haircuts, shaves, and grooming services in a modern and relaxing atmosphere.",
      cta: "Book Appointment",
    },
    services: {
      title: "Our Services",
      items: [
        { imageUrl: 'https://images.unsplash.com/photo-1599351432095-d8a65191a613?q=80&w=1974&auto=format&fit=crop', en: { name: "Classic Haircut", description: "A timeless cut tailored to your style.", price: "3000 DZD" }, ar: { name: "قصة شعر كلاسيكية", description: "قصة خالدة مصممة خصيصًا لأسلوبك.", price: "3000 د.ج" }, fr: { name: "Coupe Classique", description: "Une coupe intemporelle adaptée à votre style.", price: "3000 DZD" } },
        { imageUrl: 'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2070&auto=format&fit=crop', en: { name: "Beard Trim & Shape", description: "Expert shaping and trimming for a sharp look.", price: "1500 DZD" }, ar: { name: "تهذيب وتحديد اللحية", description: "تحديد وتهذيب احترافي لمظهر حاد.", price: "1500 د.ج" }, fr: { name: "Taille & Forme de Barbe", description: "Mise en forme et taille expertes pour un look impeccable.", price: "1500 DZD" } },
        { imageUrl: 'https://images.unsplash.com/photo-1622288432453-24161a14a04e?q=80&w=2070&auto=format&fit=crop', en: { name: "Hot Towel Shave", description: "A traditional straight razor shave with hot towels.", price: "2000 DZD" }, ar: { name: "حلاقة بالمنشفة الساخنة", description: "حلاقة تقليدية بالموس المستقيم مع مناشف ساخنة.", price: "2000 د.ج" }, fr: { name: "Rasage à la Serviette Chaude", description: "Un rasage traditionnel au rasoir droit avec des serviettes chaudes.", price: "2000 DZD" } },
        { imageUrl: 'https://images.unsplash.com/photo-1536520002442-99b64a03e29d?q=80&w=2070&auto=format&fit=crop', en: { name: "The Full Package", description: "Classic haircut and a hot towel shave.", price: "4500 DZD" }, ar: { name: "الباقة الكاملة", description: "قصة شعر كلاسيكية مع حلاقة بالمنشفة الساخنة.", price: "4500 د.ج" }, fr: { name: "Le Forfait Complet", description: "Coupe de cheveux classique et rasage à la serviette chaude.", price: "4500 DZD" } },
      ],
    },
    gallery: {
      title: "Our Gallery",
    },
    testimonials: {
      title: "What Our Clients Say",
      items: [
        { imageUrl: "https://randomuser.me/api/portraits/men/32.jpg", en: { quote: "The best barber in town! Professional service and amazing results every time.", name: "Karim B." }, ar: { quote: "أفضل حلاق في المدينة! خدمة احترافية ونتائج مذهلة في كل مرة.", name: "كريم ب." }, fr: { quote: "Le meilleur barbier en ville ! Service professionnel et résultats incroyables à chaque fois.", name: "Karim B." } },
        { imageUrl: "https://randomuser.me/api/portraits/men/4.jpg", en: { quote: "I always leave feeling sharp and confident. The attention to detail is unmatched.", name: "Amine L." }, ar: { quote: "دائمًا أغادر وأنا أشعر بالأناقة والثقة. الاهتمام بالتفاصيل لا مثيل له.", name: "أمين ل." }, fr: { quote: "Je repars toujours en me sentant élégant et confiant. L'attention aux détails est inégalée.", name: "Amine L." } },
        { imageUrl: "https://randomuser.me/api/portraits/men/5.jpg", en: { quote: "A truly luxurious experience. The hot towel shave is a must-try. Highly recommended!", name: "Yacine M." }, ar: { quote: "تجربة فاخرة حقًا. يجب تجربة الحلاقة بالمنشفة الساخنة. موصى به بشدة!", name: "ياسين م." }, fr: { quote: "Une expérience vraiment luxueuse. Le rasage à la serviette chaude est un must. Fortement recommandé !", name: "Yacine M." } },
      ],
    },
    appointment: {
      title: "Ready for a Fresh Look?",
      description: "Book your appointment today and experience the difference. Walk-ins are welcome but appointments are recommended.",
      cta: "Book Now",
    },
    location: {
      title: "Find Us",
      addressLabel: "Address",
      address: "123 Barber Street, Algiers, Algeria",
      hours: "Opening Hours",
      schedule: "Mon - Sat: 9:00 AM - 8:00 PM",
    },
    contact: {
      title: "Get In Touch",
      form: { name: "Your Name", email: "Your Email", message: "Your Message", cta: "Send Message" },
      phoneLabel: "Phone",
      phone: "+213 123 456 789",
      emailLabel: "Email",
      email: "contact@modernbarber.dz",
    },
    footer: {
      description: "Crafting style and confidence since 2023.",
      copyright: "© 2024 The Modern Barber. All Rights Reserved.",
    },
    booking: {
        title: "Book Your Appointment",
        form: { name: "Your Name", phone: "Your Phone", service: "Select a Service", date: "Select a Date", time: "Select a Time", cta: "Confirm Booking", success: "Thank you! Your appointment has been booked." }
    }
  },
  ar: {
    brand: "الحلاق العصري",
    nav: { home: "الرئيسية", services: "خدماتنا", gallery: "المعرض", testimonials: "آراء الزبائن", contact: "اتصل بنا" },
    hero: { subtitle: "الأسلوب هو طريقتك لتعريف من أنت", title: "جرّب فن الحلاقة المتميز", description: "نلتزم بتقديم أفضل قصات الشعر، حلاقة الذقن، وخدمات العناية في جو عصري ومريح.", cta: "احجز موعدك" },
    services: { title: "خدماتنا" },
    gallery: { title: "معرضنا" },
    testimonials: { title: "ماذا يقول زبائننا" },
    appointment: { title: "هل أنت مستعد لمظهر جديد؟", description: "احجز موعدك اليوم واختبر الفرق. نرحب بالزبائن بدون موعد ولكن الحجز المسبق أفضل.", cta: "احجز الآن" },
    location: { title: "تجدنا هنا", addressLabel: "العنوان", address: "123 شارع الحلاق، الجزائر العاصمة، الجزائر", hours: "أوقات العمل", schedule: "الإثنين - السبت: 9:00 صباحًا - 8:00 مساءً" },
    contact: { title: "تواصل معنا", form: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", cta: "أرسل الرسالة" }, phoneLabel: "الهاتف", phone: "+213 123 456 789", emailLabel: "البريد الإلكتروني", email: "contact@modernbarber.dz" },
    footer: { description: "نصنع الأناقة والثقة منذ 2023.", copyright: "© 2024 الحلاق العصري. جميع الحقوق محفوظة." },
    booking: { title: "احجز موعدك", form: { name: "اسمك", phone: "رقم هاتفك", service: "اختر خدمة", date: "اختر التاريخ", time: "اختر الوقت", cta: "تأكيد الحجز", success: "شكرًا لك! تم تأكيد حجزك بنجاح." } }
  },
  fr: {
    brand: "Le Barbier Moderne",
    nav: { home: "Accueil", services: "Services", gallery: "Galerie", testimonials: "Témoignages", contact: "Contact" },
    hero: { subtitle: "LE STYLE EST UNE FAÇON DE DIRE QUI VOUS ÊTES", title: "Découvrez l'Art du Barbier de Prestige", description: "Dédié à offrir des coupes de cheveux, des rasages et des services de toilettage de la plus haute qualité dans une atmosphère moderne et relaxante.", cta: "Prendre Rendez-vous" },
    services: { title: "Nos Services" },
    gallery: { title: "Notre Galerie" },
    testimonials: { title: "Ce que disent nos clients" },
    appointment: { title: "Prêt pour un Nouveau Look ?", description: "Prenez rendez-vous dès aujourd'hui et découvrez la différence. Les visites sans rendez-vous sont les bienvenues mais les rendez-vous sont recommandés.", cta: "Réserver Maintenant" },
    location: { title: "Nous Trouver", addressLabel: "Adresse", address: "123 Rue du Barbier, Alger, Algérie", hours: "Heures d'Ouverture", schedule: "Lun - Sam : 9h00 - 20h00" },
    contact: { title: "Contactez-Nous", form: { name: "Votre Nom", email: "Votre Email", message: "Votre Message", cta: "Envoyer le Message" }, phoneLabel: "Téléphone", phone: "+213 123 456 789", emailLabel: "Email", email: "contact@modernbarber.dz" },
    footer: { description: "Façonner le style et la confiance depuis 2023.", copyright: "© 2024 Le Barbier Moderne. Tous droits réservés." },
    booking: { title: "Réservez Votre Rendez-vous", form: { name: "Votre Nom", phone: "Votre Téléphone", service: "Sélectionnez un Service", date: "Sélectionnez une Date", time: "Sélectionnez une Heure", cta: "Confirmer la réservation", success: "Merci ! Votre rendez-vous a été confirmé." } }
  },
  heroImage: 'https://images.unsplash.com/photo-1599351548093-e35000033f7d?q=80&w=2070&auto=format&fit=crop',
  galleryImages: [
    'https://images.unsplash.com/photo-1567894340345-a6162c4377db?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621983449332-03d331405b63?q=80&w=1964&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585749429512-075a3c03565f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621983449292-8070a6c0de6b?q=80&w=1964&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1632345031435-8024a4891114?q=80&w=1974&auto=format&fit=crop',
  ]
};