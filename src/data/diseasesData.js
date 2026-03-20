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
            { q: 'Can homoeopathy prevent recurrent colds?', a: 'Yes. Constitutional homoeopathic treatment strengthens the immune system, significantly reducing frequency and severity of recurrent colds and flu.' },
            { q: 'How quickly does homoeopathic treatment work for cold & flu?', a: 'Acutely prescribed homoeopathic remedies can provide relief within hours to a day, especially when started at the first sign of illness.' },
        ],
    },

    'chronic-cough': {
        title: 'Chronic Cough', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Chronic cough is defined as a cough lasting more than 8 weeks in adults. It can be dry, productive, or spasmodic and is one of the most common reasons for medical visits globally. Homoeopathy addresses the root cause — whether it is post-nasal drip, hyperreactive airways, or digestive reflux.',
        symptoms: ['Persistent cough lasting weeks to months', 'Mucus or phlegm production', 'Hoarse voice and throat irritation', 'Disturbed sleep due to nocturnal cough', 'Runny nose or nasal drip accompanying cough'],
        causes: ['Post-nasal drip from sinusitis or allergies', 'Asthma and airway hyperreactivity', 'GERD (acid reflux)', 'Chronic bronchitis or COPD', 'Environmental irritants — dust, smoke, pollution'],
        homeopathy: 'Key homoeopathic remedies for chronic cough include Drosera (spasmodic, whooping-type), Spongia Tosta (dry, barking cough), Phosphorus (tickling cough with hoarseness), Rumex (cough from tickling in the throat), and Bryonia (dry, painful cough worse with motion) — selected based on cough type, timing, and triggers.',
        faq: [
            { q: "What causes a chronic cough that won't go away?", a: 'The most common causes are post-nasal drip, asthma, GERD, chronic bronchitis, and medication side effects (e.g., ACE inhibitors). Homoeopathy investigates all these and treats the root cause.' },

            { q: 'Is homoeopathy safe for chronic cough in children?', a: 'Absolutely. Homoeopathic remedies are gentle, palatable, and free of side effects, making them ideal for children with recurrent or chronic cough.' },
        ],
    },

    'bronchial-asthma': {
        title: 'Bronchial Asthma', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Bronchial asthma is a chronic inflammatory disease of the airways characterised by reversible airflow obstruction, wheezing, and breathlessness. Homoeopathy offers effective long-term management by addressing the underlying allergic constitution and reducing the frequency and severity of attacks.',
        symptoms: ['Wheezing and breathlessness', 'Chest tightness', 'Cough — especially at night or early morning', 'Difficulty breathing during exercise', 'Mucus production after coughing spells'],
        causes: ['Allergens — pollen, dust mites, pet dander', 'Respiratory infections', 'Cold or dry air', 'Exercise and physical exertion', 'Stress and strong emotions', 'Air pollution and chemical fumes'],
        homeopathy: 'Homoeopathic treatment for asthma addresses the allergic constitution and reduces bronchial hypersensitivity. Key remedies include Arsenicum Album (anxiety with breathlessness, worse at night), Natrum Sulph (worse in damp weather), Ipecacuanha (constant nausea with wheezing), Antimonium Tartaricum (rattling chest), and Spongia Tosta (dry, suffocative cough).',
        faq: [
            { q: 'Can I stop my inhaler once I start homoeopathy?', a: 'Do not stop any conventional medication abruptly. Homoeopathic treatment works alongside inhalers; as treatment progresses, the dependence on inhalers typically reduces gradually under medical guidance.' },
            { q: 'How long does homoeopathic treatment for asthma take?', a: 'Chronic asthma usually requires 3–12 months of constitutional treatment. Acute attacks can be managed quickly with well-selected acute remedies.' },
        ],
    },

    'allergic-rhinitis': {
        title: 'Allergic Rhinitis', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Allergic rhinitis (hay fever) is an IgE-mediated inflammatory condition of the nasal mucosa triggered by allergens. It causes significant quality-of-life impairment and is a common precursor to asthma. Homoeopathy desensitises the allergic constitution without antihistamine side effects.',
        symptoms: ['Sneezing — often in bouts', 'Watery, itchy eyes', 'Runny or blocked nose', 'Itching of nose, throat, or palate', 'Reduced sense of smell'],
        causes: ['Pollen (trees, grass, weeds)', 'House dust mites', 'Pet dander', 'Mould spores', 'Genetic predisposition to atopy'],
        homeopathy: 'Allium Cepa (profuse watery discharge), Sabadilla (violent sneezing), Natrum Muriaticum (clear watery discharge), Euphrasia (eye symptoms prominent), and Arundo (itching of palate) are among the most effective homoeopathic remedies for allergic rhinitis, chosen based on individual trigger and symptom profile.',
        faq: [
            { q: 'Does homoeopathy treat seasonal as well as perennial allergic rhinitis?', a: 'Yes. Both seasonal (pollen-triggered) and year-round (dust, mould-triggered) rhinitis respond well to individualised homoeopathic treatment.' },
            { q: 'Can children with allergic rhinitis be treated homoeopathically?', a: 'Yes, and often with excellent results. Homoeopathy is safe for all ages and avoids the drowsiness caused by antihistamines.' },
        ],
    },

    'sinusitis': {
        title: 'Sinusitis', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Sinusitis is inflammation of the paranasal sinuses, causing facial pain or pressure, nasal congestion, and thick discharge. Chronic sinusitis (lasting more than 12 weeks) responds exceptionally well to homoeopathic treatment, which reduces recurrence and avoids long-term antibiotic use.',
        symptoms: ['Facial pain or pressure around forehead, cheeks, or eyes', 'Thick yellow or green nasal discharge', 'Nasal congestion and reduced smell/taste', 'Headache worsening on bending forward', 'Post-nasal drip and cough'],
        causes: ['Bacterial or viral infection', 'Allergic rhinitis', 'Nasal polyps', 'Deviated nasal septum', 'Dental infections spreading to sinuses'],
        homeopathy: 'Key remedies: Kali Bichromicum (thick, ropy discharge; sinus pressure), Hepar Sulph (pus, offensive discharge), Silicea (chronic sinusitis with headache), Pulsatilla (yellow-green discharge, loss of smell), and Hydrastis (thick catarrh). Constitutional treatment prevents recurrence.',
        faq: [
            { q: 'Is nasal surgery avoidable with homoeopathy?', a: 'Many patients with chronic sinusitis or nasal polyps successfully avoid surgery with sustained homoeopathic treatment. Results depend on the duration and severity of the condition.' },
            { q: 'Can homoeopathy help sinusitis headaches?', a: 'Yes. Remedies like Kali Bich and Silicea specifically address sinus headaches and help drain congested sinuses effectively.' },
        ],
    },

    'adenoids': {
        title: 'Adenoids', category: 'Respiratory Diseases', bannerSubtitle: 'Respiratory Diseases',
        intro: 'Adenoid hypertrophy is enlargement of the adenoid tissue at the back of the nasal passage, common in children aged 2–10. It causes mouth breathing, snoring, and recurrent ear and throat infections. Homoeopathy can shrink the adenoids naturally, often avoiding the need for adenoidectomy surgery.',
        symptoms: ['Mouth breathing, especially during sleep', 'Snoring and disturbed sleep', 'Nasal voice or nasal speech', 'Recurrent ear infections or glue ear', 'Persistent nasal discharge'],
        causes: ['Recurrent upper respiratory infections', 'Allergies and chronic rhinitis', 'Environmental pollution', 'Family predisposition', 'Poor immunity'],
        homeopathy: 'Baryta Carbonica (enlarged glands, timid child), Calcarea Carbonica (chubby, sweaty child with big head), Tuberculinum (recurrent infections, thin child), Agraphis Nutans (specific for adenoids with deafness), and Silicea (chronic suppuration) are the key homoeopathic remedies prescribed after detailed constitutional case-taking.',
        faq: [
            { q: 'Can homoeopathy completely replace adenoid surgery?', a: 'In mild to moderate cases, homoeopathy can effectively reduce adenoid size and symptoms over 3–6 months, avoiding surgery. Severe cases may still require surgical evaluation.' },
            { q: 'At what age should homoeopathic treatment start for adenoids?', a: 'The earlier the better. Children as young as 2 years can be treated safely and respond excellently, often showing improvement within 2–3 months.' },
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
            { q: 'Can homoeopathy cure 3rd and 4th degree piles?', a: 'Homoeopathy works best for 1st and 2nd degree piles. In advanced cases (3rd & 4th degree), it relieves symptoms significantly but surgery may be required.' },
            { q: 'How long does homoeopathic treatment for piles take?', a: 'Mild to moderate cases typically see improvement within 4–8 weeks. Complete resolution may take 3–6 months of constitutional treatment.' },
        ],
    },

    'acidity-gas': {
        title: 'Acidity & Gas', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Acidity (GERD) and flatulence are among the most common digestive complaints in modern life. Acid reflux causes heartburn and regurgitation while excess gas causes bloating and discomfort. Homoeopathy provides lasting relief by correcting digestive fire and lifestyle-related gut imbalances.',
        symptoms: ['Heartburn and burning in chest after meals', 'Belching and bloating', 'Sour or bitter taste in mouth', 'Flatulence and abdominal distension', 'Nausea and loss of appetite'],
        causes: ['Spicy, fried, or fatty foods', 'Irregular eating habits', 'Stress and anxiety', 'Alcohol and caffeine', 'Hiatal hernia or food intolerances'],
        homeopathy: 'Natrum Phosphoricum (acid reflux, sour eructations), Carbo Veg (bloating even after simple food), Lycopodium (bloating in lower abdomen, 4-8 pm aggravation), Robinia (acidity with sour vomiting), Nux Vomica (acidity from rich food, alcohol) — selected based on the individual pattern of digestive symptoms.',
        faq: [
            { q: 'Can I take homoeopathic medicines alongside antacids?', a: 'Yes. Homoeopathic remedies are compatible with antacids. As treatment progresses, the need for antacids typically reduces naturally.' },
            { q: 'What diet should I follow during homoeopathic treatment for acidity?', a: 'Avoid spicy, oily foods, caffeine, and late dinners. Eat small meals at regular intervals. The homoeopathic remedy addresses the underlying sensitivity.' },
        ],
    },

    'ulcers': {
        title: 'Gastric Ulcers', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Gastric ulcers are open sores on the stomach lining caused by the erosion of the protective mucus layer. They cause a burning or gnawing pain in the stomach. Homoeopathy heals ulcers from within by addressing the root cause — H. pylori, emotional stress, or NSAID use — without harsh medication side effects.',
        symptoms: ['Burning or gnawing stomach pain, often between meals', 'Nausea and vomiting', 'Dark or tarry stools (indicating bleeding)', 'Loss of appetite and weight loss', 'Bloating and early satiety'],
        causes: ['H. pylori bacterial infection', 'Long-term NSAID use (aspirin, ibuprofen)', 'Excessive alcohol consumption', 'Chronic stress', 'Smoking'],
        homeopathy: 'Argentum Nitricum (anticipatory anxiety with ulcers), Nux Vomica (ulcer from spicy food, alcohol, stress), Kali Bich (thick mucus discharge, punched-out ulcers), Phosphorus (bleeding tendency), and Anacardium (pain relieved by eating) are key remedies prescribed constitutionally.',
        faq: [
            { q: 'Can homoeopathy treat H. pylori-related ulcers?', a: 'Homoeopathy strengthens the stomach mucosa and addresses the host susceptibility to H. pylori. It works best alongside appropriate conventional treatment for the bacteria.' },
            { q: 'How quickly do ulcer symptoms improve with homoeopathy?', a: 'Most patients experience significant pain relief within 2–3 weeks. Healing of the ulcer typically takes 1–3 months of consistent treatment.' },
        ],
    },

    'fissure-fistula': {
        title: 'Fissure & Fistula', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Anal fissure is a small tear in the anal mucosa causing severe pain during bowel movements, while anal fistula is an infected tunnel between the anal canal and skin. Both conditions respond remarkably well to homoeopathic treatment, often avoiding the need for surgery.',
        symptoms: ['Severe pain during and after defecation (fissure)', 'Bright red bleeding on tissue paper', 'Persistent discharge of pus near the anus (fistula)', 'Swelling and irritation around the anus', 'Chronic constipation worsening symptoms'],
        causes: ['Passing hard, dry stools', 'Chronic constipation or diarrhea', 'Previous anal abscess (fistula)', 'Crohn\'s disease', 'Childbirth trauma'],
        homeopathy: 'For fissure: Nitric Acid (splinter-like pain), Ratanhia (burning hours after stool), Graphites (skin cracks, itching). For fistula: Silicea (promotes drainage and healing), Myristica Sebifera (the "homoeopathic knife" — speeds healing without surgery), Calcarea Sulph, and Berberis Vulgaris — prescribed based on individual presentation.',
        faq: [
            { q: 'Can homoeopathy heal a fistula without surgery?', a: 'Many fistula cases have been successfully treated with homoeopathy, particularly Myristica Sebifera. Success depends on the extent and complexity of the fistula tract.' },
            { q: 'How long does dietary change help alongside homoeopathic treatment?', a: 'A high-fibre diet and adequate water intake significantly speed up healing for both fissure and fistula by preventing constipation and hard stools.' },
        ],
    },

    'ibs': {
        title: 'Irritable Bowel Syndrome', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'IBS is a common functional gastrointestinal disorder causing abdominal pain, bloating, and altered bowel habits without detectable structural abnormality. It is strongly linked to gut-brain axis dysfunction and stress. Homoeopathy addresses both the physical symptoms and the underlying emotional triggers.',
        symptoms: ['Recurrent abdominal cramps or pain', 'Bloating and abdominal distension', 'Alternating constipation and diarrhea', 'Urgency and frequent bowel movements', 'Mucus in stools', 'Symptoms triggered by stress or certain foods'],
        causes: ['Gut-brain axis dysregulation', 'Emotional stress and anxiety', 'Post-infectious gut hypersensitivity', 'Food intolerances (lactose, gluten)', 'Altered intestinal motility'],
        homeopathy: 'Colocynth (cramping pain relieved by pressure/bending), Nux Vomica (IBS from stress, irregular diet), Argentum Nitricum (diarrhoea from anxiety, anticipation), Aloe Socotrina (urgency, mucus in stools), and Sulphur (morning diarrhoea, burning rectum) are commonly prescribed after thorough case analysis.',
        faq: [
            { q: 'Is homoeopathy effective for IBS-diarrhoea vs IBS-constipation?', a: 'Both subtypes respond well. The remedy is selected based on the individual symptom pattern, triggers, and constitutional type — not just the bowel habit.' },
            { q: 'How does stress management complement homoeopathic treatment for IBS?', a: 'Mind-based remedies in homoeopathy address stress simultaneously. Patients often find both bowel symptoms and anxiety improve together during treatment.' },
        ],
    },

    'ulcerative-colitis': {
        title: 'Ulcerative Colitis', category: 'Gastrointestinal Diseases', bannerSubtitle: 'Gastrointestinal Diseases',
        intro: 'Ulcerative colitis (UC) is a chronic inflammatory bowel disease affecting the colon and rectum, causing bloody diarrhoea, urgency, and abdominal pain. Homoeopathy helps induce and maintain remission, reduces dependency on steroids, and improves overall quality of life.',
        symptoms: ['Diarrhoea with blood and mucus', 'Urgent and frequent bowel movements', 'Abdominal cramping and pain', 'Weight loss and anaemia', 'Fatigue and low-grade fever during flares'],
        causes: ['Autoimmune dysregulation', 'Genetic predisposition', 'Dysbiosis (gut microbiome imbalance)', 'Environmental triggers', 'Psychological stress and trauma'],
        homeopathy: 'Merc Cor (dysentery-like stools, tenesmus), Phosphorus (rectal bleeding, sensitive, sympathetic patients), Nux Vomica (colitis from suppressions, stress), Aloe (urgent bloody stools), and Colocynth (cramping relieved by pressure) are key remedies. Constitutional treatment reduces relapses and steroid dependence.',
        faq: [
            { q: 'Can homoeopathy reduce the need for steroids in UC?', a: 'In many patients, sustained constitutional homoeopathic treatment significantly reduces the frequency of flares and the need for steroid courses, though any reduction must be done under medical supervision.' },
            { q: 'What is the success rate of homoeopathy for ulcerative colitis?', a: 'Clinical experience shows 60–70% of UC patients achieve significant symptom reduction and improved quality of life with homoeopathic treatment over 6–18 months.' },
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
            { q: 'Can homoeopathy replace diabetes medication?', a: 'Homoeopathy is best used as complementary therapy alongside conventional medication. In early Type 2 diabetes, combined with lifestyle changes, it can help stabilise blood sugar significantly.' },
            { q: 'Can homoeopathy help with diabetic complications?', a: 'Yes. Homoeopathy is particularly helpful for diabetic neuropathy (Phosphoric Acid, Hypericum), retinopathy support, and fatigue management.' },
        ],
    },

    'hypertension': {
        title: 'Hypertension', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hypertension (high blood pressure) is a major risk factor for cardiovascular disease and stroke. Homoeopathy addresses the root causes — including stress, lifestyle, and hereditary tendencies — helping to reduce BP naturally while supporting the patient\'s overall cardiovascular health.',
        symptoms: ['Mostly asymptomatic', 'Headaches — especially at the back of the head', 'Dizziness and lightheadedness', 'Nosebleeds in severe cases', 'Palpitations and chest heaviness'],
        causes: ['Essential hypertension (no clear cause — most common)', 'Stress and anxiety', 'Obesity and sedentary lifestyle', 'Excessive salt intake', 'Family history', 'Kidney disease or hormonal disorders'],
        homeopathy: 'Rauwolfia Serpentina (classic homoeopathic anti-hypertensive), Natrum Muriaticum (hypertension from suppressed grief or emotions), Aurum Metallicum (high BP with heart involvement, perfectionist), Glonoinum (sudden surges in BP, heat intolerance), and Baryta Muriaticum (elderly patients with arteriosclerosis).',
        faq: [
            { q: 'Is it safe to stop BP medication and switch to homoeopathy?', a: 'No. Do not stop antihypertensive medication abruptly. Homoeopathy works alongside conventional treatment; as BP stabilises, medication adjustments are made in consultation with your physician.' },
            { q: 'How does homoeopathy help with stress-related hypertension?', a: 'Homoeopathy addresses the emotional root of stress-driven hypertension using mind-level remedies, often leading to better BP control and reduced anxiety simultaneously.' },
        ],
    },

    'hypothyroidism': {
        title: 'Hypothyroidism', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hypothyroidism occurs when the thyroid gland fails to produce sufficient thyroid hormones, slowing metabolism. It predominantly affects women. Homoeopathy works to stimulate thyroid function naturally and addresses the autoimmune tendency (Hashimoto\'s) that underlies most cases.',
        symptoms: ['Fatigue and sluggishness', 'Weight gain despite normal diet', 'Cold intolerance', 'Hair thinning and dry skin', 'Constipation', 'Irregular or heavy periods', 'Depression and cognitive slowing'],
        causes: ['Hashimoto\'s thyroiditis (autoimmune)', 'Iodine deficiency', 'Previous thyroid surgery or radiation', 'Certain medications (lithium, amiodarone)', 'Postpartum thyroiditis'],
        homeopathy: 'Thyroidinum (supports thyroid gland function directly), Calcarea Carbonica (overweight, cold, constipated), Sepia (hormonal, exhausted, indifferent), Natrum Muriaticum (suppressed grief, weight gain), and Graphites (cold, dry skin, constipation) are individualised based on the patient\'s complete symptom picture.',
        faq: [
            { q: 'Can homoeopathy reverse hypothyroidism?', a: 'In subclinical or early hypothyroidism, homoeopathy can normalise TSH levels. In established deficiency, it reduces symptoms and may allow lower thyroxine doses under monitoring.' },
            { q: 'How long before I see improvement in TSH with homoeopathy?', a: 'TSH changes are typically detectable in 3–6 months. Energy, weight, and hair improvements are often noticed sooner, within 4–8 weeks.' },
        ],
    },

    'hyperthyroidism': {
        title: 'Hyperthyroidism', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hyperthyroidism is overproduction of thyroid hormones, causing accelerated metabolism, weight loss, and cardiac symptoms. Graves\' disease is the most common cause. Homoeopathy gently reduces thyroid overactivity and calms the autoimmune trigger without the side effects of anti-thyroid drugs.',
        symptoms: ['Unexplained weight loss despite increased appetite', 'Racing heartbeat (palpitations)', 'Anxiety, nervousness, and irritability', 'Tremors in hands', 'Heat intolerance and excessive sweating', 'Bulging eyes (in Graves\' disease)'],
        causes: ['Graves\' disease (autoimmune)', 'Toxic multinodular goitre', 'Thyroid nodules (hot nodules)', 'Excessive iodine intake', 'Thyroiditis'],
        homeopathy: 'Iodum (thyroid enlargement with great emaciation, restlessness), Natrum Muriaticum (Graves\' with emotional suppression), Phosphorus (sympathetic, fearful, palpitations), Spongia Tosta (thyroid goitre), and Lycopus Virginicus (hyperthyroidism with cardiac palpitations) are selected based on individual presentation.',
        faq: [
            { q: 'Can homoeopathy treat Graves\' disease exophthalmos (bulging eyes)?', a: 'Homoeopathy can reduce eye inflammation and prevent progression of exophthalmos in mild cases. Severe exophthalmos typically requires specialist ophthalmological evaluation.' },
            { q: 'Is homoeopathy safe during pregnancy for hyperthyroidism?', a: 'Yes. Homoeopathic remedies are among the safest options during pregnancy, avoiding the teratogenic risks of some anti-thyroid drugs. Always inform your obstetrician.' },
        ],
    },

    'obesity': {
        title: 'Obesity', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Obesity is a complex multifactorial condition characterised by excessive fat accumulation harmful to health. It increases risk for diabetes, cardiovascular disease, and joint problems. Homoeopathy addresses the constitutional tendency to weight gain — including metabolic, hormonal, and emotional factors.',
        symptoms: ['BMI above 30', 'Excessive fat accumulation, especially around abdomen', 'Breathlessness on mild exertion', 'Fatigue and poor stamina', 'Joint pains and back problems', 'Low self-esteem and emotional eating'],
        causes: ['Sedentary lifestyle and processed food diet', 'Hormonal imbalances (thyroid, PCOS)', 'Genetic factors', 'Emotional eating and stress', 'Medications (steroids, antidepressants)'],
        homeopathy: 'Calcarea Carbonica (cold, sweaty, slow metabolism), Graphites (obesity with constipation and skin issues), Phytolacca (fatty deposits, joint pains), Natrum Sulph (excess fluid retention), and Antimonium Crudum (obesity from digestive causes) are selected constitutionally alongside dietary and lifestyle guidance.',
        faq: [
            { q: 'Can homoeopathy help with obesity without diet and exercise?', a: 'No. Homoeopathy optimises metabolism and reduces cravings, but works best when combined with appropriate dietary changes and regular physical activity.' },
            { q: 'Does homoeopathy target belly fat specifically?', a: 'Certain remedies like Fucus Vesiculosus and Calcarea Carbonica are particularly effective for abdominal fat accumulation in constitutionally matched patients.' },
        ],
    },

    'high-cholesterol': {
        title: 'High Cholesterol', category: 'Hormonal & Lifestyle Disorders', bannerSubtitle: 'Hormonal & Lifestyle Disorders',
        intro: 'Hypercholesterolaemia is elevated LDL cholesterol in the blood, a major risk factor for coronary artery disease and stroke. Homoeopathy helps reduce cholesterol levels naturally, improves arterial health, and addresses the lifestyle and constitutional factors driving dyslipidaemia.',
        symptoms: ['Usually asymptomatic — detected on blood tests', 'Xanthelasma (yellowish deposits near eyes)', 'Xanthomas (fatty deposits on tendons)', 'Symptoms of atherosclerotic disease (chest pain, poor circulation)'],
        causes: ['High saturated fat diet', 'Sedentary lifestyle', 'Obesity', 'Familial hypercholesterolaemia (genetic)', 'Hypothyroidism and diabetes', 'Liver disease'],
        homeopathy: 'Allium Sativum (elevated cholesterol, atherosclerosis), Crataegus (heart tonic, reduces lipid deposition in arteries), Cholesterinum (specific remedy made from cholesterol for high serum levels), Baryta Muriaticum (arteriosclerosis in elderly), and Aurum Metallicum (high BP with cholesterol) are used constitutionally.',
        faq: [
            { q: 'How effectively can homoeopathy lower cholesterol levels?', a: 'Studies and clinical experience show 10–20% LDL reduction with constitutional homoeopathic treatment over 3–6 months, best combined with diet modification.' },
            { q: 'Can homoeopathy replace statins for high cholesterol?', a: 'For mild cases without cardiac risk, homoeopathy and lifestyle changes may be sufficient. In high-risk patients, statins should continue alongside homoeopathy under physician supervision.' },
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
            { q: 'Can homoeopathy help with PCOS-related infertility?', a: 'Yes. By regulating ovulation and correcting hormonal imbalance, homoeopathy significantly improves fertility outcomes in PCOS patients, often without the need for assisted reproductive techniques.' },
            { q: 'How long does homoeopathic treatment for PCOS take to show results?', a: 'Menstrual regularity typically improves in 2–4 cycles. Hormonal parameters (LH, FSH, testosterone) normalise over 4–9 months of consistent treatment.' },
        ],
    },

    'endometriosis': {
        title: 'Endometriosis', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Endometriosis is a painful condition where tissue similar to the uterine lining grows outside the uterus. It causes severe menstrual pain, pelvic adhesions, and infertility. Homoeopathy reduces pain, slows endometrial proliferation, and improves quality of life without the hormonal side effects of GnRH analogues.',
        symptoms: ['Severe, debilitating menstrual pain (dysmenorrhoea)', 'Chronic pelvic pain', 'Pain during intercourse (dyspareunia)', 'Painful bowel movements or urination during periods', 'Heavy menstrual bleeding', 'Infertility'],
        causes: ['Retrograde menstruation (most accepted theory)', 'Immune system dysfunction', 'Genetic predisposition', 'Metaplasia of peritoneal cells', 'Lymphatic or vascular spread of endometrial cells'],
        homeopathy: 'Magnesia Phosphorica (cramping, spasmodic pain better with heat), Colocynth (pain bent double, better pressure), Lachesis (left-sided, worse before periods), Pulsatilla (irregular, variable pain), and Sepia (dragging down pelvic pain, indifference) are prescribed constitutionally alongside dietary anti-inflammatory support.',
        faq: [
            { q: 'Can homoeopathy shrink endometriotic deposits?', a: 'Clinical evidence and practice show that sustained homoeopathic treatment reduces the size and activity of endometriotic lesions, reduces adhesion formation, and controls symptoms significantly.' },
            { q: 'Is homoeopathy safe for endometriosis if I am trying to conceive?', a: 'Yes. Homoeopathic treatment is completely safe during natural conception attempts and improves uterine receptivity and ovarian function simultaneously.' },
        ],
    },

    'leucorrhoea': {
        title: 'Leucorrhoea', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Leucorrhoea (white or yellowish vaginal discharge) is a common gynaecological complaint. While some discharge is normal, excessive, offensive, or irritating discharge indicates an underlying infection or hormonal imbalance. Homoeopathy treats both acute infections and the chronic constitutional tendency effectively.',
        symptoms: ['Excessive vaginal discharge — white, yellow, or greenish', 'Offensive or sour odour', 'Itching and burning in the vaginal area', 'Weakness and lower back pain', 'Irritation or excoriation of the vulva'],
        causes: ['Bacterial vaginosis', 'Fungal (Candida) infection', 'Hormonal imbalance (oestrogen fluctuations)', 'Poor hygiene practices', 'Sexually transmitted infections', 'Anaemia and nutritional deficiency'],
        homeopathy: 'Sepia (yellow discharge, bearing-down sensation), Pulsatilla (thick, creamy, bland discharge — mild, changeable patient), Calcarea Carbonica (milky discharge in overweight women), Kreosotum (acrid, excoriating discharge causing intense itching), and Borax (white discharge like egg white).',
        faq: [
            { q: 'How is homoeopathic leucorrhoea treatment different from antifungals?', a: 'Antifungals treat only the fungal component. Homoeopathy addresses the immune and hormonal terrain that allows recurrent infections to occur, preventing relapses.' },
            { q: 'Does leucorrhoea treatment in homoeopathy require internal medicine only?', a: 'Primarily yes — homoeopathy treats leucorrhoea from within. Local hygiene is also important but no external applications are required.' },
        ],
    },

    'menopause': {
        title: 'Menopause', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Menopause marks the end of a woman\'s reproductive years, typically occurring around age 50. The hormonal shifts cause a range of physical and emotional symptoms. Homoeopathy offers a safe, hormone-free alternative to HRT, addressing hot flushes, mood changes, and bone health from a holistic perspective.',
        symptoms: ['Hot flushes and night sweats', 'Irregular and then absent periods', 'Vaginal dryness and discomfort', 'Mood swings, irritability, and depression', 'Sleep disturbances and insomnia', 'Decreased libido and joint pains'],
        causes: ['Natural decline in oestrogen and progesterone production', 'Surgical menopause (after oophorectomy)', 'Chemotherapy or radiation-induced menopause', 'Premature ovarian insufficiency'],
        homeopathy: 'Lachesis (intense hot flushes, talkative, jealous — worse on waking), Sepia (loss of libido, indifference, wants to be alone), Sanguinaria (hot flushes with right-sided headache), Amylium Nitrosum (sudden heat waves), and Pulsatilla (mild, weepy, wants consolation) — prescribed after detailed case analysis of menopausal pattern.',
        faq: [
            { q: 'Is homoeopathy a safe alternative to hormone replacement therapy (HRT)?', a: 'Yes. For women who cannot or prefer not to use HRT, homoeopathy provides effective symptom management without the cardiovascular or cancer risks associated with long-term HRT.' },
            { q: 'Can homoeopathy help with post-menopausal osteoporosis?', a: 'Homoeopathy supports bone health through remedies like Calcarea Phosphorica and Symphytum. DEXA scans should be monitored, and adequate calcium and Vitamin D intake is essential.' },
        ],
    },

    'uterine-fibroids': {
        title: 'Uterine Fibroids', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Uterine fibroids are benign smooth muscle tumours of the uterus, found in up to 70% of women by age 50. They cause heavy periods, pelvic pressure, and infertility. Homoeopathy can reduce fibroid size, control heavy bleeding, and avoid surgical intervention in many cases.',
        symptoms: ['Heavy and prolonged menstrual bleeding', 'Pelvic pressure or a sensation of fullness', 'Frequent urination from bladder compression', 'Constipation from rectal pressure', 'Pelvic pain or backache', 'Infertility or repeated miscarriage'],
        causes: ['Oestrogen dominance', 'Genetic predisposition', 'African ancestry (higher incidence)', 'Obesity', 'Early menarche', 'Nulliparity'],
        homeopathy: 'Thlaspi Bursa Pastoris (excess bleeding from fibroids), Fraxinus Americanus (fibroid with heavy bearing-down sensation), Aurum Metallicum (multiple fibroids, perfectionist personality), Calcarea Carbonica (large fibroids in overweight women), and Thuja (multiple growths, history of vaccination) are individually prescribed.',
        faq: [
            { q: 'Can homoeopathy shrink uterine fibroids completely?', a: 'Homoeopathy can reduce fibroid size and symptoms significantly in small-to-medium fibroids. Large fibroids or those causing severe complications may still require surgical intervention.' },
            { q: 'How often should fibroid size be monitored during homoeopathic treatment?', a: 'Ultrasound monitoring every 3–6 months is recommended initially to track response. Once size is reducing, annual monitoring suffices.' },
        ],
    },

    'irregular-menstruation': {
        title: 'Irregular Menstruation', category: 'Female Reproductive Diseases', bannerSubtitle: 'Female Reproductive Diseases',
        intro: 'Irregular menstruation encompasses late, early, heavy, scanty, or absent periods. It reflects underlying hormonal imbalance and significantly impacts women\'s quality of life and fertility. Homoeopathy regularises the menstrual cycle by addressing the hormonal axis, lifestyle factors, and emotional health holistically.',
        symptoms: ['Periods coming earlier or later than expected', 'Very heavy or very scanty bleeding', 'Cycles shorter than 21 days or longer than 35 days', 'Painful cramps (dysmenorrhoea)', 'Premenstrual syndrome (PMS)', 'Absence of periods (amenorrhoea)'],
        causes: ['Hormonal imbalances (PCOS, thyroid disorders)', 'Extreme weight loss or gain', 'Excessive exercise', 'Stress and emotional disturbances', 'Perimenopause', 'Structural uterine abnormalities'],
        homeopathy: 'Pulsatilla (suppressed periods from getting cold/wet, mild patient), Sepia (late, scanty periods with dragging pain), Natrum Muriaticum (late periods from grief or stress), Lachesis (early, heavy periods with clots), and Caulophyllum (dysmenorrhoea, irregular periods from uterine weakness) — selected after careful case-taking.',
        faq: [
            { q: 'How quickly can homoeopathy regularise menstrual cycles?', a: 'Most patients see improvement in 2–3 menstrual cycles. Complete regularisation typically occurs over 4–6 months of individualised homoeopathic treatment.' },
            { q: 'Does homoeopathy help with painful periods (dysmenorrhoea)?', a: 'Yes. Homoeopathic remedies like Magnesia Phosphorica, Colocynth, and Caulophyllum are highly effective for menstrual cramps with no side effects.' },
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
            { q: 'Can homoeopathy boost my child\'s immunity permanently?', a: 'Constitutional homoeopathic treatment strengthens the child\'s immune response over 3–6 months, typically reducing illness frequency by 50–70%.' },
            { q: 'Is homoeopathy safe for toddlers and infants?', a: 'Absolutely. Homoeopathic remedies are among the safest medicines for children of all ages, with no toxic side effects.' },
        ],
    },

    'adenoids-tonsillitis': {
        title: 'Adenoids & Tonsillitis', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Tonsillar and adenoid hypertrophy is a common childhood condition causing recurrent throat infections, snoring, and ear problems. Homoeopathy offers a surgical-sparing approach by shrinking tissue and boosting local immunity.',
        symptoms: ['Recurrent sore throat and fever', 'Difficulty swallowing', 'Mouth breathing and snoring', 'Muffled voice', 'Ear infections and hearing difficulty', 'Enlarged inflamed tonsils'],
        causes: ['Recurrent bacterial or viral throat infections', 'Weakened immunity', 'Environmental allergens and pollution', 'Family predisposition', 'Poor nutrition'],
        homeopathy: 'Baryta Carbonica (large tonsils, timid child), Calcarea Carbonica (recurrent tonsillitis in chubby child), Belladonna (acute red hot tonsillitis), Mercurius Solubilis (pus-forming tonsillitis, bad breath), Phytolacca (hard dark-red tonsils).',
        faq: [
            { q: 'Can homoeopathy avoid tonsillectomy in children?', a: 'In mild to moderate cases, consistent treatment over 3–6 months significantly reduces tonsil size and infection frequency, often making surgery unnecessary.' },
            { q: 'How is acute tonsillitis managed homoeopathically?', a: 'Acute remedies like Belladonna or Hepar Sulph are prescribed based on the specific symptom picture for rapid relief within 24–48 hours.' },
        ],
    },

    'bedwetting': {
        title: 'Bedwetting (Enuresis)', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Nocturnal enuresis affects 15% of 5-year-olds and can persist into adolescence. It causes significant emotional distress. Homoeopathy offers gentle, effective treatment addressing both physical and emotional aspects without any side effects.',
        symptoms: ['Involuntary urination during sleep', 'Deep sleep, hard to wake', 'Daytime urinary urgency in some cases', 'Emotional distress, shame, and anxiety about the issue'],
        causes: ['Delay in bladder maturation', 'Excessive urine production at night', 'Deep sleep insensitive to bladder signals', 'Psychological stress', 'Constipation compressing the bladder'],
        homeopathy: 'Equisetum (bedwetting without clear cause, dreams), Causticum (wets in first sleep, urinary weakness), Kreosotum (deep sleeper, urgent urination), Belladonna (wets in first part of night), Pulsatilla (emotional, clingy child).',
        faq: [
            { q: 'At what age should a child seek treatment for bedwetting?', a: 'Bedwetting is normal until age 5-6. Treatment is recommended if it persists beyond age 6 or causes emotional distress, with excellent results in most cases.' },
            { q: 'Does homoeopathy address the emotional impact of bedwetting?', a: 'Yes. Homoeopathy treats both the physical bladder weakness and the shame/anxiety the child experiences, making recovery holistic and lasting.' },
        ],
    },

    'childhood-asthma': {
        title: 'Childhood Asthma', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Asthma is the most common chronic disease in children, affecting 1 in 10 worldwide. Homoeopathy reduces the frequency of attacks and long-term dependency on inhalers by addressing the allergic constitution.',
        symptoms: ['Recurrent wheezing and breathlessness', 'Nocturnal cough waking child', 'Exercise-induced breathlessness', 'Chest tightness', 'Frequent respiratory infections triggering attacks'],
        causes: ['Genetic predisposition and family history of atopy', 'Environmental allergens (dust, pets, pollen)', 'Respiratory infections in early life', 'Passive smoking exposure', 'Emotional stress and anxiety'],
        homeopathy: 'Arsenicum Album (anxious, restless, worse at midnight), Natrum Sulph (damp weather triggers), Ipecacuanha (nausea with wheeze), Spongia Tosta (dry barking wheeze), Antimonium Tartaricum (rattling mucus, difficult expectoration).',
        faq: [
            { q: 'Can a child outgrow asthma with homoeopathic treatment?', a: 'Many children treated constitutionally significantly reduce or completely resolve their asthma by adolescence.' },
            { q: 'Should I stop my child\'s inhaler during homoeopathic treatment?', a: 'Never stop an inhaler abruptly. As attacks reduce, inhaler requirement decreases under your paediatrician\'s guidance.' },
        ],
    },

    'adhd': {
        title: 'ADHD', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'ADHD is a neurodevelopmental condition affecting 5–10% of school-age children. Homoeopathy offers a safe, side-effect-free approach, improving focus, behaviour, and emotional regulation without stimulant medication side effects.',
        symptoms: ['Difficulty sustaining attention', 'Easily distracted and forgetful', 'Excessive talking and interrupting', 'Unable to sit still', 'Impulsive decision-making', 'Poor academic performance despite normal intelligence'],
        causes: ['Frontal lobe dopaminergic pathway immaturity', 'Genetic predisposition', 'Prenatal toxin or stress exposure', 'Premature birth', 'Dietary factors in susceptible children'],
        homeopathy: 'Stramonium (hyperactive, fearful, impulsive), Tuberculinum (restless, destructive), Medorrhinum (hyperactive, loves outdoors), Hyoscyamus (fidgety, silly behaviour), Baryta Carbonica (inattentive, shy, slow to learn).',
        faq: [
            { q: 'Can homoeopathy replace stimulant medication for ADHD?', a: 'In mild to moderate ADHD, constitutional homoeopathy often provides improvement without medication. Always discuss changes with the prescribing physician.' },
            { q: 'How long to see improvement in ADHD with homoeopathy?', a: 'Parents typically notice behavioural improvements within 6–12 weeks, with academic and social improvements over 3–6 months.' },
        ],
    },

    'growth-delays': {
        title: 'Growth Delays', category: 'Pediatric Diseases', bannerSubtitle: 'Pediatric Diseases',
        intro: 'Growth delay can result from nutritional, hormonal, or constitutional factors. Homoeopathy stimulates the child\'s vital force, improves nutrient assimilation, and addresses the underlying cause of growth delay safely and gently.',
        symptoms: ['Height below 3rd percentile for age', 'Delayed bone age', 'Delayed puberty', 'Poor weight gain despite adequate diet', 'Frequent illness reducing absorption'],
        causes: ['Nutritional deficiencies (zinc, calcium, protein)', 'Growth hormone deficiency', 'Constitutional delay', 'Chronic illness reducing absorption', 'Emotional deprivation and stress'],
        homeopathy: 'Calcarea Phosphorica (delayed ossification, poor assimilation), Silicea (thin, poorly nourished, recurrently ill), Baryta Carbonica (very short, mentally and physically delayed), Natrum Muriaticum (thin, emaciated despite eating), Phosphorus (tall and thin, growing pains).',
        faq: [
            { q: 'Can homoeopathy help a child not growing despite good nutrition?', a: 'If growth delay is constitutional or related to poor assimilation, homoeopathy can stimulate appetite, improve nutrient absorption, and support healthy growth.' },
            { q: 'What is the role of calcium and vitamin D alongside homoeopathic treatment?', a: 'They are complementary. Homoeopathy improves the body\'s ability to use calcium. Adequate dietary calcium and Vitamin D are still recommended.' },
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
            { q: 'Can homoeopathy treat anxiety without causing drowsiness?', a: 'Yes. Homoeopathic remedies are not sedatives — they reduce anxiety by correcting the underlying constitutional imbalance. Patients remain fully alert.' },
            { q: 'Can I take homoeopathic remedies alongside psychiatric medication?', a: 'Yes, they are compatible. Any changes to psychiatric medication must be made only under your psychiatrist\'s supervision.' },
        ],
    },

    'depression': {
        title: 'Depression', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Depression affects 280 million people worldwide. Homoeopathy treats depression holistically — addressing the emotional cause (grief, loss, suppression) alongside physical symptoms, offering a complementary pathway to recovery.',
        symptoms: ['Persistent low mood and hopelessness', 'Loss of interest in enjoyable activities', 'Fatigue and low energy', 'Disturbed sleep — insomnia or hypersomnia', 'Appetite changes and weight fluctuation', 'Difficulty concentrating'],
        causes: ['Grief, loss, or bereavement', 'Chronic stress and burnout', 'Traumatic events or abuse', 'Hormonal imbalances (postpartum, menopause, thyroid)', 'Neurotransmitter dysregulation', 'Social isolation'],
        homeopathy: 'Natrum Muriaticum (depression from suppressed grief), Ignatia Amara (acute grief, sighing), Aurum Metallicum (deep hopelessness, perfectionist), Sepia (indifference, exhausted women), Pulsatilla (weepy, clingy, better with consolation).',
        faq: [
            { q: 'Is homoeopathy safe for depression alongside antidepressants?', a: 'Yes. As homoeopathic treatment progresses, antidepressant reduction should only be done gradually under your psychiatrist\'s supervision.' },
            { q: 'Can homoeopathy treat postpartum depression?', a: 'Yes. Postpartum depression responds very well to homoeopathy and is completely safe for breastfeeding mothers.' },
        ],
    },

    'insomnia': {
        title: 'Insomnia', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Insomnia affects 30% of adults, causing fatigue, cognitive impairment, and mood disturbances. Homoeopathy offers effective treatment for both acute and chronic insomnia without the dependency and grogginess of sleeping pills.',
        symptoms: ['Difficulty falling asleep despite tiredness', 'Waking multiple times through the night', 'Early morning waking', 'Unrefreshing sleep and daytime fatigue', 'Anxiety or racing thoughts at bedtime'],
        causes: ['Stress, anxiety, and worry', 'Shift work and irregular schedules', 'Caffeine, alcohol, and stimulants', 'Chronic pain or physical illness', 'Menopause and hormonal changes', 'Depression'],
        homeopathy: 'Coffea Cruda (mind too active, excited thoughts prevent sleep), Nux Vomica (wakes at 3 am, light sleeper from stress), Passiflora (insomnia from worry and exhaustion), Arsenic Album (anxiety-driven insomnia after midnight), Ignatia (sleeplessness from grief or shock).',
        faq: [
            { q: 'How quickly does homoeopathy work for insomnia?', a: 'Many patients notice improvement within 3–7 days. Chronic insomnia with deep causes takes 4–8 weeks for sustained improvement.' },
            { q: 'Is homoeopathy habit-forming for sleep like sleeping pills?', a: 'No. Homoeopathic remedies do not create dependency — they restore the body\'s natural sleep rhythm.' },
        ],
    },

    'ocd': {
        title: 'OCD', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'OCD is a chronic condition characterised by intrusive thoughts and compulsive behaviours that cause significant impairment. Homoeopathy addresses OCD constitutionally, reducing the intensity of obsessional thinking and compulsive urges.',
        symptoms: ['Unwanted intrusive repetitive thoughts', 'Compulsive rituals — handwashing, checking, counting', 'Intense anxiety when rituals not performed', 'Significant time lost to obsessions/compulsions', 'Interference with daily functioning'],
        causes: ['Neurobiological abnormality (serotonin, glutamate pathways)', 'Genetic predisposition', 'Streptococcal infection (PANDAS in children)', 'Childhood trauma', 'Perfectionist personality'],
        homeopathy: 'Arsenicum Album (fear of contamination, perfectionism), Natrum Muriaticum (ritualistic behaviour from suppressed emotions), Syphilinum (compulsive handwashing, fear of germs), Thuja (fixed ideas, body rituals), Aurum Metallicum (perfectionism, self-blame).',
        faq: [
            { q: 'Can homoeopathy help OCD without SSRIs?', a: 'In mild to moderate OCD, constitutional homoeopathy can provide significant improvement without medication. In severe cases, it works best alongside CBT and SSRI therapy.' },
            { q: 'How long does OCD treatment take with homoeopathy?', a: 'Meaningful reduction in OCD intensity is typically seen in 3–6 months. Deep constitutional treatment over 12–18 months provides most lasting results.' },
        ],
    },

    'stress-burnout': {
        title: 'Stress & Burnout', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Burnout is a modern epidemic affecting professionals worldwide, causing physical exhaustion, emotional depletion, and cynicism. Homoeopathy restores vital energy, emotional resilience, and physical health depleted by prolonged stress.',
        symptoms: ['Extreme fatigue not relieved by rest', 'Emotional exhaustion and detachment', 'Reduced performance and productivity', 'Physical symptoms — headaches, gut problems, palpitations', 'Irritability, cynicism, and withdrawal'],
        causes: ['Prolonged work pressure and overload', 'Lack of work-rest boundaries', 'People-pleasing personality', 'Lack of social support', 'Perfectionism and inability to delegate'],
        homeopathy: 'Nux Vomica (driven, ambitious, irritable burnout from overwork), Sepia (exhausted, indifferent from overgiving), Kali Phosphoricum (nervous exhaustion from mental fatigue), Picric Acid (complete prostration from study or overwork), Phosphoricum Acidum (burnout from grief or disappointment).',
        faq: [
            { q: 'How is burnout different from depression in homoeopathic treatment?', a: 'Homoeopathy distinguishes through detailed case-taking and selects remedies targeting the specific depletion pattern — work-driven vs emotionally-driven.' },
            { q: 'Can homoeopathy help physical symptoms of stress like IBS or headaches?', a: 'Yes. Stress-related physical symptoms often resolve simultaneously as homoeopathy treats mind and body as an integrated whole.' },
        ],
    },

    'panic-attacks': {
        title: 'Panic Attacks', category: 'Mental Health', bannerSubtitle: 'Mental Health',
        intro: 'Panic attacks are sudden episodes of intense fear causing overwhelming physical symptoms — racing heart, chest tightness, shortness of breath — often without obvious danger. Homoeopathy is effective for both acute attacks and the underlying anxiety driving them.',
        symptoms: ['Sudden surge of intense fear or dread', 'Racing or pounding heartbeat', 'Shortness of breath and choking sensation', 'Chest pain or tightness', 'Dizziness, trembling, and sweating', 'Fear of dying or losing control'],
        causes: ['Generalised anxiety disorder or phobia', 'Chronic stress', 'Hyperventilation triggering panic spiral', 'Caffeine or stimulant use', 'Medical conditions — thyroid, cardiac arrhythmias'],
        homeopathy: 'Aconitum Napellus (sudden intense fear of death — most common acute remedy), Argentum Nitricum (anticipatory panic, crowds, heights), Gelsemium (paralysing fear, trembling weakness), Opium (fright that remains, post-traumatic), Veratrum Album (cold sweat, collapse sensation).',
        faq: [
            { q: 'Can taking homoeopathic remedies during a panic attack help immediately?', a: 'Yes. Aconitum 30C or 200C is often effective within minutes during an acute panic attack.' },
            { q: 'Will homoeopathy permanently stop panic attacks?', a: 'Constitutional homoeopathic treatment over 3–6 months significantly reduces or eliminates panic attacks in most patients.' },
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
            { q: 'Can homoeopathy cure migraines permanently?', a: 'With sustained constitutional treatment over 3–6 months, most patients see 60–80% reduction in migraine frequency. Many achieve complete remission.' },
            { q: 'Can homoeopathy be used during a migraine attack?', a: 'Yes. Acute remedies like Belladonna or Iris Versicolor, taken at the first sign of a headache, can abort or significantly reduce the attack.' },
        ],
    },
    'epilepsy': {
        title: 'Epilepsy', category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: 'Epilepsy involves recurrent, unprovoked seizures caused by abnormal electrical activity in the brain. Homoeopathy is used as a complementary therapy to reduce seizure frequency, improve quality of life, and address the constitutional predisposition to seizures.',
        symptoms: ['Recurrent seizures (convulsions)', 'Temporary confusion and staring spells', 'Uncontrollable jerking movements', 'Loss of consciousness', 'Anxiety and low mood between episodes', 'Memory difficulties'],
        causes: ['Genetic predisposition', 'Brain injury, stroke, or tumour', 'Infections (meningitis, encephalitis)', 'Developmental brain disorders', 'Birth trauma'],
        homeopathy: 'Bufo Rana (nocturnal seizures, often in women around menses), Cuprum Metallicum (tonic-clonic seizures with thumb turning inward), Belladonna (convulsions with high fever), Calcarea Carbonica (seizures in chubby, sweaty children), Causticum (seizures in puberty, right-sided weakness).',
        faq: [
            { q: 'Can homoeopathy replace anti-epileptic drugs?', a: 'No. Anti-epileptic medication must not be stopped abruptly. Homoeopathy works alongside to reduce frequency and sometimes allows gradual dose reduction under neurologist supervision.' },
            { q: 'How long does homoeopathic treatment for epilepsy take?', a: 'Constitutional treatment is long-term — typically 12–24 months — with gradual improvement in seizure frequency and quality of life.' },
        ],
    },
    'bells-palsy': {
        title: "Bell's Palsy", category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: "Bell's Palsy is sudden, temporary paralysis of the facial muscles on one side, caused by inflammation of the facial nerve. Homoeopathy accelerates nerve recovery and reduces the risk of permanent weakness when started promptly.",
        symptoms: ['Sudden weakness or paralysis of one side of the face', 'Drooping eyelid or corner of the mouth', 'Drooling', 'Difficulty speaking, eating, and closing the eye', 'Altered taste and sensitivity to sound on the affected side'],
        causes: ['Viral reactivation (Herpes simplex, Herpes zoster)', 'Inflammation and swelling of the facial nerve canal', 'Cold exposure to the face', 'Immune suppression', 'Diabetes and hypertension as risk factors'],
        homeopathy: "Aconitum (acute stage, sudden onset after cold exposure), Causticum (right-sided facial paralysis — a key remedy), Cadmium Sulph (left-sided facial palsy), Gelsemium (facial weakness with general weakness, trembling), Hypericum (nerve pain and recovery).",
        faq: [
            { q: "How quickly should homoeopathic treatment start for Bell's Palsy?", a: 'The earlier the better — starting within the first week gives the best results. Homoeopathy complements standard steroid therapy very effectively.' },
            { q: 'Can homoeopathy prevent permanent facial weakness?', a: 'Early constitutional treatment significantly reduces the risk of residual weakness and synkinesis (involuntary movements) after Bell\'s Palsy.' },
        ],
    },
    'parkinsons': {
        title: "Parkinson's Disease", category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: "Parkinson's Disease is a progressive neurodegenerative disorder affecting movement, balance, and quality of life. Homoeopathy works as a complementary therapy, slowing progression, improving motor symptoms, and supporting the patient's emotional and physical wellbeing.",
        symptoms: ['Resting tremor — "pill-rolling" hand tremor', 'Muscle rigidity and stiffness', 'Bradykinesia (slowness of movement)', 'Shuffling gait and stooped posture', 'Monotone voice and reduced facial expression', 'Sleep disturbances and depression'],
        causes: ['Loss of dopamine-producing neurons in substantia nigra', 'Genetic mutations (LRRK2, SNCA genes)', 'Environmental toxin exposure (pesticides)', 'Oxidative stress and mitochondrial dysfunction', 'Aging'],
        homeopathy: "Rhus Toxicodendron (tremor, stiffness better on movement), Causticum (right-sided involvement, contractures), Argentum Nitricum (trembling, anxiety, hurried), Zincum Metallicum (restless legs, tremor), Gelsemium (general weakness, trembling, drooping of muscles).",
        faq: [
            { q: "Can homoeopathy slow Parkinson's disease progression?", a: "Clinical experience suggests constitutional homoeopathic treatment can slow progression and improve quality of life, though it cannot reverse neuronal loss. Best used alongside conventional treatment." },
            { q: 'Does homoeopathy help with non-motor symptoms of Parkinson\'s like depression and sleep?', a: "Yes. Homoeopathy is particularly effective for non-motor symptoms like depression, insomnia, anxiety, and constipation associated with Parkinson's." },
        ],
    },
    'vertigo': {
        title: 'Vertigo', category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: 'Vertigo is the sensation that you or the environment is spinning, often caused by inner ear or central nervous system disorders. Homoeopathy provides rapid and lasting relief for both acute episodes and the underlying constitutional predisposition to vertigo.',
        symptoms: ['Sensation of spinning or tilting', 'Nausea and vomiting', 'Tinnitus (ringing in ears)', 'Hearing loss in Ménière\'s disease', 'Balance problems and risk of falling', 'Nystagmus (involuntary eye movements)'],
        causes: ["BPPV (displaced ear crystals — most common cause)", "Ménière's disease", 'Vestibular neuritis', 'Migraine-associated vertigo', 'Cervical spondylosis affecting vertebral arteries'],
        homeopathy: "Conium Maculatum (vertigo worse turning head sideways or from lying down), Cocculus Indicus (vertigo from motion sickness, car travel, loss of sleep), Gelsemium (vertigo with weakness, difficulty walking), Phosphorus (vertigo when rising, sensitive patient), Belladonna (sudden vertigo with rush of blood to head).",
        faq: [
            { q: 'How quickly does homoeopathy work for acute vertigo?', a: 'Acute vertigo often responds within hours to the correctly prescribed remedy. Chronic or recurrent vertigo requires constitutional treatment over 2–4 months.' },
            { q: "Can homoeopathy treat Ménière's disease?", a: "Yes. Ménière's disease — with its triad of vertigo, tinnitus, and hearing loss — often responds very well to individualised homoeopathic treatment over 3–6 months." },
        ],
    },
    'nerve-pain': {
        title: 'Numbness & Nerve Pain', category: 'Neurological Disorders', bannerSubtitle: 'Neurological Disorders',
        intro: 'Peripheral neuropathy causes numbness, tingling, and burning pain, most commonly from diabetes, B12 deficiency, or nerve compression. Homoeopathy reduces pain, improves nerve conduction, and addresses the underlying constitutional and aetiological cause.',
        symptoms: ['Numbness and tingling in hands and feet', 'Burning or electric-shock pain', 'Sensitivity to touch (allodynia)', 'Muscle weakness in affected limbs', 'Poor balance and coordination', 'Sensitivity to cold'],
        causes: ['Diabetes (most common)', 'Vitamin B12 deficiency', 'Nerve compression (carpal tunnel, sciatica)', 'Autoimmune disorders', 'Alcohol neuropathy', 'Chemotherapy side effects'],
        homeopathy: 'Hypericum Perforatum (nerve injury pain, shooting along nerve pathways), Phosphoric Acid (numbness from diabetic neuropathy, weakness), Aconite (tingling from cold or fright), Arsenicum Album (burning pain worse at night), Causticum (paralytic weakness of extremities, numbness).',
        faq: [
            { q: 'Can homoeopathy reverse nerve damage?', a: 'Homoeopathy cannot reverse severe structural nerve damage, but it significantly reduces pain, improves circulation, and aids nerve recovery in early to moderate neuropathy.' },
            { q: 'How long does treatment take for diabetic neuropathy?', a: 'Consistent treatment over 3–6 months typically yields significant reduction in burning pain and paresthesias, alongside good blood sugar control.' },
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
            { q: 'Is homoeopathy better than topical creams for acne?', a: 'Homoeopathy treats the root constitutional cause of acne, leading to lasting clearance. Topical treatments typically offer temporary suppression with risk of recurrence.' },
            { q: 'How long does homoeopathic treatment take for acne?', a: 'Most patients see significant improvement in 6–12 weeks. Complete clearance with constitutional treatment typically takes 4–6 months.' },
        ],
    },
    'eczema': {
        title: 'Eczema', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Eczema (atopic dermatitis) is a chronic inflammatory skin condition causing intense itching, redness, and skin barrier dysfunction. Homoeopathy offers a gentle, effective alternative to steroids, addressing the underlying atopic constitution without long-term skin thinning.',
        symptoms: ['Intense itching — often worse at night', 'Red, inflamed, and scaly patches', 'Dry, cracked skin prone to bleeding', 'Oozing and crusting in acute stage', 'Thickened skin (lichenification) in chronic cases', 'Worsened by stress, allergens, and temperature changes'],
        causes: ['Genetic skin barrier defect (filaggrin mutations)', 'IgE-mediated allergic response', 'Environmental allergens (dust, pet dander) and irritants', 'Food sensitivities (dairy, gluten in susceptible children)', 'Stress and emotional triggers'],
        homeopathy: 'Graphites (oozing honey-like discharge, behind ears and flexures), Sulphur (burning, itching worse from heat and washing), Arsenicum Album (dry, burning patches worse at night), Natrum Muriaticum (eczema from suppressed grief or emotions), Petroleum (deep cracks, raw skin in winter).',
        faq: [
            { q: 'Can homoeopathy permanently cure eczema?', a: 'Constitutional homoeopathic treatment often achieves long-term remission, particularly in children. Results depend on duration, extent, and the strength of the atopic constitution.' },
            { q: 'Should I stop my steroid cream when starting homoeopathic treatment?', a: 'Do not stop steroids abruptly. Reduce gradually as homoeopathic treatment takes effect. Sudden steroid withdrawal can cause severe flaring (red skin syndrome).' },
        ],
    },
    'psoriasis': {
        title: 'Psoriasis', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Psoriasis is a chronic autoimmune skin condition causing rapid skin cell turnover, leading to thick, silvery scales and inflamed, red patches. Homoeopathy addresses the autoimmune root and offers lasting relief without the side effects of immunosuppressants or biologics.',
        symptoms: ['Red, thickened plaques with silvery-white scales', 'Itching, burning, and soreness', 'Nail changes — pitting, thickening, or crumbling', 'Scalp psoriasis causing dandruff-like flaking', 'Psoriatic arthritis with joint pain in some patients', 'Flares triggered by stress, infection, or medication'],
        causes: ['Autoimmune T-cell activation causing rapid keratinocyte turnover', 'Genetic predisposition (HLA-Cw6)', 'Emotional stress (major trigger)', 'Infections (especially Streptococcal — triggers guttate psoriasis)', 'Certain medications (beta-blockers, lithium)'],
        homeopathy: 'Arsenicum Album (dry, burning, scaly patches with restlessness), Graphites (psoriasis with oozing in folds), Petroleum (deep cracks with bleeding), Sulphur (burning, itching, worse in warmth), Kali Arsenicicum (extreme itching, burning, worse at night and in open air).',
        faq: [
            { q: 'Can homoeopathy clear psoriasis completely?', a: 'Many patients achieve complete clinical remission with constitutional treatment. Severe, longstanding psoriasis may improve significantly, though complete clearance varies.' },
            { q: 'How long does homoeopathic treatment for psoriasis take?', a: 'Mild psoriasis responds in 2–4 months. Severe chronic psoriasis typically requires 6–18 months of sustained constitutional treatment.' },
        ],
    },
    'vitiligo': {
        title: 'Vitiligo', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Vitiligo is an autoimmune condition causing loss of melanocytes, resulting in white patches on the skin. Homoeopathy stimulates melanocyte activity and immune regulation, often achieving re-pigmentation — especially when started early.',
        symptoms: ['Smooth white patches on skin — face, hands, and genitals most commonly', 'Premature whitening of hair (poliosis)', 'White patches inside the mouth', 'Patches may enlarge over time', 'Emotional impact — significant cosmetic and psychological distress'],
        causes: ['Autoimmune destruction of melanocytes', 'Genetic predisposition', 'Oxidative stress in pigment cells', 'Emotional trauma precipitating onset', 'Association with thyroid disorders and other autoimmune conditions'],
        homeopathy: 'Arsenicum Sulphuratum Flavum (specific for vitiligo with re-pigmentation evidence), Phosphorus (spreading white patches, anxious patient), Silicea (vitiligo with tendency to suppuration), Sulphur (associated with skin inflammation), Natrum Muriaticum (vitiligo precipitated by grief or emotional trauma).',
        faq: [
            { q: 'Can homoeopathy restore colour to white patches?', a: 'Yes. Re-pigmentation is seen in many patients, especially those with recent-onset vitiligo treated constitutionally. Older patches are harder to treat but stabilisation is reliably achieved.' },
            { q: 'How long does vitiligo treatment take with homoeopathy?', a: 'Initial signs of re-pigmentation are typically seen in 3–6 months. Complete treatment is long-term, spanning 12–24 months.' },
        ],
    },
    'urticaria': {
        title: 'Urticaria (Hives)', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Urticaria (hives) causes intensely itchy, raised welts on the skin triggered by allergic or non-allergic mechanisms. Chronic urticaria (lasting more than 6 weeks) responds very well to homoeopathic treatment, which addresses the underlying allergic constitution.',
        symptoms: ['Itchy, raised, red or skin-coloured welts', 'Welts change location within hours', 'Burning and stinging sensation', 'Angioedema (deeper swelling of lips, face, throat)', 'Worsening from heat, pressure, or stress'],
        causes: ['Allergic reactions (foods, medications, insect stings)', 'Autoimmune (chronic idiopathic urticaria)', 'Infections (viral, bacterial)', 'Physical triggers (cold, heat, pressure, exercise)', 'Stress and emotional upset'],
        homeopathy: 'Apis Mellifica (burning, stinging welts worse from heat, better cold), Urtica Urens (urticaria from shellfish or plant contact), Astacus Fluviatilis (urticaria with liver involvement), Dulcamara (urticaria worse in cold damp weather), Natrum Muriaticum (chronic urticaria with emotional suppression).',
        faq: [
            { q: 'Can homoeopathy stop recurrent episodes of urticaria?', a: 'Constitutional treatment significantly reduces or eliminates recurrence. Most chronic urticaria patients see lasting improvement over 3–6 months.' },
            { q: 'Is homoeopathy useful when the cause of urticaria is unknown?', a: 'Yes. Homoeopathy selects the remedy based on the patient\'s individual symptom pattern, not the identified trigger, making it effective even in idiopathic cases.' },
        ],
    },
    'lichen-planus': {
        title: 'Lichen Planus', category: 'Skin Diseases', bannerSubtitle: 'Skin Diseases',
        intro: 'Lichen Planus is a chronic inflammatory condition affecting skin, mucous membranes, nails, and scalp. It presents as itchy, flat-topped, purple plaques. Homoeopathy reduces inflammation, relieves itching, and often achieves long-term remission.',
        symptoms: ['Itchy, flat-topped, purplish papules on wrists, ankles, back', 'White lacy patches inside the mouth (oral LP)', 'Painful erosions in genital lichen planus', 'Nail pitting and thinning', 'Scalp hair loss with scarring (lichen planopilaris)'],
        causes: ['Autoimmune T-cell attack on basal keratinocytes', 'Hepatitis C infection association', 'Medications (beta-blockers, NSAIDs, diuretics)', 'Dental metals (amalgam contact LP)', 'Stress precipitating or worsening episodes'],
        homeopathy: 'Arsenic Album (burning, itchy plaques, restless patient), Sulphur (itching worse from heat, offensive skin), Sepia (skin worse in cold, tired, indifferent patient), Graphites (moist infiltrated plaques), Merc Sol (oral lichen planus with profuse saliva and metallic taste).',
        faq: [
            { q: 'Can homoeopathy treat oral lichen planus effectively?', a: 'Yes. Oral lichen planus responds well to constitutional homoeopathic treatment, reducing pain, erosions, and the characteristic white patches over 3–6 months.' },
            { q: 'Is lichen planus curable with homoeopathy?', a: 'Homoeopathy can achieve long-term remission in most cases of lichen planus. Recurrence is reduced compared to steroid-only treatment.' },
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
            { q: 'Can homoeopathy regrow hair in alopecia areata patches?', a: 'Yes, regrowth is seen in many patients with constitutional treatment over 3–6 months, especially in recent-onset cases with fewer patches.' },
            { q: 'Does stress worsen alopecia areata?', a: 'Yes. Stress is a major trigger. Homoeopathic remedies address both the autoimmune root and the stress triggering it.' },
        ],
    },
    'male-pattern-baldness': {
        title: 'Male Pattern Baldness', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Androgenetic alopecia involves progressive hair thinning driven by DHT sensitivity. Homoeopathy strengthens follicles, reduces scalp inflammation, and slows hair loss progression constitutionally.',
        symptoms: ['Gradual thinning at crown and hairline (M-shape in men)', 'Widening parting in women', 'Increased hair shedding on pillow or in shower', 'Visible scalp through thinning hair'],
        causes: ['DHT sensitivity of follicles', 'Genetic predisposition — maternal and paternal', 'Hormonal changes (puberty, menopause, PCOS)', 'Chronic stress and nutritional deficiencies'],
        homeopathy: 'Lycopodium (premature baldness, liver issues), Phosphorus (hair loss in young sensitive patients), Sabal Serrulata (DHT-related hair loss), Wiesbaden (stimulates follicle activity), Selenium (hair loss with oily scalp).',
        faq: [
            { q: 'Can homoeopathy stop male pattern baldness completely?', a: 'Homoeopathy can slow or halt progression significantly. Complete reversal is not typical in advanced androgenetic alopecia.' },
            { q: 'How long does treatment take for baldness?', a: 'Reduction in shedding is noticed in 6–8 weeks. Noticeable improvement in density takes 3–6 months.' },
        ],
    },
    'dandruff': {
        title: 'Dandruff', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Dandruff involves scalp flaking, itching, and oiliness caused by Malassezia fungal overgrowth and skin barrier imbalance. Homoeopathy treats dandruff constitutionally, addressing skin and gut factors driving the condition.',
        symptoms: ['White or yellowish flakes on scalp and clothing', 'Itchy scalp', 'Oily or dry scalp skin', 'Redness in severe seborrhoeic dermatitis'],
        causes: ['Malassezia fungal overgrowth', 'Oily scalp (seborrhoea)', 'Stress and fatigue as triggers', 'Poor diet and nutritional deficiencies'],
        homeopathy: 'Sulphur (dry itchy scalp worse from heat), Kali Sulphuricum (yellow scaly dandruff), Natrum Muriaticum (oily scalp, white dandruff), Graphites (sticky crusty scalp), Thuja (white scaly dandruff with dry hair).',
        faq: [
            { q: 'Can homoeopathy permanently cure dandruff?', a: 'Constitutional homoeopathic treatment achieves long-term resolution superior to antifungal shampoos alone.' },
            { q: 'Does diet affect dandruff?', a: 'Yes. Reducing sugar and refined carbs helps alongside treatment by reducing fungal food supply.' },
        ],
    },
    'premature-greying': {
        title: 'Premature Greying', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Premature greying before age 30 is often constitutional. Homoeopathy addresses genetic, nutritional, and stress-related factors and in early stages can sometimes slow further greying.',
        symptoms: ['Grey or white hair appearing before age 30', 'Patchy greying in some cases', 'Associated with B12, copper, or iron deficiency symptoms'],
        causes: ['Genetic predisposition — most common', 'Vitamin B12, copper, and zinc deficiency', 'Thyroid disorders', 'Chronic stress and anxiety', 'Autoimmune conditions'],
        homeopathy: 'Lycopodium (premature greying with liver issues), Phosphoric Acid (greying from grief or mental exhaustion), Natrum Muriaticum (greying from chronic grief), Phosphorus (sensitive, anxious youth), Silicea (nutritional deficiency-related greying).',
        faq: [
            { q: 'Can homoeopathy reverse grey hair?', a: 'In very early-stage greying driven by nutritional or emotional causes, homoeopathy can slow or partially reverse the process. Established genetic greying is much harder to reverse.' },
            { q: 'What nutrients should I check if greying early?', a: 'Get B12, ferritin, copper, zinc, and thyroid function tested. Addressing deficiencies alongside homoeopathy gives the best outcome.' },
        ],
    },
    'hair-thinning': {
        title: 'Hair Thinning', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Diffuse hair thinning (Telogen Effluvium) is a common response to systemic stress — illness, nutritional deficiency, hormonal changes, or emotional shock. Homoeopathy triggers follicle recovery and addresses the triggering cause.',
        symptoms: ['Diffuse shedding — handfuls of hair in shower or brush', 'Overall reduced hair volume', 'Visible scalp through thinning hair', 'Often starts 2–3 months after a stressful event'],
        causes: ['Fever or serious illness in preceding months', 'Nutritional deficiencies (iron, protein, zinc)', 'Postpartum hormonal drop', 'Rapid weight loss', 'Thyroid disorders', 'Prolonged stress'],
        homeopathy: 'Phosphorus (diffuse shedding in sensitive, anxious patients), Natrum Muriaticum (shedding from suppressed grief), Silicea (nutritional deficiency-related), Calcarea Carbonica (shedding during breastfeeding), Sepia (postpartum hair loss with exhaustion).',
        faq: [
            { q: 'How long does telogen effluvium last?', a: 'Naturally, 6–9 months. With homoeopathic treatment addressing the trigger, recovery is typically faster — 3–4 months.' },
            { q: 'Does postpartum hair loss respond to homoeopathy?', a: 'Yes, very well. Remedies like Sepia and Pulsatilla address both the hormonal drop and postpartum emotional changes.' },
        ],
    },
    'scalp-psoriasis': {
        title: 'Scalp Psoriasis', category: 'Hair Disorders', bannerSubtitle: 'Hair Disorders',
        intro: 'Scalp psoriasis causes thick, silver-white scaly plaques with intense itching and cosmetic distress. Homoeopathy addresses the autoimmune root, reduces plaque formation, and prevents relapse.',
        symptoms: ['Thick dry silvery scales on scalp', 'Itching and burning', 'Flaking resembling severe dandruff', 'Redness and scalp inflammation', 'Hair loss in severe cases'],
        causes: ['Autoimmune dysregulation', 'Genetic predisposition', 'Stress and infection as triggers', 'Medications (lithium, beta-blockers)'],
        homeopathy: 'Arsenic Album (dry burning scalp worse at night), Graphites (crusty sticky discharge), Petroleum (raw bleeding cracks in winter), Sulphur (burning itchy scalp worse from heat), Mezereum (thick crusts with pus underneath).',
        faq: [
            { q: 'Is scalp psoriasis different from dandruff in homoeopathic treatment?', a: 'Yes. Scalp psoriasis requires constitutional treatment addressing the autoimmune component, unlike dandruff which is primarily fungal.' },
            { q: 'Can scalp psoriasis cause permanent hair loss?', a: 'Severe scalp psoriasis can cause temporary hair loss. With homoeopathic treatment controlling the psoriasis, hair typically regrows once inflammation settles.' },
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
            { q: 'Can homoeopathy slow RA joint damage?', a: 'Homoeopathy controls inflammation and slows progression, especially effective in early RA. In advanced disease, it complements DMARDs and improves quality of life.' },
            { q: 'Is homoeopathy safe alongside methotrexate for RA?', a: 'Yes. Homoeopathic remedies are compatible with all conventional RA medications.' },
        ],
    },
    'back-pain': {
        title: 'Back Pain', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Back pain is the leading cause of disability globally. Acute back pain from muscle strain, chronic back pain from disc disease, and structural causes all respond well to individualised homoeopathic treatment.',
        symptoms: ['Localised or radiating back pain', 'Stiffness on waking', 'Pain worsening with movement or prolonged sitting', 'Radiating leg pain in disc prolapse', 'Muscle spasm and restricted mobility'],
        causes: ['Muscle strain and poor posture', 'Intervertebral disc prolapse or degeneration', 'Facet joint arthritis', 'Sedentary lifestyle', 'Osteoporosis in older women'],
        homeopathy: 'Rhus Toxicodendron (stiffness worse first motion, better warmth), Bryonia (pain worse movement, better firm pressure), Colocynth (lumbar pain radiating down leg), Calcarea Fluorica (disc degeneration), Arnica (pain from injury or overexertion).',
        faq: [
            { q: 'Can homoeopathy help disc prolapse without surgery?', a: 'In early to moderate disc prolapse, homoeopathic treatment combined with physiotherapy can avoid the need for surgery in many cases.' },
            { q: 'How quickly does homoeopathy relieve acute back pain?', a: 'Acute back pain from muscle strain often responds noticeably within 24–48 hours of the correctly prescribed remedy.' },
        ],
    },
    'cervical-spondylosis': {
        title: 'Cervical Spondylosis', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Cervical spondylosis is age-related wear of the cervical spine causing neck pain, stiffness, and nerve compression, affecting 85% of people over 60. Homoeopathy reduces pain, improves mobility, and addresses the constitutional predisposition.',
        symptoms: ['Neck pain and stiffness', 'Headaches from the neck', 'Tingling or numbness in arms and fingers', 'Limited neck rotation', 'Dizziness from vertebral artery compromise'],
        causes: ['Age-related disc dehydration and osteophyte formation', 'Poor posture and prolonged screen use', 'Previous neck injury', 'Genetic predisposition to early degeneration'],
        homeopathy: 'Calcarea Phosphorica (disc degeneration, weakness), Rhus Toxicodendron (stiffness better movement), Hypericum (nerve root pain radiating to arms), Bryonia (neck pain worse motion), Phosphorus (tall thin patient with nerve sensitivity).',
        faq: [
            { q: 'Can homoeopathy prevent further degeneration in cervical spondylosis?', a: 'Homoeopathy slows progressive degeneration by improving circulation, reducing inflammation, and strengthening musculoskeletal tissues constitutionally.' },
            { q: 'How does homoeopathy compare with physiotherapy for cervical spondylosis?', a: 'Both are complementary. Physiotherapy addresses structural alignment while homoeopathy reduces pain and nerve irritability from within.' },
        ],
    },
    'sciatica': {
        title: 'Sciatica', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Sciatica is shooting or burning pain along the sciatic nerve from the lower back through the buttock into the leg. Homoeopathy is highly effective, reducing nerve irritation and inflammation without opioids.',
        symptoms: ['Sharp shooting pain from lower back into buttock and leg', 'Burning or electric-shock sensation', 'Numbness or tingling in leg or foot', 'Weakness in the affected leg', 'Pain worsened by prolonged sitting or coughing'],
        causes: ['Lumbar disc herniation (most common)', 'Piriformis syndrome', 'Lumbar spinal stenosis', 'Sacroiliac joint dysfunction', 'Pregnancy'],
        homeopathy: 'Colocynth (sciatica down the left leg, better pressure or bending), Magnesium Phosphorica (right-sided sciatica, better heat and pressure), Rhus Toxicodendron (stiffness better on movement), Gnaphalium (sciatica with numbness alternating with pain), Hypericum (nerve pain along sciatic distribution).',
        faq: [
            { q: 'How effective is homoeopathy for sciatica compared to anti-inflammatory drugs?', a: 'Homoeopathy provides comparable pain relief without gastrointestinal or kidney side effects and addresses the underlying disc or nerve cause.' },
            { q: 'Can homoeopathy help sciatica in pregnancy?', a: 'Yes. Homoeopathy is one of the safest options for sciatica during pregnancy, where NSAIDs are contraindicated.' },
        ],
    },
    'frozen-shoulder': {
        title: 'Frozen Shoulder', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Adhesive capsulitis causes progressive stiffening and severe pain in the shoulder joint. Homoeopathy reduces inflammation, breaks the cycle of pain and stiffness, and accelerates recovery from all three stages.',
        symptoms: ['Gradual onset of shoulder pain with increasing stiffness', 'Severely restricted movement — especially external rotation', 'Pain worse at night', 'Difficulty reaching behind the back', 'Goes through freezing, frozen, and thawing stages'],
        causes: ['Inflammation and fibrosis of the shoulder joint capsule', 'Post-injury or post-surgical immobility', 'Diabetes (significantly higher incidence)', 'Thyroid disorders', 'Prolonged arm immobility'],
        homeopathy: 'Sanguinaria Canadensis (right-sided frozen shoulder, arm cannot be raised), Ferrum Metallicum (left-sided shoulder stiffness, worse at rest), Rhus Toxicodendron (stiffness better on movement), Bryonia (pain worse any movement, better rest), Causticum (contracture, drawing pain).',
        faq: [
            { q: 'Can homoeopathy speed up recovery from frozen shoulder?', a: 'Yes. Homoeopathy significantly reduces pain in the freezing phase and improves range of motion faster than natural recovery alone in the frozen phase.' },
            { q: 'Is steroid injection necessary with homoeopathic treatment?', a: 'In many cases, homoeopathy provides sufficient relief without steroid injections. For severe acute pain, a single steroid injection may help initially.' },
        ],
    },
    'gout': {
        title: 'Gout', category: 'Musculoskeletal Disorders', bannerSubtitle: 'Musculoskeletal Disorders',
        intro: 'Gout is caused by elevated uric acid forming crystals in joints, causing sudden intensely painful attacks — most often in the big toe. Homoeopathy reduces acute pain, lowers uric acid, and prevents recurrence without allopurinol\'s kidney side effects.',
        symptoms: ['Sudden intense joint pain — typically the big toe', 'Red hot swollen joints', 'Tophi (uric acid deposits) in chronic gout', 'Pain unbearable even to light touch', 'Fever during acute attacks'],
        causes: ['Elevated serum uric acid', 'High-purine diet (red meat, shellfish, organ meats)', 'Alcohol (especially beer)', 'Diuretic medications', 'Renal insufficiency reducing uric acid excretion'],
        homeopathy: 'Colchicum (intense tearing joint pain worse from motion — acute attacks), Urtica Urens (reduces uric acid — specific anti-gout remedy), Ledum Pal (joint pain starting in feet going upward, better cold), Sabina (gout with chalk-like deposits), Benzoic Acid (gout with offensive dark urine).',
        faq: [
            { q: 'Can homoeopathy control uric acid levels like allopurinol?', a: 'Remedies like Urtica Urens and Colchicum have uric acid-lowering effects, working best in mild to moderate hyperuricaemia alongside dietary modification.' },
            { q: 'What diet should I follow during homoeopathic treatment for gout?', a: 'Avoid red meat, shellfish, organ meats, and beer. Increase water intake. A low-purine diet dramatically reduces attack frequency alongside treatment.' },
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
            { q: 'Can homoeopathy treat a UTI without antibiotics?', a: 'In mild to moderate UTIs, homoeopathy often resolves infection within 24–48 hours. Urine culture should guide whether antibiotics are needed for kidney involvement.' },
            { q: 'Can homoeopathy prevent recurrent UTIs in women?', a: 'Yes. Constitutional treatment significantly reduces recurrence by improving urogenital immunity and correcting the underlying susceptibility.' },
        ],
    },
    'kidney-stones': {
        title: 'Kidney Stones', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Kidney stones cause severe colicky pain when passed through the ureter. Homoeopathy aids stone passage, reduces pain, and addresses the metabolic and dietary factors causing stone formation to prevent recurrence.',
        symptoms: ['Sudden severe cramping flank or groin pain (colic)', 'Blood in urine', 'Nausea and vomiting during colic', 'Frequent painful urination', 'Burning while urinating'],
        causes: ['Calcium oxalate stones from high oxalate diet (most common)', 'Uric acid stones from high purine diet', 'Struvite stones from recurrent UTIs', 'Dehydration and inadequate water intake', 'Hyperparathyroidism'],
        homeopathy: 'Berberis Vulgaris (left-sided renal colic radiating to groin — most common remedy), Lycopodium (right-sided renal colic, red sandy deposit in urine), Sarsaparilla (calcium oxalate stones, pain at end of urination), Nux Vomica (spasmodic pain with urge), Cantharis (intense burning with stone passage).',
        faq: [
            { q: 'Can homoeopathy dissolve kidney stones?', a: 'Homoeopathy aids stone passage and prevents new formation by addressing the underlying metabolic cause. It does not dissolve large existing stones.' },
            { q: 'How much water should I drink for kidney stones during treatment?', a: 'Aim for 2.5–3 litres daily. Adequate hydration is the single most effective dietary measure for preventing all types of kidney stones.' },
        ],
    },
    'bedwetting-adult': {
        title: 'Adult Bedwetting', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Nocturnal enuresis in adults causes significant embarrassment and relationship strain. Homoeopathy offers individualised treatment based on the cause and the patient\'s complete symptom picture, with good outcomes in most cases.',
        symptoms: ['Involuntary urination during sleep', 'Sometimes associated with daytime urgency', 'Recurring episodes causing emotional distress', 'May be accompanied by neurological symptoms'],
        causes: ['Overactive bladder or small bladder capacity', 'Medications (diuretics, sedatives)', 'Neurological conditions', 'Sleep apnoea and deep sleep patterns', 'Emotional stress or trauma'],
        homeopathy: 'Equisetum (profuse urination during dreams), Causticum (incontinence worsened by coughing or laughing), Kreosotum (urgent urination during uneasy sleep), Belladonna (wets in early sleep), Sulphur (enuresis in deep sleepers).',
        faq: [
            { q: 'Is adult bedwetting treatable?', a: 'Yes. A thorough urological evaluation followed by individualised homoeopathic treatment gives good results in most cases of adult nocturnal enuresis.' },
            { q: 'Should I see a urologist alongside homoeopathic treatment?', a: 'Yes. A basic urological evaluation is recommended to rule out structural or neurological causes before or alongside homoeopathic treatment.' },
        ],
    },
    'prostate': {
        title: 'Prostate Issues', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'BPH causes urinary problems in men over 50 as the enlarged prostate compresses the urethra. Homoeopathy reduces prostate size, improves urinary flow, and avoids the sexual side effects of conventional alpha-blockers.',
        symptoms: ['Weak or slow urinary stream', 'Straining to start urination', 'Frequent urination especially nocturia', 'Feeling of incomplete bladder emptying', 'Dribbling at end of urination'],
        causes: ['Age-related hormonal changes — increased DHT', 'Chronic prostatic inflammation', 'Sedentary lifestyle and obesity', 'Dietary factors (low zinc)', 'Genetic predisposition'],
        homeopathy: 'Sabal Serrulata (BPH — primary homoeopathic remedy for prostate enlargement), Chimaphila Umbellata (BPH with dribbling, fullness), Lycopodium (reduced stream, right-sided, older man), Staphysagria (prostatitis from emotion), Pulsatilla (benign prostate, variable symptoms).',
        faq: [
            { q: 'Can homoeopathy shrink an enlarged prostate?', a: 'Sabal Serrulata and constitutional remedies show documented improvement in prostate size and urinary flow in clinical practice over 3–6 months.' },
            { q: 'Is homoeopathy safe for prostate treatment in elderly men?', a: 'Yes. Homoeopathic remedies are completely safe for elderly patients, with no interactions with cardiac or diabetic medications.' },
        ],
    },
    'recurrent-uti': {
        title: 'Recurrent UTI', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Recurrent UTI (3 or more episodes per year) reflects a constitutional urogenital susceptibility. Homoeopathy substantially reduces recurrence frequency by strengthening the urogenital mucosa and immune response.',
        symptoms: ['Same as acute UTI — burning, urgency, frequency', 'Pattern of infections every 4–8 weeks', 'Post-coital UTIs in sexually active women', 'Antibiotic-resistant pattern developing over time'],
        causes: ['Post-coital bacterial introduction', 'Post-menopausal oestrogen deficiency', 'Bladder anatomical variations', 'Incomplete bladder emptying', 'Antibiotic overuse disrupting normal flora'],
        homeopathy: 'Staphysagria (recurrent UTI post-intercourse or from suppressed anger), Natrum Muriaticum (recurrent UTI post-menopause), Sepia (recurrent UTI in exhausted women), Equisetum (recurrent UTI with no obvious cause), Causticum (chronic urinary weakness).',
        faq: [
            { q: 'How many UTIs per year can homoeopathy prevent?', a: 'Most patients see recurrence reduced from 6–8/year to 0–2/year within 4–6 months of constitutional treatment.' },
            { q: 'Is long-term antibiotic prophylaxis avoidable with homoeopathy?', a: 'Yes. Constitutional homoeopathy is a safe and effective alternative to long-term antibiotic prophylaxis without the risk of antibiotic resistance.' },
        ],
    },
    'interstitial-cystitis': {
        title: 'Interstitial Cystitis', category: 'Genito-Urinary Diseases', bannerSubtitle: 'Genito-Urinary Diseases',
        intro: 'Interstitial Cystitis (IC) / Painful Bladder Syndrome is a chronic condition causing bladder pain, urgency, and frequency without detectable infection. Homoeopathy addresses the neurogenic bladder inflammation and constitutional predisposition.',
        symptoms: ['Chronic pelvic or bladder pain', 'Frequency — urinating up to 60 times a day in severe cases', 'Urgency and pressure in the bladder', 'Pain worsened by certain foods, stress, or intercourse'],
        causes: ['Bladder mucosal lining defect', 'Autoimmune-mediated bladder inflammation', 'Neurogenic inflammation of bladder nerves', 'Previous UTI triggering chronic inflammatory response', 'Associated with fibromyalgia and IBS'],
        homeopathy: 'Cantharis (intense burning bladder pain), Pareira Brava (frequent urination with straining, IC pain), Equisetum (bladder pain, frequent urination without infection), Lycopodium (chronic bladder dysfunction), Apis (stinging bladder pain better cold).',
        faq: [
            { q: 'Is homoeopathy effective for a condition as difficult as IC?', a: 'Many IC patients report significant improvement in pain, frequency, and quality of life with sustained constitutional homoeopathic treatment.' },
            { q: 'How long does IC treatment take with homoeopathy?', a: 'Most patients see improvement over 3–6 months, with continued treatment needed for consolidation of results.' },
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
            { q: 'Can homoeopathy replace antibiotics for bacterial fever?', a: 'No. Confirmed bacterial infections require appropriate antibiotics. Homoeopathy can be supportive in managing symptoms and recovery alongside antibiotics.' },
            { q: 'How does homoeopathy work for viral fever without specific treatment?', a: 'Homoeopathy stimulates the immune response, reduces symptom severity and duration, and prevents complications — ideal for viral illnesses without specific antivirals.' },
        ],
    },
    'allergies': {
        title: 'Allergies', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Allergic conditions result from hypersensitive immune reactions to harmless environmental triggers — pollen, food, pet dander. Homoeopathy desensitises the allergic constitution, reducing the severity of reactions and the need for antihistamines.',
        symptoms: ['Sneezing, runny nose, and watery eyes', 'Hives, rash, or eczema flares', 'Digestive symptoms from food allergies', 'Asthma triggered by allergens'],
        causes: ['Genetic atopic predisposition', 'Early childhood gut microbiome disruption', 'Hygiene hypothesis — reduced early infectious exposure', 'Specific allergen sensitisation (IgE-mediated)'],
        homeopathy: 'Allium Cepa (watery allergy with burning nasal discharge), Apis Mellifica (urticaria or angioedema), Natrum Muriaticum (chronic constitutional allergy with emotional component), Sulphur (chronic allergic constitution, heat-sensitive), Arsenicum Album (allergy with restlessness and burning).',
        faq: [
            { q: 'Does homoeopathy work as allergy immunotherapy?', a: 'Homoeopathy achieves similar desensitisation to immunotherapy by correcting the constitutional allergic predisposition over time.' },
            { q: "Can children's food allergies be treated homoeopathically?", a: 'Yes. Constitutional homoeopathic treatment in children can reduce or resolve food sensitivities over time, improving nutritional diversity and quality of life.' },
        ],
    },
    'autoimmune': {
        title: 'Autoimmune Conditions', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Autoimmune conditions arise when the immune system mistakenly attacks the body\'s own tissues. Homoeopathy addresses the dysregulated immune response at a deep constitutional level, reducing flare frequency and severity.',
        symptoms: ['Fatigue and low energy disproportionate to activity', 'Joint pain and muscle weakness', 'Recurrent unexplained fever', 'Skin rashes or hair loss', 'Organ-specific symptoms depending on the condition'],
        causes: ['Genetic predisposition (HLA genes)', 'Gut dysbiosis and leaky gut (key trigger)', 'Chronic stress and trauma', 'Environmental toxins and chemicals', 'Infections acting as molecular mimicry triggers'],
        homeopathy: "Thuja (constitutional remedy for conditions following vaccinations or autoimmune triggers), Natrum Muriaticum (autoimmune from suppressed emotions), Phosphorus (tissue inflammation, bleed easily), Sulphur (chronic inflammatory constitution), Medorrhinum (recurrent autoimmune flares).",
        faq: [
            { q: 'Can homoeopathy replace immunosuppressants for autoimmune disease?', a: 'Not typically as a replacement, but as complementary treatment it reduces flare frequency, allowing lower immunosuppressant doses under specialist supervision.' },
            { q: 'How does homoeopathy approach the root cause of autoimmunity?', a: 'Homoeopathy uses the concept of inherited disease tendencies (miasms) and treats the predisposition — addressing gut health, stress response, and immune dysregulation simultaneously.' },
        ],
    },
    'post-viral-fatigue': {
        title: 'Post-viral Fatigue', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Post-viral fatigue (including Long COVID) involves persistent exhaustion, cognitive dysfunction, and multi-system symptoms weeks to months after a viral infection. Homoeopathy has a long history of treating post-infectious fatigue with excellent results.',
        symptoms: ['Profound unrefreshing fatigue not improved by rest', 'Brain fog — poor concentration, memory', 'Post-exertional malaise (worsening after activity)', 'Breathlessness and chest tightness', 'Insomnia and sleep disruption'],
        causes: ['Viral persistence or immune dysregulation post-infection', 'Mitochondrial dysfunction from viral damage', 'Post-COVID spike protein-related vascular inflammation', 'HPA axis dysregulation', 'Reactivation of latent viruses (EBV, CMV)'],
        homeopathy: 'Gelsemium (profound weakness, heavy limbs from viral illness), Arsenicum Album (anxiety, fatigue, post-COVID restlessness), Phosphoric Acid (weakness from viral illness or grief), Kali Phosphoricum (nervous exhaustion, brain fog), Carcinosin (deep fatigue with suppressed history).',
        faq: [
            { q: 'Can homoeopathy help Long COVID symptoms?', a: 'Early clinical reports and studies show positive outcomes for Long COVID symptoms — especially fatigue, brain fog, and breathlessness — with individualised homoeopathic treatment.' },
            { q: 'How long does post-viral fatigue take to resolve with homoeopathy?', a: 'Many patients see significant improvement in 4–8 weeks. Full resolution may take 3–6 months of consistent constitutional treatment.' },
        ],
    },
    'chronic-pain': {
        title: 'Chronic Pain', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Chronic pain affects 20% of adults worldwide as a complex biopsychosocial condition. Homoeopathy addresses chronic pain holistically — targeting the physical pathology, the emotional response to pain, and the constitutional predisposition, without opioid dependency.',
        symptoms: ['Persistent pain lasting more than 3 months', 'Pain disproportionate to tissue damage', 'Sleep disturbance and depression from pain', 'Fatigue and reduced quality of life', 'Fear-avoidance behaviour and catastrophisation'],
        causes: ['Central sensitisation — hypersensitive pain processing', 'Tissue damage (osteoarthritis, neuropathy)', 'Inflammatory conditions', 'Psychological factors — anxiety, depression', 'Post-surgical or post-injury chronic pain'],
        homeopathy: 'Hypericum (nerve pain — burning, shooting), Arsenicum Album (burning pain worse at night with restlessness), Colocynth (cramping pain better with pressure), Staphysagria (pain from suppressed anger or surgical wound), Silicea (chronic aching in weak, chilly patients).',
        faq: [
            { q: 'Can homoeopathy replace opioids for chronic pain?', a: 'In mild to moderate chronic pain, homoeopathy provides effective relief without dependency. In opioid-dependent patients, it supports gradual tapering under medical supervision.' },
            { q: 'How does homoeopathy treat pain that has no identifiable physical cause?', a: 'Homoeopathy excels at treating pain with a strong emotional component — grief, suppressed anger, trauma — through mind-body constitutional remedies like Staphysagria and Ignatia.' },
        ],
    },
    'recurrent-infections': {
        title: 'Recurrent Infections', category: 'Acute & Chronic Diseases', bannerSubtitle: 'Acute & Chronic Diseases',
        intro: 'Recurrent infections indicate a constitutionally weakened immune system. Homoeopathy systematically strengthens the vital force, reducing both susceptibility and severity of recurring infections over time — a key advantage over repeated antibiotic courses.',
        symptoms: ['Frequent infections — more than 4–6 per year', 'Slow recovery from illnesses', 'Need for repeated antibiotic courses', 'Associated fatigue, low mood, and poor appetite'],
        causes: ['Primary or secondary immunodeficiency', 'Nutritional deficiencies (zinc, Vitamin D, iron)', 'Gut dysbiosis reducing immune training', 'Chronic stress impairing immune function', 'Antibiotic overuse disrupting microbiome'],
        homeopathy: 'Tuberculinum (thin child or adult with recurrent respiratory infections — deep miasmatic remedy), Calcarea Carbonica (sweaty chubby constitution with frequent infections), Silicea (recurrent infections ending in pus, weak, chilly), Natrum Muriaticum (recurrent illness from suppressed emotions), Baryta Carbonica (sluggish immunity, enlarged glands).',
        faq: [
            { q: 'How long does constitutional treatment take to strengthen immunity?', a: 'Significant improvement in infection frequency is typically seen within 3–4 months. Sustained treatment over 6–12 months consolidates lasting immune strengthening.' },
            { q: 'Can homoeopathy reduce antibiotic use for recurrent infections?', a: 'Yes. Reducing the frequency of infections naturally reduces antibiotic need — simultaneously preserving gut microbiome and reducing antibiotic resistance risk.' },
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

export const diseaseCategories = [
    {
        name: 'Respiratory Diseases', emoji: '🫁', img: catRespiratory, diseases: [
            { label: 'Cold & Flu', slug: 'cold-flu' },
            { label: 'Chronic Cough', slug: 'chronic-cough' },
            { label: 'Bronchial Asthma', slug: 'bronchial-asthma' },
            { label: 'Allergic Rhinitis', slug: 'allergic-rhinitis' },
            { label: 'Sinusitis', slug: 'sinusitis' },
            { label: 'Adenoids', slug: 'adenoids' },
        ]
    },
    {
        name: 'Gastrointestinal Diseases', emoji: '🍽️', img: catGastro, diseases: [
            { label: 'Piles (Haemorrhoids)', slug: 'piles' },
            { label: 'Acidity & Gas', slug: 'acidity-gas' },
            { label: 'Ulcers', slug: 'ulcers' },
            { label: 'Fissure & Fistula', slug: 'fissure-fistula' },
            { label: 'Irritable Bowel Syndrome', slug: 'ibs' },
            { label: 'Ulcerative Colitis', slug: 'ulcerative-colitis' },
        ]
    },
    {
        name: 'Hormonal & Lifestyle Disorders', emoji: '⚖️', img: catHormonal, diseases: [
            { label: 'Diabetes', slug: 'diabetes' },
            { label: 'Hypertension', slug: 'hypertension' },
            { label: 'Hypothyroidism', slug: 'hypothyroidism' },
            { label: 'Hyperthyroidism', slug: 'hyperthyroidism' },
            { label: 'Obesity', slug: 'obesity' },
            { label: 'High Cholesterol', slug: 'high-cholesterol' },
        ]
    },
    {
        name: 'Female Reproductive Diseases', emoji: '👩', img: catFemale, diseases: [
            { label: 'PCOS / PCOD', slug: 'pcos-pcod' },
            { label: 'Endometriosis', slug: 'endometriosis' },
            { label: 'Leucorrhoea', slug: 'leucorrhoea' },
            { label: 'Menopause', slug: 'menopause' },
            { label: 'Uterine Fibroids', slug: 'uterine-fibroids' },
            { label: 'Irregular Menstruation', slug: 'irregular-menstruation' },
        ]
    },
    {
        name: 'Pediatric Diseases', emoji: '🧒', img: catPediatric, diseases: [
            { label: 'Recurrent Cold & Cough', slug: 'recurrent-cold-cough' },
            { label: 'Adenoids & Tonsillitis', slug: 'adenoids-tonsillitis' },
            { label: 'Bedwetting', slug: 'bedwetting' },
            { label: 'Childhood Asthma', slug: 'childhood-asthma' },
            { label: 'ADHD', slug: 'adhd' },
            { label: 'Growth Delays', slug: 'growth-delays' },
        ]
    },
    {
        name: 'Mental Health', emoji: '🧠', img: catMental, diseases: [
            { label: 'Anxiety Disorders', slug: 'anxiety' },
            { label: 'Depression', slug: 'depression' },
            { label: 'Insomnia', slug: 'insomnia' },
            { label: 'OCD', slug: 'ocd' },
            { label: 'Stress & Burnout', slug: 'stress-burnout' },
            { label: 'Panic Attacks', slug: 'panic-attacks' },
        ]
    },
    {
        name: 'Neurological Disorders', emoji: '🧬', img: catNeuro, diseases: [
            { label: 'Migraine', slug: 'migraine' },
            { label: 'Epilepsy', slug: 'epilepsy' },
            { label: "Bell's Palsy", slug: 'bells-palsy' },
            { label: "Parkinson's Disease", slug: 'parkinsons' },
            { label: 'Vertigo', slug: 'vertigo' },
            { label: 'Numbness & Nerve Pain', slug: 'nerve-pain' },
        ]
    },
    {
        name: 'Skin Diseases', emoji: '🌿', img: catSkin, diseases: [
            { label: 'Acne', slug: 'acne' },
            { label: 'Eczema', slug: 'eczema' },
            { label: 'Psoriasis', slug: 'psoriasis' },
            { label: 'Vitiligo', slug: 'vitiligo' },
            { label: 'Urticaria', slug: 'urticaria' },
            { label: 'Lichen Planus', slug: 'lichen-planus' },
        ]
    },
    {
        name: 'Hair Disorders', emoji: '💇', img: catHair, diseases: [
            { label: 'Alopecia Areata', slug: 'alopecia-areata' },
            { label: 'Male Pattern Baldness', slug: 'male-pattern-baldness' },
            { label: 'Dandruff', slug: 'dandruff' },
            { label: 'Premature Greying', slug: 'premature-greying' },
            { label: 'Hair Thinning', slug: 'hair-thinning' },
            { label: 'Scalp Psoriasis', slug: 'scalp-psoriasis' },
        ]
    },
    {
        name: 'Musculoskeletal Disorders', emoji: '🦴', img: catSkeletal, diseases: [
            { label: 'Rheumatoid Arthritis', slug: 'rheumatoid-arthritis' },
            { label: 'Back Pain', slug: 'back-pain' },
            { label: 'Cervical Spondylosis', slug: 'cervical-spondylosis' },
            { label: 'Sciatica', slug: 'sciatica' },
            { label: 'Frozen Shoulder', slug: 'frozen-shoulder' },
            { label: 'Gout', slug: 'gout' },
        ]
    },
    {
        name: 'Genito-Urinary Diseases', emoji: '🚽', img: catGenito, diseases: [
            { label: 'Urinary Tract Infection', slug: 'uti' },
            { label: 'Kidney Stones', slug: 'kidney-stones' },
            { label: 'Bedwetting', slug: 'bedwetting-adult' },
            { label: 'Prostate Issues', slug: 'prostate' },
            { label: 'Recurrent UTI', slug: 'recurrent-uti' },
            { label: 'Interstitial Cystitis', slug: 'interstitial-cystitis' },
        ]
    },
    {
        name: 'Acute & Chronic Diseases', emoji: '🌍', img: catChronic, diseases: [
            { label: 'Fever & Infections', slug: 'fever-infections' },
            { label: 'Allergies', slug: 'allergies' },
            { label: 'Autoimmune Conditions', slug: 'autoimmune' },
            { label: 'Post-viral Fatigue', slug: 'post-viral-fatigue' },
            { label: 'Chronic Pain', slug: 'chronic-pain' },
            { label: 'Recurrent Infections', slug: 'recurrent-infections' },
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
