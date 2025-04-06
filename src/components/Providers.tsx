import { PropsWithChildren } from 'react';
import { Cookies } from 'gtomy-lib';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <Cookies
        translation={{
          title: 'Soubory cookie',
          subtitle:
            'Používáním našich stránek souhlasíte s používáním souborů cookie k zajištění lepšího zážitku ze stránek.',
          info: 'Zobrazit více',
          accept: 'Přijmout',
          dialog: {
            title: 'Soubory cookie',
            text: 'Nezbytné cookies pro správné fungování našeho webu. Tyto cookies jsou nezbytně nutné pro správnou funkci webu - zajišťují správné zobrazení, odesílání formulářů, vkládání zboží do košíku a podobně. Technické cookies není možné vypnout. Sledování návštěvnosti a chování na webu nám pomáhá zlepšovat naše služby. Statistické cookies používáme k vyhodnocování výkonu našeho webu a reklamních kampaní. Pomocí cookies určujeme počet návštěv, zdroje návštěvnosti a chování zákazníků na našem webu - např. informace o tom, co na webu hledáte a které informace jsou pro vás nejdůležitější. Na základě těchto dat můžeme provádět optimalizaci webu a vylepšovat naše služby.',
          },
        }}
      />
      {children}
    </>
  );
}
