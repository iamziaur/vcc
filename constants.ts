import { Seat, Contact, Translation, SeatStatsData } from './types';

export const TRANSLATIONS: Translation = {
  title: { bn: 'চাঁপাইনবাবগঞ্জ জেলা ভোট কেন্দ্র', en: 'Chapainawabganj District Voting Centers' },
  built_for_police: { bn: 'অ্যাপটি চাঁপাইনবাবগঞ্জ পুলিশ এর জন্য নির্মিত', en: 'This app is built for Chapainawabganj Police' },
  total_centers: { bn: 'মোট ভোট সেন্টার', en: 'Total Voting Centers' },
  seat_title: { bn: 'আসন ভিত্তিক তালিকা', en: 'Seat Wise List' },
  emergency: { bn: 'জরুরি যোগাযোগ', en: 'Emergency Contacts' },
  guidelines: { bn: 'ম্যাপ ব্যবহারের নির্দেশনা', en: 'Map Instructions' },
  login: { bn: 'প্রবেশ করুন', en: 'Login' },
  password: { bn: 'পাসওয়ার্ড দিন', en: 'Enter Password' },
  wrong_pass: { bn: 'ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।', en: 'Wrong Password! Try again.' },
  too_many_attempts: { 
    bn: '৩ বার ভুল পাসওয়ার্ড দিয়েছেন! অ্যাপ কারিগরি সহায়তায় mrm web app +8801792219012 এর সাথে যোগাযোগ করুন।', 
    en: 'Failed 3 times! Contact mrm web app +8801792219012 for technical support.' 
  },
  logout: { bn: 'লগআউট', en: 'Logout' },
  help: { bn: 'হেল্পলাইন', en: 'Helpline' },
  guideline_1: { bn: 'ম্যাপ বড় করে দেখতে ডান পাশের ফুল স্ক্রিন বাটন [ ⛶ ] এ ক্লিক করুন।', en: 'Click the full screen button [ ⛶ ] on the right to enlarge the map.' },
  guideline_2: { bn: 'আপনার নির্দিষ্ট ইউনিয়ন খুঁজতে ম্যাপের উপরের বাম কোণের মেনু বাটন [ ◧ ] এ ক্লিক করুন।', en: 'Click the menu button [ ◧ ] on the top left to find your union.' },
  guideline_3: { bn: 'পরিষ্কারভাবে দেখতে জুম ইন করুন।', en: 'Zoom in for a clearer view of locations.' },
  tech_support: { bn: 'অ্যাপ কারিগরি সহায়তায়', en: 'App Tech Support' },
  guidance: { bn: 'সার্বিক দিকনির্দেশনায়', en: 'Under Guidance Of' },
  voter_summary: { bn: 'ভোটার ও ভোটকেন্দ্রের সারসংক্ষেপ', en: 'Voter & Center Summary' },
  upazila: { bn: 'উপজেলা', en: 'Upazila' },
  municipality: { bn: 'পৌরসভা', en: 'Municipality' },
  unions: { bn: 'ইউনিয়ন', en: 'Unions' },
  vote_rooms: { bn: 'ভোটকক্ষ', en: 'Voting Rooms' },
  permanent: { bn: 'স্থায়ী', en: 'Permanent' },
  temporary: { bn: 'অস্থায়ী', en: 'Temporary' },
  voter_stats: { bn: 'ভোটার পরিসংখ্যান', en: 'Voter Statistics' },
  male: { bn: 'পুরুষ', en: 'Male' },
  female: { bn: 'মহিলা', en: 'Female' },
  hijra: { bn: 'তৃতীয় লিঙ্গ', en: 'Third Gender' },
  total_voters: { bn: 'মোট ভোটার', en: 'Total Voters' },
  centers: { bn: 'ভোটকেন্দ্র', en: 'Centers' },
  election_date: { bn: 'নির্বাচনের তারিখ', en: 'Election Date' },
  secret_rooms: { bn: 'গোপন কক্ষ', en: 'Secret Rooms' },
  district_total: { bn: 'চাঁপাইনবাবগঞ্জ জেলা (সর্বমোট)', en: 'Chapainawabganj District (Total)' },
  favorites: { bn: 'আমার ইউনিয়ন/থানা', en: 'My Union/Thana' },
  no_favorites: { bn: '⭐ প্রিয় তালিকায় থানা বা ইউনিয়ন যোগ করা হয়নি', en: 'No Thana or Union added to favorites' },
  app_usage_header: { bn: 'অ্যাপ ব্যবহার নির্দেশনা :', en: 'App Usage Instructions:' },
  map_usage_tip: { 
    bn: 'আপনার প্রয়োজনীয় থানা বা ইউনিয়ন গুলো আসন 1,2,3 থেকে খুঁজুন। পছন্দ হলে ⭐ Favorite বাটনে ক্লিক করে হোমে যোগ করুন। এরপর [আমার সেন্টার] হোম পেজে থেকেই আপনার ⭐প্রিয় তালিকায় যোগ করা থানা বা ইউনিয়নের নাম দেখতে পাবেন। নামের উপর ক্লিক করলে আপনি সরাসরি গুগল ম্যাপে চলে যাবেন এবং আপনার কাঙ্ক্ষিত সেবা পেতে পারবেন।\n\n📌 ম্যাপ ব্যবহার নির্দেশনা\nম্যাপের লিংক ওপেন করার পর উপরের বাম কোণের মেনু বাটন [ ◧ ] এ ক্লিক করে আপনার কাঙ্ক্ষিত ইউনিয়ন বা সেন্টারটি নির্বাচন করুন। (বিশেষ করে চাঁপাইনবাবগঞ্জ-২ আসনের থানাগুলোর ক্ষেত্রে এটি ব্যবহার করা আবশ্যক)।', 
    en: 'Find your required Thana or Unions from Seat 1, 2, or 3. Click the ⭐ Favorite button to add them to home. Then go to the [My Center] option to see your favorited Thana or Union names. Clicking the name will take you directly to Google Maps.\n\n📌 Map Usage Instructions\nAfter opening the map link, click the menu button [ ◧ ] on the top left to select your desired union or center (especially mandatory for Seat-2 Thanas).' 
  },
  district_stats: { bn: 'জেলা পরিসংখ্যান', en: 'District Statistics' },
  offline_warning: { bn: 'অফলাইন সতর্কতা', en: 'Offline Warning' },
  offline_detail: { 
    bn: 'আপনি অফলাইনে আছেন। অফলাইনে থাকলেও এই অ্যাপের সকল তথ্য দেখতে পারবেন। তবে গুগল ম্যাপে ভোট কেন্দ্রের লোকেশান দেখতে দয়াকরে ইন্টারনেট সংযোগ সচল করুন।', 
    en: 'You are offline. You can still access all information in this app. However, please enable internet to view locations on Google Maps.' 
  },
  copyright: { 
    bn: '© ২০২৬ চাঁপাইনবাবগঞ্জ জেলা পুলিশ', 
    en: '© 2026 Chapainawabganj District Police' 
  },
  support_text: { bn: '[MRM WEB APP]', en: '[MRM WEB APP]' },
  install_app: { bn: 'অ্যাপটি আপনার ডিভাইসে ইন্সটল করুন। ঐচ্ছিক Optional', en: 'Install this app on your device. Optional' },
  install_detail: { bn: '', en: '' },
  install_btn: { bn: 'ইনসটল', en: 'Install' },
  favorites_tip: { 
    bn: 'আপনার প্রয়োজনীয় থানা বা ইউনিয়ন গুলো আসন ১, ২, ৩ থেকে ⭐ ক্লিক করে যোগ করুন।', 
    en: 'Add your required Thana or Unions from Seat 1, 2, or 3 by clicking ⭐.' 
  },
  all_seats: { bn: 'সকল আসন', en: 'All Seats' },
  seat_prefix: { bn: 'আসন', en: 'Seat' },
  chapai: { bn: 'চাঁপাইনবাবগঞ্জ', en: 'Chapainawabganj' }
};

