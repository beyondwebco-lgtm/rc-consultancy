export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  heroSubtitle: string;
  overview: string;
  whoNeedsIt: string[];
  documentsRequired: string[];
  howWeHelp: string[];
  processSteps: ServiceProcessStep[];
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "iec-registration",
    title: "Import Export Code (IEC) Registration",
    shortDescription: "Essential 10-digit primary business identification issued by DGFT for initiating commercial foreign trade.",
    iconName: "FileCheck2",
    heroSubtitle: "Mandatory DGFT identification number required for any commercial import or export transaction in India.",
    overview:
      "The Import Export Code (IEC) is a 10-digit identification code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry. It is mandatory for any commercial entity or individual seeking to import or export goods or services into or from India. Since IEC is linked directly with the PAN of the entity, accurate documentation and proper application submission are essential to avoid delays.",
    whoNeedsIt: [
      "Sole proprietorships launching foreign sales or procurement",
      "Partnership firms and LLPs entering international supply chains",
      "Private and Public Limited companies transacting overseas",
      "Manufacturers importing raw materials, components, or machinery",
      "Merchant exporters shipping products sourced domestically",
    ],
    documentsRequired: [
      "Permanent Account Number (PAN) card of the individual or legal entity",
      "Proof of establishment/incorporation (Partnership Deed, Certificate of Incorporation, or GST certificate)",
      "Bank account details along with a pre-printed cancelled cheque or formal bank certificate",
      "Address proof of the principal place of business (Electricity bill, Rent agreement, or Sale deed)",
      "Identity and address proofs of all promoters, partners, or directors",
    ],
    howWeHelp: [
      "Reviewing and verifying applicant documentation against DGFT portal prerequisites",
      "Drafting and preparing the online application on the DGFT platform",
      "Assisting in linking DSC (Digital Signature Certificate) or Aadhaar-based e-verification",
      "Monitoring application status and guiding through any department clarifications or queries",
    ],
    processSteps: [
      {
        step: 1,
        title: "Document Verification",
        description: "We review your PAN, bank details, and business premises records for consistency.",
      },
      {
        step: 2,
        title: "DGFT Profile Creation",
        description: "We help establish and configure your authenticated corporate profile on the DGFT portal.",
      },
      {
        step: 3,
        title: "Application Preparation & Submission",
        description: "Filing the prescribed online application with requisite attachments and fee payment guidance.",
      },
      {
        step: 4,
        title: "Issuance & Record Delivery",
        description: "Assisting in downloading and archiving the official digital IEC certificate for your business files.",
      },
    ],
    faqs: [
      {
        question: "Is an IEC registration valid for a lifetime?",
        answer: "Yes, IEC is issued for a lifetime. However, as per DGFT guidelines, every IEC holder must confirm and update their IEC details electronically every year between April and June, even if there are no changes.",
      },
      {
        question: "Can an individual apply for an IEC without establishing a company?",
        answer: "Yes, individuals operating as sole proprietors can obtain an IEC using their personal PAN and legitimate business premises proof.",
      },
      {
        question: "How long does IEC issuance take?",
        answer: "DGFT typically processes applications through automated verification upon successful online submission; however, government processing timeframes may vary depending on portal validation and department review.",
      },
      {
        question: "Can one entity have multiple IEC numbers?",
        answer: "No, only one IEC is issued against a single PAN. Multiple branches of the same firm can be added under the same IEC.",
      },
    ],
  },
  {
    slug: "dgft-registration-services",
    title: "DGFT Registration & Services",
    shortDescription: "Comprehensive portal onboarding, profile linking, annual updating, and administrative assistance on DGFT.",
    iconName: "Globe2",
    heroSubtitle: "Accurate administrative filing, profile maintenance, and statutory compliance on the DGFT portal.",
    overview:
      "The Directorate General of Foreign Trade (DGFT) oversees foreign trade policy and licensing in India. Exporters and importers must maintain an active, fully validated profile on the DGFT digital platform to carry out daily trade operations, claim eligible export incentives, or file annual mandatory updates. We provide end-to-end guidance to keep your DGFT profile accurate and in good standing.",
    whoNeedsIt: [
      "Businesses needing mandatory annual IEC electronic updation",
      "Companies updating directors, partners, branch addresses, or bank details",
      "Entities resolving DGFT profile suspension or portal authorization errors",
      "Exporters migrating legacy credentials to the modernized DGFT platform",
    ],
    documentsRequired: [
      "Existing IEC and registered PAN credentials",
      "Valid Class-3 Digital Signature Certificate (DSC) or Aadhaar of authorized signatory",
      "Updated board resolution or authorization letter for the designated representative",
      "Supporting documentation for any specific amendments (e.g., renewed rent agreement, change of bank statement)",
    ],
    howWeHelp: [
      "Conducting thorough compliance checks on your existing DGFT profile",
      "Drafting amendment requests with required corporate resolutions and proof attachments",
      "Handling technical profile linking with ICEGATE and related trade systems",
      "Providing timely reminders for mandatory annual profile verification windows",
    ],
    processSteps: [
      {
        step: 1,
        title: "Profile Audit",
        description: "Checking current DGFT status, linked bank accounts, and branch listings for discrepancies.",
      },
      {
        step: 2,
        title: "DSC & Authorization Setup",
        description: "Validating that Class-3 digital signatures and authorized signatory profiles match portal records.",
      },
      {
        step: 3,
        title: "Drafting & Online Filing",
        description: "Submitting mandatory updates or modifications through the DGFT administrative module.",
      },
      {
        step: 4,
        title: "Confirmation & Compliance Archival",
        description: "Procuring formal acknowledgement and updated digital records for ongoing compliance.",
      },
    ],
    faqs: [
      {
        question: "What happens if we miss the annual DGFT IEC update window?",
        answer: "Failing to update IEC details between April and June may lead to the IEC being deactivated by DGFT. Deactivation halts cross-border clearance until a formal online update is successfully submitted.",
      },
      {
        question: "Can changes to bank accounts be made directly on DGFT?",
        answer: "Yes, bank modifications can be filed on the DGFT portal, followed by appropriate validation and simultaneous AD code coordination at customs.",
      },
      {
        question: "Is DSC mandatory for DGFT portal transactions?",
        answer: "For corporate entities (LLPs, Private Limited, Public Limited), a Class-3 organization DSC is generally required for signing applications and amendments.",
      },
    ],
  },
  {
    slug: "ad-code-registration",
    title: "AD Code Registration",
    shortDescription: "Authorized Dealer Code registration with ICEGATE and custom ports for export shipping bill generation.",
    iconName: "Building2",
    heroSubtitle: "Crucial bank code mapping at custom ports required to generate Shipping Bills and receive foreign inward remittances.",
    overview:
      "An Authorized Dealer (AD) Code is a 14-digit code provided by your business bank branch where you maintain a current account for international trade. To process export customs clearance and generate Shipping Bills at any seaport, airport, or Inland Container Depot (ICD), the AD Code letter must be registered with Indian Customs via the ICEGATE platform for each port of shipment.",
    whoNeedsIt: [
      "Exporters dispatching commercial cargo for the first time through sea, air, or land ports",
      "Established exporters expanding operations to additional custom ports or ICDs",
      "Businesses opening a new international current account or altering banking partners",
      "Traders receiving foreign remittances requiring automated EDPMS customs reconciliation",
    ],
    documentsRequired: [
      "AD Code authorization letter from the bank branch in the standard customs-prescribed format",
      "Bank branch contact details, IFSC, and official bank seal with authorized officer signature",
      "Copy of valid Import Export Code (IEC) certificate",
      "Company PAN, GSTIN certificate, and authorized signatory identification",
      "Active ICEGATE registered profile of the business entity",
    ],
    howWeHelp: [
      "Reviewing the bank's AD Code letter format against strict customs guidelines to prevent rejection",
      "Assisting in ICEGATE user profile registration and Class-3 DSC configuration",
      "Preparing and uploading online AD Code port registration requests on ICEGATE",
      "Tracking customs approvals across specific custom stations (JNPT, Nhava Sheva, Air Cargo, etc.)",
    ],
    processSteps: [
      {
        step: 1,
        title: "Bank Letter Review",
        description: "Verifying your bank's AD Code issuance letter against the latest customs notification templates.",
      },
      {
        step: 2,
        title: "ICEGATE Verification",
        description: "Validating that your digital signature and company profile are ready on the ICEGATE portal.",
      },
      {
        step: 3,
        title: "Port-Wise Submission",
        description: "Submitting the AD Code registration request for designated sea ports, airports, or ICDs.",
      },
      {
        step: 4,
        title: "Customs Officer Approval Tracking",
        description: "Monitoring status until the AD Code is formally approved and activated in the customs system.",
      },
    ],
    faqs: [
      {
        question: "Can an exporter register the AD Code at multiple ports?",
        answer: "Yes, an exporter must register their AD Code at each port from which cargo is dispatched. The same bank letter or updated port requests can be used across multiple customs locations.",
      },
      {
        question: "Can cargo be cleared without AD Code registration?",
        answer: "No, custom EDI systems will not permit generation of an export Shipping Bill without an active registered AD Code for that port.",
      },
      {
        question: "Is AD code registration required for imports as well?",
        answer: "AD code is primarily linked to export processing and foreign currency remittance tracking under EDPMS, though bank account details are verified during import clearance via IDPMS as well.",
      },
    ],
  },
  {
    slug: "lmpc-registration-compliance",
    title: "LMPC Registration & Compliance",
    shortDescription: "Legal Metrology Packaged Commodities certificate for pre-packaged commodities import and statutory labeling.",
    iconName: "Scale",
    heroSubtitle: "Regulatory compliance under Legal Metrology Rules for importing and selling pre-packaged goods in India.",
    overview:
      "Under the Legal Metrology (Packaged Commodities) Rules, 2011, any entity importing pre-packaged commodities intended for retail sale, distribution, or commercial consumption in India must obtain an LMPC registration certificate from the Department of Consumer Affairs. Importers must also adhere to mandatory declaration rules on outer packaging before goods pass customs inspection.",
    whoNeedsIt: [
      "Importers of packaged consumer goods, electronics, cosmetics, and packaged food items",
      "E-commerce businesses importing products ready for retail distribution",
      "Overseas brands establishing direct distribution channels across India",
      "Wholesale traders importing packed goods subject to mandatory weight and labeling norms",
    ],
    documentsRequired: [
      "Import Export Code (IEC) certificate",
      "GST registration certificate and business premises proof",
      "Sample artwork or photograph of product packaging showing proposed mandatory declarations",
      "List of products with commercial names, net quantities, and country of origin",
      "Identity and residential address proofs of directors, partners, or proprietor",
    ],
    howWeHelp: [
      "Reviewing product packaging labels to ensure all mandatory LMPC declarations are compliant",
      "Classifying commodities and identifying applicable exemptions or special labeling provisions",
      "Drafting and submitting the LMPC importer registration application to the central or state authority",
      "Providing guidance on customs bond and labeling protocols prior to border inspection",
    ],
    processSteps: [
      {
        step: 1,
        title: "Label & Packaging Review",
        description: "Auditing font sizes, unit representations, MRP formatting, and importer address layouts.",
      },
      {
        step: 2,
        title: "Application Preparation",
        description: "Compiling statutory forms, supporting affidavits, and technical commodity lists.",
      },
      {
        step: 3,
        title: "Department Submission",
        description: "Filing with the Legal Metrology Department and following statutory payment procedures.",
      },
      {
        step: 4,
        title: "Certificate Issuance",
        description: "Procuring the formal LMPC Importer Registration Certificate for customs clearance records.",
      },
    ],
    faqs: [
      {
        question: "What declarations must appear on pre-packaged import labels?",
        answer: "Mandatory declarations typically include the generic name of the commodity, net quantity, month and year of import, country of origin, maximum retail price (MRP inclusive of all taxes), consumer care details, and the name and complete address of the importer.",
      },
      {
        question: "Can pre-packaged goods be labeled inside the customs bonded warehouse?",
        answer: "Under specific customs provisions and permissions, importers may be permitted to rectify or affix compliant labeling in bonded warehouses prior to out-of-charge clearance.",
      },
      {
        question: "Are industrial or institutional consumers exempt from LMPC labeling?",
        answer: "Packages containing quantities meant specifically for industrial consumers or institutional consumers are subject to distinct exemptions under Chapter II of the Legal Metrology Rules.",
      },
    ],
  },
  {
    slug: "cpcb-registration-compliance",
    title: "CPCB Registration & Compliance",
    shortDescription: "Extended Producer Responsibility (EPR) registration and statutory filing with Central Pollution Control Board.",
    iconName: "ShieldAlert",
    heroSubtitle: "Extended Producer Responsibility (EPR) registration and annual filing for importers under environmental guidelines.",
    overview:
      "The Central Pollution Control Board (CPCB) enforces Extended Producer Responsibility (EPR) frameworks under Ministry of Environment, Forest and Climate Change (MoEFCC) rules. Importers of electronic goods, electrical equipment, batteries, tires, and commodities packaged in plastics must secure EPR registration before clearing shipments at Indian customs. We assist in preparing filings and organizing compliance documentation.",
    whoNeedsIt: [
      "Importers of IT, telecommunication, and consumer electrical & electronic equipment (E-waste rules)",
      "Importers of products packed in plastic packaging materials (Plastic Waste Management rules)",
      "Importers of lead-acid, lithium-ion, or industrial batteries (Battery Waste Management rules)",
      "Importers of automotive tires and rubber components",
    ],
    documentsRequired: [
      "IEC Certificate, GSTIN, and company incorporation documents",
      "Detailed category-wise import quantity projections or past import bills of entry",
      "Pan-India authorized signatory documentation and contact details",
      "Product technical specifications and recyclable composition breakdown",
      "Agreements or tie-ups with authorized recycling entities / waste management agencies where applicable",
    ],
    howWeHelp: [
      "Identifying the specific EPR category and applicable target obligations for your import line",
      "Structuring online portal registration on the official CPCB EPR portals",
      "Organizing required documentation, procurement data, and authorization declarations",
      "Guiding on periodic filing requirements to prevent customs port hold-ups",
    ],
    processSteps: [
      {
        step: 1,
        title: "Applicability & Waste Mapping",
        description: "Assessing imported commodities against E-waste, Plastic, or Battery waste regulations.",
      },
      {
        step: 2,
        title: "Portal Onboarding",
        description: "Setting up profile credentials on the specific CPCB online portal with corporate verification.",
      },
      {
        step: 3,
        title: "Data Compilation & Filing",
        description: "Submitting import projections, product model information, and recycling commitments.",
      },
      {
        step: 4,
        title: "Registration Verification",
        description: "Assisting through department review until the formal CPCB EPR registration number is granted.",
      },
    ],
    faqs: [
      {
        question: "Does Indian Customs stop shipments if CPCB EPR is missing?",
        answer: "Yes, customs automated risk management systems frequently flag items covered under EPR guidelines, withholding out-of-charge clearance until a valid CPCB EPR registration is submitted.",
      },
      {
        question: "Is EPR registration mandatory for small importers?",
        answer: "Yes, statutory waste management rules apply to all importers introducing covered products into the Indian market, regardless of volume, though recycling target thresholds may differ.",
      },
      {
        question: "What are the recurring requirements after obtaining CPCB registration?",
        answer: "Registered importers are required to file periodic returns detailing actual import volumes and demonstrate fulfillment of their statutory recycling obligations through verified credits.",
      },
    ],
  },
  {
    slug: "rcmc-registration",
    title: "RCMC Registration",
    shortDescription: "Registration-cum-Membership Certificate from relevant Export Promotion Councils and Commodity Boards.",
    iconName: "Award",
    heroSubtitle: "Statutory membership with Export Promotion Councils required to claim foreign trade benefits and certifications.",
    overview:
      "A Registration-cum-Membership Certificate (RCMC) is issued by Export Promotion Councils (EPCs), Commodity Boards, or export development authorities in India. An exporter must obtain an RCMC pertaining to their specific line of business to avail benefits, concessions, and export authorizations under the Foreign Trade Policy (FTP).",
    whoNeedsIt: [
      "Exporters looking to access duty remission schemes (e.g., RoDTEP, RoSCTL, Advance Authorization)",
      "Merchants and manufacturers shipping engineering goods (EEPC), textiles (TEXPROCIL), chemicals (CHEMEXCIL), spices, apparel, or handicrafts",
      "Exporters requiring export authorizations for restricted or dual-use commodities",
      "Firms applying for status holder certifications or trade fair participations",
    ],
    documentsRequired: [
      "Valid Import Export Code (IEC) certificate",
      "Permanent Account Number (PAN) and GST registration certificate",
      "Memorandum and Articles of Association, Partnership Deed, or Trust Deed",
      "Audited financial statements or CA certificate specifying export/domestic turnover",
      "Manufacturing license or SSI/MSME certificate (for manufacturer-exporters)",
    ],
    howWeHelp: [
      "Identifying the appropriate council or commodity board based on your exact HS codes and product portfolio",
      "Preparing the online application on the unified DGFT e-RCMC portal",
      "Verifying that turnover figures, industrial licenses, and product classifications are consistent",
      "Assisting in follow-up and timely renewal submissions",
    ],
    processSteps: [
      {
        step: 1,
        title: "Council Selection",
        description: "Aligning your product line with the relevant EPC (EEPC, FIEO, CHEMEXCIL, APEDA, etc.).",
      },
      {
        step: 2,
        title: "Financial & Entity Documentation",
        description: "Assembling manufacturing credentials, CA turnover certificates, and corporate proofs.",
      },
      {
        step: 3,
        title: "e-RCMC Portal Submission",
        description: "Filing through the central DGFT common digital platform and arranging council fee payments.",
      },
      {
        step: 4,
        title: "Issuance & Validation",
        description: "Securing the validated e-RCMC document and checking automatic linkage with customs systems.",
      },
    ],
    faqs: [
      {
        question: "Which council should an exporter register with if dealing in multi-product categories?",
        answer: "If an exporter deals in diverse products not covered under a single specialized council, they may obtain an RCMC from the Federation of Indian Export Organisations (FIEO).",
      },
      {
        question: "What is the typical validity of an RCMC?",
        answer: "An RCMC is generally valid for 5 financial years from the date of issuance, subject to timely payment of annual membership fees prescribed by the respective council.",
      },
      {
        question: "Is RCMC mandatory for every single export shipment?",
        answer: "While basic physical exports can proceed under an IEC, an RCMC is mandatory if you intend to claim any Foreign Trade Policy benefits, duty refunds, or customs concessions.",
      },
    ],
  },
  {
    slug: "certificate-of-origin-coo",
    title: "Certificate of Origin (COO)",
    shortDescription: "Non-Preferential and Preferential Certificate of Origin guidance via DGFT common portal and authorized trade bodies.",
    iconName: "FileSpreadsheet",
    heroSubtitle: "Official verification of shipment origin required by foreign customs authorities to apply appropriate duty tariffs.",
    overview:
      "A Certificate of Origin (COO) is an official trade document declaring that goods exported from India have been entirely produced, manufactured, or processed in India. Foreign customs authorities rely on COOs to determine tariff rates, duty concessions under Free Trade Agreements (FTAs) or Preferential Trade Agreements (PTAs), and trade embargo compliance. We provide complete documentation guidance for both preferential and non-preferential COOs.",
    whoNeedsIt: [
      "Exporters whose overseas buyers require formal proof of origin for customs clearance",
      "Exporters exporting to countries with active FTAs/PTAs (e.g., ASEAN, UAE CEPA, SAFTA, India-Australia ECTA)",
      "Shippers needing Non-Preferential COOs through local Chambers of Commerce or trade agencies",
      "Manufacturers seeking to certify value addition thresholds required by international buyers",
    ],
    documentsRequired: [
      "Commercial Invoice and Packing List for the specific consignment",
      "Shipping Bill copy or Bill of Lading / Airway Bill",
      "Cost sheet / value addition computation (for preferential origin claims under FTAs)",
      "Digital Signature Certificate (DSC) of the authorized exporter representative",
      "Existing registration on the DGFT common digital platform for COO",
    ],
    howWeHelp: [
      "Classifying the shipment under the correct agreement (Preferential vs. Non-Preferential)",
      "Drafting and reviewing invoice details, HS codes, and origin criteria declarations",
      "Filing the digital application on the official electronic origin portal (e-COO)",
      "Tracking timely verification and issuance by designated agencies or Chambers of Commerce",
    ],
    processSteps: [
      {
        step: 1,
        title: "Agreement & Origin Determination",
        description: "Checking destination country rules of origin and verifying applicable FTA tariff lines.",
      },
      {
        step: 2,
        title: "Invoice & Cargo Verification",
        description: "Auditing commercial invoice line items, transport details, and value addition declarations.",
      },
      {
        step: 3,
        title: "Online e-COO Filing",
        description: "Submitting the application on the central platform with digital signature authentication.",
      },
      {
        step: 4,
        title: "Digital Certificate Delivery",
        description: "Downloading the digitally signed or QR-coded COO document for transmission to the buyer.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Preferential and Non-Preferential COO?",
        answer: "A Preferential COO allows the foreign buyer to claim reduced or zero customs duty under bilateral or regional trade agreements (like CEPA, APTA, SAFTA). A Non-Preferential COO merely certifies origin without preferential tariff concessions.",
      },
      {
        question: "Can a Certificate of Origin be issued after the shipment has departed?",
        answer: "Yes, under certain trade agreements and guidelines, a COO can be issued retrospectively (marked 'Issued Retrospectively'), provided prescribed timelines and evidence are furnished.",
      },
      {
        question: "Who issues Certificates of Origin in India?",
        answer: "Non-preferential COOs are issued by authorized Chambers of Commerce and trade associations. Preferential COOs are issued by designated government bodies like EIA, DGFT, or textile committees depending on the trade pact.",
      },
    ],
  },
  {
    slug: "import-export-documentation",
    title: "Import Export Documentation",
    shortDescription: "End-to-end advisory and drafting support for commercial invoices, packing lists, trade contracts, and letters of credit.",
    iconName: "FileText",
    heroSubtitle: "Accurate preparation and alignment of commercial trade documentation to prevent customs queries and payment rejections.",
    overview:
      "Flawless documentation is the backbone of successful cross-border commerce. Discrepancies between commercial invoices, transport records, purchase orders, and Letters of Credit (LC) can lead to severe port demurrage, customs scrutiny, or delayed bank remittances. RC CONSULTANCY offers thorough advisory and drafting assistance to ensure every document matches commercial and regulatory specifications.",
    whoNeedsIt: [
      "First-time exporters and importers establishing standard operating documentation",
      "Companies executing high-value orders under complex Letter of Credit (LC) terms",
      "Merchants dealing in mixed-cargo consignments requiring precise packing lists",
      "Firms requiring standardized proforma invoices, sales contracts, and Incoterm clauses",
    ],
    documentsRequired: [
      "Purchase Order (PO) or signed international sales contract",
      "Proforma Invoice with agreed Incoterms (FOB, CIF, CFR, EXW, etc.)",
      "Complete product specifications, technical datasheets, and 8-digit HS codes",
      "Banking instructions and Letter of Credit copy (if payment is via LC)",
      "Cargo weight, dimensions, packaging details, and transport mode records",
    ],
    howWeHelp: [
      "Drafting compliant Commercial Invoices and Packing Lists aligned with customs standards",
      "Reviewing Letter of Credit (LC) terms to identify clauses prone to bank discrepancies",
      "Clarifying Incoterms 2020 obligations to prevent unintended freight or insurance liabilities",
      "Creating customized document templates for recurring commercial export or import cycles",
    ],
    processSteps: [
      {
        step: 1,
        title: "Requirement Assessment",
        description: "Reviewing commercial contracts, payment conditions, and destination customs requirements.",
      },
      {
        step: 2,
        title: "Drafting & Classification",
        description: "Preparing initial invoice, packing list, and declaration drafts with verified HS codes.",
      },
      {
        step: 3,
        title: "Cross-Document Reconciliation",
        description: "Matching values, weights, descriptions, and shipping marks across all export papers.",
      },
      {
        step: 4,
        title: "Final Package Delivery",
        description: "Handing over finalized digital and printable document sets ready for customs and banking submission.",
      },
    ],
    faqs: [
      {
        question: "Why is precise HS code classification so critical in documentation?",
        answer: "Harmonized System (HS) codes determine import duties, export restrictions, GST rates, and regulatory permits. An incorrect HS code can trigger customs reclassification, penalties, or consignments being held at ports.",
      },
      {
        question: "Do you help with Letter of Credit (LC) documentation review?",
        answer: "Yes, we scrutinize LC clauses against your shipping documentation to ensure exact alignment of terms, descriptions, and dates, minimizing the risk of bank discrepancy fees.",
      },
      {
        question: "What are Incoterms and why must they be stated in invoices?",
        answer: "Incoterms (such as FOB, CIF, DDP) legally define the division of costs, risks, and responsibilities between buyer and seller. Correct Incoterm notation prevents billing disputes and customs valuation errors.",
      },
    ],
  },
  {
    slug: "customs-documentation-support",
    title: "Customs Documentation Support",
    shortDescription: "Advisory on Bill of Entry, Shipping Bill, customs tariff valuation, duty exemptions, and clearance compliance.",
    iconName: "ClipboardCheck",
    heroSubtitle: "Strategic advisory and checklist preparation for seamless customs clearance at Indian air, sea, and land ports.",
    overview:
      "Navigating customs compliance requires rigorous attention to tariff classifications, valuation rules, notifications, and statutory clearances. We assist importers and exporters by preparing exhaustive document dossiers, reviewing customs declarations (Bill of Entry and Shipping Bill drafts), and ensuring supporting certificates are in order before cargo arrives at customs checkpoints.",
    whoNeedsIt: [
      "Importers preparing for customs assessment and duty payment on incoming shipments",
      "Exporters preparing shipping bill declarations and drawback/remission claims",
      "Businesses importing capital goods or project cargo under concessional duty schemes",
      "Traders receiving customs queries or requests for first-check examination",
    ],
    documentsRequired: [
      "Commercial Invoice and detailed Packing List",
      "Transport document: Bill of Lading (B/L) or Airway Bill (AWB)",
      "Import Export Code (IEC) and AD Code registration confirmations",
      "Relevant regulatory permits (FSSAI, LMPC, CPCB, BIS, or COO where applicable)",
      "Country of Origin certificate and insurance certificate",
    ],
    howWeHelp: [
      "Verifying customs tariff classifications and applicable basic customs duty (BCD), IGST, and cess",
      "Pre-clearing documentation against port-specific customs checklists",
      "Reviewing Bill of Entry and Shipping Bill drafts prior to formal submission on ICEGATE",
      "Advising on statutory compliance to prevent unnecessary container detention and demurrage",
    ],
    processSteps: [
      {
        step: 1,
        title: "Dossier Review",
        description: "Cross-checking shipping invoices, packing manifests, and transport documents for accuracy.",
      },
      {
        step: 2,
        title: "Tariff & Exemption Check",
        description: "Checking relevant customs notifications, anti-dumping duties, or preferential exemption benefits.",
      },
      {
        step: 3,
        title: "Declaration Verification",
        description: "Auditing draft Bill of Entry or Shipping Bill entries against supporting physical records.",
      },
      {
        step: 4,
        title: "Compliance Checklist Sign-off",
        description: "Providing a verified customs clearance packet for your Custom House Agent (CHA) and records.",
      },
    ],
    faqs: [
      {
        question: "Does RC CONSULTANCY act as a Custom House Agent (CHA)?",
        answer: "No, we are an independent regulatory compliance and documentation consultancy. We provide advisory, document auditing, and regulatory preparation support that works seamlessly alongside your appointed licensed CHA.",
      },
      {
        question: "What causes unexpected customs clearance delays?",
        answer: "The most common causes include mismatches between invoices and packing lists, missing regulatory registrations (like LMPC, EPR, or BIS), incorrect HS codes, or delays in submitting bank AD codes.",
      },
      {
        question: "How is customs duty calculated on imported cargo?",
        answer: "Customs duty is calculated on the Assessable Value (CIF value), comprising the transaction value plus freight and insurance. Basic Customs Duty (BCD), Social Welfare Surcharge (SWS), and Integrated GST (IGST) are computed accordingly.",
      },
    ],
  },
  {
    slug: "regulatory-compliance-guidance",
    title: "Import Export Regulatory Compliance Guidance",
    shortDescription: "Proactive advisory to align cross-border trade operations with DGFT, RBI, FEMA, Customs, and allied trade acts.",
    iconName: "Scale3D",
    heroSubtitle: "Strategic advisory to maintain trade integrity, satisfy regulatory obligations, and prevent statutory penalties.",
    overview:
      "Cross-border trade in India is governed by multiple interconnected regulatory bodies including DGFT, Indian Customs, the Reserve Bank of India (RBI) under FEMA, and various partner government agencies (PGAs). Non-compliance can lead to frozen bank accounts, export incentive clawbacks, or fiscal penalties. We deliver clear, actionable regulatory guidance tailored to your specific commercial commodity flows.",
    whoNeedsIt: [
      "Enterprises establishing new cross-border supply chains or trading entities",
      "Importers and exporters seeking clarity on restricted or canalized goods under the Foreign Trade Policy",
      "Businesses managing EDPMS and IDPMS bank realization compliance under RBI guidelines",
      "Manufacturers evaluating duty exemption schemes like Advance Authorization or EPCG",
    ],
    documentsRequired: [
      "Company corporate structure and operational model details",
      "Product lists with technical data sheets and intended country of origin/destination",
      "Historical import/export documentation for retrospective compliance reviews",
      "Bank realization status reports from EDPMS/IDPMS where applicable",
    ],
    howWeHelp: [
      "Conducting comprehensive regulatory feasibility audits for new import-export projects",
      "Mapping trade compliance pathways across DGFT, Customs, and relevant allied ministries",
      "Advising on compliance with foreign inward/outward remittance timeframes under FEMA rules",
      "Providing clear written advisory notes with citations to relevant statutory circulars and notifications",
    ],
    processSteps: [
      {
        step: 1,
        title: "Operational Discovery",
        description: "Understanding your trade model, commodities, transaction routes, and current documentation practices.",
      },
      {
        step: 2,
        title: "Statutory Gap Analysis",
        description: "Benchmarking operations against DGFT Foreign Trade Policy, Customs notifications, and allied acts.",
      },
      {
        step: 3,
        title: "Actionable Advisory Roadmap",
        description: "Delivering prioritized guidelines for required registrations, permits, and documentation standards.",
      },
      {
        step: 4,
        title: "Ongoing Advisory Support",
        description: "Keeping your trade team informed as regulatory policies, trade agreements, and port norms evolve.",
      },
    ],
    faqs: [
      {
        question: "What is EDPMS and IDPMS compliance under RBI?",
        answer: "The Export Data Processing and Monitoring System (EDPMS) and Import Data Processing and Monitoring System (IDPMS) track cross-border payments. Exporters must ensure foreign export proceeds are realized within statutory periods, and importers must submit Bill of Entry evidence against outward remittances.",
      },
      {
        question: "Do you advise on goods falling under the SCOMET list?",
        answer: "We offer guidance on identifying whether your dual-use items, software, or technology fall under Special Chemicals, Organisms, Materials, Equipment and Technologies (SCOMET) lists and outline the requisite DGFT licensing process.",
      },
      {
        question: "Can regulatory compliance guidance prevent customs penalties?",
        answer: "Proactive compliance checks verify documents, classifications, and licenses before shipments are dispatched, significantly reducing exposure to misdeclarations, demurrage, and customs penalties.",
      },
    ],
  },
];
