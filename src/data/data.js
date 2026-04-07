import {
  Handshake,
  GraduationCap,
  PersonStanding,
  BookOpenCheck,
} from "lucide-react";
import { FaHandsHoldingChild, FaComputer } from "react-icons/fa6";
import { FaHandHoldingWater, FaHandsHelping, FaDog } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { IoFastFoodOutline, IoSchoolOutline } from "react-icons/io5";
import { GrRestroomWomen } from "react-icons/gr";
import { IoNutritionOutline } from "react-icons/io5";
import { PiTreeEvergreenFill } from "react-icons/pi";

export const DONATION_LINK = `http://human-welfare.org/donation-page/`;
export const ABOUT_US = `https://human-welfare.org/about-us/`;

export const prjects = [
  {
    title: "Shelter of Love",
    label: "Education",
    description:
      "Shelter of Love – Naigaon (SOL) came into existence since 2004. It is a shelter home for the underprivileged, orphan & semi-orphan children, between the age group of 6-18 years. A home that started as an orphanage now supports the local communities mainly children, youths & women to upgrade their skills through programs proposed by HWCT for the Skill Center. The Skill Development program also aims to help rural citizens and rural womens staying in remote and isolated areas. The shelter is also equipped to expand its facilities to support other support programs like extending Medical Camps and aiding people with different abilities in various aspects.",
    img: "/shelter-of-love-main-image.jpg",
    btnlabel: "Donate for Education",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/shelter-of-love-naigaon/",
    causes: [
      {
        label: "Note Books and stationery for 180 children: 9000/-",
        amt: 9000,
        id: "edu1",
      },
      {
        label: "Fees for girl child: 4800/- (Per Child / Yearly Fees)",
        amt: 4800,
        id: "edu2",
      },
      {
        label: "Uniforms, shoes and bags: 750/- (Per Child)",
        amt: 750,
        id: "edu3",
      },
    ],
  },
  {
    title: "Covid-19 Relief",
    label: "Medical",
    description:
      "The COVID-19 pandemic is one of the worst health and economic crises in modern history and it continues to require the best of humanity to overcome. Your donation to this fund will help stop COVID-19’s spread and protect us all. Now, more than ever, health workers need our support. As COVID-19 continues to spread, they’re on the front lines at this very moment—in hospitals, clinics, and triage centers around the world—putting themselves at risk to stop this pandemic. We know that health workers need training,",
    img: "/covid-19.jpg",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/covid-19-relief/",
  },
  {
    title: "Project Kartavya",
    label: "career",
    description:
      "Project Kartavya aims to work closely with stakeholders in schools especially teachers and principals to ensure that they create platforms in schools where children have the opportunities to learn about careers from activities like career exhibitions, career clubs and presentations from experts from different sectors. It also engages with the parents to build their capacity in positive parenting skills, exposure to different educational and career options, and the ways to improve the communication with their children. All these initiatives lead to creating a conducive environment at home, school and in the community.",
    img: "/project-kartavya.jpg",
    btnlabel: "Believe in Responsibility",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/project-kartavya/",
  },
  {
    title: "Project Poshan",
    label: "NUTRITION",
    description:
      "Poshan Program is an exceptional initiative with a singular focus on improving nutrition and providing quality food for underprivileged children and communities. Committed to eradicating hunger and malnutrition, poshan implements innovative programs that address food insecurity through sustainable solutions. From establishing open kitchen for the community and food banks to advocating for nutritious school meals, the foundation ensures that every individual has access to nourishing food.",
    img: "/Project-poshan-gallery.jpg",
    btnlabel: "Donate for Food",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/project-poshan/",
    
  },
  {
    title: "Project Magic Box",
    label: "DIGITAL LEARNING",
    description:
      "Project Magix Box is a transformative initiative at HWCT Naigaon Facility, dedicated to advancing digital education and computer learning opportunities for underprivileged students and communities of Palghar, Maharashtra. At HWCT we understand the crucial role of technology in today’s world, the foundation aims to bridge the digital divide and equip the marginalized with essential digital skills. Experienced trainers and mentors guide learners, enabling them to leverage technology for personal and professional growth within the children and youth. The project Magic Box programs create a level playing field, unlocking new opportunities and empowering the underprivileged to participate fully in the global digital ecosystem.",
    img: "/magic-box-rural-education.jpg",
    btnlabel: "Donate for Learning",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/project-magic-box/",
    
  },
  {
    title: "Animal Welfare",
    label: "Rescue",
    description:
      "The single most important thing that we can do to save cats and dogs from all the suffering and death that their overpopulation causes is to spray and neuter them. Spraying and neutering are routine, affordable surgeries that can prevent thousands of animals from being born, only to suffer and struggle to survive on the streets, be abused by cruel or neglectful people, or be euthanized in animal shelters for lack of a loving home. Mumbai is home to millions of street dogs. HCWT was set up to help improve the welfare of stray & abandoned dogs in Mumbai by addressing the main source of all problems — overpopulation.",
    img: "/animal-rescue.jpg",
    btnlabel: "Donate for Strays",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/animal-welfare/",
    
  },
  {
    title: "Celebrate your happiness at Orphanage",
    label: "Celebrate",
    description:
      "Hello everyone! There are many ideas to celebrate your special occasions. But sharing your happiness by providing food to needy and hungry poor people makes your celebration more joyous and happiness for yourself. For example, your or loved one’s birthday is a special day. You came into this world for a reason and with many milestones. And what better way to celebrate your accomplishments by contributing and sharing it with people who need support. You can plan your birthday in a unique way. You can bring along your friends and families and distribute or donate things which a school or an NGO would need to help various sections of society.",
    img: "/celebration-artwork.jpg",
    btnlabel: "Donate old Age",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/celebrate-your-happiness-at-the-orphanage-or-old-age-home/",
  },
  {
    title: "Celebrate your happiness at Animal Centre",
    label: "Celebrate",
    description:
      "Hello everyone! There are many ideas to celebrate your special occasions. But sharing your happiness by providing food to needy and hungry animals makes your celebration more joyous and happiness for yourself. For example, your or loved one’s birthday is a special day. You came into this world for a reason and with many milestones. And what better way to celebrate your accomplishments by contributing and sharing it with strays who need support. You can plan your birthday in a unique way. You can bring along your friends and families and distribute or donate things which a school or an NGO would need to help various sections of society.",
    img: "/celebration-artwork.jpg",
    btnlabel: "Donate for Strays",
    donation: "http://human-welfare.org/donation-page/",
    link: "https://human-welfare.org/celebrate-your-happiness-at-the-animal-welfare-centre/",
  },
];
export const partner = [
  {
    label:
      "Work together to build a strategy and work towards building sustainable rural communities",
    icon: Handshake,
  },
  {
    label:
      "Provide scholarships to rural students participating in various activities held under Project Kartavya",
    icon: GraduationCap,
  },
  {
    label:
      "Volunteer for  projects like women empowerment, skill building, Nutrition and other programs",
    icon: PersonStanding,
  },
  {
    label:
      "Provide assistance for sourcing or assisting workshops, learning materials and certifications",
    icon: BookOpenCheck,
  },
];
export const blogs = [
  {
    title: "“HWCT helps in Distribution of Food”- Kamakshi Verma",
    description:
      "Sunanda lives in Malvani, Malad, with her two children, Sameer and Indra. Sunanda used to work in a textile industry, till the day she lost her job due to the lockdown. Her husband, Ram Kamal, died long time ago in a car accident; therefore, Sunanda was the sole earner of her family. During the initial periods of lockdown, the family had enough resources to meet their daily needs, but, slowly the resources declined and Sunanda felt the need for another solution. She turned to her relatives and neighbors for help, but none was able to offer help due to scarce",
    img: "/blogs/2.jpg",
    link: "https://human-welfare.org/hwct-helps-in-distribution-of-food-kamakshi-verma/",
  },
  {
    title: "“HWCT helps Blinds by Garment Distribution”- Kamakshi Verma",
    description:
      " “The last time I bought a t-shirt was probably seven years old. It was a 200 rupees, red t-shirt. After that, I have never bought any t-shirts after that. I didn’t have enough money to buy one”, said Lokesh, when asked why he was wearing a torn and worn out shirt. He explained how he earlier used to live with his son and how the circumstances changed for the family after the death of his only son. “We lost our home and were supposed to live in the streets. We didn’t have any resources after our son died.",
    img: "/blogs/3.jpg",
    link: "https://human-welfare.org/hwct-helps-blinds-by-garment-distribution-kamakshi-verma/",
  },
  {
    title: "“HWCT helps a visually impaired woman”-Kamakshi Verma",
    description:
      "Pramila is a 53 year old, visually impaired woman. She was 32, when she met an accident that made her lose both her eyes. Due to her condition, she became solemnly dependent on her husband and family, but, they too neglected and abandoned her. Therefore, she took responsibility for herself and started selling incense sticks to meet her daily needs. Initially, she was able to make 50-100 rupees per day. The money was sufficient to provide her with a cheap meal, twice in a day, but, later as the times passed, her income declined at an uncontrolled rate. ",
    img: "/blogs/4.jpg",
    link: "https://human-welfare.org/hwct-helps-a-visually-impaired-woman-kamakshi-verma/",
  },
  {
    title: "“A Help in need is a Help Indeed”-Kamakshi Verma",
    description:
      "Originally from Uttar Pradesh, Zubaida now lived with her husband Rahat and two children, Arham and Monis, in Kandivali, Mumbai. Her husband used to work in a shoe manufacturing factory, which was unpredictably closed during the long periods of lockdown. Rahat’s income, although less, was sufficient to provide them with their daily bread and butter, but now, the only source of their family’s income had also vanished, leaving the entire family in the midst of hopelessness and starvation!  During the pandemic, Zubaida and Rahat, both were unemployed. ",
    img: "/blogs/5.jpg",
    link: "https://human-welfare.org/a-help-in-need-is-a-help-indeed-kamakshi-verma/",
  },
  {
    title: "“Food for the mind” – Shreeja Nanda",
    description:
      "Education is the basic necessity for the survival of mankind. However, not many students get the chance to even complete their scholastic education. Schools in rural parts of the state have seen students dropout for various reasons, such as financial issues, lack of proper infrastructure, children falling sick, to name a few. However, another major reason observed for the increase in the number of dropouts is the drop in enthusiasm for studying in these children. Various factors contribute to this decrease, one of which is lack of nutritional food.",
    img: "/blogs/6.jpg",
    link: "https://human-welfare.org/food-for-the-mind-shreeja-nanda/",
  },
  {
    title: "HWCT supports students with educational facilities – Shreeja Nanda",
    description:
      "Education is the basic necessity for the survival of mankind. In this dog-eat-dog world, a life without having the necessary education needed to survive has grave consequences which leads to global problems such as poverty, exploitation of the poor to name a few. Schools can be considered as the traditional sources to receive education, sometimes for a nominal fee, otherwise for a huge lump sum amount. People who can afford to spend such money enroll in top schools to get the best education one can receive. However, those who wish to learn and have the zest for it,",
    img: "/blogs/7.jpg",
    link: "https://human-welfare.org/hwct-supports-students-with-educational-facilities-shreeja-nanda/",
  },
  {
    title: "Supported kids with further education – Shreeja Nanda",
    description:
      "During a field visit to a school in Raigad, Kalpesh Kabra, the founder of HWCT India, noticed three children playing on the school playground. He observed that these children were not in their school uniforms. So, he approached these children and asked them a few questions. Kalpesh asked: What are your names? Nimesh: Uncle, my name is Nimesh. These two are Arjun and Kartik. Kalpesh asked: Why are you not wearing your school uniforms? Do you not study in this school? Arjun: Uncle, we used to study in this school.",
    img: "/blogs/8.jpg",
    link: "https://human-welfare.org/supported-kids-with-further-education-shreeja-nanda/",
  },
  {
    title: "HWCT helps in public food distribution – Shreeja Nanda",
    description:
      "The world has witnessed a huge economic shock due to the COVID-19 pandemic. In India, the lockdown started across the country on March 24 and is still ongoing. Many commentators have highlighted the plight of the poorest sections of society, particularly migrants who are trudging miles to be back home, having lost their daily wages and now depend on either the government support or private charity for food and shelter. “My husband and I are low wage workers. He works in a factory that manufactures PPE kits for doctors and the common population.",
    img: "/blogs/9.jpg",
    link: "https://human-welfare.org/hwct-helps-in-public-food-distribution-shreeja-nanda/",
  },
  {
    title: "Distribution of food kits and groceries – Shreeja Nanda",
    description:
      "The COVID-19 pandemic has been difficult on all of us. Students and educators have shifted to the online mode for pursuing their education. People working in corporate offices have found their mornings welcomed with the sounds of “Am I audible?” or “Is my screen visible?”. However, in the midst of this pandemic, many people have lost their jobs too, most of which belong to the lower strata of society, such as vehicle drivers, delivery boys, maids and servants, to name a few. “This pandemic has taken away everything from us.",
    img: "/blogs/10.jpg",
    link: "https://human-welfare.org/distribution-of-food-kits-and-groceries-shreeja-nanda/",
  },
  {
    title: "Teacher devoted his life for the students – Shreeja Nanda",
    description:
      "“Children are the future of our nation. I cannot think of any other job as fulfilling as shaping our young minds ”, said Mr. Sanjay Jadhav, a teacher from Ratnagiri. Mr. Sanjay has dedicated most of his life to educate young children who cannot avail quality education due to their financial issues. “Earlier, I used to teach in a government school in the city. During my visit to my native village Ambatkhol, I realised that children here are deprived of basic education due to poor educational administration facilities such as lack of stationary, benches, teachers and so on.",
    img: "/blogs/11.jpg",
    link: "https://human-welfare.org/teacher-devoted-his-life-for-the-students-shreeja-nanda/",
  },
  {
    title: "HWCT supports children with education – Shreeja Nanda",
    description:
      "“Aai (mother in Marathi), today we received books and pens in school!”, chirped Jyoti, one of the seven children from a rural school in Vidarbha, to her mother. During one of our recent visits to Vidarbha, we came across this group of zealous children who wish to continue their education, but monetary restraints do not allow them to do so. “We wish that all our children study hard and receive quality education and do well for our region. However, we are failing in fulfilling their requirements and are in dire need of help from whichever way possible,”",
    img: "/blogs/12.jpg",
    link: "https://human-welfare.org/hwct-supports-children-with-education-shreeja-nanda/",
  },
  {
    title: "The Fight of 44 Children Against Malnutrition",
    description:
      "This story of the children in Raj Talaty School is common across India. According to a recent study by UNICEF, malnutrition happens to be the cause for 65% of death cases of children below the age of 5. Undernutrition puts children at greater risk of dying from common infections, increases the frequency and severity of such infections, and delays recovery. HWCT visited the Raj Talaty school in Beed district, Maharashtra for a nutrition check of the children. Out of the 105 kids, 44 were found to be suffering from malnutrition, and 32 were barely clinging to the borderline. These children",
    img: "/blogs/13.png",
    link: "https://human-welfare.org/the-fight-of-44-children-against-malnutrition/",
  },
  {
    title:
      "“Thanks to HWCT, I could get back to the fields”- A Story of 87-Year-Old Yashodhar Vaity",
    description:
      "Yashodhar Vaity, an 87-year-old farmer, was born and brought up at Parli Village, Maharashtra. He is the owner of a 15-acre farming land that is taken care of by him and his wife. “Everything was going well till a few months back,” said Yashodhar. “My daughter got married in a good family and my son earns pretty well in a factory, which is few villages away. It’s all God’s grace that things went well for us.” But in the past few months, Yashodhar was falling sick which prevented him from helping his wife in the fields. He faced extreme pain",
    img: "/blogs/14.png",
    link: "https://human-welfare.org/thanks-to-hwct-i-could-get-back-to-the-fields-a-story-of-87-year-old-yashodhar-vaity/",
  },
  {
    title:
      "Man needs difficulties in Life because they are Necessary to Enjoy the Success – A Story by Kritika Sharma, HWCT Volunteer",
    description:
      "Ramesh, a 14-year-old, Vithalwadi habitant, residing in a Vithalwadi village felt that life hadn’t really been fair to him. He could see the skyscrapers by climbing at the top of the rickshaw his father owns, but while climbing down his feet and heart did not just touch the ground but were willing to go the mile too. He realized the disparity between the two worlds and felt like breaking through it. But this did not just happen overnight and it took time for him to reach here after having had his share of experiences down the bad road.",
    img: "/blogs/15.png",
    link: "https://human-welfare.org/man-needs-difficulties-in-life-because-they-are-necessary-to-enjoy-the-success-a-story-by-kritika-sharma-hwct-volunteer/",
  },
  {
    title:
      "Your Parents showed you the World…. And in return you showed them the old age home…A Story by Kritika Sharma, HWCT Volunteer",
    description:
      "During one of the many days of acting as a volunteer at HWCT, we visited an old age home at Khapoli, Maharashtra and nothing can ever make up for the smiles that greeted us. One of the brightest amongst them was of Pervez Mistry, Aged 68, a Parsi by caste, she could give the current generation a lesson on how to live everyday like there’s no tomorrow. She had the zeal for life that is seldom seen and, even at this age, wanted to do better for those around her. When one of us sat with her to listen to",
    img: "/blogs/16.png",
    link: "https://human-welfare.org/your-parents-showed-you-the-world-and-in-return-you-showed-them-the-old-age-homea-story-by-kritika-sharma-hwct-volunteer/",
  },
  {
    title:
      "“I am always learning new things at the farm, but I want to learn more” – a synopsis of Anjali, a young girl from Atone village",
    description:
      "It was just a usual day for HWCT, distributing education kits to the students of a school in Atone village, Maharashtra. After a long day when we were about to leave for Mumbai, a woman in her late 20s or early 30s came up to us saying, “Hi, I heard you help kids with education. I have a daughter who wants to study and work in a good company in Mumbai”. Though we have had heard similar things too many times now, the woman determination just gave us a different vibe. On our way to her house, she told us",
    img: "/blogs/17.jpg",
    link: "https://human-welfare.org/i-am-always-learning-new-things/",
  },
  {
    title: "“HWCT helps in rescuing cat- Alisa”-Kamakshi Verma",
    description:
      "We found an injured cat in the streets of Malvani. It was lying in a puddle of blood, at the very corner of the street, desperate for help, but unable to move. People crowded around her but nobody came forward to help her. Team HWCT decided to rescue her. The cat was probably hit by a car or any heavy vehicle. The cat had severely injured limbs and a deep cut on its neck! We were worried about the cat and doubted whether the cat would be able to survive or not!  Our team decided to take her to the",
    img: "/blogs/1.jpg",
    link: "https://human-welfare.org/hwct-helps-in-rescuing-cat-alisa-kamakshi-verma/",
  },
];
export const goals = [
  {
    label: "No Poverty",
    icon: FaHandsHoldingChild,
  },
  {
    label: "Quality education",
    icon: IoSchoolOutline,
  },
  {
    label: "Clean Water and Save life",
    icon: FaHandHoldingWater,
  },
  {
    label: "Good Health and Care.",
    icon: GiMedicines,
  },
  {
    label: "Partnering for Goals",
    icon: FaHandsHelping,
  },
  {
    label: "Zero Hunger",
    icon: IoFastFoodOutline,
  },
];
export const initiatives = [
  {
    label: "shelter of love",
    link: "https://human-welfare.org/shelter-of-love-naigaon/",
  },
  {
    label: "Project kartavya",
    link: "https://human-welfare.org/project-kartavya/",
  },
  {
    label: "project poshan",
    link: "https://human-welfare.org/project-poshan/",
  },
  {
    label: "project magic box",
    link: "https://human-welfare.org/project-magic-box/",
  },
  {
    label: "animal welfare",
    link: "https://human-welfare.org/animal-welfare/",
  },
  {
    label: "CSR partnership",
    link: "https://human-welfare.org/csr-partnership/",
  },
];
export const quickLinks = [
  { label: "About us", link: "#home" },
  { label: "SDG goals", link: "#goals" },
  { label: "Blog", link: "#blogs" },
  { label: "join our club", link: "#partnership" },
  {
    label: "annual report 2023-24",
    link: "http://human-welfare.org/wp-content/uploads/2024/03/HWCT-ANNUAL-REPORT-2024.pdf",
  },
  { label: "donate", link: "http://human-welfare.org/donation-page/" },
];