export const DISTRICT_TOTAL_STATS: SeatStatsData = {
  upazilas: 5,
  municipality: 4,
  unions: 45,
  roomsPermanent: 2592,
  roomsTemporary: 149,
  roomsTotal: 2741,
  secretRooms: 1695,
  votersMale: 712305,
  votersFemale: 706365,
  votersHijra: 1,
  votersTotal: 1418671
};

export const SEATS: Seat[] = [
  {
    id: 1,
    name: 'চাঁপাইনবাবগঞ্জ ১',
    nameEn: 'Chapainawabganj 1',
    centersCount: 159,
    detailedStats: {
      upazilas: 1,
      municipality: 1,
      unions: 15,
      roomsPermanent: 872,
      roomsTemporary: 64,
      roomsTotal: 936,
      votersMale: 250215,
      votersFemale: 243605,
      votersHijra: 0,
      votersTotal: 493820
    },
    areas: [
      { id: '1-0', name: 'শিবগঞ্জ পৌরসভা', nameEn: 'Shibganj Municipality', url: 'https://www.google.com/maps/d/u/1/embed?mid=1hYK8kxP6HUhZbgbIjAkCWrPKKM4U2bQ' },
      { id: '1-1', name: 'শাহাবাজপুর ইউনিয়ন', nameEn: 'Shahabazpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1UWicD5_UDd4EjDppUqAji3paK1dMGaM' },
      { id: '1-2', name: 'দাইপুখুরিয়া ইউনিয়ন', nameEn: 'Daipukhuria Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1ej884fJ97RkyVDL4NwBhQsiihT3xFEA' },
      { id: '1-3', name: 'মোবারকপুর ইউনিয়ন', nameEn: 'Mobarakpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1rKGA0GJqHSROxcVrIeg6V7uh7t_cmJA' },
      { id: '1-4', name: 'চককীর্তি ইউনিয়ন', nameEn: 'Chakkirti Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1TVW73mDvyz7gsilql8iWbNr8hZStDGU' },
      { id: '1-5', name: 'কানসাট ইউনিয়ন', nameEn: 'Kansat Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1tITfWmvyUDsI8KXV9ROHtGW0ioKeqhQ' },
      { id: '1-6', name: 'শ্যামপুর ইউনিয়ন', nameEn: 'Shyampur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1OtLaxOrkDOz0P-6MuJyddPE7hNTD9dg' },
      { id: '1-7', name: 'বিনোদপুর ইউনিয়ন', nameEn: 'Binodpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1_qCQ3CwjCZYUdG_wAXJBnGuxtjK73XI' },
      { id: '1-8', name: 'দুর্লভপুর ইউনিয়ন', nameEn: 'Durlabhpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1QzvL7PdIcyXjLcZJvSqRAFUvR97p_MA' },
      { id: '1-9', name: 'মনাকষা ইউনিয়ন', nameEn: 'Monakasha Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1xa8umeM_10aQ87NJkc9gtuIGmb_t_g8' },
      { id: '1-10', name: 'পাঁকা ইউনিয়ন', nameEn: 'Panka Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1uZVYsxvxqAbbNUZYmwcanm4tSr4SmM0' },
      { id: '1-11', name: 'উজিরপুর ইউনিয়ন', nameEn: 'Uzirpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1XScgWxDwbjHuB0CaMtA6VCz6Ysaotw8' },
      { id: '1-12', name: 'নয়ালাভাঙ্গা ইউনিয়ন', nameEn: 'Nayala Banga Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1QCn74psuIzBwE4-W5viVe4oq9ZQdN1A' },
      { id: '1-13', name: 'ধাইনগর ইউনিয়ন', nameEn: 'Dhainagar Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1Zqft3maF117ZDliRjDZ8B94DDTeHnBw' },
      { id: '1-14', name: 'ঘোড়াপাখিয়া ইউনিয়ন', nameEn: 'Ghorapakhia Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1su9tHiPW9b2TGKAgS09qBO68Zwi2A5c' },
      { id: '1-15', name: 'ছত্রাজিতপুর ইউনিয়ন', nameEn: 'Chhatrajitpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1P6d3wMWvjg69Qnj-wBgiEBpksZxZmhg' },
    ]
  },
  {
    id: 2,
    name: 'চাঁপাইনবাবগঞ্জ ২',
    nameEn: 'Chapainawabganj 2',
    centersCount: 184,
    detailedStats: {
      upazilas: 3,
      municipality: 2,
      unions: 16,
      roomsPermanent: 831,
      roomsTemporary: 46,
      roomsTotal: 877,
      secretRooms: 823,
      votersMale: 225442,
      votersFemale: 230929,
      votersHijra: 1,
      votersTotal: 456372
    },
    areas: [
      { id: '2-1', name: 'নাচোল থানা', nameEn: 'Nachole Thana', url: 'https://www.google.com/maps/d/u/1/embed?mid=11AMDOLBbJnHchlVOATCDWqTQ6vevFoU' },
      { id: '2-2', name: 'গোমস্তাপুর থানা', nameEn: 'Gomostapur Thana', url: 'https://www.google.com/maps/d/u/1/embed?mid=1GQloFi8nGuKX7baApzOgDZ0wJKVyKqU' },
      { id: '2-3', name: 'ভোলাহাট থানা', nameEn: 'Volahat Thana', url: 'https://www.google.com/maps/d/u/1/embed?mid=1-qcNmBJRQUt8257LIptl3k-4uvWqQgs' },
    ]
  },
  {
    id: 3,
    name: 'চাঁপাইনবাবগঞ্জ ৩',
    nameEn: 'Chapainawabganj 3',
    centersCount: 172,
    detailedStats: {
      upazilas: 1,
      municipality: 1,
      unions: 14,
      roomsPermanent: 889,
      roomsTemporary: 39,
      roomsTotal: 928,
      secretRooms: 872,
      votersMale: 236648,
      votersFemale: 231831,
      votersHijra: 0,
      votersTotal: 468479,
      electionDate: '১২ ফেব্রুয়ারি, ২০২৬',
      electionDateEn: '12 February, 2026'
    },
    areas: [
      { id: '3-0', name: 'চাঁপাইনবাবগঞ্জ পৌরসভা', nameEn: 'Sadar Municipality', url: 'https://www.google.com/maps/d/u/0/embed?mid=1qkM_nGSk4ER2M3Rw3USjj3sVJG_D_l0' },
      { id: '3-1', name: 'বালিয়াডাঙ্গা ইউনিয়ন', nameEn: 'Baliadanga Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=142CPpgVWP_Il0LZUXRYX7Of7Kfy8D4' },
      { id: '3-2', name: 'গোবরাতলা ইউনিয়ন', nameEn: 'Gobratala Union', url: 'https://www.google.com/maps/d/u/2/embed?mid=1K4q14cGGROHwLyPtQI9UBj92XNXU1YI' },
      { id: '3-3', name: 'ঝিলিম ইউনিয়ন', nameEn: 'Jhilim Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1tmHvqfNwf0I6uQbZaHQVH1J7GtWNVy4' },
      { id: '3-4', name: 'বারোঘরিয়া ইউনিয়ন', nameEn: 'Baroghoria Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=18lsj2NdGO7rP9ztQjzrSWIwvKOQHqCI' },
      { id: '3-5', name: 'মহারাজপুর ইউনিয়ন', nameEn: 'Maharajpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1LScoS6AcoLEdBwNbv5TiVje0A6Ph7V8' },
      { id: '3-6', name: 'রাণীহাটি ইউনিয়ন', nameEn: 'Ranahati Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=14FKIctLvvFetQe-JJcEUJ1-PZme-mT4' },
      { id: '3-7', name: 'চরঅনুপ নগর ইউনিয়ন', nameEn: 'Charanup Nagar Union', url: 'https://www.google.com/maps/d/u/2/embed?mid=1HGmg4lxshTqIDi4n4nN330uIghGULI0' },
      { id: '3-8', name: 'দেবীনগর ইউনিয়ন', nameEn: 'Debinagar Union', url: 'https://www.google.com/maps/d/u/2/embed?mid=1bK1Kq-UtyvRzOfNU5EubiQBpJmIznSY' },
      { id: '3-9', name: 'আলাতুলি ইউনিয়ন', nameEn: 'Alatuli Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1s7hLegfNZ6mrZi37fdQiZW30IjFTyDE' },
      { id: '3-10', name: 'শাহজাহানপুর ইউনিয়ন', nameEn: 'Shahjahanpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1cBOxPL1uSO43jNHMiPoUmsxrILYsNjE' },
      { id: '3-11', name: 'ইসলামপুর ইউনিয়ন', nameEn: 'Islampur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1PO6pWrM3Y9FLC2JGpmsU5CxXJnwP7Fg' },
      { id: '3-12', name: 'চরবাগডাঙ্গা ইউনিয়ন', nameEn: 'Charbagdanga Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=11RnOaWBXsJl6EkVKwmaF9-3ZmEcrFOw' },
      { id: '3-13', name: 'নারায়নপুর ইউনিয়ন', nameEn: 'Narayanpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1TfPcWpqr-kZg06W3BxjIoW0sF8eqhfY' },
      { id: '3-14', name: 'সুন্দরপুর ইউনিয়ন', nameEn: 'Sundarpur Union', url: 'https://www.google.com/maps/d/u/1/embed?mid=1t-4hUF3VMjtt-MQy1SJjXFPG9PLPO94' },
    ]
  }
];

