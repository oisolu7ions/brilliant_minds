export const SITE = {
  name: "Brilliant Minds Mental Health and Wellness, PLLC",
  shortName: "Brilliant Minds",
  domain: "brilliantmindsmhw.com",
  email: "info@brilliantmindsmhw.com",
  // TODO: Replace with actual phone number when provided by client
  phone: "(555) 123-4567",
  // TODO: Replace with actual address when in-office location is confirmed
  address: {
    street: "Telehealth services — in-office appointments coming soon",
    city: "",
    state: "",
    zip: "",
  },
  // TODO: Replace with actual business hours when provided by client
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  tagline:
    "Telehealth psychiatric care focused on medication management and supportive therapy.",
} as const;

export const BUSINESS_DESCRIPTION =
  "Brilliant Minds Mental Health and Wellness, PLLC is poised to make a meaningful impact by initially functioning as a telehealth organization dedicated to providing comprehensive medication management and supportive therapy services. Our focus is on individuals grappling with a variety of mental health conditions and delivering accessible, personalized care that promotes mental well-being and resilience for our clients.";

export const MISSION_STATEMENT =
  "Brilliant Minds provides compassionate care that not only addresses mental health challenges but also fosters individuals' overall healing journey, guiding them towards a more balanced and functional state of well-being.";

export const APPROACH_TO_CARE =
  "At Brilliant Minds, we focus on supporting individuals facing mental health challenges and navigating life's difficulties. We recognize that seeking psychiatric care can often feel daunting. Dr. Batts employs a collaborative approach to care, ensuring that each client receives personalized attention and support. By working independently, she maintains direct contact with her clients, fosters a confidential environment, and develops tailored plans that meet their unique needs.";

export const TELEHEALTH_NOTE =
  "Brilliant Minds Mental Health and Wellness currently offers telehealth services. In-office appointments will be available in the near future.";

export const AGE_RANGE =
  "Brilliant Minds offers treatment services specifically designed for individuals aged 15 to 64.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/new-clients", label: "New Clients" },
  { href: "/contact", label: "Contact" },
] as const;

export const HOME_SERVICES = [
  {
    title: "Psychiatric Evaluations",
    description:
      "A thorough assessment of your mental health concerns, medical history, symptoms, and treatment goals to develop an individualized care plan.",
  },
  {
    title: "Medication Management",
    description:
      "Evidence-based psychopharmacology using research and clinical evidence to guide effective, tailored medication treatment.",
  },
  {
    title: "Supportive Therapy",
    description:
      "Brief therapeutic interventions integrated into psychiatric care to help develop coping skills and support emotional wellness.",
  },
  {
    title: "Lifestyle Modification",
    description:
      "Guidance on intentional changes to daily habits — such as diet, exercise, and sleep — to support mental health and overall well-being.",
  },
] as const;

export const ALL_SERVICES = [
  {
    title: "Psychiatric Evaluations",
    description:
      "A thorough assessment of your mental health concerns, medical history, symptoms, and treatment goals to develop an individualized care plan. Comprehensive evaluations are commonly the starting point for telepsychiatry treatment and last about 45 minutes to one hour.",
    slug: "psychiatric-evaluations",
  },
  {
    title: "Evidence-Based Psychopharmacology (Medication Management)",
    description:
      "This approach uses research and clinical evidence to guide medication use in treating mental health disorders, ensuring interventions are both effective and tailored to individual patients' needs.",
    slug: "medication-management",
  },
  {
    title: "Supportive Therapy",
    description:
      "Brief therapeutic interventions integrated into psychiatric treatment to help patients develop coping skills, improve emotional wellness, and support medication treatment when appropriate.",
    slug: "supportive-therapy",
  },
  {
    title: "Lifestyle Modification",
    description:
      "Intentional changes to daily habits and routines, such as diet, exercise, and sleep, to enhance overall well-being and support mental health. Modifying lifestyle factors can significantly impact mood and stress levels, promoting a healthier and more balanced life.",
    slug: "lifestyle-modification",
  },
] as const;

export const CONDITIONS_TREATED = [
  "Anxiety Disorders",
  "Depression",
  "ADHD (adolescents only; medication management for adults already diagnosed)",
  "PTSD",
  "Bipolar Disorder",
  "Panic Disorder",
  "Insomnia",
  "Schizophrenia",
] as const;

export const WHO_WE_HELP = [
  {
    title: "Adolescents (Ages 15–17)",
    description:
      "Psychiatric care tailored to adolescents, including evaluation and treatment for qualifying conditions such as ADHD.",
  },
  {
    title: "Adults (Ages 18–64)",
    description:
      "Comprehensive medication management and supportive therapy for adults navigating a variety of mental health conditions.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Accessible Telehealth Care",
    description:
      "Receive professional psychiatric services from the comfort and privacy of your own space through secure telehealth appointments.",
  },
  {
    title: "Evidence-Based Treatment",
    description:
      "Care grounded in research and clinical evidence, with medication management and supportive therapy tailored to your needs.",
  },
  {
    title: "Collaborative & Personalized",
    description:
      "Dr. Batts works directly with each client to develop individualized treatment plans in a confidential, supportive environment.",
  },
  {
    title: "Compassionate Support",
    description:
      "We understand that seeking psychiatric care can feel daunting — our approach is warm, respectful, and focused on your healing journey.",
  },
] as const;

