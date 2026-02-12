import React, { useState, useEffect, useCallback } from 'react';
import { TRANSLATIONS, SEATS, EMERGENCY_CONTACTS, GUIDANCE_OFFICERS, DISTRICT_TOTAL_STATS } from './constants';
import { Language, Seat, SeatStatsData } from './types';

// --- Live Status Component (Centered & Large) ---

const LiveStatus: React.FC<{ lang: Language }> = ({ lang }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    const timeStr = `${h}:${m}:${s}`;
    return lang === 'bn' ? timeStr.replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[parseInt(d)]) : timeStr;
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 mb-6 animate-in zoom-in duration-700">
      {/* Central Interactive Card */}
      <div className="glass-card w-full max-w-[340px] sm:max-w-md p-8 rounded-[3rem] shadow-2xl border-4 border-bd-green/20 dark:border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Enlarge & Position Logo as Background */}
        <img 
          src="https://election.prothomalo.com/web-theme/prothomalo.svg" 
          alt="Election Logo" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 sm:h-48 opacity-[0.07] dark:opacity-[0.1] pointer-events-none grayscale dark:invert transition-all duration-1000"
        />

        {/* Background Glow Decor */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-bd-green/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-bd-red/5 rounded-full blur-3xl"></div>

        {/* Large Digital Clock */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter drop-shadow-sm mb-6 font-mono">
            {formatTime(time)}
          </div>
          
          {/* Result Link Section */}
          <div className="flex flex-col gap-3 w-full mb-4">
            {/* Link 1: EC Website */}
            <a 
              href="http://103.183.38.66:81/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-lg hover:border-bd-green hover:shadow-bd-green/10 transition-all active:scale-95"
            >
              <div className="flex items-center gap-2 text-center">
                <i className="fa-solid fa-square-poll-vertical text-bd-green text-lg"></i>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-700 dark:text-slate-300 leading-tight">
                  {lang === 'bn' 
                    ? 'নির্বাচনের রেজাল্ট পেতে বাংলাদেশ নির্বাচন কমিশনের ওয়েবসাইট ভিজিট করুন' 
                    : 'Visit Bangladesh Election Commission website for results'}
                </span>
              </div>
              <span className="text-[8px] font-bold text-bd-green/60 tracking-widest uppercase">103.183.38.66:81</span>
            </a>

            {/* Link 2: Gonovote Result */}
            <a 
              href="http://103.183.38.66:81/gonovote/result" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-lg hover:border-bd-red hover:shadow-bd-red/10 transition-all active:scale-95"
            >
              <div className="flex items-center gap-2 text-center">
                <i className="fa-solid fa-users-viewfinder text-bd-red text-lg"></i>
                <span className="text-[10px] sm:text-[11px] font-black text-slate-700 dark:text-slate-300 leading-tight">
                  {lang === 'bn' 
                    ? 'গণ ভোটের রেজাল্ট পেতে ভিজিট করুন' 
                    : 'Visit to get Public Vote results'}
                </span>
              </div>
              <span className="text-[8px] font-bold text-bd-red/60 tracking-widest uppercase">/gonovote/result</span>
            </a>
          </div>

          <p className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
            {lang === 'bn' ? 'বাংলাদেশ স্ট্যান্ডার্ড টাইম' : 'Bangladesh Standard Time'}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Shared Utility Components ---

const ContactRow: React.FC<{ contact: any; lang: Language; isLarge?: boolean }> = ({ contact, lang, isLarge }) => {
  const name = lang === 'bn' ? contact.name : contact.nameEn;
  const des = lang === 'bn' ? contact.designation : contact.designationEn;
  
  return (
    <div className={`glass-card rounded-2xl flex items-center justify-between shadow-md border ${isLarge ? 'p-4 border-l-4 border-l-bd-green' : 'p-2'}`}>
      <div className="flex-1 pr-3 overflow-hidden">
        <h4 className={`font-black text-slate-900 dark:text-slate-100 leading-tight truncate ${isLarge ? 'text-sm sm:text-base' : 'text-[10px]'}`}>
          {name}
        </h4>
        <p className={`font-bold text-slate-500 dark:text-slate-400 italic leading-tight truncate mt-0.5 ${isLarge ? 'text-[11px] sm:text-xs' : 'text-[8px]'}`}>
          {des}
        </p>
        {isLarge && (
           <p className="text-bd-green font-black text-xs mt-1 tabular-nums">{contact.phone}</p>
        )}
      </div>
      <div className="flex gap-2 shrink-0">
        {contact.link && (
          <a href={contact.link} target="_blank" rel="noopener noreferrer" className={`${isLarge ? 'w-10 h-10' : 'w-7 h-7'} rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-800 transition-transform active:scale-90 shadow-sm`}>
            <i className={`fa-solid fa-circle-info ${isLarge ? 'text-xs' : 'text-[9px]'}`}></i>
          </a>
        )}
        <a href={`tel:${contact.phone}`} className={`${isLarge ? 'w-12 h-12 bg-bd-green text-white shadow-bd-green/20' : 'w-7 h-7 bg-green-50 text-bd-green'} rounded-full flex items-center justify-center border border-green-100 dark:border-green-800 transition-all active:scale-95 shadow-lg`}>
          <i className={`fa-solid fa-phone-alt ${isLarge ? 'text-lg' : 'text-[9px]'}`}></i>
        </a>
      </div>
    </div>
  );
};

const SummaryBox: React.FC<{ stats: SeatStatsData; centersCount: number; lang: Language }> = ({ stats, centersCount, lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  const s = stats;
  const formatNum = (num: number) => num.toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US');

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm">
      <div className="bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
        <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
          <i className="fa-solid fa-chart-line text-bd-green"></i>
          {t('voter_summary')}
        </span>
      </div>
      
      <div className="p-2 space-y-2">
        <div className="flex gap-1">
          {s.upazilas !== undefined && (
            <div className="flex-1 bg-slate-50/50 dark:bg-slate-800/30 p-1 rounded-lg border border-slate-100 dark:border-slate-800 text-center">
              <p className="text-[7px] font-bold text-slate-400 leading-none mb-0.5">{t('upazila')}</p>
              <p className="text-[10px] font-black text-slate-800 dark:text-white leading-none">{formatNum(s.upazilas)}</p>
            </div>
          )}
          {s.municipality !== undefined && s.municipality > 0 && (
            <div className="flex-1 bg-slate-50/50 dark:bg-slate-800/30 p-1 rounded-lg border border-slate-100 dark:border-slate-800 text-center">
              <p className="text-[7px] font-bold text-slate-400 leading-none mb-0.5">{t('municipality')}</p>
              <p className="text-[10px] font-black text-slate-800 dark:text-white leading-none">{formatNum(s.municipality)}</p>
            </div>
          )}
          <div className="flex-1 bg-slate-50/50 dark:bg-slate-800/30 p-1 rounded-lg border border-slate-100 dark:border-slate-800 text-center">
            <p className="text-[7px] font-bold text-slate-400 leading-none mb-0.5">{t('unions')}</p>
            <p className="text-[10px] font-black text-slate-800 dark:text-white leading-none">{formatNum(s.unions)}</p>
          </div>
          <div className="flex-1 bg-bd-green/5 p-1 rounded-lg border border-bd-green/10 text-center">
            <p className="text-[7px] font-bold text-bd-green/60 leading-none mb-0.5">{t('centers')}</p>
            <p className="text-[10px] font-black text-bd-green leading-none">{formatNum(centersCount)}</p>
          </div>
        </div>

        <div className="bg-slate-50/20 dark:bg-slate-800/10 rounded-lg border border-slate-50 dark:border-slate-800 overflow-hidden">
          <div className="px-2 py-1 space-y-1">
            <div className="flex justify-between items-center text-[9px] font-bold leading-none">
              <span className="text-slate-500">{t('male')}</span>
              <span className="text-slate-800 dark:text-slate-100 font-black">{formatNum(s.votersMale)}</span>
            </div>
            <div className="flex justify-between items-center text-[9px] font-bold leading-none border-t border-slate-50 dark:border-slate-800 pt-1">
              <span className="text-slate-500">{t('female')}</span>
              <span className="text-slate-800 dark:text-slate-100 font-black">{formatNum(s.votersFemale)}</span>
            </div>
            {s.votersHijra > 0 && (
              <div className="flex justify-between items-center text-[9px] font-bold leading-none border-t border-slate-50 dark:border-slate-800 pt-1">
                <span className="text-slate-500">{t('hijra')}</span>
                <span className="text-slate-800 dark:text-slate-100 font-black">{formatNum(s.votersHijra)}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-[10px] font-black text-bd-red pt-1 border-t border-dashed border-bd-red/20 mt-1">
              <span>{t('total_voters')}</span>
              <span>{formatNum(s.votersTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PWA Installation Banner ---

const InstallBanner: React.FC<{ deferredPrompt: any; onInstall: () => void; lang: Language }> = ({ deferredPrompt, onInstall, lang }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!deferredPrompt || !isVisible) return null;
  const t = (key: string) => TRANSLATIONS[key][lang];
  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-bd-green text-white p-3 rounded-2xl shadow-2xl border-2 border-white/20 flex items-center justify-between gap-2 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-bd-red rounded-full flex items-center justify-center text-[10px] border-2 border-white shadow-md z-10"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h4 className="text-[11px] font-black leading-tight flex-1 pr-3">{t('install_app')}</h4>
        <button 
          onClick={onInstall}
          className="bg-white text-bd-green px-4 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-lg active:scale-95 transition shrink-0"
        >
          {t('install_btn')}
        </button>
      </div>
    </div>
  );
};

// --- Map Card Component ---

const MapCard: React.FC<{ 
  name: string; 
  url: string; 
  lang: Language; 
  isFavorite: boolean; 
  onToggleFavorite: () => void;
}> = ({ name, url, lang, isFavorite, onToggleFavorite }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col h-full group relative">
      <button 
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite();
        }}
        className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isFavorite ? 'bg-yellow-400 text-slate-900 shadow-md scale-110' : 'bg-black/10 text-white hover:bg-black/20'}`}
      >
        <i className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-star text-[10px]`}></i>
      </button>

      <a href={url} target="_blank" rel="noopener noreferrer" className="flex-1 p-3 flex flex-col items-center text-center justify-center gap-2 group-active:scale-95 transition-transform">
        <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-bd-red group-hover:scale-110 transition-transform shadow-inner">
          <i className="fa-solid fa-map-location-dot text-lg"></i>
        </div>
        <h4 className="text-[10px] sm:text-xs font-black text-slate-800 dark:text-slate-100 leading-tight">
          {name}
        </h4>
        <span className="text-[7px] font-black text-bd-green uppercase tracking-widest mt-auto">
          {lang === 'bn' ? 'ম্যাপ দেখুন' : 'VIEW MAP'}
        </span>
      </a>
    </div>
  );
};

// --- Login Gate Component ---

const LoginGate: React.FC<{ 
  onLogin: (pass: string) => void; 
  error: string; 
  lang: Language; 
  setLang: (l: Language) => void;
  isDark: boolean; 
  toggleDark: () => void; 
  failedCount: number;
  deferredPrompt: any;
  onInstall: () => void;
}> = ({ onLogin, error, lang, setLang, isDark, toggleDark, failedCount, deferredPrompt, onInstall }) => {
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const t = (key: string) => TRANSLATIONS[key][lang];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 bg-slate-50 dark:bg-slate-950 overflow-y-auto pt-16 pb-12 relative">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button 
          onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} 
          className="px-2 py-0.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded text-[9px] font-black border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 transition-all"
        >
          {lang === 'bn' ? 'EN' : 'বাং'}
        </button>
        <button 
          onClick={toggleDark} 
          className="w-6 h-6 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 transition-all"
        >
          {isDark ? <i className="fa-solid fa-sun text-yellow-500 text-[9px]"></i> : <i className="fa-solid fa-moon text-slate-400 text-[9px]"></i>}
        </button>
      </div>

      <div className="max-w-md w-full space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="glass-card p-6 rounded-3xl shadow-xl border-t-8 border-bd-green text-center relative overflow-hidden">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-white flex items-center justify-center p-1">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Bangladesh_Police_Emblem.svg" 
              alt="Bangladesh Police Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h2 className="text-lg font-black mb-1 text-slate-900 dark:text-white leading-tight">{t('title')}</h2>
          <p className="text-[9px] font-black text-bd-green mb-6 px-4 uppercase tracking-wider">{t('built_for_police')}</p>
          
          <form onSubmit={(e) => { e.preventDefault(); onLogin(pass); }}>
            <div className="relative mb-4">
              <input 
                type={showPass ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                disabled={failedCount >= 3}
                className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-bd-green focus:outline-none transition text-center text-lg font-black tracking-[0.2em] text-slate-900 dark:text-white"
                placeholder="••••"
                autoFocus
              />
              <button 
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-bd-green transition px-2 py-1"
              >
                <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
            
            {error && (
              <div className="mb-4 animate-shake">
                {failedCount >= 3 ? (
                  <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-3 text-left">
                    <p className="text-red-700 dark:text-red-400 text-[10px] font-black mb-3 text-center leading-snug px-1">
                      {lang === 'bn' 
                        ? 'আপনি ৩ বার ভুল পাসওয়ার্ড দিয়েছেন। পাসওয়ার্ড জানতে কল করুন:' 
                        : 'You have entered the wrong password 3 times. To get the password, please call:'}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      <a href="tel:+8801765112560" className="flex items-center justify-between bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-red-100 dark:border-red-900 shadow-sm active:scale-95 transition group">
                        <div className="flex flex-col flex-1 min-w-0 pr-2">
                           <span className="text-[10px] font-black text-slate-900 dark:text-white group-hover:text-bd-green transition truncate">
                             {lang === 'bn' ? 'মোঃ শাকিল হোসেন' : 'Md. Shakil Hossain'}
                           </span>
                           <span className="text-[7px] font-bold text-slate-500 dark:text-slate-400 leading-tight">
                             {lang === 'bn' ? 'বিপি-৯৪২৩২৪৬৭৩৫, এসআই (নিঃ), সদর থানা' : 'BP-9423246735, SI, Sadar Thana'}
                           </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-black text-bd-green uppercase">{lang === 'bn' ? 'কল করুন' : 'Call Now'}</span>
                          <div className="w-8 h-8 rounded-full bg-bd-green text-white flex items-center justify-center shadow-md shrink-0">
                            <i className="fa-solid fa-phone text-[10px]"></i>
                          </div>
                        </div>
                      </a>
                      <a href="tel:+8801792219012" className="flex items-center justify-between bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-red-100 dark:border-red-900 shadow-sm active:scale-95 transition group">
                        <div className="flex flex-col flex-1 min-w-0 pr-2">
                           <span className="text-[10px] font-black text-slate-900 dark:text-white group-hover:text-bd-red transition truncate">
                             {lang === 'bn' ? 'MRM WEB' : 'MRM WEB'}
                           </span>
                           <span className="text-[7px] font-bold text-slate-500 dark:text-slate-400 leading-tight">
                             {lang === 'bn' ? 'কারিগরি সহায়তা' : 'Technical Support'}
                           </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-black text-bd-red uppercase">{lang === 'bn' ? 'কল করুন' : 'Call Now'}</span>
                          <div className="w-8 h-8 rounded-full bg-bd-red text-white flex items-center justify-center shadow-md shrink-0">
                            <i className="fa-solid fa-headset text-[10px]"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="text-red-600 text-[9px] font-black p-2 bg-red-50 rounded-lg">
                    {error}
                  </p>
                )}
              </div>
            )}

            <button 
              type="submit" 
              disabled={failedCount >= 3}
              className={`w-full bg-bd-green text-white font-black py-3 rounded-xl shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${failedCount >= 3 ? 'opacity-50 grayscale' : ''}`}
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              {t('login')}
            </button>
          </form>
        </div>

        <div className="space-y-3">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">{t('district_stats')}</h3>
          <SummaryBox stats={DISTRICT_TOTAL_STATS} centersCount={515} lang={lang} />
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm border-l-4 border-l-bd-red">
          <h3 className="text-[11px] font-black text-bd-red uppercase tracking-tight flex items-center gap-1.5 mb-2">
            <i className="fa-solid fa-circle-info"></i>
            {t('app_usage_header')}
          </h3>
          <p className="text-[10px] font-bold text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {t('map_usage_tip')}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-2">{t('guidance')}</h3>
          <div className="grid grid-cols-1 gap-2">
            {GUIDANCE_OFFICERS.map((c, i) => <ContactRow key={i} contact={c} lang={lang} />)}
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs sm:text-sm font-black text-[#002147] dark:text-blue-300 uppercase tracking-tighter drop-shadow-sm">
            {t('copyright')}
          </p>
        </div>
      </div>

      <InstallBanner deferredPrompt={deferredPrompt} onInstall={onInstall} lang={lang} />
    </div>
  );
};

// --- Header Component ---

const Header: React.FC<{ 
  lang: Language; 
  setLang: (l: Language) => void; 
  isDark: boolean; 
  toggleDark: () => void; 
  onLogout: () => void;
  activeSeat: number | 'favorites' | null;
  setActiveSeat: (s: number | 'favorites' | null) => void;
}> = ({ lang, setLang, isDark, toggleDark, onLogout, activeSeat, setActiveSeat }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  return (
    <header className="sticky top-0 z-50 w-full bg-bd-green text-white shadow-lg border-b border-white/10 px-3 pt-2 pb-2 transition-all">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1.5">
          <i className="fa-solid fa-vote-yea text-lg text-bd-red"></i>
          <div className="flex flex-col">
            <h1 className="font-bold text-[10px] sm:text-xs leading-tight uppercase tracking-tighter">{t('title')}</h1>
            <p className="text-[8px] opacity-60">{t('chapai')} {lang === 'bn' ? 'জেলা পুলিশ' : 'District Police'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} className="px-2 py-0.5 bg-white/10 rounded text-[9px] font-bold border border-white/10 hover:bg-white/20">
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>
          <button onClick={toggleDark} className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full border border-white/10">
            {isDark ? <i className="fa-solid fa-sun text-yellow-300 text-[9px]"></i> : <i className="fa-solid fa-moon text-slate-100 text-[9px]"></i>}
          </button>
          <button onClick={onLogout} className="w-6 h-6 flex items-center justify-center bg-bd-red rounded-full border border-white/10 shadow-md">
            <i className="fa-solid fa-power-off text-[9px]"></i>
          </button>
        </div>
      </div>

      <div className="flex gap-1.5 items-center overflow-x-auto no-scrollbar pb-1">
         <button 
           onClick={() => setActiveSeat('favorites')} 
           className={`h-7 px-3 rounded-lg text-[10px] font-black uppercase transition-all border whitespace-nowrap flex items-center gap-1 ${activeSeat === 'favorites' ? 'bg-yellow-400 text-slate-900 border-yellow-400 shadow-sm' : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10'}`}
         >
           <i className={`fa-star ${activeSeat === 'favorites' ? 'fa-solid' : 'fa-regular'}`}></i>
           {t('favorites')}
         </button>
         <button 
           onClick={() => setActiveSeat(null)} 
           className={`h-7 px-3 rounded-lg text-[10px] font-black uppercase transition-all border whitespace-nowrap flex items-center gap-1 ${activeSeat === null ? 'bg-white text-bd-green border-white shadow-sm' : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10'}`}
         >
           {t('all_seats')}
         </button>
         {SEATS.map(seat => (
            <button 
              key={seat.id} 
              onClick={() => setActiveSeat(seat.id)} 
              className={`h-7 px-3 rounded-lg text-[10px] font-black transition-all border whitespace-nowrap flex items-center gap-1.5 ${activeSeat === seat.id ? 'bg-bd-red text-white border-bd-red shadow-sm' : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10'}`}
            >
               {t('seat_prefix')} {seat.id.toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US')}
            </button>
         ))}
      </div>
    </header>
  );
};

// --- Main App Implementation ---

export default function App() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('lang') as Language) || 'bn');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('dark') === 'true');
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('auth') === 'true');
  const [loginError, setLoginError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [activeSeat, setActiveSeat] = useState<number | 'favorites' | null>('favorites');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const t = useCallback((key: string) => TRANSLATIONS[key][lang], [lang]);
  const formatNum = useCallback((num: number) => num.toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-US'), [lang]);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const toggleDark = useCallback(() => {
    setIsDark(prev => {
      const newState = !prev;
      localStorage.setItem('dark', String(newState));
      return newState;
    });
  }, []);

  const handleLogin = (password: string) => {
    if (password === 'mrm2022') {
      setIsLoggedIn(true);
      localStorage.setItem('auth', 'true');
      setLoginError('');
    } else {
      const newCount = failedAttempts + 1;
      setFailedAttempts(newCount);
      setLoginError(newCount >= 3 ? t('too_many_attempts') : t('wrong_pass'));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <LoginGate 
        onLogin={handleLogin} 
        error={loginError} 
        lang={lang} 
        setLang={setLang}
        isDark={isDark}
        toggleDark={toggleDark}
        failedCount={failedAttempts} 
        deferredPrompt={deferredPrompt}
        onInstall={handleInstall}
      />
    );
  }

  const filteredSeats = SEATS.map(seat => {
    if (activeSeat === 'favorites') {
      const favAreas = seat.areas.filter(a => favorites.includes(a.id));
      return { ...seat, areas: favAreas };
    }
    if (activeSeat !== null && seat.id !== activeSeat) {
      return { ...seat, areas: [] };
    }
    return seat;
  }).filter(seat => seat.areas.length > 0);

  const showTotalStats = activeSeat === null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-12">
      <Header 
        lang={lang} 
        setLang={setLang} 
        isDark={isDark} 
        toggleDark={toggleDark} 
        onLogout={handleLogout}
        activeSeat={activeSeat}
        setActiveSeat={setActiveSeat}
      />
      
      <main className="max-w-xl mx-auto px-3 pt-4">
        {/* Central Dashboard Widget */}
        <LiveStatus lang={lang} />

        <div className="mb-4 p-3 bg-bd-red text-white rounded-xl shadow-md relative overflow-hidden flex items-center justify-between">
          <div className="relative z-10">
            <h2 className="text-xs font-black mb-0.5">{t('title')}</h2>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold bg-white/20 px-1.5 py-0.5 rounded-md leading-none">{t('total_centers')}: {formatNum(515)}</span>
              <span className="text-[9px] font-black bg-bd-green/80 px-1.5 py-0.5 rounded-md leading-none">{t('chapai')}</span>
            </div>
          </div>
          <i className="fa-solid fa-shield-halved text-4xl opacity-15 rotate-12 absolute -right-2 top-2"></i>
        </div>

        <div className="mb-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm border-l-4 border-l-bd-red animate-in fade-in slide-in-from-top-2 duration-500">
          <h3 className="text-[11px] font-black text-bd-red uppercase tracking-tight flex items-center gap-1.5 mb-2">
            <i className="fa-solid fa-circle-info"></i>
            {t('app_usage_header')}
          </h3>
          <p className="text-[10px] font-bold text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {t('map_usage_tip')}
          </p>
        </div>

        <section>
          <div className="space-y-6">
            {showTotalStats && (
              <div className="animate-in fade-in duration-300">
                 <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-6 h-6 rounded bg-bd-green text-white flex items-center justify-center font-black shadow-sm text-[10px]">
                    <i className="fa-solid fa-earth-asia"></i>
                  </div>
                  <h3 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter">{t('district_total')}</h3>
                </div>
                <SummaryBox stats={DISTRICT_TOTAL_STATS} centersCount={515} lang={lang} />
              </div>
            )}

            {filteredSeats.length > 0 ? (
              filteredSeats.map(seat => (
                <div key={seat.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-6 h-6 rounded bg-bd-red text-white flex items-center justify-center font-black shadow-sm text-[10px]">{formatNum(seat.id)}</div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-black text-slate-900 dark:text-white leading-none">{lang === 'bn' ? seat.name : seat.nameEn}</h3>
                      {activeSeat !== 'favorites' && (
                        <span className="text-[8px] font-black bg-bd-green text-white px-1 rounded leading-tight">{formatNum(seat.centersCount)} {t('centers')}</span>
                      )}
                    </div>
                  </div>
                  
                  {activeSeat !== 'favorites' && seat.detailedStats && (
                    <SummaryBox stats={seat.detailedStats} centersCount={seat.centersCount} lang={lang} />
                  )}

                  <div className="grid grid-cols-2 gap-1.5 mt-2">
                    {seat.areas.map(area => (
                      <MapCard 
                        key={area.id} 
                        name={lang === 'bn' ? area.name : area.nameEn} 
                        url={area.url} 
                        lang={lang} 
                        isFavorite={favorites.includes(area.id)}
                        onToggleFavorite={() => handleToggleFavorite(area.id)}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : activeSeat === 'favorites' ? (
              <div className="text-center py-12 px-6 glass-card rounded-2xl border-dashed border-2">
                <i className="fa-regular fa-star text-4xl text-slate-200 mb-3 block"></i>
                <p className="text-xs font-bold text-slate-400">{t('no_favorites')}</p>
                <p className="text-[9px] mt-2 text-slate-400 italic">{t('favorites_tip')}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-tight">
            <i className="fa-solid fa-phone-volume text-bd-red text-lg"></i>
            {t('emergency')}
          </h3>
          <div className="grid grid-cols-1 gap-3 mb-8">
            {EMERGENCY_CONTACTS.map((c, i) => <ContactRow key={i} contact={c} lang={lang} isLarge={true} />)}
          </div>

          <h3 className="text-[10px] font-black text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest">{t('guidance')}</h3>
          <div className="grid grid-cols-1 gap-1.5">
            {GUIDANCE_OFFICERS.map((c, i) => <ContactRow key={i} contact={c} lang={lang} />)}
          </div>
        </section>
      </main>

      <footer className="mt-12 py-8 px-4 text-center border-t-2 border-[#002147]/10 dark:border-blue-900/30 bg-white dark:bg-slate-900">
        <div className="max-w-md mx-auto space-y-4">
          <div className="inline-block py-2 px-6 border-y-2 border-[#002147]/20 dark:border-blue-800/20">
            <p className="text-sm sm:text-base font-black text-[#002147] dark:text-blue-300 uppercase tracking-tight">
              {t('copyright')}
            </p>
          </div>
          <div className="pt-2">
            <a href="tel:+8801792219012" className="inline-flex items-center gap-1 opacity-40 hover:opacity-100 transition-opacity text-slate-500 dark:text-slate-400 text-[8px] font-bold tracking-tight bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
              <i className="fa-solid fa-headset"></i>
              <span>{t('support_text')}</span>
            </a>
          </div>
        </div>
      </footer>

      <InstallBanner deferredPrompt={deferredPrompt} onInstall={handleInstall} lang={lang} />
    </div>
  );
}