export const EMERGENCY_CONTACTS: Contact[] = [
  { name: 'কন্ট্রোল রুম, পুলিশ সুপার কার্যালয়', nameEn: 'Control Room, SP Office', designation: 'চাঁপাইনবাবগঞ্জ', designationEn: 'Chapainawabganj', phone: '+8801320126498' },
  { name: 'ডিউটি অফিসার', nameEn: 'Duty Officer', designation: 'সদর মডেল থানা', designationEn: 'Sadar Model Thana', phone: '+8801320125574' },
  { name: 'ডিউটি অফিসার', nameEn: 'Duty Officer', designation: 'শিবগঞ্জ থানা', designationEn: 'Shibganj Thana', phone: '+8801320125600' },
  { name: 'ডিউটি অফিসার', nameEn: 'Duty Officer', designation: 'নাচোল থানা', designationEn: 'Nachole Thana', phone: '+8801320125652' },
  { name: 'ডিউটি অফিসার', nameEn: 'Duty Officer', designation: 'গোমস্তাপুর থানা', designationEn: 'Gomostapur Thana', phone: '+8801320125626' },
  { name: 'ডিউটি অফিসার', nameEn: 'Duty Officer', designation: 'ভোলাহাট থানা', designationEn: 'Volahat Thana', phone: '+8801320125678' },
];

