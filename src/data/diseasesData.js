/**
 * diseasesData.js  –  central data for all disease pages + About Homoeopathy sub-pages
 * Route: /diseases/:slug   /homeopathy/:slug
 *
 * Each disease entry shape:
 *  { title, category, bannerSubtitle, intro,
 *    symptoms: string[], causes: string[],
 *    homeopathy: string,
 *    faq: [{ q, a }] }
 */

export const diseasesData = {

    // ── 1. RESPIRATORY ────────────────────────────────────────────────────────

    'cold-flu': {
        title: 'Cold & Flu', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Cold and flu are the most common viral respiratory infections, affecting millions worldwide. While cold symptoms are milder, flu can cause high fever, severe body aches, and fatigue. Homoeopathy offers rapid relief without side effects by treating the individual constitution rather than just masking symptoms.',
        symptoms: ['Runny or blocked nose', 'Sneezing and sore throat', 'Fever and chills (especially in flu)', 'Body aches and headache', 'Fatigue and loss of appetite'],
        causes: ['Rhinovirus (common cold)', 'Influenza A & B virus (flu)', 'Weakened immunity', 'Cold weather exposure', 'Contact with infected individuals'],
        homeopathy: 'Homoeopathy treats cold & flu constitutionally. Common remedies include Aconite (sudden onset, fever), Belladonna (high fever, red face), Gelsemium (weakness, heavy eyes), Bryonia (worse with movement), Eupatorium Perfoliatum (bone-breaking pains in flu) — prescribed based on each patient\'s unique symptom picture.',
        faq: [
            { q: 'What is the difference between a cold and the flu?', a: 'A cold develops gradually with mild symptoms — runny nose, sneezing, mild sore throat. Flu hits suddenly with high fever, severe body aches, chills, and profound fatigue. Flu is caused by Influenza A or B virus and carries greater risk of complications.' },
            { q: 'How long does a cold or flu typically last?', a: 'A common cold usually resolves in 7–10 days. Flu symptoms peak in 2–3 days and the illness lasts 5–7 days, though fatigue can linger for 1–2 weeks. Early treatment — including homoeopathy — can shorten the duration significantly.' },
            { q: 'When should I see a doctor for cold or flu?', a: 'Seek medical advice if you have a fever above 103°F (39.4°C), difficulty breathing, chest pain, confusion, persistent vomiting, or if symptoms worsen sharply after initial improvement — these may indicate bacterial complications such as pneumonia.' },
            { q: 'Can homoeopathy prevent recurrent colds?', a: 'Yes. Constitutional homoeopathic treatment strengthens the immune system over 3–6 months, significantly reducing the frequency and severity of recurrent colds and flu — particularly useful for people who fall ill at every season change.' },
            { q: 'How quickly does homoeopathic treatment work for cold & flu?', a: 'Acutely prescribed remedies can provide relief within hours to a day, especially when started at the very first sign of illness. Aconite works best in the earliest stage; Gelsemium and Bryonia suit more developed illness patterns.' },
        ],
    },

    'chronic-cough': {
        title: 'Chronic Cough', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Chronic cough is defined as a cough lasting more than 8 weeks in adults. It can be dry, productive, or spasmodic and is one of the most common reasons for medical visits globally. Homoeopathy addresses the root cause — whether it is post-nasal drip, hyperreactive airways, or digestive reflux.',
        symptoms: ['Persistent cough lasting weeks to months', 'Mucus or phlegm production', 'Hoarse voice and throat irritation', 'Disturbed sleep due to nocturnal cough', 'Runny nose or nasal drip accompanying cough'],
        causes: ['Post-nasal drip from sinusitis or allergies', 'Asthma and airway hyperreactivity', 'GERD (acid reflux)', 'Chronic bronchitis or COPD', 'Environmental irritants — dust, smoke, pollution'],
        homeopathy: 'Key homoeopathic remedies for chronic cough include Drosera (spasmodic, whooping-type), Spongia Tosta (dry, barking cough), Phosphorus (tickling cough with hoarseness), Rumex (cough from tickling in the throat), and Bryonia (dry, painful cough worse with motion) — selected based on cough type, timing, and triggers.',
        faq: [
            { q: 'What causes a chronic cough that won\'t go away?', a: 'The most common causes are post-nasal drip, asthma, GERD, chronic bronchitis, and ACE inhibitor medication use. Less commonly, it may be due to a persistent infection or, rarely, a structural lung problem. A proper evaluation helps identify the root cause.' },
            { q: 'How is a chronic cough diagnosed?', a: 'Diagnosis typically involves a chest X-ray, spirometry, allergy testing, and sometimes a pH study for acid reflux. A homoeopathic case-taking also identifies the cough\'s unique character — dry vs productive, time of aggravation, and associated symptoms.' },
            { q: 'Is homoeopathy safe for chronic cough in children?', a: 'Absolutely. Homoeopathic remedies are gentle, palatable, and free of side effects, making them ideal for children with recurrent or chronic cough — including toddlers who cannot take conventional cough syrups safely.' },
            { q: 'Which homoeopathic remedy is best for a cough that is worse at night?', a: 'Drosera is indicated for spasmodic night coughs with a whooping quality. Arsenicum Album suits restless night coughs with anxiety. Hyoscyamus covers dry tickling night coughs. The precise remedy depends on the full symptom picture.' },
            { q: 'Can chronic cough be a sign of something serious?', a: 'In most cases it is benign, but a cough lasting beyond 8 weeks should always be evaluated to rule out TB, lung cancer, or heart failure — especially if associated with blood in sputum, weight loss, or breathlessness at rest.' },
        ],
    },

    'bronchial-asthma': {
        title: 'Bronchial Asthma', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Bronchial asthma is a chronic inflammatory disease of the airways characterised by reversible airflow obstruction, wheezing, and breathlessness. Homoeopathy offers effective long-term management by addressing the underlying allergic constitution and reducing the frequency and severity of attacks.',
        symptoms: ['Wheezing and breathlessness', 'Chest tightness', 'Cough — especially at night or early morning', 'Difficulty breathing during exercise', 'Mucus production after coughing spells'],
        causes: ['Allergens — pollen, dust mites, pet dander', 'Respiratory infections', 'Cold or dry air', 'Exercise and physical exertion', 'Stress and strong emotions', 'Air pollution and chemical fumes'],
        homeopathy: 'Homoeopathic treatment for asthma addresses the allergic constitution and reduces bronchial hypersensitivity. Key remedies include Arsenicum Album (anxiety with breathlessness, worse at night), Natrum Sulph (worse in damp weather), Ipecacuanha (constant nausea with wheezing), Antimonium Tartaricum (rattling chest), and Spongia Tosta (dry, suffocative cough).',
        faq: [
            { q: 'What triggers an asthma attack?', a: 'Common triggers include allergens (dust, pollen, pet dander), respiratory infections, cold air, exercise, strong smells, cigarette smoke, and emotional stress. Identifying and avoiding personal triggers is a key part of asthma management.' },
            { q: 'Is asthma curable or only manageable?', a: 'Conventional medicine considers asthma a manageable but lifelong condition. Homoeopathy takes a deeper view — by addressing the allergic constitution, many patients — especially children — achieve long-term remission with significantly reduced or absent attacks.' },
            { q: 'Can I stop my inhaler once I start homoeopathy?', a: 'Do not stop any conventional medication abruptly. Homoeopathic treatment works alongside inhalers; as treatment progresses and attacks reduce in frequency and severity, inhaler dependence typically decreases gradually under medical guidance.' },
            { q: 'How long does homoeopathic treatment for asthma take?', a: 'Chronic asthma usually requires 3–12 months of constitutional treatment. Acute attacks can be managed quickly with well-selected remedies. Patients typically notice fewer and milder attacks within the first 2–3 months.' },
            { q: 'Can homoeopathy help asthma caused by occupational exposure?', a: 'Yes. Occupational asthma — triggered by chemical fumes, dust, or industrial irritants — responds well to constitutional homoeopathy, which improves the patient\'s inherent resilience to environmental triggers.' },
        ],
    },

    'allergic-rhinitis': {
        title: 'Allergic Rhinitis', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Allergic rhinitis (hay fever) is an IgE-mediated inflammatory condition of the nasal mucosa triggered by allergens. It causes significant quality-of-life impairment and is a common precursor to asthma. Homoeopathy desensitises the allergic constitution without antihistamine side effects.',
        symptoms: ['Sneezing — often in bouts', 'Watery, itchy eyes', 'Runny or blocked nose', 'Itching of nose, throat, or palate', 'Reduced sense of smell'],
        causes: ['Pollen (trees, grass, weeds)', 'House dust mites', 'Pet dander', 'Mould spores', 'Genetic predisposition to atopy'],
        homeopathy: 'Allium Cepa (profuse watery discharge), Sabadilla (violent sneezing), Natrum Muriaticum (clear watery discharge), Euphrasia (eye symptoms prominent), and Arundo (itching of palate) are among the most effective homoeopathic remedies for allergic rhinitis, chosen based on individual trigger and symptom profile.',
        faq: [
            { q: 'What is the difference between allergic rhinitis and the common cold?', a: 'Allergic rhinitis produces clear watery discharge, itching, and sneezing without fever and lasts as long as allergen exposure continues. A cold is caused by a virus, typically lasts 7–10 days, and may involve thick yellow or green discharge and mild fever.' },
            { q: 'Can allergic rhinitis lead to asthma?', a: 'Yes. Allergic rhinitis and asthma share the same atopic inflammatory mechanism. Around 30–40% of patients with allergic rhinitis develop asthma. Treating rhinitis early and constitutionally reduces this risk significantly.' },
            { q: 'Does homoeopathy treat seasonal as well as perennial allergic rhinitis?', a: 'Yes. Both seasonal (pollen-triggered) and year-round (dust, mould-triggered) rhinitis respond well to individualised homoeopathic treatment. Seasonal cases also benefit from pre-season constitutional treatment started 4–6 weeks before peak pollen season.' },
            { q: 'Can children with allergic rhinitis be treated homoeopathically?', a: 'Yes, with excellent results. Homoeopathy is safe for all ages and avoids the drowsiness, dry mouth, and irritability commonly caused by antihistamines in children.' },
            { q: 'How many months of homoeopathic treatment are needed for allergic rhinitis?', a: 'Acute symptom relief can occur within days of the correctly prescribed remedy. Constitutional treatment to reduce overall allergic reactivity takes 3–6 months and often leads to lasting reduction in sensitivity.' },
        ],
    },

    'sinusitis': {
        title: 'Sinusitis', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Sinusitis is inflammation of the paranasal sinuses, causing facial pain or pressure, nasal congestion, and thick discharge. Chronic sinusitis (lasting more than 12 weeks) responds exceptionally well to homoeopathic treatment, which reduces recurrence and avoids long-term antibiotic use.',
        symptoms: ['Facial pain or pressure around forehead, cheeks, or eyes', 'Thick yellow or green nasal discharge', 'Nasal congestion and reduced smell/taste', 'Headache worsening on bending forward', 'Post-nasal drip and cough'],
        causes: ['Bacterial or viral infection', 'Allergic rhinitis', 'Nasal polyps', 'Deviated nasal septum', 'Dental infections spreading to sinuses'],
        homeopathy: 'Key remedies: Kali Bichromicum (thick, ropy discharge; sinus pressure), Hepar Sulph (pus, offensive discharge), Silicea (chronic sinusitis with headache), Pulsatilla (yellow-green discharge, loss of smell), and Hydrastis (thick catarrh). Constitutional treatment prevents recurrence.',
        faq: [
            { q: 'How do I know if my sinusitis is bacterial or viral?', a: 'Viral sinusitis typically resolves within 10 days and produces clear or slightly cloudy discharge. Bacterial sinusitis is suggested by symptoms persisting beyond 10 days, thick green/yellow pus, facial pain, and fever. A doctor can confirm with examination.' },
            { q: 'Can chronic sinusitis cause complications if untreated?', a: 'Yes. Untreated chronic sinusitis can lead to nasal polyp formation, orbital or intracranial spread (rarely), chronic fatigue from poor sleep, and secondary ear infections. Early constitutional treatment significantly reduces these risks.' },
            { q: 'Is nasal surgery avoidable with homoeopathy?', a: 'Many patients with chronic sinusitis or nasal polyps successfully avoid surgery with sustained homoeopathic treatment. Results depend on the duration, extent, and severity of the condition — early treatment gives the best outcomes.' },
            { q: 'Can homoeopathy help sinusitis headaches?', a: 'Yes. Remedies like Kali Bich (sinus headache with ropy discharge) and Silicea (chronic frontal headache from blocked sinuses) specifically address sinus headaches and help drain congested sinuses effectively.' },
            { q: 'What lifestyle changes support homoeopathic treatment for sinusitis?', a: 'Steam inhalation, saline nasal rinse, adequate hydration, avoiding cold beverages, and managing allergic triggers all complement homoeopathic treatment and accelerate recovery.' },
        ],
    },

    'adenoids': {
        title: 'Adenoids', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Adenoid hypertrophy is enlargement of the adenoid tissue at the back of the nasal passage, common in children aged 2–10. It causes mouth breathing, snoring, and recurrent ear and throat infections. Homoeopathy can shrink the adenoids naturally, often avoiding the need for adenoidectomy surgery.',
        symptoms: ['Mouth breathing, especially during sleep', 'Snoring and disturbed sleep', 'Nasal voice or nasal speech', 'Recurrent ear infections or glue ear', 'Persistent nasal discharge'],
        causes: ['Recurrent upper respiratory infections', 'Allergies and chronic rhinitis', 'Environmental pollution', 'Family predisposition', 'Poor immunity'],
        homeopathy: 'Baryta Carbonica (enlarged glands, timid child), Calcarea Carbonica (chubby, sweaty child with big head), Tuberculinum (recurrent infections, thin child), Agraphis Nutans (specific for adenoids with deafness), and Silicea (chronic suppuration) are the key homoeopathic remedies prescribed after detailed constitutional case-taking.',
        faq: [
            { q: 'How do I know if my child has enlarged adenoids?', a: 'Signs include persistent mouth breathing (especially at night), loud snoring, muffled nasal speech, and recurrent ear or throat infections. An ENT examination and nasal endoscopy or X-ray can confirm the diagnosis.' },
            { q: 'Does mouth breathing from adenoids affect a child\'s development?', a: 'Yes. Chronic mouth breathing can affect facial bone development (adenoid face), dental alignment, sleep quality, and cognitive function over time. Early treatment is important to prevent long-term structural changes.' },
            { q: 'Can homoeopathy completely replace adenoid surgery?', a: 'In mild to moderate cases, homoeopathy can effectively reduce adenoid size and symptoms over 3–6 months, avoiding surgery. Severe cases causing significant sleep apnoea or hearing loss may still require surgical evaluation.' },
            { q: 'At what age should homoeopathic treatment start for adenoids?', a: 'The earlier the better. Children as young as 2 years can be treated safely and respond excellently, often showing improvement within 2–3 months. Starting before school age also helps prevent learning difficulties from hearing problems.' },
            { q: 'How is adenoid homoeopathic treatment monitored?', a: 'Progress is tracked through improvement in breathing, reduction in snoring, fewer infections, and clearer speech. Nasopharyngeal X-ray or endoscopy can be repeated at 3–6 months to confirm reduction in adenoid size.' },
        ],
    },

    // ── 2. GASTROINTESTINAL ───────────────────────────────────────────────────

    'piles': {
        title: 'Piles (Haemorrhoids)', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Piles (haemorrhoids) are swollen veins in the lower rectum and anus. They affect 3 in 4 adults at some point in their lives. Homoeopathy provides excellent non-surgical treatment by reducing congestion, improving venous tone, and correcting the underlying bowel habits.',
        symptoms: ['Painless bright red bleeding during bowel movements', 'Itching and irritation around the anus', 'Pain and discomfort while sitting', 'Swelling around the anus', 'Mucus discharge with stools'],
        causes: ['Chronic constipation or straining', 'Low-fibre diet', 'Sedentary lifestyle and prolonged sitting', 'Pregnancy and childbirth', 'Obesity and excessive weight'],
        homeopathy: 'Top homoeopathic remedies: Aesculus Hip. (piles with backache, dry and itching), Nux Vomica (constipation, sedentary habit), Hamamelis (bleeding piles with soreness), Ratanhia (burning pain after stools), and Collinsonia (piles with constipation). No surgery needed in most cases.',
        faq: [
            { q: 'What is the difference between internal and external piles?', a: 'Internal piles form inside the rectum and are usually painless, causing bleeding. External piles form under the skin around the anus, causing pain, itching, and swelling. Both types respond well to homoeopathic treatment.' },
            { q: 'What dietary changes help with piles?', a: 'A high-fibre diet (fruits, vegetables, whole grains), drinking 2–3 litres of water daily, avoiding spicy and fried foods, and not straining during bowel movements are the most important dietary steps alongside treatment.' },
            { q: 'Can homoeopathy cure 3rd and 4th degree piles?', a: 'Homoeopathy works best for 1st and 2nd degree piles, providing complete resolution in most cases. In advanced cases (3rd & 4th degree with prolapse), it relieves symptoms significantly and may reduce the need for surgery, though severe cases may still require surgical evaluation.' },
            { q: 'How long does homoeopathic treatment for piles take?', a: 'Mild to moderate cases typically see improvement within 4–8 weeks. Complete resolution may take 3–6 months of constitutional treatment, particularly for long-standing internal haemorrhoids.' },
            { q: 'Can piles recur after homoeopathic treatment?', a: 'With constitutional treatment that corrects underlying bowel habits and venous tone, recurrence is significantly reduced. Maintaining dietary changes and activity after treatment further prevents relapse.' },
        ],
    },

    'acidity-gas': {
        title: 'Acidity & Gas', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Acidity (GERD) and flatulence are among the most common digestive complaints in modern life. Acid reflux causes heartburn and regurgitation while excess gas causes bloating and discomfort. Homoeopathy provides lasting relief by correcting digestive fire and lifestyle-related gut imbalances.',
        symptoms: ['Heartburn and burning in chest after meals', 'Belching and bloating', 'Sour or bitter taste in mouth', 'Flatulence and abdominal distension', 'Nausea and loss of appetite'],
        causes: ['Spicy, fried, or fatty foods', 'Irregular eating habits', 'Stress and anxiety', 'Alcohol and caffeine', 'Hiatal hernia or food intolerances'],
        homeopathy: 'Natrum Phosphoricum (acid reflux, sour eructations), Carbo Veg (bloating even after simple food), Lycopodium (bloating in lower abdomen, 4-8 pm aggravation), Robinia (acidity with sour vomiting), Nux Vomica (acidity from rich food, alcohol) — selected based on the individual pattern of digestive symptoms.',
        faq: [
            { q: 'What is the difference between acidity and GERD?', a: 'Acidity refers to excess stomach acid causing occasional discomfort. GERD (Gastro-Oesophageal Reflux Disease) is a chronic condition where acid repeatedly flows back into the oesophagus, causing heartburn, regurgitation, and potential long-term damage if untreated.' },
            { q: 'Can stress really cause acidity?', a: 'Yes. Stress increases acid secretion, slows digestion, and weakens the lower oesophageal sphincter. Homoeopathy is particularly effective for stress-related acidity because it addresses both the emotional trigger and the physical digestive symptoms simultaneously.' },
            { q: 'Can I take homoeopathic medicines alongside antacids?', a: 'Yes. Homoeopathic remedies are compatible with antacids. As constitutional treatment progresses over weeks to months, the need for antacids typically reduces naturally without abrupt stopping.' },
            { q: 'What diet should I follow during homoeopathic treatment for acidity?', a: 'Avoid spicy, oily, and fried foods, caffeine, alcohol, and late-night meals. Eat small portions at regular intervals. Elevate the head of your bed slightly if nighttime reflux is a problem. The homoeopathic remedy addresses the underlying sensitivity while diet reduces the load.' },
            { q: 'Can long-standing acidity damage the oesophagus?', a: 'Chronic uncontrolled GERD can cause oesophagitis, stricture, and in rare cases Barrett\'s oesophagus — a pre-cancerous condition. This is why sustained constitutional treatment is important, not just antacid symptom suppression.' },
        ],
    },

    'ulcers': {
        title: 'Gastric Ulcers', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Gastric ulcers are open sores on the stomach lining caused by the erosion of the protective mucus layer. They cause a burning or gnawing pain in the stomach. Homoeopathy heals ulcers from within by addressing the root cause — H. pylori, emotional stress, or NSAID use — without harsh medication side effects.',
        symptoms: ['Burning or gnawing stomach pain, often between meals', 'Nausea and vomiting', 'Dark or tarry stools (indicating bleeding)', 'Loss of appetite and weight loss', 'Bloating and early satiety'],
        causes: ['H. pylori bacterial infection', 'Long-term NSAID use (aspirin, ibuprofen)', 'Excessive alcohol consumption', 'Chronic stress', 'Smoking'],
        homeopathy: 'Argentum Nitricum (anticipatory anxiety with ulcers), Nux Vomica (ulcer from spicy food, alcohol, stress), Kali Bich (thick mucus discharge, punched-out ulcers), Phosphorus (bleeding tendency), and Anacardium (pain relieved by eating) are key remedies prescribed constitutionally.',
        faq: [
            { q: 'How do I know if I have a gastric ulcer vs simple acidity?', a: 'Ulcer pain is typically deeper, more persistent, and follows a pattern — often occurring 1–3 hours after meals or waking at night. Acidity tends to be more burning and directly related to food. Endoscopy (gastroscopy) is the definitive investigation.' },
            { q: 'Is H. pylori infection always the cause of ulcers?', a: 'H. pylori causes around 70% of gastric ulcers and 90% of duodenal ulcers. The remaining cases are largely due to NSAID overuse, stress, or rarely Zollinger-Ellison syndrome. Homoeopathy addresses the host susceptibility regardless of the cause.' },
            { q: 'Can homoeopathy treat H. pylori-related ulcers?', a: 'Homoeopathy strengthens the stomach mucosa and addresses the host susceptibility to H. pylori infection. It works best alongside appropriate conventional H. pylori eradication therapy (triple therapy), then continues to heal and protect the mucosa.' },
            { q: 'How quickly do ulcer symptoms improve with homoeopathy?', a: 'Most patients experience significant pain relief within 2–3 weeks of starting a well-matched remedy. Healing of the ulcer lining typically takes 1–3 months of consistent constitutional treatment.' },
            { q: 'What foods should I avoid with a gastric ulcer?', a: 'Avoid NSAIDs, alcohol, smoking, spicy foods, coffee, and carbonated drinks. Small, frequent, bland meals are easiest on the stomach. Homoeopathy helps the stomach heal so that dietary restrictions can gradually ease over time.' },
        ],
    },

    'fissure-fistula': {
        title: 'Fissure & Fistula', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Anal fissure is a small tear in the anal mucosa causing severe pain during bowel movements, while anal fistula is an infected tunnel between the anal canal and skin. Both conditions respond remarkably well to homoeopathic treatment, often avoiding the need for surgery.',
        symptoms: ['Severe pain during and after defecation (fissure)', 'Bright red bleeding on tissue paper', 'Persistent discharge of pus near the anus (fistula)', 'Swelling and irritation around the anus', 'Chronic constipation worsening symptoms'],
        causes: ['Passing hard, dry stools', 'Chronic constipation or diarrhea', 'Previous anal abscess (fistula)', 'Crohn\'s disease', 'Childbirth trauma'],
        homeopathy: 'For fissure: Nitric Acid (splinter-like pain), Ratanhia (burning hours after stool), Graphites (skin cracks, itching). For fistula: Silicea (promotes drainage and healing), Myristica Sebifera (the "homoeopathic knife" — speeds healing without surgery), Calcarea Sulph, and Berberis Vulgaris — prescribed based on individual presentation.',
        faq: [
            { q: 'How is a fissure different from a fistula?', a: 'A fissure is a small crack in the lining of the anal canal causing acute pain during bowel movements. A fistula is a channel or tunnel that forms between the anal canal and the skin surface, usually from an abscess, causing chronic discharge and discomfort.' },
            { q: 'Can a fissure heal on its own?', a: 'Acute fissures sometimes heal with stool softeners and dietary fibre alone. Chronic fissures (lasting more than 6 weeks) rarely heal without treatment. Homoeopathy accelerates healing by reducing spasm and improving local tissue circulation.' },
            { q: 'Can homoeopathy heal a fistula without surgery?', a: 'Many fistula cases — particularly simple single-tract fistulas — have been successfully treated with homoeopathy, particularly Myristica Sebifera and Silicea. Success depends on the extent and complexity of the fistula tract. Complex or recurrent fistulas may still require surgery.' },
            { q: 'How long does dietary change help alongside homoeopathic treatment?', a: 'A high-fibre diet (25–35g/day) and drinking 2–3 litres of water daily significantly speed up healing for both fissure and fistula by preventing hard stools. Benefits of dietary change are felt within 1–2 weeks.' },
            { q: 'Is there a risk of fissure or fistula recurring after homoeopathic treatment?', a: 'Constitutional treatment that corrects the underlying bowel habits and tissue tendency (using miasmatic remedies) significantly reduces recurrence. Maintaining dietary habits and addressing any underlying Crohn\'s disease prevents relapse.' },
        ],
    },

    'ibs': {
        title: 'Irritable Bowel Syndrome', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'IBS is a common functional gastrointestinal disorder causing abdominal pain, bloating, and altered bowel habits without detectable structural abnormality. It is strongly linked to gut-brain axis dysfunction and stress. Homoeopathy addresses both the physical symptoms and the underlying emotional triggers.',
        symptoms: ['Recurrent abdominal cramps or pain', 'Bloating and abdominal distension', 'Alternating constipation and diarrhea', 'Urgency and frequent bowel movements', 'Mucus in stools', 'Symptoms triggered by stress or certain foods'],
        causes: ['Gut-brain axis dysregulation', 'Emotional stress and anxiety', 'Post-infectious gut hypersensitivity', 'Food intolerances (lactose, gluten)', 'Altered intestinal motility'],
        homeopathy: 'Colocynth (cramping pain relieved by pressure/bending), Nux Vomica (IBS from stress, irregular diet), Argentum Nitricum (diarrhoea from anxiety, anticipation), Aloe Socotrina (urgency, mucus in stools), and Sulphur (morning diarrhoea, burning rectum) are commonly prescribed after thorough case analysis.',
        faq: [
            { q: 'Is IBS a serious condition or just stress-related?', a: 'IBS is a genuine medical condition involving dysfunction of the gut-brain axis. While stress is a major trigger, it also involves altered gut motility, visceral hypersensitivity, and microbiome changes. It significantly affects quality of life even though it causes no structural damage.' },
            { q: 'What foods commonly trigger IBS?', a: 'Common triggers include dairy products, gluten, high-FODMAP foods (onions, garlic, apples, legumes), caffeine, alcohol, and fatty fried foods. Keeping a food diary helps identify personal triggers alongside constitutional treatment.' },
            { q: 'Is homoeopathy effective for IBS-diarrhoea vs IBS-constipation?', a: 'Both subtypes respond well. The remedy is selected based on the individual symptom pattern, triggers, and constitutional type — not just the bowel habit. IBS-mixed (alternating) is also well managed homoeopathically.' },
            { q: 'How does stress management complement homoeopathic treatment for IBS?', a: 'Mind-level remedies in homoeopathy address stress simultaneously with gut symptoms. Patients often find bowel symptoms and anxiety improve together. Combining homoeopathy with relaxation techniques or mindfulness gives the best outcomes.' },
            { q: 'How long before IBS improves with homoeopathic treatment?', a: 'Many patients notice improvement in urgency and cramping within 3–4 weeks. Sustained improvement in bowel regularity and food tolerance typically develops over 3–6 months of constitutional treatment.' },
        ],
    },

    'ulcerative-colitis': {
        title: 'Ulcerative Colitis', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Ulcerative colitis (UC) is a chronic inflammatory bowel disease affecting the colon and rectum, causing bloody diarrhoea, urgency, and abdominal pain. Homoeopathy helps induce and maintain remission, reduces dependency on steroids, and improves overall quality of life.',
        symptoms: ['Diarrhoea with blood and mucus', 'Urgent and frequent bowel movements', 'Abdominal cramping and pain', 'Weight loss and anaemia', 'Fatigue and low-grade fever during flares'],
        causes: ['Autoimmune dysregulation', 'Genetic predisposition', 'Dysbiosis (gut microbiome imbalance)', 'Environmental triggers', 'Psychological stress and trauma'],
        homeopathy: 'Merc Cor (dysentery-like stools, tenesmus), Phosphorus (rectal bleeding, sensitive, sympathetic patients), Nux Vomica (colitis from suppressions, stress), Aloe (urgent bloody stools), and Colocynth (cramping relieved by pressure) are key remedies. Constitutional treatment reduces relapses and steroid dependence.',
        faq: [
            { q: 'What is the difference between ulcerative colitis and Crohn\'s disease?', a: 'UC affects only the colon and rectum, causing continuous mucosal inflammation. Crohn\'s can affect any part of the digestive tract, causes transmural (full thickness) inflammation, and often involves skip lesions. Both are inflammatory bowel diseases but have different treatment approaches.' },
            { q: 'What diet helps manage ulcerative colitis?', a: 'During flares, a low-residue diet is easier on the colon. In remission, a Mediterranean-style anti-inflammatory diet with adequate fibre is beneficial. Identifying personal food triggers, avoiding raw vegetables during active disease, and staying hydrated are all important.' },
            { q: 'Can homoeopathy reduce the need for steroids in UC?', a: 'In many patients, sustained constitutional homoeopathic treatment significantly reduces the frequency of flares and the need for steroid courses. Any reduction in steroid doses must always be done gradually and under medical supervision.' },
            { q: 'What is the success rate of homoeopathy for ulcerative colitis?', a: 'Clinical experience shows 60–70% of UC patients achieve significant symptom reduction and improved quality of life with homoeopathic treatment over 6–18 months. Milder cases tend to respond faster; severe longstanding UC may still require conventional medication alongside homoeopathy.' },
            { q: 'Is colonoscopy monitoring needed during homoeopathic treatment for UC?', a: 'Yes. Regular colonoscopic surveillance is important regardless of treatment, both to monitor mucosal healing and for cancer surveillance in long-standing UC. Homoeopathic treatment does not replace this monitoring.' },
        ],
    },

    // ── 3. HORMONAL & LIFESTYLE ───────────────────────────────────────────────

    'diabetes': {
        title: 'Diabetes', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Diabetes mellitus is a chronic metabolic disorder characterised by elevated blood glucose due to insufficient insulin production or action. Homoeopathy supports blood sugar management, improves cellular sensitivity to insulin, and addresses complications like neuropathy and fatigue.',
        symptoms: ['Increased thirst and frequent urination', 'Unexplained weight loss', 'Fatigue and weakness', 'Blurred vision', 'Slow-healing wounds', 'Tingling or numbness in hands/feet'],
        causes: ['Autoimmune destruction of beta cells (Type 1)', 'Insulin resistance from obesity and lifestyle (Type 2)', 'Family history and genetics', 'Sedentary lifestyle and processed food diet', 'Stress and hormonal imbalance'],
        homeopathy: 'Uranium Nitratum (high blood sugar, frequent urination), Syzygium Jambolanum (classical anti-diabetic homoeopathic remedy), Phosphoric Acid (diabetes with weakness and nerve involvement), Lactic Acid (diabetic gastropathy), and Gymnema Sylvestre (reduces sugar craving) — used adjunctively alongside conventional management.',
        faq: [
            { q: 'What is the difference between Type 1 and Type 2 diabetes?', a: 'Type 1 is an autoimmune condition destroying insulin-producing cells, requiring lifelong insulin. Type 2 involves insulin resistance — the body produces insulin but cannot use it effectively — and is strongly linked to obesity, diet, and inactivity. Homoeopathy is particularly useful as an adjunct in Type 2 diabetes management.' },
            { q: 'Can lifestyle changes alone reverse Type 2 diabetes?', a: 'In early-stage Type 2 diabetes, significant weight loss, dietary change, and regular exercise can normalise blood sugar. Homoeopathy supports this process by improving metabolic efficiency, reducing sugar cravings, and addressing the underlying constitutional imbalance.' },
            { q: 'Can homoeopathy replace diabetes medication?', a: 'Homoeopathy is best used as complementary therapy alongside conventional medication. In early Type 2 diabetes, combined with lifestyle changes, it can help stabilise blood sugar significantly. Any medication adjustment must be made under physician monitoring.' },
            { q: 'Can homoeopathy help with diabetic complications?', a: 'Yes. Homoeopathy is particularly helpful for diabetic neuropathy (Phosphoric Acid, Hypericum), managing fatigue (Phosphoric Acid), supporting kidney function, and improving wound healing — addressing the systemic impact of long-standing diabetes.' },
            { q: 'How often should blood sugar be monitored during homoeopathic treatment?', a: 'Regular monitoring (fasting glucose, HbA1c every 3 months) is essential throughout treatment. This allows objective assessment of progress and safe adjustment of any conventional medication if blood sugar improves.' },
        ],
    },

    'hypertension': {
        title: 'Hypertension', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hypertension (high blood pressure) is a major risk factor for cardiovascular disease and stroke. Homoeopathy addresses the root causes — including stress, lifestyle, and hereditary tendencies — helping to reduce BP naturally while supporting the patient\'s overall cardiovascular health.',
        symptoms: ['Mostly asymptomatic', 'Headaches — especially at the back of the head', 'Dizziness and lightheadedness', 'Nosebleeds in severe cases', 'Palpitations and chest heaviness'],
        causes: ['Essential hypertension (no clear cause — most common)', 'Stress and anxiety', 'Obesity and sedentary lifestyle', 'Excessive salt intake', 'Family history', 'Kidney disease or hormonal disorders'],
        homeopathy: 'Rauwolfia Serpentina (classic homoeopathic anti-hypertensive), Natrum Muriaticum (hypertension from suppressed grief or emotions), Aurum Metallicum (high BP with heart involvement, perfectionist), Glonoinum (sudden surges in BP, heat intolerance), and Baryta Muriaticum (elderly patients with arteriosclerosis).',
        faq: [
            { q: 'Why is hypertension called the "silent killer"?', a: 'Hypertension rarely causes symptoms until it reaches dangerous levels or causes an event like stroke or heart attack. Most people have no idea their BP is elevated for years — making regular screening critical even in those who feel well.' },
            { q: 'What is the role of salt and diet in hypertension?', a: 'Excess sodium causes fluid retention, raising BP. The DASH diet — rich in fruits, vegetables, whole grains, and low in sodium and saturated fat — is the most evidence-backed dietary approach. Reducing salt intake to under 5g/day can lower BP by 2–8 mmHg.' },
            { q: 'Is it safe to stop BP medication and switch to homoeopathy?', a: 'No. Never stop antihypertensive medication abruptly — this can cause a dangerous rebound rise in BP. Homoeopathy works alongside conventional treatment. As BP stabilises over months, medication adjustments are made in consultation with your physician.' },
            { q: 'How does homoeopathy help with stress-related hypertension?', a: 'Homoeopathy addresses the emotional root of stress-driven hypertension using constitutional mind-level remedies like Natrum Muriaticum and Aurum Metallicum. Patients often find both BP control and anxiety improve simultaneously during treatment.' },
            { q: 'How long does it take for homoeopathy to show results in hypertension?', a: 'Some patients notice BP improvements within 4–6 weeks. Full constitutional benefit, with consistent BP reduction and improved stress resilience, typically develops over 3–6 months of sustained treatment.' },
        ],
    },

    'hypothyroidism': {
        title: 'Hypothyroidism', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hypothyroidism occurs when the thyroid gland fails to produce sufficient thyroid hormones, slowing metabolism. It predominantly affects women. Homoeopathy works to stimulate thyroid function naturally and addresses the autoimmune tendency (Hashimoto\'s) that underlies most cases.',
        symptoms: ['Fatigue and sluggishness', 'Weight gain despite normal diet', 'Cold intolerance', 'Hair thinning and dry skin', 'Constipation', 'Irregular or heavy periods', 'Depression and cognitive slowing'],
        causes: ['Hashimoto\'s thyroiditis (autoimmune)', 'Iodine deficiency', 'Previous thyroid surgery or radiation', 'Certain medications (lithium, amiodarone)', 'Postpartum thyroiditis'],
        homeopathy: 'Thyroidinum (supports thyroid gland function directly), Calcarea Carbonica (overweight, cold, constipated), Sepia (hormonal, exhausted, indifferent), Natrum Muriaticum (suppressed grief, weight gain), and Graphites (cold, dry skin, constipation) are individualised based on the patient\'s complete symptom picture.',
        faq: [
            { q: 'What is Hashimoto\'s thyroiditis and how common is it?', a: 'Hashimoto\'s is an autoimmune condition where the immune system attacks the thyroid gland, leading to progressive hypothyroidism. It is the most common cause of hypothyroidism in iodine-sufficient countries and is far more prevalent in women, often running in families.' },
            { q: 'What does TSH level indicate about thyroid function?', a: 'TSH (Thyroid Stimulating Hormone) rises when the thyroid is underactive — the pituitary works harder to stimulate a sluggish gland. A TSH above 4.5 mIU/L with low T4 confirms hypothyroidism. Values between 2.5–4.5 with symptoms may indicate subclinical hypothyroidism.' },
            { q: 'Can homoeopathy reverse hypothyroidism?', a: 'In subclinical or early-stage hypothyroidism, homoeopathy can normalise TSH levels with constitutional treatment. In established thyroid deficiency, it reduces symptoms and may allow lower thyroxine doses under medical monitoring — particularly useful in Hashimoto\'s by modulating the autoimmune response.' },
            { q: 'How long before I see improvement in TSH with homoeopathy?', a: 'TSH changes are typically detectable at 3–6 month blood tests. Symptomatic improvements in energy, mood, hair, and weight are often noticed sooner — within 4–8 weeks — which is encouraging for patient compliance.' },
            { q: 'Can I continue thyroxine while taking homoeopathic remedies?', a: 'Yes. Homoeopathic remedies are completely safe alongside thyroxine (levothyroxine). They do not interfere with thyroid hormone absorption. Any dose adjustment of thyroxine should only be made after TSH retesting under physician guidance.' },
        ],
    },

    'hyperthyroidism': {
        title: 'Hyperthyroidism', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hyperthyroidism is overproduction of thyroid hormones, causing accelerated metabolism, weight loss, and cardiac symptoms. Graves\' disease is the most common cause. Homoeopathy gently reduces thyroid overactivity and calms the autoimmune trigger without the side effects of anti-thyroid drugs.',
        symptoms: ['Unexplained weight loss despite increased appetite', 'Racing heartbeat (palpitations)', 'Anxiety, nervousness, and irritability', 'Tremors in hands', 'Heat intolerance and excessive sweating', 'Bulging eyes (in Graves\' disease)'],
        causes: ['Graves\' disease (autoimmune)', 'Toxic multinodular goitre', 'Thyroid nodules (hot nodules)', 'Excessive iodine intake', 'Thyroiditis'],
        homeopathy: 'Iodum (thyroid enlargement with great emaciation, restlessness), Natrum Muriaticum (Graves\' with emotional suppression), Phosphorus (sympathetic, fearful, palpitations), Spongia Tosta (thyroid goitre), and Lycopus Virginicus (hyperthyroidism with cardiac palpitations) are selected based on individual presentation.',
        faq: [
            { q: 'How is hyperthyroidism diagnosed?', a: 'Blood tests showing low TSH with elevated free T3 and T4 confirm hyperthyroidism. A thyroid scan and antibody tests (TSH receptor antibodies for Graves\') identify the cause. Cardiac monitoring may also be needed given the risk of atrial fibrillation.' },
            { q: 'What are the risks of untreated hyperthyroidism?', a: 'Untreated hyperthyroidism can lead to atrial fibrillation, heart failure, osteoporosis from bone loss, thyroid storm (life-threatening crisis), and muscle weakness. Early treatment — including complementary homoeopathy — is important to prevent these complications.' },
            { q: 'Can homoeopathy treat Graves\' disease exophthalmos (bulging eyes)?', a: 'Homoeopathy can reduce eye inflammation and slow progression of mild exophthalmos (proptosis). Severe or rapidly worsening exophthalmos requires urgent specialist ophthalmological evaluation and conventional management.' },
            { q: 'Is homoeopathy safe during pregnancy for hyperthyroidism?', a: 'Yes. Homoeopathic remedies are among the safest options during pregnancy, avoiding the teratogenic risks associated with some anti-thyroid drugs. Always keep your obstetrician informed and ensure regular thyroid monitoring throughout pregnancy.' },
            { q: 'Can homoeopathy prevent recurrence of hyperthyroidism after treatment?', a: 'Yes. Constitutional homoeopathic treatment addresses the autoimmune predisposition underlying Graves\' disease, reducing the likelihood of relapse after conventional treatment is withdrawn — something conventional anti-thyroid drugs alone do not achieve.' },
        ],
    },

    'obesity': {
        title: 'Obesity', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Obesity is a complex multifactorial condition characterised by excessive fat accumulation harmful to health. It increases risk for diabetes, cardiovascular disease, and joint problems. Homoeopathy addresses the constitutional tendency to weight gain — including metabolic, hormonal, and emotional factors.',
        symptoms: ['BMI above 30', 'Excessive fat accumulation, especially around abdomen', 'Breathlessness on mild exertion', 'Fatigue and poor stamina', 'Joint pains and back problems', 'Low self-esteem and emotional eating'],
        causes: ['Sedentary lifestyle and processed food diet', 'Hormonal imbalances (thyroid, PCOS)', 'Genetic factors', 'Emotional eating and stress', 'Medications (steroids, antidepressants)'],
        homeopathy: 'Calcarea Carbonica (cold, sweaty, slow metabolism), Graphites (obesity with constipation and skin issues), Phytolacca (fatty deposits, joint pains), Natrum Sulph (excess fluid retention), and Antimonium Crudum (obesity from digestive causes) are selected constitutionally alongside dietary and lifestyle guidance.',
        faq: [
            { q: 'Why is obesity considered a disease and not just a lifestyle issue?', a: 'Obesity involves complex interactions between genetics, hormones, gut microbiome, brain chemistry, and environment — far beyond simple overeating. The WHO recognises it as a chronic disease because it significantly alters physiology and dramatically increases risk of numerous other conditions.' },
            { q: 'What is the role of hormones in obesity?', a: 'Hormones including insulin, leptin, ghrelin, cortisol, and thyroid hormones all influence fat storage, appetite, and metabolism. Hormonal imbalances from PCOS, hypothyroidism, or Cushing\'s can cause weight gain even with moderate food intake — homoeopathy addresses these underlying hormonal drivers.' },
            { q: 'Can homoeopathy help with obesity without diet and exercise?', a: 'No. Homoeopathy optimises metabolism and reduces cravings, but works best when combined with appropriate dietary changes and regular physical activity. It addresses why a person cannot lose weight despite efforts — not as a replacement for effort.' },
            { q: 'Does homoeopathy target belly fat specifically?', a: 'Certain remedies like Fucus Vesiculosus and Calcarea Carbonica are particularly effective for abdominal fat accumulation in constitutionally matched patients. The focus is on correcting the metabolic and hormonal root rather than spot reduction.' },
            { q: 'How long does homoeopathic treatment for obesity take to show results?', a: 'Improvements in metabolism, energy, and cravings are often noticed within 4–6 weeks. Measurable weight loss typically accumulates over 3–6 months of constitutional treatment combined with dietary and lifestyle changes.' },
        ],
    },

    'high-cholesterol': {
        title: 'High Cholesterol', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hypercholesterolaemia is elevated LDL cholesterol in the blood, a major risk factor for coronary artery disease and stroke. Homoeopathy helps reduce cholesterol levels naturally, improves arterial health, and addresses the lifestyle and constitutional factors driving dyslipidaemia.',
        symptoms: ['Usually asymptomatic — detected on blood tests', 'Xanthelasma (yellowish deposits near eyes)', 'Xanthomas (fatty deposits on tendons)', 'Symptoms of atherosclerotic disease (chest pain, poor circulation)'],
        causes: ['High saturated fat diet', 'Sedentary lifestyle', 'Obesity', 'Familial hypercholesterolaemia (genetic)', 'Hypothyroidism and diabetes', 'Liver disease'],
        homeopathy: 'Allium Sativum (elevated cholesterol, atherosclerosis), Crataegus (heart tonic, reduces lipid deposition in arteries), Cholesterinum (specific remedy made from cholesterol for high serum levels), Baryta Muriaticum (arteriosclerosis in elderly), and Aurum Metallicum (high BP with cholesterol) are used constitutionally.',
        faq: [
            { q: 'What is the difference between LDL and HDL cholesterol?', a: 'LDL (low-density lipoprotein) is the "bad" cholesterol that deposits in artery walls causing atherosclerosis. HDL (high-density lipoprotein) is the "good" cholesterol that carries excess cholesterol back to the liver. The ratio of LDL to HDL — not total cholesterol alone — best predicts cardiovascular risk.' },
            { q: 'Can high cholesterol exist without any obvious symptoms?', a: 'Yes. High cholesterol is almost always completely asymptomatic until it causes arterial narrowing leading to chest pain, peripheral artery disease, or a cardiovascular event. Regular lipid profile screening every 3–5 years in adults is therefore essential.' },
            { q: 'How effectively can homoeopathy lower cholesterol levels?', a: 'Studies and clinical experience show 10–20% LDL reduction with constitutional homoeopathic treatment over 3–6 months, best achieved in combination with dietary modification (reducing saturated fat, increasing fibre) and regular aerobic exercise.' },
            { q: 'Can homoeopathy replace statins for high cholesterol?', a: 'For mild elevation without significant cardiac risk, homoeopathy and lifestyle changes may be sufficient. In high-risk patients with established cardiovascular disease or familial hypercholesterolaemia, statins should continue alongside homoeopathy under physician supervision.' },
            { q: 'What diet changes most effectively lower cholesterol alongside homoeopathic treatment?', a: 'Reduce saturated fats (red meat, full-fat dairy), eliminate trans fats, and increase soluble fibre (oats, legumes, flaxseed), omega-3 fatty acids (fish, walnuts), and plant sterols. These dietary changes can lower LDL by 10–15% independently.' },
        ],
    },

    // ── 4. FEMALE REPRODUCTIVE ───────────────────────────────────────────────

    'pcos-pcod': {
        title: 'PCOS / PCOD', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Polycystic Ovary Syndrome (PCOS) is the most common hormonal disorder in women of reproductive age, affecting 1 in 5 women globally. It involves hormonal imbalance, cyst formation in ovaries, and metabolic dysfunction. Homoeopathy regulates hormonal axis, restores cycle regularity, and improves fertility.',
        symptoms: ['Irregular or absent menstrual periods', 'Excessive facial and body hair (hirsutism)', 'Acne and oily skin', 'Weight gain, especially around abdomen', 'Thinning of scalp hair', 'Difficulty conceiving'],
        causes: ['Hormonal imbalance — elevated androgens and LH', 'Insulin resistance', 'Genetic predisposition', 'Chronic stress affecting the hypothalamic-pituitary axis', 'Sedentary lifestyle and processed food diet'],
        homeopathy: 'Pulsatilla (irregular periods, mild, emotional), Sepia (irregular cycles, indifferent, exhausted), Lachesis (pre-menstrual aggravation, left-sided ovary), Thuja (multiple cysts, history of vaccination side effects), and Calcarea Carbonica (overweight PCOS with cold intolerance) — prescribed after detailed menstrual and constitutional case-taking.',
        faq: [
            { q: 'What is the difference between PCOS and PCOD?', a: 'PCOD (Polycystic Ovarian Disease) refers to multiple cysts in the ovaries with some hormonal imbalance. PCOS is a broader metabolic and endocrine syndrome involving insulin resistance, elevated androgens, and systemic effects beyond the ovaries. PCOS is the more comprehensive and clinically recognised term.' },
            { q: 'Can PCOS cause long-term health complications?', a: 'Yes. Untreated PCOS significantly increases risk of Type 2 diabetes, cardiovascular disease, endometrial cancer (from irregular cycles and oestrogen excess), sleep apnoea, and mental health issues like anxiety and depression. Early management is therefore important.' },
            { q: 'Can homoeopathy help with PCOS-related infertility?', a: 'Yes. By regulating ovulation and correcting hormonal imbalance, homoeopathy significantly improves fertility outcomes in PCOS patients — often achieving natural conception without the need for assisted reproductive techniques like IVF.' },
            { q: 'How long does homoeopathic treatment for PCOS take to show results?', a: 'Menstrual regularity typically improves within 2–4 cycles. Hormonal parameters (LH, FSH, testosterone, AMH) normalise over 4–9 months of consistent treatment. Skin and hair improvements are often noticed earlier.' },
            { q: 'What lifestyle changes support homoeopathic treatment for PCOS?', a: 'A low-glycaemic diet, reducing processed carbohydrates, regular aerobic and resistance exercise, adequate sleep, and stress management all improve insulin sensitivity and complement homoeopathic treatment significantly.' },
        ],
    },

    'endometriosis': {
        title: 'Endometriosis', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Endometriosis is a painful condition where tissue similar to the uterine lining grows outside the uterus. It causes severe menstrual pain, pelvic adhesions, and infertility. Homoeopathy reduces pain, slows endometrial proliferation, and improves quality of life without the hormonal side effects of GnRH analogues.',
        symptoms: ['Severe, debilitating menstrual pain (dysmenorrhoea)', 'Chronic pelvic pain', 'Pain during intercourse (dyspareunia)', 'Painful bowel movements or urination during periods', 'Heavy menstrual bleeding', 'Infertility'],
        causes: ['Retrograde menstruation (most accepted theory)', 'Immune system dysfunction', 'Genetic predisposition', 'Metaplasia of peritoneal cells', 'Lymphatic or vascular spread of endometrial cells'],
        homeopathy: 'Magnesia Phosphorica (cramping, spasmodic pain better with heat), Colocynth (pain bent double, better pressure), Lachesis (left-sided, worse before periods), Pulsatilla (irregular, variable pain), and Sepia (dragging down pelvic pain, indifference) are prescribed constitutionally alongside dietary anti-inflammatory support.',
        faq: [
            { q: 'Why does it take so long for endometriosis to be diagnosed?', a: 'On average, endometriosis takes 7–10 years to diagnose because painful periods are often normalised or dismissed. Definitive diagnosis requires laparoscopy. Homoeopathic treatment can begin based on clinical symptoms while conventional diagnosis is pursued.' },
            { q: 'What are the stages of endometriosis and do they affect treatment?', a: 'Endometriosis is graded I–IV based on extent and depth of deposits. Homoeopathic treatment is relevant across all stages for symptom management; severe stage III–IV with large endometriomas or extensive adhesions may additionally require surgical assessment.' },
            { q: 'Can homoeopathy shrink endometriotic deposits?', a: 'Clinical practice shows that sustained homoeopathic treatment can reduce the size and activity of endometriotic lesions, reduce adhesion formation, and control symptoms significantly — particularly in earlier stages of the disease.' },
            { q: 'Is homoeopathy safe for endometriosis if I am trying to conceive?', a: 'Yes. Homoeopathic treatment is completely safe during natural conception attempts, improves uterine receptivity and ovarian function, and avoids the ovarian suppression caused by hormone therapies like GnRH analogues which prevent conception.' },
            { q: 'How long does homoeopathic treatment take for endometriosis?', a: 'Pain relief and menstrual improvement are typically noticed within 2–3 cycles. Reduction in endometriotic deposits and improved fertility outcomes develop over 6–12 months of consistent constitutional treatment.' },
        ],
    },

    'leucorrhoea': {
        title: 'Leucorrhoea', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Leucorrhoea (white or yellowish vaginal discharge) is a common gynaecological complaint. While some discharge is normal, excessive, offensive, or irritating discharge indicates an underlying infection or hormonal imbalance. Homoeopathy treats both acute infections and the chronic constitutional tendency effectively.',
        symptoms: ['Excessive vaginal discharge — white, yellow, or greenish', 'Offensive or sour odour', 'Itching and burning in the vaginal area', 'Weakness and lower back pain', 'Irritation or excoriation of the vulva'],
        causes: ['Bacterial vaginosis', 'Fungal (Candida) infection', 'Hormonal imbalance (oestrogen fluctuations)', 'Poor hygiene practices', 'Sexually transmitted infections', 'Anaemia and nutritional deficiency'],
        homeopathy: 'Sepia (yellow discharge, bearing-down sensation), Pulsatilla (thick, creamy, bland discharge — mild, changeable patient), Calcarea Carbonica (milky discharge in overweight women), Kreosotum (acrid, excoriating discharge causing intense itching), and Borax (white discharge like egg white).',
        faq: [
            { q: 'What is the difference between normal vaginal discharge and leucorrhoea?', a: 'Normal discharge is clear to white, odourless, and varies with the menstrual cycle. Leucorrhoea becomes a concern when discharge is excessive, has an unpleasant odour, causes itching or burning, or is accompanied by lower back pain — indicating an underlying imbalance.' },
            { q: 'What causes recurrent vaginal fungal infections?', a: 'Recurrent Candida infections are linked to antibiotic overuse disrupting normal flora, high sugar diet feeding fungal growth, hormonal fluctuations (pregnancy, oral contraceptives), diabetes, and immune weakness. Homoeopathy addresses the constitutional terrain making the patient susceptible.' },
            { q: 'How is homoeopathic leucorrhoea treatment different from antifungals?', a: 'Antifungals treat only the immediate fungal overgrowth. Homoeopathy addresses the immune and hormonal terrain that allows recurrent infections to occur — reducing susceptibility and preventing relapses rather than just treating each episode.' },
            { q: 'Does leucorrhoea treatment in homoeopathy require internal medicine only?', a: 'Primarily yes — homoeopathy treats leucorrhoea from within through constitutional remedies. Local hygiene (gentle washing, cotton underwear, avoiding harsh products) is also important, but no external applications are required.' },
            { q: 'Can leucorrhoea during pregnancy be treated homoeopathically?', a: 'Yes. Homoeopathic remedies are completely safe during pregnancy and effectively manage leucorrhoea without the risks associated with some antifungal agents in the first trimester.' },
        ],
    },

    'menopause': {
        title: 'Menopause', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Menopause marks the end of a woman\'s reproductive years, typically occurring around age 50. The hormonal shifts cause a range of physical and emotional symptoms. Homoeopathy offers a safe, hormone-free alternative to HRT, addressing hot flushes, mood changes, and bone health from a holistic perspective.',
        symptoms: ['Hot flushes and night sweats', 'Irregular and then absent periods', 'Vaginal dryness and discomfort', 'Mood swings, irritability, and depression', 'Sleep disturbances and insomnia', 'Decreased libido and joint pains'],
        causes: ['Natural decline in oestrogen and progesterone production', 'Surgical menopause (after oophorectomy)', 'Chemotherapy or radiation-induced menopause', 'Premature ovarian insufficiency'],
        homeopathy: 'Lachesis (intense hot flushes, talkative, jealous — worse on waking), Sepia (loss of libido, indifference, wants to be alone), Sanguinaria (hot flushes with right-sided headache), Amylium Nitrosum (sudden heat waves), and Pulsatilla (mild, weepy, wants consolation) — prescribed after detailed case analysis of menopausal pattern.',
        faq: [
            { q: 'What is the difference between perimenopause and menopause?', a: 'Perimenopause is the transitional phase lasting 4–10 years before the final period, during which hormones fluctuate and symptoms begin. Menopause is officially confirmed after 12 consecutive months without a period. Homoeopathy can be started effectively during perimenopause.' },
            { q: 'How long do menopausal symptoms typically last?', a: 'Hot flushes and night sweats peak in the first 2 years after the final period but can persist for 5–10 years in some women. Constitutional homoeopathic treatment significantly reduces both intensity and duration of these symptoms.' },
            { q: 'Is homoeopathy a safe alternative to hormone replacement therapy (HRT)?', a: 'Yes. For women who cannot or prefer not to use HRT — particularly those with a history of breast cancer, blood clots, or cardiovascular disease — homoeopathy provides effective symptom management without the associated hormonal risks.' },
            { q: 'Can homoeopathy help with post-menopausal osteoporosis?', a: 'Homoeopathy supports bone health through remedies like Calcarea Phosphorica and Symphytum. DEXA bone density scans should be monitored regularly, and adequate calcium, Vitamin D intake, and weight-bearing exercise are essential alongside treatment.' },
            { q: 'Can homoeopathy improve libido and vaginal dryness at menopause?', a: 'Yes. Remedies like Sepia and Lycopodium address both the physical (vaginal dryness, discomfort) and psychological (loss of interest, indifference) aspects of reduced libido — offering a whole-person approach not possible with local hormonal creams alone.' },
        ],
    },

    'uterine-fibroids': {
        title: 'Uterine Fibroids', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Uterine fibroids are benign smooth muscle tumours of the uterus, found in up to 70% of women by age 50. They cause heavy periods, pelvic pressure, and infertility. Homoeopathy can reduce fibroid size, control heavy bleeding, and avoid surgical intervention in many cases.',
        symptoms: ['Heavy and prolonged menstrual bleeding', 'Pelvic pressure or a sensation of fullness', 'Frequent urination from bladder compression', 'Constipation from rectal pressure', 'Pelvic pain or backache', 'Infertility or repeated miscarriage'],
        causes: ['Oestrogen dominance', 'Genetic predisposition', 'African ancestry (higher incidence)', 'Obesity', 'Early menarche', 'Nulliparity'],
        homeopathy: 'Thlaspi Bursa Pastoris (excess bleeding from fibroids), Fraxinus Americanus (fibroid with heavy bearing-down sensation), Aurum Metallicum (multiple fibroids, perfectionist personality), Calcarea Carbonica (large fibroids in overweight women), and Thuja (multiple growths, history of vaccination) are individually prescribed.',
        faq: [
            { q: 'Are uterine fibroids dangerous?', a: 'Most fibroids are benign (non-cancerous) and many women have them without symptoms. However, they can cause significant problems including severe bleeding leading to anaemia, fertility issues, recurrent miscarriage, and bladder or bowel compression. Cancer risk (leiomyosarcoma) is very rare — under 0.1%.' },
            { q: 'How does oestrogen dominance cause fibroids?', a: 'Fibroids are oestrogen-sensitive tumours — oestrogen promotes their growth, explaining why they typically shrink after menopause. Factors increasing oestrogen relative to progesterone (obesity, PCOS, no pregnancies) increase fibroid risk and growth rate.' },
            { q: 'Can homoeopathy shrink uterine fibroids completely?', a: 'Homoeopathy can reduce fibroid size and symptoms significantly in small-to-medium fibroids, particularly submucosal and intramural types. Large fibroids (>5cm) or those causing severe complications like urinary obstruction may still require surgical evaluation.' },
            { q: 'How often should fibroid size be monitored during homoeopathic treatment?', a: 'Ultrasound monitoring every 3–6 months is recommended initially to track treatment response. Once fibroid size is stable or reducing, annual monitoring is usually sufficient. Improvement in symptoms (lighter periods, less pelvic pressure) is often noted before size changes.' },
            { q: 'Can fibroids affect pregnancy and can homoeopathy help?', a: 'Fibroids depending on their size and location can cause infertility, miscarriage, or complications during pregnancy. Homoeopathic treatment improving fibroid size and uterine circulation before conception significantly improves outcomes.' },
        ],
    },

    'irregular-menstruation': {
        title: 'Irregular Menstruation', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Irregular menstruation encompasses late, early, heavy, scanty, or absent periods. It reflects underlying hormonal imbalance and significantly impacts women\'s quality of life and fertility. Homoeopathy regularises the menstrual cycle by addressing the hormonal axis, lifestyle factors, and emotional health holistically.',
        symptoms: ['Periods coming earlier or later than expected', 'Very heavy or very scanty bleeding', 'Cycles shorter than 21 days or longer than 35 days', 'Painful cramps (dysmenorrhoea)', 'Premenstrual syndrome (PMS)', 'Absence of periods (amenorrhoea)'],
        causes: ['Hormonal imbalances (PCOS, thyroid disorders)', 'Extreme weight loss or gain', 'Excessive exercise', 'Stress and emotional disturbances', 'Perimenopause', 'Structural uterine abnormalities'],
        homeopathy: 'Pulsatilla (suppressed periods from getting cold/wet, mild patient), Sepia (late, scanty periods with dragging pain), Natrum Muriaticum (late periods from grief or stress), Lachesis (early, heavy periods with clots), and Caulophyllum (dysmenorrhoea, irregular periods from uterine weakness) — selected after careful case-taking.',
        faq: [
            { q: 'What is considered a normal menstrual cycle length?', a: 'A normal cycle is 21–35 days from the first day of one period to the first day of the next, with flow lasting 2–7 days. Cycle length naturally varies — what matters most is whether the pattern is consistent for that individual.' },
            { q: 'When should irregular periods prompt a medical evaluation?', a: 'Seek evaluation if periods are absent for 3+ months (without pregnancy), if cycles are consistently below 21 or above 35 days, if there is sudden very heavy bleeding (soaking through a pad/tampon per hour), or if irregularity is accompanied by other symptoms like hair loss, weight changes, or galactorrhoea.' },
            { q: 'How quickly can homoeopathy regularise menstrual cycles?', a: 'Most patients see improvement in cycle pattern within 2–3 menstrual cycles. Complete regularisation typically occurs over 4–6 months of individualised homoeopathic treatment, depending on the underlying cause.' },
            { q: 'Does homoeopathy help with painful periods (dysmenorrhoea)?', a: 'Yes. Homoeopathic remedies like Magnesia Phosphorica (cramping better with heat and pressure), Colocynth (bending double with pain), and Caulophyllum (weak uterine contractions) are highly effective for menstrual cramps with no side effects.' },
            { q: 'Can stress alone cause irregular periods and how does homoeopathy help?', a: 'Absolutely. Chronic stress disrupts the hypothalamic-pituitary-ovarian axis, delaying or suppressing ovulation. Remedies like Natrum Muriaticum and Ignatia address the stress-related hormonal disruption at its emotional root — something no hormonal medication can achieve.' },
        ],
    },

    // ── 5. PEDIATRIC ─────────────────────────────────────────────────────────

    'recurrent-cold-cough': {
        title: 'Recurrent Cold & Cough in Children', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Many children suffer from recurrent upper respiratory infections — catching cold 6–8 times a year. Homoeopathy strengthens the immune system, reducing both frequency and severity of episodes over 3–6 months of constitutional treatment.',
        symptoms: ['Frequent runny nose and sneezing', 'Recurrent cough especially at night', 'Low-grade fever with infections', 'Enlarged tonsils or lymph nodes', 'Irritability and loss of appetite during illness'],
        causes: ['Immature immune system', 'Exposure to daycare/school environments', 'Nutritional deficiencies', 'Environmental allergens', 'Family history of atopy'],
        homeopathy: 'Baryta Carbonica (frequent tonsillitis, shy child), Calcarea Carbonica (chubby, sweaty, cold-sensitive), Tuberculinum (thin child, recurrent chest colds), Pulsatilla (clingy, mild, changeable symptoms), Silicea (recurrent infections with pus).',
        faq: [
            { q: 'How many colds per year is normal for a child?', a: 'Young children typically get 6–8 colds per year, especially in the first years of daycare or school. More than 8–10 episodes per year, or infections requiring repeated antibiotics, suggest a constitutionally weakened immune response that benefits from homoeopathic treatment.' },
            { q: 'Should I give my child antibiotics every time they get a cold?', a: 'No. Most childhood colds are viral and do not respond to antibiotics. Overuse of antibiotics disrupts the gut microbiome, weakens long-term immunity, and promotes antibiotic resistance. Homoeopathy manages acute episodes and builds resilience without these risks.' },
            { q: 'Can homoeopathy boost my child\'s immunity permanently?', a: 'Constitutional homoeopathic treatment strengthens the child\'s immune response over 3–6 months, typically reducing illness frequency by 50–70%. Many children treated constitutionally also have fewer and milder infections in subsequent years.' },
            { q: 'Is homoeopathy safe for toddlers and infants?', a: 'Absolutely. Homoeopathic remedies are among the safest medicines for children of all ages, including newborns. They have no toxic side effects and can be administered dissolved in water if the child cannot take tablets.' },
            { q: 'What nutrition supports immunity alongside homoeopathic treatment in children?', a: 'Adequate Vitamin D, zinc, and iron are foundational. A diet rich in whole foods, vegetables, and fruits, combined with reduced sugar intake, supports the immune system. Probiotics may also help restore gut microbiome balance.' },
        ],
    },

    'adenoids-tonsillitis': {
        title: 'Adenoids & Tonsillitis', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Tonsillar and adenoid hypertrophy is a common childhood condition causing recurrent throat infections, snoring, and ear problems. Homoeopathy offers a surgical-sparing approach by shrinking tissue and boosting local immunity.',
        symptoms: ['Recurrent sore throat and fever', 'Difficulty swallowing', 'Mouth breathing and snoring', 'Muffled voice', 'Ear infections and hearing difficulty', 'Enlarged inflamed tonsils'],
        causes: ['Recurrent bacterial or viral throat infections', 'Weakened immunity', 'Environmental allergens and pollution', 'Family predisposition', 'Poor nutrition'],
        homeopathy: 'Baryta Carbonica (large tonsils, timid child), Calcarea Carbonica (recurrent tonsillitis in chubby child), Belladonna (acute red hot tonsillitis), Mercurius Solubilis (pus-forming tonsillitis, bad breath), Phytolacca (hard dark-red tonsils).',
        faq: [
            { q: 'What is the difference between tonsillitis and a normal sore throat?', a: 'Tonsillitis specifically involves bacterial or viral infection of the tonsils, causing significant swelling, redness, often white patches or pus, and high fever. A sore throat from a cold tends to be milder without visible tonsillar involvement.' },
            { q: 'When are tonsils truly large enough to cause problems?', a: 'Tonsils graded 3+ or 4 on a 0–4 scale are considered pathologically enlarged. Clinically, concern arises when they cause snoring, sleep apnoea, difficulty swallowing, or recurrent infections (7+ episodes/year). Homoeopathic treatment is most beneficial before reaching this threshold.' },
            { q: 'Can homoeopathy avoid tonsillectomy in children?', a: 'In mild to moderate cases, consistent homoeopathic treatment over 3–6 months significantly reduces tonsil size and infection frequency, often making surgery unnecessary. Severe cases with obstructive sleep apnoea or 7+ annual infections may still require surgical evaluation.' },
            { q: 'How is acute tonsillitis managed homoeopathically?', a: 'Acute remedies like Belladonna (red, hot, throbbing tonsillitis with sudden onset) or Hepar Sulph (pus-forming tonsillitis, very sensitive to cold) are prescribed based on the specific symptom picture for rapid relief — often within 24–48 hours.' },
            { q: 'Does removing tonsils affect a child\'s immunity?', a: 'The tonsils are part of the immune system (Waldeyer\'s ring) and help sample pathogens entering the throat. While tonsillectomy is sometimes necessary, homoeopathy\'s ability to avoid or delay surgery preserves this immunological tissue during critical childhood development.' },
        ],
    },

    'bedwetting': {
        title: 'Bedwetting (Enuresis)', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Nocturnal enuresis affects 15% of 5-year-olds and can persist into adolescence. It causes significant emotional distress. Homoeopathy offers gentle, effective treatment addressing both physical and emotional aspects without any side effects.',
        symptoms: ['Involuntary urination during sleep', 'Deep sleep, hard to wake', 'Daytime urinary urgency in some cases', 'Emotional distress, shame, and anxiety about the issue'],
        causes: ['Delay in bladder maturation', 'Excessive urine production at night', 'Deep sleep insensitive to bladder signals', 'Psychological stress', 'Constipation compressing the bladder'],
        homeopathy: 'Equisetum (bedwetting without clear cause, dreams), Causticum (wets in first sleep, urinary weakness), Kreosotum (deep sleeper, urgent urination), Belladonna (wets in first part of night), Pulsatilla (emotional, clingy child).',
        faq: [
            { q: 'Is bedwetting beyond age 5 always a problem?', a: 'Bedwetting is developmentally normal until age 5–6. It becomes a clinical concern if it persists beyond age 6, occurs more than twice a week for 3+ consecutive months, or causes significant emotional distress to the child or family.' },
            { q: 'What causes some children to wet the bed while siblings do not?', a: 'Bedwetting has a strong genetic component — if one parent wet the bed, the child has a 40% chance; if both parents did, the chance rises to 70–80%. Other factors include deep sleep patterns, delayed bladder maturation, and excessive nocturnal urine production (nocturnal polyuria).' },
            { q: 'At what age should a child seek treatment for bedwetting?', a: 'Treatment is recommended if it persists beyond age 6 or causes emotional distress at any age. The earlier homoeopathic treatment begins, the faster the response — most children show significant improvement within 4–8 weeks.' },
            { q: 'Does homoeopathy address the emotional impact of bedwetting?', a: 'Yes. Homoeopathy treats both the physical bladder weakness and the shame, anxiety, and social withdrawal the child experiences. This integrated approach leads to faster emotional recovery alongside physical improvement.' },
            { q: 'What behavioural strategies support homoeopathic treatment for bedwetting?', a: 'Fluid restriction in the 2 hours before bedtime, regular toilet visits before sleep, positive reinforcement (reward charts), and avoiding punishing the child all complement homoeopathic treatment and improve outcomes.' },
        ],
    },

    'childhood-asthma': {
        title: 'Childhood Asthma', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Asthma is the most common chronic disease in children, affecting 1 in 10 worldwide. Homoeopathy reduces the frequency of attacks and long-term dependency on inhalers by addressing the allergic constitution.',
        symptoms: ['Recurrent wheezing and breathlessness', 'Nocturnal cough waking child', 'Exercise-induced breathlessness', 'Chest tightness', 'Frequent respiratory infections triggering attacks'],
        causes: ['Genetic predisposition and family history of atopy', 'Environmental allergens (dust, pets, pollen)', 'Respiratory infections in early life', 'Passive smoking exposure', 'Emotional stress and anxiety'],
        homeopathy: 'Arsenicum Album (anxious, restless, worse at midnight), Natrum Sulph (damp weather triggers), Ipecacuanha (nausea with wheeze), Spongia Tosta (dry barking wheeze), Antimonium Tartaricum (rattling mucus, difficult expectoration).',
        faq: [
            { q: 'How do I know if my child\'s cough is asthma or just recurrent colds?', a: 'Asthma cough is typically dry, worse at night or with exercise, and occurs in episodes — often triggered by allergens, cold air, or infections. A spirometry test or peak flow monitoring can confirm airways obstruction. Recurrent wheeze in any child warrants paediatric evaluation.' },
            { q: 'Can childhood asthma be outgrown?', a: 'Around 50% of children with mild asthma see significant improvement or complete resolution by adolescence as the airways grow. Constitutional homoeopathic treatment improves this outcome significantly — many treated children become effectively symptom-free by adulthood.' },
            { q: 'Can a child outgrow asthma with homoeopathic treatment?', a: 'Yes. Many children treated constitutionally show progressive reduction in attack frequency and severity, achieving effective remission well before adulthood — particularly when treatment is started young and allergen exposure is managed.' },
            { q: 'Should I stop my child\'s inhaler during homoeopathic treatment?', a: 'Never stop an inhaler abruptly. As attacks become less frequent and milder over weeks to months of homoeopathic treatment, inhaler requirement naturally decreases — any formal step-down should be guided by your paediatrician or respiratory physician.' },
            { q: 'What home environment changes help children with asthma?', a: 'Use dust-mite-proof mattress and pillow covers, vacuum with HEPA filters, avoid carpets in the bedroom, keep pets out of the child\'s room, avoid strong scents and aerosols, and ensure no smoking indoors. These measures dramatically reduce allergen load and attack frequency.' },
        ],
    },

    'adhd': {
        title: 'ADHD', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'ADHD is a neurodevelopmental condition affecting 5–10% of school-age children. Homoeopathy offers a safe, side-effect-free approach, improving focus, behaviour, and emotional regulation without stimulant medication side effects.',
        symptoms: ['Difficulty sustaining attention', 'Easily distracted and forgetful', 'Excessive talking and interrupting', 'Unable to sit still', 'Impulsive decision-making', 'Poor academic performance despite normal intelligence'],
        causes: ['Frontal lobe dopaminergic pathway immaturity', 'Genetic predisposition', 'Prenatal toxin or stress exposure', 'Premature birth', 'Dietary factors in susceptible children'],
        homeopathy: 'Stramonium (hyperactive, fearful, impulsive), Tuberculinum (restless, destructive), Medorrhinum (hyperactive, loves outdoors), Hyoscyamus (fidgety, silly behaviour), Baryta Carbonica (inattentive, shy, slow to learn).',
        faq: [
            { q: 'Is ADHD a real medical condition or just poor parenting?', a: 'ADHD is a well-documented neurodevelopmental condition with clear neurobiological underpinnings — differences in dopaminergic and noradrenergic pathways, frontal lobe activity, and brain structure. It is not caused by parenting style, though supportive parenting significantly affects outcomes.' },
            { q: 'What is the difference between ADHD-inattentive and ADHD-hyperactive types?', a: 'ADHD-inattentive (previously ADD) is characterised by poor focus, forgetfulness, and disorganisation without hyperactivity — often missed in girls. ADHD-hyperactive/combined involves restlessness, impulsivity, and talking excessively. Homoeopathic remedy selection reflects which presentation dominates.' },
            { q: 'Can homoeopathy replace stimulant medication for ADHD?', a: 'In mild to moderate ADHD, constitutional homoeopathy often provides meaningful improvement in focus and behaviour without medication. In severe ADHD significantly impairing school performance, it is best used alongside stimulant therapy — allowing potentially lower doses over time.' },
            { q: 'How long to see improvement in ADHD with homoeopathy?', a: 'Parents and teachers typically notice behavioural improvements — reduced impulsivity, better listening — within 6–12 weeks. Academic and social improvements develop over 3–6 months of consistent constitutional treatment.' },
            { q: 'Does diet affect ADHD and should changes be made alongside homoeopathy?', a: 'Certain children with ADHD show sensitivity to artificial colours, preservatives, and high-sugar diets. An omega-3 rich diet and reducing processed foods supports brain function. These dietary changes complement but do not replace constitutional homoeopathic treatment.' },
        ],
    },

    'growth-delays': {
        title: 'Growth Delays', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Growth delay can result from nutritional, hormonal, or constitutional factors. Homoeopathy stimulates the child\'s vital force, improves nutrient assimilation, and addresses the underlying cause of growth delay safely and gently.',
        symptoms: ['Height below 3rd percentile for age', 'Delayed bone age', 'Delayed puberty', 'Poor weight gain despite adequate diet', 'Frequent illness reducing absorption'],
        causes: ['Nutritional deficiencies (zinc, calcium, protein)', 'Growth hormone deficiency', 'Constitutional delay', 'Chronic illness reducing absorption', 'Emotional deprivation and stress'],
        homeopathy: 'Calcarea Phosphorica (delayed ossification, poor assimilation), Silicea (thin, poorly nourished, recurrently ill), Baryta Carbonica (very short, mentally and physically delayed), Natrum Muriaticum (thin, emaciated despite eating), Phosphorus (tall and thin, growing pains).',
        faq: [
            { q: 'How do doctors assess if a child\'s growth is truly delayed?', a: 'Growth is assessed by plotting height and weight on standardised growth charts, evaluating the growth velocity (rate of growth over time), bone age X-ray, and if indicated, hormonal tests (IGF-1, growth hormone stimulation tests). A bone age significantly behind chronological age confirms delay.' },
            { q: 'What is constitutional growth delay vs growth hormone deficiency?', a: 'Constitutional delay is the most common cause — the child grows slowly but normally, with bone age also delayed, and typically achieves normal final height. Growth hormone deficiency involves a true hormonal deficit requiring medical treatment. Homoeopathy supports both scenarios.' },
            { q: 'Can homoeopathy help a child not growing despite good nutrition?', a: 'If growth delay is constitutional or related to poor assimilation, malabsorption, or recurrent illness, homoeopathy can stimulate appetite, improve nutrient absorption, strengthen immunity, and support healthy growth trajectory.' },
            { q: 'What is the role of calcium and vitamin D alongside homoeopathic treatment?', a: 'Complementary and important. Homoeopathy improves the body\'s ability to absorb and utilise nutrients including calcium. But adequate dietary calcium, Vitamin D, protein, and zinc are still essential building blocks and should not be neglected.' },
            { q: 'At what age is it too late to address growth delay with homoeopathy?', a: 'Treatment is most effective while growth plates are still open — typically until age 16 in girls and 18 in boys. However, even during puberty, improving nutrition, sleep quality, and overall health supports remaining growth potential.' },
        ],
    },

    // ── 6. MENTAL HEALTH ─────────────────────────────────────────────────────

    'anxiety': {
        title: 'Anxiety Disorders', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Anxiety disorders affect 1 in 4 people globally. Homoeopathy addresses anxiety from its emotional root, providing lasting relief without dependency or sedation caused by conventional anxiolytics.',
        symptoms: ['Persistent worry and rumination', 'Restlessness and inability to relax', 'Palpitations and racing heart', 'Physical tension, headaches, muscle aches', 'Difficulty sleeping', 'Avoidance of anxiety-provoking situations'],
        causes: ['Chronic stress and overwork', 'Traumatic life events', 'Genetic predisposition', 'Neurotransmitter imbalance', 'Thyroid disorders', 'Childhood adversity'],
        homeopathy: 'Argentum Nitricum (anticipatory anxiety, fears crowds/heights), Gelsemium (paralysing pre-event anxiety, trembling), Aconitum Napellus (sudden panic attacks, fear of death), Phosphorus (open, fearful, needs reassurance), Kali Arsenicicum (health anxiety, fear of disease).',
        faq: [
            { q: 'What is the difference between normal worry and an anxiety disorder?', a: 'Normal worry is proportionate, time-limited, and does not significantly impair functioning. An anxiety disorder involves excessive, persistent, disproportionate worry that interferes with daily life, relationships, or work — and is often accompanied by physical symptoms like palpitations, insomnia, and muscle tension.' },
            { q: 'Can anxiety cause physical symptoms?', a: 'Yes. Anxiety activates the stress response producing very real physical symptoms — racing heart, chest tightness, shortness of breath, headaches, digestive upset, frequent urination, and fatigue. Homoeopathy addresses both the mental anxiety and its physical manifestations simultaneously.' },
            { q: 'Can homoeopathy treat anxiety without causing drowsiness?', a: 'Yes. Homoeopathic remedies are not sedatives — they reduce anxiety by correcting the underlying constitutional imbalance. Patients remain fully alert, functional, and clear-headed throughout treatment — a significant advantage over conventional anxiolytics.' },
            { q: 'Can I take homoeopathic remedies alongside psychiatric medication?', a: 'Yes, they are fully compatible. Homoeopathic remedies do not interact with benzodiazepines, SSRIs, or SNRIs. Any reduction in psychiatric medication must only be made gradually under your psychiatrist\'s supervision — never independently.' },
            { q: 'How long does homoeopathic treatment take for anxiety disorders?', a: 'Acute anxiety symptoms often improve within 2–4 weeks. Deeper constitutional treatment addressing chronic anxiety patterns and trauma-related anxiety typically takes 3–6 months, with patients progressively gaining greater emotional resilience.' },
        ],
    },

    'depression': {
        title: 'Depression', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Depression affects 280 million people worldwide. Homoeopathy treats depression holistically — addressing the emotional cause (grief, loss, suppression) alongside physical symptoms, offering a complementary pathway to recovery.',
        symptoms: ['Persistent low mood and hopelessness', 'Loss of interest in enjoyable activities', 'Fatigue and low energy', 'Disturbed sleep — insomnia or hypersomnia', 'Appetite changes and weight fluctuation', 'Difficulty concentrating'],
        causes: ['Grief, loss, or bereavement', 'Chronic stress and burnout', 'Traumatic events or abuse', 'Hormonal imbalances (postpartum, menopause, thyroid)', 'Neurotransmitter dysregulation', 'Social isolation'],
        homeopathy: 'Natrum Muriaticum (depression from suppressed grief), Ignatia Amara (acute grief, sighing), Aurum Metallicum (deep hopelessness, perfectionist), Sepia (indifference, exhausted women), Pulsatilla (weepy, clingy, better with consolation).',
        faq: [
            { q: 'How is clinical depression different from just feeling sad?', a: 'Clinical depression (major depressive disorder) involves persistent low mood lasting 2+ weeks, accompanied by loss of interest, disrupted sleep, appetite changes, cognitive impairment, and sometimes suicidal thoughts. It causes significant functional impairment — unlike normal sadness which is proportionate and time-limited.' },
            { q: 'Can grief cause depression and how does homoeopathy help?', a: 'Unresolved or suppressed grief is a common trigger for clinical depression. Homoeopathic remedies like Ignatia (acute grief, sighing, paradoxical symptoms) and Natrum Muriaticum (chronic suppressed grief, unable to accept consolation) directly address the emotional root that antidepressants alone cannot reach.' },
            { q: 'Is homoeopathy safe for depression alongside antidepressants?', a: 'Yes. Homoeopathic remedies are compatible with all classes of antidepressants. As treatment progresses and mood improves sustainably, antidepressant reduction should only be done very gradually under your psychiatrist\'s guidance — never abruptly.' },
            { q: 'Can homoeopathy treat postpartum depression?', a: 'Yes, very effectively. Postpartum depression responds well to homoeopathy — and is completely safe for breastfeeding mothers, with no transfer of medicinal substances through breast milk in ultra-diluted homoeopathic potencies.' },
            { q: 'When should someone with depression seek emergency help?', a: 'If someone is experiencing suicidal thoughts, plans to harm themselves, or is unable to care for themselves, they need immediate professional psychiatric care. Homoeopathy is a supportive and complementary treatment — it is not a substitute for crisis intervention.' },
        ],
    },

    'insomnia': {
        title: 'Insomnia', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Insomnia affects 30% of adults, causing fatigue, cognitive impairment, and mood disturbances. Homoeopathy offers effective treatment for both acute and chronic insomnia without the dependency and grogginess of sleeping pills.',
        symptoms: ['Difficulty falling asleep despite tiredness', 'Waking multiple times through the night', 'Early morning waking', 'Unrefreshing sleep and daytime fatigue', 'Anxiety or racing thoughts at bedtime'],
        causes: ['Stress, anxiety, and worry', 'Shift work and irregular schedules', 'Caffeine, alcohol, and stimulants', 'Chronic pain or physical illness', 'Menopause and hormonal changes', 'Depression'],
        homeopathy: 'Coffea Cruda (mind too active, excited thoughts prevent sleep), Nux Vomica (wakes at 3 am, light sleeper from stress), Passiflora (insomnia from worry and exhaustion), Arsenic Album (anxiety-driven insomnia after midnight), Ignatia (sleeplessness from grief or shock).',
        faq: [
            { q: 'How much sleep do adults actually need?', a: 'Most adults need 7–9 hours of sleep. Sleep need is individual — some function well on 7 hours while others need 9. Quality matters as much as quantity: unrefreshing sleep lasting 9 hours can leave someone more impaired than good-quality sleep of 7 hours.' },
            { q: 'What is sleep hygiene and does it really help insomnia?', a: 'Sleep hygiene refers to behavioural and environmental practices promoting good sleep — consistent sleep times, a cool dark room, no screens before bed, avoiding caffeine after 2pm, and limiting alcohol. These measures are highly effective for mild insomnia and potentiate homoeopathic treatment.' },
            { q: 'How quickly does homoeopathy work for insomnia?', a: 'Many patients notice improvement within 3–7 days of the correct remedy. Chronic insomnia with deep emotional causes takes 4–8 weeks for sustained improvement. The advantage is that benefits compound over time without any dependency or tolerance developing.' },
            { q: 'Is homoeopathy habit-forming for sleep like sleeping pills?', a: 'No. Homoeopathic remedies do not create dependency, tolerance, or next-day sedation. They restore the body\'s natural sleep rhythm rather than chemically inducing unconsciousness. Patients typically find they need treatment for shorter periods over time.' },
            { q: 'Can insomnia from shift work or jet lag be treated homoeopathically?', a: 'Yes. Cocculus Indicus is particularly indicated for insomnia from irregular schedules, shift work, and jet lag — where the body\'s circadian rhythm is disrupted. Constitutional treatment also improves overall sleep architecture and adaptability.' },
        ],
    },

    'ocd': {
        title: 'OCD', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'OCD is a chronic condition characterised by intrusive thoughts and compulsive behaviours that cause significant impairment. Homoeopathy addresses OCD constitutionally, reducing the intensity of obsessional thinking and compulsive urges.',
        symptoms: ['Unwanted intrusive repetitive thoughts', 'Compulsive rituals — handwashing, checking, counting', 'Intense anxiety when rituals not performed', 'Significant time lost to obsessions/compulsions', 'Interference with daily functioning'],
        causes: ['Neurobiological abnormality (serotonin, glutamate pathways)', 'Genetic predisposition', 'Streptococcal infection (PANDAS in children)', 'Childhood trauma', 'Perfectionist personality'],
        homeopathy: 'Arsenicum Album (fear of contamination, perfectionism), Natrum Muriaticum (ritualistic behaviour from suppressed emotions), Syphilinum (compulsive handwashing, fear of germs), Thuja (fixed ideas, body rituals), Aurum Metallicum (perfectionism, self-blame).',
        faq: [
            { q: 'Is OCD just being very neat or clean? What is it really?', a: 'OCD is a serious neurobiological condition far beyond personality traits like tidiness. Obsessions are distressing, ego-dystonic intrusive thoughts the person does not want. Compulsions are time-consuming rituals performed to temporarily relieve anxiety — not preferences. It can cause severe functional impairment.' },
            { q: 'What is PANDAS and how is it relevant to OCD in children?', a: 'PANDAS (Paediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal infections) is a subtype where OCD symptoms arise suddenly following a streptococcal throat infection, due to antibodies cross-reacting with brain tissue. Homoeopathy — particularly post-streptococcal constitutional remedies — can be very helpful.' },
            { q: 'Can homoeopathy help OCD without SSRIs?', a: 'In mild to moderate OCD, constitutional homoeopathy can provide significant improvement without medication. In severe OCD with major functional impairment, it works best alongside Cognitive Behavioural Therapy (ERP) and SSRI therapy, potentially allowing lower medication doses over time.' },
            { q: 'How long does OCD treatment take with homoeopathy?', a: 'Meaningful reduction in OCD intensity — obsession frequency, compulsion duration, and associated anxiety — is typically seen in 3–6 months. Deep constitutional treatment over 12–18 months provides the most lasting and transformative results.' },
            { q: 'Can homoeopathy address OCD that started after trauma?', a: 'Yes. Trauma-related OCD responds particularly well to remedies that address suppressed emotional states — Natrum Muriaticum, Staphysagria, Ignatia — treating the psychological wound that feeds the obsessive-compulsive cycle.' },
        ],
    },

    'stress-burnout': {
        title: 'Stress & Burnout', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Burnout is a modern epidemic affecting professionals worldwide, causing physical exhaustion, emotional depletion, and cynicism. Homoeopathy restores vital energy, emotional resilience, and physical health depleted by prolonged stress.',
        symptoms: ['Extreme fatigue not relieved by rest', 'Emotional exhaustion and detachment', 'Reduced performance and productivity', 'Physical symptoms — headaches, gut problems, palpitations', 'Irritability, cynicism, and withdrawal'],
        causes: ['Prolonged work pressure and overload', 'Lack of work-rest boundaries', 'People-pleasing personality', 'Lack of social support', 'Perfectionism and inability to delegate'],
        homeopathy: 'Nux Vomica (driven, ambitious, irritable burnout from overwork), Sepia (exhausted, indifferent from overgiving), Kali Phosphoricum (nervous exhaustion from mental fatigue), Picric Acid (complete prostration from study or overwork), Phosphoricum Acidum (burnout from grief or disappointment).',
        faq: [
            { q: 'What are the three core dimensions of burnout?', a: 'Burnout is characterised by emotional exhaustion (feeling completely drained), depersonalisation or cynicism (emotional detachment from work and colleagues), and reduced sense of personal accomplishment. Recognising these helps distinguish burnout from clinical depression, though the two often co-exist.' },
            { q: 'Can the body physically break down from chronic stress and burnout?', a: 'Yes. Chronic stress elevates cortisol, disrupts immune function, impairs gut health, raises blood pressure, and increases cardiovascular risk. Physical symptoms like recurrent infections, IBS, migraines, and insomnia are extremely common in burnout patients.' },
            { q: 'How is burnout different from depression in homoeopathic treatment?', a: 'Homoeopathy distinguishes through detailed case-taking. Work-driven burnout (Nux Vomica, Picric Acid) differs from emotionally-driven depletion from overgiving (Sepia) or burnout from grief and disappointment (Phosphoricum Acidum) — each requiring a distinct constitutional remedy.' },
            { q: 'Can homoeopathy help physical symptoms of stress like IBS or headaches?', a: 'Yes. Stress-related physical symptoms — IBS, tension headaches, palpitations, skin flares, recurrent infections — often resolve simultaneously as homoeopathy treats mind and body as an integrated whole rather than managing each symptom separately.' },
            { q: 'Alongside homoeopathy, what lifestyle changes are most important for burnout recovery?', a: 'Strict boundaries between work and rest, regular physical activity, adequate sleep, reducing screen time, social connection, and purposeful rest (not just passive scrolling) are all essential. Homoeopathy restores the internal resilience to make and sustain these changes.' },
        ],
    },

    'panic-attacks': {
        title: 'Panic Attacks', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Panic attacks are sudden episodes of intense fear causing overwhelming physical symptoms — racing heart, chest tightness, shortness of breath — often without obvious danger. Homoeopathy is effective for both acute attacks and the underlying anxiety driving them.',
        symptoms: ['Sudden surge of intense fear or dread', 'Racing or pounding heartbeat', 'Shortness of breath and choking sensation', 'Chest pain or tightness', 'Dizziness, trembling, and sweating', 'Fear of dying or losing control'],
        causes: ['Generalised anxiety disorder or phobia', 'Chronic stress', 'Hyperventilation triggering panic spiral', 'Caffeine or stimulant use', 'Medical conditions — thyroid, cardiac arrhythmias'],
        homeopathy: 'Aconitum Napellus (sudden intense fear of death — most common acute remedy), Argentum Nitricum (anticipatory panic, crowds, heights), Gelsemium (paralysing fear, trembling weakness), Opium (fright that remains, post-traumatic), Veratrum Album (cold sweat, collapse sensation).',
        faq: [
            { q: 'How do I know if I am having a panic attack or a heart attack?', a: 'Both cause chest pain and pounding heart. Panic attacks typically peak within 10 minutes, are associated with intense fear, tingling, and hyperventilation, and resolve completely. Heart attack pain often radiates to the jaw or arm, worsens with exertion, and does not fully resolve. When in doubt, seek emergency evaluation.' },
            { q: 'Why do panic attacks sometimes happen without any obvious trigger?', a: 'Panic attacks can arise from subconscious anxiety, physiological triggers (caffeine, blood sugar drops, hyperventilation), and sensitised fear circuits in the brain. The first unexpected panic attack often creates a fear of future attacks, perpetuating the cycle — which constitutional homoeopathy specifically addresses.' },
            { q: 'Can taking homoeopathic remedies during a panic attack help immediately?', a: 'Yes. Aconitum 30C or 200C is often effective within minutes during an acute panic attack — particularly when there is intense fear of death, sudden overwhelming terror, and restlessness. Carrying this remedy provides confidence and reduces the fear of attacks themselves.' },
            { q: 'Will homoeopathy permanently stop panic attacks?', a: 'Constitutional homoeopathic treatment over 3–6 months significantly reduces or eliminates panic attacks in most patients by addressing the underlying anxiety constitution — not just suppressing individual episodes.' },
            { q: 'Can panic disorder lead to agoraphobia if untreated?', a: 'Yes. Untreated panic disorder often leads to agoraphobia — avoidance of situations where a panic attack would be embarrassing or help unavailable (public transport, shopping centres, open spaces). Homoeopathic treatment that reduces panic frequency also prevents this avoidance behaviour from developing.' },
        ],
    },


    // ── 7. NEUROLOGICAL ──────────────────────────────────────────────────────

    'migraine': {
        title: 'Migraine', category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: 'Migraine is a complex neurological disorder causing severe, pulsating headaches often with nausea, visual disturbances, and light sensitivity. Homoeopathy reduces both frequency and intensity of migraines by addressing the constitutional triggers rather than merely suppressing pain.',
        symptoms: ['Severe one-sided throbbing headache', 'Nausea and vomiting', 'Sensitivity to light and sound', 'Visual aura (flashes, zigzag lines) before headache', 'Worsened by physical activity', 'Fatigue after the attack (postdrome)'],
        causes: ['Hormonal fluctuations (common in women)', 'Stress and lack of sleep', 'Dietary triggers — chocolate, cheese, caffeine, alcohol', 'Strong smells or bright lights', 'Genetic predisposition'],
        homeopathy: 'Belladonna (right-sided, pulsating, throbbing, sudden onset), Iris Versicolor (migraine with nausea, blurred vision), Natrum Muriaticum (migraine from grief, sun exposure, hammering pain), Sanguinaria (right-sided, worse light and noise, nausea), Spigelia (left-sided, around the eye, stitching pain).',
        faq: [
            { q: 'What is the difference between a migraine and a regular headache?', a: 'A migraine is a neurological event — not just a bad headache. It involves altered brain activity, typically causes moderate-to-severe one-sided throbbing pain, and is accompanied by nausea, vomiting, and extreme sensitivity to light and sound. It can be debilitating for hours to 3 days and is often preceded by warning symptoms (aura).' },
            { q: 'What are the most common migraine triggers and how do I identify mine?', a: 'Common triggers include hormonal changes, stress, poor sleep, skipping meals, dehydration, certain foods (aged cheese, alcohol, caffeine withdrawal), bright lights, and strong smells. Keeping a migraine diary tracking diet, sleep, stress, and weather helps identify personal patterns.' },
            { q: 'Can homoeopathy cure migraines permanently?', a: 'With sustained constitutional treatment over 3–6 months, most patients see 60–80% reduction in migraine frequency and severity. Many achieve complete remission — something rarely possible with conventional preventives which must be taken indefinitely.' },
            { q: 'Can homoeopathy be used during a migraine attack?', a: 'Yes. Acute remedies like Belladonna (sudden, throbbing, right-sided) or Iris Versicolor (with nausea and visual disturbance), taken at the very first sign of an attack, can abort or significantly reduce the migraine without analgesic side effects.' },
            { q: 'Is homoeopathy safe for menstrual migraines?', a: 'Yes. Menstrual migraines — driven by oestrogen withdrawal before periods — respond very well to constitutional homoeopathic treatment. Remedies like Lachesis, Natrum Muriaticum, and Sanguinaria specifically address the hormonal-migraine connection.' },
        ],
    },

    'epilepsy': {
        title: 'Epilepsy', category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: 'Epilepsy involves recurrent, unprovoked seizures caused by abnormal electrical activity in the brain. Homoeopathy is used as a complementary therapy to reduce seizure frequency, improve quality of life, and address the constitutional predisposition to seizures.',
        symptoms: ['Recurrent seizures (convulsions)', 'Temporary confusion and staring spells', 'Uncontrollable jerking movements', 'Loss of consciousness', 'Anxiety and low mood between episodes', 'Memory difficulties'],
        causes: ['Genetic predisposition', 'Brain injury, stroke, or tumour', 'Infections (meningitis, encephalitis)', 'Developmental brain disorders', 'Birth trauma'],
        homeopathy: 'Bufo Rana (nocturnal seizures, often in women around menses), Cuprum Metallicum (tonic-clonic seizures with thumb turning inward), Belladonna (convulsions with high fever), Calcarea Carbonica (seizures in chubby, sweaty children), Causticum (seizures in puberty, right-sided weakness).',
        faq: [
            { q: 'What happens in the brain during a seizure?', a: 'A seizure occurs when abnormal synchronised electrical activity spreads through part or all of the brain. The type of seizure depends on which brain area is involved — focal seizures affect one region, generalised seizures involve both hemispheres simultaneously. This causes the wide variety of seizure presentations.' },
            { q: 'What should I do if someone has a seizure?', a: 'Stay calm, protect the person from injury by clearing hard objects, gently turn them on their side (recovery position) if possible, time the seizure, and do not put anything in their mouth. Call emergency services if the seizure lasts more than 5 minutes or they do not recover consciousness.' },
            { q: 'Can homoeopathy replace anti-epileptic drugs?', a: 'No. Anti-epileptic medication must never be stopped abruptly — this risks dangerous rebound seizures. Homoeopathy works alongside conventional medication to reduce seizure frequency and sometimes allows gradual dose reduction under neurologist supervision over time.' },
            { q: 'How long does homoeopathic treatment for epilepsy take?', a: 'Constitutional treatment is long-term — typically 12–24 months. Gradual reduction in seizure frequency is the realistic goal in the first 6 months, with further consolidation thereafter. Quality of life, mood, and memory often improve earlier.' },
            { q: 'Can lifestyle factors trigger seizures and how does homoeopathy help?', a: 'Yes. Sleep deprivation, alcohol, high fever, and intense stress are common seizure triggers. Homoeopathic constitutional treatment improves sleep quality, stress resilience, and overall neurological stability — indirectly reducing trigger sensitivity.' },
        ],
    },

    'bells-palsy': {
        title: "Bell's Palsy", category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: "Bell's Palsy is sudden, temporary paralysis of the facial muscles on one side, caused by inflammation of the facial nerve. Homoeopathy accelerates nerve recovery and reduces the risk of permanent weakness when started promptly.",
        symptoms: ['Sudden weakness or paralysis of one side of the face', 'Drooping eyelid or corner of the mouth', 'Drooling', 'Difficulty speaking, eating, and closing the eye', 'Altered taste and sensitivity to sound on the affected side'],
        causes: ['Viral reactivation (Herpes simplex, Herpes zoster)', 'Inflammation and swelling of the facial nerve canal', 'Cold exposure to the face', 'Immune suppression', 'Diabetes and hypertension as risk factors'],
        homeopathy: "Aconitum (acute stage, sudden onset after cold exposure), Causticum (right-sided facial paralysis — a key remedy), Cadmium Sulph (left-sided facial palsy), Gelsemium (facial weakness with general weakness, trembling), Hypericum (nerve pain and recovery).",
        faq: [
            { q: "How do I know if facial weakness is Bell's Palsy or a stroke?", a: "A stroke causes weakness only in the lower face (forehead spared, as the upper face has dual cortical representation), and is often accompanied by arm/leg weakness, speech problems, or vision changes. Bell's Palsy affects the entire side of the face including the forehead and is isolated. Any sudden facial weakness warrants emergency evaluation to rule out stroke first." },
            { q: "What is the typical recovery timeline for Bell's Palsy?", a: "Most people (85%) recover fully within 3–6 months without treatment. Recovery begins within 3 weeks in mild cases. Homoeopathic treatment significantly accelerates nerve recovery and reduces the risk of incomplete recovery or residual synkinesis (involuntary facial movements) in the remaining 15%." },
            { q: "How quickly should homoeopathic treatment start for Bell's Palsy?", a: "The earlier the better — starting within the first week gives the best results. Homoeopathy complements standard steroid therapy very effectively and is especially valuable when steroids are contraindicated (e.g., poorly controlled diabetes, pregnancy)." },
            { q: 'Can homoeopathy prevent permanent facial weakness?', a: "Early constitutional treatment significantly reduces the risk of residual weakness and synkinesis after Bell's Palsy — particularly important in severe cases with complete paralysis or no movement at presentation." },
            { q: "What eye care is needed during Bell's Palsy?", a: "The inability to close the eye fully risks corneal dryness and damage. Artificial tear drops during the day, lubricating eye ointment at night, and taping the eye shut while sleeping are essential alongside homoeopathic nerve recovery treatment until eye closure is restored." },
        ],
    },

    'parkinsons': {
        title: "Parkinson's Disease", category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: "Parkinson's Disease is a progressive neurodegenerative disorder affecting movement, balance, and quality of life. Homoeopathy works as a complementary therapy, slowing progression, improving motor symptoms, and supporting the patient's emotional and physical wellbeing.",
        symptoms: ['Resting tremor — "pill-rolling" hand tremor', 'Muscle rigidity and stiffness', 'Bradykinesia (slowness of movement)', 'Shuffling gait and stooped posture', 'Monotone voice and reduced facial expression', 'Sleep disturbances and depression'],
        causes: ['Loss of dopamine-producing neurons in substantia nigra', 'Genetic mutations (LRRK2, SNCA genes)', 'Environmental toxin exposure (pesticides)', 'Oxidative stress and mitochondrial dysfunction', 'Aging'],
        homeopathy: "Rhus Toxicodendron (tremor, stiffness better on movement), Causticum (right-sided involvement, contractures), Argentum Nitricum (trembling, anxiety, hurried), Zincum Metallicum (restless legs, tremor), Gelsemium (general weakness, trembling, drooping of muscles).",
        faq: [
            { q: "What is the difference between Parkinson's disease and essential tremor?", a: "Parkinson's tremor is a resting tremor — worst when the limb is still and improves with intentional movement. Essential tremor is an action tremor — worst during movement (pouring tea, writing). Parkinson's also involves rigidity, slowness, and postural instability, which essential tremor does not." },
            { q: "What are the early warning signs of Parkinson's disease?", a: "Early signs often precede motor symptoms by years: loss of smell, REM sleep behaviour disorder (acting out dreams), constipation, depression, and small handwriting (micrographia). Recognising these allows earlier treatment — both conventional and homoeopathic." },
            { q: "Can homoeopathy slow Parkinson's disease progression?", a: "Clinical experience suggests constitutional homoeopathic treatment can slow progression and improve quality of life, particularly for non-motor symptoms. It cannot reverse neuronal loss but supports the remaining dopaminergic system and improves overall resilience." },
            { q: "Does homoeopathy help with non-motor symptoms of Parkinson's like depression and sleep?", a: "Yes. Homoeopathy is particularly effective for the non-motor burden of Parkinson's — depression, insomnia, anxiety, constipation, fatigue, and cognitive fog — which conventional levodopa therapy does not address adequately." },
            { q: "Is homoeopathic treatment safe alongside levodopa for Parkinson's?", a: "Yes, completely. Homoeopathic remedies do not interact with levodopa, dopamine agonists, or MAO-B inhibitors. Many patients find that improved non-motor symptoms through homoeopathy also allow better tolerance of conventional medications." },
        ],
    },

    'vertigo': {
        title: 'Vertigo', category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: 'Vertigo is the sensation that you or the environment is spinning, often caused by inner ear or central nervous system disorders. Homoeopathy provides rapid and lasting relief for both acute episodes and the underlying constitutional predisposition to vertigo.',
        symptoms: ['Sensation of spinning or tilting', 'Nausea and vomiting', 'Tinnitus (ringing in ears)', 'Hearing loss in Ménière\'s disease', 'Balance problems and risk of falling', 'Nystagmus (involuntary eye movements)'],
        causes: ["BPPV (displaced ear crystals — most common cause)", "Ménière's disease", 'Vestibular neuritis', 'Migraine-associated vertigo', 'Cervical spondylosis affecting vertebral arteries'],
        homeopathy: "Conium Maculatum (vertigo worse turning head sideways or from lying down), Cocculus Indicus (vertigo from motion sickness, car travel, loss of sleep), Gelsemium (vertigo with weakness, difficulty walking), Phosphorus (vertigo when rising, sensitive patient), Belladonna (sudden vertigo with rush of blood to head).",
        faq: [
            { q: 'What is the difference between vertigo, dizziness, and lightheadedness?', a: 'Vertigo is a specific illusion of movement — the room spinning or the self spinning — caused by vestibular dysfunction. Dizziness is a broader term including imbalance and spatial disorientation. Lightheadedness is a presyncope feeling of near-fainting, often from low blood pressure. The distinction guides treatment.' },
            { q: 'What is BPPV and how is it treated?', a: 'Benign Paroxysmal Positional Vertigo (BPPV) is caused by displaced calcium crystals in the semicircular canals of the inner ear. The Epley manoeuvre — a series of head position changes — repositions the crystals and resolves most BPPV episodes. Homoeopathy complements this by reducing vestibular hypersensitivity.' },
            { q: 'How quickly does homoeopathy work for acute vertigo?', a: 'Acute vertigo often responds within hours to the correctly prescribed remedy — particularly Cocculus for motion-related vertigo, Conium for positional vertigo, and Belladonna for sudden onset with flushing. Chronic or recurrent vertigo requires constitutional treatment over 2–4 months.' },
            { q: "Can homoeopathy treat Ménière's disease?", a: "Yes. Ménière's disease — with its triad of recurrent vertigo, tinnitus, and fluctuating hearing loss — often responds very well to individualised homoeopathic treatment over 3–6 months. Constitutional remedies reduce attack frequency and severity significantly." },
            { q: 'Can cervical spondylosis cause vertigo and how is it treated homoeopathically?', a: 'Yes. Cervical spondylosis can compress vertebral arteries reducing blood flow to the inner ear and brainstem, causing vertigo, especially on neck movement. Remedies like Gelsemium, Conium, and Hypericum address both the nerve irritation and the resulting vestibular instability.' },
        ],
    },

    'nerve-pain': {
        title: 'Numbness & Nerve Pain', category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: 'Peripheral neuropathy causes numbness, tingling, and burning pain, most commonly from diabetes, B12 deficiency, or nerve compression. Homoeopathy reduces pain, improves nerve conduction, and addresses the underlying constitutional and aetiological cause.',
        symptoms: ['Numbness and tingling in hands and feet', 'Burning or electric-shock pain', 'Sensitivity to touch (allodynia)', 'Muscle weakness in affected limbs', 'Poor balance and coordination', 'Sensitivity to cold'],
        causes: ['Diabetes (most common)', 'Vitamin B12 deficiency', 'Nerve compression (carpal tunnel, sciatica)', 'Autoimmune disorders', 'Alcohol neuropathy', 'Chemotherapy side effects'],
        homeopathy: 'Hypericum Perforatum (nerve injury pain, shooting along nerve pathways), Phosphoric Acid (numbness from diabetic neuropathy, weakness), Aconite (tingling from cold or fright), Arsenicum Album (burning pain worse at night), Causticum (paralytic weakness of extremities, numbness).',
        faq: [
            { q: 'What investigations are needed to diagnose peripheral neuropathy?', a: 'Nerve conduction studies (NCS) and electromyography (EMG) assess the extent and type of nerve damage. Blood tests check for diabetes, B12 deficiency, thyroid disorders, and autoimmune causes. Early diagnosis allows treatment before irreversible damage occurs.' },
            { q: 'Why does diabetic neuropathy cause burning pain at night?', a: 'At night, when distractions fade and peripheral circulation slows, sensitised nerve fibres fire more intensely. The burning, electric, or aching pain of diabetic neuropathy is caused by damaged small nerve fibres misfiring — a process homoeopathic remedies like Arsenicum Album and Phosphoric Acid specifically address.' },
            { q: 'Can homoeopathy reverse nerve damage?', a: 'Homoeopathy cannot reverse severe structural nerve damage, but it significantly reduces pain, improves microcirculation to nerves, and aids nerve recovery in early to moderate neuropathy — particularly when blood sugar or B12 levels are being corrected simultaneously.' },
            { q: 'How long does treatment take for diabetic neuropathy?', a: 'Consistent homoeopathic treatment over 3–6 months typically yields significant reduction in burning pain and tingling, alongside good blood sugar management. Improvement in balance and fine motor function may take longer in established neuropathy.' },
            { q: 'Can B12 deficiency neuropathy be treated homoeopathically?', a: 'B12 replacement is the primary treatment for B12-deficiency neuropathy and is essential. Homoeopathy complements by reducing nerve pain, improving nerve regeneration, and addressing the constitutional weakness that impairs B12 absorption — often an underlying factor in recurrent deficiency.' },
        ],
    },

    // ── 8. SKIN DISEASES ─────────────────────────────────────────────────────

    'acne': {
        title: 'Acne', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Acne vulgaris is the most common skin condition worldwide, affecting up to 95% of teenagers and many adults. Homoeopathy treats acne from within — correcting the hormonal, digestive, and constitutional factors causing breakouts rather than applying suppressive creams.',
        symptoms: ['Pimples, blackheads, and whiteheads on face, chest, and back', 'Painful cystic nodules in severe acne', 'Oily skin', 'Scarring and post-inflammatory hyperpigmentation', 'Worsening before menstrual periods in women'],
        causes: ['Hormonal surges (androgens at puberty or PCOS)', 'Propionibacterium acnes bacterial colonisation', 'Excess sebum production', 'Dietary triggers (dairy, high glycaemic foods)', 'Stress and emotional factors'],
        homeopathy: 'Sulphur (oily, unhealthy skin, worse from heat and washing), Pulsatilla (hormonal acne in young women, menstrual irregularity), Silicea (deep cystic acne with scarring tendency), Kali Bromatum (acne on face, chest, and shoulders), Berberis Aquifolium (acne with dark pigmentation spots).',
        faq: [
            { q: 'Why does acne get worse before menstruation?', a: 'In the days before menstruation, progesterone levels rise and oestrogen drops, triggering increased sebum production. This hormonal shift also promotes inflammation, making pores more likely to clog and existing spots more inflamed. Homoeopathy addresses this hormonal pattern constitutionally.' },
            { q: 'Does diet really cause acne?', a: 'Research confirms that high-glycaemic foods (white bread, sugary drinks), dairy — particularly skim milk — and foods rich in saturated fats can worsen acne in susceptible individuals by elevating insulin and IGF-1, which stimulate sebum production and skin cell proliferation.' },
            { q: 'Is homoeopathy better than topical creams for acne?', a: 'Homoeopathy treats the root constitutional cause of acne — hormonal, digestive, or emotional — leading to lasting clearance. Topical treatments (retinoids, benzoyl peroxide) offer temporary local suppression with frequent recurrence, and do not address why the acne is occurring.' },
            { q: 'How long does homoeopathic treatment take for acne?', a: 'Most patients see significant improvement in 6–12 weeks. Complete clearance with constitutional treatment typically takes 4–6 months. Cystic or nodular acne may take longer. Importantly, cleared skin tends to remain clear because the root cause has been addressed.' },
            { q: 'Can acne scars be improved with homoeopathic treatment?', a: 'Homoeopathy primarily prevents new acne and new scarring. For existing scars, remedies like Silicea (deep fibrotic scars) and Berberis Aquifolium (hyperpigmentation marks) have reputational benefit, but established deep scars may need dermatological procedures alongside treatment.' },
        ],
    },

    'eczema': {
        title: 'Eczema', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Eczema (atopic dermatitis) is a chronic inflammatory skin condition causing intense itching, redness, and skin barrier dysfunction. Homoeopathy offers a gentle, effective alternative to steroids, addressing the underlying atopic constitution without long-term skin thinning.',
        symptoms: ['Intense itching — often worse at night', 'Red, inflamed, and scaly patches', 'Dry, cracked skin prone to bleeding', 'Oozing and crusting in acute stage', 'Thickened skin (lichenification) in chronic cases', 'Worsened by stress, allergens, and temperature changes'],
        causes: ['Genetic skin barrier defect (filaggrin mutations)', 'IgE-mediated allergic response', 'Environmental allergens (dust, pet dander) and irritants', 'Food sensitivities (dairy, gluten in susceptible children)', 'Stress and emotional triggers'],
        homeopathy: 'Graphites (oozing honey-like discharge, behind ears and flexures), Sulphur (burning, itching worse from heat and washing), Arsenicum Album (dry, burning patches worse at night), Natrum Muriaticum (eczema from suppressed grief or emotions), Petroleum (deep cracks, raw skin in winter).',
        faq: [
            { q: 'What is the atopic march and why is it important?', a: 'The atopic march describes the typical progression in susceptible individuals: eczema in infancy, food allergies in early childhood, allergic rhinitis in middle childhood, and asthma in later childhood. Treating eczema constitutionally with homoeopathy early may interrupt this progression to further atopic conditions.' },
            { q: 'Why does eczema itch more at night?', a: 'Cortisol (which suppresses inflammation) reaches its lowest level at night, skin temperature rises in bed increasing itch sensation, and there are fewer distractions to suppress the itch-scratch cycle. Homoeopathic remedies like Arsenicum Album and Graphites specifically target nocturnal eczema aggravation.' },
            { q: 'Can homoeopathy permanently cure eczema?', a: 'Constitutional homoeopathic treatment often achieves long-term remission, particularly in children with early-onset eczema. Results depend on duration, extent, and the strength of the atopic constitution. Many patients remain clear for years after completing treatment.' },
            { q: 'Should I stop my steroid cream when starting homoeopathic treatment?', a: 'Do not stop steroids abruptly — sudden withdrawal can cause a severe rebound flare (topical steroid withdrawal / red skin syndrome). Reduce gradually as homoeopathic treatment takes effect over weeks to months, always guided by your treating physician.' },
            { q: 'What triggers should eczema patients avoid?', a: 'Common triggers include wool clothing, harsh soaps and detergents, hot showers, sweating, stress, certain foods (dairy, eggs, nuts in children), dust mites, and pet dander. Identifying personal triggers through an elimination approach complements constitutional homoeopathic treatment.' },
        ],
    },

    'psoriasis': {
        title: 'Psoriasis', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Psoriasis is a chronic autoimmune skin condition causing rapid skin cell turnover, leading to thick, silvery scales and inflamed, red patches. Homoeopathy addresses the autoimmune root and offers lasting relief without the side effects of immunosuppressants or biologics.',
        symptoms: ['Red, thickened plaques with silvery-white scales', 'Itching, burning, and soreness', 'Nail changes — pitting, thickening, or crumbling', 'Scalp psoriasis causing dandruff-like flaking', 'Psoriatic arthritis with joint pain in some patients', 'Flares triggered by stress, infection, or medication'],
        causes: ['Autoimmune T-cell activation causing rapid keratinocyte turnover', 'Genetic predisposition (HLA-Cw6)', 'Emotional stress (major trigger)', 'Infections (especially Streptococcal — triggers guttate psoriasis)', 'Certain medications (beta-blockers, lithium)'],
        homeopathy: 'Arsenicum Album (dry, burning, scaly patches with restlessness), Graphites (psoriasis with oozing in folds), Petroleum (deep cracks with bleeding), Sulphur (burning, itching, worse in warmth), Kali Arsenicicum (extreme itching, burning, worse at night and in open air).',
        faq: [
            { q: 'Is psoriasis contagious?', a: 'No. Psoriasis is an autoimmune condition — it cannot be passed from person to person through skin contact, sharing items, or proximity. Public awareness of this fact is important to reduce the social stigma that significantly affects psoriasis patients\' quality of life.' },
            { q: 'What is psoriatic arthritis and how common is it?', a: 'Around 30% of psoriasis patients develop psoriatic arthritis — joint inflammation causing pain, stiffness, and swelling. It can affect fingers, toes, spine, and large joints. Homoeopathic constitutional treatment addressing the autoimmune root benefits both skin and joint components simultaneously.' },
            { q: 'Can homoeopathy clear psoriasis completely?', a: 'Many patients achieve complete clinical remission with constitutional treatment. Severity, duration, and extent influence outcomes — mild-to-moderate plaque psoriasis often clears significantly. Severe longstanding psoriasis typically improves substantially but may not clear completely.' },
            { q: 'How long does homoeopathic treatment for psoriasis take?', a: 'Mild psoriasis responds in 2–4 months. Moderate to severe chronic psoriasis typically requires 6–18 months of sustained constitutional treatment. Remissions achieved through homoeopathy tend to be more durable than those from topical steroids.' },
            { q: 'Does sun exposure help or worsen psoriasis?', a: 'Moderate sun exposure often improves psoriasis (UV light reduces the rate of skin cell turnover and has anti-inflammatory effects), which is the basis of phototherapy. However, sunburn can trigger a Koebner response — new plaques at sites of skin trauma — so controlled exposure is important.' },
        ],
    },

    'vitiligo': {
        title: 'Vitiligo', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Vitiligo is an autoimmune condition causing loss of melanocytes, resulting in white patches on the skin. Homoeopathy stimulates melanocyte activity and immune regulation, often achieving re-pigmentation — especially when started early.',
        symptoms: ['Smooth white patches on skin — face, hands, and genitals most commonly', 'Premature whitening of hair (poliosis)', 'White patches inside the mouth', 'Patches may enlarge over time', 'Emotional impact — significant cosmetic and psychological distress'],
        causes: ['Autoimmune destruction of melanocytes', 'Genetic predisposition', 'Oxidative stress in pigment cells', 'Emotional trauma precipitating onset', 'Association with thyroid disorders and other autoimmune conditions'],
        homeopathy: 'Arsenicum Sulphuratum Flavum (specific for vitiligo with re-pigmentation evidence), Phosphorus (spreading white patches, anxious patient), Silicea (vitiligo with tendency to suppuration), Sulphur (associated with skin inflammation), Natrum Muriaticum (vitiligo precipitated by grief or emotional trauma).',
        faq: [
            { q: 'Is vitiligo only a cosmetic condition?', a: 'While vitiligo does not cause physical pain, it is not merely cosmetic. It is an autoimmune condition associated with higher risk of other autoimmune disorders (thyroid disease, type 1 diabetes, alopecia areata). The psychological impact — anxiety, depression, social withdrawal — can be profound and should be addressed.' },
            { q: 'How quickly does vitiligo spread and can it be stopped?', a: 'The rate of spread varies widely — some patches enlarge rapidly, others remain stable for years. Homoeopathy can achieve stabilisation (preventing spread) reliably, and re-pigmentation in active or recent-onset patches. Longstanding patches with no melanocyte activity are harder to repigment.' },
            { q: 'Can homoeopathy restore colour to white patches?', a: 'Yes. Re-pigmentation — beginning as small islands of colour within patches — is seen in many patients with constitutional treatment over 3–6 months, especially those with recent-onset vitiligo. The earliest sign of response is the appearance of perifollicular pigment dots within patches.' },
            { q: 'How long does vitiligo treatment take with homoeopathy?', a: 'Initial signs of re-pigmentation are typically seen in 3–6 months of constitutional treatment. Complete treatment is long-term, spanning 12–24 months. Sun exposure (controlled) alongside treatment enhances re-pigmentation by stimulating remaining melanocytes.' },
            { q: 'Does emotional stress trigger or worsen vitiligo?', a: 'Yes. Emotional trauma, grief, or intense psychological stress is a well-documented trigger for vitiligo onset and spread. Constitutional homoeopathic remedies like Natrum Muriaticum address both the autoimmune process and its emotional root simultaneously.' },
        ],
    },

    'urticaria': {
        title: 'Urticaria (Hives)', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Urticaria (hives) causes intensely itchy, raised welts on the skin triggered by allergic or non-allergic mechanisms. Chronic urticaria (lasting more than 6 weeks) responds very well to homoeopathic treatment, which addresses the underlying allergic constitution.',
        symptoms: ['Itchy, raised, red or skin-coloured welts', 'Welts change location within hours', 'Burning and stinging sensation', 'Angioedema (deeper swelling of lips, face, throat)', 'Worsening from heat, pressure, or stress'],
        causes: ['Allergic reactions (foods, medications, insect stings)', 'Autoimmune (chronic idiopathic urticaria)', 'Infections (viral, bacterial)', 'Physical triggers (cold, heat, pressure, exercise)', 'Stress and emotional upset'],
        homeopathy: 'Apis Mellifica (burning, stinging welts worse from heat, better cold), Urtica Urens (urticaria from shellfish or plant contact), Astacus Fluviatilis (urticaria with liver involvement), Dulcamara (urticaria worse in cold damp weather), Natrum Muriaticum (chronic urticaria with emotional suppression).',
        faq: [
            { q: 'What is the difference between acute and chronic urticaria?', a: 'Acute urticaria lasts less than 6 weeks and is usually caused by a specific trigger (food, drug, infection). Chronic urticaria persists beyond 6 weeks — in over 50% of cases no specific trigger is identified (chronic idiopathic urticaria), which is where homoeopathy\'s constitutional approach is particularly valuable.' },
            { q: 'Can urticaria affect the throat and become life-threatening?', a: 'Angioedema affecting the throat (laryngeal angioedema) can cause airway obstruction and is a medical emergency requiring immediate epinephrine. This is most often associated with food allergy or medication reactions. Carry an epinephrine auto-injector if advised, while pursuing constitutional homoeopathic treatment to reduce long-term recurrence.' },
            { q: 'Can homoeopathy stop recurrent episodes of urticaria?', a: 'Constitutional treatment significantly reduces or eliminates recurrence of chronic urticaria. Most patients see lasting improvement over 3–6 months, with both attack frequency and severity reducing progressively.' },
            { q: 'Is homoeopathy useful when the cause of urticaria is unknown?', a: 'Yes. Homoeopathy selects the remedy based on the patient\'s individual symptom pattern, modalities, and constitution — not the identified trigger. This makes it especially effective in idiopathic chronic urticaria where conventional antihistamines provide only temporary suppression.' },
            { q: 'Can stress really cause urticaria flares?', a: 'Yes. Stress activates mast cells — the cells that release histamine in urticaria — through the stress-immune axis. Many patients note flares during stressful periods. Homoeopathic remedies addressing the emotional component (Natrum Muriaticum, Ignatia) are particularly effective in stress-triggered urticaria.' },
        ],
    },

    'lichen-planus': {
        title: 'Lichen Planus', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Lichen Planus is a chronic inflammatory condition affecting skin, mucous membranes, nails, and scalp. It presents as itchy, flat-topped, purple plaques. Homoeopathy reduces inflammation, relieves itching, and often achieves long-term remission.',
        symptoms: ['Itchy, flat-topped, purplish papules on wrists, ankles, back', 'White lacy patches inside the mouth (oral LP)', 'Painful erosions in genital lichen planus', 'Nail pitting and thinning', 'Scalp hair loss with scarring (lichen planopilaris)'],
        causes: ['Autoimmune T-cell attack on basal keratinocytes', 'Hepatitis C infection association', 'Medications (beta-blockers, NSAIDs, diuretics)', 'Dental metals (amalgam contact LP)', 'Stress precipitating or worsening episodes'],
        homeopathy: 'Arsenic Album (burning, itchy plaques, restless patient), Sulphur (itching worse from heat, offensive skin), Sepia (skin worse in cold, tired, indifferent patient), Graphites (moist infiltrated plaques), Merc Sol (oral lichen planus with profuse saliva and metallic taste).',
        faq: [
            { q: 'Is lichen planus contagious or hereditary?', a: 'No, lichen planus is neither contagious nor directly hereditary. It is an autoimmune condition where the immune system attacks skin and mucous membrane cells. There is a weak genetic predisposition, but environmental triggers and immune dysregulation are the primary drivers.' },
            { q: 'Can lichen planus become cancerous?', a: 'Skin lichen planus carries negligible malignant risk. However, erosive oral lichen planus has a small (1–3%) risk of transformation to oral squamous cell carcinoma over time, particularly in smokers or those with poor oral hygiene — making regular dental monitoring important.' },
            { q: 'Can homoeopathy treat oral lichen planus effectively?', a: 'Yes. Oral lichen planus — with its painful erosions, white lacy patches, and metallic taste — responds well to constitutional homoeopathic treatment. Remedies like Merc Sol, Borax, and Arsenicum Album reduce pain, erosions, and the characteristic Wickham\'s striae over 3–6 months.' },
            { q: 'Is lichen planus curable with homoeopathy?', a: 'Homoeopathy can achieve long-term remission in most cases of lichen planus — with skin lesions clearing and oral symptoms resolving significantly. Recurrence is reduced compared to steroid-only treatment, which addresses symptoms but not the autoimmune root.' },
            { q: 'How long does lichen planus treatment take with homoeopathy?', a: 'Itching and acute inflammation often reduce within 4–8 weeks. Complete clearance of skin lesions typically takes 3–6 months. Oral and genital forms may require longer treatment — 6–12 months — due to the more persistent mucosal involvement.' },
        ],
    },

    // ── 9. HAIR DISORDERS ────────────────────────────────────────────────────



    'alopecia-areata': {
        title: 'Alopecia Areata', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Alopecia Areata is an autoimmune condition causing sudden patchy hair loss. Homoeopathy regulates the overactive immune reaction, promoting regrowth without steroid injections or immunosuppressants.',
        symptoms: ['Smooth round patches of hair loss on scalp', 'Loss of eyebrows, eyelashes, or beard', 'Exclamation mark hairs at patch edges', 'Nail pitting in some cases'],
        causes: ['Autoimmune T-cell attack on hair follicles', 'Genetic predisposition', 'Stress and emotional trauma triggering episodes', 'Association with thyroid disorders and other autoimmune conditions'],
        homeopathy: 'Phosphorus (patchy hair loss, anxious, sympathetic), Natrum Muriaticum (alopecia from grief), Fluoricum Acidum (premature brittle hair fall), Calcarea Carbonica (chubby, sweaty patient), Lycopodium (hair loss at temples, digestive issues).',
        faq: [
            { q: 'Is alopecia areata permanent?', a: 'Not necessarily. In 50% of cases, hair regrows within 12 months even without treatment. However, 30% of patients develop chronic or extensive disease. Homoeopathic treatment significantly improves regrowth rates and reduces the risk of progression to alopecia totalis (total scalp loss) or universalis (total body hair loss).' },
            { q: 'Can alopecia areata affect eyebrows, eyelashes, and beard?', a: 'Yes. While the scalp is most commonly affected, alopecia areata can cause patchy loss of eyebrows, eyelashes, beard, and body hair. Extensive loss beyond the scalp tends to be more difficult to treat — constitutional homoeopathy is particularly important in these cases.' },
            { q: 'Can homoeopathy regrow hair in alopecia areata patches?', a: 'Yes, regrowth is seen in many patients with constitutional treatment over 3–6 months, especially in recent-onset cases with fewer patches. The first sign of response is fine white "peach fuzz" regrowth within patches, which then pigments over weeks.' },
            { q: 'Does stress worsen alopecia areata?', a: 'Yes. Stress is one of the most common triggers for onset and relapse. The stress-immune axis activates T-cells that attack hair follicles. Homoeopathic remedies address both the autoimmune mechanism and the stress pattern driving it — something steroid injections cannot achieve.' },
            { q: 'How is alopecia areata different from male pattern baldness in homoeopathic treatment?', a: 'Alopecia areata is autoimmune and causes patchy smooth loss — treated with immune-modulating constitutional remedies like Phosphorus, Natrum Muriaticum, and Fluoricum Acidum. Male pattern baldness is androgen-driven and requires follicle-strengthening remedies like Sabal Serrulata and Lycopodium.' },
        ],
    },

    'male-pattern-baldness': {
        title: 'Male Pattern Baldness', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Androgenetic alopecia involves progressive hair thinning driven by DHT sensitivity. Homoeopathy strengthens follicles, reduces scalp inflammation, and slows hair loss progression constitutionally.',
        symptoms: ['Gradual thinning at crown and hairline (M-shape in men)', 'Widening parting in women', 'Increased hair shedding on pillow or in shower', 'Visible scalp through thinning hair'],
        causes: ['DHT sensitivity of follicles', 'Genetic predisposition — maternal and paternal', 'Hormonal changes (puberty, menopause, PCOS)', 'Chronic stress and nutritional deficiencies'],
        homeopathy: 'Lycopodium (premature baldness, liver issues), Phosphorus (hair loss in young sensitive patients), Sabal Serrulata (DHT-related hair loss), Wiesbaden (stimulates follicle activity), Selenium (hair loss with oily scalp).',
        faq: [
            { q: 'At what age does male pattern baldness typically begin?', a: 'Male pattern baldness can begin in the late teens or early 20s, though it is most commonly noticed in the 30s. By age 50, around 50% of men show significant hair loss. Female pattern baldness typically begins after menopause but can start earlier in PCOS.' },
            { q: 'Is male pattern baldness inherited only from the mother\'s side?', a: 'This is a common myth. Androgenetic alopecia has a complex polygenic inheritance from both maternal and paternal lines. A father with early baldness significantly increases a son\'s risk, as does a maternal grandfather — making family history assessment from both sides important.' },
            { q: 'Can homoeopathy stop male pattern baldness completely?', a: 'Homoeopathy can slow or halt progression significantly — particularly in early-to-moderate androgenetic alopecia. Complete reversal of advanced baldness is not typical, but many patients achieve arrest of shedding and modest improvement in density.' },
            { q: 'How long does treatment take for baldness?', a: 'Reduction in shedding is typically noticed in 6–8 weeks. Noticeable improvement in hair density and coverage takes 3–6 months of consistent constitutional treatment. Results are best in patients who start early.' },
            { q: 'Can homoeopathy be combined with minoxidil for pattern baldness?', a: 'Yes. Homoeopathic treatment is fully compatible with topical minoxidil. The combination — minoxidil for direct follicle stimulation and homoeopathy for constitutional correction of DHT sensitivity and scalp health — often gives better results than either alone.' },
        ],
    },

    'dandruff': {
        title: 'Dandruff', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Dandruff involves scalp flaking, itching, and oiliness caused by Malassezia fungal overgrowth and skin barrier imbalance. Homoeopathy treats dandruff constitutionally, addressing skin and gut factors driving the condition.',
        symptoms: ['White or yellowish flakes on scalp and clothing', 'Itchy scalp', 'Oily or dry scalp skin', 'Redness in severe seborrhoeic dermatitis'],
        causes: ['Malassezia fungal overgrowth', 'Oily scalp (seborrhoea)', 'Stress and fatigue as triggers', 'Poor diet and nutritional deficiencies'],
        homeopathy: 'Sulphur (dry itchy scalp worse from heat), Kali Sulphuricum (yellow scaly dandruff), Natrum Muriaticum (oily scalp, white dandruff), Graphites (sticky crusty scalp), Thuja (white scaly dandruff with dry hair).',
        faq: [
            { q: 'What is the difference between dandruff and scalp psoriasis?', a: 'Dandruff (seborrhoeic dermatitis) produces loose, greasy flakes with mild redness, driven by Malassezia fungal overgrowth. Scalp psoriasis produces thick, adherent silvery-white plaques with defined edges, driven by autoimmune keratinocyte overproduction. Treatment approaches differ significantly.' },
            { q: 'Does washing hair more often help dandruff?', a: 'For oily dandruff, frequent washing (daily or every other day) reduces sebum that feeds Malassezia. For dry scalp dandruff, overwashing can worsen dryness. Identifying whether your dandruff is oily or dry guides both washing frequency and homoeopathic remedy selection.' },
            { q: 'Can homoeopathy permanently cure dandruff?', a: 'Constitutional homoeopathic treatment achieves long-term resolution superior to antifungal shampoos alone, which must be used indefinitely to maintain effect. By correcting the scalp\'s sebaceous and immune balance, homoeopathy reduces the underlying predisposition.' },
            { q: 'Does diet affect dandruff?', a: 'Yes. High sugar and refined carbohydrate intake feeds Malassezia yeast. Deficiencies in zinc, B vitamins, and omega-3 fatty acids compromise scalp barrier function. Addressing these through diet and supplementation complements constitutional homoeopathic treatment.' },
            { q: 'Can stress cause dandruff to worsen?', a: 'Yes. Stress suppresses immune surveillance allowing Malassezia to proliferate, and also increases scalp oiliness through sebaceous gland stimulation. Many patients notice dandruff flares during stressful periods — a constitutional remedy addressing the stress response helps break this cycle.' },
        ],
    },

    'premature-greying': {
        title: 'Premature Greying', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Premature greying before age 30 is often constitutional. Homoeopathy addresses genetic, nutritional, and stress-related factors and in early stages can sometimes slow further greying.',
        symptoms: ['Grey or white hair appearing before age 30', 'Patchy greying in some cases', 'Associated with B12, copper, or iron deficiency symptoms'],
        causes: ['Genetic predisposition — most common', 'Vitamin B12, copper, and zinc deficiency', 'Thyroid disorders', 'Chronic stress and anxiety', 'Autoimmune conditions'],
        homeopathy: 'Lycopodium (premature greying with liver issues), Phosphoric Acid (greying from grief or mental exhaustion), Natrum Muriaticum (greying from chronic grief), Phosphorus (sensitive, anxious youth), Silicea (nutritional deficiency-related greying).',
        faq: [
            { q: 'Why does hair go grey?', a: 'Hair colour is produced by melanocytes in the hair follicle. With age or disease, these melanocyte stem cells deplete or are damaged, reducing pigment production. Premature greying under age 30 reflects accelerated melanocyte depletion from genetic, nutritional, oxidative stress, or autoimmune causes.' },
            { q: 'Can emotional stress cause premature greying?', a: 'Yes. Research has confirmed that severe stress accelerates melanocyte stem cell depletion — partially explaining why highly stressed individuals grey faster. The sympathetic nervous system, activated by stress, is directly toxic to melanocyte stem cells.' },
            { q: 'Can homoeopathy reverse grey hair?', a: 'In very early-stage greying driven by nutritional deficiency, thyroid dysfunction, or emotional causes, homoeopathy can slow or partially reverse the process by addressing root causes. Established genetic greying — where melanocytes are exhausted — is much harder to reverse.' },
            { q: 'What nutrients should I check if greying early?', a: 'Get serum B12, ferritin, copper, zinc, and thyroid function (TSH, free T3, T4) tested. B12 and copper deficiency are particularly closely linked to premature greying. Addressing these deficiencies alongside constitutional homoeopathy gives the best outcome.' },
            { q: 'How long does homoeopathic treatment for premature greying take?', a: 'If greying is nutritionally or stress-driven, slowing of new grey hair is often noticed within 3–4 months of addressing the root cause alongside homoeopathy. Partial re-pigmentation in early patches may occur over 6–12 months in responsive cases.' },
        ],
    },

    'hair-thinning': {
        title: 'Hair Thinning', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Diffuse hair thinning (Telogen Effluvium) is a common response to systemic stress — illness, nutritional deficiency, hormonal changes, or emotional shock. Homoeopathy triggers follicle recovery and addresses the triggering cause.',
        symptoms: ['Diffuse shedding — handfuls of hair in shower or brush', 'Overall reduced hair volume', 'Visible scalp through thinning hair', 'Often starts 2–3 months after a stressful event'],
        causes: ['Fever or serious illness in preceding months', 'Nutritional deficiencies (iron, protein, zinc)', 'Postpartum hormonal drop', 'Rapid weight loss', 'Thyroid disorders', 'Prolonged stress'],
        homeopathy: 'Phosphorus (diffuse shedding in sensitive, anxious patients), Natrum Muriaticum (shedding from suppressed grief), Silicea (nutritional deficiency-related), Calcarea Carbonica (shedding during breastfeeding), Sepia (postpartum hair loss with exhaustion).',
        faq: [
            { q: 'Why does hair fall out 2–3 months after illness or stress?', a: 'Telogen Effluvium follows a delayed pattern because a trigger (fever, surgery, childbirth, crash diet) shocks a large number of hairs into the resting (telogen) phase simultaneously. They then shed together 2–3 months later. Understanding this delay reassures patients that the hair loss reflects a past trigger, not ongoing disease.' },
            { q: 'How much daily hair shedding is normal?', a: 'Losing 50–100 hairs per day is normal as part of the hair growth cycle. In telogen effluvium, this increases to 200–500 hairs daily. Running fingers through the hair and pulling gently (pull test) is a simple clinical indicator — losing more than 6 hairs suggests active effluvium.' },
            { q: 'How long does telogen effluvium last?', a: 'Naturally, most cases resolve within 6–9 months as follicles return to the growth phase. With homoeopathic treatment addressing the underlying trigger, recovery is typically faster — 3–4 months — and density restoration is more complete.' },
            { q: 'Does postpartum hair loss respond to homoeopathy?', a: 'Yes, very well. Remedies like Sepia (exhausted, hormonally depleted postpartum woman) and Pulsatilla (emotionally vulnerable, hormonal fluctuation) address both the sharp postpartum oestrogen drop driving shedding and the physical and emotional depletion of new motherhood.' },
            { q: 'What blood tests should be done for unexplained hair thinning?', a: 'A comprehensive panel including ferritin (stored iron — the most sensitive marker), serum iron, B12, zinc, TSH, free T3, and T4 should be checked. Low ferritin is one of the most common and treatable causes of diffuse hair thinning in women, often missed on a basic anaemia screen.' },
        ],
    },

    'scalp-psoriasis': {
        title: 'Scalp Psoriasis', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Scalp psoriasis causes thick, silver-white scaly plaques with intense itching and cosmetic distress. Homoeopathy addresses the autoimmune root, reduces plaque formation, and prevents relapse.',
        symptoms: ['Thick dry silvery scales on scalp', 'Itching and burning', 'Flaking resembling severe dandruff', 'Redness and scalp inflammation', 'Hair loss in severe cases'],
        causes: ['Autoimmune dysregulation', 'Genetic predisposition', 'Stress and infection as triggers', 'Medications (lithium, beta-blockers)'],
        homeopathy: 'Arsenic Album (dry burning scalp worse at night), Graphites (crusty sticky discharge), Petroleum (raw bleeding cracks in winter), Sulphur (burning itchy scalp worse from heat), Mezereum (thick crusts with pus underneath).',
        faq: [
            { q: 'How can I tell the difference between scalp psoriasis and severe dandruff?', a: 'Scalp psoriasis produces thick, adherent silvery plaques with well-defined edges, often extending slightly beyond the hairline. The scales are powdery and dry. Dandruff produces loose, greasy or dry flakes without clear-cut plaques. Psoriasis also often coexists with plaques on elbows, knees, or nails.' },
            { q: 'Can scalp psoriasis cause permanent hair loss?', a: 'In most cases, hair loss from scalp psoriasis is temporary — hair regrows once the inflammation is controlled. However, very severe, prolonged scalp psoriasis with deep scarring (rare) can cause permanent follicle damage. Prompt constitutional homoeopathic treatment reduces this risk.' },
            { q: 'Is scalp psoriasis different from dandruff in homoeopathic treatment?', a: 'Yes. Scalp psoriasis requires constitutional treatment addressing the autoimmune component — remedies like Arsenic Album, Mezereum, and Graphites. Dandruff is primarily fungal and responds to different remedies (Kali Sulphuricum, Thuja). Correct differentiation of the diagnosis guides the right remedy.' },
            { q: 'What triggers scalp psoriasis flares?', a: 'Common triggers include emotional stress, streptococcal throat infection, scalp trauma (harsh brushing, dyeing), certain medications (lithium, beta-blockers), and alcohol. Identifying and reducing personal triggers complements constitutional homoeopathic treatment significantly.' },
            { q: 'Can homoeopathy treat scalp psoriasis without medicated shampoos?', a: 'Constitutional homoeopathic treatment is the primary therapy and works from within. Medicated shampoos (coal tar, salicylic acid) can be used to soften and remove scales while constitutional treatment is taking effect, but the goal is to reduce dependence on them over time as the underlying condition improves.' },
        ],
    },

    // ── 10. MUSCULOSKELETAL ──────────────────────────────────────────────────

    'rheumatoid-arthritis': {
        title: 'Rheumatoid Arthritis', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Rheumatoid arthritis (RA) is a chronic autoimmune disease causing symmetrical joint pain, swelling, and progressive deformity. Homoeopathy reduces inflammation, slows progression, and improves quality of life alongside conventional DMARDs.',
        symptoms: ['Symmetrical painful swollen joints', 'Morning stiffness lasting more than 1 hour', 'Fatigue and low-grade fever', 'Joint deformity over time', 'Rheumatoid nodules under skin'],
        causes: ['Autoimmune synovial inflammation', 'Genetic predisposition (HLA-DR4)', 'Smoking as risk factor', 'Predominantly affects women', 'Environmental triggers'],
        homeopathy: 'Rhus Toxicodendron (stiffness worse first motion, better continued motion), Bryonia (pain worse any motion, better rest), Apis Mellifica (swollen hot shiny joints better cold), Causticum (deformities, contractures, worse cold), Actaea Spicata (wrist and small joint arthritis).',
        faq: [
            { q: 'How is rheumatoid arthritis different from osteoarthritis?', a: 'RA is autoimmune — the immune system attacks the joint lining (synovium), causing symmetrical inflammation, morning stiffness, and systemic features like fatigue and fever. Osteoarthritis is degenerative wear-and-tear, typically asymmetrical, worsening through the day, without systemic inflammation.' },
            { q: 'What blood tests confirm rheumatoid arthritis?', a: 'Rheumatoid Factor (RF) and Anti-CCP antibodies (the most specific marker), CRP and ESR (inflammation markers), and full blood count are key tests. Anti-CCP is positive in up to 70% of RA patients and can be positive years before symptoms appear.' },
            { q: 'Can homoeopathy slow RA joint damage?', a: 'Homoeopathy controls inflammation and slows progression, especially effective in early RA before significant joint damage. In advanced disease, it complements DMARDs to improve quality of life, reduce fatigue, and manage pain that medications do not fully address.' },
            { q: 'Is homoeopathy safe alongside methotrexate for RA?', a: 'Yes. Homoeopathic remedies are completely compatible with methotrexate, hydroxychloroquine, leflunomide, and biologic agents used for RA. They do not interfere with these medications\' action or increase their side effects.' },
            { q: 'What lifestyle changes help RA alongside homoeopathic treatment?', a: 'Regular gentle exercise (swimming, walking, yoga) maintains joint mobility and muscle strength. An anti-inflammatory diet rich in omega-3s, turmeric, and colourful vegetables reduces systemic inflammation. Smoking cessation is particularly important — smoking both worsens RA and reduces treatment response.' },
        ],
    },

    'back-pain': {
        title: 'Back Pain', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Back pain is the leading cause of disability globally. Acute back pain from muscle strain, chronic back pain from disc disease, and structural causes all respond well to individualised homoeopathic treatment.',
        symptoms: ['Localised or radiating back pain', 'Stiffness on waking', 'Pain worsening with movement or prolonged sitting', 'Radiating leg pain in disc prolapse', 'Muscle spasm and restricted mobility'],
        causes: ['Muscle strain and poor posture', 'Intervertebral disc prolapse or degeneration', 'Facet joint arthritis', 'Sedentary lifestyle', 'Osteoporosis in older women'],
        homeopathy: 'Rhus Toxicodendron (stiffness worse first motion, better warmth), Bryonia (pain worse movement, better firm pressure), Colocynth (lumbar pain radiating down leg), Calcarea Fluorica (disc degeneration), Arnica (pain from injury or overexertion).',
        faq: [
            { q: 'When does back pain need urgent medical attention?', a: 'Seek urgent evaluation for back pain with bladder or bowel dysfunction, saddle anaesthesia (numbness around the groin), weakness in both legs, pain following a fall or trauma, unexplained weight loss, or night pain waking you from sleep — these may indicate serious spinal or systemic pathology.' },
            { q: 'Is bed rest the best treatment for acute back pain?', a: 'No. Prolonged bed rest actually worsens most back pain by weakening spinal muscles. Gentle movement, continuing daily activities within pain limits, and early physiotherapy give faster recovery. Homoeopathic remedies reduce pain and inflammation, allowing earlier mobilisation.' },
            { q: 'Can homoeopathy help disc prolapse without surgery?', a: 'In early to moderate disc prolapse causing sciatica, homoeopathic treatment combined with physiotherapy and core strengthening can resolve symptoms and avoid surgery in many cases. Severe prolapse with significant neurological deficit (foot drop, bladder dysfunction) requires urgent surgical evaluation.' },
            { q: 'How quickly does homoeopathy relieve acute back pain?', a: 'Acute back pain from muscle strain often responds noticeably within 24–48 hours of the correctly prescribed remedy. Arnica (injury/overexertion) and Rhus Tox (stiffness worse first motion) are among the fastest-acting remedies in musculoskeletal pain.' },
            { q: 'What exercises support homoeopathic treatment for chronic back pain?', a: 'Core strengthening exercises (physiotherapy-guided), McKenzie exercises for disc pain, yoga, and swimming are most beneficial. Strong core muscles reduce spinal load significantly. Combined with constitutional homoeopathy, this approach addresses both the structural and inflammatory components of chronic back pain.' },
        ],
    },

    'cervical-spondylosis': {
        title: 'Cervical Spondylosis', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Cervical spondylosis is age-related wear of the cervical spine causing neck pain, stiffness, and nerve compression, affecting 85% of people over 60. Homoeopathy reduces pain, improves mobility, and addresses the constitutional predisposition.',
        symptoms: ['Neck pain and stiffness', 'Headaches from the neck', 'Tingling or numbness in arms and fingers', 'Limited neck rotation', 'Dizziness from vertebral artery compromise'],
        causes: ['Age-related disc dehydration and osteophyte formation', 'Poor posture and prolonged screen use', 'Previous neck injury', 'Genetic predisposition to early degeneration'],
        homeopathy: 'Calcarea Phosphorica (disc degeneration, weakness), Rhus Toxicodendron (stiffness better movement), Hypericum (nerve root pain radiating to arms), Bryonia (neck pain worse motion), Phosphorus (tall thin patient with nerve sensitivity).',
        faq: [
            { q: 'What is the difference between cervical spondylosis and a cervical disc herniation?', a: 'Cervical spondylosis is gradual degeneration of discs and facet joints with osteophyte (bone spur) formation — an age-related process. A cervical disc herniation is an acute or subacute bulge of disc material that compresses a nerve root or the spinal cord, causing more acute and often more severe radiculopathy.' },
            { q: 'Can cervical spondylosis cause headaches?', a: 'Yes. Cervicogenic headaches arise from the upper cervical joints (C1–C3) and are felt at the back of the head, base of skull, or radiating to the forehead and eyes. They are worsened by neck movement and posture. Homoeopathic remedies like Cimicifuga and Bryonia specifically address this pattern.' },
            { q: 'Can homoeopathy prevent further degeneration in cervical spondylosis?', a: 'Homoeopathy slows progressive degeneration by improving local circulation, reducing chronic inflammation, and strengthening musculoskeletal and connective tissues constitutionally. It cannot reverse existing osteophytes but can significantly reduce pain and prevent accelerated wear.' },
            { q: 'How does homoeopathy compare with physiotherapy for cervical spondylosis?', a: 'Both are complementary. Physiotherapy addresses structural alignment, posture, and muscle strength. Homoeopathy reduces nerve irritability, inflammation, and constitutional predisposition to degeneration from within. Combining both approaches gives far better outcomes than either alone.' },
            { q: 'What posture and ergonomic changes help cervical spondylosis?', a: 'Ensure your computer screen is at eye level, use a supportive chair, avoid prolonged neck flexion (looking down at phones), use a cervical pillow for sleep, take regular breaks from screens, and perform neck stretches. These changes reduce mechanical stress on the cervical spine significantly.' },
        ],
    },

    'sciatica': {
        title: 'Sciatica', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Sciatica is shooting or burning pain along the sciatic nerve from the lower back through the buttock into the leg. Homoeopathy is highly effective, reducing nerve irritation and inflammation without opioids.',
        symptoms: ['Sharp shooting pain from lower back into buttock and leg', 'Burning or electric-shock sensation', 'Numbness or tingling in leg or foot', 'Weakness in the affected leg', 'Pain worsened by prolonged sitting or coughing'],
        causes: ['Lumbar disc herniation (most common)', 'Piriformis syndrome', 'Lumbar spinal stenosis', 'Sacroiliac joint dysfunction', 'Pregnancy'],
        homeopathy: 'Colocynth (sciatica down the left leg, better pressure or bending), Magnesium Phosphorica (right-sided sciatica, better heat and pressure), Rhus Toxicodendron (stiffness better on movement), Gnaphalium (sciatica with numbness alternating with pain), Hypericum (nerve pain along sciatic distribution).',
        faq: [
            { q: 'Is sciatica always caused by a disc herniation?', a: 'No. While lumbar disc herniation is the most common cause, sciatica can also result from piriformis muscle compression, spinal stenosis, spondylolisthesis, sacroiliac joint dysfunction, or pregnancy. Identifying the specific cause guides the most appropriate homoeopathic and physical therapy approach.' },
            { q: 'When does sciatica require urgent medical attention?', a: 'Seek immediate evaluation if sciatica is accompanied by bladder or bowel dysfunction, weakness in both legs, saddle anaesthesia, or progressive worsening neurological deficit — these suggest cauda equina syndrome, a surgical emergency.' },
            { q: 'How effective is homoeopathy for sciatica compared to anti-inflammatory drugs?', a: 'Homoeopathy provides comparable pain relief without the gastrointestinal, kidney, and cardiovascular risks of long-term NSAIDs. It also addresses the nerve irritation and structural cause rather than simply suppressing the inflammatory signal.' },
            { q: 'Can homoeopathy help sciatica in pregnancy?', a: 'Yes. Homoeopathy is one of the safest options for sciatica during pregnancy, where NSAIDs are contraindicated (especially in the third trimester), physiotherapy options are limited, and pain can be debilitating. Colocynth and Kali Carbonicum are commonly indicated in pregnancy sciatica.' },
            { q: 'What exercises help sciatica alongside homoeopathic treatment?', a: 'Specific sciatica exercises guided by a physiotherapist — including nerve mobilisation, piriformis stretching, and core strengthening — complement homoeopathic treatment significantly. Avoiding prolonged sitting, using a lumbar support, and walking regularly (not bed rest) also accelerates recovery.' },
        ],
    },

    'frozen-shoulder': {
        title: 'Frozen Shoulder', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Adhesive capsulitis causes progressive stiffening and severe pain in the shoulder joint. Homoeopathy reduces inflammation, breaks the cycle of pain and stiffness, and accelerates recovery from all three stages.',
        symptoms: ['Gradual onset of shoulder pain with increasing stiffness', 'Severely restricted movement — especially external rotation', 'Pain worse at night', 'Difficulty reaching behind the back', 'Goes through freezing, frozen, and thawing stages'],
        causes: ['Inflammation and fibrosis of the shoulder joint capsule', 'Post-injury or post-surgical immobility', 'Diabetes (significantly higher incidence)', 'Thyroid disorders', 'Prolonged arm immobility'],
        homeopathy: 'Sanguinaria Canadensis (right-sided frozen shoulder, arm cannot be raised), Ferrum Metallicum (left-sided shoulder stiffness, worse at rest), Rhus Toxicodendron (stiffness better on movement), Bryonia (pain worse any movement, better rest), Causticum (contracture, drawing pain).',
        faq: [
            { q: 'What are the three stages of frozen shoulder and how long do they last?', a: 'Stage 1 (Freezing): Increasing pain and stiffness over 6–9 months. Stage 2 (Frozen): Pain decreases but stiffness is maximal — 4–6 months. Stage 3 (Thawing): Gradual return of movement — 6–24 months. Homoeopathic treatment reduces pain intensity in Stage 1 and accelerates mobility recovery in Stages 2 and 3.' },
            { q: 'Why do diabetics get frozen shoulder more often?', a: 'Diabetes causes glycation of collagen — abnormal cross-linking of collagen fibres in the shoulder capsule — making it thicker, stiffer, and more prone to adhesive capsulitis. Diabetics have a 10–20% lifetime risk of frozen shoulder compared to 2–5% in the general population.' },
            { q: 'Can homoeopathy speed up recovery from frozen shoulder?', a: 'Yes. Homoeopathy significantly reduces pain in the freezing phase and improves range of motion faster than natural recovery alone in the frozen phase. Patients typically regain functional movement 3–6 months faster than untreated natural history.' },
            { q: 'Is steroid injection necessary with homoeopathic treatment?', a: 'In many cases, homoeopathy provides sufficient pain relief without steroid injections. For severe acute pain in the freezing phase, a single steroid injection can provide rapid enough pain relief to allow early physiotherapy — which then works best alongside homoeopathic treatment.' },
            { q: 'What physiotherapy exercises complement homoeopathic treatment for frozen shoulder?', a: 'Pendulum exercises, Codman\'s exercises, wall climbing with the fingers, and gentle stretching within pain limits are the mainstay physiotherapy approaches. Homoeopathy reduces the pain threshold allowing more effective physiotherapy, dramatically improving overall outcomes.' },
        ],
    },

    'gout': {
        title: 'Gout', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Gout is caused by elevated uric acid forming crystals in joints, causing sudden intensely painful attacks — most often in the big toe. Homoeopathy reduces acute pain, lowers uric acid, and prevents recurrence without allopurinol\'s kidney side effects.',
        symptoms: ['Sudden intense joint pain — typically the big toe', 'Red hot swollen joints', 'Tophi (uric acid deposits) in chronic gout', 'Pain unbearable even to light touch', 'Fever during acute attacks'],
        causes: ['Elevated serum uric acid', 'High-purine diet (red meat, shellfish, organ meats)', 'Alcohol (especially beer)', 'Diuretic medications', 'Renal insufficiency reducing uric acid excretion'],
        homeopathy: 'Colchicum (intense tearing joint pain worse from motion — acute attacks), Urtica Urens (reduces uric acid — specific anti-gout remedy), Ledum Pal (joint pain starting in feet going upward, better cold), Sabina (gout with chalk-like deposits), Benzoic Acid (gout with offensive dark urine).',
        faq: [
            { q: 'Why does gout most commonly affect the big toe?', a: 'The big toe joint (first metatarsophalangeal) has the lowest body temperature, and uric acid crystals (monosodium urate) precipitate most readily in cooler tissues. The joint also has relatively poor circulation and bears maximum mechanical stress — all favouring crystal deposition.' },
            { q: 'What foods most strongly trigger gout attacks?', a: 'Beer and spirits (fructose-rich spirits), organ meats (liver, kidney, sweetbreads), shellfish, red meat, and high-fructose corn syrup are the strongest gout triggers. Interestingly, purine-rich vegetables (spinach, asparagus) do not meaningfully increase gout risk.' },
            { q: 'Can homoeopathy control uric acid levels like allopurinol?', a: 'Remedies like Urtica Urens and Benzoic Acid have uric acid-lowering properties, working best in mild to moderate hyperuricaemia alongside dietary modification. In high-risk patients with very elevated uric acid or frequent attacks, they complement allopurinol rather than replacing it.' },
            { q: 'What diet should I follow during homoeopathic treatment for gout?', a: 'Avoid red meat, shellfish, organ meats, beer, and sugary drinks. Increase water intake to 2.5–3 litres daily (promoting renal uric acid excretion). A low-purine diet combined with dietary modification dramatically reduces attack frequency alongside constitutional treatment.' },
            { q: 'Can gout lead to permanent joint damage?', a: 'Chronic gout with repeatedly elevated uric acid leads to tophaceous deposits and joint destruction over years. This is preventable with consistent uric acid management. Homoeopathic treatment reducing attack frequency and uric acid levels significantly reduces long-term joint damage risk.' },
        ],
    },



    // ── 11. GENITO-URINARY ───────────────────────────────────────────────────

    'uti': {
        title: 'Urinary Tract Infection', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'UTIs are among the most common bacterial infections. Homoeopathy provides rapid relief in acute UTIs and reduces the frequency of recurrent UTIs by strengthening urogenital immunity — a key advantage over long-term antibiotics.',
        symptoms: ['Burning or stinging pain while urinating', 'Frequent urge to urinate with little output', 'Cloudy dark or foul-smelling urine', 'Pelvic or lower abdominal pressure', 'Blood in urine in some cases'],
        causes: ['E. coli bacterial colonisation (most common)', 'Sexual activity introducing bacteria', 'Post-menopausal oestrogen drop', 'Incomplete bladder emptying', 'Catheter use or bladder stones'],
        homeopathy: 'Cantharis (intense burning during and after urination — most common acute remedy), Apis Mellifica (stinging, burning, scanty urine), Sarsaparilla (pain at the end of urination), Staphysagria (honeymoon cystitis), Nux Vomica (constant urge, little output).',
        faq: [
            { q: 'Why are women more prone to UTIs than men?', a: 'Women have a shorter urethra (4cm vs 20cm in men), making it easier for bacteria to reach the bladder. The proximity of the urethra to the vagina and anus also increases contamination risk. Post-menopausal oestrogen loss further reduces urogenital mucosal defences.' },
            { q: 'Can a UTI spread to the kidneys and how serious is that?', a: 'Yes. If bladder infection ascends the ureters, it causes pyelonephritis — kidney infection — with fever, flank pain, nausea, and systemic illness. This requires prompt antibiotic treatment. Homoeopathy can be supportive but antibiotics are essential for kidney involvement.' },
            { q: 'Can homoeopathy treat a UTI without antibiotics?', a: 'In mild to moderate uncomplicated UTIs, homoeopathy often resolves symptoms within 24–48 hours. Urine culture results should guide whether antibiotics are needed. Any UTI with fever, flank pain, or systemic symptoms requires antibiotics.' },
            { q: 'Can homoeopathy prevent recurrent UTIs in women?', a: 'Yes. Constitutional treatment significantly reduces recurrence by improving urogenital mucosal immunity and correcting the underlying susceptibility. Most women with 6+ UTIs per year see dramatic reduction within 4–6 months of constitutional treatment.' },
            { q: 'What hygiene and lifestyle measures reduce UTI risk?', a: 'Wiping front to back, urinating after sexual intercourse, staying well hydrated (dilutes bacterial concentration in urine), avoiding tight synthetic underwear, and not delaying urination all significantly reduce UTI risk alongside constitutional homoeopathic treatment.' },
        ],
    },

    'kidney-stones': {
        title: 'Kidney Stones', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Kidney stones cause severe colicky pain when passed through the ureter. Homoeopathy aids stone passage, reduces pain, and addresses the metabolic and dietary factors causing stone formation to prevent recurrence.',
        symptoms: ['Sudden severe cramping flank or groin pain (colic)', 'Blood in urine', 'Nausea and vomiting during colic', 'Frequent painful urination', 'Burning while urinating'],
        causes: ['Calcium oxalate stones from high oxalate diet (most common)', 'Uric acid stones from high purine diet', 'Struvite stones from recurrent UTIs', 'Dehydration and inadequate water intake', 'Hyperparathyroidism'],
        homeopathy: 'Berberis Vulgaris (left-sided renal colic radiating to groin — most common remedy), Lycopodium (right-sided renal colic, red sandy deposit in urine), Sarsaparilla (calcium oxalate stones, pain at end of urination), Nux Vomica (spasmodic pain with urge), Cantharis (intense burning with stone passage).',
        faq: [
            { q: 'How do I know if my pain is a kidney stone or something else?', a: 'Renal colic is classically a sudden, severe, wave-like flank pain that radiates from the back to the groin and genitals — often described as one of the worst pains imaginable. It is typically associated with nausea, restlessness, and blood in the urine. Appendicitis, muscle strain, and other causes produce different pain patterns.' },
            { q: 'What is the relationship between diet and kidney stone formation?', a: 'Calcium oxalate stones (80% of cases) are worsened by high oxalate foods (spinach, beets, nuts, chocolate) combined with low fluid intake. Uric acid stones are linked to high-purine diets (meat, seafood) and low urinary pH. Knowing the stone type (from composition analysis) guides specific dietary changes.' },
            { q: 'Can homoeopathy dissolve kidney stones?', a: 'Homoeopathy aids the passage of small stones through ureteral relaxation and promotes the conditions preventing new stone formation by addressing the underlying metabolic cause. It does not dissolve large existing stones — those may require lithotripsy or urological intervention.' },
            { q: 'How much water should I drink for kidney stones during treatment?', a: 'Aim for 2.5–3 litres daily, producing pale straw-coloured urine. Adequate hydration is the single most effective measure for preventing all types of kidney stones — it dilutes urine, reducing crystal supersaturation and stone nucleation.' },
            { q: 'Are calcium supplements safe if I have calcium oxalate stones?', a: 'Paradoxically, dietary calcium (from food) is protective against calcium oxalate stones because it binds oxalate in the gut, preventing absorption. However, calcium supplements taken between meals can increase urinary calcium and stone risk. Always take calcium supplements with meals and discuss with your physician.' },
        ],
    },

    'bedwetting-adult': {
        title: 'Adult Bedwetting', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Nocturnal enuresis in adults causes significant embarrassment and relationship strain. Homoeopathy offers individualised treatment based on the cause and the patient\'s complete symptom picture, with good outcomes in most cases.',
        symptoms: ['Involuntary urination during sleep', 'Sometimes associated with daytime urgency', 'Recurring episodes causing emotional distress', 'May be accompanied by neurological symptoms'],
        causes: ['Overactive bladder or small bladder capacity', 'Medications (diuretics, sedatives)', 'Neurological conditions', 'Sleep apnoea and deep sleep patterns', 'Emotional stress or trauma'],
        homeopathy: 'Equisetum (profuse urination during dreams), Causticum (incontinence worsened by coughing or laughing), Kreosotum (urgent urination during uneasy sleep), Belladonna (wets in early sleep), Sulphur (enuresis in deep sleepers).',
        faq: [
            { q: 'Is adult bedwetting a sign of a serious underlying condition?', a: 'New-onset adult bedwetting always warrants medical evaluation to exclude diabetes mellitus, diabetes insipidus, sleep apnoea, urological abnormalities, neurological conditions (MS, spinal cord disorders), or medication side effects. Long-standing primary nocturnal enuresis is more likely constitutional.' },
            { q: 'What is the link between sleep apnoea and adult bedwetting?', a: 'Sleep apnoea causes deep non-restorative sleep and increases release of atrial natriuretic peptide (which promotes urine production at night). Treating sleep apnoea with CPAP often resolves nocturnal enuresis. Homoeopathic treatment for underlying sleep quality supports this process.' },
            { q: 'Is adult bedwetting treatable?', a: 'Yes. A thorough urological evaluation followed by individualised homoeopathic treatment gives good results in most cases of adult nocturnal enuresis — particularly when the cause is functional (overactive bladder, deep sleep, stress) rather than structural.' },
            { q: 'Should I see a urologist alongside homoeopathic treatment?', a: 'Yes. A basic urological evaluation — urinalysis, bladder diary, flow rate measurement, and post-void residual assessment — is recommended to rule out structural or neurological causes before or alongside homoeopathic treatment.' },
            { q: 'What behavioural strategies help adult bedwetting alongside homoeopathy?', a: 'Fluid restriction in the 2–3 hours before bedtime (especially tea, coffee, alcohol — all diuretics), voiding twice before sleep (double voiding), setting an alarm to void once at night initially, and monitoring with a bladder diary all complement constitutional homoeopathic treatment.' },
        ],
    },

    'prostate': {
        title: 'Prostate Issues', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'BPH causes urinary problems in men over 50 as the enlarged prostate compresses the urethra. Homoeopathy reduces prostate size, improves urinary flow, and avoids the sexual side effects of conventional alpha-blockers.',
        symptoms: ['Weak or slow urinary stream', 'Straining to start urination', 'Frequent urination especially nocturia', 'Feeling of incomplete bladder emptying', 'Dribbling at end of urination'],
        causes: ['Age-related hormonal changes — increased DHT', 'Chronic prostatic inflammation', 'Sedentary lifestyle and obesity', 'Dietary factors (low zinc)', 'Genetic predisposition'],
        homeopathy: 'Sabal Serrulata (BPH — primary homoeopathic remedy for prostate enlargement), Chimaphila Umbellata (BPH with dribbling, fullness), Lycopodium (reduced stream, right-sided, older man), Staphysagria (prostatitis from emotion), Pulsatilla (benign prostate, variable symptoms).',
        faq: [
            { q: 'What is the difference between BPH, prostatitis, and prostate cancer?', a: 'BPH (Benign Prostatic Hyperplasia) is non-cancerous prostate enlargement from hormonal changes in ageing men. Prostatitis is inflammation of the prostate — often bacterial or inflammatory — causing perineal pain and urinary symptoms. Prostate cancer is malignant and requires separate evaluation — PSA testing and biopsy.' },
            { q: 'Can BPH become prostate cancer?', a: 'BPH does not directly become prostate cancer — they arise from different zones of the prostate. However, both can coexist, so any significant change in urinary symptoms should prompt PSA testing and urological assessment. Homoeopathic treatment does not affect PSA interpretation.' },
            { q: 'Can homoeopathy shrink an enlarged prostate?', a: 'Sabal Serrulata and constitutional remedies show documented improvement in prostate size and urinary flow (increased maximum flow rate, reduced post-void residual) in clinical practice over 3–6 months — with the additional advantage of no sexual dysfunction side effects.' },
            { q: 'Is homoeopathy safe for prostate treatment in elderly men?', a: 'Yes. Homoeopathic remedies are completely safe for elderly patients, with no drug interactions with cardiac, diabetic, or antihypertensive medications — a major practical advantage in men who typically take multiple conventional medications.' },
            { q: 'What diet and lifestyle changes support prostate health?', a: 'A diet rich in lycopene (cooked tomatoes), zinc (pumpkin seeds), selenium, and omega-3 fatty acids supports prostate health. Reducing alcohol, caffeine, and spicy foods (which irritate the bladder neck) helps symptoms. Regular physical activity reduces DHT levels and prostate inflammation.' },
        ],
    },

    'recurrent-uti': {
        title: 'Recurrent UTI', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Recurrent UTI (3 or more episodes per year) reflects a constitutional urogenital susceptibility. Homoeopathy substantially reduces recurrence frequency by strengthening the urogenital mucosa and immune response.',
        symptoms: ['Same as acute UTI — burning, urgency, frequency', 'Pattern of infections every 4–8 weeks', 'Post-coital UTIs in sexually active women', 'Antibiotic-resistant pattern developing over time'],
        causes: ['Post-coital bacterial introduction', 'Post-menopausal oestrogen deficiency', 'Bladder anatomical variations', 'Incomplete bladder emptying', 'Antibiotic overuse disrupting normal flora'],
        homeopathy: 'Staphysagria (recurrent UTI post-intercourse or from suppressed anger), Natrum Muriaticum (recurrent UTI post-menopause), Sepia (recurrent UTI in exhausted women), Equisetum (recurrent UTI with no obvious cause), Causticum (chronic urinary weakness).',
        faq: [
            { q: 'Why do some women get UTIs repeatedly while others never do?', a: 'Constitutional susceptibility involves differences in urogenital mucosal immunity, urinary tract anatomy (shorter urethra, incomplete bladder emptying), vaginal microbiome composition, and genetic factors affecting uroepithelial receptors for E. coli. Homoeopathy addresses these underlying susceptibility factors directly.' },
            { q: 'Does long-term antibiotic prophylaxis for recurrent UTI cause problems?', a: 'Yes. Long-term low-dose antibiotics disrupt the vaginal and gut microbiome, promote antibiotic-resistant bacteria, increase risk of C. difficile colitis, and do not address the root susceptibility. Homoeopathic treatment is a safe, effective alternative that builds natural resistance.' },
            { q: 'How many UTIs per year can homoeopathy prevent?', a: 'Most patients see recurrence reduced from 6–8 per year to 0–2 per year within 4–6 months of constitutional treatment. Many achieve complete freedom from recurrence for extended periods.' },
            { q: 'Is long-term antibiotic prophylaxis avoidable with homoeopathy?', a: 'Yes. Constitutional homoeopathy is a safe and effective alternative to long-term antibiotic prophylaxis — without the risks of antibiotic resistance, microbiome disruption, or side effects. It is particularly valuable for post-menopausal women and those with post-coital UTI patterns.' },
            { q: 'Does cranberry really prevent UTIs and how does it compare to homoeopathy?', a: 'Cranberry proanthocyanidins inhibit bacterial adherence to the bladder wall and have modest preventive benefit for recurrent UTIs. Homoeopathy works at a deeper level — improving the mucosal immune response and constitutional resilience — and has more sustained, comprehensive effects compared to cranberry alone.' },
        ],
    },

    'interstitial-cystitis': {
        title: 'Interstitial Cystitis', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Interstitial Cystitis (IC) / Painful Bladder Syndrome is a chronic condition causing bladder pain, urgency, and frequency without detectable infection. Homoeopathy addresses the neurogenic bladder inflammation and constitutional predisposition.',
        symptoms: ['Chronic pelvic or bladder pain', 'Frequency — urinating up to 60 times a day in severe cases', 'Urgency and pressure in the bladder', 'Pain worsened by certain foods, stress, or intercourse'],
        causes: ['Bladder mucosal lining defect', 'Autoimmune-mediated bladder inflammation', 'Neurogenic inflammation of bladder nerves', 'Previous UTI triggering chronic inflammatory response', 'Associated with fibromyalgia and IBS'],
        homeopathy: 'Cantharis (intense burning bladder pain), Pareira Brava (frequent urination with straining, IC pain), Equisetum (bladder pain, frequent urination without infection), Lycopodium (chronic bladder dysfunction), Apis (stinging bladder pain better cold).',
        faq: [
            { q: 'How is interstitial cystitis diagnosed when tests come back normal?', a: 'IC is a diagnosis of exclusion — infection, cancer, and other bladder conditions must be ruled out first. Diagnosis is based on characteristic symptoms (bladder pain, urgency, frequency without infection) persisting 6+ weeks. Cystoscopy with hydrodistension and potassium sensitivity testing may be used to confirm.' },
            { q: 'What foods trigger interstitial cystitis flares?', a: 'Acidic foods (citrus, tomatoes, vinegar), caffeine, alcohol, spicy foods, artificial sweeteners, and carbonated drinks commonly trigger IC flares by irritating the bladder mucosa. An IC elimination diet — removing these systematically — helps identify personal triggers to avoid alongside treatment.' },
            { q: 'Is homoeopathy effective for a condition as difficult as IC?', a: 'Many IC patients report significant improvement in pain, urinary frequency, urgency, and quality of life with sustained constitutional homoeopathic treatment — a condition where conventional options (pentosan, bladder instillations) provide only partial and temporary relief.' },
            { q: 'How long does IC treatment take with homoeopathy?', a: 'Most patients notice meaningful pain and frequency reduction over 3–6 months. Continued treatment is needed for consolidation — full stabilisation typically takes 6–12 months. Dietary management alongside treatment dramatically improves speed of response.' },
            { q: 'Is IC related to fibromyalgia and IBS, and does homoeopathy address all of them?', a: 'Yes. IC frequently overlaps with fibromyalgia, IBS, vulvodynia, and chronic pelvic pain — all sharing central sensitisation as a mechanism. Constitutional homoeopathy addresses the overall sensitised pain state rather than each condition separately, making it uniquely suited to patients with overlapping conditions.' },
        ],
    },

    // ── 12. ACUTE & CHRONIC ──────────────────────────────────────────────────


    'fever-infections': {
        title: 'Fever & Infections', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Homoeopathy has a long history managing fevers and acute infections dating back to 19th-century epidemics. It excels at reducing fever duration, enhancing immune response, and preventing secondary complications without the side effects of antipyretics.',
        symptoms: ['High or low-grade fever', 'Body aches and headache', 'Sore throat or respiratory symptoms', 'Nausea and vomiting', 'Fatigue and malaise', 'Chills and sweating'],
        causes: ['Viral infections (influenza, dengue, COVID-19)', 'Bacterial infections', 'Parasitic infections (malaria)', 'Post-vaccination fever', 'Unknown viral illness (viral fever)'],
        homeopathy: 'Aconite (sudden high fever after cold exposure, no sweat), Belladonna (high fever with red face, delirium, throbbing head), Gelsemium (slow-onset fever, weakness, chills up the spine), Arsenicum Album (fever with anxiety, restlessness), Bryonia (fever with dryness, worse any motion).',
        faq: [
            { q: 'Is fever always dangerous and should it always be suppressed?', a: 'Fever is actually a beneficial immune response — elevated temperature inhibits pathogen replication and activates immune cells. Moderate fever (up to 39°C in otherwise healthy patients) does not need aggressive suppression. Homoeopathy supports the body\'s fever response rather than blunting it.' },
            { q: 'When is a fever a medical emergency?', a: 'Seek immediate care for fever above 40°C, fever with stiff neck (meningitis), severe headache, rash, difficulty breathing, extreme confusion, fever in a child under 3 months, or fever not improving after 3–4 days. These warrant conventional emergency evaluation regardless of treatment.' },
            { q: 'Can homoeopathy replace antibiotics for bacterial fever?', a: 'No. Confirmed bacterial infections (pneumonia, urinary infection, bacterial meningitis) require appropriate antibiotics to prevent life-threatening complications. Homoeopathy is supportive in managing symptoms and recovery alongside antibiotics, not as a replacement.' },
            { q: 'How does homoeopathy work for viral fever without specific treatment?', a: 'Homoeopathy stimulates the body\'s innate immune response, reduces symptom severity and duration, prevents secondary complications, and addresses the individual\'s unique symptom picture — ideal for viral illnesses where no specific antiviral exists.' },
            { q: 'Can homoeopathy be used to prevent post-viral complications after fever?', a: 'Yes. Remedies like Gelsemium and Phosphoric Acid address post-viral weakness and prevent the prolonged fatigue (post-viral fatigue syndrome) that commonly follows severe viral illnesses including influenza and COVID-19.' },
        ],
    },

    'allergies': {
        title: 'Allergies', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Allergic conditions result from hypersensitive immune reactions to harmless environmental triggers — pollen, food, pet dander. Homoeopathy desensitises the allergic constitution, reducing the severity of reactions and the need for antihistamines.',
        symptoms: ['Sneezing, runny nose, and watery eyes', 'Hives, rash, or eczema flares', 'Digestive symptoms from food allergies', 'Asthma triggered by allergens'],
        causes: ['Genetic atopic predisposition', 'Early childhood gut microbiome disruption', 'Hygiene hypothesis — reduced early infectious exposure', 'Specific allergen sensitisation (IgE-mediated)'],
        homeopathy: 'Allium Cepa (watery allergy with burning nasal discharge), Apis Mellifica (urticaria or angioedema), Natrum Muriaticum (chronic constitutional allergy with emotional component), Sulphur (chronic allergic constitution, heat-sensitive), Arsenicum Album (allergy with restlessness and burning).',
        faq: [
            { q: 'Why are allergies becoming more common?', a: 'The hygiene hypothesis suggests reduced childhood exposure to diverse microorganisms — from modern clean environments, antibiotic use, and urban living — leads to immune misdirection toward harmless allergens. Gut microbiome disruption in early life is also a key factor, explaining the benefit of early diverse microbial exposure.' },
            { q: 'What is the difference between IgE-mediated allergy and food intolerance?', a: 'IgE-mediated allergy involves a rapid immune response causing symptoms within minutes — hives, swelling, anaphylaxis. Food intolerance (e.g., lactose intolerance, gluten sensitivity) causes delayed digestive symptoms over hours without immune involvement. Homoeopathy can address both types constitutionally.' },
            { q: 'Does homoeopathy work as allergy immunotherapy?', a: 'Homoeopathy achieves similar desensitisation to conventional immunotherapy by correcting the constitutional allergic predisposition over time — reducing the immune system\'s reactivity to allergens. Unlike immunotherapy, it does not require identification of specific allergens.' },
            { q: "Can children's food allergies be treated homoeopathically?", a: 'Yes. Constitutional homoeopathic treatment in children can reduce or resolve food sensitivities over time, improving nutritional diversity and quality of life — particularly effective when started early and combined with careful dietary management during the treatment period.' },
            { q: 'Can anaphylaxis be treated with homoeopathy?', a: 'No. Anaphylaxis is a life-threatening emergency requiring immediate epinephrine (adrenaline) injection, oxygen, and emergency medical care. Homoeopathy has no role in acute anaphylaxis management. Its value is in reducing the frequency and severity of allergic reactions through constitutional prevention.' },
        ],
    },

    'autoimmune': {
        title: 'Autoimmune Conditions', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Autoimmune conditions arise when the immune system mistakenly attacks the body\'s own tissues. Homoeopathy addresses the dysregulated immune response at a deep constitutional level, reducing flare frequency and severity.',
        symptoms: ['Fatigue and low energy disproportionate to activity', 'Joint pain and muscle weakness', 'Recurrent unexplained fever', 'Skin rashes or hair loss', 'Organ-specific symptoms depending on the condition'],
        causes: ['Genetic predisposition (HLA genes)', 'Gut dysbiosis and leaky gut (key trigger)', 'Chronic stress and trauma', 'Environmental toxins and chemicals', 'Infections acting as molecular mimicry triggers'],
        homeopathy: "Thuja (constitutional remedy for conditions following vaccinations or autoimmune triggers), Natrum Muriaticum (autoimmune from suppressed emotions), Phosphorus (tissue inflammation, bleed easily), Sulphur (chronic inflammatory constitution), Medorrhinum (recurrent autoimmune flares).",
        faq: [
            { q: 'Why does the immune system attack the body\'s own tissues in autoimmune disease?', a: 'In autoimmune disease, molecular mimicry (where pathogens resemble self-tissue, confusing the immune system), gut permeability allowing undigested proteins into the bloodstream, regulatory T-cell failure, and genetic HLA variants all contribute to immune self-attack. Homoeopathy addresses the constitutional predisposition underlying this misdirection.' },
            { q: 'Can one person have multiple autoimmune conditions simultaneously?', a: 'Yes. Autoimmune conditions cluster — having one significantly increases risk of developing another (e.g., Hashimoto\'s + vitiligo + alopecia areata). This is because they share a common underlying immune dysregulation, which constitutional homoeopathic treatment addresses at the root level.' },
            { q: 'Can homoeopathy replace immunosuppressants for autoimmune disease?', a: 'Not typically as a direct replacement, but as complementary treatment it reduces flare frequency and severity — allowing lower immunosuppressant doses over time under specialist supervision. This reduces the side effect burden of long-term immunosuppression.' },
            { q: 'How does homoeopathy approach the root cause of autoimmunity?', a: 'Homoeopathy uses the concept of inherited disease tendencies (miasms) and treats the predisposition — addressing gut health, stress response, emotional suppression, and immune dysregulation simultaneously through deeply individualised constitutional remedies.' },
            { q: 'What role does gut health play in autoimmune disease and how does homoeopathy help?', a: 'Gut dysbiosis and increased intestinal permeability ("leaky gut") are increasingly recognised as central triggers of autoimmune activation. Homoeopathic constitutional treatment improves gut immune regulation, and dietary approaches addressing gut health (probiotic-rich, low inflammatory foods) complement treatment significantly.' },
        ],
    },

    'post-viral-fatigue': {
        title: 'Post-viral Fatigue', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Post-viral fatigue (including Long COVID) involves persistent exhaustion, cognitive dysfunction, and multi-system symptoms weeks to months after a viral infection. Homoeopathy has a long history of treating post-infectious fatigue with excellent results.',
        symptoms: ['Profound unrefreshing fatigue not improved by rest', 'Brain fog — poor concentration, memory', 'Post-exertional malaise (worsening after activity)', 'Breathlessness and chest tightness', 'Insomnia and sleep disruption'],
        causes: ['Viral persistence or immune dysregulation post-infection', 'Mitochondrial dysfunction from viral damage', 'Post-COVID spike protein-related vascular inflammation', 'HPA axis dysregulation', 'Reactivation of latent viruses (EBV, CMV)'],
        homeopathy: 'Gelsemium (profound weakness, heavy limbs from viral illness), Arsenicum Album (anxiety, fatigue, post-COVID restlessness), Phosphoric Acid (weakness from viral illness or grief), Kali Phosphoricum (nervous exhaustion, brain fog), Carcinosin (deep fatigue with suppressed history).',
        faq: [
            { q: 'What is the difference between normal post-illness tiredness and post-viral fatigue syndrome?', a: 'Normal post-illness fatigue resolves within 2–4 weeks with rest. Post-viral fatigue syndrome (PVFS) persists beyond 12 weeks with characteristic features: unrefreshing sleep, post-exertional malaise (symptoms worsen significantly after even mild activity), and cognitive dysfunction — none of which improve with rest alone.' },
            { q: 'Why does post-exertional malaise occur in post-viral fatigue?', a: 'Post-exertional malaise (PEM) — a hallmark of ME/CFS and Long COVID — is thought to involve impaired cellular energy production (mitochondrial dysfunction), abnormal immune activation during exertion, and autonomic dysfunction. This is why "push through" advice is counterproductive and pacing is essential.' },
            { q: 'Can homoeopathy help Long COVID symptoms?', a: 'Early clinical evidence and practice show positive outcomes for Long COVID — especially fatigue, brain fog, breathlessness, and anosmia — with individualised homoeopathic treatment. Gelsemium, Arsenicum Album, Phosphoric Acid, and Carcinosin are among the most commonly indicated remedies.' },
            { q: 'How long does post-viral fatigue take to resolve with homoeopathy?', a: 'Many patients see significant improvement in energy, sleep, and cognitive function within 4–8 weeks. Full resolution may take 3–6 months of consistent constitutional treatment — faster than spontaneous natural recovery in most cases.' },
            { q: 'What pacing strategy helps post-viral fatigue alongside homoeopathic treatment?', a: 'Energy envelope management — staying within 70% of available energy capacity, never pushing to exhaustion, building activity very gradually (10% per week at most), prioritising sleep, and avoiding the boom-bust cycle — is the most important non-pharmacological strategy, dramatically complementing homoeopathic recovery.' },
        ],
    },

    'chronic-pain': {
        title: 'Chronic Pain', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Chronic pain affects 20% of adults worldwide as a complex biopsychosocial condition. Homoeopathy addresses chronic pain holistically — targeting the physical pathology, the emotional response to pain, and the constitutional predisposition, without opioid dependency.',
        symptoms: ['Persistent pain lasting more than 3 months', 'Pain disproportionate to tissue damage', 'Sleep disturbance and depression from pain', 'Fatigue and reduced quality of life', 'Fear-avoidance behaviour and catastrophisation'],
        causes: ['Central sensitisation — hypersensitive pain processing', 'Tissue damage (osteoarthritis, neuropathy)', 'Inflammatory conditions', 'Psychological factors — anxiety, depression', 'Post-surgical or post-injury chronic pain'],
        homeopathy: 'Hypericum (nerve pain — burning, shooting), Arsenicum Album (burning pain worse at night with restlessness), Colocynth (cramping pain better with pressure), Staphysagria (pain from suppressed anger or surgical wound), Silicea (chronic aching in weak, chilly patients).',
        faq: [
            { q: 'What is central sensitisation and why is it important in chronic pain?', a: 'Central sensitisation is a state of amplified pain signalling in the spinal cord and brain — where the nervous system becomes hypersensitive and fires pain signals with minimal or no peripheral stimulus. It explains why chronic pain is often disproportionate to tissue damage and why psychological factors strongly influence pain intensity.' },
            { q: 'Can depression and anxiety cause physical pain?', a: 'Yes. Depression and anxiety lower the pain threshold through shared neurotransmitter pathways (serotonin, norepinephrine). Homoeopathy\'s strength in chronic pain lies partly in treating both the pain and the emotional comorbidity simultaneously — an approach that significantly outperforms treating only the physical component.' },
            { q: 'Can homoeopathy replace opioids for chronic pain?', a: 'In mild to moderate chronic pain, homoeopathy provides effective relief without dependency, tolerance, or opioid side effects. In opioid-dependent patients, it supports gradual tapering under medical supervision by reducing pain while addressing the underlying constitutional cause.' },
            { q: 'How does homoeopathy treat pain that has no identifiable physical cause?', a: 'Homoeopathy excels at treating pain with a strong emotional component — grief, suppressed anger, trauma, wounded dignity — through constitutional remedies like Staphysagria (suppressed anger), Ignatia (grief), and Natrum Muriaticum (unexpressed emotional pain manifesting physically).' },
            { q: 'What non-pharmacological approaches complement homoeopathy for chronic pain?', a: 'A combination of graded exercise therapy (to gradually desensitise central sensitisation), cognitive behavioural therapy for pain (changing catastrophic thought patterns), mindfulness-based stress reduction, sleep hygiene, and social connection all work synergistically with constitutional homoeopathic treatment.' },
        ],
    },

    'recurrent-infections': {
        title: 'Recurrent Infections', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Recurrent infections indicate a constitutionally weakened immune system. Homoeopathy systematically strengthens the vital force, reducing both susceptibility and severity of recurring infections over time — a key advantage over repeated antibiotic courses.',
        symptoms: ['Frequent infections — more than 4–6 per year', 'Slow recovery from illnesses', 'Need for repeated antibiotic courses', 'Associated fatigue, low mood, and poor appetite'],
        causes: ['Primary or secondary immunodeficiency', 'Nutritional deficiencies (zinc, Vitamin D, iron)', 'Gut dysbiosis reducing immune training', 'Chronic stress impairing immune function', 'Antibiotic overuse disrupting microbiome'],
        homeopathy: 'Tuberculinum (thin child or adult with recurrent respiratory infections — deep miasmatic remedy), Calcarea Carbonica (sweaty chubby constitution with frequent infections), Silicea (recurrent infections ending in pus, weak, chilly), Natrum Muriaticum (recurrent illness from suppressed emotions), Baryta Carbonica (sluggish immunity, enlarged glands).',
        faq: [
            { q: 'How many infections per year is concerning enough to investigate immunity?', a: 'More than 4–6 significant infections per year requiring antibiotics, 2+ pneumonias per year, recurrent infections with unusual organisms, or infections that are unusually severe or slow to resolve warrant evaluation for immunodeficiency — including primary immunodeficiencies in children.' },
            { q: 'Can nutritional deficiencies cause recurrent infections?', a: 'Yes. Deficiencies in Vitamin D, zinc, iron, and protein significantly impair innate and adaptive immune function. Vitamin D deficiency in particular is extremely common and directly impairs antimicrobial peptide production. Testing and correcting deficiencies alongside homoeopathic treatment gives the fastest results.' },
            { q: 'How long does constitutional treatment take to strengthen immunity?', a: 'Significant improvement in infection frequency is typically seen within 3–4 months. Sustained treatment over 6–12 months consolidates lasting immune strengthening — with many patients achieving complete freedom from their usual pattern of recurrent illness.' },
            { q: 'Can homoeopathy reduce antibiotic use for recurrent infections?', a: 'Yes. Reducing the frequency of infections naturally reduces antibiotic need — simultaneously preserving the gut microbiome, reducing antibiotic resistance risk, and avoiding the cycle where antibiotics themselves further weaken immunity through microbiome disruption.' },
            { q: 'Does gut health affect susceptibility to recurrent infections?', a: 'Profoundly. Approximately 70% of the immune system is gut-associated (GALT). Gut dysbiosis from antibiotics, poor diet, or stress impairs immune training and mucosal barrier function. Homoeopathic constitutional treatment combined with probiotic support and dietary improvement addresses this gut-immune connection comprehensively.' },
        ],
    },

    // ── 13. NEW DISEASES ─────────────────────────────────────────────────────

    'bronchitis': {
        title: 'Bronchitis', category: 'Respiratory System', bannerSubtitle: 'Respiratory System',
        intro: 'Bronchitis is inflammation of the bronchial tubes, causing a persistent cough with mucus. Acute bronchitis is usually viral, while chronic bronchitis — a form of COPD — results from prolonged irritation. Homoeopathy reduces inflammation, clears mucus, and strengthens bronchial resilience without suppressive antibiotic overuse.',
        symptoms: ['Persistent cough with yellow or grey mucus', 'Chest discomfort and soreness', 'Mild fever and chills (acute)', 'Shortness of breath on exertion', 'Wheezing and fatigue'],
        causes: ['Viral infection (most common cause of acute bronchitis)', 'Cigarette smoking (chronic bronchitis)', 'Air pollution and dust exposure', 'Weakened immunity', 'Sinusitis causing post-nasal drip'],
        homeopathy: 'Antimonium Tartaricum (rattling chest, difficulty expecting mucus), Phosphorus (tickling cough, hoarseness, sensitive patient), Hepar Sulph (productive cough, chilly patient, pus-forming tendency), Kali Bichromicum (thick ropy yellow mucus, sinus involvement), Bryonia (dry painful cough worse on movement). Selected based on mucus character, cough type, and constitutional profile.',
        faq: [
            { q: 'What is the difference between acute and chronic bronchitis?', a: 'Acute bronchitis lasts 1–3 weeks and is almost always viral. Chronic bronchitis is defined as a productive cough for at least 3 months per year for 2 consecutive years, caused by long-term irritation (usually cigarette smoke) and represents a form of COPD.' },
            { q: 'Is antibiotic treatment necessary for acute bronchitis?', a: 'In most cases, no. Over 95% of acute bronchitis cases are viral, making antibiotics ineffective. Homoeopathy treats bronchitis effectively without contributing to antibiotic resistance — a significant clinical advantage particularly in this era of rising antimicrobial resistance.' },
            { q: 'How does homoeopathy help clear bronchial mucus?', a: 'Remedies like Antimonium Tartaricum improve the cough reflex and the body\'s ability to expectorate accumulated mucus. Kali Bichromicum dissolves thick tenacious secretions. This natural expectoration — rather than suppression — leads to healthier and more complete recovery.' },
            { q: 'Can smokers benefit from homoeopathic treatment for bronchitis?', a: 'Yes. While quitting smoking is the single most important step, homoeopathy significantly improves mucus clearance, reduces cough severity, and addresses the constitutional sensitivity of the bronchial mucosa. Constitutional treatment can also support smoking cessation efforts.' },
            { q: 'How long does homoeopathic treatment take for bronchitis?', a: 'Acute bronchitis typically responds within 1–2 weeks with the correct remedy — often faster than untreated cases. Chronic bronchitis requires sustained constitutional treatment over 6–12 months alongside lifestyle modifications for meaningful improvement.' },
        ],
    },

    'pneumonia': {
        title: 'Pneumonia', category: 'Respiratory System', bannerSubtitle: 'Respiratory System',
        intro: 'Pneumonia is infection and inflammation of the lung tissue, causing the alveoli to fill with fluid or pus. It can range from mild "walking pneumonia" to severe life-threatening illness. Homoeopathy plays a powerful supportive and curative role — particularly in mild-to-moderate cases — reducing fever, aiding expectoration, and accelerating recovery.',
        symptoms: ['High fever with chills and sweating', 'Productive cough — often with rust-coloured or yellow sputum', 'Chest pain worsening on breathing or coughing', 'Breathlessness and rapid breathing', 'Fatigue and muscle aches'],
        causes: ['Bacterial infection (Streptococcus pneumoniae — most common)', 'Viral infection (influenza, COVID-19)', 'Aspiration of food or liquids', 'Weakened immunity (elderly, diabetics)', 'Hospital-acquired infections'],
        homeopathy: 'Phosphorus (early stage — right-sided, rust-coloured sputum, anxious), Bryonia (dry pleuritic pain, worse motion, dry cough), Antimonium Tartaricum (late stage with mucus accumulation, suffocation), Veratrum Viride (high fever, rapid pulse), Lycopodium (right-sided pneumonia with fan-like nostril movement). Homoeopathy is used alongside conventional treatment in moderate-severe cases.',
        faq: [
            { q: 'When is pneumonia serious enough to hospitalise?', a: 'Warning signs requiring hospitalisation include oxygen saturation below 92%, severe breathlessness, confusion, high fever unresponsive to treatment, rapid heart rate, and inability to maintain oral fluids. Elderly patients and immunocompromised individuals have lower thresholds for admission. Never delay emergency care for severe pneumonia.' },
            { q: 'Can homoeopathy be used alongside antibiotics for pneumonia?', a: 'Yes. In bacterial pneumonia requiring antibiotics, homoeopathy works effectively alongside conventional therapy — accelerating recovery, reducing fever duration, improving mucus clearance, and rebuilding immunity post-illness. It should not replace antibiotics in confirmed bacterial pneumonia.' },
            { q: 'How does homoeopathy help with the high fever of pneumonia?', a: 'Remedies like Veratrum Viride and Aconitum specifically address the intense fever and rapid pulse of early pneumonia, working with the body\'s immune response rather than suppressing it. This gentle fever regulation — rather than blanket antipyretic use — often leads to faster full recovery.' },
            { q: 'Can pneumonia recur after homoeopathic treatment?', a: 'Constitutional treatment following recovery from pneumonia significantly strengthens the patient\'s inherent lung resilience and immune response, particularly valuable for elderly patients or those who experience recurrent lower respiratory infections.' },
            { q: 'What is walking pneumonia and is it milder?', a: 'Walking pneumonia (usually caused by Mycoplasma pneumoniae) produces milder symptoms — dry cough, mild fever, fatigue — allowing patients to remain ambulatory. It responds very well to homoeopathic treatment alone, with remedies like Phosphorus and Ferrum Phosphoricum being particularly effective in this milder form.' },
        ],
    },

    'indigestion': {
        title: 'Indigestion', category: 'Digestive System', bannerSubtitle: 'Digestive System',
        intro: 'Indigestion (dyspepsia) refers to discomfort or pain in the upper abdomen associated with eating. It is one of the most common digestive complaints, affecting millions daily. Homoeopathy corrects the underlying digestive fire imbalance — addressing individual eating habits, emotional triggers, and gastric sensitivity rather than just neutralising acid.',
        symptoms: ['Bloating and fullness after meals', 'Burning or pain in upper abdomen', 'Belching and nausea', 'Early satiety — feeling full too quickly', 'Occasional vomiting or regurgitation'],
        causes: ['Overeating or eating too quickly', 'Spicy, fatty, or rich foods', 'Stress and anxiety', 'Alcohol and caffeine excess', 'H. pylori infection (functional dyspepsia)', 'Medications (NSAIDs, iron tablets)'],
        homeopathy: 'Nux Vomica (indigestion after rich food, alcohol, stress — type-A personality), Carbo Veg (bloating even after simple food, wants to be fanned), Lycopodium (bloating worse 4–8 pm, right-sided), Pulsatilla (indigestion from fatty food, weepy, mild patient), Natrum Phosphoricum (sour eructations, acid taste).',
        faq: [
            { q: 'What is the difference between indigestion and acid reflux?', a: 'Indigestion (dyspepsia) is upper abdominal discomfort broadly associated with eating. Acid reflux specifically involves stomach acid travelling upward into the oesophagus, causing heartburn. Many patients have both simultaneously — homoeopathy addresses the complete digestive pattern rather than splitting symptoms artificially.' },
            { q: 'Can anxiety and stress really cause indigestion?', a: 'Yes. The gut-brain axis is very real — stress activates the sympathetic nervous system, reducing blood flow to the gut, altering gut motility, and increasing acid secretion. Homoeopathic treatment uniquely addresses both the emotional driver and its digestive manifestation simultaneously.' },
            { q: 'How quickly does homoeopathy work for indigestion?', a: 'Acute indigestion often responds within minutes to the correct remedy — Nux Vomica after overeating, Pulsatilla after rich fatty food. Chronic recurrent indigestion requires 4–8 weeks of constitutional treatment for lasting improvement.' },
            { q: 'What dietary habits help prevent indigestion alongside homoeopathic treatment?', a: 'Eat slowly and in smaller portions, avoid lying down within 2 hours of meals, limit spicy, fatty, and acidic foods, reduce caffeine and alcohol, and manage stress actively. These simple habits significantly amplify the benefits of homoeopathic treatment.' },
            { q: 'Is functional dyspepsia — indigestion with normal endoscopy — treatable with homoeopathy?', a: 'Yes, very effectively. Functional dyspepsia — where no structural cause is found — is strongly linked to gut hypersensitivity and stress, both of which homoeopathy addresses constitutionally. Many patients with functional dyspepsia achieve complete resolution with individualised treatment.' },
        ],
    },

    'gastritis': {
        title: 'Gastritis', category: 'Digestive System', bannerSubtitle: 'Digestive System',
        intro: 'Gastritis is inflammation of the stomach lining, causing burning pain, nausea, and indigestion. It can be acute (from infection, NSAIDs, or alcohol) or chronic (from H. pylori or autoimmune causes). Homoeopathy heals the inflamed mucosa from within, addresses the root cause, and prevents the progression to peptic ulcer disease.',
        symptoms: ['Burning or gnawing pain in the upper abdomen', 'Nausea and vomiting', 'Loss of appetite', 'Bloating after meals', 'Dark stools (if bleeding is present)'],
        causes: ['H. pylori bacterial infection', 'NSAIDs (aspirin, ibuprofen) overuse', 'Excessive alcohol consumption', 'Autoimmune gastritis (attacks gastric parietal cells)', 'Chronic stress', 'Bile reflux'],
        homeopathy: 'Nux Vomica (gastritis from spicy food, alcohol, stress), Arsenicum Album (burning pain relieved by warm drinks, anxious patient), Phosphorus (burning gastritis, sympathetic personality), Kali Bichromicum (thick mucus and gastric catarrh), Bismuth (nausea, vomiting with violent gastric irritation). Detailed case-taking determines the precise constitutional remedy.',
        faq: [
            { q: 'What is the difference between gastritis and an ulcer?', a: 'Gastritis is surface-level inflammation of the gastric lining. An ulcer is a deeper erosion that penetrates through the protective mucosa. Gastritis can progress to ulcer formation if untreated, particularly in H. pylori-positive patients — early homoeopathic treatment prevents this progression.' },
            { q: 'How does H. pylori cause gastritis?', a: 'H. pylori bacteria embed in the gastric mucosa, producing urease which breaks down the protective mucus layer. This exposes the stomach lining to acid damage, causing inflammation and pain. Homoeopathy strengthens the mucosal immune barrier and reduces susceptibility to H. pylori, ideally alongside eradication therapy.' },
            { q: 'Can chronic gastritis become cancer?', a: 'Chronic atrophic gastritis — particularly autoimmune or longstanding H. pylori-related — carries an increased risk of gastric cancer over decades. Regular endoscopic monitoring is essential in these cases, alongside constitutional homoeopathic treatment to reduce ongoing mucosal inflammation.' },
            { q: 'How quickly does homoeopathic treatment relieve gastritis pain?', a: 'Acute gastritis pain often responds significantly within 1–3 days of the correct remedy (Nux Vomica, Arsenicum Album, Phosphorus). Chronic gastritis typically shows meaningful improvement in 4–6 weeks of sustained constitutional treatment.' },
            { q: 'What diet helps during homoeopathic treatment for gastritis?', a: 'Eat bland, soft, easily digestible foods. Avoid NSAIDs, alcohol, spicy foods, coffee, and carbonated drinks. Small, regular meals are gentler on the inflamed stomach lining. These dietary steps complement but do not replace constitutional homoeopathic treatment.' },
        ],
    },

    'constipation': {
        title: 'Constipation', category: 'Digestive System', bannerSubtitle: 'Digestive System',
        intro: 'Constipation — defined as fewer than 3 bowel movements per week — is one of the most common digestive complaints worldwide. Homoeopathy corrects the underlying bowel motility, dietary habits, and emotional factors causing constipation without creating the dependency associated with laxative overuse.',
        symptoms: ['Fewer than 3 bowel movements per week', 'Hard, dry, or lumpy stools', 'Straining during defecation', 'Sensation of incomplete evacuation', 'Abdominal bloating and discomfort'],
        causes: ['Low-fibre diet and inadequate fluid intake', 'Sedentary lifestyle', 'Ignoring the urge to defecate', 'Medications (opioids, antacids, iron tablets)', 'Hypothyroidism and metabolic causes', 'Stress and emotional suppression', 'IBS-constipation type'],
        homeopathy: 'Nux Vomica (constant ineffectual urge, constipation from sedentary habit and stress), Bryonia (large dry hard stools, no urge), Alumina (no urge even with soft stools), Silicea (stool recedes back when partially expelled), Lycopodium (constipation from travel or change of routine). Selected based on stool character, urge pattern, and constitutional type.',
        faq: [
            { q: 'Is it normal to have a bowel movement only every 2–3 days?', a: 'Normal bowel frequency ranges from 3 times a day to 3 times a week. If 2–3 days is consistent, painless, and stools are soft and complete, this may be normal for that individual. Constipation becomes a clinical concern when stools are hard, difficult to pass, or accompanied by discomfort.' },
            { q: 'Can laxative overuse worsen constipation long-term?', a: 'Yes. Stimulant laxatives (senna, bisacodyl) used daily weaken the natural bowel nerve function over months to years, creating laxative dependency. Homoeopathy restores natural bowel tone without causing dependency — a significant clinical advantage for chronic constipation.' },
            { q: 'Can constipation cause other health problems?', a: 'Chronic constipation increases risk of haemorrhoids, anal fissures, diverticular disease, and rectal prolapse from repeated straining. Severe cases can cause faecal impaction. Addressing constipation constitutionally prevents these complications.' },
            { q: 'How does diet affect constipation and what should I eat?', a: 'Aim for 25–35g of dietary fibre daily from vegetables, fruits, legumes, and whole grains. Drink at least 2 litres of water daily — fibre without adequate fluid can worsen hard stools. Prunes and flaxseed have natural gentle laxative properties. These complement homoeopathic treatment.' },
            { q: 'How quickly does homoeopathy correct constipation?', a: 'Many patients notice improvement in bowel frequency and stool consistency within 1–2 weeks of the correct constitutional remedy. Long-standing constipation from poor bowel habits or nerve dysfunction takes 4–8 weeks for sustained regularisation.' },
        ],
    },

    'diarrhea': {
        title: 'Diarrhea', category: 'Digestive System', bannerSubtitle: 'Digestive System',
        intro: 'Diarrhea — defined as loose, watery stools occurring 3 or more times per day — can be acute (infection, food poisoning) or chronic (IBS, IBD, malabsorption). Homoeopathy is highly effective for both, acting rapidly in acute episodes and constitutionally correcting the susceptibility to chronic diarrhea without the side effects of antidiarrhoeals.',
        symptoms: ['Loose or watery stools 3 or more times per day', 'Abdominal cramps and pain', 'Urgency and inability to delay defecation', 'Nausea and vomiting (in acute gastroenteritis)', 'Dehydration — thirst, dry mouth, reduced urine output'],
        causes: ['Viral gastroenteritis (most common)', 'Bacterial infections (Salmonella, E. coli)', 'Food poisoning', 'Parasites (Giardia, Entamoeba)', 'Food intolerances (lactose, gluten)', 'IBS or IBD', 'Medications (antibiotics disrupting gut flora)'],
        homeopathy: 'Veratrum Album (profuse watery stools with cold sweat and collapse), Arsenicum Album (burning diarrhoea, anxiety, worse at midnight), Podophyllum (gushing, offensive, painless morning diarrhoea), Aloe Socotrina (urgency and mucus in stools), Nux Vomica (diarrhoea after dietary excess alternating with constipation).',
        faq: [
            { q: 'When should diarrhea prompt immediate medical attention?', a: 'Seek urgent care if diarrhea contains significant blood or mucus (suggesting dysentery or IBD), if there are signs of severe dehydration (no urine for 8+ hours, confusion, sunken eyes, extreme weakness), if it persists beyond 5–7 days, or occurs in the very young or elderly.' },
            { q: 'How can I prevent dehydration during a bout of diarrhea?', a: 'ORS (Oral Rehydration Solution) containing water, sugar, and salt replaces lost fluids and electrolytes. Coconut water and rice water are good natural alternatives. Avoid caffeine, alcohol, fizzy drinks, and dairy. Homoeopathic treatment simultaneously reduces stool frequency and the associated fluid loss.' },
            { q: 'Can homoeopathy work quickly for acute food poisoning diarrhea?', a: 'Yes, often within hours. Arsenicum Album — for burning, anxious, restless diarrhea after food poisoning — is one of the most rapid-acting acute homoeopathic remedies. Podophyllum and Veratrum Album address different presentations just as quickly when well matched.' },
            { q: 'Why does antibiotic use sometimes cause diarrhea?', a: 'Antibiotics kill pathogenic bacteria but also disrupt the normal gut microbiome, allowing Clostridioides difficile (C. diff) or other opportunistic organisms to overgrow, causing antibiotic-associated diarrhea. Homoeopathy used alongside antibiotics minimises this microbiome disruption.' },
            { q: 'Is chronic diarrhea always related to infection?', a: 'No. IBS, ulcerative colitis, Crohn\'s disease, coeliac disease, microscopic colitis, and pancreatic insufficiency all cause chronic diarrhea without active infection. A thorough homoeopathic case-taking identifies the constitutional root — whether stress-driven, immune-driven, or structural — for targeted treatment.' },
        ],
    },

    'joint-pain': {
        title: 'Joint Pain', category: 'Musculoskeletal System', bannerSubtitle: 'Musculoskeletal System',
        intro: 'Joint pain (arthralgia) is among the leading causes of disability worldwide. It can arise from inflammatory arthritis, degenerative wear, infection, or injury. Homoeopathy addresses joint pain at its root — reducing inflammation, improving joint fluid quality, and correcting the underlying constitutional predisposition to joint disease.',
        symptoms: ['Pain, tenderness, and swelling in one or multiple joints', 'Morning stiffness improving with movement', 'Reduced range of motion', 'Warmth and redness over inflamed joints', 'Joint deformity in longstanding disease'],
        causes: ['Osteoarthritis (wear and tear)', 'Rheumatoid arthritis (autoimmune)', 'Gout (uric acid crystals)', 'Psoriatic arthritis', 'Reactive arthritis following infection', 'Injury or overuse'],
        homeopathy: 'Rhus Toxicodendron (stiffness worse on first motion, better with continued movement), Bryonia (pain worse any motion, better absolute rest), Apis Mellifica (hot swollen shiny joints, better cold applications), Calcarea Carbonica (overweight patient, cold damp aggravation), Benzoic Acid (gout with strong-smelling urine). Remedy selected after full joint pain pattern analysis.',
        faq: [
            { q: 'How do I know if my joint pain is inflammatory or degenerative?', a: 'Inflammatory joint pain (rheumatoid arthritis, gout) typically involves swelling, redness, warmth, and prolonged morning stiffness exceeding 1 hour. Degenerative pain (osteoarthritis) is worse after use, better with rest, and morning stiffness resolves within 30 minutes. Blood markers (ESR, CRP, rheumatoid factor) and imaging help differentiate.' },
            { q: 'Can homoeopathy slow joint degeneration in osteoarthritis?', a: 'Homoeopathy can significantly reduce pain, improve mobility, and slow the progression of degenerative changes by reducing chronic low-grade inflammation and improving cartilage nutrition. Results are best in early-to-moderate osteoarthritis — advanced cases with bone-on-bone degeneration are managed more symptomatically.' },
            { q: 'Does weather really affect joint pain?', a: 'Yes. Many patients experience worsening in cold, damp weather. This is not imagined — barometric pressure changes affect joint fluid pressure and membrane sensitivity. Homoeopathic remedy selection actively considers weather modalities: Rhus Tox for cold-damp worsening, Bryonia for dry heat aggravation.' },
            { q: 'Can joint pain from gout be cured with homoeopathy?', a: 'Constitutional homoeopathic treatment — combined with dietary uric acid reduction (reducing red meat, organ meats, shellfish, and alcohol) — effectively controls gouty arthritis. Remedies like Benzoic Acid, Ledum Palustre, and Colchicum reduce uric acid levels and prevent acute attacks.' },
            { q: 'How long before joint pain improves with homoeopathic treatment?', a: 'Acute joint pain often shows significant improvement within 1–2 weeks. Chronic inflammatory arthritis typically requires 3–6 months of consistent constitutional treatment for meaningful reduction in pain, swelling, and morning stiffness.' },
        ],
    },

    'muscle-strain': {
        title: 'Muscle Strain', category: 'Musculoskeletal System', bannerSubtitle: 'Musculoskeletal System',
        intro: 'A muscle strain (pulled muscle) occurs when muscle fibres are overstretched or torn by sudden force or overuse. Homoeopathy provides rapid relief for acute strains and supports faster tissue healing without anti-inflammatory drug side effects.',
        symptoms: ['Sudden pain during or after physical activity', 'Muscle tenderness on palpation', 'Swelling and bruising (in severe strains)', 'Muscle weakness and reduced range of motion', 'Muscle spasms or cramps'],
        causes: ['Sudden uncontrolled movement or lifting', 'Sports and athletic overexertion', 'Poor warm-up before exercise', 'Muscle fatigue and dehydration', 'Inadequate muscle conditioning'],
        homeopathy: 'Arnica Montana (the premier homoeopathic first-aid for injury — bruising, soreness, trauma), Rhus Toxicodendron (strain from overexertion, stiff and better on continued movement), Ruta Graveolens (injuries to fibrous tissue — tendons and ligaments, persistent soreness), Bellis Perennis (deep muscle trauma, sore bruised feeling deeper than Arnica). Selected based on type of injury and symptom pattern.',
        faq: [
            { q: 'What is the difference between a muscle strain and a muscle sprain?', a: 'A muscle strain involves tearing of muscle fibres or the muscle-tendon unit. A sprain involves stretching or tearing of ligaments around a joint. Both benefit from homoeopathic treatment — Arnica and Rhus Tox for strains, Bryonia and Ruta for ligament sprains with joint involvement.' },
            { q: 'Should I apply ice or heat to a muscle strain?', a: 'Ice (wrapped in cloth) is recommended in the first 24–48 hours to reduce acute swelling and inflammation. After 48 hours, gentle heat improves circulation and healing. Rhus Toxicodendron in homoeopathy corresponds to the stiffness that improves with warmth — making it ideal in the sub-acute phase.' },
            { q: 'Can homoeopathy speed up healing after a muscle injury?', a: 'Yes. Arnica Montana taken immediately after injury reduces bruising, swelling, and soreness significantly. Clinical experience and several clinical trials show Arnica reduces post-injury recovery time compared to placebo, allowing return to activity faster.' },
            { q: 'When should a muscle strain be seen by a doctor urgently?', a: 'Seek urgent evaluation if there is a sudden "pop" sound at the time of injury (suggesting complete rupture), severe swelling preventing movement, visible deformity, or numbness and tingling in the affected limb — these signs may indicate a complete tear or associated nerve injury.' },
            { q: 'Can homoeopathy help with exercise-related muscle soreness?', a: 'Yes. Arnica and Rhus Toxicodendron both help delayed onset muscle soreness (DOMS) following intense exercise. Taking Arnica before and after intense training sessions is a well-known sports homoeopathy application that reduces next-day soreness.' },
        ],
    },

    'fungal-infections': {
        title: 'Fungal Infections', category: 'Skin & Dermatology', bannerSubtitle: 'Skin & Dermatology',
        intro: 'Fungal infections affect skin, nails, and mucous membranes — ranging from ringworm and athlete\'s foot to oral and vaginal candidiasis. They thrive in warm, moist environments and in individuals with weakened immunity. Homoeopathy treats both the local infection and the underlying constitutional susceptibility that makes the patient repeatedly prone to fungal overgrowth.',
        symptoms: ['Ring-shaped, red, scaly itchy patches on skin (ringworm)', 'Itching and burning between toes (athlete\'s foot)', 'Thickened, discoloured, brittle nails (onychomycosis)', 'White patches in mouth or throat (oral thrush)', 'Vaginal discharge and itching (Candida)'],
        causes: ['Dermatophyte fungi (ringworm, athlete\'s foot)', 'Candida species (oral and genital thrush)', 'Malassezia (tinea versicolor, dandruff)', 'Humid environment and poor hygiene', 'Antibiotic use disrupting normal flora', 'Diabetes and immunosuppression'],
        homeopathy: 'Tellurium (ringworm-like lesions, offensive discharges), Sepia (ringworm in isolated spots, indifferent patient), Graphites (thick honey-like discharge in skin folds), Sulphur (itching, burning fungal skin conditions worse from heat), Kreosotum (Candida infections with acrid offensive discharge). Constitutional treatment combined with anti-fungal hygiene measures.',
        faq: [
            { q: 'Why do some people get recurrent fungal infections despite treatment?', a: 'Recurrence happens when local anti-fungal treatment eliminates the surface infection without addressing the underlying terrain — immune status, gut microbiome balance, blood sugar control, and hormonal factors. Homoeopathy strengthens the internal terrain, making recurrence far less likely.' },
            { q: 'Can nail fungal infections (onychomycosis) be treated homoeopathically?', a: 'Yes. Nail fungal infections are notoriously slow-growing and difficult to eradicate — conventional antifungals require 3–6 months with liver toxicity risks. Homoeopathy treats nail fungus effectively with remedies like Graphites and Antimonium Crudum, requiring patience (6–12 months for full nail regrowth) but without organ toxicity.' },
            { q: 'Does diet affect susceptibility to fungal infections?', a: 'Yes. High sugar intake feeds Candida and other fungi. A low-sugar, low-refined-carbohydrate diet significantly reduces fungal proliferation. Probiotics help restore competing normal bacteria. These dietary changes powerfully complement constitutional homoeopathic treatment.' },
            { q: 'Can fungal infections spread to other family members?', a: 'Dermatophyte infections (ringworm, athlete\'s foot) are moderately contagious and can spread through direct contact or shared towels, socks, and floors. Candida is not generally contagious between healthy individuals. Good hygiene practices prevent spread while homoeopathic treatment addresses the individual\'s susceptibility.' },
            { q: 'Is homoeopathy safe alongside anti-fungal creams for skin fungal infections?', a: 'Absolutely. Topical anti-fungal creams can be used simultaneously with homoeopathic constitutional treatment. Homoeopathy works from within to reduce susceptibility and recurrence, while topical applications treat the active surface lesion. Together they give faster and more durable results.' },
        ],
    },

    'headache': {
        title: 'Headache', category: 'Neurological / Nervous System', bannerSubtitle: 'Neurological / Nervous System',
        intro: 'Headache is one of the most common neurological complaints, with over 150 classified types. Tension-type and migraine headaches account for the vast majority of cases. Homoeopathy offers targeted treatment based on the precise character, location, and triggers of each patient\'s headache — without the rebound headaches caused by painkiller overuse.',
        symptoms: ['Pressure or dull aching pain around the head (tension-type)', 'Throbbing or pulsating pain (vascular/migraine)', 'Pain behind the eyes', 'Sensitivity to light, sound, or smell', 'Nausea associated with severe headache'],
        causes: ['Muscle tension from stress and poor posture', 'Dehydration', 'Eye strain and screen overuse', 'Hormonal fluctuations', 'Sinus congestion', 'Dietary triggers (caffeine, alcohol, aged cheese)', 'Sleep disturbances'],
        homeopathy: 'Belladonna (sudden violent throbbing headache, worse light, red face), Natrum Muriaticum (headache from sun exposure, grief, hammering pain), Gelsemium (dull heavy headache with weakness, exam nerves), Bryonia (splitting headache worse on any movement), Spigelia (left-sided stitching headache around the eye). Remedy selection based on precise pain character, location, and triggers.',
        faq: [
            { q: 'What is the difference between a tension headache and a migraine?', a: 'A tension headache feels like a tight band around the head, is bilateral, non-throbbing, mild-to-moderate, and is not worsened by routine activity. A migraine is typically one-sided, pulsating, moderate-to-severe, worsened by activity, and accompanied by nausea and sensitivity to light and sound. Both respond well to individualised homoeopathic treatment.' },
            { q: 'What is medication overuse headache and how does homoeopathy help?', a: 'Medication overuse headache (MOH) or rebound headache occurs when painkillers are used more than 10–15 days per month. This creates an escalating cycle. Homoeopathy provides effective pain relief without the rebound risk, making it ideal for breaking the MOH cycle under medical guidance.' },
            { q: 'Can homoeopathy treat chronic daily headache?', a: 'Yes. Constitutional homoeopathic treatment is particularly effective for chronic daily headache — including transformed migraine and chronic tension-type headache. Treatment over 3–6 months progressively reduces headache frequency and intensity, in many cases achieving complete remission.' },
            { q: 'When should a new or severe headache be evaluated urgently?', a: 'The "thunderclap headache" — sudden severe headache reaching maximum intensity within seconds — requires immediate emergency evaluation (it may indicate subarachnoid haemorrhage). Also seek evaluation for new severe headache with fever, stiff neck, confusion, neurological symptoms, or headache after head trauma.' },
            { q: 'Can screen time and posture cause headaches and what helps?', a: 'Digital eye strain and forward head posture create significant neck muscle tension and referred headache. Taking regular screen breaks (20-20-20 rule), ensuring correct monitor height, and strengthening neck and shoulder muscles all complement homoeopathic treatment.' },
        ],
    },

    'palpitations': {
        title: 'Palpitations', category: 'Cardiovascular System', bannerSubtitle: 'Cardiovascular System',
        intro: 'Palpitations — the awareness of one\'s own heartbeat as racing, pounding, or irregular — are a common complaint with a wide spectrum of causes from benign anxiety to cardiac arrhythmias. Homoeopathy effectively addresses both functional palpitations driven by stress and anxiety, and supports the constitutional management of underlying cardiac predispositions.',
        symptoms: ['Awareness of rapid, pounding, or irregular heartbeat', 'Fluttering sensation in the chest', 'Shortness of breath during episodes', 'Dizziness or lightheadedness', 'Anxiety intensifying the episode'],
        causes: ['Anxiety, panic, and stress', 'Caffeine and stimulant use', 'Thyroid disorders (especially hyperthyroidism)', 'Cardiac arrhythmias (atrial fibrillation)', 'Anaemia', 'Hormonal changes (menopause, pregnancy)', 'Dehydration and electrolyte imbalance'],
        homeopathy: 'Digitalis (palpitations at even the slightest motion, slow irregular pulse), Natrum Muriaticum (palpitations from suppressed grief and emotion), Spigelia (violent palpitations visible through clothing, left-sided), Lachesis (palpitations worse on constriction, waking from sleep), Arsenicum Album (anxious, restless palpitations, worse at midnight). Cardiac evaluation must precede homoeopathic treatment for any significant arrhythmia.',
        faq: [
            { q: 'Are palpitations always a sign of heart disease?', a: 'No. The vast majority of palpitations — especially in young healthy people — are benign and driven by anxiety, caffeine excess, stress, or thyroid imbalance. However, palpitations with fainting, chest pain, breathlessness, or structural heart disease history warrant full cardiological evaluation including ECG before assuming they are benign.' },
            { q: 'How can I recognise if palpitations are medically serious?', a: 'Red flags include palpitations associated with fainting (syncope), chest pain or pressure, severe breathlessness, family history of sudden cardiac death, or palpitations at rest in someone over 50. These require urgent ECG and cardiology review, not just reassurance.' },
            { q: 'Can anxiety alone cause palpitations?', a: 'Absolutely. Anxiety activates the sympathetic nervous system, increasing heart rate and the sensitivity to perceive every heartbeat. This creates a self-reinforcing cycle where anxious awareness of the heart makes palpitations worse. Homoeopathic remedies like Argentum Nitricum and Arsenicum Album address both the anxiety and the palpitation pattern simultaneously.' },
            { q: 'Can homoeopathy reduce palpitations from hyperthyroidism?', a: 'Yes. As constitutional homoeopathic treatment progressively calms thyroid overactivity (through remedies like Lycopus Virginicus and Phosphorus), associated palpitations reduce accordingly. Thyroid function must be monitored regularly and conventional anti-thyroid therapy should continue under physician guidance.' },
            { q: 'Can caffeine withdrawal also cause palpitations?', a: 'Yes. Both excess caffeine and abrupt caffeine withdrawal can trigger palpitations. If you experience palpitations during caffeine reduction, taper intake very gradually (reducing by one beverage every 3–5 days) rather than stopping abruptly. Most withdrawal-related palpitations resolve within 1–2 weeks.' },
        ],
    },

    'heart-disease': {
        title: 'Heart Disease', category: 'Cardiovascular System', bannerSubtitle: 'Cardiovascular System',
        intro: 'Cardiovascular disease (CVD) is the leading cause of death globally. Homoeopathy serves as a powerful complementary therapy — reducing cardiovascular risk factors, supporting cardiac function, improving quality of life, and managing non-emergency symptoms — always alongside conventional cardiology care and monitoring.',
        symptoms: ['Chest pain or pressure (angina)', 'Shortness of breath on exertion', 'Fatigue and reduced exercise tolerance', 'Palpitations and irregular heartbeat', 'Ankle swelling (heart failure)', 'Dizziness or fainting'],
        causes: ['Atherosclerosis (coronary artery disease)', 'Hypertension', 'Diabetes mellitus', 'Smoking and obesity', 'Physical inactivity and poor diet', 'Genetic predisposition', 'Previous heart attack or valve disease'],
        homeopathy: 'Crataegus Oxyacantha (the premier cardiac tonic — weakened heart, arteriosclerosis, angina-like pain), Lachesis (left-sided heart symptoms, worse lying on left side), Aurum Metallicum (hypertension, cardiac disease in perfectionist personality), Digitalis (slow irregular pulse, valvular disease), Strophanthus (heart failure, dyspnoea). Used adjunctively alongside cardiology treatment — never as a standalone for acute or severe cardiac conditions.',
        faq: [
            { q: 'Can homoeopathy replace heart medication or stents?', a: 'No. Established coronary artery disease, heart failure, or arrhythmias require evidence-based cardiology care — medications (statins, beta-blockers, ACE inhibitors), interventions (angioplasty, stenting), and monitoring. Homoeopathy serves as complementary support for symptoms, risk factor management, and quality of life — never as a replacement for established cardiac care.' },
            { q: 'What is Crataegus and why is it used for the heart in homoeopathy?', a: 'Crataegus Oxyacantha (hawthorn) has both homoeopathic and herbal evidence for cardiac support — improving coronary blood flow, reducing peripheral vascular resistance, and strengthening myocardial contractility. It is use adjunctively in mild cardiac weakness, early heart failure, and as a preventive cardiac tonic.' },
            { q: 'Can homoeopathy help reduce heart disease risk factors?', a: 'Yes. Constitutional treatment addressing hypertension (Rauwolfia, Natrum Mur), high cholesterol (Cholesterinum, Allium Sativum), obesity (Calcarea Carb, Phytolacca), diabetes, and smoking-related susceptibility significantly reduces the cumulative cardiovascular risk burden over time.' },
            { q: 'How does stress increase heart disease risk?', a: 'Chronic stress elevates cortisol and adrenaline, raising blood pressure, promoting platelet aggregation, increasing LDL oxidation, and causing endothelial inflammation — all direct contributors to atherosclerosis and cardiac events. Homoeopathy\'s mind-level constitutional treatment is uniquely positioned to address stress at its emotional root.' },
            { q: 'Is homoeopathic treatment safe alongside heart medications like warfarin or beta-blockers?', a: 'Yes. Homoeopathic remedies — given in ultra-dilute potencies — do not interact pharmacologically with warfarin, beta-blockers, statins, or other cardiac medications. Always inform your cardiologist of all treatments being taken, and never adjust cardiac medication doses independently.' },
        ],
    },

    'behavioral-disorders': {
        title: 'Behavioral Disorders', category: 'Mental / Emotional Health', bannerSubtitle: 'Mental / Emotional Health',
        intro: 'Behavioural disorders in children and adolescents — including Oppositional Defiant Disorder (ODD), Conduct Disorder, and related conditions — involve persistent patterns of problematic behaviour significantly impairing daily functioning. Homoeopathy offers a safe, individualised, and side-effect-free approach to improving emotional regulation, impulse control, and social behaviour.',
        symptoms: ['Persistent defiance and refusal to follow rules', 'Aggression, irritability, and emotional outbursts', 'Difficulty regulating emotions', 'Poor peer relationships', 'Lying, stealing, or destructive behaviour (conduct disorder)', 'School performance difficulties'],
        causes: ['Genetic predisposition and neurodevelopmental factors', 'Difficult temperament', 'Adverse childhood experiences (trauma, abuse, neglect)', 'Parenting style and family conflict', 'Learning disabilities (undiagnosed ADHD, dyslexia)', 'Social and environmental stressors'],
        homeopathy: 'Stramonium (wild, violent, fearful tantrums, history of fright or trauma), Tuberculinum (restless, destructive, constantly seeking change, travels well), Natrum Muriaticum (suppressed grief or emotional trauma driving behavioural problems), Lycopodium (bully behaviour masking deep insecurity), Chamomilla (extreme irritability and conflict in younger children). Careful developmental and family history is essential.',
        faq: [
            { q: 'What is the difference between ODD and normal defiance in children?', a: 'Normal defiance is developmentally expected — particularly around ages 2–3 and in adolescence — and is proportionate, occasional, and manageable. ODD is characterised by persistent defiance (lasting 6+ months), occurring in multiple settings, causing significant impairment, and beyond what would be expected for the child\'s developmental stage.' },
            { q: 'Can trauma cause behavioural disorders in children?', a: 'Yes. Adverse childhood experiences (ACEs) including abuse, neglect, domestic violence, or sudden loss are among the strongest predictors of behavioural disorders. Trauma-sensitive homoeopathic remedies like Natrum Muriaticum, Staphysagria, and Stramonium directly address the emotional wound driving the behaviour.' },
            { q: 'Is homoeopathy safe for children with behavioural disorders alongside therapy?', a: 'Yes. Homoeopathy complements behavioural therapy (CBT, parent management training), school support, and psychoeducation excellently — addressing the constitutional emotional imbalance driving behaviour while therapy builds skills. Parents typically notice improved receptiveness to therapy once homoeopathic treatment takes effect.' },
            { q: 'How long does homoeopathic treatment take for behavioural disorders?', a: 'Meaningful improvement in emotional regulation and outburst frequency is typically seen within 4–8 weeks of the correct constitutional remedy. Sustained behavioural change over multiple settings develops over 3–6 months of treatment, requiring patient follow-up and dose adjustment.' },
            { q: 'Can dietary changes help children with behavioural disorders?', a: 'Yes. Reducing artificial additives, food dyes (tartrazine, Red 40), preservatives, and high-sugar foods shows measurable reduction in irritability and hyperactivity in susceptible children. Increasing omega-3 fatty acids supports brain development. These nutritional changes potentiate constitutional homoeopathic treatment.' },
        ],
    },

    'bacterial-infections': {
        title: 'Bacterial Infections', category: 'Infections', bannerSubtitle: 'Infections',
        intro: 'Bacterial infections — ranging from skin infections and tonsillitis to urinary tract infections and pneumonia — are caused by pathogenic bacteria and typically require targeted treatment. Homoeopathy plays a valuable supportive and curative role in mild and moderate bacterial infections, reducing severity, aiding recovery, and minimising antibiotic use while strengthening the body\'s innate immune defences.',
        symptoms: ['Localised warmth, redness, swelling, and pain (skin infections)', 'Fever with chills', 'Pus or purulent discharge at infection site', 'Fatigue and malaise', 'Swollen lymph nodes near the infection'],
        causes: ['Streptococcal species (throat, skin, chest)', 'Staphylococcus aureus (skin, wound infections)', 'E. coli (urinary tract, gut)', 'Salmonella and Campylobacter (food poisoning)', 'H. pylori (gastric)', 'Poor immunity and nutritional deficiencies'],
        homeopathy: 'Hepar Sulph (pus-forming infections, highly sensitive to pain and cold — "the homoeopathic antibiotic"), Silicea (chronic suppurating infections, promotes drainage and healing), Belladonna (acute hot red infection with high fever, rapid onset), Mercurius Solubilis (bacterial infections with profuse offensive discharge, night sweating), Pyrogen (septic states, high fever with rapid pulse). Severe bacterial infections require conventional antibiotic therapy — homoeopathy supports recovery.',
        faq: [
            { q: 'When is antibiotic use essential and when can homoeopathy manage alone?', a: 'Antibiotics are essential for serious bacterial infections — sepsis, bacterial meningitis, severe pneumonia, deep tissue infections, and urinary infections in high-risk patients. Homoeopathy can effectively manage mild bacterial infections (minor skin infections, early tonsillitis, uncomplicated UTI in healthy adults) while reducing antibiotic overuse and resistance risk.' },
            { q: 'Can homoeopathy prevent recurrent bacterial infections?', a: 'Yes. Constitutional homoeopathic treatment addresses the underlying immune weakness that makes a patient susceptible to repeated bacterial infections — whether that is chronic tonsillitis, recurrent UTIs, or repeated skin infections. Strengthening the host rather than repeatedly targeting the bacteria is the key homoeopathic strategy.' },
            { q: 'What is Hepar Sulph and why is it called the homoeopathic antibiotic?', a: 'Hepar Sulphuricum Calcareum (Calcium Sulphide) has a specific affinity for pus-forming infections in highly sensitive, chilly patients. It either promotes full suppuration and drainage or — in higher potency — aborts the suppurative process entirely. Its action on staphylococcal skin and throat infections explains this informal title.' },
            { q: 'What are the risks of antibiotic overuse for recurrent bacterial infections?', a: 'Antibiotic overuse risks include disruption of the gut microbiome (reducing immune training), Clostridioides difficile colitis, development of antibiotic-resistant organisms, and increasing the patient\'s chronic illness burden. Homoeopathic constitutional treatment between antibiotic courses helps restore immune resilience and microbiome balance.' },
            { q: 'Can homoeopathy help during antibiotic treatment for bacterial infections?', a: 'Yes. Taking constitutional homoeopathic remedies alongside antibiotics reduces treatment duration in some cases, minimises antibiotic side effects (gut upset, yeast overgrowth), and accelerates recovery. There are no known interactions between homoeopathic remedies and antibiotics.' },
        ],
    },

    'teething-problems': {
        title: 'Teething Problems', category: 'Pediatrics / Common in Children', bannerSubtitle: 'Pediatrics / Common in Children',
        intro: 'Teething — the eruption of the primary teeth — typically begins around 6 months and continues throughout the second year. It causes significant discomfort, drooling, and irritability in many infants. Homoeopathy offers gentle and highly effective relief for teething distress, making it the safest and most natural first choice for this universal infant experience.',
        symptoms: ['Excessive drooling', 'Irritability and crying', 'Biting and chewing on objects', 'Swollen, red, tender gums', 'Disturbed sleep and night crying', 'Mild low-grade fever and diarrhoea in some'],
        causes: ['Normal physiological process of primary tooth eruption', 'Pressure and inflammation as teeth push through the gum membrane', 'Heightened pain sensitivity in some infants', 'Associated increased salivary gland activity'],
        homeopathy: 'Chamomilla (THE premier teething remedy — extreme irritability, one cheek red, only consoled when carried, screaming with pain), Calcarea Carbonica (slow teething in chubby sweaty child), Phytolacca (biting firmly on teeth or gums during teething), Pulsatilla (tearful, clingy, wants to be carried and consoled), Kreosotum (late difficult teething with foul breath and diarrhoea).',
        faq: [
            { q: 'At what age do babies start and finish teething?', a: 'Primary teeth typically begin erupting at 6 months (lower central incisors first) and the full set of 20 primary teeth is usually complete by age 2.5–3 years. There is significant individual variation — some babies teethe with minimal distress from 4 months, others not until 12 months. Both are within the normal range.' },
            { q: 'Does teething cause fever and diarrhoea?', a: 'Mild low-grade temperature and slightly loose stools are commonly associated with teething due to increased gum inflammation and saliva swallowing. However, true high fever (above 38.5°C) and significant diarrhoea should not be attributed to teething — these warrant medical evaluation for infection.' },
            { q: 'Is Chamomilla really effective for teething pain?', a: 'Chamomilla is one of the most frequently prescribed and clinically validated homoeopathic remedies for teething. It is specifically indicated when the infant is inconsolably irritable, screaming with pain, wanting constant carrying, and shows one red cheek — its action for this specific pattern is remarkable.' },
            { q: 'Are teething gels and teething rings safe?', a: 'Many conventional teething gels contain benzocaine (which can cause methaemoglobinaemia in infants) and are no longer recommended. Chilled (not frozen) teething rings provide safe pressure relief. Homoeopathic teething granules are among the safest remedies available and are widely used globally.' },
            { q: 'Can homoeopathy help a baby sleep better during teething?', a: 'Yes. Chamomilla specifically addresses the nocturnal irritability and disturbed sleep of teething — often restoring sleep within 30–60 minutes of the correct dose. Parents consistently report this as one of the most dramatic and appreciated acute homoeopathic responses in infant care.' },
        ],
    },

    'chickenpox': {
        title: 'Chickenpox', category: 'Pediatrics / Common in Children', bannerSubtitle: 'Pediatrics / Common in Children',
        intro: 'Chickenpox (Varicella) is a highly contagious viral infection characterised by an itchy blister-like rash appearing across the body. Homoeopathy significantly reduces the intensity of the rash, relieves itching, shortens illness duration, and supports full recovery without the complications of antiviral overuse.',
        symptoms: ['Itchy red spots progressing to fluid-filled blisters', 'Blisters appearing in successive crops across the body', 'Low-grade fever and general malaise before and during the rash', 'Headache and fatigue', 'Blisters crusting over within 3–5 days of eruption'],
        causes: ['Varicella-zoster virus (VZV) — highly contagious', 'Spread by respiratory droplets and direct contact with blisters', 'Incubation period 10–21 days after exposure', 'Most common in school-age children, but can affect adults with more severity'],
        homeopathy: 'Rhus Toxicodendron (intensely itchy vesicular eruption, restlessness, better with warmth — the key chickenpox remedy), Antimonium Crudum (thick crusted eruptions with digestive symptoms), Pulsatilla (mild weepy child, secondary infections of vesicles), Arsenicum Album (burning blisters better warm compresses, anxious child), Apis Mellifica (when there is marked swelling and burning). Treatment reduces itch, fever duration, and secondary skin infection risk.',
        faq: [
            { q: 'Is chickenpox dangerous and when should a doctor be consulted?', a: 'Chickenpox is usually mild in healthy children. Seek urgent medical attention for: blisters becoming very red, warm, and swollen (bacterial superinfection); blisters near or in the eyes; high persistent fever; significant breathing difficulty; confusion or severe headache; or chickenpox in newborns, immunocompromised individuals, or adults (where it is considerably more severe).' },
            { q: 'How does homoeopathy help reduce chickenpox itching?', a: 'Rhus Toxicodendron — whose proving produces an intensely itchy vesicular rash — acts on a deeply similar principle to chickenpox. When prescribed in potency, it reliably reduces the itch intensity and duration, allowing the child to rest rather than scratch incessantly — which significantly reduces the risk of secondary bacterial infection and scarring.' },
            { q: 'Can scratching chickenpox blisters cause permanent scars?', a: 'Yes. Scratching breaks skin integrity, introducing bacteria and causing secondary infection (impetigo) which leads to deeper scarring. Keeping nails short, wearing cotton mittens at night in young children, and homoeopathic treatment to reduce itch intensity are the most effective strategies to prevent scarring.' },
            { q: 'Can a person get chickenpox twice?', a: 'Rarely. Natural chickenpox infection provides long-lasting immunity in most people. However, the virus remains dormant in nerve ganglia and can reactivate decades later as shingles (Herpes Zoster) — particularly when immunity is reduced by age, stress, or illness. Homoeopathy supports long-term immune resilience post-chickenpox.' },
            { q: 'What are safe home care measures alongside homoeopathy for chickenpox?', a: 'Trim nails and keep them clean, use loose cotton clothing to reduce skin irritation, apply calamine lotion to soothe itching, take lukewarm (not hot) baths with colloidal oatmeal, ensure good hydration, and avoid aspirin (risk of Reye\'s syndrome). These measures significantly complement homoeopathic treatment.' },
        ],
    },

    'diaper-rash': {
        title: 'Diaper Rash', category: 'Pediatrics / Common in Children', bannerSubtitle: 'Pediatrics / Common in Children',
        intro: 'Diaper rash (nappy rash) is a common inflammatory skin condition affecting infants and toddlers in the diaper area. It results from prolonged contact with urine and stool, friction, and sometimes Candida overgrowth. Homoeopathy heals the skin gently from within, addresses the constitutional sensitivity, and reduces recurrence — making it ideal for the most delicate infant skin.',
        symptoms: ['Red, tender, inflamed skin in the nappy area', 'Skin rash extending to thighs and abdomen', 'Crying and discomfort during nappy changes', 'Satellite lesions (in Candida rash)', 'Broken or peeling skin in severe cases'],
        causes: ['Prolonged contact with wet or soiled nappies', 'Friction from nappy rubbing', 'Candida yeast overgrowth (especially after antibiotic use)', 'Sensitive skin and allergic reactions to nappy brands or wipes', 'Introduction of new foods changing stool character', 'Diarrhoea increasing stool frequency and irritation'],
        homeopathy: 'Sulphur (red, burning, inflamed skin worse from heat and bathing), Calendula (promotes skin healing — used topically and internally), Graphites (moist, oozing diaper rash in folds), Medorrhinum (recurrent diaper rash in constitutionally susceptible infants), Chamomilla (diaper rash during teething with irritable, inconsolable infant). Gentle and completely safe for newborns.',
        faq: [
            { q: 'How do I know if diaper rash is Candida (fungal) or simple irritant rash?', a: 'Candida diaper rash has distinct features: bright red colour with sharp borders, satellite lesions (small spots around the main rash), involvement of skin folds (unlike simple irritant rash which spares folds), and it does not improve with standard barrier creams alone. Candida rash often follows antibiotic treatment.' },
            { q: 'What nappy care prevents diaper rash from occurring?', a: 'Change nappies promptly (within 10–15 minutes of soiling), clean the area gently with soft cotton and warm water, allow nappy-free time daily (let skin breathe), use a barrier cream (zinc oxide or calendula cream) at each change, and choose breathable nappy brands appropriate for sensitive skin.' },
            { q: 'Can homoeopathy treat diaper rash safely in newborns?', a: 'Yes. Homoeopathic remedies are among the safest treatments available for newborns — with no chemical absorption risks. Remedies like Calendula, Sulphur, and Graphites in appropriate low potencies are widely used for nappy rash with excellent safety and clinical results.' },
            { q: 'Does teething make diaper rash worse?', a: 'Yes. Many parents and homoeopaths observe a strong association between teething and diaper rash — thought to be related to increased stool acidity from excess saliva swallowing during teething. Treating the teething simultaneously (Chamomilla) often resolves the associated nappy rash without separate local treatment.' },
            { q: 'How quickly does homoeopathic treatment work for diaper rash?', a: 'Mild diaper rash responds within 24–48 hours of the correct remedy combined with good nappy hygiene. More inflamed or Candida-complicated rash typically clears within 3–5 days. Constitutional treatment addresses the chronic recurrence pattern over 4–6 weeks.' },
        ],
    },

}

// ── DISEASE CATEGORIES (navbar + browse pages) ────────────────────────────
import catRespiratory from '../assets/disease/respiratory.jpg'
import catGastro from '../assets/disease/gastrointestinal.jpg'
import catHormonal from '../assets/disease/hormonal.jpg'
import catFemale from '../assets/disease/female reproductive.jpg'
import catPediatric from '../assets/disease/pediatric.jpg'
import catMental from '../assets/disease/mental_health.jpg'
import catNeuro from '../assets/disease/neurological.jpg'
import catSkin from '../assets/disease/skin.jpg'
import catHair from '../assets/disease/hair.jpg'
import catSkeletal from '../assets/disease/skeletal.jpg'
import catGenito from '../assets/disease/genito.jpg'
import catChronic from '../assets/disease/chronic.jpg'
import catCardio from '../assets/disease/cardiovasculur.jpg'
import catInfections from '../assets/disease/infections.jpg'

export const diseaseCategories = [
    {
        name: 'Respiratory System', emoji: '🫁', img: catRespiratory,
        perspective: 'Focus on upper/lower respiratory tract; acute vs chronic; inflammation & infection patterns',
        diseases: [
            { label: 'Cold & Flu', slug: 'cold-flu' },
            { label: 'Cough', slug: 'chronic-cough' },
            { label: 'Bronchitis', slug: 'bronchitis' },
            { label: 'Asthma', slug: 'bronchial-asthma' },
            { label: 'Pneumonia', slug: 'pneumonia' },
            { label: 'Allergic Rhinitis', slug: 'allergic-rhinitis' },
            { label: 'Sinusitis', slug: 'sinusitis' },
        ]
    },
    {
        name: 'Digestive System', emoji: '🍽️', img: catGastro,
        perspective: 'Group by organs involved (stomach, intestines, liver); functional vs structural disorders',
        diseases: [
            { label: 'Indigestion', slug: 'indigestion' },
            { label: 'Gastritis', slug: 'gastritis' },
            { label: 'Constipation', slug: 'constipation' },
            { label: 'Diarrhea', slug: 'diarrhea' },
            { label: 'IBS', slug: 'ibs' },
            { label: 'Piles (Haemorrhoids)', slug: 'piles' },
            { label: 'Acidity & Gas', slug: 'acidity-gas' },
            { label: 'Ulcers', slug: 'ulcers' },
            { label: 'Ulcerative Colitis', slug: 'ulcerative-colitis' },
        ]
    },
    {
        name: 'Musculoskeletal System', emoji: '🦴', img: catSkeletal,
        perspective: 'Focus on tissue type (joints, muscles, bones); chronic vs acute inflammation',
        diseases: [
            { label: 'Arthritis', slug: 'rheumatoid-arthritis' },
            { label: 'Joint Pain', slug: 'joint-pain' },
            { label: 'Back Pain', slug: 'back-pain' },
            { label: 'Muscle Strain', slug: 'muscle-strain' },
            { label: 'Cervical Spondylosis', slug: 'cervical-spondylosis' },
            { label: 'Sciatica', slug: 'sciatica' },
            { label: 'Gout', slug: 'gout' },
            { label: 'Frozen Shoulder', slug: 'frozen-shoulder' },
        ]
    },
    {
        name: 'Skin & Dermatology', emoji: '🌿', img: catSkin,
        perspective: 'Based on lesion type (rash, pustules, scaling) and etiology (allergic, infectious, autoimmune)',
        diseases: [
            { label: 'Eczema', slug: 'eczema' },
            { label: 'Acne', slug: 'acne' },
            { label: 'Psoriasis', slug: 'psoriasis' },
            { label: 'Fungal Infections', slug: 'fungal-infections' },
            { label: 'Vitiligo', slug: 'vitiligo' },
            { label: 'Urticaria', slug: 'urticaria' },
            { label: 'Lichen Planus', slug: 'lichen-planus' },
        ]
    },
    {
        name: 'Neurological / Nervous System', emoji: '🧬', img: catNeuro,
        perspective: 'Classified as central vs peripheral nervous system',
        diseases: [
            { label: 'Headache', slug: 'headache' },
            { label: 'Migraine', slug: 'migraine' },
            { label: 'Anxiety', slug: 'anxiety' },
            { label: 'Insomnia', slug: 'insomnia' },
            { label: 'Neuralgia', slug: 'nerve-pain' },
            { label: 'Epilepsy', slug: 'epilepsy' },
            { label: "Bell's Palsy", slug: 'bells-palsy' },
            { label: 'Vertigo', slug: 'vertigo' },
        ]
    },
    {
        name: 'Cardiovascular System', emoji: '❤️', img: catCardio,
        perspective: 'Includes functional (palpitations, hypertension) and structural (coronary artery disease) conditions',
        diseases: [
            { label: 'Palpitations', slug: 'palpitations' },
            { label: 'Heart Disease', slug: 'heart-disease' },
            { label: 'Hypertension', slug: 'hypertension' },
            { label: 'High Cholesterol', slug: 'high-cholesterol' },
        ]
    },
    {
        name: 'Hormonal & Metabolic', emoji: '⚖️', img: catHormonal,
        perspective: 'Grouped by endocrine gland or metabolic pathway; often chronic and systemic',
        diseases: [
            { label: 'Diabetes', slug: 'diabetes' },
            { label: 'Hypothyroidism', slug: 'hypothyroidism' },
            { label: 'Hyperthyroidism', slug: 'hyperthyroidism' },
            { label: 'Obesity', slug: 'obesity' },
            { label: 'PCOS / PCOD', slug: 'pcos-pcod' },
        ]
    },
    {
        name: 'Female Reproductive', emoji: '👩', img: catFemale,
        perspective: 'Based on hormonal cycle, anatomy, and reproductive stage of life',
        diseases: [
            { label: 'Menstrual Disorders', slug: 'irregular-menstruation' },
            { label: 'Endometriosis', slug: 'endometriosis' },
            { label: 'Leucorrhoea', slug: 'leucorrhoea' },
            { label: 'Menopause', slug: 'menopause' },
            { label: 'Uterine Fibroids', slug: 'uterine-fibroids' },
        ]
    },
    {
        name: 'Genito-Urinary System', emoji: '💧', img: catGenito,
        perspective: 'Classified by organ involvement (kidney, bladder, prostate) and recurrence',
        diseases: [
            { label: 'UTI', slug: 'uti' },
            { label: 'Kidney Stones', slug: 'kidney-stones' },
            { label: 'Prostate Problems', slug: 'prostate' },
            { label: 'Recurrent UTI', slug: 'recurrent-uti' },
            { label: 'Interstitial Cystitis', slug: 'interstitial-cystitis' },
        ]
    },
    {
        name: 'Mental / Emotional Health', emoji: '🧠', img: catMental,
        perspective: 'Classified by emotional domain — anxiety spectrum, mood disorders, behavioural patterns',
        diseases: [
            { label: 'Anxiety', slug: 'anxiety' },
            { label: 'Depression', slug: 'depression' },
            { label: 'Stress & Burnout', slug: 'stress-burnout' },
            { label: 'Insomnia', slug: 'insomnia' },
            { label: 'OCD', slug: 'ocd' },
            { label: 'Panic Attacks', slug: 'panic-attacks' },
            { label: 'Behavioral Disorders', slug: 'behavioral-disorders' },
        ]
    },
    {
        name: 'Infections', emoji: '🦠', img: catInfections,
        perspective: 'Grouped by pathogen type (viral, bacterial, fungal) and system affected',
        diseases: [
            { label: 'Bacterial Infections', slug: 'bacterial-infections' },
            { label: 'Viral Fever', slug: 'fever-infections' },
            { label: 'Allergies', slug: 'allergies' },
            { label: 'Autoimmune Conditions', slug: 'autoimmune' },
            { label: 'Recurrent Infections', slug: 'recurrent-infections' },
            { label: 'Post-Viral Fatigue', slug: 'post-viral-fatigue' },
        ]
    },
    {
        name: 'Pediatrics / Common in Children', emoji: '🧒', img: catPediatric,
        perspective: 'Based on age of onset and pediatric susceptibility patterns',
        diseases: [
            { label: 'Teething Problems', slug: 'teething-problems' },
            { label: 'Chickenpox', slug: 'chickenpox' },
            { label: 'Diaper Rash', slug: 'diaper-rash' },
            { label: 'Recurrent Cold & Cough', slug: 'recurrent-cold-cough' },
            { label: 'Adenoids & Tonsillitis', slug: 'adenoids-tonsillitis' },
            { label: 'Bedwetting', slug: 'bedwetting' },
            { label: 'ADHD', slug: 'adhd' },
            { label: 'Growth Delays', slug: 'growth-delays' },
        ]
    },
]

// ── ABOUT HOMOEOPATHY TOPICS ──────────────────────────────────────────────
export const homeopathyTopics = {
    'hahnemanns-theory': {
        title: "Hahnemann's Main Theory", bannerSubtitle: 'About Homoeopathy',
        intro: `Dr. Samuel Hahnemann (1755–1843), a German physician, is the founder of homoeopathy. Disillusioned by the harsh medical practices of his time, he developed a revolutionary system based on "similia similibus curentur" – let likes be cured by likes.`,
        sections: [
            { heading: 'Law of Similars (Similia Similibus Curentur)', body: `The cornerstone of homoeopathy: a substance that causes symptoms in a healthy person can cure similar symptoms in a sick person. For example, Allium Cepa (onion) causes watery eyes in health and cures hay fever with similar symptoms.`, bullets: ['Proved through Hahnemann\'s "Provings" on healthy volunteers', 'Foundation of over 200 years of clinical practice', 'A substance causing symptoms in health can cure those symptoms in disease'] },
            { heading: 'Doctrine of Vital Force', body: `Hahnemann proposed every organism is animated by a "vital force." Disease occurs when this force is disturbed. Homoeopathic treatment restores harmony using the minimum dose of the similimum.` },
            { heading: 'Minimum Dose Principle', body: `Medicines are made safer and more effective through serial dilution combined with succussion (vigorous shaking) — called potentisation. Higher potencies are more dilute yet paradoxically more powerful.`, bullets: ['Medicines prepared through potentisation (dilution + succussion)', 'Higher potency = more dilute but stronger therapeutic effect', 'No toxic side effects due to extreme dilution'] },
            { heading: 'Single Remedy Principle', body: `Classical homoeopathy prescribes one remedy at a time — the Similimum — chosen to match the patient's total symptom picture. This allows clear observation of the remedy's action and prevents polypharmacy confusion.` },
        ],
    },
    'individualising-case': {
        title: 'Individualising Each Case', bannerSubtitle: 'About Homoeopathy',
        intro: `One of the most distinctive features of homoeopathy is treating the individual rather than the disease. Two patients with the same diagnosis may receive completely different remedies based on their unique symptoms, personality, and life history.`,
        sections: [
            { heading: 'The Importance of Individualisation', body: `Hahnemann wrote: "The physician's highest calling is to make sick people healthy." The homoeopath must understand the patient as a whole — physical, mental, and emotional.` },
            { heading: 'The Art of Case Taking', body: `A thorough homoeopathic case-taking interview explores every aspect of the patient's experience.`, bullets: ['Chief complaint with unique characteristics (location, sensation, modalities)', 'Mental and emotional symptoms (anxieties, fears, mood)', 'Physical generals (hunger, thirst, sleep, temperature preferences)', 'Past medical and family history', 'Unusual or peculiar symptoms that characterise the individual'] },
            { heading: 'Generals vs. Particulars', body: `"Generals" describe the person as a whole while "particulars" describe local symptoms. The remedy must match generals first, then particulars.` },
            { heading: 'Finding the Similimum', body: `After gathering the complete case, the homoeopath uses repertorisation and materia medica study to identify the single remedy whose known effects most closely match the patient's unique symptom totality.` },
        ],
    },
    'mind-method': {
        title: 'Mind Method in Homoeopathy', bannerSubtitle: 'About Homoeopathy',
        intro: `Homoeopathy has always recognised the profound connection between mind and body. Long before modern psychosomatic medicine, Hahnemann placed mental and emotional symptoms at the top of the symptom hierarchy.`,
        sections: [
            { heading: 'The Hierarchy of Symptoms', body: `Mental/emotional symptoms (highest), physical general symptoms, then particular/local symptoms.`, bullets: ['Mental symptoms reveal the deepest disturbance of the vital force', 'A remedy matching the mental level cures deeply and permanently', 'Local symptoms alone are insufficient for prescription'] },
            { heading: 'Understanding the Mental Make-up', body: `The homoeopath carefully explores fears, grief response, relationships, stress reactions, dreams, and behavioural patterns.`, bullets: ['Fears and anxieties', 'Response to grief, loss, or disappointment', 'Sensitivity to criticism, rejection, or injustice', 'Dreams and sleep patterns'] },
            { heading: 'Mind in Disease', body: `Many physical diseases have their root in mental disturbances — grief leading to respiratory illness, suppressed anger causing skin eruptions, prolonged anxiety producing digestive disorders.` },
            { heading: 'Classical Remedies with Strong Mental Keynotes', body: `Many remedies are characterised primarily by their mental keynotes:`, bullets: ['Natrum Muriaticum – suppressed grief, difficulty accepting consolation', 'Ignatia – acute grief, paradoxical symptoms', 'Staphysagria – suppressed anger and wounded dignity', 'Aurum Metallicum – intense perfectionism, hopelessness', 'Phosphorus – open, sympathetic, fear of being alone'] },
        ],
    },
    'applicable-diseases': {
        title: 'Which Diseases Can Apply Homoeopathy', bannerSubtitle: 'About Homoeopathy',
        intro: `Homoeopathy can be applied to a very wide range of acute and chronic conditions affecting people of all ages.`,
        sections: [
            { heading: 'Acute Conditions', body: `Homoeopathy is highly effective for acute illnesses, often providing rapid relief.`, bullets: ['Common cold, cough, fever, and flu', 'Acute diarrhea and gastroenteritis', 'Ear infections and tonsillitis', 'Injuries, bruises, and sprains (Arnica Montana)', 'Minor burns and insect stings'] },
            { heading: 'Chronic Conditions', body: `Homoeopathy excels in treating chronic conditions where conventional medicine offers only symptom management.`, bullets: ['Allergies and asthma', 'Skin disorders (psoriasis, eczema, vitiligo)', 'Hormonal imbalances (thyroid, PCOS)', 'Autoimmune conditions', 'IBS and other digestive disorders'] },
            { heading: 'Mental & Emotional Conditions', bullets: ['Anxiety, panic disorder, and phobias', 'Depression and grief', 'Insomnia and sleep disorders', 'ADHD in children', 'OCD and behavioural issues'] },
            { heading: 'When Homoeopathy is Most Beneficial', body: `When conventional treatment has not provided lasting relief, when the patient wants to avoid long-term drug use, for children and pregnant women seeking gentler treatment options, and as a complementary therapy alongside conventional medicine.` },
            { heading: 'Limitations', body: `Homoeopathy is not recommended as the primary treatment for life-threatening emergencies, serious infections requiring antibiotics, surgical emergencies, or advanced cancer. In such cases, homoeopathy may be used supportively.` },
        ],
    },
}

export const homeopathyNavItems = [
    { label: "Hahnemann's Main Theory", slug: 'hahnemanns-theory' },
    { label: 'Individualising Each Case', slug: 'individualising-case' },
    { label: 'Mind Method in Homoeopathy', slug: 'mind-method' },
    { label: 'Which Diseases Can Apply Homoeopathy', slug: 'applicable-diseases' },
]
