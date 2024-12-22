import { Footer, FooterSocialItem } from 'gtomy-lib';

export function GTomyFooter() {
  return (
    <Footer
      title="Vytvořil GTomy, 2024"
      showIcon
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