export const GUIDANCE_OFFICERS: Contact[] = [
  { name: 'গৌতম কুমার বিশ্বাস', nameEn: 'Gautam Kumar Biswas', designation: 'পুলিশ সুপার, চাঁপাইনবাবগঞ্জ', designationEn: 'Police Super, Chapainawabganj', phone: '+8801320125500', link: 'https://police.chapainawabganj.gov.bd/pages/officers/%E0%A6%97%E0%A7%87%E0%A7%97%E0%A6%A4%E0%A6%AE-%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B8-43e0c4-697f4ad7a31054345f1923e6', isOfficer: true },
  { name: 'মোঃ ইয়াসির আরাফাত', nameEn: 'Md. Yasir Arafat', designation: 'অতিরিক্ত পুলিশ সুপার (সদর সার্কেল)', designationEn: 'Addl. SP (Sadar Circle)', phone: '01320125544', link: 'https://police.chapainawabganj.gov.bd/pages/officers/%E0%A6%AE%E0%A7%8B%E0%A6%83-%E0%A6%87%E0%A7%9F%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%B0-%E0%A6%86%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BE%E0%A6%A4-fa0816-697f4b53a31054345f194bdd', isOfficer: true },
  { name: 'মোঃ হাসান তারেক', nameEn: 'Md. Hasan Tareq', designation: 'অতিরিক্ত পুলিশ সুপার (গোমস্তাপুর সার্কেল)', designationEn: 'Addl. SP (Gomostapur Circle)', phone: '01320125549', link: 'https://police.chapainawabganj.gov.bd/pages/officers/%E0%A6%9C%E0%A6%A8%E0%A6%BE%E0%A6%AC-%E0%A6%AE%E0%A7%8B%E0%A6%83-%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%A8-%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%95-8f3a87-697f4aaea31054345f19165e', isOfficer: true },
];
