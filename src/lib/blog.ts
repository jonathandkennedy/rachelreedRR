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
