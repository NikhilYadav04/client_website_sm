/**
 * diseasesData.js
 * Central data file for all disease detail pages and About Homeopathy sub-pages.
 * Route pattern: /diseases/:slug  and  /homeopathy/:slug
 */

export const diseasesData = {
    // ── RESPIRATORY ──────────────────────────────────────────────
    cold: {
        title: 'Common Cold',
        category: 'Respiratory',
        bannerSubtitle: 'Respiratory Diseases',
        intro: `The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold. Children younger than 6 are at greatest risk of colds, but healthy adults can also expect to have two or three colds annually.`,
        sections: [
            {
                heading: 'Who Might Get It?',
                body: `Anyone can get a cold, but certain factors increase the risk: age (infants and young children are most susceptible), weakened immune system, season (colds are more common in winter), and exposure to infected individuals.`,
            },
            {
                heading: 'Causes of Common Cold',
                body: `Cold viruses spread through droplets in the air when infected people cough, sneeze or talk. You might also get a cold by touching a contaminated surface and then touching your eyes, nose or mouth.`,
                bullets: [
                    'Rhinovirus – most common cause',
                    'Coronavirus (non-COVID strains)',
                    'RSV (Respiratory Syncytial Virus)',
                    'Adenovirus',
                ],
            },
            {
                heading: 'Symptoms',
                body: `Symptoms of a common cold usually appear one to three days after exposure to the virus.`,
                bullets: [
                    'Runny or stuffy nose',
                    'Sore throat',
                    'Cough and sneezing',
                    'Body aches and mild headache',
                    'Low-grade fever',
                ],
            },
            {
                heading: 'Homeopathic Treatment',
                body: `Homoeopathy offers highly effective treatment for common cold by addressing the root cause and individual constitution. Remedies like Allium Cepa, Arsenicum Album, Natrum Muriaticum, and Aconite are selected based on the patient's specific symptom pattern, offering relief without side effects.`,
            },
        ],
    },

    cough: {
        title: 'Cough',
        category: 'Respiratory',
        bannerSubtitle: 'Respiratory Diseases',
        intro: `A cough is a sudden, forceful hacking sound to release air and clear an irritation in the throat or airway. Coughing to clear the throat is typically an infrequent action, though a number of conditions can cause more frequent bouts of coughing.`,
        sections: [
            {
                heading: 'Who Might Get It?',
                body: `Cough is one of the most common reasons for medical consultations. It affects all age groups but is especially common in children, smokers, and people with respiratory allergies or GERD.`,
            },
            {
                heading: 'Causes of Cough',
                body: `Coughs can be caused by a range of conditions, both short-term and long-term.`,
                bullets: [
                    'Viral infections (cold, flu)',
                    'Asthma and allergies',
                    'Gastroesophageal reflux disease (GERD)',
                    'Postnasal drip',
                    'Chronic obstructive pulmonary disease (COPD)',
                    'Smoking',
                ],
            },
            {
                heading: 'Symptoms',
                bullets: [
                    'Dry, hacking cough',
                    'Productive cough with mucus',
                    'Wheezing or breathlessness',
                    'Sore throat accompanying cough',
                    'Chest tightness',
                ],
            },
            {
                heading: 'Homeopathic Treatment',
                body: `Homoeopathic remedies such as Bryonia, Drosera, Spongia Tosta, Ipecacuanha, and Phosphorus are commonly used for cough depending on type, modalities, and accompanying symptoms. Constitutional treatment provides long-term relief.`,
            },
        ],
    },

    asthma: {
        title: 'Asthma',
        category: 'Respiratory',
        bannerSubtitle: 'Respiratory Diseases',
        intro: `Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath. Homoeopathy offers effective long-term management for asthma.`,
        sections: [
            {
                heading: 'Who Might Get Asthma?',
                body: `Asthma affects people of all ages, often starting in childhood. Risk factors include having a blood relative with asthma, having another allergic condition, being overweight, and exposure to secondhand smoke.`,
            },
            {
                heading: 'Causes of Asthma',
                bullets: [
                    'Airborne allergens (pollen, dust mites, mold)',
                    'Respiratory infections',
                    'Physical activity',
                    'Cold or dry air',
                    'Air pollutants and irritants',
                    'Stress and strong emotions',
                ],
            },
            {
                heading: 'Symptoms',
                bullets: [
                    'Shortness of breath',
                    'Chest tightness or pain',
                    'Wheezing when exhaling',
                    'Trouble sleeping caused by shortness of breath',
                    'Coughing or wheezing attacks worsened by respiratory virus',
                ],
            },
            {
                heading: 'Homeopathic Treatment',
                body: `Homoeopathy treats asthma constitutionally. Remedies like Arsenicum Album, Natrum Sulph, Antimonium Tart, Spongia, and Ipecacuanha are chosen based on trigger factors, timing, and associated symptoms. Consistent homoeopathic treatment can significantly reduce frequency and severity of attacks.`,
            },
        ],
    },

    adenoid: {
        title: 'Adenoid Hypertrophy',
        category: 'Respiratory',
        bannerSubtitle: 'Respiratory Diseases',
        intro: `Adenoids are glands located in the passage that connects the back of the nasal cavity to the throat. They produce white blood cells that help fight infections. Adenoid hypertrophy (enlargement) is common in children and can cause breathing difficulties and recurrent infections.`,
        sections: [
            {
                heading: 'Who Might Get It?',
                body: `Adenoid hypertrophy is most common in children between the ages of 2–10. It tends to decrease after puberty as the adenoids naturally shrink. However, adults can also be affected.`,
            },
            {
                heading: 'Causes',
                bullets: [
                    'Recurrent infections of the nose and throat',
                    'Allergies',
                    'Chronic sinusitis',
                    'Environmental pollution',
                ],
            },
            {
                heading: 'Symptoms',
                bullets: [
                    'Nasal blockage and mouth breathing',
                    'Snoring and disturbed sleep',
                    'Persistent runny nose',
                    'Ear problems (glue ear)',
                    'Characteristic nasal speech',
                    'Recurrent throat and ear infections',
                ],
            },
            {
                heading: 'Homeopathic Treatment',
                body: `Homoeopathy is highly effective in treating adenoid enlargement without surgery. Remedies like Baryta Carbonica, Calcarea Carbonica, Tuberculinum, Agraphis Nutans, and Silicea are selected based on individual presentation and may help shrink the adenoids over time.`,
            },
        ],
    },

    // ── GASTRIC ──────────────────────────────────────────────────
    piles: {
        title: 'Piles (Haemorrhoids)',
        category: 'Gastric',
        bannerSubtitle: 'Gastric Diseases',
        intro: `Piles, also called haemorrhoids, are swollen veins in the lower rectum and anus. They are similar to varicose veins. Haemorrhoids can develop inside the rectum (internal haemorrhoids) or under the skin around the anus (external haemorrhoids). Homoeopathy offers excellent non-surgical treatment.`,
        sections: [
            {
                heading: 'Who Might Get Piles?',
                body: `Piles are very common, affecting about 3 in 4 adults at some point. Risk factors include straining during bowel movements, chronic constipation or diarrhea, low-fibre diet, obesity, and prolonged sitting.`,
            },
            {
                heading: 'Causes',
                bullets: [
                    'Straining during bowel movements',
                    'Constipation or diarrhea',
                    'Pregnancy (pressure on pelvic veins)',
                    'Obesity',
                    'Low-fibre diet',
                    'Prolonged sitting on the toilet',
                ],
            },
            {
                heading: 'Symptoms',
                bullets: [
                    'Painless bleeding during bowel movements',
                    'Itching or irritation in anal region',
                    'Pain or discomfort',
                    'Swelling around the anus',
                    'Mucus discharge with stools',
                ],
            },
            {
                heading: 'Homeopathic Treatment',
                body: `Homoeopathy is very effective for piles. Aesculus Hippocastanum, Nux Vomica, Hamamelis, Collinsonia, and Ratanhia are among the top remedies used. Treatment focuses on improving bowel habits, reducing congestion, and addressing the root constitutional tendency.`,
            },
        ],
    },

    gas: {
        title: 'Flatulence & Gas',
        category: 'Gastric',
        bannerSubtitle: 'Gastric Diseases',
        intro: `Intestinal gas is a common digestive complaint. It refers to gas that is either swallowed or formed in the intestine and may be expelled. While occasional gas is normal, frequent or excessive flatulence can cause significant discomfort and social embarrassment.`,
        sections: [
            { heading: 'Who Might Get It?', body: 'Gas problems affect people of all ages. Those with irritable bowel syndrome (IBS), food intolerances, digestive disorders, or poor dietary habits are more susceptible.' },
            { heading: 'Causes', bullets: ['Swallowing air while eating/drinking', 'High-fibre foods (beans, lentils)', 'Carbonated beverages', 'Food intolerances (lactose, gluten)', 'Gut bacteria imbalance', 'IBS and other digestive disorders'] },
            { heading: 'Symptoms', bullets: ['Bloating and abdominal distension', 'Frequent burping or belching', 'Flatulence (passing gas)', 'Abdominal cramps or pain', 'Feeling of fullness'] },
            { heading: 'Homeopathic Treatment', body: 'Carbo Vegetabilis, Lycopodium, Nux Vomica, China Officinalis, and Argentum Nitricum are key homoeopathic remedies for gas and flatulence, selected based on the type of bloating, timing, and triggers.' },
        ],
    },

    acidity: {
        title: 'Acidity & GERD',
        category: 'Gastric',
        bannerSubtitle: 'Gastric Diseases',
        intro: `Acidity or gastroesophageal reflux disease (GERD) is a digestive disorder that occurs when acidic stomach juices back up into the oesophagus from the stomach. It is one of the most common gastric complaints in modern life due to lifestyle and dietary factors.`,
        sections: [
            { heading: 'Who Might Get It?', body: 'Acidity is extremely common. Almost everyone experiences occasional acid reflux. GERD is more persistent and affects roughly 20% of the Western population. Risk factors include obesity, pregnancy, hiatal hernia, smoking, and certain foods.' },
            { heading: 'Causes', bullets: ['Spicy, fatty, or fried food', 'Alcohol and caffeine consumption', 'Irregular eating habits', 'Stress and anxiety', 'Obesity', 'Late-night meals'] },
            { heading: 'Symptoms', bullets: ['Heartburn (burning sensation in chest)', 'Sour or bitter taste in mouth', 'Regurgitation of food', 'Bloating and belching', 'Nausea', 'Difficulty swallowing'] },
            { heading: 'Homeopathic Treatment', body: 'Homoeopathic remedies such as Natrum Phosphoricum, Robinia, Nux Vomica, Iris Versicolor, and Pulsatilla are selected based on the type of acidity, food aggravators, and accompanying symptoms, offering long-term relief.' },
        ],
    },

    ulcers: {
        title: 'Gastric Ulcers',
        category: 'Gastric',
        bannerSubtitle: 'Gastric Diseases',
        intro: `Gastric ulcers are open sores that develop on the lining of the stomach. They are a type of peptic ulcer disease. Peptic ulcers occur when the thick layer of mucus that protects the stomach from digestive juices is reduced, allowing digestive acids to eat away at the lining.`,
        sections: [
            { heading: 'Who Might Get It?', body: 'Risk factors include H. pylori infection, long-term use of NSAIDs (aspirin, ibuprofen), smoking, alcohol consumption, and stress.' },
            { heading: 'Causes', bullets: ['Helicobacter pylori (H. pylori) infection', 'Long-term NSAID use', 'Excessive alcohol consumption', 'Smoking', 'Stress and anxiety'] },
            { heading: 'Symptoms', bullets: ['Burning stomach pain', 'Nausea and vomiting', 'Dark or black stools', 'Vomiting blood', 'Weight loss', 'Loss of appetite'] },
            { heading: 'Homeopathic Treatment', body: 'Argentum Nitricum, Nux Vomica, Kali Bichromicum, Phosphorus, and Anacardium are key homoeopathic remedies for peptic ulcers chosen based on individual symptom patterns.' },
        ],
    },

    fissure: {
        title: 'Anal Fissure',
        category: 'Gastric',
        bannerSubtitle: 'Gastric Diseases',
        intro: `An anal fissure is a small cut or tear in the thin, moist tissue (mucosa) that lines the anus. It is a very painful condition causing severe pain during bowel movements. Homoeopathy can provide effective relief without surgery.`,
        sections: [
            { heading: 'Who Might Get It?', body: 'Anal fissures affect people of all ages and are particularly common in infants and middle-aged adults. Constipation, straining, and childbirth are major causes.' },
            { heading: 'Causes', bullets: ['Passing large or hard stools', 'Constipation and straining', 'Childbirth', 'Chronic diarrhea', 'Inflammatory bowel disease (Crohn\'s disease)', 'Anal intercourse'] },
            { heading: 'Symptoms', bullets: ['Severe pain during and after bowel movements', 'Bright red blood on stool or toilet paper', 'A crack or tear visible in skin around anus', 'Burning and itching', 'Skin tag near the fissure'] },
            { heading: 'Homeopathic Treatment', body: 'Nitric Acid, Ratanhia, Paeonia, Aesculus, and Graphites are the top homoeopathic remedies for anal fissure, selected based on individual symptoms and constitutional type.' },
        ],
    },

    fistula: {
        title: 'Anal Fistula',
        category: 'Gastric',
        bannerSubtitle: 'Gastric Diseases',
        intro: `An anal fistula is a small tunnel that develops between the end of the bowel and the skin near the anus. Most anal fistulas are the result of an infection in an anal gland that spreads to the skin. Homoeopathy offers conservative treatment that avoids surgery.`,
        sections: [
            { heading: 'Who Might Get It?', body: 'Anal fistulas most commonly develop in people in their 30s and 40s. They are more common in men than women. They frequently develop after an abscess has formed.' },
            { heading: 'Causes', bullets: ['Infection of anal glands', 'Previous anal abscess', 'Crohn\'s disease', 'Tuberculosis', 'Trauma or surgery near the anus'] },
            { heading: 'Symptoms', bullets: ['Persistent drainage of pus near anus', 'Pain and swelling around anus', 'Skin irritation', 'Fever and malaise (if infected)', 'Difficulty with bowel movements'] },
            { heading: 'Homeopathic Treatment', body: 'Silicea, Calcarea Sulphurica, Myristica Sebifera (known as the "homeopathic knife"), Berberis Vulgaris, and Nitric Acid are important remedies for fistula-in-ano, often avoiding the need for surgery.' },
        ],
    },

    // ── ACUTE & CHRONIC ──────────────────────────────────────────
    'acute-respiratory': {
        title: 'Acute & Chronic Respiratory Conditions',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Respiratory disorders range from acute infections like pneumonia and bronchitis to chronic conditions like asthma and COPD. Homoeopathy addresses both acute episodes and chronic tendencies through individualized treatment.`,
        sections: [
            { heading: 'Conditions Covered', bullets: ['Acute bronchitis', 'Pneumonia', 'Sinusitis', 'Allergic rhinitis', 'Chronic obstructive pulmonary disease (COPD)', 'Recurrent respiratory infections'] },
            { heading: 'Symptoms', bullets: ['Persistent or recurring cough', 'Breathlessness and wheezing', 'Chest pain or tightness', 'Fever and fatigue', 'Nasal congestion and discharge'] },
            { heading: 'Homeopathic Approach', body: 'Homoeopathy treats both acute respiratory episodes and the underlying chronic susceptibility. Remedies are selected based on individual symptom patterns, frequency of recurrence, and constitutional type.' },
        ],
    },

    'acute-gastric': {
        title: 'Acute & Chronic Gastric Conditions',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Gastric disorders encompass a wide range of conditions affecting the stomach, intestines, and digestive system. Homoeopathy is highly effective for both acute gastric upsets and chronic gastrointestinal conditions.`,
        sections: [
            { heading: 'Conditions Covered', bullets: ['Acute gastroenteritis', 'Irritable bowel syndrome (IBS)', 'Inflammatory bowel disease (IBD)', 'Chronic constipation', 'Liver disorders', 'Food intolerances'] },
            { heading: 'Symptoms', bullets: ['Abdominal pain and cramping', 'Nausea and vomiting', 'Diarrhea or constipation', 'Bloating and gas', 'Blood in stool', 'Loss of appetite'] },
            { heading: 'Homeopathic Approach', body: 'Homoeopathic treatment focuses on the individual\'s specific digestive pattern, food sensitivities, stress factors, and constitutional type to provide long-lasting relief.' },
        ],
    },

    'hormonal-disorder': {
        title: 'Hormonal Disorders',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Hormonal disorders occur when the body produces too much or too little of certain hormones, disrupting the balance of the endocrine system. These conditions affect many systems and can significantly impact quality of life.`,
        sections: [
            { heading: 'Conditions Covered', bullets: ['Thyroid disorders (hypothyroidism, hyperthyroidism)', 'Diabetes mellitus', 'PCOS / PCOD', 'Adrenal disorders', 'Parathyroid disorders', 'Pituitary disorders'] },
            { heading: 'Symptoms', bullets: ['Weight gain or loss', 'Fatigue and weakness', 'Mood changes and anxiety', 'Hair loss and skin changes', 'Irregular periods', 'Sleep disturbances'] },
            { heading: 'Homeopathic Approach', body: 'Homoeopathy addresses hormonal imbalances by stimulating the body\'s own regulatory mechanisms using remedies like Thyroidinum, Iodum, Calcarea Carbonica, Sepia, and Natrum Muriaticum.' },
        ],
    },

    'female-complaint': {
        title: 'Female Complaints',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Homoeopathy is particularly well-suited to treating female health issues because it treats the whole woman — body and mind. From puberty through menopause, homeopathic care supports women's health at every stage.`,
        sections: [
            { heading: 'Conditions Covered', bullets: ['PCOS / PCOD', 'Irregular and painful periods (dysmenorrhoea)', 'Leucorrhoea (white discharge)', 'Fibroid uterus', 'Endometriosis', 'Infertility', 'Menopausal complaints'] },
            { heading: 'Symptoms', bullets: ['Irregular menstrual cycles', 'Severe period pain', 'Abnormal vaginal discharge', 'Mood swings and irritability', 'Hot flushes and night sweats', 'Fertility challenges'] },
            { heading: 'Homeopathic Approach', body: 'Remedies like Sepia, Pulsatilla, Lachesis, Calcarea Carbonica, and Natrum Muriaticum are selected based on the individual woman\'s hormonal pattern and constitutional type.' },
        ],
    },

    autism: {
        title: 'Autism Spectrum Disorder',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Autism spectrum disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction. Homoeopathy offers a gentle, supportive approach to help manage autistic symptoms and improve quality of life.`,
        sections: [
            { heading: 'Signs & Symptoms', bullets: ['Difficulty with social interaction', 'Speech and language delays', 'Repetitive behaviors and routines', 'Sensory sensitivities', 'Hyperactivity or attention difficulties', 'Difficulty with eye contact'] },
            { heading: 'Homeopathic Approach', body: 'Homoeopathic treatment for autism is highly individualized. Remedies such as Carcinosin, Natrum Muriaticum, Baryta Carbonica, Stramonium, and Hyoscyamus are selected based on the child\'s unique behavioral pattern, developmental history, and family background.' },
            { heading: 'Benefits Reported', bullets: ['Improved social interaction', 'Better speech and communication', 'Reduced repetitive behaviors', 'Calmer temperament', 'Improved sleep patterns'] },
        ],
    },

    'neurological-disorder': {
        title: 'Neurological Disorders',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Neurological disorders are conditions that affect the brain, spinal cord, and nervous system. Homoeopathy can play a supportive role in managing various neurological conditions, improving quality of life and reducing symptom severity.`,
        sections: [
            { heading: 'Conditions Covered', bullets: ['Migraine and chronic headaches', 'Epilepsy (adjunctive care)', 'Parkinson\'s disease (supportive)', 'Multiple sclerosis (supportive)', 'Neuropathy', 'Vertigo and dizziness'] },
            { heading: 'Symptoms', bullets: ['Persistent headaches or migraines', 'Tremors or involuntary movements', 'Memory and concentration difficulties', 'Numbness or tingling', 'Balance problems', 'Seizures'] },
            { heading: 'Homeopathic Approach', body: 'Remedies like Hypericum, Gelsemium, Belladonna, Natrum Sulph, and Plumbum Metallicum are used for various neurological conditions based on detailed case analysis.' },
        ],
    },

    'skin-complaint': {
        title: 'Skin Complaints',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Homoeopathy is renowned for its effectiveness in treating skin disorders. Rather than suppressing skin symptoms with external applications, homoeopathy treats from the inside, addressing the root cause and constitutional tendency.`,
        sections: [
            { heading: 'Conditions Covered', bullets: ['Psoriasis', 'Eczema and dermatitis', 'Acne and rosacea', 'Urticaria (hives)', 'Fungal infections', 'Vitiligo', 'Warts and corns'] },
            { heading: 'Symptoms', bullets: ['Itching, burning, or stinging skin', 'Redness and inflammation', 'Scaling or flaking skin', 'Blisters or pustules', 'Dry or weeping skin lesions'] },
            { heading: 'Homeopathic Approach', body: 'Sulphur, Graphites, Arsenicum Album, Mezereum, Natrum Muriaticum, and Psorinum are among the many remedies used for skin conditions. Treatment is always constitutional and individualized.' },
        ],
    },

    'pediatric-complaint': {
        title: 'Pediatric Complaints',
        category: 'Acute & Chronic Diseases',
        bannerSubtitle: 'Acute & Chronic Diseases',
        intro: `Children respond very well to homoeopathic treatment. The gentle nature of homoeopathic medicines makes them ideal for pediatric care. Homoeopathy can safely treat a wide range of childhood conditions without the risk of side effects.`,
        sections: [
            { heading: 'Conditions Covered', bullets: ['Recurrent infections (ear, throat, chest)', 'Attention deficit hyperactivity disorder (ADHD)', 'Behavioral issues', 'Bed-wetting (enuresis)', 'Growing pains', 'Developmental delays', 'Allergies'] },
            { heading: 'Symptoms Addressed', bullets: ['Frequent fevers and infections', 'Poor concentration and hyperactivity', 'Sleep disturbances', 'Digestive complaints', 'Skin issues', 'Allergic reactions'] },
            { heading: 'Homeopathic Approach', body: 'Homoeopathic treatment for children is gentle, effective, and free from side effects. Remedies like Calcarea Carbonica, Baryta Carbonica, Chamomilla, and Tuberculinum are selected based on the child\'s individual constitution and symptom pattern.' },
        ],
    },
}

// ── ABOUT HOMEOPATHY TOPICS ────────────────────────────────────
export const homeopathyTopics = {
    'hahnemanns-theory': {
        title: "Hahnemann's Main Theory",
        bannerSubtitle: 'About Homoeopathy',
        intro: `Dr. Samuel Hahnemann (1755–1843), a German physician and chemist, is the founder of homoeopathy. Disillusioned by the harsh medical practices of his time, he developed a revolutionary system of medicine based on the principle "similia similibus curentur" – let likes be cured by likes.`,
        sections: [
            {
                heading: 'Law of Similars (Similia Similibus Curentur)',
                body: `The cornerstone of homoeopathy is the Law of Similars. This principle states that a substance that causes symptoms in a healthy person can cure similar symptoms in a sick person. For example, Allium Cepa (onion), which causes watery eyes and runny nose in a healthy person, is used to treat hay fever with the same symptoms.`,
                bullets: ['A substance that causes symptoms in health can cure those symptoms in disease', 'Proved through Hahnemann\'s "Provings" on healthy volunteers', 'Foundation of over 200 years of clinical practice'],
            },
            {
                heading: 'Doctrine of Vital Force',
                body: `Hahnemann proposed that every living organism is animated by a "vital force" or life energy. Disease occurs when this vital force is disturbed, manifesting as symptoms. The goal of homoeopathic treatment is to restore harmony to the vital force using the minimum dose of the similimum (most similar remedy).`,
            },
            {
                heading: 'Minimum Dose Principle',
                body: `Hahnemann discovered through his provings that medicines could be made safer and more effective through serial dilution combined with succussion (vigorous shaking). This process — called potentisation — paradoxically increases the therapeutic action while eliminating toxicity. Higher potencies are more dilute yet more powerful.`,
                bullets: ['Medicines are prepared through potentisation (dilution + succussion)', 'Higher potency = more dilute but stronger therapeutic effect', 'No toxic side effects due to extreme dilution'],
            },
            {
                heading: 'Single Remedy Principle',
                body: `Classical homoeopathy prescribes only one remedy at a time — the Similimum — chosen to match the patient's total symptom picture. This allows for clear, unambiguous observation of the remedy's action and prevents polypharmacy confusion.`,
            },
        ],
    },

    'individualising-case': {
        title: 'Individualising Each Case',
        bannerSubtitle: 'About Homoeopathy',
        intro: `One of the most distinctive features of homoeopathy is its emphasis on treating the individual rather than the disease. Two patients with the same diagnosis may receive completely different remedies based on their unique symptoms, personality, and life history.`,
        sections: [
            {
                heading: 'The Importance of Individualisation',
                body: `Hahnemann wrote: "The physician's highest calling is to make sick people healthy." To achieve this, the homoeopath must understand the patient as a whole being — physical, mental, and emotional — rather than focusing solely on the disease name or diagnosis.`,
            },
            {
                heading: 'The Art of Case Taking',
                body: `A thorough homoeopathic case-taking interview explores every aspect of the patient's experience. This is both a science and an art, requiring patience, empathy, and careful observation.`,
                bullets: [
                    'Chief complaint with all its unique characteristics (location, sensation, modalities)',
                    'Mental and emotional symptoms (anxieties, fears, mood)',
                    'Physical generals (hunger, thirst, sleep, temperature preferences)',
                    'Past medical history and family history',
                    'Life circumstances and stress factors',
                    'Unusual or peculiar symptoms that characterise the individual',
                ],
            },
            {
                heading: 'Generals vs. Particulars',
                body: `In homoeopathy, symptoms are hierarchically organised. "Generals" describe the person as a whole (how they feel generally, their mental state), while "particulars" describe local symptoms (pain in a specific joint). The remedy must match generals first, then particulars.`,
            },
            {
                heading: 'Finding the Similimum',
                body: `After gathering the complete case, the homoeopath uses repertorisation and materia medica study to identify the single remedy (similimum) whose known effects in healthy subjects most closely match the patient's unique symptom totality. This is the art and science of homoeopathic prescribing.`,
            },
        ],
    },

    'mind-method': {
        title: 'Mind Method in Homoeopathy',
        bannerSubtitle: 'About Homoeopathy',
        intro: `Homoeopathy has always recognised the profound connection between mind and body. Long before modern psychosomatic medicine, Hahnemann placed mental and emotional symptoms at the top of the symptom hierarchy, giving them the greatest importance in selecting the correct remedy.`,
        sections: [
            {
                heading: 'The Hierarchy of Symptoms',
                body: `In homoeopathy, not all symptoms are equal. They are arranged in a hierarchy:\n1. Mental/emotional symptoms (highest importance)\n2. Physical general symptoms (affecting the person as a whole)\n3. Particular/local symptoms (affecting specific body parts)`,
                bullets: ['Mental symptoms reveal the deepest disturbance of the vital force', 'A remedy that matches the mental level will cure deeply and permanently', 'Local symptoms alone are insufficient for prescription'],
            },
            {
                heading: 'Understanding the Mental Make-up',
                body: `The homoeopath carefully explores the patient's mental and emotional world: their core fears, the way they relate to others, their reaction to stress and grief, their dreams, and their characteristic behavioral patterns. These mental symptom patterns are matched to the remedy's known mental picture.`,
                bullets: [
                    'Fears and anxieties',
                    'Response to grief, loss, or disappointment',
                    'Relationship with family and society',
                    'Sensitivity to criticism, rejection, or injustice',
                    'Dreams and sleep patterns',
                    'Concentration and memory',
                ],
            },
            {
                heading: 'Mind in Disease',
                body: `Many physical diseases have their root in mental and emotional disturbances. Grief leading to respiratory illness, suppressed anger causing skin eruptions, prolonged anxiety producing digestive disorders — homoeopathy recognizes these psychosomatic connections and treats the root cause at the mental level.`,
            },
            {
                heading: 'Classical Remedies with Strong Mental Keynotes',
                body: `Many homoeopathic remedies are characterised primarily by their mental keynotes:`,
                bullets: [
                    'Natrum Muriaticum – suppressed grief, difficulty accepting consolation',
                    'Ignatia – acute grief, paradoxical symptoms',
                    'Staphysagria – suppressed anger and wounded dignity',
                    'Aurum Metallicum – intense perfectionism, hopelessness',
                    'Phosphorus – open, sympathetic, fear of being alone',
                ],
            },
        ],
    },

    'applicable-diseases': {
        title: 'Which Diseases Can Apply Homoeopathy',
        bannerSubtitle: 'About Homoeopathy',
        intro: `One of the most common questions asked about homoeopathy is what conditions it can treat. The answer is surprisingly broad — homoeopathy can be applied to a very wide range of acute and chronic conditions affecting people of all ages.`,
        sections: [
            {
                heading: 'Acute Conditions',
                body: `Homoeopathy is highly effective for acute illnesses, often providing rapid relief.`,
                bullets: [
                    'Common cold, cough, fever, and flu',
                    'Acute diarrhea and gastroenteritis',
                    'Ear infections and tonsillitis',
                    'Injuries, bruises, and sprains (Arnica Montana)',
                    'Minor burns and insect stings',
                    'Food poisoning',
                ],
            },
            {
                heading: 'Chronic Conditions',
                body: `Homoeopathy excels in treating chronic conditions where conventional medicine offers only symptom management.`,
                bullets: [
                    'Allergies and asthma',
                    'Skin disorders (psoriasis, eczema, vitiligo)',
                    'Hormonal imbalances (thyroid, PCOS)',
                    'Autoimmune conditions',
                    'Chronic pain and arthritis',
                    'Recurrent infections',
                    'IBS and other digestive disorders',
                ],
            },
            {
                heading: 'Mental & Emotional Conditions',
                bullets: [
                    'Anxiety, panic disorder, and phobias',
                    'Depression and grief',
                    'OCD and behavioral issues',
                    'Insomnia and sleep disorders',
                    'ADHD in children',
                    'Autism spectrum support',
                ],
            },
            {
                heading: 'When Homoeopathy is Most Beneficial',
                body: `Homoeopathy is especially valuable when conventional treatment has not provided lasting relief, when the patient wants to avoid long-term drug use, when side effects of conventional medication are problematic, for children and pregnant women seeking gentler treatment options, and as a complementary therapy alongside conventional medicine.`,
            },
            {
                heading: 'Limitations',
                body: `Homoeopathy has certain limitations. It is not recommended as the primary treatment for life-threatening emergencies, serious infections requiring antibiotics, surgical emergencies, or advanced cancer. In such cases, homoeopathy may be used supportively alongside conventional care.`,
            },
        ],
    },
}