export const causes = [
  {
    category: "Women Empowerment",
    icon: GrRestroomWomen,
    icClr: "#FF88BA",
    items: [
      {
        id: "wom1",
        label: "Tailoring cost towards Skill Learning:3000/-(Per Women)",
        amt: 3000,
      },
      {
        id: "wom2",
        label: "Fabrics for Rags to Bags Initiative:2000/-(200 Bags)",
        amt: 2000,
      },
      {
        id: "wom3",
        label:
          "Operational Expenses for the initiative: 1500/- (Will help us to cover salaries)",
        amt: 1500,
      },
    ],
  },
  {
    category: "Green Revolution",
    icon: PiTreeEvergreenFill,
    icClr: "#346739",
    items: [
      {
        id: "rev1",
        label: "Garden maintenance serving 180 children: 3000/-",
        amt: 3000,
      },
      {
        id: "rev2",
        label: "Plant the vegetables: 1500/- (Appx. area 200 Sqft)",
        amt: 1500,
      },
      {
        id: "rev3",
        label: "Plantation Drive: 1250/- (will help us plant 10neem trees)",
        amt: 1250,
      },
    ],
  },
  {
    category: "Nutrition",
    icon: IoNutritionOutline,
    icClr: "#346739",
    items: [
      {
        id: "nut1",
        label: "Garden maintenance serves 180childs: 3000/-",
        amt: 3000,
      },
      {
        id: "nut2",
        label: "Fruits and Milk for the Events:5500/-(Event)",
        amt: 5500,
      },
      {
        id: "nut3",
        label: "Medical Camp: 5000/-(will support 50 childs)",
        amt: 5000,
      },
    ],
  },
  {
    category: "Animal Welfare",
    icClr: "#DD9E59",
    icon: FaDog,
    items: [
      {
        id: "res1",
        label: "Feeding Drives for Strays: 3000/- (Appx. 200 strays)",
        amt: 3000,
      },
      {
        id: "res2",
        label: "Neutering/Spaying for strays: 2000/-(Per Cat/Dog)",
        amt: 2000,
      },
      {
        id: "res3",
        label:
          "Operational Expenses: 1500/- (Will help us to cover the salaries)",
        amt: 1500,
      },
    ],
  },

  {
    category: "Education",
    icon: GraduationCap,
    icClr: "#262626",
    items: [
      {
        id: "edu1",
        label: "Note Books and stationery for 180 children: 9000/-",
        amt: 9000,
      },
      {
        id: "edu2",
        label: "Fees for girl child: 4800/- (Per Child / Yearly Fees)",
        amt: 4800,
      },
      {
        id: "edu3",
        label: "Uniforms, shoes and bags: 750/- (Per Child)",
        amt: 750,
      },
    ],
  },
  {
    category: "Digital Learning",
    icon: FaComputer,
    icClr: "gray",
    items: [
      {
        id: "dig1",
        label: "Computers to have the Digital Access: 5000/- (Part Donation)",
        amt: 5000,
      },
      {
        id: "dig2",
        label: "Digital Learning: 1500/- (Per Child / Yearly Fees)",
        amt: 1500,
      },
      {
        id: "dig3",
        label:
          "Operational Expenses: 1500/- (Will help us to cover the salaries)",
        amt: 1500,
      },
    ],
  },
];