export const PROVIDERS = [
  {
    name: "Dr. Charnissa Batts",
    preferredName: "Dr. Nikki",
    credentials: "DNP, MSN-Ed, APRN, PMHNP-BC",
    bio: "Dr. Charnissa Batts (Dr. Nikki) is a board-certified Psychiatric Mental Health Nurse Practitioner dedicated to providing compassionate, evidence-based psychiatric care. She employs a collaborative approach, maintaining direct contact with each client to develop tailored treatment plans that address individual mental health needs. Her focus is on supporting clients through medication management, supportive therapy, and holistic wellness strategies.",
    imageSrc: "/providers/charnissa-batts.png",
    imageAlt: "Dr. Charnissa Batts, PMHNP-BC",
  },
] as const;

export const VALUES = [
  {
    title: "Meaningful Relationships",
    description:
      "We prioritize establishing meaningful relationships and cultivating partnerships rooted in respect, integrity, and authenticity.",
  },
  {
    title: "Safe & Welcoming Environment",
    description:
      "We strive to create a welcoming and safe environment where community members can feel secure and supported, express themselves freely, and embark on their path to recovery with confidence.",
  },
] as const;

export const INSURANCE_PROVIDERS = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "Oscar",
  "UnitedHealthcare",
] as const;

export const PRIVATE_PAY_TITLE =
  "Private Pay Model for Telepsychiatry / Face-to-Face";

export const SELF_PAY_RATE_SECTIONS = [
  {
    category: "New Patient",
    rates: [
      {
        service: "Initial Psychiatric Evaluation",
        duration: "60 minutes",
        price: "$250",
      },
    ],
  },
  {
    category: "Established Patients",
    rates: [
      {
        service: "Medication Management",
        duration: "20–30 minutes",
        price: "$150",
      },
      {
        service: "Medication Management + Supportive Therapy",
        duration: "45 minutes",
        price: "$195",
      },
      {
        service: "Extended Follow-Up",
        duration: "60 minutes",
        price: "$175",
      },
    ],
  },
  {
    category: "Other Services",
    rates: [
      {
        service: "FMLA / Disability Forms",
        duration: "Forms completed after seen by provider for one year",
        price: "$50",
      },
      {
        service: "No-Show Fee",
        duration: "",
        price: "$75",
      },
    ],
  },
] as const;

export const PAYMENT_POLICIES = [
  "Payment due before or at appointment time",
  "Credit card on file required",
  "24-hour cancellation policy",
  "No-show fees charged to the card on file",
  "Superbills available on request",
] as const;

export const FIRST_APPOINTMENT =
  "During your first appointment, you will meet with the provider for a comprehensive evaluation that typically lasts between 45 minutes to 1 hour. This evaluation will include a detailed review of your medical, social, and family history. Once all the necessary information has been collected, you and the provider will collaboratively discuss and develop an appropriate treatment plan tailored to your needs.";

export const NEW_CLIENT_STEPS = [
  {
    step: "1",
    title: "Request an Appointment",
    description:
      "New clients can schedule by clicking the Request Appointment link on this website or by calling our office directly. An online booking link and client portal are coming soon.",
  },
  {
    step: "2",
    title: "Schedule Your Visit",
    description:
      "Our team will confirm your appointment and provide details for your secure telehealth session.",
  },
  {
    step: "3",
    title: "Complete Intake Through Client Portal",
    description:
      "Required intake forms and documentation will be completed through a secure client portal, which will be linked from this website once available.",
  },
  {
    step: "4",
    title: "Attend Your First Appointment",
    description:
      "Meet with Dr. Batts for a comprehensive initial psychiatric evaluation (60 minutes) to review your history and collaboratively develop your treatment plan.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How do I schedule my first appointment?",
    answer:
      "New clients can request an appointment by using the contact form on this website or by calling our office. An online booking link and client portal are coming soon.",
  },
  {
    question: "Do you offer in-person or telehealth appointments?",
    answer:
      "Brilliant Minds currently offers telehealth services. In-office appointments will be available in the near future.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes. We currently accept Aetna, Blue Cross Blue Shield, Cigna, Oscar, and UnitedHealthcare. More insurance panels are coming — please contact our office for the most current information.",
  },
  {
    question: "Do you offer self-pay options?",
    answer:
      "Yes. Private pay is available for telepsychiatry and face-to-face services. Current rates range from $150 for medication management follow-ups to $250 for an initial psychiatric evaluation. Full pricing and payment policies are listed on our New Clients page.",
  },
  {
    question: "What age groups do you serve?",
    answer:
      "We provide treatment services for individuals aged 15 to 64. ADHD evaluation and treatment is available for adolescents; for adults, we maintain medication management for those already diagnosed.",
  },
  {
    question: "What are your payment policies?",
    answer:
      "Payment is due before or at appointment time. A credit card on file is required. We maintain a 24-hour cancellation policy, and no-show fees are charged to the card on file. Superbills are available upon request.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Your first appointment is a comprehensive evaluation lasting 45 minutes to 1 hour. It includes a detailed review of your medical, social, and family history, followed by a collaborative discussion to develop your treatment plan.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Client privacy is a priority. Protected health information is handled through secure, appropriate channels — not through this public website. Intake forms will be completed through a secure client portal once available.",
  },
] as const;

export const EMERGENCY_DISCLAIMER =
  "If this is a mental health emergency, call 911, go to the nearest emergency room, or call/text 988 for immediate crisis support.";

export const FOOTER_EMERGENCY =
  "If this is a mental health emergency, call 911 or call/text 988 for immediate crisis support.";

export const CONTACT_FORM_DISCLAIMER =
  "Please do not include sensitive medical information, diagnosis details, emergency information, insurance documents, or private health information in this form. This form is for general inquiries only.";

export const INTAKE_FORMS_NOTE =
  "Intake forms and required documentation will be handled through a secure client portal, which will be linked from this website once available. At this stage, this website does not collect sensitive health information or intake forms directly.";