// ── DISEASE CATEGORY MAP (for Navbar mega-menu) ───────────────
export const diseaseCategories = [
    {
        name: 'Respiratory',
        diseases: [
            { label: 'Cold', slug: 'cold' },
            { label: 'Cough', slug: 'cough' },
            { label: 'Asthma', slug: 'asthma' },
            { label: 'Adenoid', slug: 'adenoid' },
        ],
    },
    {
        name: 'Gastric',
        diseases: [
            { label: 'Piles', slug: 'piles' },
            { label: 'Gas', slug: 'gas' },
            { label: 'Acidity', slug: 'acidity' },
            { label: 'Ulcers', slug: 'ulcers' },
            { label: 'Fissure', slug: 'fissure' },
            { label: 'Fistula', slug: 'fistula' },
        ],
    },
    {
        name: 'Acute & Chronic',
        diseases: [
            { label: 'Respiratory', slug: 'acute-respiratory' },
            { label: 'Gastric', slug: 'acute-gastric' },
            { label: 'Hormonal Disorder', slug: 'hormonal-disorder' },
            { label: 'Female Complaint', slug: 'female-complaint' },
            { label: 'Autism', slug: 'autism' },
            { label: 'Neurological Disorder', slug: 'neurological-disorder' },
            { label: 'Skin Complaint', slug: 'skin-complaint' },
            { label: 'Pediatric Complaint', slug: 'pediatric-complaint' },
        ],
    },
]

export const homeopathyNavItems = [
    { label: "Hahnemann's Main Theory", slug: 'hahnemanns-theory' },
    { label: 'Individualising Each Case', slug: 'individualising-case' },
    { label: 'Mind Method in Homoeopathy', slug: 'mind-method' },
    { label: 'Which Diseases Can Apply Homoeopathy', slug: 'applicable-diseases' },
]
