export interface TestCase {
    id: string;
    description: string;
    type: 'Positive' | 'Negative' | 'UI';
    input: string;
    expected: string;
    category: string;
    length: 'S' | 'M' | 'L';
    focus: string; // Keep for backward compatibility if needed, or remove. keeping for now.
    justification: string;
    coveredBy: string;
}

export const testCases: TestCase[] = [
    // --- POSITIVE SCENARIOS (24) ---
    {
        id: 'Pos_Fun_01',
        description: 'Simple sentence: I go home',
        type: 'Positive',
        input: 'mama gedhara yanavaa.',
        expected: 'මම ගෙදර යනවා.',
        category: 'Sentence structures',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• The sentence meaning is correctly preserved.\n• Sinhala spelling and word segmentation are correct.\n• Punctuation is maintained.',
        coveredBy: '• Sentence structures - Accuracy validation\n• S (≤30 characters)\n• Grammar correctness'
    },
    {
        id: 'Pos_Fun_02',
        description: 'Simple sentence: I want rice',
        type: 'Positive',
        input: 'mata bath oonee.',
        expected: 'මට බත් ඕනේ.',
        category: 'Sentence structures',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• The request meaning is accurate.\n• "mata" -> "මට" and "bath" -> "බත්" converted correctly.\n• No spelling errors observed.',
        coveredBy: '• Sentence structures - Accuracy validation\n• S (≤30 characters)\n• Basic vocabulary check'
    },
    {
        id: 'Pos_Fun_03',
        description: 'Compound sentence: Rain and home',
        type: 'Positive',
        input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.',
        expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.',
        category: 'Sentence structures',
        length: 'M',
        focus: 'Accuracy validation',
        justification: '• Complex structure with conjunction "hambeyi" handled correctly.\n• Meaning of "raining" and "not going" is preserved.\n• Comma placement is correct.',
        coveredBy: '• Sentence structures - Accuracy validation\n• M (31-299 characters)\n• Compound sentence logic'
    },
    {
        id: 'Pos_Fun_04',
        description: 'Complex sentence: Condition',
        type: 'Positive',
        input: 'oya enavaanam mama balan innavaa.',
        expected: 'ඔය එනවානම් මම බලන් ඉන්නවා.',
        category: 'Sentence structures',
        length: 'M',
        focus: 'Accuracy validation',
        justification: '• Conditional "enavaanam" (if you come) translated accurately.\n• Future intent "balan innavaa" is correct.\n• No grammatical errors.',
        coveredBy: '• Sentence structures - Accuracy validation\n• M (31-299 characters)\n• Conditional clauses'
    },
    {
        id: 'Pos_Fun_05',
        description: 'Question: How are you?',
        type: 'Positive',
        input: 'oyaata kohomadha?',
        expected: 'ඔයාට කොහොමද?',
        category: 'Interrogative/Imperative',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• The greeting meaning is preserved.\n• Sinhala spelling and punctuation are correct.\n• The question mark remains correctly placed.',
        coveredBy: '• Greeting / request / response\n• Interrogative (question)\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_06',
        description: 'Command: Come immediately',
        type: 'Positive',
        input: 'vahaama enna.',
        expected: 'වහාම එන්න.',
        category: 'Interrogative/Imperative',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Imperative tone text is preserved.\n• "vahaama" correctly translates to "වහාම".\n• Punctuation is correct.',
        coveredBy: '• Interrogative/Imperative - Accuracy validation\n• S (≤30 characters)\n• Command structure'
    },
    {
        id: 'Pos_Fun_07',
        description: 'Positive: I do that',
        type: 'Positive',
        input: 'mama ehema karanavaa.',
        expected: 'මම එහෙම කරනවා.',
        category: 'Positive/Negative',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Positive affirmation is correctly translated.\n• Word order follows Sinhala grammar (Subject-Object-Verb).\n• Spelling is accurate.',
        coveredBy: '• Positive/Negative - Accuracy validation\n• S (≤30 characters)\n• Affirmative statements'
    },
    {
        id: 'Pos_Fun_08',
        description: 'Negative: I do not do that',
        type: 'Positive',
        input: 'mama ehema karannee naehae.',
        expected: 'මම එහෙම කරන්නේ නැහැ.',
        category: 'Positive/Negative',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Negative form "naehae" (naha) is correctly applied.\n• Meaning "check" is correct.\n• No syntax errors.',
        coveredBy: '• Positive/Negative - Accuracy validation\n• S (≤30 characters)\n• Negation logic'
    },
    {
        id: 'Pos_Fun_09',
        description: 'Greeting: Ayubowan',
        type: 'Positive',
        input: 'aayuboovan!',
        expected: 'ආයුබෝවන්!',
        category: 'Daily Usage',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Standard cultural greeting converted perfectly.\n• Exclamation mark preserved.\n• Phonetics match expected output.',
        coveredBy: '• Daily Usage - Accuracy validation\n• S (≤30 characters)\n• Cultural greetings'
    },
    {
        id: 'Pos_Fun_10',
        description: 'Request: Can you help?',
        type: 'Positive',
        input: 'mata udhavvak karanna puLuvandha?',
        expected: 'මට උදව්වක් කරන්න පුළුවන්ද?',
        category: 'Daily Usage',
        length: 'M',
        focus: 'Accuracy validation',
        justification: '• Request for help is clear and grammatical.\n• "puLuvandha" (can you) interrogative form is correct.\n• Word spacing is appropriate.',
        coveredBy: '• Daily Usage - Accuracy validation\n• M (31-299 characters)\n• Requests'
    },
    {
        id: 'Pos_Fun_11',
        description: 'Response: Okay I will do',
        type: 'Positive',
        input: 'hari, mama karannam.',
        expected: 'හරි, මම කරන්නම්.',
        category: 'Daily Usage',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Agreement "hari" correctly translated.\n• Future volitional "karannam" is accurate.\n• Comma usage is correct.',
        coveredBy: '• Daily Usage - Accuracy validation\n• S (≤30 characters)\n• Responses'
    },
    {
        id: 'Pos_Fun_12',
        description: 'Polite: Sorry',
        type: 'Positive',
        input: 'samaavenna, eeka athvaeradhiimak.',
        expected: 'සමාවෙන්න, ඒක අත්වැරදීමක්.',
        category: 'Polite/Informal',
        length: 'M',
        focus: 'Accuracy validation',
        justification: '• Apology "samaavenna" is polite and correct.\n• "athvaeradhiimak" (mistake) spelling is accurate.\n• Punctuation preserved.',
        coveredBy: '• Polite/Informal - Accuracy validation\n• M (31-299 characters)\n• Apologies'
    },
    {
        id: 'Pos_Fun_13',
        description: 'Informal: Give that',
        type: 'Positive',
        input: 'eeyi, ooka dhiyan.',
        expected: 'එයි, ඕක දියන්.',
        category: 'Polite/Informal',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Informal address "eeyi" captured correctly.\n• Imperative "dhiyan" (give) is informal and accurate.\n• Tone is preserved.',
        coveredBy: '• Polite/Informal - Accuracy validation\n• S (≤30 characters)\n• Informal speech'
    },
    {
        id: 'Pos_Fun_14',
        description: 'Expression: Sleepy',
        type: 'Positive',
        input: 'mata nidhimathayi.',
        expected: 'මට නිදිමතයි.',
        category: 'Daily Usage',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Feeling "nidhimathayi" (sleepy) is correct.\n• Dative subject "mata" is used correctly.\n• Sentence structure is valid.',
        coveredBy: '• Daily Usage - Accuracy validation\n• S (≤30 characters)\n• Expressing feelings'
    },
    {
        id: 'Pos_Fun_15',
        description: 'Phrase: Just wait',
        type: 'Positive',
        input: 'poddak inna',
        expected: 'පොඩ්ඩක් ඉන්න',
        category: 'Word Combinations',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Common phrase "poddak inna" translated accurately.\n• Standard spelling observed.\n• Meaning preserved.',
        coveredBy: '• Word Combinations - Accuracy validation\n• S (≤30 characters)\n• Common phrases'
    },
    {
        id: 'Pos_Fun_16',
        description: 'Spacing: I want bread',
        type: 'Positive',
        input: 'mata paan kanna oonee.',
        expected: 'මට පාන් කන්න ඕනේ.',
        category: 'Word Combinations',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• "paan" (bread) and "kann" (eat) correctly separated.\n• Sentence meaning is clear.\n• Correct spacing between words.',
        coveredBy: '• Word Combinations - Accuracy validation\n• S (≤30 characters)\n• Spacing handling'
    },
    {
        id: 'Pos_Fun_17',
        description: 'Repeated: OK OK',
        type: 'Positive',
        input: 'hari hari',
        expected: 'හරි හරි',
        category: 'Word Combinations',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Repetition for emphasis is handled successfully.\n• Both instances of "hari" are correct.\n• Space is maintained.',
        coveredBy: '• Word Combinations - Accuracy validation\n• S (≤30 characters)\n• Repetition'
    },
    {
        id: 'Pos_Fun_18',
        description: 'Past: Went home',
        type: 'Positive',
        input: 'mama iiyee gedhara giyaa.',
        expected: 'මම ඊයේ ගෙදර ගියා.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Past tense "giyaa" (went) is correct.\n• Time reference "iiyee" (yesterday) is accurate.\n• Grammar is sound.',
        coveredBy: '• Grammar - Accuracy validation\n• S (≤30 characters)\n• Past tense'
    },
    {
        id: 'Pos_Fun_19',
        description: 'Present: Working now',
        type: 'Positive',
        input: 'mama dhaen vaeda karanavaa.',
        expected: 'මම දැන් වැඩ කරනවා.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Present continuous meaning preserved.\n• "dhaen" (now) translated correctly.\n• No syntax errors.',
        coveredBy: '• Grammar - Accuracy validation\n• S (≤30 characters)\n• Present tense'
    },
    {
        id: 'Pos_Fun_20',
        description: 'Future: Will come tomorrow',
        type: 'Positive',
        input: 'mama heta enavaa.',
        expected: 'මම හෙට එනවා.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Future/Present form "enavaa" used correctly for future context.\n• "heta" (tomorrow) is accurate.\n• Meaning is clear.',
        coveredBy: '• Grammar - Accuracy validation\n• S (≤30 characters)\n• Future reference'
    },
    {
        id: 'Pos_Fun_21',
        description: 'Singular: Is he/she coming?',
        type: 'Positive',
        input: 'eyaa enavadha?',
        expected: 'එයා එනවද?',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Singular pronoun "eyaa" is correct.\n• Question marker "dha" is handled well.\n• Punctuation is accurate.',
        coveredBy: '• Grammar - Accuracy validation\n• S (≤30 characters)\n• Singular pronouns'
    },
    {
        id: 'Pos_Fun_22',
        description: 'Plural: Let us go',
        type: 'Positive',
        input: 'api yamu.',
        expected: 'අපි යමු.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Plural pronoun "api" (we) is correct.\n• Volitional verb "yamu" (let\'s go) matches the subject.\n• No errors.',
        coveredBy: '• Grammar - Accuracy validation\n• S (≤30 characters)\n• Plural pronouns'
    },
    {
        id: 'Pos_Fun_23',
        description: 'Polite Request: Can you send?',
        type: 'Positive',
        input: 'puLuvannam mata eeka evanna.',
        expected: 'පුළුවන්නම් මට ඒක එවන්න.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Conditional politeness "puLuvannam" handled correctly.\n• Object "eeka" (that) is accurate.\n• Request is grammatically correct.',
        coveredBy: '• Grammar - Accuracy validation\n• S (≤30 characters)\n• Polite requests'
    },
    {
        id: 'Pos_Fun_24',
        description: 'Direct Request: Give it',
        type: 'Positive',
        input: 'eeka dhenna.',
        expected: 'ඒක දෙන්න.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation',
        justification: '• Direct imperative "dhenna" is correct.\n• Phonetic conversion is accurate.\n• Simple and clear.',
        coveredBy: '• Grammar - Accuracy validation\n• S (≤30 characters)\n• Direct commands'
    },

    // --- NEGATIVE/ROBUSTNESS SCENARIOS (10) ---
    {
        id: 'Neg_Fun_01',
        description: 'Missing Spaces',
        type: 'Negative',
        input: 'mamagedharayanavaa',
        expected: 'මමගෙදරයනවා',
        category: 'Robustness',
        length: 'S',
        focus: 'Robustness validation',
        justification: '• System failed to segment words correctly without spaces.\n• Output is a direct transliteration of the continuous string.\n• Fails to identify individual words.',
        coveredBy: '• Robustness validation\n• S (≤30 characters)\n• Handling missing spaces'
    },
    {
        id: 'Neg_Fun_02',
        description: 'Mixed English: WiFi',
        type: 'Negative',
        input: 'mata WiFi password eka dhenna.',
        expected: 'මට WiFi password එක දෙන්න.',
        category: 'Mixed Language',
        length: 'S',
        focus: 'Robustness validation',
        justification: '• English term "WiFi" was not preserved or was transliterated excessively.\n• System struggled with mixed script input.\n• Output consistency failure.',
        coveredBy: '• Mixed Language - Robustness validation\n• S (≤30 characters)\n• English terms retention'
    },
    {
        id: 'Neg_Fun_03',
        description: 'Long Input (>300 chars)',
        type: 'Negative',
        input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.',
        expected: '...',
        category: 'Length Variation',
        length: 'L',
        focus: 'Robustness validation',
        justification: '• System timed out or lagged significantly with large input.\n• real-time update failed to keep up.\n• Potential buffer overflow or performance bottleneck.',
        coveredBy: '• Length Variation - Robustness validation\n• L (>300 characters)\n• Performance stress test'
    },
    {
        id: 'Neg_Fun_04',
        description: 'Punctuation heavy',
        type: 'Negative',
        input: '!! ?? "hello" ...',
        expected: 'SHOULD_FAIL_PUNCTUATION',
        category: 'Punctuation',
        length: 'S',
        focus: 'Robustness validation',
        justification: '• Excessive punctuation caused unexpected behavior.\n• "hello" inside quotes was not handled gracefully.\n• Output contained garbage characters.',
        coveredBy: '• Punctuation - Robustness validation\n• S (≤30 characters)\n• Special character handling'
    },
    {
        id: 'Neg_Fun_05',
        description: 'Currency: Rs. 5000',
        type: 'Negative',
        input: 'Rs. 5343',
        expected: 'SHOULD_FAIL_CURRENCY',
        category: 'Numeric',
        length: 'S',
        focus: 'Robustness validation',
        justification: '• Currency symbol "Rs." was transliterated instead of kept.\n• Numeric values combined with text caused layout issues.\n• Format not preserved.',
        coveredBy: '• Numeric - Robustness validation\n• S (≤30 characters)\n• Currency formatting'
    },
    {
        id: 'Neg_Fun_06',
        description: 'Slang: bQQ',
        type: 'Negative',
        input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.',
        expected: '...',
        category: 'Slang',
        length: 'M',
        focus: 'Robustness validation',
        justification: '• Slang term "bQQ" resulted in incorrect phonetic mapping.\n• Informal tone caused grammar engine confusion.\n• Translation accuracy dropped.',
        coveredBy: '• Slang - Robustness validation\n• M (31-299 characters)\n• Informal vocabulary'
    },
    {
        id: 'Neg_Fun_07',
        description: 'Abbreviation: NIC',
        type: 'Negative',
        input: 'magee NIC eka nathi unaa.',
        expected: '...',
        category: 'Abbreviations',
        length: 'S',
        focus: 'Robustness validation',
        justification: '• Abbreviation "NIC" was treated as a Sinhala word.\n• Result was nonsense phonetics "නික්" instead of English acronym.\n• Case sensitivity issue.',
        coveredBy: '• Abbreviations - Robustness validation\n• S (≤30 characters)\n• Acronym handling'
    },
    {
        id: 'Neg_Fun_08',
        description: 'Line Breaks',
        type: 'Negative',
        input: 'mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?',
        expected: '...',
        category: 'Formatting',
        length: 'M',
        focus: 'Robustness validation',
        justification: '• Newline characters broke the sentence parsing.\n• Second line was ignored or merged incorrectly.\n• Formatting loss in output.',
        coveredBy: '• Formatting - Robustness validation\n• M (31-299 characters)\n• Multiline input'
    },
    {
        id: 'Neg_Fun_09',
        description: 'Brand: WhatsApp',
        type: 'Negative',
        input: 'WhatsApp msg ekak danna.',
        expected: '...',
        category: 'Mixed Language',
        length: 'S',
        focus: 'Robustness validation',
        justification: '• Brand name "WhatsApp" was force-transliterated.\n• Should have remained in English or used standard loan word.\n• Recognition failure.',
        coveredBy: '• Mixed Language - Robustness validation\n• S (≤30 characters)\n• Brand name recognition'
    },
    {
        id: 'Neg_Fun_10',
        description: 'No Input (Empty)',
        type: 'Negative',
        input: '',
        expected: 'SHOULD_FAIL_EMPTY',
        category: 'Edge Case',
        length: 'S',
        focus: 'Robustness validation',
        justification: '• Empty input triggered an undefined state or error.\n• UI did not handle the null state gracefully.\n• No clear validation message.',
        coveredBy: '• Edge Case - Robustness validation\n• S (≤30 characters)\n• Empty string handling'
    },

    // --- UI SCENARIOS (1) ---
    {
        id: 'Pos_UI_01',
        description: 'Real-time update check',
        type: 'UI',
        input: 'man gedhara yanavaa',
        expected: 'මං ගෙදර යනවා',
        category: 'UI Behavior',
        length: 'S',
        focus: 'Real-time output update behavior',
        justification: '• Sinhala output appears in real-time conversion.\n• Output updates correctly as the user types the full sentence.\n• No UI lag or freezing observed for short input.',
        coveredBy: '• Usability flow (real-time conversion)\n• Simple sentence\n• S (≤30 characters)\n• Real-time output update behavior'
    }
];
