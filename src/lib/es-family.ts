import type { Block, FAQ } from "./content";
import { images } from "./site";

/**
 * Spanish-language family-law pages for Ventura County's large
 * Spanish-speaking community. Each page maps to an English counterpart
 * (enHref) for reciprocal hreflang annotations.
 */
export type EsPractice = {
  /** URL segment under /es/derecho-de-familia ("" for the pillar). */
  slug: string;
  isPillar: boolean;
  /** English counterpart for hreflang + language switcher. */
  enHref: string;
  navLabel: string;
  h1: string;
  heroSub: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ctaButton: string;
  ctaHeadline: string;
  intro: Block[];
  body: Block[];
  faqs: FAQ[];
  image: string;
};

export const esFamilyPillarPath = "/es/derecho-de-familia";

export const esFamily: EsPractice[] = [
  {
    slug: "",
    isPillar: true,
    enHref: "/family-law",
    navLabel: "Derecho de Familia",
    h1: "Abogada de Derecho de Familia en Ventura",
    heroSub:
      "El divorcio, la custodia y la manutención afectan el futuro de su familia. Rachel Reed ofrece respuestas honestas y una defensa incansable, en español.",
    metaTitle: "Abogada de Derecho de Familia en Ventura | Rachel Reed Law",
    metaDescription:
      "Rachel Reed es abogada de derecho de familia en Ventura, CA: divorcio, custodia de menores, manutención y órdenes de restricción. Consulta gratuita y confidencial. Llame al (805) 585-5330.",
    keywords: [
      "abogada de derecho familiar Ventura",
      "abogada de familia Ventura",
      "abogada de divorcio Ventura",
      "abogado de familia Oxnard",
    ],
    ctaButton: "Hable con Rachel Hoy",
    ctaHeadline: "Proteja el Futuro de su Familia",
    intro: [
      {
        type: "p",
        text: "Pocos momentos en la vida son tan abrumadores como el final de un matrimonio o una disputa por sus hijos. Las decisiones que tome ahora afectarán sus finanzas, su tiempo con sus hijos y su tranquilidad por muchos años. Usted merece una abogada que le diga la verdad y que luche por usted sin descanso.",
      },
      {
        type: "p",
        text: "Rachel Reed se ha ganado una reputación en el Condado de Ventura como una defensora feroz y honesta. Maneja todos los asuntos de derecho de familia, desde divorcios de mutuo acuerdo hasta las batallas de custodia más difíciles, y atiende a clientes en español.",
      },
    ],
    body: [
      { type: "h2", text: "Derecho de familia en el Condado de Ventura" },
      {
        type: "p",
        text: "Los casos de derecho de familia del Condado de Ventura se deciden en el Palacio de Justicia (Hall of Justice) en la Avenida Victoria, en Ventura. Rachel ejerce regularmente en estos tribunales y conoce a fondo cómo trabajan los jueces locales, lo que beneficia a sus clientes en cada etapa.",
      },
      {
        type: "p",
        text: "Ya sea que viva en Ventura, Oxnard, Camarillo, Thousand Oaks, Simi Valley o Santa Paula, Rachel está cerca y lista para ayudarle.",
      },
      { type: "h2", text: "Cómo le ayuda Rachel" },
      {
        type: "ul",
        items: [
          "Divorcio: división de bienes y deudas de la comunidad",
          "Custodia de menores: custodia legal y física, visitas y modificaciones",
          "Manutención de menores y cónyuge: cálculos justos y cumplimiento",
          "Órdenes de restricción: protección y defensa contra acusaciones falsas",
        ],
      },
      {
        type: "callout",
        title: "No tiene que enfrentar esto solo.",
        text: "Cada caso comienza con una conversación gratuita y confidencial. Cuéntele a Rachel lo que está pasando y reciba un plan claro y honesto.",
      },
      { type: "h2", text: "Un enfoque basado en la honestidad" },
      {
        type: "p",
        text: "Rachel nunca le venderá una fantasía para que la contrate. Desde la primera conversación, le da una evaluación honesta de sus fortalezas, sus riesgos y el camino más realista hacia sus metas. Luego se prepara más que la otra parte para conseguir el mejor resultado posible.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta un abogado de familia en el Condado de Ventura?",
        a: "El costo depende de si su caso es disputado y de su complejidad. Rachel ofrece una consulta inicial gratuita y confidencial para revisar su situación y explicarle sus honorarios por adelantado, sin sorpresas. Llame al (805) 585-5330.",
      },
      {
        q: "¿Tengo que ir a la corte para mi divorcio o custodia?",
        a: "No siempre. Muchos asuntos de familia se resuelven mediante negociación o mediación. Pero si la otra parte no es razonable, conviene tener una abogada totalmente preparada para litigar, y Rachel es conocida por su presencia en la corte.",
      },
      {
        q: "¿Atiende Rachel a clientes en español?",
        a: "Sí. Rachel atiende a la comunidad hispanohablante del Condado de Ventura en asuntos de derecho de familia. Llame al (805) 585-5330 para una consulta gratuita y confidencial.",
      },
    ],
    image: images.portraitSuited,
  },
  {
    slug: "divorcio",
    isPillar: false,
    enHref: "/family-law/divorce",
    navLabel: "Divorcio",
    h1: "Abogada de Divorcio en Ventura",
    heroSub:
      "Ya sea un divorcio amistoso o una lucha por todo lo que ha construido, Rachel Reed protege sus finanzas, sus hijos y su futuro.",
    metaTitle: "Abogada de Divorcio en Ventura | Rachel Reed Law",
    metaDescription:
      "Abogada de divorcio en el Condado de Ventura. Rachel Reed maneja divorcios disputados y de mutuo acuerdo, división de bienes y casos de alto conflicto. Consulta gratuita: (805) 585-5330.",
    keywords: [
      "abogada de divorcio Ventura",
      "abogado de divorcio Oxnard",
      "divorcio Condado de Ventura",
      "abogada de divorcio en español Ventura",
    ],
    ctaButton: "Comience su Consulta de Divorcio",
    ctaHeadline: "Dé el Primer Paso Hacia su Nuevo Capítulo",
    intro: [
      {
        type: "p",
        text: "El divorcio rara vez se trata solo de terminar un matrimonio. Se trata de quién se queda con la casa, cómo criarán a los hijos, qué pasa con su jubilación y si tendrá seguridad económica después. Hacerlo bien es importante, y las decisiones tempranas pueden seguirle por décadas.",
      },
      {
        type: "p",
        text: "Rachel Reed guía a clientes del Condado de Ventura por todo tipo de divorcios, desde casos sencillos de mutuo acuerdo hasta litigios de alto conflicto con bienes ocultos, negocios y disputas de custodia.",
      },
    ],
    body: [
      { type: "h2", text: "California es un estado de bienes gananciales" },
      {
        type: "p",
        text: "En California, los bienes y las deudas adquiridos durante el matrimonio generalmente se consideran bienes de la comunidad y se dividen en partes iguales. En la práctica, rara vez es tan simple: clasificar bienes separados frente a gananciales, valorar un negocio y dividir cuentas de jubilación requiere un trabajo cuidadoso.",
      },
      {
        type: "ul",
        items: [
          "La casa familiar y otros bienes inmuebles",
          "Cuentas de jubilación y pensiones",
          "Negocios y prácticas profesionales",
          "Vehículos y bienes personales",
          "Deudas de la comunidad y tarjetas de crédito",
        ],
      },
      { type: "h2", text: "El período de espera de seis meses" },
      {
        type: "p",
        text: "California exige un período de espera obligatorio de seis meses desde que se notifica al cónyuge antes de que el divorcio sea definitivo. Los casos disputados sobre bienes o custodia pueden tardar más; Rachel trabaja para resolver su caso con la mayor eficiencia posible.",
      },
      {
        type: "callout",
        title: "¿Le preocupa que su cónyuge ya tenga abogado?",
        text: "No espere. Mientras antes participe Rachel, más podrá hacer para proteger sus intereses. Programe una consulta gratuita y confidencial hoy.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda un divorcio en California?",
        a: "California tiene un período de espera obligatorio de seis meses después de notificar al cónyuge. Los divorcios de mutuo acuerdo pueden finalizar cerca de ese mínimo, mientras que los casos disputados pueden tardar más.",
      },
      {
        q: "¿Se divide todo 50/50 en un divorcio en California?",
        a: "California es un estado de bienes gananciales, por lo que los bienes y deudas adquiridos durante el matrimonio generalmente se dividen en partes iguales. Los bienes separados, como lo que tenía antes del matrimonio o recibió por herencia, normalmente le pertenecen a usted.",
      },
      {
        q: "¿Qué pasa si mi cónyuge esconde dinero o bienes?",
        a: "California exige la divulgación financiera completa, y esconder bienes puede tener consecuencias serias. Rachel utiliza el proceso formal de descubrimiento y, cuando es necesario, expertos forenses para descubrir ingresos y bienes ocultos.",
      },
    ],
    image: images.portraitSuited,
  },
  {
    slug: "custodia-de-menores",
    isPillar: false,
    enHref: "/family-law/child-custody",
    navLabel: "Custodia de Menores",
    h1: "Abogada de Custodia de Menores en Ventura",
    heroSub:
      "Nada importa más que sus hijos. Rachel Reed lucha por proteger su tiempo de crianza y su relación con ellos.",
    metaTitle: "Abogada de Custodia de Menores en Ventura | Rachel Reed Law",
    metaDescription:
      "Abogada de custodia de menores en el Condado de Ventura. Rachel Reed protege a los padres en disputas de custodia, visitas y reubicación. Consulta gratuita: (805) 585-5330.",
    keywords: [
      "abogada de custodia Ventura",
      "abogado de custodia de menores Oxnard",
      "custodia de los hijos California",
      "derechos del padre California",
    ],
    ctaButton: "Proteja sus Derechos de Custodia",
    ctaHeadline: "Luche por Cada Día con sus Hijos",
    intro: [
      {
        type: "p",
        text: "Una disputa de custodia puede ser lo más aterrador que enfrenta un padre o una madre. Lo que está en juego no es dinero ni propiedad: son sus hijos. Necesita una abogada que entienda lo que está en riesgo y que no se rinda.",
      },
      {
        type: "p",
        text: "Rachel Reed es conocida por exponer la manipulación y las narrativas falsas para que los jueces vean la verdad, asegurando resultados que protegen a los niños y la relación de sus clientes con ellos.",
      },
    ],
    body: [
      { type: "h2", text: "Custodia legal y custodia física" },
      {
        type: "p",
        text: "California reconoce dos tipos de custodia. La custodia legal es el derecho a tomar decisiones importantes sobre la salud, la educación y el bienestar del niño. La custodia física se refiere a dónde vive el niño y al horario diario de crianza. Cualquiera puede ser conjunta (compartida) o exclusiva.",
      },
      { type: "h2", text: "El interés superior del menor" },
      {
        type: "p",
        text: "Las cortes de California deciden la custodia según el interés superior del menor, considerando la salud y seguridad del niño, la capacidad de cada padre para cuidarlo, cualquier historial de abuso o problemas de sustancias, y la importancia del contacto continuo con ambos padres.",
      },
      { type: "h2", text: "Derechos del padre" },
      {
        type: "p",
        text: "Los padres tienen pleno derecho a igual consideración bajo la ley de California. La ley no favorece a la madre ni al padre por su género. Rachel ha ayudado a muchos padres en Ventura y Oxnard a asegurar tiempo significativo y protegido con sus hijos.",
      },
      {
        type: "callout",
        title: "¿Enfrenta una disputa de custodia o una mudanza?",
        text: "El tiempo es clave en los casos de custodia. Hable con Rachel ahora para una evaluación gratuita y confidencial.",
      },
    ],
    faqs: [
      {
        q: "¿Las madres reciben automáticamente la custodia en California?",
        a: "No. La ley de California no da preferencia según el género. Padres y madres tienen derecho a igual consideración, y las cortes deciden según el interés superior del menor.",
      },
      {
        q: "¿Puedo modificar una orden de custodia existente?",
        a: "Sí, si ha habido un cambio significativo en las circunstancias desde la última orden, como una reubicación, un cambio de horario laboral o preocupaciones de seguridad.",
      },
      {
        q: "¿Qué es un caso de mudanza (move-away)?",
        a: "Un caso de mudanza surge cuando un padre con custodia quiere reubicarse con el niño lo suficientemente lejos como para alterar el plan de crianza actual. Estos casos son complejos y de mucho en juego.",
      },
    ],
    image: images.portraitCasual,
  },
  {
    slug: "manutencion",
    isPillar: false,
    enHref: "/family-law/support",
    navLabel: "Manutención",
    h1: "Abogada de Manutención de Menores y Cónyuge en Ventura",
    heroSub:
      "La manutención debe reflejar la verdad sobre los ingresos y las necesidades, no los juegos. Rachel Reed se asegura de que los números sean correctos.",
    metaTitle: "Abogada de Manutención de Menores en Ventura | Rachel Reed Law",
    metaDescription:
      "Abogada de manutención de menores y cónyuge en el Condado de Ventura. Rachel Reed maneja cálculos, modificaciones y cumplimiento. Llame al (805) 585-5330.",
    keywords: [
      "manutención de menores Ventura",
      "abogada de manutención Ventura",
      "pensión alimenticia California",
      "manutención conyugal California",
    ],
    ctaButton: "Hable con Rachel sobre la Manutención",
    ctaHeadline: "Una Orden de Manutención que Refleje la Verdad",
    intro: [
      {
        type: "p",
        text: "Las órdenes de manutención afectan su hogar cada mes. Ya sea que usted necesite la manutención para criar a sus hijos o que sea quien debe pagarla, la diferencia entre una orden correcta y una inflada es enorme con el tiempo.",
      },
      {
        type: "p",
        text: "Rachel Reed se asegura de que las pautas de California se apliquen correctamente, que todos los ingresos se declaren y que la orden final sea justa.",
      },
    ],
    body: [
      { type: "h2", text: "Cómo se calcula la manutención de menores" },
      {
        type: "p",
        text: "California usa una fórmula estatal que considera los ingresos de cada padre, el tiempo que cada uno pasa con los hijos, el seguro médico, el cuidado infantil y otros factores. Como la fórmula depende de esos datos, establecer correctamente los ingresos —sobre todo de un padre que trabaja por cuenta propia— es clave.",
      },
      { type: "h2", text: "Manutención conyugal (pensión alimenticia)" },
      {
        type: "p",
        text: "La manutención conyugal puede ordenarse para ayudar al cónyuge de menores ingresos a mantener un nivel de vida razonable. Las cortes consideran la duración del matrimonio, la capacidad de ingresos de cada cónyuge, el nivel de vida durante el matrimonio y otros factores.",
      },
      { type: "h2", text: "Modificación y cumplimiento" },
      {
        type: "p",
        text: "Cuando cambian las circunstancias, las órdenes existentes pueden modificarse. Y cuando alguien simplemente se niega a pagar, Rachel puede buscar el cumplimiento mediante el embargo de salario y otros recursos de la corte.",
      },
      {
        type: "callout",
        title: "¿Su orden de manutención es incorrecta?",
        text: "Rachel puede revisar su orden y los ingresos detrás de ella. Programe una consulta gratuita y confidencial.",
      },
    ],
    faqs: [
      {
        q: "¿Cómo se calcula la manutención de menores en California?",
        a: "California aplica una fórmula estatal basada principalmente en los ingresos de cada padre y el porcentaje de tiempo que cada uno pasa con los hijos, junto con factores como el seguro médico y el cuidado infantil.",
      },
      {
        q: "¿Puedo cambiar mi orden de manutención si cambian mis ingresos?",
        a: "Sí. Un cambio significativo en las circunstancias —como la pérdida de empleo o un cambio importante de ingresos o de tiempo de crianza— puede justificar una modificación.",
      },
      {
        q: "¿Qué puedo hacer si mi ex no paga la manutención?",
        a: "La manutención no pagada puede hacerse cumplir mediante el embargo de salario, la interceptación de reembolsos de impuestos, gravámenes y otros recursos. Rachel puede buscar el cumplimiento.",
      },
    ],
    image: images.portraitCasual,
  },
  {
    slug: "ordenes-de-restriccion",
    isPillar: false,
    enHref: "/family-law/domestic-violence",
    navLabel: "Órdenes de Restricción",
    h1: "Abogada de Órdenes de Restricción en Ventura",
    heroSub:
      "Ya sea que necesite protección o que haya sido acusado falsamente, Rachel Reed maneja las órdenes de restricción con urgencia y cuidado.",
    metaTitle: "Abogada de Órdenes de Restricción en Ventura | Rachel Reed Law",
    metaDescription:
      "Abogada de órdenes de restricción y violencia doméstica en el Condado de Ventura. Rachel Reed ayuda a víctimas a obtener protección y defiende contra acusaciones falsas. (805) 585-5330.",
    keywords: [
      "orden de restricción Ventura",
      "abogada de violencia doméstica Ventura",
      "orden de protección California",
      "acusación falsa violencia doméstica California",
    ],
    ctaButton: "Obtenga Ayuda Urgente",
    ctaHeadline: "Obtenga Protección — o Limpie su Nombre",
    intro: [
      {
        type: "p",
        text: "Las órdenes de restricción por violencia doméstica se mueven rápido y tienen consecuencias serias. Si está en peligro, necesita protección ahora. Si lo han acusado falsamente —a veces como táctica en una disputa de custodia o divorcio— la orden puede costarle su hogar, sus armas y tiempo con sus hijos.",
      },
      {
        type: "p",
        text: "Rachel Reed maneja ambos lados de estos casos en el Condado de Ventura con la urgencia que exigen.",
      },
    ],
    body: [
      { type: "h2", text: "Si necesita protección" },
      {
        type: "p",
        text: "Rachel puede ayudarle a obtener rápidamente una orden de restricción temporal y luego presentar un caso convincente en la audiencia para una orden de más largo plazo. Una orden puede exigir que la otra persona se mantenga alejada, abandone un hogar compartido y entregue sus armas, e incluir protección para sus hijos.",
      },
      { type: "h2", text: "Si lo han acusado falsamente" },
      {
        type: "p",
        text: "Las acusaciones falsas o exageradas son comunes en disputas familiares acaloradas. Una orden en su contra puede afectar la custodia, su empleo, su derecho a poseer armas y su reputación. Rachel construye una defensa cuidadosa, reuniendo pruebas y exponiendo inconsistencias.",
      },
      {
        type: "callout",
        title: "¿Se acerca rápido una fecha de audiencia?",
        text: "Estos casos se deciden en poco tiempo. Comuníquese con Rachel de inmediato para una consulta confidencial.",
      },
    ],
    faqs: [
      {
        q: "¿Qué tan rápido puedo obtener una orden de restricción en el Condado de Ventura?",
        a: "Cuando hay una amenaza inmediata, a menudo se puede emitir una orden de restricción temporal en un día, seguida de una audiencia en la corte —normalmente en pocas semanas— para decidir una orden de más largo plazo.",
      },
      {
        q: "¿Qué pasa si presentan una orden de restricción en mi contra?",
        a: "Recibirá un aviso de audiencia y podría estar sujeto a órdenes temporales mientras tanto. Una orden final puede afectar la custodia, los derechos sobre armas y dónde puede vivir. Es fundamental contar con representación antes de la audiencia.",
      },
      {
        q: "¿Puede una orden de restricción afectar mi caso de custodia?",
        a: "Sí. Las determinaciones de violencia doméstica pueden afectar significativamente la custodia y las visitas, tanto si busca protección como si se defiende de una acusación.",
      },
    ],
    image: images.portraitWalking,
  },
];

export const esFamilyBySlug = new Map(esFamily.map((p) => [p.slug, p]));

export function getEsFamily(slug: string): EsPractice | undefined {
  return esFamilyBySlug.get(slug);
}

/** Map of English family path → Spanish href, for reciprocal hreflang. */
export const enToEsFamily: Record<string, string> = Object.fromEntries(
  esFamily.map((p) => [
    p.enHref,
    p.isPillar ? esFamilyPillarPath : `${esFamilyPillarPath}/${p.slug}`,
  ])
);
