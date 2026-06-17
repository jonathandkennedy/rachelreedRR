import type { Block, FAQ } from "./content";
import { images } from "./site";

export type PostCategory = "Family Law" | "Criminal Defense" | "Personal Injury";

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: PostCategory;
  date: string; // ISO
  updated?: string;
  keywords: string[];
  image: string;
  relatedPractice: { label: string; href: string };
  body: Block[];
  faqs: FAQ[];
};

export const posts: Post[] = [
  /* ---------------------- FAMILY LAW ---------------------- */
  {
    slug: "how-child-custody-is-decided-ventura-county",
    title: "How Is Child Custody Decided in Ventura County?",
    metaTitle: "How Is Child Custody Decided in Ventura County? | Rachel Reed Law",
    description:
      "A Ventura County family law attorney explains how California judges decide custody, what 'best interests of the child' really means, and how to protect your parenting time.",
    excerpt:
      "California judges decide custody using the 'best interests of the child' standard — but what does that actually mean for your case in Ventura County? Here's a clear breakdown.",
    category: "Family Law",
    date: "2026-02-18",
    keywords: [
      "child custody Ventura County",
      "best interests of the child California",
      "how is custody decided California",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Child Custody", href: "/family-law/child-custody" },
    body: [
      {
        type: "p",
        text: "If you're heading into a custody dispute in Ventura County, the single most important phrase to understand is 'the best interests of the child.' Every custody decision a California family court makes turns on it. But that phrase can feel frustratingly vague when your family's future is on the line. This guide breaks down what it actually means and how local courts apply it.",
      },
      { type: "h2", text: "Two types of custody" },
      {
        type: "p",
        text: "California separates custody into two parts. Legal custody is the authority to make major decisions about your child's health, education, religion, and general welfare. Physical custody concerns where the child lives and the day-to-day parenting schedule. Each can be 'joint' (shared) or 'sole.' It's common, for example, for parents to share joint legal custody while one parent has primary physical custody.",
      },
      { type: "h2", text: "What 'best interests of the child' means" },
      {
        type: "p",
        text: "California law directs judges to focus on the health, safety, and welfare of the child above all. In weighing what's best, a Ventura County judge will typically consider factors like these:",
      },
      {
        type: "ul",
        items: [
          "The health, safety, and welfare of the child",
          "Each parent's ability to care for the child day to day",
          "Any history of abuse, neglect, or domestic violence",
          "Any history of substance abuse",
          "The nature and quality of the child's relationship with each parent",
          "The benefit of frequent and continuing contact with both parents",
        ],
      },
      {
        type: "p",
        text: "Notably, the court does not favor a parent based on gender. Mothers and fathers start on equal footing — a point we'll come back to, because many fathers wrongly assume the deck is stacked against them.",
      },
      { type: "h2", text: "How custody cases actually move through court" },
      {
        type: "p",
        text: "Many Ventura County custody disputes are first routed to Child Custody Recommending Counseling (sometimes called mediation), where a neutral counselor meets with both parents to try to reach an agreement. If the parents can't agree, the counselor may make a recommendation to the judge, and the case proceeds to a hearing where each side presents evidence.",
      },
      {
        type: "callout",
        title: "Evidence wins custody cases.",
        text: "Judges decide based on what's in front of them. The parent who documents the facts clearly — schedules, communications, involvement, and any safety concerns — gives the court a reason to rule in their favor.",
      },
      { type: "h2", text: "How to protect your parenting time" },
      {
        type: "ol",
        items: [
          "Keep a calendar of your actual parenting time and involvement.",
          "Communicate with your co-parent in writing, and keep it civil.",
          "Document any safety concerns or violations of existing orders.",
          "Stay focused on your child's needs, not on 'winning' against your ex.",
          "Talk to an experienced family law attorney early.",
        ],
      },
      {
        type: "p",
        text: "Custody is the part of family law where preparation and credibility matter most. A parent who shows up organized, calm, and child-focused — with an advocate who knows how to present that to the court — has a real advantage.",
      },
    ],
    faqs: [
      {
        q: "Does California favor mothers in custody cases?",
        a: "No. California law prohibits favoring a parent based on gender. Both parents are entitled to equal consideration, and courts decide based on the best interests of the child.",
      },
      {
        q: "At what age can a child choose which parent to live with in California?",
        a: "There's no fixed age at which a child gets to decide. California courts may consider the preference of a child who is mature enough — often around age 14 the court must give the child the opportunity to address the court if they wish — but the child's preference is just one factor, never the sole deciding one.",
      },
      {
        q: "Can a custody order be changed later?",
        a: "Yes. If there's been a significant change in circumstances, you can ask the court to modify custody or visitation. An attorney can help you seek a change or defend against one.",
      },
    ],
  },
  {
    slug: "how-long-does-divorce-take-california-ventura",
    title: "How Long Does a Divorce Take in California? A Ventura County Guide",
    metaTitle: "How Long Does a Divorce Take in California? | Ventura County Guide",
    description:
      "A Ventura divorce attorney explains California's six-month waiting period, what makes divorces take longer, and how to keep your case moving efficiently.",
    excerpt:
      "California has a mandatory six-month waiting period — but that's the minimum, not the average. Here's what really drives how long a Ventura County divorce takes.",
    category: "Family Law",
    date: "2026-03-04",
    keywords: [
      "how long does divorce take California",
      "California divorce waiting period",
      "Ventura divorce timeline",
    ],
    image: images.portraitSuited,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "It's one of the first questions almost every client asks: how long is this going to take? The honest answer is that it depends — but understanding the moving parts will help you set realistic expectations and avoid delays you can control.",
      },
      { type: "h2", text: "The six-month minimum" },
      {
        type: "p",
        text: "California imposes a mandatory six-month waiting period. The clock starts when the responding spouse is served with the divorce petition (or makes an appearance), and a divorce cannot be finalized before it runs. Even if you and your spouse agree on everything from day one, you are not legally divorced until at least six months have passed.",
      },
      {
        type: "callout",
        title: "Six months is the floor, not the ceiling.",
        text: "An uncontested divorce may finalize close to the six-month minimum. Contested cases involving property, support, or custody disputes often take longer.",
      },
      { type: "h2", text: "What makes a divorce take longer" },
      {
        type: "ul",
        items: [
          "Disagreements over child custody and visitation",
          "Disputes about dividing property, businesses, or retirement accounts",
          "One spouse hiding income or assets, requiring formal discovery",
          "Spousal support disputes",
          "A spouse who is uncooperative or hard to serve",
          "Court scheduling and a crowded family-law calendar",
        ],
      },
      { type: "h2", text: "What you can do to keep things moving" },
      {
        type: "p",
        text: "While you can't shorten the six-month waiting period, you can avoid unnecessary delays. Completing your financial disclosures fully and promptly, responding to requests on time, and approaching negotiation reasonably all keep your case on track. Cases drag on most when one side stonewalls — and a prepared attorney can use the court's tools to push a stalling spouse forward.",
      },
      { type: "h2", text: "Uncontested vs. contested: a realistic range" },
      {
        type: "p",
        text: "A truly uncontested divorce where both spouses cooperate can often wrap up in roughly six to nine months. A contested divorce with significant disputes can take a year or more. The path you're on depends largely on how reasonable both sides are willing to be — and on having counsel who can resolve issues efficiently while protecting your interests.",
      },
    ],
    faqs: [
      {
        q: "Can I get divorced faster than six months in California?",
        a: "No. The six-month waiting period is mandatory and begins when the responding spouse is served or appears. You cannot be legally divorced before it ends, even with a full agreement.",
      },
      {
        q: "Does it matter who files for divorce first in California?",
        a: "California is a no-fault state, so filing first doesn't determine the outcome. There can be practical and strategic considerations, but neither spouse is penalized simply for being the petitioner or the respondent.",
      },
      {
        q: "How can I speed up my divorce?",
        a: "Cooperate on disclosures, respond promptly, and negotiate reasonably. Most delays come from disputes and stalling. An experienced attorney can keep your case moving and use court tools when the other side won't cooperate.",
      },
    ],
  },
  {
    slug: "fathers-rights-california-ventura-county",
    title: "Fathers' Rights in California: What Every Dad in Ventura County Should Know",
    metaTitle: "Fathers' Rights in California | Ventura County | Rachel Reed Law",
    description:
      "California gives fathers equal custody rights — but dads still need to protect them. A Ventura family law attorney explains your rights and how to enforce them.",
    excerpt:
      "Many fathers assume the courts are against them. They're not — California law gives dads equal footing. Here's how to protect your relationship with your kids.",
    category: "Family Law",
    date: "2026-03-22",
    keywords: [
      "fathers rights California",
      "fathers rights attorney Ventura",
      "dad custody rights Ventura County",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Child Custody", href: "/family-law/child-custody" },
    body: [
      {
        type: "p",
        text: "A lot of fathers walk into a custody case already feeling defeated, convinced that California courts automatically favor mothers. That belief is not only wrong — it can become a self-fulfilling prophecy when dads give up before they start. Here's the reality, and what you can do about it.",
      },
      { type: "h2", text: "California law does not favor mothers" },
      {
        type: "p",
        text: "California law is explicitly gender-neutral when it comes to custody. Judges are required to decide based on the best interests of the child, not on whether a parent is the mother or the father. A father who is involved, stable, and focused on his children stands on equal footing in court.",
      },
      {
        type: "quote",
        text: "If you are a father trying to do the best for your children, this is who you want. She did what was best for our children.",
        cite: "Bryan W., Oxnard — Yelp review of Rachel Reed Law",
      },
      { type: "h2", text: "Establishing paternity (when parents aren't married)" },
      {
        type: "p",
        text: "If you weren't married to your child's mother, your first step to securing custody or visitation rights is usually establishing legal paternity. Until paternity is established, an unmarried father may have limited legal rights to custody. Once it's established, you can pursue custody and visitation just like any other parent.",
      },
      { type: "h2", text: "Protecting your time with your kids" },
      {
        type: "ul",
        items: [
          "Stay actively involved — attend appointments, school events, and activities.",
          "Keep a record of your parenting time and contributions.",
          "Follow existing court orders to the letter, even when your ex doesn't.",
          "Communicate respectfully and in writing.",
          "Don't walk away from the process — silence is often read as disinterest.",
        ],
      },
      {
        type: "callout",
        title: "Being a present, engaged father is your strongest evidence.",
        text: "Courts respond to fathers who show up and stay involved. Document it, and let an advocate present it to the judge.",
      },
      { type: "h2", text: "When your co-parent won't cooperate" },
      {
        type: "p",
        text: "If your child's other parent is withholding the kids, ignoring the custody order, or making false allegations, you have options. A family law attorney can help you enforce your existing rights, seek a modification, and protect yourself from baseless accusations that could otherwise damage your case.",
      },
    ],
    faqs: [
      {
        q: "Do fathers have the same custody rights as mothers in California?",
        a: "Yes. California law is gender-neutral. Custody is decided by the best interests of the child, and fathers are entitled to equal consideration.",
      },
      {
        q: "How does an unmarried father get custody rights in California?",
        a: "An unmarried father usually needs to establish legal paternity first. Once paternity is established, he can seek custody and visitation on the same footing as any other parent.",
      },
      {
        q: "What can I do if my ex won't let me see my kids?",
        a: "If there's a custody order in place and the other parent is violating it, you can ask the court to enforce it. If there's no order yet, an attorney can help you obtain one. Don't simply give up your time — document what's happening and seek help.",
      },
    ],
  },

  /* ---------------------- CRIMINAL DEFENSE ---------------------- */
  {
    slug: "arrested-dui-ventura-county-first-10-days",
    title: "Arrested for DUI in Ventura County? The First 10 Days Matter Most",
    metaTitle: "Arrested for DUI in Ventura County? The First 10 Days | Rachel Reed Law",
    description:
      "After a DUI arrest in Ventura County you have just 10 days to protect your license. A DUI defense attorney explains the steps to take immediately.",
    excerpt:
      "A DUI arrest starts a hidden clock: you generally have just 10 days to request a DMV hearing or your license suspension begins automatically. Here's what to do.",
    category: "Criminal Defense",
    date: "2026-02-26",
    keywords: [
      "DUI arrest Ventura County",
      "DMV hearing 10 days California",
      "Ventura DUI attorney",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "DUI Defense", href: "/criminal-defense/dui" },
    body: [
      {
        type: "p",
        text: "If you've just been arrested for DUI in Ventura County, you're probably anxious, embarrassed, and unsure what happens next. Take a breath — but don't wait. Some of the most important steps in a DUI case happen in the first 10 days, before your first court date.",
      },
      { type: "h2", text: "A DUI is actually two cases" },
      {
        type: "p",
        text: "Most people don't realize a DUI arrest triggers two separate processes. One is the criminal case handled by the court. The other is an administrative case handled by the DMV, which can suspend your driver's license independent of what happens in court. Each has its own rules and deadlines.",
      },
      {
        type: "callout",
        title: "The 10-day DMV deadline is the one people miss.",
        text: "You generally have just 10 days from your arrest to request a DMV hearing. Miss it, and your license suspension can begin automatically — regardless of how your criminal case turns out.",
      },
      { type: "h2", text: "What to do in the first 10 days" },
      {
        type: "ol",
        items: [
          "Contact a DUI defense attorney as soon as possible.",
          "Request your DMV hearing within the 10-day window (your attorney can do this for you).",
          "Write down everything you remember about the stop and arrest while it's fresh.",
          "Locate your paperwork, including any temporary license the officer gave you.",
          "Avoid posting about the arrest on social media.",
        ],
      },
      { type: "h2", text: "Why early action helps your defense" },
      {
        type: "p",
        text: "Requesting the DMV hearing does more than protect your license — it can pause the suspension and gives your attorney an early opportunity to review the evidence against you. Meanwhile, the details of the traffic stop, the field sobriety tests, and the breath or blood testing are all potential points of challenge. The sooner those are examined, the better.",
      },
      { type: "h2", text: "DUIs are defensible" },
      {
        type: "p",
        text: "A DUI charge is not a foregone conclusion. Was the stop lawful? Were the tests administered correctly? Was the breath machine properly calibrated? Were your rights respected? These questions can lead to reduced charges or even dismissal. An honest case evaluation will tell you where you stand.",
      },
    ],
    faqs: [
      {
        q: "How many days do I have to request a DMV hearing after a DUI?",
        a: "Generally 10 days from the date of arrest. Requesting it in time can pause the automatic license suspension and lets your attorney challenge the evidence. Contact a lawyer immediately so the deadline isn't missed.",
      },
      {
        q: "Will I automatically lose my license after a DUI in California?",
        a: "Not automatically — but if you don't request a DMV hearing within about 10 days, the suspension can take effect on its own. Acting quickly preserves your options.",
      },
      {
        q: "Is it worth hiring an attorney for a first DUI?",
        a: "Yes. A first DUI still carries serious, lasting consequences. An attorney can identify defenses, handle the DMV process, and work to reduce or dismiss the charges.",
      },
    ],
  },
  {
    slug: "misdemeanor-vs-felony-california",
    title: "Misdemeanor vs. Felony in California: What the Difference Means for You",
    metaTitle: "Misdemeanor vs. Felony in California | What It Means | Rachel Reed Law",
    description:
      "A Ventura criminal defense attorney explains the difference between misdemeanors and felonies in California, what 'wobblers' are, and why the distinction matters.",
    excerpt:
      "The line between a misdemeanor and a felony can change your life — jail vs. prison, your rights, your record. Here's how California draws that line, and where 'wobblers' fit in.",
    category: "Criminal Defense",
    date: "2026-03-12",
    keywords: [
      "misdemeanor vs felony California",
      "what is a wobbler California",
      "Ventura criminal defense attorney",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Criminal Defense", href: "/criminal-defense" },
    body: [
      {
        type: "p",
        text: "When you're facing criminal charges, one of the first things you need to understand is how serious they are under the law. In California, that often comes down to whether you're charged with a misdemeanor or a felony — and sometimes that line is more flexible than people realize.",
      },
      { type: "h2", text: "The basic difference" },
      {
        type: "p",
        text: "A misdemeanor is a less serious offense generally punishable by up to a year in county jail, along with fines, probation, and other conditions. A felony is more serious and can carry a sentence in state prison, along with far longer-lasting consequences. There's also a third, least-serious category — infractions — which are typically punishable by a fine and no jail time.",
      },
      { type: "h2", text: "What is a 'wobbler'?" },
      {
        type: "p",
        text: "California has a category of offenses known as 'wobblers' — crimes that can be charged as either a misdemeanor or a felony depending on the circumstances and the defendant's criminal history. Whether a wobbler is charged as a felony or a misdemeanor can have an enormous impact on your life, which is exactly why early, skilled advocacy matters.",
      },
      {
        type: "callout",
        title: "The charge level isn't always fixed.",
        text: "With a wobbler, a defense attorney may be able to persuade the prosecutor or judge to treat the offense as a misdemeanor instead of a felony — or, in some cases, reduce a felony to a misdemeanor later.",
      },
      { type: "h2", text: "Why the distinction matters so much" },
      {
        type: "p",
        text: "A felony conviction reaches far beyond any jail or prison time. It can affect your right to own a firearm, your professional licenses, your immigration status, your eligibility for certain jobs and housing, and more. A misdemeanor is serious too, but the long-term collateral consequences are generally less severe. Understanding which category you're in — and fighting to stay in the less serious one — is a core part of any defense.",
      },
      { type: "h2", text: "Can charges be reduced?" },
      {
        type: "p",
        text: "Often, yes. Depending on the offense and the facts, a felony wobbler may be reduced to a misdemeanor, charges may be lowered through negotiation, or certain cases may qualify for diversion that avoids a conviction entirely. A defense attorney evaluates every available path.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between a misdemeanor and a felony in California?",
        a: "A misdemeanor is generally punishable by up to a year in county jail, while a felony can carry state prison time and more severe long-term consequences. Some offenses ('wobblers') can be charged either way.",
      },
      {
        q: "Can a felony be reduced to a misdemeanor in California?",
        a: "In some cases, yes — particularly for 'wobbler' offenses, either during the case or after completing probation. Whether it's possible depends on the specific charge and facts. An attorney can assess your eligibility.",
      },
      {
        q: "What is an infraction?",
        a: "An infraction is the least serious type of offense, usually punishable by a fine with no jail time and no right to a jury trial. Many traffic violations are infractions.",
      },
    ],
  },
  {
    slug: "falsely-accused-domestic-violence-ventura-county",
    title: "Falsely Accused of Domestic Violence in Ventura County: What to Do Next",
    metaTitle: "Falsely Accused of Domestic Violence in Ventura County | Rachel Reed Law",
    description:
      "False domestic violence accusations can cost you your home, your kids, and your gun rights. A Ventura defense attorney explains the steps to protect yourself.",
    excerpt:
      "A false domestic violence accusation can upend your life overnight. What you do in the first days matters enormously. Here's how to protect yourself.",
    category: "Criminal Defense",
    date: "2026-03-30",
    keywords: [
      "falsely accused domestic violence California",
      "false domestic violence allegations Ventura",
      "PC 273.5 defense Ventura",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Domestic Violence Defense", href: "/criminal-defense/domestic-violence" },
    body: [
      {
        type: "p",
        text: "Few accusations are as damaging as domestic violence — and few are as easy to make. In the heat of a breakup, a custody fight, or an argument that got out of hand, people sometimes make allegations that aren't true. If that's happened to you, the consequences are very real, and how you respond in the first days matters.",
      },
      { type: "h2", text: "Why false accusations are so dangerous" },
      {
        type: "p",
        text: "A domestic violence allegation can lead to your arrest, a protective order forcing you out of your own home, the loss of your right to see your children, and a requirement to surrender your firearms — sometimes before you've had any real chance to tell your side. The stigma alone can affect your job and reputation.",
      },
      { type: "h2", text: "What to do if you've been falsely accused" },
      {
        type: "ol",
        items: [
          "Do not contact your accuser — it can violate a protective order and make things worse.",
          "Do not discuss the case with police without a lawyer present.",
          "Preserve evidence: texts, emails, photos, voicemails, and location records.",
          "Write down a detailed timeline of events while it's fresh.",
          "Identify any witnesses who can support your account.",
          "Contact a criminal defense attorney immediately.",
        ],
      },
      {
        type: "callout",
        title: "An accusation is not a conviction.",
        text: "The prosecution has to prove its case. A careful, evidence-based defense can expose inconsistencies, motive to fabricate, and the truth of what happened.",
      },
      { type: "h2", text: "The prosecutor decides — not your accuser" },
      {
        type: "p",
        text: "An important and often misunderstood point: in California, the prosecutor decides whether to pursue domestic violence charges, not the alleged victim. Even if your accuser later wants to 'drop the charges' or recants, the case can proceed. That's why you can't simply rely on the situation resolving itself — you need a defense.",
      },
      { type: "h2", text: "Protecting your whole life, not just the case" },
      {
        type: "p",
        text: "A domestic violence charge can ripple into your custody case, your immigration status, your job, and your gun rights. A good defense keeps all of that in view, fighting not just to beat the charge but to protect everything connected to it.",
      },
    ],
    faqs: [
      {
        q: "Can domestic violence charges be dropped if my accuser admits they lied?",
        a: "Not automatically. In California, the prosecutor decides whether to pursue charges, not the alleged victim. A case can move forward even if the accuser recants, so you still need a defense.",
      },
      {
        q: "What should I do first if I'm falsely accused of domestic violence?",
        a: "Avoid all contact with your accuser, don't talk to police without an attorney, preserve any evidence and a timeline, and contact a criminal defense attorney immediately. Early action protects you.",
      },
      {
        q: "Can a false accusation affect my custody case?",
        a: "Yes. Domestic violence allegations can heavily influence custody and visitation decisions, which is one more reason to take even a false accusation seriously and mount a defense right away.",
      },
    ],
  },
  {
    slug: "how-property-divided-california-divorce",
    title: "How Is Property Divided in a California Divorce?",
    metaTitle: "How Is Property Divided in a California Divorce? | Rachel Reed Law",
    description:
      "California is a community-property state — but dividing assets is rarely simple. A Ventura divorce attorney explains community vs. separate property and what's really at stake.",
    excerpt:
      "California splits community property 50/50 — in theory. In practice, characterizing, valuing, and tracing assets is where divorces are won or lost. Here's how it works.",
    category: "Family Law",
    date: "2026-04-08",
    keywords: [
      "community property California",
      "how is property divided in California divorce",
      "Ventura divorce property division",
    ],
    image: images.portraitSuited,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "One of the biggest sources of conflict in any divorce is money: the house, the retirement accounts, the business, the debts. In California, the starting point is the community-property rule — but as anyone who has been through it can tell you, the details are where things get complicated.",
      },
      { type: "h2", text: "Community property vs. separate property" },
      {
        type: "p",
        text: "California treats most assets and debts acquired during the marriage as community property, owned equally by both spouses and generally divided 50/50 at divorce. Separate property — what you owned before the marriage, plus gifts and inheritances received during it — typically stays with the spouse who owns it.",
      },
      {
        type: "p",
        text: "That sounds clean, but the line blurs fast. Separate and community funds get commingled in shared accounts. A home owned before marriage gains value, or gets paid down with community income. A business started before the wedding grows during it. Each of these situations requires careful analysis — and is often hotly contested.",
      },
      { type: "h2", text: "Assets that commonly require careful handling" },
      {
        type: "ul",
        items: [
          "The family home and other real estate",
          "Retirement accounts and pensions (which may need a special order to divide)",
          "A business or professional practice",
          "Stock options and deferred compensation",
          "Commingled bank and investment accounts",
          "Community debts and credit cards",
        ],
      },
      { type: "h2", text: "Why full disclosure matters" },
      {
        type: "p",
        text: "California law requires both spouses to fully and honestly disclose their finances. When one spouse tries to hide income or assets, the court has tools — and penalties — to address it. An attorney can use formal discovery and, when necessary, forensic accountants to make sure the division is based on the complete, truthful picture.",
      },
      {
        type: "callout",
        title: "Protect what you've worked for.",
        text: "Before you agree to any division of property, have Rachel review the full financial picture. Schedule a free, confidential consultation.",
      },
    ],
    faqs: [
      {
        q: "Is everything split 50/50 in a California divorce?",
        a: "Community property — generally what's acquired during the marriage — is divided equally. Separate property, such as what you owned before marriage or received by gift or inheritance, usually stays with you. How assets are characterized is often disputed.",
      },
      {
        q: "What happens to the house in a divorce?",
        a: "It depends on whether the home is community or separate property and on each spouse's circumstances. Options include selling and splitting the proceeds, one spouse buying out the other, or deferred arrangements. An attorney can help you pursue the outcome that fits your situation.",
      },
      {
        q: "How is a business divided in a California divorce?",
        a: "If a business is community property, its value must be determined — often with a valuation expert — and divided. Even a business started before marriage can have a community-property component if it grew during the marriage. These cases require careful, knowledgeable handling.",
      },
    ],
  },
  {
    slug: "spousal-support-california-how-much-how-long",
    title: "Spousal Support in California: How Much and How Long?",
    metaTitle: "Spousal Support in California: How Much & How Long? | Rachel Reed Law",
    description:
      "A Ventura family law attorney explains how California courts decide spousal support (alimony) — the factors involved, how long it lasts, and when it can change.",
    excerpt:
      "Will you pay or receive spousal support — and for how long? California doesn't use a simple formula for long-term support. Here's what actually drives the decision.",
    category: "Family Law",
    date: "2026-04-22",
    keywords: [
      "spousal support California",
      "alimony California how long",
      "Ventura spousal support attorney",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Child & Spousal Support", href: "/family-law/support" },
    body: [
      {
        type: "p",
        text: "Spousal support — what many people still call alimony — is one of the most emotionally charged issues in a divorce. Whether you expect to pay or receive it, understanding how California courts approach support helps you plan and negotiate from a position of knowledge.",
      },
      { type: "h2", text: "Temporary vs. long-term support" },
      {
        type: "p",
        text: "There are two phases. Temporary support can be ordered while the divorce is pending, often using a local guideline calculation to maintain the status quo. Long-term (or 'permanent') support, decided at the end of the case, is not set by a simple formula — instead, the judge weighs a list of statutory factors.",
      },
      { type: "h2", text: "What courts consider for long-term support" },
      {
        type: "ul",
        items: [
          "The length of the marriage",
          "The marital standard of living",
          "Each spouse's earning capacity and marketable skills",
          "The needs of each party and their ability to pay",
          "Contributions to the other spouse's education or career",
          "The age and health of both spouses",
        ],
      },
      { type: "h2", text: "How long does support last?" },
      {
        type: "p",
        text: "As a general guideline, for marriages of less than ten years, support often lasts about half the length of the marriage. For marriages of ten years or longer — considered 'long-term' marriages — the court may decline to set a fixed end date, retaining the ability to revisit support later. These are guidelines, not guarantees, and the specifics of your case matter.",
      },
      {
        type: "callout",
        title: "Don't guess what support will look like.",
        text: "Rachel can review your situation and give you a realistic picture of spousal support. Schedule a free, confidential consultation.",
      },
      { type: "h2", text: "Support can change" },
      {
        type: "p",
        text: "Spousal support orders can often be modified if circumstances change significantly — for example, a job loss, a substantial income change, or the supported spouse remarrying (which typically ends support). If your situation has changed, you may have grounds to seek a modification.",
      },
    ],
    faqs: [
      {
        q: "How is spousal support calculated in California?",
        a: "Temporary support is often calculated with a local guideline formula, but long-term support is based on a set of statutory factors — including the length of the marriage, the marital standard of living, and each spouse's earning capacity — rather than a fixed formula.",
      },
      {
        q: "How long does spousal support last in California?",
        a: "As a general guideline, support for marriages under ten years often lasts about half the length of the marriage. For marriages of ten years or more, the court may not set an end date. Many factors apply, so an individual assessment is important.",
      },
      {
        q: "Does spousal support end if my ex remarries?",
        a: "Generally, yes. Spousal support typically terminates when the supported spouse remarries, and it may also be modified if there's a significant change in circumstances. An attorney can advise on your specific situation.",
      },
    ],
  },
  {
    slug: "what-to-do-after-car-accident-ventura-county",
    title: "What to Do After a Car Accident in Ventura County",
    metaTitle: "What to Do After a Car Accident in Ventura County | Rachel Reed Law",
    description:
      "Hurt in a crash? A Ventura personal injury attorney walks through the steps to take after a car accident to protect your health and your right to compensation.",
    excerpt:
      "The minutes and days after a crash shape your whole claim. Here's a clear, step-by-step guide to protecting your health — and your right to compensation — after a Ventura County accident.",
    category: "Personal Injury",
    date: "2026-05-06",
    keywords: [
      "what to do after a car accident California",
      "Ventura car accident steps",
      "Ventura car accident attorney",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Car Accidents", href: "/personal-injury/car-accidents" },
    body: [
      {
        type: "p",
        text: "A car accident is disorienting and stressful, whether it happens on the 101, the 126, or a surface street in your neighborhood. What you do in the moments and days afterward can have a real impact on both your recovery and any claim for compensation. Here's a clear roadmap.",
      },
      { type: "h2", text: "In the first minutes" },
      {
        type: "ol",
        items: [
          "Check for injuries and call 911 if anyone is hurt.",
          "Move to safety if you can, and turn on your hazard lights.",
          "Call the police so there's an official report of the crash.",
          "Exchange information with the other driver — but don't admit fault.",
          "Photograph the vehicles, the scene, license plates, and any visible injuries.",
          "Get contact information from any witnesses.",
        ],
      },
      { type: "h2", text: "Get medical attention — even if you feel fine" },
      {
        type: "p",
        text: "Adrenaline can mask injuries, and some — like whiplash or concussions — appear hours or days later. Seeing a doctor promptly protects your health and creates a medical record connecting your injuries to the crash, which is important if you later pursue a claim.",
      },
      {
        type: "callout",
        title: "Be careful what you say to the insurance company.",
        text: "Insurers may call quickly asking for a recorded statement. Before you give one — or accept any offer — talk to Rachel for free.",
      },
      { type: "h2", text: "In the days that follow" },
      {
        type: "ul",
        items: [
          "Keep all records: medical bills, treatment notes, and proof of missed work.",
          "Follow your doctor's treatment plan.",
          "Avoid posting about the accident on social media.",
          "Don't accept a quick settlement before you understand the full extent of your injuries.",
          "Consult a personal injury attorney before dealing with the insurance company.",
        ],
      },
      {
        type: "p",
        text: "California generally gives you two years from the date of the accident to file an injury lawsuit, but evidence fades and memories blur. Acting sooner protects your claim.",
      },
    ],
    faqs: [
      {
        q: "Should I call the police after a minor car accident?",
        a: "Yes. A police report creates an official record of the crash that can be important later, even if the accident seems minor. It documents the scene, the parties, and often a preliminary view of what happened.",
      },
      {
        q: "What if I feel fine after the accident — do I still need a doctor?",
        a: "Yes. Some injuries, like whiplash or concussions, show up hours or days later. Getting checked protects your health and creates a medical record linking any injuries to the crash.",
      },
      {
        q: "How soon should I talk to a lawyer after a car accident?",
        a: "As soon as practical. Early legal advice helps you avoid mistakes with insurers, preserve evidence, and protect your claim. The consultation is free, and car accident cases are handled on a contingency basis.",
      },
    ],
  },
  {
    slug: "personal-injury-statute-of-limitations-california",
    title: "How Long Do You Have to File a Personal Injury Claim in California?",
    metaTitle: "Personal Injury Statute of Limitations in California | Rachel Reed Law",
    description:
      "A Ventura personal injury attorney explains California's two-year deadline, the much shorter deadlines for claims against government entities, and key exceptions.",
    excerpt:
      "Wait too long and you can lose your right to compensation entirely. Here's how California's personal injury deadlines work — and why some claims have far shorter windows.",
    category: "Personal Injury",
    date: "2026-05-20",
    keywords: [
      "personal injury statute of limitations California",
      "how long to file injury claim California",
      "Ventura personal injury deadline",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Personal Injury", href: "/personal-injury" },
    body: [
      {
        type: "p",
        text: "If you've been injured by someone else's negligence, one of the most important things to understand is the deadline for taking action. It's called the statute of limitations, and missing it can permanently bar you from recovering compensation — no matter how strong your case is.",
      },
      { type: "h2", text: "The general rule: two years" },
      {
        type: "p",
        text: "For most personal injury cases in California — including car accidents and other negligence claims — you generally have two years from the date of the injury to file a lawsuit. If you don't file within that window, the court will usually dismiss your case.",
      },
      { type: "h2", text: "Claims against the government have much shorter deadlines" },
      {
        type: "callout",
        title: "Injured by a government entity? Act fast.",
        text: "Claims against a city, county, or state agency often require filing a formal claim within just six months. Don't wait — contact Rachel right away.",
      },
      {
        type: "p",
        text: "If your injury involves a government entity — for example, a crash with a city vehicle or a hazard on public property — you typically must file an administrative claim within six months before you can even sue. These shortened deadlines catch many people off guard.",
      },
      { type: "h2", text: "Exceptions that can change the deadline" },
      {
        type: "ul",
        items: [
          "The 'discovery rule,' when an injury isn't discovered right away",
          "Injuries to minors, which can pause the clock",
          "Cases where the at-fault party leaves the state",
        ],
      },
      {
        type: "p",
        text: "Because exceptions are fact-specific and the consequences of missing a deadline are so severe, the safest course is to talk to an attorney as soon as possible after an injury.",
      },
    ],
    faqs: [
      {
        q: "How long do I have to file a personal injury lawsuit in California?",
        a: "Generally two years from the date of injury for most cases. If you miss the deadline, your claim is usually barred, so it's best to act well before then.",
      },
      {
        q: "Is the deadline different for claims against the government?",
        a: "Yes. Claims against government entities typically require filing a formal administrative claim within six months — much shorter than the standard two-year period. These cases require prompt action.",
      },
      {
        q: "What if I didn't realize I was injured right away?",
        a: "California's 'discovery rule' can sometimes extend the deadline to when an injury was discovered or reasonably should have been. These situations are fact-specific, so consult an attorney promptly.",
      },
    ],
  },
  {
    slug: "how-to-expunge-criminal-record-california",
    title: "How to Expunge a Criminal Record in California",
    metaTitle: "How to Expunge a Criminal Record in California | Rachel Reed Law",
    description:
      "A Ventura criminal defense attorney explains California expungement — who qualifies, what it does, and how clearing your record can open doors to jobs and housing.",
    excerpt:
      "An old conviction can follow you for years — but it doesn't have to. Here's how expungement works in California, who qualifies, and what it can do for your future.",
    category: "Criminal Defense",
    date: "2026-06-03",
    keywords: [
      "expungement California",
      "how to expunge a record California",
      "Ventura expungement attorney",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Misdemeanor Defense", href: "/criminal-defense/misdemeanors" },
    body: [
      {
        type: "p",
        text: "A past conviction can quietly hold you back for years — costing you job offers, housing applications, and peace of mind every time a background check comes up. The good news is that many Californians are eligible to clear their record through expungement.",
      },
      { type: "h2", text: "What expungement does" },
      {
        type: "p",
        text: "In California, an expungement (under Penal Code 1203.4) generally allows the court to withdraw the guilty plea or verdict and dismiss the case. While it doesn't erase the arrest entirely, it means that in most situations — including private job applications — you can lawfully state you were not convicted of that offense.",
      },
      { type: "h2", text: "Who qualifies?" },
      {
        type: "p",
        text: "Eligibility depends on the offense and how the case was resolved. In general, you may qualify if you completed probation (or the court grants early termination), you're not currently charged with or serving a sentence for another offense, and the conviction wasn't for certain serious crimes. Many misdemeanors and some felonies can be expunged.",
      },
      {
        type: "ul",
        items: [
          "You completed probation successfully (or are granted early termination)",
          "You're not currently facing other charges or serving another sentence",
          "The offense is eligible under California law",
        ],
      },
      {
        type: "callout",
        title: "Find out if you qualify to clear your record.",
        text: "Rachel can review your history and explain your options for a fresh start. Schedule a free, confidential consultation.",
      },
      { type: "h2", text: "Why it's worth doing" },
      {
        type: "p",
        text: "Clearing your record can remove a major obstacle to employment and housing and give you the fresh start you've earned. For many people, expungement is one of the most meaningful steps they can take toward moving on.",
      },
    ],
    faqs: [
      {
        q: "Does expungement completely erase my record in California?",
        a: "Not entirely — the arrest record remains — but an expungement generally dismisses the conviction so that, in most situations including private employment, you can state you were not convicted. It removes a significant barrier in everyday life.",
      },
      {
        q: "Can a felony be expunged in California?",
        a: "Some felonies can be expunged, particularly those eligible for reduction to a misdemeanor or where probation (not prison) was imposed. Eligibility is fact-specific, so it's best to have an attorney review your case.",
      },
      {
        q: "How do I start the expungement process?",
        a: "An attorney can review your record, confirm your eligibility, and file the petition with the court. Reach out for a consultation to find out whether you qualify.",
      },
    ],
  },
  {
    slug: "drop-domestic-violence-restraining-order-california",
    title: "Can You Get a Domestic Violence Restraining Order Dropped in California?",
    metaTitle: "Can You Drop a Domestic Violence Restraining Order in California? | Rachel Reed Law",
    description:
      "A Ventura attorney explains whether a domestic violence restraining order can be dropped or changed in California, and what to do whether you sought it or it's against you.",
    excerpt:
      "Whether you requested a restraining order or one was filed against you, your situation can change. Here's what California allows when it comes to dropping or modifying a DVRO.",
    category: "Family Law",
    date: "2026-06-04",
    keywords: [
      "drop restraining order California",
      "modify domestic violence restraining order California",
      "Ventura restraining order attorney",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Restraining Orders", href: "/family-law/domestic-violence" },
    body: [
      {
        type: "p",
        text: "Restraining orders are issued in tense, fast-moving situations — and feelings and circumstances can change afterward. People often ask whether a domestic violence restraining order (DVRO) can be dropped or changed. The answer depends on who's asking and where things stand.",
      },
      { type: "h2", text: "If you requested the restraining order" },
      {
        type: "p",
        text: "If you're the protected person and you no longer want the order, you can ask the court to dissolve or modify it. Importantly, though, the decision rests with the judge — not solely with you. The court will consider whether dropping the order is appropriate, and it generally won't allow informal violations in the meantime. Until a judge changes it, the order remains in full effect.",
      },
      { type: "h2", text: "If the order is against you" },
      {
        type: "p",
        text: "If you're the restrained person, you cannot simply have the order dropped on your own — but you can contest it at the hearing, present evidence, and ask the court not to issue or extend it. You can also request changes if circumstances warrant. What you should never do is contact the protected person to 'work it out,' because that can violate the order and lead to serious criminal consequences.",
      },
      {
        type: "callout",
        title: "Don't navigate a restraining order alone.",
        text: "Whether you're seeking to change an order or defending against one, the timeline is short and the stakes are high. Contact Rachel right away.",
      },
      { type: "h2", text: "Why these cases are tricky" },
      {
        type: "p",
        text: "A DVRO can affect custody, firearm rights, and where you can live — so courts take requests to drop or modify them seriously. There may also be a related criminal case proceeding independently. Having an attorney ensures your request is presented properly and your rights are protected.",
      },
    ],
    faqs: [
      {
        q: "Can the protected person just drop a restraining order in California?",
        a: "Not unilaterally. The protected person can ask the court to dissolve or modify the order, but a judge decides whether to grant it. Until the court changes it, the order stays in effect and must be followed.",
      },
      {
        q: "Can I contact the other person if we've reconciled?",
        a: "No — not while the order is in place. Even mutual contact can violate the order and lead to criminal charges. Any change must go through the court first.",
      },
      {
        q: "What can I do if a restraining order was filed against me?",
        a: "You can contest it at the hearing, present your evidence, and ask the court not to issue or extend it. An attorney can build your defense and protect your custody, firearm, and housing rights.",
      },
    ],
  },

  /* ---------- Ventura County family-law cluster (batch 2) ---------- */
  {
    slug: "cost-of-divorce-ventura-county",
    title: "How Much Does a Divorce Cost in Ventura County?",
    metaTitle: "How Much Does a Divorce Cost in Ventura County? | Rachel Reed Law",
    description:
      "What does a divorce really cost in Ventura County, CA? A local divorce attorney breaks down filing fees, attorney fees, and the factors that drive the total up or down.",
    excerpt:
      "Divorce costs in Ventura County range widely — from a few hundred dollars in court fees for a simple case to far more when custody or finances are contested. Here's what actually drives the price.",
    category: "Family Law",
    date: "2026-06-09",
    keywords: [
      "cost of divorce Ventura County",
      "how much does a divorce cost California",
      "Ventura divorce attorney fees",
    ],
    image: images.portraitSuited,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "There's no single price tag for a divorce in Ventura County. The honest answer is that it depends almost entirely on one thing: how much you and your spouse disagree. A fully uncontested divorce can cost relatively little, while a high-conflict case over custody and finances can cost far more. Here's how the numbers break down.",
      },
      { type: "h2", text: "Court filing fees" },
      {
        type: "p",
        text: "Every California divorce starts with a court filing fee to open the case, and the responding spouse pays a similar fee to file their response. These are set by the court, not your attorney, and fee waivers are available if you can't afford them. Filing fees are the one cost that's roughly the same in every case.",
      },
      { type: "h2", text: "What really drives the total: conflict" },
      {
        type: "p",
        text: "The largest variable is attorney time, and attorney time is driven by conflict. An uncontested divorce — where you agree on property, support, and a parenting plan — requires far less work than a case where every issue is fought. The biggest cost-drivers include:",
      },
      {
        type: "ul",
        items: [
          "Custody and visitation disputes that require hearings or evaluations",
          "Disagreements over dividing the home, retirement, or a business",
          "A spouse who hides income or won't disclose finances",
          "Spousal support disputes",
          "The need for experts, such as forensic accountants or appraisers",
        ],
      },
      { type: "h2", text: "How to keep your divorce affordable" },
      {
        type: "p",
        text: "You have more control over cost than you might think. Staying organized, communicating reasonably, focusing on what truly matters, and resolving issues through negotiation or mediation all reduce the time — and therefore the cost — of your case. Rachel will tell you honestly where it's worth fighting and where a fight will only drain your resources.",
      },
      {
        type: "callout",
        title: "Get a clear picture of cost before you commit.",
        text: "Rachel offers a free, confidential consultation and explains her fees up front — no surprises. Find out what your case is likely to involve.",
      },
      { type: "h2", text: "Learn more" },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How to file for divorce in Ventura County", href: "/blog/how-to-file-for-divorce-ventura-county" },
          { label: "Do you need a lawyer for an uncontested divorce?", href: "/blog/uncontested-divorce-california-do-you-need-a-lawyer" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "How much does an uncontested divorce cost in California?",
        a: "An uncontested divorce — where both spouses agree on all major issues — is the least expensive option, with court filing fees plus limited attorney time to prepare and review the agreement. The more you agree on, the lower the cost.",
      },
      {
        q: "What makes a divorce more expensive?",
        a: "Conflict. Contested custody, disputes over property or a business, hidden assets, spousal support fights, and the need for experts all increase attorney time and therefore cost. Reasonableness on both sides is the best cost-control.",
      },
      {
        q: "Are court filing fees the same for everyone?",
        a: "California sets standard filing fees for divorce, and they're roughly the same in every case. Fee waivers are available for those who cannot afford them. Attorney fees, not filing fees, are what vary widely.",
      },
    ],
  },
  {
    slug: "how-to-file-for-divorce-ventura-county",
    title: "How to File for Divorce in Ventura County: A Step-by-Step Guide",
    metaTitle: "How to File for Divorce in Ventura County (Step by Step) | Rachel Reed Law",
    description:
      "A step-by-step guide to filing for divorce in Ventura County, California — the forms, the courthouse, the six-month waiting period, and what to expect at each stage.",
    excerpt:
      "Filing for divorce in Ventura County follows a defined process — petition, service, disclosures, and resolution. Here's each step, plain and simple.",
    category: "Family Law",
    date: "2026-06-10",
    keywords: [
      "how to file for divorce Ventura County",
      "filing for divorce California steps",
      "Ventura County family court divorce",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "Starting a divorce can feel overwhelming, but the California process follows a clear sequence of steps. In Ventura County, your case will be handled through the Ventura Superior Court's family law division at the Hall of Justice on South Victoria Avenue. Here's the path from start to finish.",
      },
      { type: "h2", text: "Step 1: Meet the residency requirement" },
      {
        type: "p",
        text: "To file for divorce in California, you (or your spouse) must have lived in the state for at least six months and in the county where you file for at least three months. If you meet those requirements in Ventura County, you can file here.",
      },
      { type: "h2", text: "Step 2: File the petition" },
      {
        type: "p",
        text: "The divorce begins when one spouse files a Petition for Dissolution of Marriage along with the required forms and filing fee. This officially opens the case and states what you're asking the court to decide.",
      },
      { type: "h2", text: "Step 3: Serve your spouse" },
      {
        type: "p",
        text: "Your spouse must be formally served with the petition. Importantly, the mandatory six-month waiting period before a divorce can be finalized starts when your spouse is served (or otherwise appears in the case) — not when you file.",
      },
      { type: "h2", text: "Step 4: Exchange financial disclosures" },
      {
        type: "p",
        text: "Both spouses are required to complete full, honest financial disclosures — listing income, assets, and debts. This step is mandatory and is the foundation for dividing property and setting support. Skipping or fudging it can have serious consequences.",
      },
      { type: "h2", text: "Step 5: Resolve the issues" },
      {
        type: "p",
        text: "The remaining issues — property division, support, and a parenting plan if you have children — are resolved either by agreement (through negotiation or mediation) or, if necessary, by a judge. A complete written agreement can be submitted to the court for approval.",
      },
      { type: "h2", text: "Step 6: Finalize the judgment" },
      {
        type: "p",
        text: "Once all issues are resolved and the six-month period has passed, the court enters a judgment and your divorce is final. Only then are you legally single again.",
      },
      {
        type: "callout",
        title: "Filing correctly the first time saves time and money.",
        text: "Small mistakes in the paperwork can cause months of delay. Rachel can prepare and file your case properly — start with a free consultation.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How long does a divorce take in California?", href: "/blog/how-long-does-divorce-take-california-ventura" },
          { label: "How much does a divorce cost in Ventura County?", href: "/blog/cost-of-divorce-ventura-county" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "Where do I file for divorce in Ventura County?",
        a: "Divorce cases are filed with the Ventura Superior Court's family law division at the Hall of Justice on South Victoria Avenue in Ventura. You must meet California's residency requirements to file here.",
      },
      {
        q: "What are the residency requirements to file for divorce in California?",
        a: "You or your spouse must have lived in California for at least six months and in the county of filing for at least three months before filing for divorce.",
      },
      {
        q: "When does the six-month divorce waiting period start?",
        a: "It starts when the responding spouse is served with the petition or otherwise appears in the case — not on the date of filing. A divorce cannot be finalized before that six-month period ends.",
      },
    ],
  },
  {
    slug: "how-to-get-restraining-order-ventura-county",
    title: "How to Get a Restraining Order in Ventura County",
    metaTitle: "How to Get a Restraining Order in Ventura County | Rachel Reed Law",
    description:
      "Need protection? A Ventura attorney explains how to get a domestic violence restraining order in Ventura County — the forms, the temporary order, and the hearing.",
    excerpt:
      "If you're in danger, a restraining order can offer fast protection. Here's how the process works in Ventura County — and how to put your strongest case in front of the judge.",
    category: "Family Law",
    date: "2026-06-11",
    keywords: [
      "how to get a restraining order Ventura County",
      "domestic violence restraining order California",
      "Ventura restraining order attorney",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Restraining Orders", href: "/family-law/domestic-violence" },
    body: [
      {
        type: "p",
        text: "If you're being threatened, harassed, or abused, a domestic violence restraining order (DVRO) can provide fast, court-backed protection. In Ventura County, the process is designed to move quickly when there's an immediate danger. Here's how it works.",
      },
      { type: "h2", text: "Step 1: Request a temporary restraining order" },
      {
        type: "p",
        text: "You begin by filing a request with the court describing what happened and the protection you need. If the judge finds there's an immediate threat, they can issue a Temporary Restraining Order (TRO) — often the same day or the next — that protects you until a full hearing can be held.",
      },
      { type: "h2", text: "Step 2: The other person is served" },
      {
        type: "p",
        text: "The person you're seeking protection from must be served with the paperwork and notified of the hearing. The TRO takes effect once they're served and remains in place until the hearing.",
      },
      { type: "h2", text: "Step 3: The court hearing" },
      {
        type: "p",
        text: "At the hearing — usually within a few weeks — both sides can present evidence and testimony. If the judge finds domestic violence occurred, they can issue a longer-term restraining order, which in California can last up to five years and may be renewed.",
      },
      { type: "h2", text: "What a restraining order can do" },
      {
        type: "ul",
        items: [
          "Order the other person to stay away from you, your home, and your work",
          "Order them to move out of a shared residence",
          "Require them to surrender any firearms",
          "Include protections for your children",
          "Establish temporary custody and support in some cases",
        ],
      },
      {
        type: "callout",
        title: "Your hearing is your one chance to be heard.",
        text: "Presenting clear evidence makes all the difference. Rachel can help you prepare and stand with you in court. Reach out today.",
      },
      { type: "h2", text: "What to bring" },
      {
        type: "p",
        text: "Evidence wins these hearings. Gather any threatening texts, emails, or voicemails, photographs of injuries or property damage, medical or police records, and the names of any witnesses. Organized, credible evidence helps the judge see the full picture.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "Can you get a restraining order dropped in California?", href: "/blog/drop-domestic-violence-restraining-order-california" },
          { label: "Rachel's restraining order & domestic violence practice", href: "/family-law/domestic-violence" },
        ],
      },
    ],
    faqs: [
      {
        q: "How fast can I get a restraining order in Ventura County?",
        a: "When there's an immediate threat, a Temporary Restraining Order can often be issued within a day. A court hearing for a longer-term order typically follows within a few weeks.",
      },
      {
        q: "How long does a domestic violence restraining order last in California?",
        a: "A long-term domestic violence restraining order can last up to five years and may be renewed. A temporary order lasts until the court hearing.",
      },
      {
        q: "Do I need a lawyer to get a restraining order?",
        a: "You can request one on your own, but these hearings move fast and the outcome matters greatly. An attorney can help you gather and present evidence persuasively and protect your interests, especially when children or custody are involved.",
      },
    ],
  },
  {
    slug: "child-custody-mediation-ventura-county-ccrc",
    title: "Child Custody Mediation in Ventura County: What to Expect (CCRC)",
    metaTitle: "Child Custody Mediation in Ventura County (CCRC) | Rachel Reed Law",
    description:
      "Before a custody hearing, Ventura County parents attend Child Custody Recommending Counseling. A local attorney explains what CCRC is and how to prepare.",
    excerpt:
      "Before a judge decides custody, Ventura County sends parents to Child Custody Recommending Counseling. Knowing what to expect — and how to prepare — can shape your whole case.",
    category: "Family Law",
    date: "2026-06-12",
    keywords: [
      "child custody mediation Ventura County",
      "CCRC California",
      "custody recommending counseling Ventura",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Child Custody", href: "/family-law/child-custody" },
    body: [
      {
        type: "p",
        text: "If you have a custody dispute in Ventura County, you'll likely be ordered to attend Child Custody Recommending Counseling (CCRC) — often simply called custody mediation — before any judge hears your case. Understanding this step is important, because in counties like Ventura the counselor can make a recommendation to the judge.",
      },
      { type: "h2", text: "What is CCRC?" },
      {
        type: "p",
        text: "CCRC is a meeting with a neutral, court-connected counselor whose job is to help parents reach an agreement on a parenting plan. The goal is to resolve custody and visitation cooperatively, focusing on the best interests of the child, before turning to a contested hearing.",
      },
      { type: "h2", text: "The key difference: recommending counseling" },
      {
        type: "callout",
        title: "In Ventura County, the counselor's recommendation carries weight.",
        text: "Because this is 'recommending' counseling, if you don't reach an agreement the counselor may make a recommendation to the judge. That makes preparation essential.",
      },
      {
        type: "p",
        text: "Unlike confidential mediation in some counties, recommending counseling means that if parents can't agree, the counselor may submit a recommendation to the court. Judges often give those recommendations significant weight — so how you present yourself in this meeting can influence the outcome of your entire case.",
      },
      { type: "h2", text: "How to prepare" },
      {
        type: "ul",
        items: [
          "Focus on your child's needs, not your grievances with the other parent",
          "Come with a realistic, child-centered parenting schedule in mind",
          "Be calm, respectful, and cooperative — the counselor is watching how you communicate",
          "Be honest about any genuine safety concerns, with specifics",
          "Avoid badmouthing the other parent; it tends to backfire",
        ],
      },
      { type: "h2", text: "How an attorney helps" },
      {
        type: "p",
        text: "While attorneys typically don't attend the CCRC session itself, Rachel prepares you thoroughly beforehand — helping you frame your concerns, anticipate questions, and present yourself as the reasonable, child-focused parent you are. That preparation can make the difference between a favorable recommendation and an uphill battle.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How is child custody decided in Ventura County?", href: "/blog/how-child-custody-is-decided-ventura-county" },
          { label: "50/50 custody schedules in California", href: "/blog/50-50-custody-schedules-california" },
          { label: "Rachel's child custody practice", href: "/family-law/child-custody" },
        ],
      },
    ],
    faqs: [
      {
        q: "Is custody mediation required in Ventura County?",
        a: "Yes. In California, parents with a contested custody or visitation issue are generally required to attend custody mediation — known as Child Custody Recommending Counseling (CCRC) — before the matter goes before a judge.",
      },
      {
        q: "Does the mediator make a recommendation to the judge?",
        a: "In 'recommending' counties like Ventura, yes — if parents don't reach an agreement, the counselor can make a recommendation to the court, and judges often give it significant weight. That's why preparation matters.",
      },
      {
        q: "Can my attorney attend the CCRC session?",
        a: "Typically attorneys do not attend the session itself, but your attorney can prepare you thoroughly beforehand so you present your concerns clearly and come across as a reasonable, child-focused parent.",
      },
    ],
  },
  {
    slug: "50-50-custody-schedules-california",
    title: "50/50 Custody Schedules in California: How They Work",
    metaTitle: "50/50 Custody Schedules in California: How They Work | Rachel Reed Law",
    description:
      "Thinking about a 50/50 custody schedule? A Ventura family law attorney explains common joint-custody schedules in California and what makes them work.",
    excerpt:
      "50/50 custody can work beautifully — or fall apart — depending on the schedule and the parents. Here are the common options in California and how courts view them.",
    category: "Family Law",
    date: "2026-06-13",
    keywords: [
      "50/50 custody schedule California",
      "joint custody schedules California",
      "shared custody Ventura County",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Child Custody", href: "/family-law/child-custody" },
    body: [
      {
        type: "p",
        text: "Many parents want a 50/50 custody arrangement so both stay fully involved in their children's lives. California courts can and do order shared physical custody when it serves the child's best interests. The real question is usually which schedule fits your family.",
      },
      { type: "h2", text: "Common 50/50 schedules" },
      {
        type: "p",
        text: "There's no one-size-fits-all schedule. The most common 50/50 arrangements include:",
      },
      {
        type: "ul",
        items: [
          "Week-on/week-off — children alternate full weeks with each parent",
          "2-2-3 — two days with one parent, two with the other, then a three-day weekend that alternates",
          "2-2-5-5 — two days with each parent, then five days with each",
          "Alternating weeks with a mid-week visit or dinner",
        ],
      },
      { type: "h2", text: "What makes a 50/50 schedule work" },
      {
        type: "p",
        text: "Shared custody works best when parents live reasonably close together, can communicate without constant conflict, and keep the children's school and activities stable. The child's age matters too — younger children sometimes do better with more frequent transitions, while older kids may prefer longer stretches.",
      },
      { type: "h2", text: "How California courts approach it" },
      {
        type: "p",
        text: "California law favors frequent and continuing contact with both parents, and courts decide custody by the best interests of the child. A 50/50 schedule is one option among many — what matters is whether the arrangement genuinely serves the child, not splitting time as a matter of fairness to the parents.",
      },
      {
        type: "callout",
        title: "Want a parenting plan that actually fits your life?",
        text: "Rachel can help you build a schedule that protects your time with your children and holds up in court. Schedule a free consultation.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How is child custody decided in Ventura County?", href: "/blog/how-child-custody-is-decided-ventura-county" },
          { label: "Can a parent deny visitation in California?", href: "/blog/can-a-parent-deny-visitation-california" },
          { label: "Rachel's child custody practice", href: "/family-law/child-custody" },
        ],
      },
    ],
    faqs: [
      {
        q: "Does California favor 50/50 custody?",
        a: "California favors frequent and continuing contact with both parents but does not automatically order 50/50. Courts decide custody by the best interests of the child, and a shared schedule is ordered when it genuinely serves the child.",
      },
      {
        q: "What is the most common 50/50 custody schedule?",
        a: "Common options include week-on/week-off, 2-2-3, and 2-2-5-5. The best choice depends on the children's ages, the parents' proximity, work schedules, and how well the parents communicate.",
      },
      {
        q: "Does 50/50 custody mean no one pays child support?",
        a: "Not necessarily. Even with equal time, child support can still be ordered because the California formula also accounts for each parent's income, not just timeshare.",
      },
    ],
  },
  {
    slug: "legal-separation-vs-divorce-california",
    title: "Legal Separation vs. Divorce in California: What's the Difference?",
    metaTitle: "Legal Separation vs. Divorce in California | Rachel Reed Law",
    description:
      "Not sure whether to pursue legal separation or divorce? A Ventura family law attorney explains the key differences in California and which may be right for you.",
    excerpt:
      "Legal separation and divorce resolve many of the same issues — but one ends your marriage and one doesn't. Here's how to tell which fits your situation.",
    category: "Family Law",
    date: "2026-06-14",
    keywords: [
      "legal separation vs divorce California",
      "legal separation California",
      "Ventura legal separation attorney",
    ],
    image: images.portraitSuited,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "When a marriage is in trouble, divorce isn't the only option. California also allows legal separation, which resolves many of the same issues without legally ending the marriage. Understanding the difference helps you choose the path that fits your circumstances and values.",
      },
      { type: "h2", text: "The core difference" },
      {
        type: "p",
        text: "A divorce (dissolution) legally ends your marriage, leaving both spouses free to remarry. A legal separation addresses the same practical issues — dividing property, support, and a parenting plan — but you remain legally married at the end. That single distinction drives everything else.",
      },
      { type: "h2", text: "Why some couples choose legal separation" },
      {
        type: "ul",
        items: [
          "Religious or personal beliefs about ending a marriage",
          "Maintaining certain health insurance or other benefits (check the plan's rules first)",
          "Not yet meeting California's residency requirement for divorce",
          "A desire for time apart while keeping the door open to reconciliation",
        ],
      },
      { type: "h2", text: "What they have in common" },
      {
        type: "p",
        text: "Both processes can resolve custody and visitation, child and spousal support, and the division of property and debts. Notably, legal separation has no six-month waiting period the way divorce does — though it also does not end the marriage.",
      },
      { type: "h2", text: "Can you change your mind?" },
      {
        type: "p",
        text: "Yes. A legal separation can later be converted into a divorce if you decide you want to end the marriage. Many couples start with what fits today, knowing they can revisit the decision.",
      },
      {
        type: "callout",
        title: "Not sure which path is right?",
        text: "Rachel can walk you through the trade-offs based on your specific situation. Start with a free, confidential consultation.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How to file for divorce in Ventura County", href: "/blog/how-to-file-for-divorce-ventura-county" },
          { label: "How property is divided in a California divorce", href: "/blog/how-property-divided-california-divorce" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the main difference between legal separation and divorce in California?",
        a: "A divorce legally ends the marriage so both spouses can remarry, while a legal separation resolves the same issues — property, support, custody — but leaves the couple legally married.",
      },
      {
        q: "Is there a waiting period for legal separation in California?",
        a: "No. Unlike divorce, legal separation has no six-month waiting period. However, it also does not end the marriage. There's also no residency requirement, which is why some couples start with separation.",
      },
      {
        q: "Can a legal separation be converted to a divorce?",
        a: "Yes. If you later decide to end the marriage, a legal separation can be converted into a divorce. An attorney can help you make the change.",
      },
    ],
  },
  {
    slug: "can-a-parent-deny-visitation-california",
    title: "Can a Parent Deny Visitation in California?",
    metaTitle: "Can a Parent Deny Visitation in California? | Rachel Reed Law",
    description:
      "Can you withhold visitation if your co-parent doesn't pay support — or can they? A Ventura custody attorney explains your rights and how to enforce a custody order.",
    excerpt:
      "Withholding the kids because support wasn't paid? Being denied your court-ordered time? Here's what California law actually allows — and what to do about it.",
    category: "Family Law",
    date: "2026-06-15",
    keywords: [
      "can a parent deny visitation California",
      "withholding visitation California",
      "enforce custody order Ventura County",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Child Custody", href: "/family-law/child-custody" },
    body: [
      {
        type: "p",
        text: "This question comes up constantly, and the confusion causes real harm. Two of the most common scenarios: a parent withholds visitation because the other hasn't paid child support, or a parent simply refuses to hand over the kids despite a court order. Here's what California law says.",
      },
      { type: "h2", text: "Custody and support are separate" },
      {
        type: "callout",
        title: "You can't withhold the kids over unpaid support — and vice versa.",
        text: "California treats custody/visitation and child support as separate obligations. Withholding visitation because support wasn't paid can put you in violation of the court order.",
      },
      {
        type: "p",
        text: "It's understandable to feel that if your co-parent isn't paying, they shouldn't get time with the children. But the law doesn't work that way. Visitation and support are independent. If support isn't being paid, the remedy is to enforce the support order through the court — not to withhold the children.",
      },
      { type: "h2", text: "When can visitation be denied?" },
      {
        type: "p",
        text: "Generally, a parent cannot unilaterally deny court-ordered visitation. The narrow exception is a genuine, immediate safety emergency — for example, the other parent is intoxicated at exchange or there's a credible threat of harm. Even then, you should document everything and seek a court order right away rather than simply refusing contact going forward.",
      },
      { type: "h2", text: "What to do if you're being denied your time" },
      {
        type: "ol",
        items: [
          "Keep a detailed record of every missed or denied visit",
          "Communicate in writing and stay calm and civil",
          "Don't retaliate by violating the order yourself",
          "Ask the court to enforce the existing order",
          "Consider requesting a modification if the pattern continues",
        ],
      },
      {
        type: "p",
        text: "California courts take violations of custody orders seriously. Repeated, willful interference with the other parent's time can even affect custody itself.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How is child custody decided in Ventura County?", href: "/blog/how-child-custody-is-decided-ventura-county" },
          { label: "Child & spousal support in Ventura County", href: "/family-law/support" },
          { label: "Rachel's child custody practice", href: "/family-law/child-custody" },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I stop visitation if my ex isn't paying child support?",
        a: "No. In California, custody/visitation and child support are separate. Withholding visitation over unpaid support can put you in violation of the custody order. Instead, enforce the support order through the court.",
      },
      {
        q: "Can a parent deny court-ordered visitation in California?",
        a: "Generally no. A parent cannot unilaterally deny court-ordered visitation except in a genuine, immediate safety emergency — and even then should document it and seek a court order promptly rather than simply refusing future contact.",
      },
      {
        q: "What can I do if my co-parent keeps denying my visitation?",
        a: "Document each denial, communicate in writing, and ask the court to enforce the order. Persistent, willful interference can have consequences and may even affect custody. An attorney can help you enforce or modify the order.",
      },
    ],
  },
  {
    slug: "uncontested-divorce-california-do-you-need-a-lawyer",
    title: "Uncontested Divorce in California: Do You Need a Lawyer?",
    metaTitle: "Uncontested Divorce in California: Do You Need a Lawyer? | Rachel Reed Law",
    description:
      "If you and your spouse agree on everything, do you still need a divorce lawyer in California? A Ventura attorney explains the real risks of going it alone.",
    excerpt:
      "An uncontested divorce sounds simple enough to handle yourself — and sometimes it is. But a few common mistakes can cost you for years. Here's how to decide.",
    category: "Family Law",
    date: "2026-06-16",
    keywords: [
      "uncontested divorce California",
      "do I need a lawyer for uncontested divorce",
      "Ventura uncontested divorce attorney",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "If you and your spouse genuinely agree on everything — property, support, and a parenting plan — an uncontested divorce is the fastest, least expensive path. You're not legally required to hire a lawyer. But 'uncontested' doesn't always mean 'simple,' and a few common mistakes can be expensive and hard to undo.",
      },
      { type: "h2", text: "When doing it yourself may be fine" },
      {
        type: "p",
        text: "A short marriage with no children, few assets, no real estate, and no retirement accounts to divide is the kind of case where many couples can complete the paperwork themselves. If your finances are simple and you truly agree, the process can be straightforward.",
      },
      { type: "h2", text: "Where people get into trouble" },
      {
        type: "ul",
        items: [
          "Dividing retirement accounts or pensions, which often require a special court order",
          "Tax consequences of how assets and support are structured",
          "Waiving rights unknowingly in the agreement language",
          "Incomplete financial disclosures that can void the agreement later",
          "Vague parenting plans that cause conflict down the road",
        ],
      },
      { type: "h2", text: "A middle path: have your agreement reviewed" },
      {
        type: "p",
        text: "You don't have to choose between full representation and total DIY. Even in an amicable case, having an attorney prepare or review your agreement before you sign protects you from costly errors — for a fraction of the cost of a contested divorce. It's often the smartest money you'll spend.",
      },
      {
        type: "callout",
        title: "Keep it amicable — and protect yourself.",
        text: "Rachel can prepare or review your uncontested divorce so it's done right. Start with a free, confidential consultation.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How much does a divorce cost in Ventura County?", href: "/blog/cost-of-divorce-ventura-county" },
          { label: "How to file for divorce in Ventura County", href: "/blog/how-to-file-for-divorce-ventura-county" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a lawyer for an uncontested divorce in California?",
        a: "You're not required to, and simple cases can sometimes be handled alone. But mistakes around retirement division, taxes, disclosures, and agreement language can be costly and hard to undo. Having an attorney prepare or review your agreement is inexpensive protection.",
      },
      {
        q: "What makes a divorce 'uncontested'?",
        a: "A divorce is uncontested when both spouses agree on all major issues — property and debt division, child custody and support, and spousal support — so there's nothing for a judge to decide.",
      },
      {
        q: "Is an uncontested divorce cheaper?",
        a: "Yes. Because it requires far less attorney time and no contested hearings, an uncontested divorce is the least expensive way to divorce. Having an attorney review the agreement still costs a fraction of a contested case.",
      },
    ],
  },
  {
    slug: "ventura-county-divorce-guide",
    title: "The Complete Guide to Divorce in Ventura County, California",
    metaTitle: "Divorce in Ventura County: The Complete Guide | Rachel Reed Law",
    description:
      "Everything you need to know about getting a divorce in Ventura County, California — the process, timeline, cost, property, support, custody, and where to get help.",
    excerpt:
      "Your complete, plain-English guide to divorce in Ventura County — the process, how long it takes, what it costs, and how property, support, and custody are decided.",
    category: "Family Law",
    date: "2026-06-17",
    keywords: [
      "divorce Ventura County",
      "Ventura County divorce guide",
      "how does divorce work California",
    ],
    image: images.portraitSuited,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "Divorce is one of the hardest transitions anyone goes through — emotionally and practically. This guide pulls together the essentials of getting a divorce in Ventura County, California, in plain English, and links to deeper articles on each topic. If you're just starting to think about divorce, start here.",
      },
      { type: "h2", text: "How divorce works in California" },
      {
        type: "p",
        text: "California is a no-fault state, so you don't have to prove wrongdoing — 'irreconcilable differences' is enough. Your case proceeds through the Ventura Superior Court's family law division: you file a petition, serve your spouse, exchange financial disclosures, resolve the issues, and obtain a judgment. There's a mandatory six-month waiting period that begins when your spouse is served.",
      },
      {
        type: "links",
        title: "Start with the basics",
        items: [
          { label: "How to file for divorce in Ventura County (step by step)", href: "/blog/how-to-file-for-divorce-ventura-county" },
          { label: "How long does a divorce take in California?", href: "/blog/how-long-does-divorce-take-california-ventura" },
        ],
      },
      { type: "h2", text: "How much it costs" },
      {
        type: "p",
        text: "Cost depends mostly on conflict. An uncontested divorce involves court filing fees and limited attorney time; a contested case over custody or finances costs more. You have real control over the total by staying organized and reasonable.",
      },
      {
        type: "links",
        items: [
          { label: "How much does a divorce cost in Ventura County?", href: "/blog/cost-of-divorce-ventura-county" },
          { label: "Do you need a lawyer for an uncontested divorce?", href: "/blog/uncontested-divorce-california-do-you-need-a-lawyer" },
        ],
      },
      { type: "h2", text: "Dividing property and debt" },
      {
        type: "p",
        text: "California is a community-property state, so most assets and debts acquired during the marriage are divided equally — but characterizing, valuing, and tracing assets is where things get contested.",
      },
      {
        type: "links",
        items: [
          { label: "How property is divided in a California divorce", href: "/blog/how-property-divided-california-divorce" },
        ],
      },
      { type: "h2", text: "Support: child and spousal" },
      {
        type: "p",
        text: "Child support follows a statewide formula based largely on income and parenting time. Spousal support is based on a list of factors, including the length of the marriage and each spouse's earning capacity.",
      },
      {
        type: "links",
        items: [
          { label: "Spousal support in California: how much and how long?", href: "/blog/spousal-support-california-how-much-how-long" },
        ],
      },
      { type: "h2", text: "Custody and your children" },
      {
        type: "p",
        text: "Custody is decided by the best interests of the child. In Ventura County, contested custody cases go through Child Custody Recommending Counseling before a judge gets involved, and the counselor's recommendation can carry real weight.",
      },
      {
        type: "links",
        items: [
          { label: "How is child custody decided in Ventura County?", href: "/blog/how-child-custody-is-decided-ventura-county" },
          { label: "Child custody mediation in Ventura County (CCRC)", href: "/blog/child-custody-mediation-ventura-county-ccrc" },
          { label: "50/50 custody schedules in California", href: "/blog/50-50-custody-schedules-california" },
        ],
      },
      {
        type: "callout",
        title: "Ready to talk to a real Ventura divorce attorney?",
        text: "Rachel gives you honest answers and a clear plan — free and confidential, reviewed by her personally.",
      },
      { type: "h2", text: "Where to get help in Ventura County" },
      {
        type: "p",
        text: "Divorce cases are handled at the Ventura County Hall of Justice on South Victoria Avenue. Rachel Reed Law is located nearby on County Square Drive, representing clients throughout Ventura, Oxnard, Camarillo, Thousand Oaks, Simi Valley, and the surrounding communities.",
      },
      {
        type: "links",
        title: "Talk to Rachel",
        items: [
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
          { label: "Contact Rachel for a free consultation", href: "/contact" },
        ],
      },
    ],
    faqs: [
      {
        q: "How does divorce work in Ventura County, California?",
        a: "California is no-fault. You file a petition with the Ventura Superior Court, serve your spouse, exchange financial disclosures, resolve property, support, and custody, and obtain a judgment. A mandatory six-month waiting period begins when your spouse is served.",
      },
      {
        q: "How long does a divorce take in Ventura County?",
        a: "At minimum, six months from the date the responding spouse is served. Uncontested cases may finalize near that minimum; contested cases over custody or finances can take longer.",
      },
      {
        q: "Do I need a divorce lawyer in Ventura County?",
        a: "Simple, fully uncontested cases can sometimes be handled alone, but contested issues — and even complex 'amicable' ones — benefit from representation. Rachel offers a free consultation to help you understand your options.",
      },
    ],
  },

  /* ---------- Privacy & conduct-during-divorce cluster (batch 3) ---------- */
  {
    slug: "spouse-look-through-phone-without-consent-california",
    title: "Is Your Spouse Allowed to Look Through Your Phone Without Your Consent?",
    metaTitle: "Can Your Spouse Look Through Your Phone in California? | Rachel Reed Law",
    description:
      "Can your spouse legally go through your phone in California — even while married? A Ventura divorce attorney explains your privacy rights and what it means for divorce.",
    excerpt:
      "Short answer: being married does not give your spouse the right to snoop through your password-protected phone. Here's what California law actually says — and why it matters in a divorce.",
    category: "Family Law",
    date: "2026-05-12",
    keywords: [
      "can my spouse look through my phone California",
      "spouse phone privacy California",
      "snooping spouse divorce evidence California",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "It's one of the most common questions in a struggling marriage: can your spouse legally go through your phone, email, or social media without your permission? The short answer in California is generally no — marriage does not erase your right to privacy in your password-protected devices and accounts.",
      },
      { type: "h2", text: "You still have a right to privacy — even when married" },
      {
        type: "p",
        text: "California has some of the strongest privacy protections in the country, and they don't disappear at the altar. If your phone, email, or social media accounts are password-protected, you generally have a reasonable expectation of privacy in them. Accessing them without your consent can cross legal lines.",
      },
      { type: "h2", text: "It can even be against the law" },
      {
        type: "p",
        text: "Depending on how it's done, snooping can potentially violate California laws, including those addressing unauthorized access to computers and electronic data (Penal Code 502) and the state's strict eavesdropping and recording rules. Hacking into an account, guessing a password, or installing spyware to read someone's private messages can carry real legal exposure.",
      },
      { type: "h2", text: "What about shared phones or family accounts?" },
      {
        type: "p",
        text: "The picture is murkier for genuinely shared devices, joint accounts, or a phone with no password that's left open. Privacy expectations are lower there. But that's very different from breaking into a spouse's personal, protected device — and the safest assumption is that someone's private accounts are off-limits.",
      },
      {
        type: "callout",
        title: "Snooping can backfire — badly.",
        text: "Evidence obtained illegally may be inadmissible, and the snooping itself can become a problem for you. If you think evidence matters in your case, get it the right way.",
      },
      { type: "h2", text: "The right way to get evidence in a divorce" },
      {
        type: "p",
        text: "Here's the irony: if information on a phone is genuinely relevant to your divorce — hidden assets, for example — there's a lawful way to get it. The formal discovery process lets your attorney request documents, messages, and financial records through proper channels, so the evidence is admissible and you're not the one in trouble.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "Can my ex record me without my consent in California?", href: "/blog/ex-record-me-without-consent-california" },
          { label: "Can text messages be used as evidence in a California divorce?", href: "/blog/text-messages-evidence-california-divorce" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "Can my spouse legally go through my phone in California?",
        a: "Generally no. Marriage doesn't eliminate your privacy rights. If your phone is password-protected, you typically have a reasonable expectation of privacy, and accessing it without consent — by hacking, guessing a password, or installing spyware — can violate California law.",
      },
      {
        q: "Can evidence from my snooped phone be used in a divorce?",
        a: "Often not. Evidence obtained illegally may be inadmissible, and the act of obtaining it can expose the snooper to liability. If information is relevant, the lawful route is formal discovery through your attorney.",
      },
      {
        q: "Is it different if we share the phone or account?",
        a: "Privacy expectations are lower for genuinely shared, unprotected devices or joint accounts. But breaking into a spouse's personal, password-protected device or account is a different matter and can be unlawful.",
      },
    ],
  },
  {
    slug: "ex-record-me-without-consent-california",
    title: "Can My Ex Record Me Without My Consent in California?",
    metaTitle: "Can My Ex Record Me Without My Consent in California? | Rachel Reed Law",
    description:
      "California is a two-party consent state. A Ventura family law attorney explains when recording is illegal, what it means for your divorce or custody case, and what to do.",
    excerpt:
      "California requires everyone's consent to record a private conversation. So can your ex secretly record you — and can they use it against you? Here's the law.",
    category: "Family Law",
    date: "2026-05-19",
    keywords: [
      "can my ex record me without consent California",
      "two party consent California recording",
      "secret recording divorce custody California",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "When a relationship turns adversarial, people sometimes try to 'catch' the other person on a recording. But California has strict rules about this — and getting it wrong can be a crime. Here's what you need to know about being recorded by your ex.",
      },
      { type: "h2", text: "California is a two-party (all-party) consent state" },
      {
        type: "p",
        text: "Under California law (Penal Code 632), it is generally illegal to record a confidential conversation without the consent of everyone involved. Unlike some states where only one party needs to consent, California requires all parties to agree. Secretly recording a private phone call or in-person conversation can violate this law.",
      },
      { type: "h2", text: "What counts as 'confidential'?" },
      {
        type: "p",
        text: "The protection applies to conversations where the parties reasonably expect privacy. A private phone call or a conversation behind closed doors typically qualifies. A shouting match in a public park, where anyone could overhear, may not. The context matters.",
      },
      { type: "h2", text: "Can an illegal recording be used in court?" },
      {
        type: "callout",
        title: "Illegally made recordings are often inadmissible — and risky.",
        text: "A recording made in violation of California's eavesdropping law may be excluded as evidence, and the person who made it can face penalties. Two-way trouble.",
      },
      {
        type: "p",
        text: "Recordings made in violation of the law are frequently inadmissible in court, and the person who made them can even face civil or criminal consequences. So a secret recording your ex hoped to use against you may end up hurting them instead.",
      },
      { type: "h2", text: "What about recording the kids or co-parenting calls?" },
      {
        type: "p",
        text: "These situations get complicated quickly, especially in custody disputes. Rather than risk breaking the law — and damaging your own case — talk to an attorney about how to lawfully document concerning behavior.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "Can your spouse look through your phone without consent?", href: "/blog/spouse-look-through-phone-without-consent-california" },
          { label: "Can social media hurt my custody case?", href: "/blog/social-media-custody-case-california" },
          { label: "Rachel's family law practice", href: "/family-law" },
        ],
      },
    ],
    faqs: [
      {
        q: "Is it legal to record someone without their consent in California?",
        a: "Generally no. California is a two-party (all-party) consent state under Penal Code 632, so recording a confidential conversation requires the consent of everyone involved. Secret recordings of private conversations can be illegal.",
      },
      {
        q: "Can my ex use a secret recording against me in court?",
        a: "Often not. Recordings made in violation of California's eavesdropping law may be inadmissible, and the person who made the recording can face penalties. It can backfire on the person who recorded it.",
      },
      {
        q: "Does two-party consent apply to public conversations?",
        a: "The law protects conversations where there's a reasonable expectation of privacy. A truly public conversation that others could overhear may not be 'confidential,' but private calls and closed-door conversations typically are.",
      },
    ],
  },
  {
    slug: "text-messages-evidence-california-divorce",
    title: "Can Text Messages Be Used as Evidence in a California Divorce?",
    metaTitle: "Can Text Messages Be Used as Evidence in a California Divorce? | Rachel Reed Law",
    description:
      "Texts, emails, and DMs can be powerful divorce evidence — if obtained and presented properly. A Ventura attorney explains the rules and the pitfalls.",
    excerpt:
      "Text messages can absolutely be used as evidence in a California divorce — but how you get them and prove they're real makes all the difference. Here's what to know.",
    category: "Family Law",
    date: "2026-05-26",
    keywords: [
      "text messages as evidence California divorce",
      "are texts admissible in divorce California",
      "digital evidence family law California",
    ],
    image: images.portraitSuited,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "In modern divorces, some of the most important evidence lives in a phone: text messages, emails, and social media. The good news (or bad news, depending on your side) is that yes, these can be used as evidence in a California divorce or custody case — with some important conditions.",
      },
      { type: "h2", text: "When texts are admissible" },
      {
        type: "p",
        text: "To be used in court, text messages generally need to be relevant to an issue in the case, authentic (genuinely from who you say sent them), and lawfully obtained. Texts can be relevant to many issues — hidden income, threats, parenting behavior, or admissions about assets.",
      },
      { type: "h2", text: "How you obtained them matters" },
      {
        type: "p",
        text: "This is where people stumble. Messages you received yourself, or that are on a shared account, are usually fair game. But messages you obtained by breaking into your spouse's protected phone or accounts can be inadmissible — and can expose you to liability. (See our article on whether a spouse can search your phone.)",
      },
      { type: "h2", text: "Don't delete — preserve" },
      {
        type: "callout",
        title: "Deleting messages can be worse than the messages themselves.",
        text: "Destroying relevant evidence ('spoliation') can lead to sanctions and make you look guilty. Preserve everything once you anticipate a dispute.",
      },
      { type: "h2", text: "Practical tips" },
      {
        type: "ul",
        items: [
          "Take clear screenshots that show the sender, date, and time",
          "Back up the original messages on the device when possible",
          "Don't edit, alter, or selectively crop messages",
          "Don't delete texts that could be relevant — even unflattering ones",
          "Share everything with your attorney so it's used strategically",
        ],
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "Can your spouse look through your phone without consent?", href: "/blog/spouse-look-through-phone-without-consent-california" },
          { label: "How property is divided in a California divorce", href: "/blog/how-property-divided-california-divorce" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "Are text messages admissible in a California divorce?",
        a: "Yes, if they're relevant, authentic, and lawfully obtained. Texts can bear on hidden income, threats, parenting, or admissions. How you obtained them is critical to whether they can be used.",
      },
      {
        q: "Can I use texts I got from my spouse's phone without permission?",
        a: "Possibly not. Messages obtained by breaking into a spouse's password-protected device or accounts can be inadmissible and may expose you to liability. Lawfully obtained messages are far safer.",
      },
      {
        q: "Should I delete embarrassing text messages before my divorce?",
        a: "No. Destroying potentially relevant evidence can lead to court sanctions and damage your credibility. Preserve everything and let your attorney advise you on how it's handled.",
      },
    ],
  },
  {
    slug: "does-adultery-affect-divorce-california",
    title: "Does Adultery Affect Divorce in California?",
    metaTitle: "Does Adultery Affect Divorce in California? | Rachel Reed Law",
    description:
      "California is a no-fault divorce state, so does cheating matter? A Ventura divorce attorney explains when adultery does — and doesn't — affect your divorce.",
    excerpt:
      "Because California is a no-fault state, adultery usually doesn't change property division or support — but there are a few important exceptions. Here's the real answer.",
    category: "Family Law",
    date: "2026-06-02",
    keywords: [
      "does adultery affect divorce California",
      "cheating and divorce California",
      "no-fault divorce California adultery",
    ],
    image: images.portraitSuited,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "When a marriage ends because of an affair, it's natural to expect the cheating spouse to 'pay' for it in the divorce. But California law may surprise you. Because California is a no-fault divorce state, adultery usually has far less legal impact than people assume.",
      },
      { type: "h2", text: "No-fault means you don't prove wrongdoing" },
      {
        type: "p",
        text: "In California, you don't have to prove your spouse did anything wrong to get divorced — 'irreconcilable differences' is enough. As a result, adultery by itself generally does not affect how the court divides community property or whether spousal support is awarded.",
      },
      { type: "h2", text: "When adultery can matter" },
      {
        type: "p",
        text: "There are limited exceptions where an affair can become relevant:",
      },
      {
        type: "ul",
        items: [
          "Wasting community money — if a spouse spent significant marital funds on an affair (gifts, trips, a second residence), that can be raised as a breach of fiduciary duty",
          "Custody — only if the relationship genuinely affects the children's well-being, not as moral punishment",
          "Practical conflict — affairs often raise the emotional temperature, making settlement harder",
        ],
      },
      {
        type: "callout",
        title: "Hurt, but unsure what it means legally?",
        text: "Rachel can tell you honestly whether an affair will actually affect your case — and where to focus your energy instead. Free, confidential consultation.",
      },
      { type: "h2", text: "Focus where it counts" },
      {
        type: "p",
        text: "Understandably, betrayal feels like it should change everything. But pouring resources into proving an affair rarely pays off in a no-fault state. A good attorney helps you channel your energy toward what the court actually decides: a fair division of property, appropriate support, and a parenting plan that protects your children.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "Dating during divorce in California: will it hurt my case?", href: "/blog/dating-during-divorce-california" },
          { label: "How property is divided in a California divorce", href: "/blog/how-property-divided-california-divorce" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "Does cheating affect a divorce settlement in California?",
        a: "Usually not. California is no-fault, so adultery by itself generally doesn't change property division or spousal support. Limited exceptions exist, such as a spouse wasting community funds on an affair.",
      },
      {
        q: "Can adultery affect custody in California?",
        a: "Only if the relationship genuinely affects the children's well-being. Courts decide custody by the best interests of the child, not to punish a parent for an affair.",
      },
      {
        q: "Can I make my spouse pay for spending money on an affair?",
        a: "Possibly. If a spouse spent significant community funds on an affair, that can be raised as a breach of fiduciary duty and factored into the division of assets. An attorney can advise based on the specifics.",
      },
    ],
  },
  {
    slug: "dating-during-divorce-california",
    title: "Dating During Divorce in California: Will It Hurt My Case?",
    metaTitle: "Dating During Divorce in California: Will It Hurt Your Case? | Rachel Reed Law",
    description:
      "Is it okay to date before your divorce is final in California? A Ventura family law attorney explains the legal and practical risks for support and custody.",
    excerpt:
      "Legally, California's no-fault rules mean dating won't bar your divorce. But it can still create real problems for support, custody, and conflict. Here's the nuanced answer.",
    category: "Family Law",
    date: "2026-06-05",
    keywords: [
      "dating during divorce California",
      "can I date before divorce is final California",
      "dating and custody California",
    ],
    image: images.portraitCasual,
    relatedPractice: { label: "Divorce", href: "/family-law/divorce" },
    body: [
      {
        type: "p",
        text: "Divorce can take many months, and life doesn't stop while you wait. A common question is whether it's okay to start dating before the divorce is final. Legally, California's no-fault system means dating generally won't prevent or derail your divorce — but there are practical risks worth understanding.",
      },
      { type: "h2", text: "The legal side: no-fault" },
      {
        type: "p",
        text: "Because California doesn't require proving wrongdoing, dating during divorce typically isn't a legal basis to penalize you in the divorce itself. You're not going to lose your fair share of property simply because you started seeing someone.",
      },
      { type: "h2", text: "The practical risks" },
      {
        type: "ul",
        items: [
          "Custody concerns — introducing children to a new partner too soon, or exposing them to conflict, can become an issue if it affects their well-being",
          "Spending community money — lavishing marital funds on a new partner can raise fiduciary-duty concerns",
          "Higher conflict — a new relationship often inflames an already tense divorce, making settlement harder and more expensive",
        ],
      },
      {
        type: "callout",
        title: "Thinking about dating before it's final?",
        text: "A quick, honest conversation with Rachel can help you avoid the pitfalls that turn a personal choice into a legal headache.",
      },
      { type: "h2", text: "A cautious approach" },
      {
        type: "p",
        text: "If you do date, discretion helps: keep new relationships away from the children until things settle, avoid spending community funds on a new partner, and keep the focus of your case on property, support, and your kids. When custody is involved especially, what seems like a private choice can become evidence.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "Does adultery affect divorce in California?", href: "/blog/does-adultery-affect-divorce-california" },
          { label: "Can social media hurt my custody case?", href: "/blog/social-media-custody-case-california" },
          { label: "Rachel's Ventura divorce practice", href: "/family-law/divorce" },
        ],
      },
    ],
    faqs: [
      {
        q: "Is it legal to date before my divorce is final in California?",
        a: "Yes. California is a no-fault state, so dating during divorce generally won't prevent your divorce or, by itself, cost you your fair share of property. The risks are mostly practical.",
      },
      {
        q: "Can dating affect my custody case?",
        a: "It can, if it affects the children's well-being — for example, introducing a new partner too soon or exposing kids to conflict. Courts focus on the best interests of the child.",
      },
      {
        q: "Can spending money on a new partner hurt me in divorce?",
        a: "Potentially. Using community funds on a new relationship can raise breach-of-fiduciary-duty concerns and be factored into the division of assets. It's best to be cautious until the divorce is final.",
      },
    ],
  },
  {
    slug: "social-media-custody-case-california",
    title: "Can Social Media Hurt My Custody Case in California?",
    metaTitle: "Can Social Media Hurt My Custody Case in California? | Rachel Reed Law",
    description:
      "Your posts can become evidence. A Ventura custody attorney explains how social media can affect a California custody case and how to protect yourself.",
    excerpt:
      "That post, photo, or comment can end up in front of a judge. Here's how social media can hurt a California custody case — and the simple rules to protect yourself.",
    category: "Family Law",
    date: "2026-06-07",
    keywords: [
      "social media custody case California",
      "Facebook divorce evidence California",
      "social media and child custody California",
    ],
    image: images.portraitWalking,
    relatedPractice: { label: "Child Custody", href: "/family-law/child-custody" },
    body: [
      {
        type: "p",
        text: "In custody disputes, social media has become a goldmine of evidence — and a minefield for the unwary. A single post, photo, or comment can be screenshotted and used to question your judgment as a parent. The short answer is yes: social media can absolutely hurt your custody case.",
      },
      { type: "h2", text: "How posts become evidence" },
      {
        type: "p",
        text: "The other side's attorney can use your public posts — and sometimes private ones obtained through proper channels — to paint a picture for the judge. Photos of partying, angry rants about your co-parent, new purchases that contradict your claimed finances, or anything suggesting poor judgment around the children can all come back to haunt you.",
      },
      { type: "h2", text: "Privacy settings won't fully protect you" },
      {
        type: "callout",
        title: "Assume a judge will see it.",
        text: "Private settings, mutual friends, and lawful discovery mean 'private' posts often aren't. The safest rule: don't post anything you wouldn't want read aloud in court.",
      },
      { type: "h2", text: "Simple rules during a custody case" },
      {
        type: "ul",
        items: [
          "Don't post about your case, your ex, or the court process",
          "Avoid photos involving alcohol, partying, or risky behavior",
          "Don't post about new purchases if your finances are at issue",
          "Be cautious about introducing or showcasing a new partner",
          "Don't delete existing posts without asking your attorney — that can be spoliation",
          "Tighten your privacy settings, but don't rely on them",
        ],
      },
      { type: "h2", text: "When in doubt, stay offline" },
      {
        type: "p",
        text: "The simplest protection during a custody dispute is to dramatically reduce your social media use until it's resolved. Nothing you post will help your case — but plenty could hurt it.",
      },
      {
        type: "links",
        title: "Related reading",
        items: [
          { label: "How is child custody decided in Ventura County?", href: "/blog/how-child-custody-is-decided-ventura-county" },
          { label: "Can my ex record me without my consent in California?", href: "/blog/ex-record-me-without-consent-california" },
          { label: "Rachel's child custody practice", href: "/family-law/child-custody" },
        ],
      },
    ],
    faqs: [
      {
        q: "Can social media posts be used against me in a custody case?",
        a: "Yes. Posts, photos, and comments can be used as evidence to question your judgment as a parent. This includes content suggesting partying, conflict, hidden finances, or poor decisions around the children.",
      },
      {
        q: "Are my private social media posts safe in a custody case?",
        a: "Not necessarily. Privacy settings, mutual connections, and lawful discovery mean 'private' content often surfaces. Assume a judge could see anything you post.",
      },
      {
        q: "Should I delete my social media during a custody case?",
        a: "Reduce your activity, but don't delete existing posts without consulting your attorney — deleting potentially relevant content can be considered spoliation and can hurt you. Tighten settings and stop posting instead.",
      },
    ],
  },
];

export const postsBySlug = new Map(posts.map((p) => [p.slug, p]));

export function getPost(slug: string): Post | undefined {
  return postsBySlug.get(slug);
}

export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return getSortedPosts().filter((p) => p.category === category);
}

/**
 * Posts relevant to a practice page. Prefers posts whose relatedPractice points
 * at this exact practice path, then fills in with same-category posts.
 */
export function getPostsForPractice(
  practicePath: string,
  category: PostCategory,
  limit = 3
): Post[] {
  const sorted = getSortedPosts();
  const exact = sorted.filter((p) => p.relatedPractice.href === `/${practicePath}`);
  const sameCategory = sorted.filter(
    (p) => p.category === category && !exact.includes(p)
  );
  return [...exact, ...sameCategory].slice(0, limit);
}
