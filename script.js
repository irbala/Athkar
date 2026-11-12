// Morning adhkar. "count" is how many times each one is repeated.
// The first item is the title card, so it has no count.
const morningSupplications = [
    { text: "اذكار الصباح ☀️" },
    { text: "الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.", count: 1 },
    { text: "قل هو ٱلله أحد، ٱلله ٱلصمد، لم يلد ولم يولد، ولم يكن لهۥ كفوا أحدۢ.", count: 3 },
    { text: "قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفٰثٰت فى ٱلعقد، ومن شر حاسد إذا حسد.", count: 3 },
    { text: "قل أعوذ برب ٱلناس، ملك ٱلناس، إلٰه ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.", count: 3 },
    { text: "أصبحنا وأصبح الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذبك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", count: 1 },
    { text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذبك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.", count: 1 },
    { text: "رضيت بالله ربا وبالإسلام دينا وبمحمد صلى الله عليه وسلم نبيا.", count: 1 },
    { text: "اللهم إني أصبحت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدا عبدك ورسولك.", count: 4 },
    { text: "اللهم ما أصبح بي من نعمة أو بأحد من خلقك، فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر.", count: 1 },
    { text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.", count: 7 },
    { text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.", count: 3 },
    { text: "اللهم بك أصبحنا وبك أمسينا، وبك نحيا وبك نموت وإليك النشور.", count: 1 },
    { text: "أصبحنا على فطرة الإسلام، وعلى كلمة الإخلاص، وعلى دين نبينا محمد صلى الله عليه وسلم، وعلى ملة أبينا إبراهيم حنيفا مسلما وما كان من المشركين.", count: 1 },
    { text: "سبحان الله وبحمده عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته.", count: 3 },
    { text: "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت.", count: 3 },
    { text: "اللهم إني أعوذ بك من الكفر، والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت.", count: 3 },
    { text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي، ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي.", count: 1 },
    { text: "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.", count: 3 },
    { text: "أصبحنا وأصبح الملك لله رب العالمين، اللهم إني أسألك خير هذا اليوم، فتحه، ونصره، ونوره وبركته، وهداه، وأعوذ بك من شر ما فيه وشر ما بعده.", count: 1 },
    { text: "اللهم عالم الغيب والشهادة فاطر السماوات والأرض رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه، وأن أقترف على نفسي سوءا أو أجره إلى مسلم.", count: 1 },
    { text: "أعوذ بكلمات الله التامات من شر ما خلق.", count: 3 },
    { text: "اللهم صل وسلم وبارك على نبينا محمد.", count: 10 },
    { text: "اللهم إنا نعوذ بك من أن نشرك بك شيئا نعلمه، ونستغفرك لما لا نعلمه.", count: 3 },
    { text: "اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين، وقهر الرجال.", count: 3 },
    { text: "أستغفر الله العظيم الذي لا إله إلا هو، الحي القيوم، وأتوب إليه.", count: 3 },
    { text: "يا رب, لك الحمد كما ينبغي لجلال وجهك, ولعظيم سلطانك.", count: 3 },
    { text: "اللهم إني أسألك علما نافعا، ورزقا طيبا، وعملا متقبلا.", count: 1 },
    { text: "اللهم أنت ربي لا إله إلا أنت، عليك توكلت، وأنت رب العرش العظيم, ما شاء الله كان، وما لم يشأ لم يكن، ولا حول ولا قوة إلا بالله العلي العظيم, أعلم أن الله على كل شيء قدير، وأن الله قد أحاط بكل شيء علما, اللهم إني أعوذ بك من شر نفسي، ومن شر كل دابة أنت آخذ بناصيتها، إن ربي على صراط مستقيم.", count: 1 },
    { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.", count: 100 },
    { text: "سبحان الله وبحمده.", count: 100 },
    { text: "أستغفر الله وأتوب إليه.", count: 100 }
];

// Evening adhkar
const eveningSupplications = [
    { text: "اذكار المساء 🌒" },
    { text: "الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.", count: 1 },
    { text: "آمن الرسول بما أنزل إليه من ربه والمؤمنون ۚ كل آمن بالله وملائكته وكتبه ورسله لا نفرق بين أحد من رسله ۚ وقالوا سمعنا وأطعنا ۖ غفرانك ربنا وإليك المصير. لا يكلف الله نفسا إلا وسعها لها ما كسبت وعليها ما اكتسبت ربنا لا تؤاخذنا إن نسينآ أو أخطأنا ربنا ولا تحمل علينا إصرا كما حملته على الذين من قبلنا ربنا ولا تحملنا ما لا طاقة لنا به واعف عنا واغفر لنا وارحمنا أنت مولانا فانصرنا على القوم الكافرين [البقرة 285 - 286].", count: 1 },
    { text: "قل هو ٱلله أحد، ٱلله ٱلصمد، لم يلد ولم يولد، ولم يكن لهۥ كفوا أحدۢ.", count: 3 },
    { text: "قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفٰثٰت فى ٱلعقد، ومن شر حاسد إذا حسد.", count: 3 },
    { text: "قل أعوذ برب ٱلناس، ملك ٱلناس، إلٰه ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.", count: 3 },
    { text: "أمسينا وأمسى الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، رب أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب أعوذبك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر.", count: 1 },
    { text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذبك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.", count: 1 },
    { text: "رضيت بالله ربا وبالإسلام دينا وبمحمد صلى الله عليه وسلم نبيا.", count: 3 },
    { text: "اللهم إني أمسيت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدا عبدك ورسولك.", count: 4 },
    { text: "اللهم ما أمسى بي من نعمة أو بأحد من خلقك، فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر.", count: 1 },
    { text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.", count: 7 },
    { text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.", count: 3 },
    { text: "اللهم بك أمسينا وبك أصبحنا، وبك نحيا وبك نموت وإليك المصير.", count: 1 },
    { text: "أمسينا على فطرة الإسلام، وعلى كلمة الإخلاص، وعلى دين نبينا محمد صلى الله عليه وسلم، وعلى ملة أبينا إبراهيم حنيفا مسلما وما كان من المشركين.", count: 1 },
    { text: "سبحان الله وبحمده عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته.", count: 3 },
    { text: "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت.", count: 3 },
    { text: "اللهم إني أعوذ بك من الكفر، والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت.", count: 3 },
    { text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي، ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي.", count: 1 },
    { text: "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.", count: 3 },
    { text: "أمسينا وأمسى الملك لله رب العالمين، اللهم إني أسألك خير هذه الليلة فتحها ونصرها، ونورها وبركتها، وهداها، وأعوذ بك من شر ما فيها وشر ما بعدها.", count: 1 },
    { text: "اللهم عالم الغيب والشهادة فاطر السماوات والأرض رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه، وأن أقترف على نفسي سوءا أو أجره إلى مسلم.", count: 1 },
    { text: "أعوذ بكلمات الله التامات من شر ما خلق.", count: 3 },
    { text: "اللهم صل وسلم وبارك على نبينا محمد.", count: 10 },
    { text: "اللهم إنا نعوذ بك من أن نشرك بك شيئا نعلمه، ونستغفرك لما لا نعلمه.", count: 3 },
    { text: "اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين، وقهر الرجال.", count: 3 },
    { text: "أستغفر الله العظيم الذي لا إله إلا هو، الحي القيوم، وأتوب إليه.", count: 3 },
    { text: "يا رب, لك الحمد كما ينبغي لجلال وجهك, ولعظيم سلطانك.", count: 3 },
    { text: "اللهم أنت ربي لا إله إلا أنت، عليك توكلت، وأنت رب العرش العظيم, ما شاء الله كان، وما لم يشأ لم يكن، ولا حول ولا قوة إلا بالله العلي العظيم, أعلم أن الله على كل شيء قدير، وأن الله قد أحاط بكل شيء علما, اللهم إني أعوذ بك من شر نفسي، ومن شر كل دابة أنت آخذ بناصيتها، إن ربي على صراط مستقيم.", count: 1 },
    { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.", count: 100 },
    { text: "سبحان الله وبحمده.", count: 100 },
];

let currentSupplications = morningSupplications; // Default to morning supplications
let currentIndex = 0;

// How many times each dhikr has been counted so far, one list per period.
// Kept in memory only, so every visit starts fresh.
const progress = {
    morning: morningSupplications.map(() => 0),
    evening: eveningSupplications.map(() => 0)
};
let currentProgress = progress.morning;
let advanceTimer = null;

// DOM Elements
const toggleSwitch = document.getElementById('toggle-switch');
const supplicationText = document.getElementById('supplication-text');
const firstButton = document.getElementById('first-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const lastButton = document.getElementById('last-button');
const counter = document.getElementById('counter');
const tally = document.getElementById('tally');
const countButton = document.getElementById('count-button');
const countDone = document.getElementById('count-done');
const countTarget = document.getElementById('count-target');
const resetButton = document.getElementById('reset-button');

// Initialize the display
updateDisplay();

// Move to another dhikr (cancels any pending automatic move)
function goTo(index) {
    clearTimeout(advanceTimer);
    currentIndex = Math.max(0, Math.min(index, currentSupplications.length - 1));
    updateDisplay();
}

// Toggle switch event listener
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        currentSupplications = eveningSupplications;
        currentProgress = progress.evening;
    } else {
        currentSupplications = morningSupplications;
        currentProgress = progress.morning;
    }
    goTo(0); // Start from the beginning when switching
});

firstButton.addEventListener('click', () => goTo(0));
prevButton.addEventListener('click', () => goTo(currentIndex - 1));
nextButton.addEventListener('click', () => goTo(currentIndex + 1));
lastButton.addEventListener('click', () => goTo(currentSupplications.length - 1));

// Tap to count. When the dhikr is complete, move on to the next one.
countButton.addEventListener('click', () => {
    const target = currentSupplications[currentIndex].count;
    if (!target || currentProgress[currentIndex] >= target) {
        return;
    }

    currentProgress[currentIndex]++;
    const finished = currentProgress[currentIndex] >= target;

    // A short buzz on phones that support it, a longer one when finished
    if (navigator.vibrate) {
        navigator.vibrate(finished ? 60 : 15);
    }

    updateDisplay();

    if (finished && currentIndex < currentSupplications.length - 1) {
        const indexWhenFinished = currentIndex;
        advanceTimer = setTimeout(() => {
            if (currentIndex === indexWhenFinished) {
                goTo(currentIndex + 1);
            }
        }, 700);
    }
});

// Start the current dhikr again from zero
resetButton.addEventListener('click', () => {
    clearTimeout(advanceTimer);
    currentProgress[currentIndex] = 0;
    updateDisplay();
});

// Update the display function
function updateDisplay() {
    const currentSupplication = currentSupplications[currentIndex];
    const target = currentSupplication.count;
    const done = currentProgress[currentIndex];

    supplicationText.textContent = currentSupplication.text;
    supplicationText.classList.toggle('title-card', !target);

    // Tap counter (hidden on the title card, which has nothing to count)
    tally.hidden = !target;
    if (target) {
        const finished = done >= target;
        countDone.textContent = finished ? '✓' : done;
        countTarget.textContent = target === 1 ? 'مرة واحدة' : `من ${target}`;
        countButton.classList.toggle('finished', finished);
        countButton.setAttribute('aria-label', finished
            ? `اكتمل الذكر، ${target} من ${target}`
            : `اضغط للعد، ${done} من ${target}`);
        resetButton.hidden = done === 0;
    }

    // Update position counter
    counter.textContent = `${currentIndex + 1} / ${currentSupplications.length}`;
    // Enable/disable buttons based on index
    firstButton.disabled = currentIndex === 0;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === currentSupplications.length - 1;
    lastButton.disabled = currentIndex === currentSupplications.length - 1;
}
