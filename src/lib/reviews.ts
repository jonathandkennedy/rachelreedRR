/**
 * Real client reviews from Rachel Reed Law's Yelp profile, displayed with
 * the same first-name + last-initial + city format Yelp shows publicly.
 * Source: https://www.yelp.com/biz/rachel-reed-law-pc-ventura
 */

export type Review = {
  name: string;
  city: string;
  rating: 5;
  date: string;
  source: "Yelp";
  matter: string;
  short: string; // pull-quote for cards
  full: string; // longer excerpt for the reviews page
};

export const reviews: Review[] = [
  {
    name: "Norma B.",
    city: "Santa Paula, CA",
    rating: 5,
    date: "2025-05-06",
    source: "Yelp",
    matter: "Child Custody & Support",
    short:
      "Hiring Rachel Reed was the single best decision I made during the most challenging chapter of my life. She fights with unmatched passion, heart, and fearlessness.",
    full: "Hiring Rachel Reed was the single best decision I made during the most challenging chapter of my life. She is a rare kind of attorney — one who not only knows the law inside and out, but also fights with unmatched passion, heart, and fearlessness. Rachel masterfully exposed the truth in a complex custody case, ensuring the judge saw through manipulation and false narratives. Because of her, I achieved an outcome far beyond my expectations: a fair and favorable custody agreement and a significant monthly child support order — all while putting the best interest of my daughter first. A close friend in law enforcement described her as 'a bulldog in the courtroom,' and that could not be more accurate. Rachel Reed fights — and she wins.",
  },
  {
    name: "Mark J.",
    city: "Ventura, CA",
    rating: 5,
    date: "2025-05-25",
    source: "Yelp",
    matter: "Family Law",
    short:
      "Wouldn't know what to do without Rachel. She's one of a kind! She really made my daughter feel comfortable and was fantastic.",
    full: "Wouldn't know what to do without Rachel. She's one of a kind! She really made my daughter feel comfortable and was fantastic. She's so organized, on time, great attitude — the list goes on. You won't be disappointed!",
  },
  {
    name: "Maya C.",
    city: "California",
    rating: 5,
    date: "2023-09-27",
    source: "Yelp",
    matter: "Family Law",
    short:
      "Want a bulldog in court? Want an attorney who gives you straight answers and actually listens to what you want? Miss Reed is your person.",
    full: "Want a bulldog in court? Want an attorney that will not bullshit and gives you straight-up answers? Want someone who actually listens to what you want? Well, Miss Reed is your person. She is an amazing attorney and worth every penny. I wish I had hired her before hiring the previous attorneys.",
  },
  {
    name: "Jorge B.",
    city: "Oxnard, CA",
    rating: 5,
    date: "2024-04-22",
    source: "Yelp",
    matter: "Family Law",
    short:
      "My anxiety was through the roof before I got Rachel to represent us. Thanks to her we won our case and even got more than expected.",
    full: "My anxiety was through the roof before I got Rachel to represent us. She was very easy to talk to and very wise in all her actions regarding my case. Thanks to Rachel we won our case and even got more than expected.",
  },
  {
    name: "Bryan W.",
    city: "Oxnard, CA",
    rating: 5,
    date: "2023-11-25",
    source: "Yelp",
    matter: "Divorce & Fathers' Rights",
    short:
      "If you are a father trying to do the best for your children, this is who you want. She did what was best for our kids.",
    full: "If you are a father trying to do the best for your children, this is who you want. She helped with my divorce that my ex wanted and did what was best for our children.",
  },
];
