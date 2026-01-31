export interface TestCase {
    id: string;
    description: string;
    type: 'Positive' | 'Negative' | 'UI';
    input: string;
    expected: string;
    category: string;
    length: 'S' | 'M' | 'L';
    focus: string;
}

export const testCases: TestCase[] = [
    // --- POSITIVE SCENARIOS (24) ---

    // 1. Simple sentences
    {
        id: 'Pos_Fun_01',
        description: 'Simple sentence: I go home',
        type: 'Positive',
        input: 'mama gedhara yanavaa.',
        expected: 'මම ගෙදර යනවා.',
        category: 'Sentence structures',
        length: 'S',
        focus: 'Accuracy validation'
    },
    {
        id: 'Pos_Fun_02',
        description: 'Simple sentence: I want rice',
        type: 'Positive',
        input: 'mata bath oonee.',
        expected: 'මට බත් ඕනේ.',
        category: 'Sentence structures',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 2. Compound sentences
    {
        id: 'Pos_Fun_03',
        description: 'Compound sentence: Rain and home',
        type: 'Positive',
        input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.',
        expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.',
        category: 'Sentence structures',
        length: 'M',
        focus: 'Accuracy validation'
    },

    // 3. Complex sentences
    {
        id: 'Pos_Fun_04',
        description: 'Complex sentence: Condition',
        type: 'Positive',
        input: 'oya enavaanam mama balan innavaa.',
        expected: 'ඔය එනවානම් මම බලන් ඉන්නවා.',
        category: 'Sentence structures',
        length: 'M',
        focus: 'Accuracy validation'
    },

    // 4. Interrogative
    {
        id: 'Pos_Fun_05',
        description: 'Question: How are you?',
        type: 'Positive',
        input: 'oyaata kohomadha?',
        expected: 'ඔයාට කොහොමද?',
        category: 'Interrogative/Imperative',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 5. Imperative
    {
        id: 'Pos_Fun_06',
        description: 'Command: Come immediately',
        type: 'Positive',
        input: 'vahaama enna.',
        expected: 'වහාම එන්න.',
        category: 'Interrogative/Imperative',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 6. Positive Forms
    {
        id: 'Pos_Fun_07',
        description: 'Positive: I do that',
        type: 'Positive',
        input: 'mama ehema karanavaa.',
        expected: 'මම එහෙම කරනවා.',
        category: 'Positive/Negative',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 7. Negative Forms
    {
        id: 'Pos_Fun_08',
        description: 'Negative: I do not do that',
        type: 'Positive',
        input: 'mama ehema karannee naehae.',
        expected: 'මම එහෙම කරන්නේ නැහැ.',
        category: 'Positive/Negative',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 8. Greetings
    {
        id: 'Pos_Fun_09',
        description: 'Greeting: Ayubowan',
        type: 'Positive',
        input: 'aayuboovan!',
        expected: 'ආයුබෝවන්!',
        category: 'Daily Usage',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 9. Requests
    {
        id: 'Pos_Fun_10',
        description: 'Request: Can you help?',
        type: 'Positive',
        input: 'mata udhavvak karanna puLuvandha?',
        expected: 'මට උදව්වක් කරන්න පුළුවන්ද?',
        category: 'Daily Usage',
        length: 'M',
        focus: 'Accuracy validation'
    },

    // 10. Responses
    {
        id: 'Pos_Fun_11',
        description: 'Response: Okay I will do',
        type: 'Positive',
        input: 'hari, mama karannam.',
        expected: 'හරි, මම කරන්නම්.',
        category: 'Daily Usage',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 11. Polite Phrasing
    {
        id: 'Pos_Fun_12',
        description: 'Polite: Sorry',
        type: 'Positive',
        input: 'samaavenna, eeka athvaeradhiimak.',
        expected: 'සමාවෙන්න, ඒක අත්වැරදීමක්.',
        category: 'Polite/Informal',
        length: 'M',
        focus: 'Accuracy validation'
    },

    // 12. Informal Phrasing
    {
        id: 'Pos_Fun_13',
        description: 'Informal: Give that',
        type: 'Positive',
        input: 'eeyi, ooka dhiyan.',
        expected: 'එයි, ඕක දියන්.',
        category: 'Polite/Informal',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 13. Common Expressions
    {
        id: 'Pos_Fun_14',
        description: 'Expression: Sleepy',
        type: 'Positive',
        input: 'mata nidhimathayi.',
        expected: 'මට නිදිමතයි.',
        category: 'Daily Usage',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 14. Multi-word
    {
        id: 'Pos_Fun_15',
        description: 'Phrase: Just wait',
        type: 'Positive',
        input: 'poddak inna',
        expected: 'පොඩ්ඩක් ඉන්න',
        category: 'Word Combinations',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 15. Spacing
    {
        id: 'Pos_Fun_16',
        description: 'Spacing: I want bread',
        type: 'Positive',
        input: 'mata paan kanna oonee.',
        expected: 'මට පාන් කන්න ඕනේ.',
        category: 'Word Combinations',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 16. Emphasis (Repeated)
    {
        id: 'Pos_Fun_17',
        description: 'Repeated: OK OK',
        type: 'Positive',
        input: 'hari hari',
        expected: 'හරි හරි',
        category: 'Word Combinations',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 17. Tense (Past)
    {
        id: 'Pos_Fun_18',
        description: 'Past: Went home',
        type: 'Positive',
        input: 'mama iiyee gedhara giyaa.',
        expected: 'මම ඊයේ ගෙදර ගියා.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 18. Tense (Present)
    {
        id: 'Pos_Fun_19',
        description: 'Present: Working now',
        type: 'Positive',
        input: 'mama dhaen vaeda karanavaa.',
        expected: 'මම දැන් වැඩ කරනවා.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 19. Tense (Future)
    {
        id: 'Pos_Fun_20',
        description: 'Future: Will come tomorrow',
        type: 'Positive',
        input: 'mama heta enavaa.',
        expected: 'මම හෙට එනවා.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 20. Singular Pronoun
    {
        id: 'Pos_Fun_21',
        description: 'Singular: Is he/she coming?',
        type: 'Positive',
        input: 'eyaa enavadha?',
        expected: 'එයා එනවද?',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 21. Plural Pronoun
    {
        id: 'Pos_Fun_22',
        description: 'Plural: Let us go',
        type: 'Positive',
        input: 'api yamu.',
        expected: 'අපි යමු.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 22. Request Politeness 1
    {
        id: 'Pos_Fun_23',
        description: 'Polite Request: Can you send?',
        type: 'Positive',
        input: 'puLuvannam mata eeka evanna.',
        expected: 'පුළුවන්නම් මට ඒක එවන්න.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation'
    },

    // 23. Request Politeness 2
    {
        id: 'Pos_Fun_24',
        description: 'Direct Request: Give it',
        type: 'Positive',
        input: 'eeka dhenna.',
        expected: 'ඒක දෙන්න.',
        category: 'Grammar',
        length: 'S',
        focus: 'Accuracy validation'
    },


    // --- NEGATIVE/ROBUSTNESS SCENARIOS (10) ---
    // The goal here is to identify where it FAILS or behaves incorrectly (or just stress test).
    // I'll define expected as the CORRECT translation, so if it fails, the test logs 'Fail'.

    // 24. Missing Spaces (Stress)
    {
        id: 'Neg_Fun_01',
        description: 'Missing Spaces: mamagedharayanavaa',
        type: 'Negative',
        input: 'mamagedharayanavaa',
        expected: 'මමගෙදරයනවා', // Ideally should separate or transliterate literally.
        category: 'Robustness',
        length: 'S',
        focus: 'Robustness validation'
    },

    // 25. English Mixed
    {
        id: 'Neg_Fun_02',
        description: 'Mixed English: WiFi',
        type: 'Negative',
        input: 'mata WiFi password eka dhenna.',
        expected: 'මට WiFi password එක දෙන්න.',
        category: 'Mixed Language',
        length: 'S',
        focus: 'Robustness validation'
    },

    // 26. Long Input
    {
        id: 'Neg_Fun_03',
        description: 'Long Input (>300 chars)',
        type: 'Negative',
        input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.',
        expected: 'දිවයින තුළ කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.', // Approximate expectation
        category: 'Length Variation',
        length: 'L',
        focus: 'Robustness validation'
    },

    // 27. Special Characters / Punctuation
    {
        id: 'Neg_Fun_04',
        description: 'Punctuation heavy',
        type: 'Negative',
        input: '!! ?? "hello" ...',
        expected: 'SHOULD_FAIL_PUNCTUATION',
        category: 'Punctuation',
        length: 'S',
        focus: 'Robustness validation'
    },

    // 28. Numeric/Currency
    {
        id: 'Neg_Fun_05',
        description: 'Currency: Rs. 5000',
        type: 'Negative',
        input: 'Rs. 5343',
        expected: 'SHOULD_FAIL_CURRENCY',
        category: 'Numeric',
        length: 'S',
        focus: 'Robustness validation'
    },

    // 29. Slang (which might fail)
    {
        id: 'Neg_Fun_06',
        description: 'Slang: bQQ',
        type: 'Negative',
        input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.',
        expected: 'අඩෝ වැඩක් බාරගත්තනම් ඒක හරියට කරපන්කො bQQ.', // bQQ might not convert
        category: 'Slang',
        length: 'M',
        focus: 'Robustness validation'
    },

    // 30. Abbreviations
    {
        id: 'Neg_Fun_07',
        description: 'Abbreviation: NIC',
        type: 'Negative',
        input: 'magee NIC eka nathi unaa.',
        expected: 'මගේ NIC එක නැති වුනා.',
        category: 'Abbreviations',
        length: 'S',
        focus: 'Robustness validation'
    },

    // 31. Formatting (Line Breaks)
    {
        id: 'Neg_Fun_08',
        description: 'Line Breaks',
        type: 'Negative',
        input: 'mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?',
        expected: 'මම ගෙදර යනවා.\nඔයා එනවද මාත් එක්ක යන්න?',
        category: 'Formatting',
        length: 'M',
        focus: 'Robustness validation'
    },

    // 32. Mixed brand names
    {
        id: 'Neg_Fun_09',
        description: 'Brand: WhatsApp',
        type: 'Negative',
        input: 'WhatsApp msg ekak danna.',
        expected: 'WhatsApp msg එකක් දාන්න.',
        category: 'Mixed Language',
        length: 'S',
        focus: 'Robustness validation'
    },

    // 33. Empty / Edge case (Null?) - Maybe not null but weird chars
    {
        id: 'Neg_Fun_10',
        description: 'No Input (Empty)',
        type: 'Negative',
        input: '',
        expected: 'SHOULD_FAIL_EMPTY',
        category: 'Edge Case',
        length: 'S',
        focus: 'Robustness validation'
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
        focus: 'Real-time output update behavior'
    }
];
