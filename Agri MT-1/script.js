const questions = [
    {
        "id": 1,
        "text": "",
        "options": ["1", "2", "0", "None"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q1.png"
    },
    {
        "id": 2,
        "text": "",
        "options": ["n!", "(n+1)!", "0", "None"],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "",
        "image": "q2.png"
    },
    {
        "id": 3,
        "text": "",
        "options": ["1,3", "3,1", "0,1", "1,0"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q3.png"
    },
    {
        "id": 4,
        "text": "",
        "options": ["π", "0", "1", "-1"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "",
        "image": "q4.png"
    },
    {
        "id": 5,
        "text": "",
        "options": ["π", "π/2", "1", "-2π/3"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q5.png"
    },
    {
        "id": 6,
        "text": "",
        "options": ["1", "2", "6", "-8"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q6.png"
    },
    {
        "id": 7,
        "text": "",
        "options": ["1", "2", "-2", "0"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "",
        "image": "q7.png"
    },
    {
        "id": 8,
        "text": "",
        "options": ["1/2", "4/3", "-2/7", "0"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "Formula: 8/3 a^2 m^3",
        "image": "q8.png"
    },
    {
        "id": 9,
        "text": "",
        "options": ["1/2π", "8π/3", "6π", "π"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "Formula: πab",
        "image": "q9.png"
    },
    {
        "id": 10,
        "text": "",
        "options": ["1/2", "ln2", "2ln2−1", "2"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q10.png"
    },
    {
        "id": 11,
        "text": "",
        "options": ["1/2", "2", "−1", "3/5"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q11.png"
    },
    {
        "id": 12,
        "text": "",
        "options": ["1/2", "1", "−1", "3/2"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q12.png"
    },
    {
        "id": 13,
        "text": "",
        "options": ["sinθ/2", "-cotθ/2", "sin2θ", "cot2θ"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q13.png"
    },
    {
        "id": 14,
        "text": "",
        "options": ["2", "-1/2", "0", "none"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q14.png"
    },
    {
        "id": 15,
        "text": "",
        "options": ["2/3", "-1/2", "29/4", "4/5"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q15.png"
    },
    {
        "id": 16,
        "text": "",
        "options": ["1", "-1/2", "29/4", "4/5"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "",
        "image": "q16.png"
    },
    {
        "id": 17,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q17.png"
    },
    {
        "id": 18,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q18.png"
    },
    {
        "id": 19,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "",
        "image": "q19.png"
    },
    {
        "id": 20,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q20.png"
    },
    {
        "id": 21,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "",
        "image": "q21.png"
    },
    {
        "id": 22,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "",
        "image": "q22.png"
    },
    {
        "id": 23,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q23.png"
    },
    {
        "id": 24,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "",
        "image": "q24.png"
    },
    {
        "id": 25,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q25.png"
    },
    {
        "id": 26,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "",
        "image": "q26.png"
    },
    {
        "id": 27,
        "text": "",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "",
        "image": "q26.png"
    },
    {
        "id": 28,
        "text": "C1, C2 এবং C3 তিনটি ধারককে শ্রেণিতে সংযুক্ত করলে তুল্য ধারকত্ব হয় 1µF। দ্বিতীয় ও তৃতীয় ধারকের মান যথাক্রমে 2µF এবং 3µF হলে প্রথমটির মান কত?",
        "options": ["4µF", "3µF", "2µF", "6µF"],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "",
        "image": ""
    },
    {
        "id": 29,
        "text": "একটি সুষম তড়িৎক্ষেত্রে 50cm ব্যবধানে অবস্থিত দুটি বিন্দুর বিভব পার্থক্য 200V। তড়িৎক্ষেত্রের প্রাবল্য কত? / In a uniform electric field, the potential difference between two points 50 cm apart is 200V. What is the electric field intensity?",
        "options": ["400 Vcm⁻¹", "400 Vm⁻¹", "40 Vcm⁻¹", "40 Vm⁻¹"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "Electric field intensity (E) is calculated using the formula E = V / d, where V is the potential difference and d is the distance."
    },
    {
        "id": 30,
        "text": "একটি কোষের সাথে রোধ R1 শ্রেণিতে যুক্ত আছে। R1 এর সাথে R2 রোধ সমান্তরালে যুক্ত করায় বর্তনীর প্রবাহমাত্রা খুব অল্প পরিমাণে বৃদ্ধি পেলে নিচের কোনটি সত্য? / A resistor R1 is connected in series with a cell. When a resistor R2 is connected in parallel with R1, the current through the circuit increases slightly. Which of the following is true?",
        "options": ["R1 > R2", "R1 >> R2", "R2 >> R1", "R2 > R1"],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "When a resistor is added in parallel, the total resistance decreases, which slightly increases the current. For this to happen, R1 must be greater than R2."
    },
    {
        "id": 31,
        "text": "6µF এর 3টি ধারককে শ্রেণি সংযোগে যুক্ত করে 100V এর ব্যাটারি ঐ সংযোগের সাথে যুক্ত করা হলো। সঞ্চিত শক্তির পরিমাণ কত? / Three 6µF capacitors are connected in series, and a 100V battery is connected to this combination. What is the stored energy?",
        "options": ["0.01J", "0.06J", "0.02J", "2 × 10⁴J"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "For capacitors in series, the total capacitance is given by 1/C = 1/C1 + 1/C2 + 1/C3. The stored energy is given by U = (1/2) C V²."
    },
    {
        "id": 32,
        "text": "নিচের কোনটি সত্য নয়? / Which of the following is not true?",
        "options": ["বিভব পার্থক্য নির্ণয়ের জন্য বর্তনীতে ভোল্টমিটারকে সমান্তরালে যুক্ত করা হয়", "তড়িৎ প্রবাহ পরিমাপের জন্য অ্যামিটারকে বর্তনীতে শ্রেণি সমবায়ে যুক্ত করা হয়", "অ্যামিটারের সাথে সমান্তরালে খুব স্বল্পমানের একটি রোধ লাগিয়ে অ্যামিটারের পাল্লা বৃদ্ধি করা যায়।", "সরু ধাতব তারকে শান্ট হিসেবে ব্যবহার করা হয়"],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "To increase the range of an ammeter, a low resistance is connected in series with it, not in parallel."
    },
    {
        "id": 33,
        "text": "একটি ধারকের দুটি পাতের মধ্যে বিভব পার্থক্য এবং ধারকে সঞ্চিত শক্তি U। ধারকের বিভব বৃদ্ধি করে 2V করা হলে, সঞ্চিত শক্তি বৃদ্ধি পেয়ে কত হবে? / The potential difference between the plates of a capacitor is U, and the stored energy is U. If the potential difference is increased by 2V, how much will the stored energy increase?",
        "options": ["4U", "8U", "9U", "2U"],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "Stored energy in a capacitor is given by U = (1/2) C V². If the potential difference is increased by 2V, the stored energy increases by a factor of four."
    },
    {
        "id": 34,
        "text": "একই অভ্যন্তরীণ রোধের চারটি ব্যাটারি শ্রেণিতে সংযুক্ত। ভুলক্রমে একটি ব্যাটারি বিপরীতভাবে সংযুক্ত করলে তড়িৎ প্রবাহের মান প্রথম অবস্থার কত গুণ হবে? / Four batteries with the same internal resistance are connected in series. If one battery is accidentally connected in reverse, how much will the electric current change compared to the initial value?",
        "options": ["2", "1/2", "1/3", "1"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "When one battery is reversed, the total voltage is reduced, so the current will be halved."
    },
    {
        "id": 35,
        "text": "1 x 10⁻³ ভরের একটি শোলাবল 2 x 10⁻⁴C চার্জে চার্জিত। বলটিকে অভিকর্ষীয় ক্ষেত্রে ঝুলন্ত অবস্থায় স্থির রাখতে কত N/C তড়িৎ ক্ষেত্রের প্রয়োজন ? / A ball of mass 1 × 10⁻³ kg is charged with 2 × 10⁻⁴ C. What is the required electric field in N/C to keep it stationary in the gravitational field?",
        "options": ["40", "49", "50", "100"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "The force due to the electric field must balance the gravitational force. F = qE = mg, where m is the mass, g is the acceleration due to gravity, q is the charge, and E is the electric field."
    },
    {
        "id": 36,
        "text": "PQRS আয়তক্ষেত্রে PQ=3m এবং QR=4m। P, Q & R বিন্দুতে যথাক্রমে +4C, -5C ও +3C চার্জ স্থাপন করলে S বিন্দুতে বিভব কত volt হবে? / In a rectangle PQRS, PQ = 3m and QR = 4m. If charges +4C, -5C, and +3C are placed at points P, Q, and R respectively, what will be the potential at point S?",
        "options": ["+2 × 10⁹", "-2 × 10⁹", "-9 × 10⁹", "+9 × 10⁹"],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "The potential at point S due to a point charge is given by V = kq/r, where k is Coulomb's constant, q is the charge, and r is the distance."
    },
    {
        "id": 37,
        "text": "A B দুইটি সমান্তরাল পাত ধারক। উভয়ই ধারকে প্রতিটি পাতের ক্ষেত্রফল 1.5 m²এবং পাতদ্বয়ের মধ্যবর্তী দূরত্ব 0.015 m। ধারক দুটিকে শ্রেণী সমবায়ে যুক্ত করলে তুল্য ধারকত্ব কত µF পাওয়া যাবে? (ε₀ = 8.8 × 10⁻¹²) / Two parallel plate capacitors A and B each have a plate area of 1.5 m², and the distance between the plates is 0.015 m. If they are connected in series, what will be the equivalent capacitance in µF?",
        "options": ["2.2 × 10⁻⁴", "4.4 × 10⁻⁴", "8.8 × 10⁻⁴", "176 × 10⁻⁴"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "The equivalent capacitance for capacitors in series is given by 1/C = 1/C1 + 1/C2."
    },
    {
        "id": 38,
        "text": "সমান্তরাল সমবায়ে যুক্ত 3Ω এবং 2Ω মানের দুইটি রোধকে একটি অজানা ভোল্টের কোষের সঙ্গে যুক্ত করলে তড়িৎ প্রবাহের মান 5A পাওয়া গেল। রোধ দুইটি শ্রেণীবদ্ধভাবে যুক্ত করলে কত A তড়িৎ প্রবাহ পাওয়া যেত? / Two resistors of 3Ω and 2Ω are connected in parallel to an unknown voltage source, resulting in a current of 5A. What would be the current if the resistors were connected in series?",
        "options": ["0.8", "1.2", "1.5", "4.2"],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "When resistors are connected in series, the total resistance is R_total = R1 + R2. The current can be calculated using Ohm's law, I = V / R."
    },
    {
        "id": 39,
        "text": "একই উপাদানে তৈরী দুইটি রোধ A ও B। তাদের দৈর্ঘ্যের অনুপাত 2:1 এবং ব্যাসের অনুপাত 4:1 হলে তাদের রোধের অনুপাত কত হবে? / Two resistors A and B are made of the same material. The ratio of their lengths is 2:1, and the ratio of their diameters is 4:1. What is the ratio of their resistances?",
        "options": ["32:1", "8:1", "1:4", "1:8"],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "The resistance of a wire is given by R = ρL / A, where ρ is the resistivity, L is the length, and A is the cross-sectional area. The area is proportional to the square of the diameter."
    },
    {
        "id": 40,
        "text": "একটি তামার তারে মুক্ত ইলেকট্রনের ঘনত্ব 3×10²⁹m⁻³ এবং প্রবাহ ঘনত্ব 1.65×10⁶A/m²। তারটিতে ইলেকট্রনের তাড়ন বেগ কত? / In a copper wire, the electron density is 3 × 10²⁹ m⁻³ and the current density is 1.65 × 10⁶ A/m². What is the drift velocity of electrons?",
        "options": ["3.43 × 10⁻³ m/s", "8.8 × 10⁻⁶ m/s", "4.37 × 10⁻⁵ m/s", "3.437 × 10⁻⁵ m/s"],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "Drift velocity (v_d) is given by the formula J = ne v_d, where J is the current density, n is the electron density, e is the charge of the electron, and v_d is the drift velocity."
    },
    {
        "id": 41,
        "text": "বেয়ারের পরীক্ষা দ্বারা কী করা হয়? (What is done by the Bayer's test?)",
        "options": [
            "অ্যালডিহাইড ও কিটোনের পার্থক্য নির্ণয় (Distinguishing between aldehydes and ketones)",
            "অ্যালিফ্যাটিক হাইড্রোকার্বনের অসম্পৃক্ততা নির্ণয় (Determining the unsaturation of aliphatic hydrocarbons)",
            "কার্বক্সিলিক গ্রুপের নিশ্চিতকরণ (Confirmation of carboxyl group)",
            "অ্যালকোহলের শ্রেণীকরণ (Classification of alcohols)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "Bayer's test is used to distinguish between aldehydes and ketones."
    },
    {
        "id": 42,
        "text": "NTP-তে 22400 mL NH3 এর ভর কত? (What is the mass of 22400 mL of NH3 at NTP?)",
        "options": [
            "17 g",
            "17 kg",
            "1.7 g",
            "1 kg"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "At NTP, 22400 mL of NH3 corresponds to 17 grams."
    },
    {
        "id": 43,
        "text": "N2, O2 এবং Ar গ্যাস মিশ্রণের মোট চাপ 760 মিমি পারদ এবং N2 ও O2 এর আংশিক চাপ যথাক্রমে 600 ও 150 মিমি পারদ হলে Ar এর আংশিক চাপ কত মিমি পারদ? (If the total pressure of a mixture of N2, O2, and Ar gases is 760 mmHg, and the partial pressures of N2 and O2 are 600 and 150 mmHg respectively, what is the partial pressure of Ar?)",
        "options": [
            "5",
            "10",
            "15",
            "20"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "By Dalton's law, the partial pressure of Ar is 760 - (600 + 150) = 10 mmHg."
    },
    {
        "id": 44,
        "text": "0.1M 250 mL দ্রবণ প্রস্তুত করতে কত গ্রাম NaOH লাগবে? (How many grams of NaOH are needed to prepare a 0.1M 250 mL solution?)",
        "options": [
            "0.25",
            "1.00",
            "2.50",
            "4.00"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "Using the molarity formula, moles = Molarity × Volume. For NaOH, moles = 0.1 × 0.250 = 0.025 moles. The mass required is 0.025 × 40 = 1.00 g."
    },
    {
        "id": 45,
        "text": "3.6 L বিশুদ্ধ পানির মোল সংখ্যা নিচের কোনটি? (What is the mole number of 3.6 L of pure water?)",
        "options": [
            "100",
            "200",
            "180",
            "360"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "The molar mass of water is 18 g/mol. The number of moles in 3.6 L of water is 3.6 × 1000 g ÷ 18 = 200 moles."
    },
    {
        "id": 46,
        "text": "কোনটি জারক নয়? (Which of the following is not an oxidizing agent?)",
        "options": [
            "K2Cr2O7",
            "ΗΝΟ3",
            "Na2S2O3",
            "KMnO4"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "Na2S2O3 is not an oxidizing agent, while others are."
    },
    {
        "id": 47,
        "text": "প্রমাণ আবস্থায় 4.4 g CO2 এর আয়তন কত লিটার? (What is the volume of 4.4 g of CO2 at standard conditions?)",
        "options": [
            "22.4",
            "11.2",
            "2.24",
            "0.224"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "The molar volume of CO2 at STP is 22.4 L. 4.4 g CO2 corresponds to 1 mole, hence the volume is 22.4 L."
    },
    {
        "id": 48,
        "text": "50 ppm ঘনমাত্রার 100 mL দ্রবণে কী পরিমাণ দ্রব থাকে? (What is the amount of solute in 100 mL solution with a concentration of 50 ppm?)",
        "options": [
            "500 µg",
            "5 g",
            "0.5 mg",
            "5 mg"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "50 ppm means 50 mg of solute per liter. For 100 mL, the solute mass is 50 µg × 100 = 500 µg."
    },
    {
        "id": 49,
        "text": "1 mol গ্লুকোজ জারিত করতে STP-তে কত লিটার O2 প্রয়োজন? (How many liters of O2 are needed to oxidize 1 mol of glucose at STP?)",
        "options": [
            "130.0",
            "134.4",
            "140.4",
            "22.4"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "The balanced reaction for glucose oxidation shows that 1 mol of glucose requires 6 mol of O2. At STP, 1 mol of O2 occupies 22.4 L, so 6 mol requires 134.4 L."
    },
    {
        "id": 50,
        "text": "একটি কার্বন-12 পরমাণুর ভর প্রায় কত গ্রাম? (What is the mass of a carbon-12 atom in grams?)",
        "options": [
            "1.66 × 10⁻²⁴",
            "6.02 × 10²³",
            "1.99 × 10²³",
            "1.99 × 10⁻²⁴"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "The mass of a carbon-12 atom is approximately 1.66 × 10⁻²⁴ grams."
    },
    {
        "id": 51,
        "text": "27°C তাপমাত্রায় 300 ml পরিমাণ একটি গ্যাসকে একই চাপে রেখে 7°C তাপমাত্রায় নিয়ে আসা হলে এর আয়তন (mL) কত? (What will be the volume (mL) of a gas at 7°C, given it was 300 mL at 27°C, keeping pressure constant?)",
        "options": [
            "280",
            "300",
            "370",
            "170"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "Using Charles' law, volume is directly proportional to temperature. The temperature in Kelvin must be used for calculations."
    },
    {
        "id": 52,
        "text": "নিচের কোনটি গ্যাসের গতিতত্ত্বের স্বীকার্য নয়? (Which of the following is not a postulate of kinetic theory of gases?)",
        "options": [
            "গ্যাস অণুসমূহ সর্বদা বিক্ষিপ্ত গতিতে বিচরণ করে (Gas molecules always move in a random motion)",
            "গ্যাস অণুসমূহের আয়তন পাত্রের আয়তনের তুলনায় নগণ্য (The volume of gas molecules is negligible compared to the container volume)",
            "গ্যাস অণুসমূহ একে অপরকে আকর্ষণ করে (Gas molecules attract each other)",
            "গ্যাস অণুসমূহের নিজেদের মধ্যে এবং পাত্রের দেওয়ালে সংঘর্ষ স্থিতিস্থাপক (Collisions between gas molecules and with the container walls are elastic)"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "According to the kinetic theory of gases, gas molecules do not attract or repel each other."
    },
    {
        "id": 53,
        "text": "নিচের কোনটি পানিতে থাকা জৈব বস্তুর উপস্থিতি নির্দেশ করে? (Which of the following indicates the presence of organic matter in water?)",
        "options": [
            "DO",
            "BOD",
            "COD",
            "TDS"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "BOD (Biological Oxygen Demand) indicates the presence of organic matter in water."
    },
    {
        "id": 54,
        "text": "10 মোল গ্যাস A এবং 30 মোল গ্যাস B দ্বারা গঠিত মিশ্রণের মোট চাপ 12 atm হলে উহাতে A গ্যাসের আংশিক চাপ কত atm ? (If a mixture of 10 mol of gas A and 30 mol of gas B has a total pressure of 12 atm, what is the partial pressure of gas A?)",
        "options": [
            "6",
            "2",
            "4",
            "3"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "Using Dalton’s law, the partial pressure of gas A is (10/40) × 12 = 3 atm."
    },
    {
        "id": 55,
        "text": "একই তাপমাত্রায় rms বেগের সঠিক ক্রম কোনটি? (What is the correct order of rms speed at the same temperature?)",
        "options": [
            "H2 > N2 > CO2",
            "CO2 > N2 > H2",
            "N2 > CO2 > H2",
            "N2 > H2 > CO2"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "At the same temperature, the rms speed is inversely proportional to the square root of the molecular mass. Thus, the order is H2 > N2 > CO2."
    },
    {
        "id": 56,
        "text": "সমআয়তন পাত্রে কোন গ্যাসটির চাপ সর্বনিম্ন? (Which gas has the lowest pressure in a container of the same volume?)",
        "options": [
            "71g Cl2",
            "8g He",
            "16g O2",
            "17g NH3"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "In the same volume, the gas with the lowest molar mass (He) will exert the lowest pressure due to its higher speed and lower density."
    },
    {
        "id": 57,
        "text": "কোন আয়নে +3 জারণ সংখ্যার পরমাণু আছে? (Which ion contains an atom with a +3 oxidation state?)",
        "options": [
            "ClO2-",
            "PO4-3",
            "S2O3-2",
            "NO2"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "The NO2 ion has a nitrogen atom with a +3 oxidation state."
    },
    {
        "id": 58,
        "text": "নরমাল চাপে 84g KNO3 কে উত্তপ্ত করলে কত L O2 উৎপন্ন হবে? (How many liters of O2 will be produced when 84g of KNO3 is heated at normal pressure?)",
        "options": [
            "9.314",
            "3.914",
            "1.934",
            "2.93"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "The decomposition of KNO3 produces O2. By using stoichiometric calculations, the volume of O2 produced at normal pressure is 1.934 L."
    },
    {
        "id": 59,
        "text": "অম্লীয় মাধ্যমে 6g FeSO4 কে জারিত করতে কত g K2Cr2O7 প্রয়োজন? (How many grams of K2Cr2O7 are required to oxidize 6g of FeSO4 in acidic medium?)",
        "options": [
            "0.97",
            "3.80",
            "5.45",
            "1.94"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "By using the stoichiometry of the redox reaction, 5.45 g of K2Cr2O7 is required to oxidize 6 g of FeSO4."
    },
    {
        "id": 60,
        "text": "রক্তে গ্লুকোজের ঘনমাত্রা 5 mM হলে, ppm একত্রে কত হবে? (If the glucose concentration in blood is 5 mM, what is the equivalent concentration in ppm?)",
        "options": [
            "9",
            "90",
            "900",
            "9000"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "1 mM is equivalent to 180 ppm for glucose, so 5 mM will be 900 ppm."
    },
    {
        "id": 61,
        "text": "কোষের মস্তিষ্ক- (What is known as the brain of the cell?)",
        "options": [
            "লাইসোসোম (Lysosome)",
            "নিউক্লিয়াস (Nucleus)",
            "পারঅক্সিসোম (Peroxisome)",
            "গ্লাইঅক্সিসোম (Glyoxysome)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "নিউক্লিয়াস কোষের সমস্ত কার্যক্রম নিয়ন্ত্রণ করে, তাই এটিকে কোষের মস্তিষ্ক বলা হয়। (The nucleus controls all the activities of the cell, hence it is called the brain of the cell.)"
    },
    {
        "id": 62,
        "text": "কোষ গহবরের আবরণকে বলে- (The covering of the cell cavity is called?)",
        "options": [
            "ক্লোরোপ্লাস্ট (Chloroplast)",
            "টনোপ্লাস্ট (Tonoplast)",
            "লিউকোপ্লাস্ট (Leucoplast)",
            "সিমপ্লাস্ট (Symplast)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "টনোপ্লাস্ট কোষের গহবরকে ঘিরে থাকে এবং পানির সাথে অন্যান্য দ্রব্য নিয়ন্ত্রণ করে। (Tonoplast surrounds the cell cavity and controls the movement of water and other substances.)"
    },
    {
        "id": 63,
        "text": "মাসকুলার ডিসট্রফি কী? (What is muscular dystrophy?)",
        "options": [
            "সমগ্র দেহে ঘন লোমের উপস্থিতি (Presence of thick hair all over the body)",
            "অস্বাভাবিক মূত্রত্যাগ (Abnormal urination)",
            "দুর্লভ জিনঘটিত অসুখ (Rare genetic disorder)",
            "পুরুষ ধীরে ধীরে স্ত্রীতে পরিণত হয় (A male gradually turns into a female)"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "মাসকুলার ডিসট্রফি এক ধরনের দুর্লভ জিনঘটিত অসুখ যা পেশীর দুর্বলতা সৃষ্টি করে। (Muscular dystrophy is a rare genetic disorder that causes muscle weakness.)"
    },
    {
        "id": 64,
        "text": "কার্বোহাইড্রেট ফ্যাক্টরি কাকে বলে? (What is called the carbohydrate factory?)",
        "options": [
            "গলগি বডি (Golgi body)",
            "লাইসোসোম (Lysosome)",
            "রাইবোসোম (Ribosome)",
            "মাইটোকন্ড্রিয়া (Mitochondria)"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "গলগি বডি কোষের মধ্যে কার্বোহাইড্রেট এবং অন্যান্য মৌলিক পদার্থ সংশ্লেষণ ও প্রক্রিয়াকরণে সাহায্য করে। (Golgi body helps in the synthesis and processing of carbohydrates and other essential substances in the cell.)"
    },
    {
        "id": 65,
        "text": "নিউক্লিওলাস পুণর্গঠন অঞ্চলকে বলে- (The region of nucleolus reconstruction is called?)",
        "options": [
            "সেন্ট্রোমিয়ার (Centromere)",
            "মুখ্যকুঞ্চন (Primary constriction)",
            "গৌণকুঞ্চন (Secondary constriction)",
            "ক্রোমোমিয়ার (Chromomer)"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "ক্রোমোমিয়ার অংশে নিউক্লিওলাসের পুণর্গঠন হয়। (The reconstruction of the nucleolus occurs in the chromomer region.)"
    },
    {
        "id": 66,
        "text": "ক্যাম্বিয়ামের ক্ষেত্রে কোনটি সঠিক নয়? (Which is not correct in the case of cambium?)",
        "options": [
            "স্থায়ী টিস্যু (Permanent tissue)",
            "ভাজক টিস্যু (Meristematic tissue)",
            "জাইলেম ও ফ্লোয়েমের মাঝখানে অবস্থান করে (Located between xylem and phloem)",
            "দ্বিবীজপত্রী উদ্ভিদের কাণ্ডে পাওয়া যায় (Found in the stems of dicot plants)"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "ক্যাম্বিয়াম একটি ভাজক টিস্যু, যা দ্বিবীজপত্রী উদ্ভিদের কাণ্ডে পাওয়া যায়। (Cambium is a meristematic tissue found in the stems of dicot plants.)"
    },
    {
        "id": 67,
        "text": "পলিপেপ্টাইড ট্রান্সলেশনের জন্য টার্মিনেশন কোডন কোনটি? (Which is the termination codon for polypeptide translation?)",
        "options": [
            "AGU",
            "UGG",
            "UGA",
            "AUG"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "UGA একটি টার্মিনেশন কোডন, যা পলিপেপ্টাইড ট্রান্সলেশনের শেষ সংকেত দেয়। (UGA is a termination codon that signals the end of polypeptide translation.)"
    },
    {
        "id": 68,
        "text": "ডিঅক্সিরাইবোজ সুগারে অক্সিজেন অনুপস্থিত থাকে- (In deoxyribose sugar, oxygen is absent at which position?)",
        "options": [
            "প্রথম কার্বনে (On the first carbon)",
            "দ্বিতীয় কার্বনে (On the second carbon)",
            "চতুর্থ কার্বনে (On the fourth carbon)",
            "পঞ্চম কার্বনে (On the fifth carbon)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "ডিঅক্সিরাইবোজ সুগারে অক্সিজেন দ্বিতীয় কার্বনে অনুপস্থিত থাকে। (In deoxyribose sugar, oxygen is absent at the second carbon.)"
    },
    {
        "id": 69,
        "text": "দ্বিবীজপত্রী উদ্ভিদের মূলের পরিবহন কলাগুচ্ছের সংখ্যা- (How many vascular bundles are found in the root of dicot plants?)",
        "options": [
            "4",
            "8",
            "10",
            "12"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "দ্বিবীজপত্রী উদ্ভিদের মূলে সাধারণত ৪টি পরিবহন কলাগুচ্ছ থাকে। (In the roots of dicot plants, there are typically 4 vascular bundles.)"
    },
    {
        "id": 70,
        "text": "যে জিন অপর জিনের বৈশিষ্ট্য প্রকাশে বাধা প্রদান করে, সেই জিনকে বলে- (The gene that inhibits the expression of another gene is called?)",
        "options": [
            "হাইপোস্ট্যাটিক জিন (Hypostatic gene)",
            "এপিস্ট্যাটিক জিন (Epistatic gene)",
            "লিথাল জিন (Lethal gene)",
            "সেমিলিথাল জিন (Semilethal gene)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "এপিস্ট্যাটিক জিন অপর জিনের বৈশিষ্ট্য প্রকাশে বাধা প্রদান করে। (Epistatic gene inhibits the expression of the characteristics of another gene.)"
    },
    {
        "id": 71,
        "text": "কোনটি স্টার্ট কোডন? (Which is the start codon?)",
        "options": [
            "UAA",
            "UAG",
            "UGA",
            "AUG"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "AUG কোডনটি স্টার্ট কোডন হিসেবে পরিচিত, যা প্রোটিন সংশ্লেষণের শুরু নির্দেশ করে। (The AUG codon is recognized as the start codon, signaling the beginning of protein synthesis.)"
    },
    {
        "id": 72,
        "text": "কোন F1 জীবকে তার প্যারেন্টের সাথে ক্রস করানোর নাম- (What is the name of crossing an F1 individual with its parent?)",
        "options": [
            "টেস্ট ক্রস (Test cross)",
            "ব্যাক ক্রস (Back cross)",
            "মনোহাইব্রিড ক্রস (Monohybrid cross)",
            "ডাইহাইব্রিড ক্রস (Dihybrid cross)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "ব্যাক ক্রস হলো F1 জীবকে তার প্যারেন্টের সাথে ক্রস করা। (Back cross is crossing an F1 individual with its parent.)"
    },
    {
        "id": 73,
        "text": "দ্বৈত প্রচ্ছন্ন এপিস্ট্যাসিস এর অনুপাত হলো- (The ratio for dual recessive epistasis is?)",
        "options": [
            "১৩ঃ৩ (13:3)",
            "৯ঃ৭ (9:7)",
            "১ঃ২ঃ১ (1:2:1)",
            "১ঃ৪ঃ৬ঃ৪ঃ১ (1:4:6:4:1)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "দ্বৈত প্রচ্ছন্ন এপিস্ট্যাসিস এর অনুপাত ১৩ঃ৩ হয়। (The ratio for dual recessive epistasis is 13:3.)"
    },
    {
        "id": 74,
        "text": "কোষ প্রাচীরের ক্ষুদ্রতম গাঠনিক একক হলো- (The smallest structural unit of the cell wall is?)",
        "options": [
            "Micelle",
            "Micro fibril",
            "Fibril",
            "Fibre"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "Micro fibril হলো কোষ প্রাচীরের ক্ষুদ্রতম গাঠনিক একক। (Microfibril is the smallest structural unit of the cell wall.)"
    },
    {
        "id": 75,
        "text": "পিঁয়াজের মূলের মেটাফেজ পর্যায়ে ক্রোমসোম সংখ্যা- (The number of chromosomes in the metaphase stage of onion root is?)",
        "options": [
            "১০ (10)",
            "১২ (12)",
            "১৪ (14)",
            "১৬ (16)"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "পিঁয়াজের মূলের মেটাফেজ পর্যায়ে ১৪টি ক্রোমসোম থাকে। (In the metaphase stage of the onion root, there are 14 chromosomes.)"
    },
    {
        "id": 76,
        "text": "পাতায় পানি-পত্ররন্ধ্রের অবস্থান- (The location of stomata in the leaf is?)",
        "options": [
            "উর্ধব ত্বক (Upper epidermis)",
            "নিম্নত্বক (Lower epidermis)",
            "পত্রবৃন্ত (Petiole)",
            "কিনারা (Edge)"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "পানির রোধ এবং গ্যাসের প্রবাহ নিয়ন্ত্রণের জন্য পত্ররন্ধ্র সাধারণত পাতার নিম্নত্বকে থাকে। (Stomata are usually located in the lower epidermis of the leaf to regulate water loss and gas exchange.)"
    },
    {
        "id": 77,
        "text": "ফুলের পাপড়ির রং বেগুনী হয় কোনটির প্রভাবে? (Which factor influences the purple color of flower petals?)",
        "options": [
            "নিউট্রাল pH (Neutral pH)",
            "এসিডিক pH (Acidic pH)",
            "ক্ষারীয় pH (Alkaline pH)",
            "জ্যান্থোফিল (Xanthophyll)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "এসিডিক pH এর প্রভাবে ফুলের পাপড়ির রং বেগুনী হয়। (The purple color of flower petals is influenced by acidic pH.)"
    },
    {
        "id": 78,
        "text": "রঙ্গিন জিন থাকা সত্ত্বেও হোয়াইট লেগহর্ন মুরগীর পালক সাদা হয় কেন? (Why do the feathers of White Leghorn chickens appear white despite having colored genes?)",
        "options": [
            "সমপ্রকটতা (Incomplete dominance)",
            "পরিপূরক জিন (Complementary gene)",
            "প্রচ্ছন্ন এপিস্ট্যাসিস (Recessive epistasis)",
            "প্রকট এপিস্ট্যাসিস (Dominant epistasis)"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "প্রচ্ছন্ন এপিস্ট্যাসিস এর কারণে রঙ্গিন জিন থাকা সত্ত্বেও হোয়াইট লেগহর্ন মুরগীর পালক সাদা হয়। (Due to recessive epistasis, the feathers of White Leghorn chickens appear white despite having colored genes.)"
    },
    {
        "id": 79,
        "text": "ঘাস ফড়িং এর লিঙ্গ নির্ধারণ পদ্ধটি কোনটি? (What is the sex determination method of grasshoppers?)",
        "options": [
            "XX-XY",
            "XX-XO",
            "ZZ-ZO",
            "ZZ-ZW"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "ঘাস ফড়িং-এ XX-XO লিঙ্গ নির্ধারণ পদ্ধতি থাকে। (Grasshoppers use the XX-XO method of sex determination.)"
    },
    {
        "id": 80,
        "text": "প্রচ্ছন্ন লিথাল জিন কোন অবস্থায় জীবের মৃত্যু ঘটায়? (Under which condition does a recessive lethal gene cause the death of an organism?)",
        "options": [
            "হোমোজাইগাস (Homozygous)",
            "হেটেরোজাইগাস (Heterozygous)",
            "হেমিজাইগাস (Hemizygous)",
            "মনোজাইগাস (Monozygous)"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "প্রচ্ছন্ন লিথাল জিন সাধারণত হোমোজাইগাস অবস্থায় জীবের মৃত্যু ঘটায়। (Recessive lethal genes typically cause death in the homozygous condition.)"
    },
    {
        "id": 81,
        "text": "জীবের জিন মিউটেশন এর ফলে কোন ধরনের বিবর্তন ঘটে? (What type of evolution occurs as a result of genetic mutation in organisms?)",
        "options": [
            "ম্যাক্রো (Macro)",
            "মাইক্রো (Micro)",
            "মেগা (Mega)",
            "ন্যানো (Nano)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "জিন মিউটেশনের ফলে মাইক্রো বিবর্তন ঘটে, যা প্রজাতির মধ্যে ছোট ছোট পরিবর্তন নির্দেশ করে। (Genetic mutations result in microevolution, indicating small changes within a species.)"
    },
    {
        "id": 82,
        "text": "\"প্রত্যেক ক্রোমোজোমের একটি নিজেস্ব সত্তা আছে\"- উক্তিটি কোন বিজ্ঞানির? (The statement 'Each chromosome has a unique identity' is attributed to which scientist?)",
        "options": [
            "সাটন (Sutton)",
            "বেটসন (Bateson)",
            "বোভারী (Boveri)",
            "মেন্ডেল (Mendel)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "এটি সাটন ও বোভারীর থিওরি অনুযায়ী, যেখানে তারা ক্রোমোজোমের পৃথক ভূমিকা ব্যাখ্যা করেছিলেন। (This is attributed to Sutton and Boveri, who explained the distinct role of chromosomes.)"
    },
    {
        "id": 83,
        "text": "নিচের কোনটি সেক্স-লিঙ্কড জিনের উদাহরণ নয়? (Which of the following is not an example of a sex-linked gene?)",
        "options": [
            "বর্ণান্ধতা (Color blindness)",
            "জুভেনাইল গ্লকোমা (Juvenile glaucoma)",
            "মায়োপিয়া (Myopia)",
            "মায়োকার্ডিয়াল ডিজঅর্ডার (Myocardial disorder)"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "মায়োকার্ডিয়াল ডিজঅর্ডার সেক্স-লিঙ্কড নয়। (Myocardial disorder is not sex-linked.)"
    },
    {
        "id": 84,
        "text": "স্তন্যপায়ীর ডিম ও নটোকর্ড আবিষ্কার করেন যে বিজ্ঞানী- (Which scientist discovered mammalian eggs and notochord?)",
        "options": [
            "আঁন্দ্রে ভেসালিয়াস (André Vesalius)",
            "কার্ল আর্নস্ট বেয়ার (Karl Ernst Baer)",
            "লু্ইপাস্তর (Louis Pasteur)",
            "সালিম আলী (Salim Ali)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "কার্ল আর্নস্ট বেয়ার স্তন্যপায়ীর ডিম ও নটোকর্ড আবিষ্কার করেছিলেন। (Karl Ernst Baer discovered mammalian eggs and the notochord.)"
    },
    {
        "id": 85,
        "text": "বাষ্ট ফাইবার নামে পরিচিত- (What is known as bast fiber?)",
        "options": [
            "ক্লোরেন কাইমা (Cloeren cyma)",
            "ফ্লোয়েম ফাইবার (Phloem fiber)",
            "কোলেন কাইমা (Colen cyma)",
            "জাইলেম ফাইবার (Xylem fiber)"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "বাষ্ট ফাইবার হলো ফ্লোয়েম ফাইবার। (Bast fiber refers to phloem fibers.)"
    },
    {
        "id": 86,
        "text": "প্রোটোডার্ম কি? (What is a protoderm?)",
        "options": [
            "উৎপত্তি অনুসারে এক প্রকার ভাজক টিস্যু (A type of meristematic tissue based on origin)",
            "অবস্থান অনুসারে এক প্রকার ভাজক টিস্যু (A type of meristematic tissue based on position)",
            "কোষ বিভাজন অনুসারে এক প্রকার ভাজক টিস্যু (A type of meristematic tissue based on cell division)",
            "কাজ অনুসারে এক প্রকার ভাজক টিস্যু (A type of meristematic tissue based on function)"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "প্রোটোডার্ম হলো স্থান অনুযায়ী একটি ভাজক টিস্যু, যা বাইরের ত্বক তৈরি করে। (Protoderm is a type of meristematic tissue based on position that forms the outer skin.)"
    },
    {
        "id": 87,
        "text": "অন্তঃত্বকের নিচে এবং ভাস্কুলার বান্ডলের বাহিরে এক বা একাধিক স্তরে বিন্যস্ত বিশেষ টিস্যুকে কি বলে? (What is the tissue called that is arranged in one or more layers beneath the endoderm and outside the vascular bundles?)",
        "options": [
            "প্রোটোজাইলেম (Protoxylem)",
            "মজ্জা (Pith)",
            "মেটাজাইলেম (Metaxylem)",
            "পেরিসাইকল (Pericycle)"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "এটি পেরিসাইকল নামে পরিচিত। (This tissue is called pericycle.)"
    },
    {
        "id": 88,
        "text": "Protoplasm শব্দটি কোন নামের সাথে যুক্ত? (Which name is associated with the term protoplasm?)",
        "options": [
            "Robert Hooke",
            "Dujardin",
            "Robert Brown",
            "Purkinjo"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "Protoplasm শব্দটি Dujardin এর সাথে যুক্ত। (The term protoplasm is associated with Dujardin.)"
    },
    {
        "id": 89,
        "text": "চার্লস ডারউইনের \"Origin of species by means of natural selection\" নামক গ্রন্থটি কত সালে প্রকাশিত হয়? (In which year was Charles Darwin's book 'Origin of Species by Means of Natural Selection' published?)",
        "options": [
            "1851",
            "1855",
            "1859",
            "1863"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "চার্লস ডারউইনের গ্রন্থটি ১৮৫৯ সালে প্রকাশিত হয়। (Charles Darwin's book was published in 1859.)"
    },
    {
        "id": 90,
        "text": "বংশগতভাবে সঞ্চারণশীল কোন রোগ X ক্রোমোজোমের একটি প্রচ্ছন্ন মিউট্যান্ট জিনের কারণে হয়? (Which hereditary disease is caused by a recessive mutant gene on the X chromosome?)",
        "options": [
            "রক্তশূন্যতা (Anemia)",
            "হিমোফিলিয়া (Hemophilia)",
            "অটিজম (Autism)",
            "HIV"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "হিমোফিলিয়া একটি সেক্স-লিঙ্কড রোগ, যা X ক্রোমোজোমে প্রচ্ছন্ন মিউট্যান্ট জিন দ্বারা ঘটিত হয়। (Hemophilia is a sex-linked disorder caused by a recessive mutant gene on the X chromosome.)"
    },
    {
        "id": 91,
        "text": "Which sentence uses the word 'rate' correctly?\n\nHype of rainforests is rated\n\nThe rate of destruction of rainforests is alarming\n\nThe interested rate services are available.\n\nYou are asked to rate the character of your friend.",
        "options": [
            "Hype of rainforests is rated",
            "The rate of destruction of rainforests is alarming",
            "The interested rate services are available.",
            "You are asked to rate the character of your friend."
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "The correct sentence is 'The rate of destruction of rainforests is alarming,' where 'rate' refers to the speed or extent of something happening."
    },
    {
        "id": 92,
        "text": "Which of the following is the most suitable title for the extract?\n\nThe development of a programme in environmental studies within a science curriculum\n\nChildren's ideas about the rainforests and the implications for course design\n\nThe extent to which children have been misled by the media\n\nRainforests and their representation.",
        "options": [
            "The development of a programme in environmental studies within a science curriculum",
            "Children's ideas about the rainforests and the implications for course design",
            "The extent to which children have been misled by the media",
            "Rainforests and their representation"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": ""
    },
    {
        "id": 93,
        "text": "Which of the following uses the noun form of 'confront' properly?\n\nThe confronted never forgive\n\nThe logic of events will lead them to a confronatation with the enemy\n\nThe confronting parties are in deep trouble\n\nThe frontiers are open.",
        "options": [
            "The confronted never forgive",
            "The logic of events will lead them to a confronatation with the enemy",
            "The confronting parties are in deep trouble",
            "The frontiers are open"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "The correct sentence is 'The logic of events will lead them to a confrontation with the enemy,' where 'confrontation' is the noun form of 'confront.'"
    },
    {
        "id": 94,
        "text": "Which one is the correct noun form of 'equivalent'?\n\nEquidistance\n\nEquisition\n\nEquivalence\n\nEquivalention.",
        "options": [
            "Equidistance",
            "Equisition",
            "Equivalence",
            "Equivalention"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "The correct noun form of 'equivalent' is 'equivalence.'"
    },
    {
        "id": 95,
        "text": "Which one is the acceptable translation of 'It is also possible that some of these ideas will be mistaken'?\n\nএটাও সম্ভব যে এই ধারণাগুলো মধ্যে ভুল হবে\n\nএটাও সম্ভব যে এই ধারণাগুলো ভুল\n\nএটাও সম্ভব যে এই ভুল ধারণাগুলো জানা যাবে।\n\nকিছু সম্ভাব্য ধারণা ভুল হবে।",
        "options": [
            "এটাও সম্ভব যে এই ধারণাগুলো মধ্যে ভুল হবে",
            "এটাও সম্ভব যে এই ধারণাগুলো ভুল",
            "এটাও সম্ভব যে এই ভুল ধারণাগুলো জানা যাবে।",
            "কিছু সম্ভাব্য ধারণা ভুল হবে।"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "The correct translation is 'এটাও সম্ভব যে এই ধারণাগুলো মধ্যে ভুল হবে', which accurately reflects the meaning of the original sentence."
    },
    {
        "id": 96,
        "text": "Which one is the acceptable noun phrase?\n\nGraphic question\n\nGraphic answer\n\nGraphic desire\n\nGraphic presentation",
        "options": [
            "Graphic question",
            "Graphic answer",
            "Graphic desire",
            "Graphic presentation"
        ],
        "correctAnswer": 3,
        "points": 1,
        "explanation": "'Graphic presentation' is the correct noun phrase, as 'presentation' fits the context of being a noun."
    },
    {
        "id": 97,
        "text": "Which one contains the correct use of 'tropical'?\n\nThe tropic of discipline is very important for the student\n\nThe accept the tropic\n\nWe went to accept the tropic\n\nThe tropic always disturbes us",
        "options": [
            "The tropic of discipline is very important for the student",
            "The accept the tropic",
            "We went to accept the tropic",
            "The tropic always disturbes us"
        ],
        "correctAnswer": 1,
        "points": 1,
        "explanation": "'The tropic of discipline is very important for the student' correctly uses the word 'tropic,' referring to a region, although 'tropical' would have been more appropriate."
    },
    {
        "id": 98,
        "text": "'Being ardent' means-\n\nbeing intense\n\nbeing lukewarm\n\nbeing dispassionate\n\nBeing cool",
        "options": [
            "being intense",
            "being lukewarm",
            "being dispassionate",
            "Being cool"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "'Being ardent' means being intense, passionate, or enthusiastic."
    },
    {
        "id": 99,
        "text": "'He had many acquaintances but few really close friends.' This is an example of-\n\nCompound sentence\n\nComplex Sentence\n\nSimple Sentence\n\nContracted Sentence",
        "options": [
            "Compound sentence",
            "Complex Sentence",
            "Simple Sentence",
            "Contracted Sentence"
        ],
        "correctAnswer": 0,
        "points": 1,
        "explanation": "'He had many acquaintances but few really close friends' is a compound sentence as it connects two independent clauses using a conjunction."
    },
    {
        "id": 100,
        "text": "What part of speech is 'massive' in the phrase 'massive diasporas'?\n\nNoun\n\nAdverb\n\nAdjective\n\nVerb",
        "options": [
            "Noun",
            "Adverb",
            "Adjective",
            "Verb"
        ],
        "correctAnswer": 2,
        "points": 1,
        "explanation": "'Massive' is an adjective in the phrase 'massive diasporas' as it describes the noun 'diasporas.'"
    },
    // Add more questions here with explanations and images...
];

let answers = {};
let timeLeft = 60 * 60; // 60 minutes
let examSubmitted = false;
let timer;

function initExam() {
    renderQuestions();
    startTimer();
    addAnimations();
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    if (!container) return; // Ensure the container exists

    container.innerHTML = questions.map(question => `
        <div class="question-card">
            <div class="question-header">
                <span class="question-number">Question ${question.id}</span>
                <span class="points-badge">${question.points} points</span>
            </div>
            <div class="question-text">${question.text}</div>
            ${question.image ? `<img src="${question.image}" alt="Question Image" class="question-image">` : ''}
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-question="${question.id}" data-option="${index}" onclick="selectOption(${question.id}, ${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function selectOption(questionId, optionIndex) {
    if (examSubmitted) return;

    const previousAnswer = answers[questionId];
    answers[questionId] = optionIndex;

    // Update UI with animation
    document.querySelectorAll(`[data-question="${questionId}"]`).forEach(option => {
        option.classList.remove('selected');
    });

    const selectedOption = document.querySelector(`[data-question="${questionId}"][data-option="${optionIndex}"]`);
    selectedOption.classList.add('selected');

    // Add subtle animation
    selectedOption.style.transform = 'scale(1.02)';
    setTimeout(() => {
        selectedOption.style.transform = 'scale(1)';
    }, 200);

    // Update attempted count with animation
    const attemptedCount = document.getElementById('attempted-count');
    attemptedCount.style.transform = 'scale(1.2)';
    attemptedCount.textContent = Object.keys(answers).length;
    setTimeout(() => {
        attemptedCount.style.transform = 'scale(1)';
    }, 200);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('time-left').textContent = timeDisplay;

    // Add warning color when time is running out
    const statusPills = document.querySelectorAll('.status-pill');
    if (timeLeft < 300) { // Less than 5 minutes
        statusPills.forEach(pill => {
            pill.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        });
    }
}

function calculateScore() {
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach(question => {
        if (answers[question.id] === question.correctAnswer) {
            score += question.points;
            correctAnswers++;
        } else if (answers[question.id] !== undefined) {
            score -= 0.25; // Negative marking
            wrongAnswers++;
        }
    });

    return {
        score: score.toFixed(2),
        totalQuestions: questions.length,
        correctAnswers,
        wrongAnswers,
        unattempted: questions.length - (correctAnswers + wrongAnswers)
    };
}

function submitExam() {
    clearInterval(timer);
    examSubmitted = true;
    const results = calculateScore();

    // Show results with animation
    const container = document.getElementById('questions-container');
    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = `
            <div class="result-card">
                <h2><i class="fas fa-award"></i> Exam Results</h2>
                <div class="stats-grid">
                    <div class="stat-box">
                        <p>Final Score</p>
                        <h3>${results.score}</h3>
                    </div>
                    <div class="stat-box">
                        <p>Time Taken</p>
                        <h3>${formatTime(3600 - timeLeft)}</h3>
                    </div>
                </div>
                <div class="stats-grid">
                    <div class="stat-box">
                        <p><i class="fas fa-check-circle"></i> Correct Answers</p>
                        <h3 style="color: #059669">${results.correctAnswers}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-times-circle"></i> Wrong Answers</p>
                        <h3 style="color: #dc2626">${results.wrongAnswers}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-minus-circle"></i> Unattempted</p>
                        <h3 style="color: #6b7280">${results.unattempted}</h3>
                    </div>
                    <div class="stat-box">
                        <p><i class="fas fa-percentage"></i> Accuracy</p>
                        <h3 style="color: #0891b2">${calculateAccuracy(results)}%</h3>
                    </div>
                </div>
                <div class="answer-review">
                    <h3><i class="fas fa-list"></i> Answer Review</h3>
                    ${generateAnswerReview()}
                </div>
            </div>
        `;
        container.style.opacity = '1';
    }, 500);

    // Hide submit button with animation
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.style.transform = 'scale(0.8)';
    submitBtn.style.opacity = '0';
    setTimeout(() => {
        submitBtn.style.display = 'none';
    }, 300);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function calculateAccuracy(results) {
    if (results.correctAnswers + results.wrongAnswers === 0) return 0;
    return Math.round((results.correctAnswers / (results.correctAnswers + results.wrongAnswers)) * 100);
}

function generateAnswerReview() {
    return questions.map(question => `
        <div class="question-card ${answers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}">
            <div class="question-header">
                <span class="question-number">Question ${question.id}</span>
                <span class="result-icon">
                    ${answers[question.id] === question.correctAnswer 
                        ? '<i class="fas fa-check-circle" style="color: #059669"></i>' 
                        : '<i class="fas fa-times-circle" style="color: #dc2626"></i>'}
                </span>
            </div>
            <div class="question-text">${question.text}</div>
            ${question.image ? `<img src="${question.image}" alt="Question Image" class="question-image">` : ''}
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option ${
                        index === question.correctAnswer ? 'correct' : 
                        index === answers[question.id] ? 'incorrect' : ''
                    }">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span>${option}</span>
                        ${index === question.correctAnswer 
                            ? '<i class="fas fa-check" style="color: #059669"></i>' 
                            : index === answers[question.id] 
                                ? '<i class="fas fa-times" style="color: #dc2626"></i>' 
                                : ''} 
                    </div>
                `).join('')}
            </div>
            <!-- Explanation Section after Submission -->
            <div class="question-explanation">
                <strong>Explanation:</strong> <p>${question.explanation}</p>
            </div>
        </div>
    `).join('');
}

function addAnimations() {
    // Add hover animations to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('mouseenter', () => {
            if (!examSubmitted && !option.classList.contains('selected')) {
                option.style.transform = 'translateX(5px)';
            }
        });
        option.addEventListener('mouseleave', () => {
            if (!examSubmitted && !option.classList.contains('selected')) {
                option.style.transform = 'translateX(0)';
            }
        });
    });
}

// Initialize Exam on page load
document.addEventListener('DOMContentLoaded', initExam);

// Submit Button Event Listener
document.getElementById('submit-btn').addEventListener('click', () => {
    if (!examSubmitted) {
        submitExam();
    }
});