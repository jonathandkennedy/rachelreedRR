import type { Block, FAQ } from "./content";
import { images } from "./site";

export type PracticeCategory = "Family Law" | "Criminal Defense" | "Personal Injury";

export type Highlight = { title: string; text: string; href?: string };

export type Practice = {
  /** Full URL path key, e.g. "family-law" or "family-law/divorce". */
  path: string;
  parent: string; // first segment, e.g. "family-law"
  topic?: string; // second segment, e.g. "divorce"
  category: PracticeCategory;
  isPillar: boolean;
  navLabel: string;
  h1: string;
  heroSub: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ctaHeadline: string;
  ctaButton: string;
  intro: Block[];
  highlights?: Highlight[];
  body: Block[];
  faqs: FAQ[];
  image: string;
};

const cta = (headline: string, button: string) => ({ ctaHeadline: headline, ctaButton: button });

export const practices: Practice[] = [
  /* ===================== FAMILY LAW ===================== */
  {
    path: "family-law",
    parent: "family-law",
    category: "Family Law",
    isPillar: true,
    navLabel: "Family Law",
    h1: "Ventura County Family Law Attorney",
    heroSub:
      "Divorce, custody, and support are about your family's future — not just paperwork. Rachel Reed protects what matters most with honest advice and relentless courtroom advocacy.",
    metaTitle: "Ventura Family Law Attorney | Divorce & Custody | Rachel Reed Law",
    metaDescription:
      "Ventura County family law attorney Rachel Reed handles divorce, child custody, support, and domestic violence cases. Honest answers and fierce advocacy. Free, confidential case review — call (805) 585-5330.",
    keywords: [
      "Ventura family law attorney",
      "Ventura divorce lawyer",
      "child custody attorney Ventura County",
      "Oxnard family law attorney",
    ],
    ...cta("Protect Your Family's Future", "Talk to Rachel Today"),
    intro: [
      {
        type: "p",
        text: "Few moments in life feel more overwhelming than the end of a marriage or a fight over your children. The decisions you make now will shape your finances, your parenting time, and your peace of mind for years. You deserve an attorney who tells you the truth, prepares relentlessly, and stands between you and the chaos.",
      },
      {
        type: "p",
        text: "Rachel Reed has built her reputation in Ventura County as a fierce, focused advocate — a 'bulldog in the courtroom,' as clients put it — who still treats every family with compassion. She handles the full range of family law matters, from amicable, uncontested divorces to the hardest-fought custody battles.",
      },
    ],
    highlights: [
      { title: "Divorce", text: "Contested and uncontested dissolution, property division, and complex assets.", href: "/family-law/divorce" },
      { title: "Child Custody", text: "Legal and physical custody, visitation, relocation, and modifications.", href: "/family-law/child-custody" },
      { title: "Child & Spousal Support", text: "Accurate guideline calculations and enforcement of what you're owed.", href: "/family-law/support" },
      { title: "Domestic Violence", text: "Restraining orders and defense against false allegations.", href: "/family-law/domestic-violence" },
    ],
    body: [
      { type: "h2", text: "Family law in Ventura County, handled by someone who knows the courthouse" },
      {
        type: "p",
        text: "Family law cases in Ventura County are decided at the Hall of Justice on Victoria Avenue. Local judges have their own expectations for how cases are presented, how parenting plans are structured, and how financial disclosures are prepared. Rachel practices in these courtrooms regularly and uses that familiarity to your advantage.",
      },
      {
        type: "p",
        text: "Whether you live in Ventura, Oxnard, Camarillo, Thousand Oaks, Simi Valley, or Ojai, your case will move through the same court — and you want an advocate who knows how to move it efficiently while protecting your priorities.",
      },
      { type: "h2", text: "An approach built on honesty and preparation" },
      {
        type: "p",
        text: "Rachel will never sell you a fantasy to get you in the door. From the first conversation, she gives you a straight assessment of your strengths, your risks, and the most realistic path to your goals. Then she out-prepares the other side — documenting facts, exposing manipulation, and building the record the judge needs to rule in your favor.",
      },
      {
        type: "callout",
        title: "You don't have to navigate this alone.",
        text: "Every family law case starts with a free, confidential conversation. Tell Rachel what's happening and get a clear, honest plan for protecting your family.",
      },
      { type: "h2", text: "What working with Rachel looks like" },
      {
        type: "ul",
        items: [
          "Direct access — you work with Rachel, not a rotating cast of paralegals.",
          "A clear strategy and realistic expectations from day one.",
          "Aggressive protection of your parenting time and finances.",
          "Calm, decisive guidance through mediation, settlement, and trial.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a family law attorney cost in Ventura County?",
        a: "Cost depends on whether your case is contested and how complex the issues are. Rachel offers a free, confidential initial consultation to review your situation and explain her fees up front, so there are no surprises. Call (805) 585-5330 to schedule.",
      },
      {
        q: "Do I have to go to court for my divorce or custody case?",
        a: "Not always. Many family law matters resolve through negotiation or mediation. But if the other side won't be reasonable, you want an attorney who is fully prepared to litigate — and Rachel is known for her courtroom presence.",
      },
      {
        q: "How long does a divorce take in California?",
        a: "California imposes a mandatory six-month waiting period from the date the responding spouse is served before a divorce can be finalized. Contested issues over property or custody can extend that timeline; Rachel works to resolve matters as efficiently as your goals allow.",
      },
      {
        q: "Can Rachel help if I already have an attorney?",
        a: "Yes. Many clients come to Rachel after feeling unheard or under-served elsewhere. You have the right to change counsel, and she can step in to take over your case.",
      },
    ],
    image: images.portraitSuited,
  },
  {
    path: "family-law/divorce",
    parent: "family-law",
    topic: "divorce",
    category: "Family Law",
    isPillar: false,
    navLabel: "Divorce",
    h1: "Ventura Divorce Attorney",
    heroSub:
      "Whether your divorce is amicable or a war over everything you've built, Rachel Reed protects your finances, your children, and your future.",
    metaTitle: "Ventura Divorce Lawyer | Contested & Uncontested | Rachel Reed Law",
    metaDescription:
      "Ventura County divorce attorney Rachel Reed handles contested and uncontested divorce, property division, and high-conflict cases. Free, confidential consultation — call (805) 585-5330.",
    keywords: [
      "Ventura divorce attorney",
      "Ventura divorce lawyer",
      "contested divorce Ventura County",
      "Oxnard divorce attorney",
    ],
    ...cta("Take the First Step Toward Your New Chapter", "Start Your Divorce Consultation"),
    intro: [
      {
        type: "p",
        text: "Divorce is rarely just about ending a marriage. It's about who keeps the house, how you'll co-parent, what happens to your retirement, and whether you'll be financially secure on the other side. Getting it right matters — and the choices you make early can follow you for decades.",
      },
      {
        type: "p",
        text: "Rachel Reed guides Ventura County clients through every type of divorce, from straightforward uncontested cases to high-conflict litigation involving hidden assets, business interests, and bitter custody disputes.",
      },
    ],
    body: [
      { type: "h2", text: "Contested vs. uncontested divorce" },
      {
        type: "p",
        text: "An uncontested divorce — where both spouses agree on the major issues — is faster, cheaper, and less painful. When agreement is possible, Rachel will help you reach a fair settlement and keep your costs down. But when the other side is unreasonable, hiding income, or using the children as leverage, you need someone willing to fight. Rachel is equally comfortable at the negotiating table and in trial.",
      },
      { type: "h2", text: "Dividing property in a California community-property divorce" },
      {
        type: "p",
        text: "California is a community-property state, which generally means assets and debts acquired during the marriage are split equally. In practice, it's rarely that simple. Characterizing separate vs. community property, valuing a business, tracing commingled accounts, and dividing retirement and pensions all require careful, knowledgeable work.",
      },
      {
        type: "ul",
        items: [
          "The family home and other real estate",
          "Retirement accounts, pensions, and stock options",
          "Businesses and professional practices",
          "Vehicles, valuables, and personal property",
          "Community debts, credit cards, and loans",
        ],
      },
      { type: "h2", text: "Protecting your children and your income" },
      {
        type: "p",
        text: "If you have children, custody and support will be central to your divorce. Rachel builds parenting plans designed to protect your relationship with your kids, and she makes sure support is calculated accurately — neither inflated nor understated.",
      },
      {
        type: "callout",
        title: "Worried your spouse already 'lawyered up'?",
        text: "Don't wait. The sooner Rachel is involved, the more she can do to protect your interests. Schedule a free, confidential consultation today.",
      },
    ],
    faqs: [
      {
        q: "How long does a divorce take in Ventura County?",
        a: "California has a mandatory six-month waiting period after the responding spouse is served. Uncontested divorces may finalize close to that minimum, while contested cases involving property or custody disputes can take longer. Rachel works to resolve your case as efficiently as possible.",
      },
      {
        q: "Is California a 50/50 divorce state?",
        a: "California is a community-property state, so property and debt acquired during the marriage are generally divided equally. Separate property — typically what you owned before marriage or received by gift or inheritance — usually stays with you. How assets are characterized can be heavily contested, which is why representation matters.",
      },
      {
        q: "Do I need a lawyer for an uncontested divorce?",
        a: "You're not required to have one, but even 'simple' agreements can contain costly mistakes around taxes, retirement division, and support. Having Rachel review or prepare your agreement protects you from errors you can't easily undo later.",
      },
      {
        q: "What if my spouse is hiding money or assets?",
        a: "California requires full financial disclosure, and hiding assets can carry serious penalties. Rachel uses formal discovery and, when needed, forensic experts to uncover concealed income and property so your settlement is based on the truth.",
      },
    ],
    image: images.portraitSuited,
  },
  {
    path: "family-law/child-custody",
    parent: "family-law",
    topic: "child-custody",
    category: "Family Law",
    isPillar: false,
    navLabel: "Child Custody",
    h1: "Ventura Child Custody Attorney",
    heroSub:
      "Nothing matters more than your children. Rachel Reed fights to protect your parenting time and your relationship with your kids.",
    metaTitle: "Ventura Child Custody Lawyer | Custody & Visitation | Rachel Reed Law",
    metaDescription:
      "Ventura County child custody attorney Rachel Reed protects parents in custody, visitation, and relocation disputes. Known as a bulldog in the courtroom. Free consultation — (805) 585-5330.",
    keywords: [
      "Ventura child custody attorney",
      "child custody lawyer Ventura County",
      "fathers rights attorney Ventura",
      "custody modification Ventura",
    ],
    ...cta("Fight for Every Day With Your Children", "Protect Your Custody Rights"),
    intro: [
      {
        type: "p",
        text: "A custody dispute can be the most frightening thing a parent ever faces. The stakes are not money or property — they're your children. You need an attorney who understands what's on the line and who will not back down.",
      },
      {
        type: "p",
        text: "Rachel Reed has earned a reputation for exposing manipulation and false narratives so that judges see the truth. As one client wrote, Rachel 'masterfully exposed the truth in a complex custody case,' securing a result far beyond what the client expected.",
      },
    ],
    body: [
      { type: "h2", text: "Legal custody vs. physical custody in California" },
      {
        type: "p",
        text: "California recognizes two kinds of custody. Legal custody is the right to make major decisions about your child's health, education, and welfare. Physical custody is about where the child lives and the day-to-day parenting schedule. Either can be joint (shared) or sole. Rachel helps you pursue the arrangement that genuinely serves your child — and protects your role as a parent.",
      },
      { type: "h2", text: "How Ventura County judges decide custody" },
      {
        type: "p",
        text: "California courts decide custody based on the best interests of the child. Judges weigh the child's health, safety, and welfare, each parent's ability to care for the child, any history of abuse or substance issues, and the importance of stable, continuing contact with both parents. Documenting these factors persuasively is where preparation wins cases.",
      },
      { type: "h2", text: "Fathers' rights" },
      {
        type: "p",
        text: "Fathers are entitled to full and equal consideration under California law. Rachel has helped many fathers in Ventura and Oxnard secure meaningful, court-protected time with their children — including a client who praised her for doing 'what was best for our children' during a difficult divorce.",
      },
      { type: "h2", text: "Modifying an existing custody order" },
      {
        type: "p",
        text: "Life changes — a job, a move, a co-parent who stops following the order. When there's been a significant change in circumstances, custody and visitation orders can be modified. Rachel can help you seek a modification or defend against one that would harm your child.",
      },
      {
        type: "callout",
        title: "Facing a custody fight or a threatened move-away?",
        text: "Time matters in custody cases. Talk to Rachel now for a free, confidential assessment of how to protect your parenting time.",
      },
    ],
    faqs: [
      {
        q: "How do judges decide custody in California?",
        a: "Courts apply the 'best interests of the child' standard, weighing the child's health, safety, and welfare, each parent's caregiving ability, any history of abuse or neglect, and the benefit of stable contact with both parents. Strong documentation of these factors is critical.",
      },
      {
        q: "Do mothers automatically get custody in California?",
        a: "No. California law gives no preference based on a parent's gender. Fathers and mothers are entitled to equal consideration, and Rachel regularly protects fathers' rights to meaningful time with their children.",
      },
      {
        q: "Can I modify an existing custody order?",
        a: "Yes, if there has been a significant change in circumstances since the last order. Common examples include relocation, a change in a parent's work schedule, safety concerns, or a co-parent repeatedly violating the order.",
      },
      {
        q: "What is a move-away or relocation case?",
        a: "A move-away case arises when a custodial parent wants to relocate with the child far enough to disrupt the current parenting plan. These cases are complex and high-stakes; having an experienced advocate is essential whether you're seeking to move or opposing one.",
      },
    ],
    image: images.portraitCasual,
  },
  {
    path: "family-law/support",
    parent: "family-law",
    topic: "support",
    category: "Family Law",
    isPillar: false,
    navLabel: "Child & Spousal Support",
    h1: "Ventura Child & Spousal Support Attorney",
    heroSub:
      "Support should reflect the truth about income and need — not games. Rachel Reed makes sure the numbers are right.",
    metaTitle: "Ventura Child & Spousal Support Lawyer | Rachel Reed Law",
    metaDescription:
      "Ventura County support attorney Rachel Reed handles child support, spousal support (alimony), modifications, and enforcement. Accurate orders, aggressive enforcement. Call (805) 585-5330.",
    keywords: [
      "Ventura child support attorney",
      "spousal support lawyer Ventura",
      "alimony attorney Ventura County",
      "child support modification Ventura",
    ],
    ...cta("Get a Support Order That Reflects the Truth", "Talk to Rachel About Support"),
    intro: [
      {
        type: "p",
        text: "Support orders affect your household every single month. Whether you're the parent who needs support to raise your children or the parent being asked to pay, the difference between an accurate order and an inflated one is enormous over time.",
      },
      {
        type: "p",
        text: "Rachel Reed makes sure California's guidelines are applied correctly, that all income is properly disclosed, and that the final order is fair. One client credited her with securing 'a significant monthly child support order' after a hard-fought case.",
      },
    ],
    body: [
      { type: "h2", text: "How child support is calculated in California" },
      {
        type: "p",
        text: "California uses a statewide guideline formula that considers each parent's income, the amount of time each parent spends with the children, tax filing status, health insurance, childcare, and other factors. Because the formula is driven by inputs, getting those inputs right — especially accurately establishing income for a self-employed or under-reporting parent — is where cases are won or lost.",
      },
      { type: "h2", text: "Spousal support (alimony)" },
      {
        type: "p",
        text: "Spousal support may be ordered to help a lower-earning spouse maintain a reasonable standard of living after divorce. Courts consider the length of the marriage, each spouse's earning capacity, the marital standard of living, and many other statutory factors. Rachel advocates for support that is fair and sustainable on both sides.",
      },
      { type: "h2", text: "Modifying and enforcing support" },
      {
        type: "p",
        text: "When circumstances change — a job loss, a raise, a change in custody time — existing support orders can be modified. And when a parent or former spouse simply refuses to pay, Rachel can pursue enforcement through wage garnishment and other court remedies so you actually receive what you're owed.",
      },
      {
        type: "callout",
        title: "Is your support order wrong — too high or too low?",
        text: "Rachel can review your order and the income behind it. Schedule a free, confidential consultation to find out where you stand.",
      },
    ],
    faqs: [
      {
        q: "How is child support calculated in California?",
        a: "California applies a statewide guideline formula based primarily on each parent's income and the percentage of time each spends with the children, along with factors like health insurance and childcare. Accurately establishing income is often the most contested part.",
      },
      {
        q: "How long does spousal support last?",
        a: "It depends on the case. For marriages under ten years, support often lasts about half the length of the marriage as a general guideline; for longer marriages, courts may decline to set an end date. Many factors apply, so an individual assessment is important.",
      },
      {
        q: "Can I change my support order if my income changes?",
        a: "Yes. A significant change in circumstances — such as a job loss, a substantial income change, or a change in parenting time — can justify a modification. Rachel can help you request a change or respond to one.",
      },
      {
        q: "What can I do if my ex won't pay support?",
        a: "Unpaid support can be enforced through wage garnishment, interception of tax refunds, liens, and other court remedies. Rachel can pursue enforcement so you receive what the court ordered.",
      },
    ],
    image: images.portraitCasual,
  },
  {
    path: "family-law/domestic-violence",
    parent: "family-law",
    topic: "domestic-violence",
    category: "Family Law",
    isPillar: false,
    navLabel: "Restraining Orders",
    h1: "Ventura Restraining Order & Domestic Violence Attorney",
    heroSub:
      "Whether you need protection or you've been falsely accused, Rachel Reed handles domestic violence restraining orders with urgency and care.",
    metaTitle: "Ventura Restraining Order Attorney | Domestic Violence | Rachel Reed Law",
    metaDescription:
      "Ventura County restraining order attorney Rachel Reed helps victims obtain protection and defends people facing false domestic violence allegations. Urgent, confidential help — (805) 585-5330.",
    keywords: [
      "Ventura restraining order attorney",
      "domestic violence lawyer Ventura",
      "DVRO attorney Ventura County",
      "false domestic violence allegations Ventura",
    ],
    ...cta("Get Protection — or Clear Your Name", "Get Urgent Help Now"),
    intro: [
      {
        type: "p",
        text: "Domestic violence restraining orders (DVROs) move fast and carry serious consequences. If you're in danger, you need protection now. If you've been falsely accused — sometimes as a tactic in a custody or divorce fight — the order can cost you your home, your firearms, and time with your children.",
      },
      {
        type: "p",
        text: "Rachel Reed handles both sides of these cases in Ventura County with the urgency they demand.",
      },
    ],
    body: [
      { type: "h2", text: "If you need protection" },
      {
        type: "p",
        text: "Rachel can help you obtain a temporary restraining order quickly and then present a compelling case at the hearing for a longer-term order. A restraining order can require the other person to stay away, move out of a shared home, and surrender firearms, and it can include protections for your children.",
      },
      { type: "h2", text: "If you've been falsely accused" },
      {
        type: "p",
        text: "False or exaggerated allegations are unfortunately common in heated family disputes. A restraining order against you can affect custody, your job, your right to own firearms, and your reputation. Rachel builds a careful defense — gathering evidence, exposing inconsistencies, and protecting your rights at every step.",
      },
      {
        type: "callout",
        title: "A hearing date approaching fast?",
        text: "These cases are decided on a short timeline. Contact Rachel immediately for a confidential consultation.",
      },
    ],
    faqs: [
      {
        q: "How quickly can I get a restraining order in Ventura County?",
        a: "A temporary restraining order (TRO) can often be issued within a day when there's an immediate threat, followed by a court hearing — usually within a few weeks — to decide on a longer-term order. Acting quickly with an attorney's help strengthens your case.",
      },
      {
        q: "What happens if a restraining order is filed against me?",
        a: "You'll receive notice of a hearing and may be subject to temporary orders in the meantime. A final order can affect custody, firearm rights, and where you can live. It's critical to get representation before the hearing rather than face it alone.",
      },
      {
        q: "Can a restraining order affect my custody case?",
        a: "Yes. Domestic violence findings can significantly affect custody and visitation. That's true whether you're seeking protection or defending against an allegation, which is why these cases must be taken seriously from the start.",
      },
    ],
    image: images.portraitWalking,
  },

  /* ===================== CRIMINAL DEFENSE ===================== */
  {
    path: "criminal-defense",
    parent: "criminal-defense",
    category: "Criminal Defense",
    isPillar: true,
    navLabel: "Criminal Defense",
    h1: "Ventura County Criminal Defense Attorney",
    heroSub:
      "An arrest is not a conviction. From DUI to serious felonies, Rachel Reed stands between you and the full weight of the prosecution.",
    metaTitle: "Ventura Criminal Defense Attorney | DUI & Felonies | Rachel Reed Law",
    metaDescription:
      "Ventura County criminal defense attorney Rachel Reed defends DUI, felony, misdemeanor, and domestic violence charges. Aggressive, strategic defense. Free, confidential consultation — (805) 585-5330.",
    keywords: [
      "Ventura criminal defense attorney",
      "Ventura criminal lawyer",
      "DUI attorney Ventura County",
      "Oxnard criminal defense lawyer",
    ],
    ...cta("Your Defense Starts the Moment You Call", "Start Your Defense Today"),
    intro: [
      {
        type: "p",
        text: "Being charged with a crime can threaten your freedom, your job, your immigration status, and your reputation. The prosecution has investigators, resources, and one goal: a conviction. You need someone in your corner who is just as determined to protect you.",
      },
      {
        type: "p",
        text: "Rachel Reed brings the same fearless, fully-prepared approach to criminal defense that has made her a force in family court. She gives you honest answers about what you're facing and fights for the best possible outcome — a dismissal, a reduction, an acquittal, or a resolution that protects your future.",
      },
    ],
    highlights: [
      { title: "DUI Defense", text: "First-time and repeat DUI, DMV hearings, and license protection.", href: "/criminal-defense/dui" },
      { title: "Felonies", text: "Serious charges that demand serious, strategic defense.", href: "/criminal-defense/felonies" },
      { title: "Misdemeanors", text: "Protect your record, your job, and your future.", href: "/criminal-defense/misdemeanors" },
      { title: "Domestic Violence", text: "PC 273.5 and related charges, including false allegations.", href: "/criminal-defense/domestic-violence" },
    ],
    body: [
      { type: "h2", text: "Charged in Ventura County? Here's what to do first" },
      {
        type: "p",
        text: "Ventura County criminal cases are prosecuted by the District Attorney and heard at the Ventura courthouse. The most important things you can do right now are simple: do not talk to police or investigators about your case without a lawyer, do not discuss it on jail calls or social media, and call an attorney immediately. What you say early can shape everything that follows.",
      },
      { type: "h2", text: "How Rachel defends your case" },
      {
        type: "ul",
        items: [
          "Scrutinizing every stop, search, and arrest for constitutional violations",
          "Examining the evidence — and the gaps — the prosecution would rather you ignore",
          "Challenging unreliable testing, procedures, and witness credibility",
          "Negotiating from a position of strength, fully prepared to take the case to trial",
        ],
      },
      {
        type: "callout",
        title: "The earlier you call, the more Rachel can do.",
        text: "Some of the most important defense work happens before charges are even filed. Get a free, confidential case review today.",
      },
      { type: "h2", text: "Honest counsel when everything is on the line" },
      {
        type: "p",
        text: "Clients consistently describe Rachel as someone who gives straight answers and actually listens. When your future is at stake, you don't need false promises — you need a clear-eyed strategy and an advocate who will fight for you without flinching.",
      },
    ],
    faqs: [
      {
        q: "Should I talk to the police if I've been arrested?",
        a: "You have the right to remain silent and the right to an attorney — use them. Politely decline to answer questions about your case and ask to speak with a lawyer. Anything you say can be used against you, even statements you think are helpful.",
      },
      {
        q: "What's the difference between a misdemeanor and a felony in California?",
        a: "Misdemeanors are less serious offenses generally punishable by up to a year in county jail, while felonies carry the possibility of state prison and longer-lasting consequences. Some offenses are 'wobblers' that can be charged either way, which is where skilled advocacy matters.",
      },
      {
        q: "Can my charges be reduced or dismissed?",
        a: "Often, yes. Depending on the facts, charges can be reduced, diverted, or dismissed — for example, through suppression of illegally obtained evidence, weaknesses in the prosecution's case, or diversion programs. Rachel evaluates every available avenue.",
      },
      {
        q: "How much does a criminal defense attorney cost?",
        a: "Fees depend on the charges and complexity of the case. Rachel offers a free, confidential consultation to assess your situation and explain her fees clearly before you decide. Call (805) 585-5330.",
      },
    ],
    image: images.portraitWalking,
  },
  {
    path: "criminal-defense/dui",
    parent: "criminal-defense",
    topic: "dui",
    category: "Criminal Defense",
    isPillar: false,
    navLabel: "DUI Defense",
    h1: "Ventura DUI Defense Attorney",
    heroSub:
      "A DUI charge threatens your license, your record, and your freedom. Rachel Reed knows how to fight back — in court and at the DMV.",
    metaTitle: "Ventura DUI Attorney | DUI Defense Lawyer | Rachel Reed Law",
    metaDescription:
      "Ventura County DUI attorney Rachel Reed defends first-time and repeat DUI charges and DMV hearings. Protect your license and your record. Free consultation — (805) 585-5330.",
    keywords: [
      "Ventura DUI attorney",
      "Ventura DUI lawyer",
      "DUI defense Ventura County",
      "Oxnard DUI attorney",
    ],
    ...cta("Protect Your License and Your Record", "Fight Your DUI Now"),
    intro: [
      {
        type: "p",
        text: "A DUI arrest in Ventura County sets two clocks ticking at once: your criminal case and a separate DMV process that can suspend your license. Many people don't realize you typically have only 10 days to request a DMV hearing — miss it, and your license suspension can begin automatically.",
      },
      {
        type: "p",
        text: "Rachel Reed defends both fronts, challenging the traffic stop, the testing, and the evidence while fighting to keep you driving.",
      },
    ],
    body: [
      { type: "h2", text: "The two cases behind every DUI" },
      {
        type: "p",
        text: "Your DUI involves a criminal court case and an administrative DMV case. They run on different tracks with different rules. Handling both correctly — and quickly — is essential to protecting your license and minimizing the consequences.",
      },
      { type: "h2", text: "The 10-day DMV deadline" },
      {
        type: "callout",
        title: "Don't lose your right to a DMV hearing.",
        text: "You generally have just 10 days after a DUI arrest to request a DMV hearing. Call Rachel immediately so the request is made in time.",
      },
      { type: "h2", text: "How DUI charges can be challenged" },
      {
        type: "p",
        text: "A DUI case is far from automatic. There are many points where the prosecution's evidence can break down:",
      },
      {
        type: "ul",
        items: [
          "Whether the traffic stop was lawful in the first place",
          "Whether field sobriety tests were properly administered",
          "Whether breath or blood testing equipment was calibrated and operated correctly",
          "Rising blood-alcohol and medical conditions that affect results",
          "Whether your constitutional rights were respected throughout",
        ],
      },
      { type: "h2", text: "Penalties for DUI in California" },
      {
        type: "p",
        text: "Even a first-offense DUI can mean fines, license suspension, DUI school, probation, and an ignition interlock device. Penalties escalate sharply for repeat offenses, high blood-alcohol levels, or accidents involving injury. Rachel works to reduce or eliminate these consequences wherever the facts allow.",
      },
    ],
    faqs: [
      {
        q: "How long do I have to request a DMV hearing after a DUI in California?",
        a: "Generally only 10 days from the date of your arrest. Requesting the hearing in time can pause the automatic license suspension and gives your attorney a chance to challenge the evidence. Contact Rachel right away so the deadline isn't missed.",
      },
      {
        q: "Will I lose my license after a DUI?",
        a: "Not necessarily. License consequences depend on the DMV hearing and the criminal case. Acting quickly to request a DMV hearing and mounting a strong defense gives you the best chance of keeping your driving privileges.",
      },
      {
        q: "Can a first-time DUI be reduced or dismissed?",
        a: "Yes, depending on the facts. Issues with the stop, the testing, or the procedures can lead to reduced charges (such as a 'wet reckless') or dismissal. Every case is different, which is why an honest evaluation matters.",
      },
      {
        q: "Do I really need a lawyer for a first DUI?",
        a: "A DUI conviction carries lasting consequences for your record, insurance, and license. An experienced attorney can identify defenses you may not see and protect you from penalties that follow you for years.",
      },
    ],
    image: images.portraitWalking,
  },
  {
    path: "criminal-defense/felonies",
    parent: "criminal-defense",
    topic: "felonies",
    category: "Criminal Defense",
    isPillar: false,
    navLabel: "Felony Defense",
    h1: "Ventura Felony Defense Attorney",
    heroSub:
      "Felony charges put your freedom and your future on the line. Rachel Reed brings a relentless, strategic defense to the most serious cases.",
    metaTitle: "Ventura Felony Defense Attorney | Serious Charges | Rachel Reed Law",
    metaDescription:
      "Ventura County felony defense attorney Rachel Reed defends serious charges with a strategic, aggressive approach. Your freedom is worth fighting for. Free consultation — (805) 585-5330.",
    keywords: [
      "Ventura felony attorney",
      "felony defense lawyer Ventura County",
      "serious crime attorney Ventura",
    ],
    ...cta("When Your Freedom Is on the Line, Don't Wait", "Get a Serious Defense"),
    intro: [
      {
        type: "p",
        text: "A felony conviction can mean state prison, the loss of your civil rights, and a permanent record that follows you through every job application and background check for the rest of your life. These are the cases where experienced, fearless representation matters most.",
      },
      {
        type: "p",
        text: "Rachel Reed defends serious felony charges in Ventura County with meticulous preparation and a willingness to take the fight all the way to trial.",
      },
    ],
    body: [
      { type: "h2", text: "What's at stake in a felony case" },
      {
        type: "p",
        text: "Beyond prison time, a felony conviction can affect your right to own firearms, your professional licenses, your immigration status, your housing, and your ability to find work. Because the consequences are so severe, every stage of the case — from the initial investigation through trial — has to be handled with care.",
      },
      { type: "h2", text: "A defense built from the ground up" },
      {
        type: "p",
        text: "Rachel examines how evidence was gathered, whether your rights were violated, and where the prosecution's case is weak. She challenges unlawful searches and seizures, questions the reliability of witnesses and forensic evidence, and holds the prosecution to its burden of proving guilt beyond a reasonable doubt.",
      },
      {
        type: "ul",
        items: [
          "Motions to suppress illegally obtained evidence",
          "Independent investigation of the facts and witnesses",
          "Strategic negotiation for reduced or dismissed charges",
          "Trial-ready advocacy when the prosecution won't be reasonable",
        ],
      },
      {
        type: "callout",
        title: "Under investigation or already charged?",
        text: "The sooner Rachel is involved, the more she can do to protect you. Get a free, confidential case review now.",
      },
    ],
    faqs: [
      {
        q: "What is a 'wobbler' in California?",
        a: "A wobbler is an offense that can be charged as either a misdemeanor or a felony depending on the circumstances and the defendant's record. Skilled advocacy can sometimes persuade the prosecution or court to treat a wobbler as a misdemeanor, dramatically reducing the consequences.",
      },
      {
        q: "Can a felony be reduced to a misdemeanor?",
        a: "In some cases, yes — either during the case or, for certain offenses, after completing probation. Whether reduction is possible depends on the charge and the facts. Rachel can evaluate your eligibility.",
      },
      {
        q: "Should I take a plea deal?",
        a: "Never accept a plea without understanding all of your options and the full consequences. Rachel reviews the strength of the prosecution's case before advising you, so any decision you make is fully informed.",
      },
    ],
    image: images.portraitWalking,
  },
  {
    path: "criminal-defense/misdemeanors",
    parent: "criminal-defense",
    topic: "misdemeanors",
    category: "Criminal Defense",
    isPillar: false,
    navLabel: "Misdemeanor Defense",
    h1: "Ventura Misdemeanor Defense Attorney",
    heroSub:
      "A misdemeanor is still a crime — and a conviction can follow you for years. Rachel Reed protects your record and your future.",
    metaTitle: "Ventura Misdemeanor Attorney | Protect Your Record | Rachel Reed Law",
    metaDescription:
      "Ventura County misdemeanor defense attorney Rachel Reed defends theft, DUI, domestic battery, and other misdemeanor charges to protect your record and your future. Free consultation — (805) 585-5330.",
    keywords: [
      "Ventura misdemeanor attorney",
      "misdemeanor lawyer Ventura County",
      "expungement attorney Ventura",
    ],
    ...cta("Don't Let a Misdemeanor Define Your Future", "Protect Your Record"),
    intro: [
      {
        type: "p",
        text: "It's easy to underestimate a misdemeanor — until a conviction costs you a job, a professional license, or a housing application. Even 'minor' charges create a criminal record that can shadow you for years.",
      },
      {
        type: "p",
        text: "Rachel Reed defends misdemeanor charges throughout Ventura County and works to keep your record as clean as possible.",
      },
    ],
    body: [
      { type: "h2", text: "Common misdemeanor charges" },
      {
        type: "ul",
        items: [
          "DUI and reckless driving",
          "Petty theft and shoplifting",
          "Domestic battery",
          "Drug possession",
          "Disorderly conduct and public intoxication",
          "Vandalism and trespassing",
        ],
      },
      { type: "h2", text: "Why a misdemeanor still matters" },
      {
        type: "p",
        text: "A misdemeanor conviction can appear on background checks, affect employment and licensing, and escalate the penalties you'd face if you were ever charged again. Treating these cases seriously now protects you later.",
      },
      { type: "h2", text: "Diversion, reductions, and clearing your record" },
      {
        type: "p",
        text: "Depending on the charge and your history, Rachel may be able to pursue a diversion program that avoids a conviction altogether, negotiate a reduction, or — for past convictions — help you seek an expungement to clean up your record.",
      },
      {
        type: "callout",
        title: "Worried about your record and your job?",
        text: "Rachel can explain your options and the realistic outcomes. Schedule a free, confidential consultation today.",
      },
    ],
    faqs: [
      {
        q: "Can a misdemeanor be expunged in California?",
        a: "Many misdemeanor convictions can be expunged after you complete probation and meet other requirements, which can help with employment and other opportunities. Rachel can evaluate whether you qualify.",
      },
      {
        q: "Will a misdemeanor show up on a background check?",
        a: "Yes, a misdemeanor conviction generally appears on background checks unless it has been expunged or otherwise cleared. That's why fighting the charge — or later clearing it — can be so important.",
      },
      {
        q: "What is misdemeanor diversion?",
        a: "Diversion allows certain defendants to complete requirements (such as classes or community service) in exchange for having the charge dismissed, avoiding a conviction. Eligibility depends on the charge and your history.",
      },
    ],
    image: images.portraitCasual,
  },
  {
    path: "criminal-defense/domestic-violence",
    parent: "criminal-defense",
    topic: "domestic-violence",
    category: "Criminal Defense",
    isPillar: false,
    navLabel: "Domestic Violence Defense",
    h1: "Ventura Domestic Violence Defense Attorney",
    heroSub:
      "Domestic violence charges carry harsh penalties and lasting stigma — even when the allegations are false. Rachel Reed defends your rights and your name.",
    metaTitle: "Ventura Domestic Violence Defense Attorney | PC 273.5 | Rachel Reed Law",
    metaDescription:
      "Ventura County domestic violence defense attorney Rachel Reed defends PC 273.5 and related charges, including false allegations. Protect your freedom and your record. Call (805) 585-5330.",
    keywords: [
      "Ventura domestic violence defense attorney",
      "PC 273.5 lawyer Ventura",
      "domestic battery attorney Ventura County",
    ],
    ...cta("Accused of Domestic Violence? Protect Yourself Now", "Defend Your Name"),
    intro: [
      {
        type: "p",
        text: "A domestic violence accusation can upend your life overnight — leading to arrest, a protective order, removal from your home, and the loss of your right to see your children or own a firearm. And these charges are often filed based on one person's word, sometimes in the heat of a breakup or custody dispute.",
      },
      {
        type: "p",
        text: "Rachel Reed defends people accused of domestic violence in Ventura County, building a careful, evidence-based defense and protecting your rights at every stage.",
      },
    ],
    body: [
      { type: "h2", text: "Common domestic violence charges" },
      {
        type: "p",
        text: "California prosecutes several offenses under the domestic violence umbrella, including corporal injury to a spouse or partner (Penal Code 273.5) and domestic battery (Penal Code 243(e)(1)). A conviction can carry jail time, mandatory batterer's programs, protective orders, and firearm restrictions.",
      },
      { type: "h2", text: "Defending against false or exaggerated allegations" },
      {
        type: "p",
        text: "False and exaggerated allegations happen — particularly when a relationship is ending or custody is contested. Rachel investigates the full story: inconsistencies in the accuser's account, lack of injuries, motive to fabricate, self-defense, and witnesses who tell a different tale.",
      },
      {
        type: "callout",
        title: "An accusation is not a conviction.",
        text: "What you do in the first days matters. Contact Rachel immediately for a confidential, judgment-free consultation.",
      },
      { type: "h2", text: "Protecting your rights and your future" },
      {
        type: "p",
        text: "Beyond the criminal case, a domestic violence charge can affect custody, immigration, employment, and gun rights. Rachel keeps the bigger picture in view and fights for an outcome that protects your whole life — not just this one case.",
      },
    ],
    faqs: [
      {
        q: "Can domestic violence charges be dropped if the accuser recants?",
        a: "Not automatically. In California, the prosecutor — not the alleged victim — decides whether to pursue charges, and cases sometimes proceed even when the accuser wants to drop them. An experienced defense attorney is still essential.",
      },
      {
        q: "What is the difference between PC 273.5 and PC 243(e)(1)?",
        a: "Penal Code 273.5 (corporal injury to a spouse or partner) requires an actual injury and is more serious, often charged as a felony. Penal Code 243(e)(1) (domestic battery) does not require a visible injury and is a misdemeanor. The distinction significantly affects potential penalties.",
      },
      {
        q: "Will a domestic violence charge affect my custody case?",
        a: "It can. Domestic violence allegations and convictions can heavily influence custody and visitation decisions, which is one more reason to mount a serious defense from the outset.",
      },
    ],
    image: images.portraitWalking,
  },

  /* ===================== PERSONAL INJURY ===================== */
  {
    path: "personal-injury",
    parent: "personal-injury",
    category: "Personal Injury",
    isPillar: true,
    navLabel: "Personal Injury",
    h1: "Ventura County Personal Injury Attorney",
    heroSub:
      "When someone else's carelessness leaves you hurt, you shouldn't pay the price. Rachel Reed fights to recover what you're truly owed.",
    metaTitle: "Ventura Personal Injury Attorney | Accidents & Injuries | Rachel Reed Law",
    metaDescription:
      "Ventura County personal injury attorney Rachel Reed helps accident victims recover compensation for medical bills, lost wages, and pain and suffering. No fee unless you win. Call (805) 585-5330.",
    keywords: [
      "Ventura personal injury attorney",
      "Ventura accident lawyer",
      "personal injury lawyer Ventura County",
      "Oxnard injury attorney",
    ],
    ...cta("Find Out What Your Case Is Really Worth", "Get a Free Case Evaluation"),
    intro: [
      {
        type: "p",
        text: "A serious injury can turn your life upside down — mounting medical bills, missed work, and pain that doesn't quit. Meanwhile, the insurance company is working to pay you as little as possible. You deserve an advocate who levels the playing field.",
      },
      {
        type: "p",
        text: "Rachel Reed helps injured people across Ventura County pursue full and fair compensation, and you pay no attorney's fee unless she recovers for you.",
      },
    ],
    highlights: [
      { title: "Car Accidents", text: "Crashes caused by negligent, distracted, or impaired drivers.", href: "/personal-injury/car-accidents" },
      { title: "Serious Injuries", text: "Compensation for medical care, lost income, and pain and suffering." },
      { title: "Insurance Disputes", text: "Pushing back when insurers lowball or deny valid claims." },
    ],
    body: [
      { type: "h2", text: "Compensation you may be entitled to" },
      {
        type: "ul",
        items: [
          "Current and future medical expenses",
          "Lost wages and reduced earning capacity",
          "Pain, suffering, and emotional distress",
          "Property damage, such as vehicle repairs",
          "Long-term care for catastrophic injuries",
        ],
      },
      { type: "h2", text: "Why the insurance company is not on your side" },
      {
        type: "p",
        text: "Insurance adjusters are trained to minimize payouts — sometimes by getting you to give a recorded statement, accept a quick lowball offer, or admit partial fault. Rachel handles the insurers so you can focus on healing, and she builds the case needed to demand what you actually deserve.",
      },
      {
        type: "callout",
        title: "No fee unless Rachel wins for you.",
        text: "Personal injury cases are handled on a contingency basis — you pay nothing up front. Get a free case evaluation today.",
      },
      { type: "h2", text: "Don't wait — California has deadlines" },
      {
        type: "p",
        text: "California generally gives injury victims two years from the date of the accident to file a lawsuit, and claims against government entities have much shorter deadlines. Evidence also disappears over time. The sooner you call, the stronger your case.",
      },
    ],
    faqs: [
      {
        q: "How much does a personal injury lawyer cost?",
        a: "Rachel handles personal injury cases on a contingency-fee basis, which means you pay no attorney's fee unless and until she recovers compensation for you. The initial consultation is free.",
      },
      {
        q: "How long do I have to file a personal injury claim in California?",
        a: "Generally two years from the date of the injury for most cases, though claims against government entities have much shorter deadlines (often six months to file a claim). Because deadlines and exceptions apply, it's best to consult an attorney promptly.",
      },
      {
        q: "What is my personal injury case worth?",
        a: "It depends on the severity of your injuries, your medical costs, lost income, and how the injury has affected your life. Rachel can evaluate your case for free and explain what a fair recovery looks like.",
      },
      {
        q: "Should I accept the insurance company's first offer?",
        a: "Usually not. First offers are often far below the true value of a claim. Have an attorney review any offer before you accept, because once you settle you typically cannot seek more.",
      },
    ],
    image: images.portraitCasual,
  },
  {
    path: "personal-injury/car-accidents",
    parent: "personal-injury",
    topic: "car-accidents",
    category: "Personal Injury",
    isPillar: false,
    navLabel: "Car Accidents",
    h1: "Ventura Car Accident Attorney",
    heroSub:
      "After a crash, the insurance company moves fast to limit what it pays. Rachel Reed moves faster to protect what you're owed.",
    metaTitle: "Ventura Car Accident Attorney | Crash Injury Lawyer | Rachel Reed Law",
    metaDescription:
      "Ventura County car accident attorney Rachel Reed helps crash victims recover for medical bills, lost wages, and pain and suffering. No fee unless you win. Free consultation — (805) 585-5330.",
    keywords: [
      "Ventura car accident attorney",
      "Ventura car accident lawyer",
      "auto accident attorney Ventura County",
      "Oxnard car accident lawyer",
    ],
    ...cta("Hurt in a Crash? Let Rachel Handle the Insurance Company", "Get a Free Case Review"),
    intro: [
      {
        type: "p",
        text: "Car accidents on the 101, the 126, and surface streets across Ventura County leave people with serious injuries and a pile of stress: medical bills, car repairs, time off work, and insurance adjusters who seem to be everywhere except on your side.",
      },
      {
        type: "p",
        text: "Rachel Reed takes that burden off your shoulders, dealing with the insurers and fighting for the full compensation you deserve.",
      },
    ],
    body: [
      { type: "h2", text: "What to do after a car accident" },
      {
        type: "ol",
        items: [
          "Get medical attention — even if you feel 'okay,' some injuries appear later.",
          "Document the scene with photos and get the other driver's information.",
          "Report the accident, but be careful what you say to insurers.",
          "Keep records of your bills, treatment, and missed work.",
          "Talk to an attorney before accepting any settlement offer.",
        ],
      },
      { type: "h2", text: "California is a fault state" },
      {
        type: "p",
        text: "California follows an at-fault system, meaning the driver responsible for the crash (through their insurance) is liable for the damage. California also uses 'pure comparative negligence,' so you can still recover even if you were partly at fault — your recovery is just reduced by your percentage of fault. Insurers exploit this to shift blame, which is why having an advocate matters.",
      },
      { type: "h2", text: "Damages you can pursue" },
      {
        type: "ul",
        items: [
          "Medical bills, including future treatment",
          "Lost income and lost earning capacity",
          "Pain, suffering, and emotional distress",
          "Vehicle repair or replacement",
        ],
      },
      {
        type: "callout",
        title: "Don't give a recorded statement first.",
        text: "Talk to Rachel before you talk to the other driver's insurance company. The consultation is free, and there's no fee unless she wins.",
      },
    ],
    faqs: [
      {
        q: "What if I was partially at fault for the accident?",
        a: "California uses pure comparative negligence, so you can still recover compensation even if you were partly to blame — your award is simply reduced by your percentage of fault. Don't assume you have no case.",
      },
      {
        q: "How long do I have to file a car accident claim in California?",
        a: "Generally two years from the date of the accident for injury claims. Waiting too long can bar your claim entirely and makes evidence harder to gather, so it's best to act promptly.",
      },
      {
        q: "Should I take the insurance company's settlement offer?",
        a: "Be very cautious. Early offers are frequently far below what your claim is worth, and accepting usually ends your right to seek more. Let Rachel evaluate any offer first — for free.",
      },
      {
        q: "What does it cost to hire Rachel for a car accident case?",
        a: "Nothing up front. Car accident cases are handled on a contingency-fee basis, so you only pay an attorney's fee if Rachel recovers compensation for you.",
      },
    ],
    image: images.portraitCasual,
  },
];

export const practiceByPath = new Map(practices.map((p) => [p.path, p]));

export function getPractice(path: string): Practice | undefined {
  return practiceByPath.get(path);
}

export function getChildren(parent: string): Practice[] {
  return practices.filter((p) => p.parent === parent && !p.isPillar);
}

export function getPillars(): Practice[] {
  return practices.filter((p) => p.isPillar);
}

export const allPracticePaths = practices.map((p) => p.path);
