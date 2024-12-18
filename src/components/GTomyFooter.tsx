import { Footer, FooterItem, FooterSocialItem, useTranslation } from 'gtomy-lib';
import { PROJECTS } from '@/common/constants';

export function GTomyFooter() {
  const { t } = useTranslation('gtomy');

  return (
    <Footer
      title={t('footer.title')}
      height="tall"
      showSettings
      showIcon
      links={[
        {
          header: t('footer.projects'),
          links: (
            <>
              {PROJECTS.map((project, index) => (
                <FooterItem as="a" href={project.link} key={index}>
                  {project.name}
                </FooterItem>
              ))}
            </>
          ),
        },
        // {
        //   header: t('footer.usefulLinks'),
        //   links: (
        //     <>
        //       <FooterItem as={Link} href="/privacy-policy">
        //         {t('privacy.title', { ns: 'pages' })}
        //       </FooterItem>
        //       <FooterItem as={Link} href="/admin">
        //         {t('admin')}
        //       </FooterItem>
        //     </>
        //   ),
        // },
      ]}
      socialMedia={
        <>
          <FooterSocialItem type="bluesky" href="https://bsky.app/profile/gtomy.net" />
          <FooterSocialItem type="instagram" href="https://www.instagram.com/gtomyasek" />
          <FooterSocialItem type="threads" href="https://www.threads.net/@gtomyasek" />
          <FooterSocialItem type="youtube" href="https://youtube.com/gtomy" />
        </>
      }
    />
  );
}
