export const metadata = {
  title: "SAP CAR Евакуатор — Івано-Франківськ та область | Виклик 24/7",
  description:
    "Швидкий евакуатор в Івано-Франківську та області. Виїзд за 30 хвилин, цілодобово без вихідних. Легкові авто та мікроавтобуси до 5 тон. Телефонуйте: +38 075 663 52 44",
  keywords: [
    "евакуатор",
    "евакуатор Івано-Франківськ",
    "виклик евакуатора",
    "евакуатор 24/7",
    "евакуатор ціна",
    "евакуатор область",
    "sap car евакуатор",
  ],
  authors: [{ name: "SAP CAR" }],
  openGraph: {
    title: "SAP CAR Евакуатор — Івано-Франківськ | 24/7",
    description:
      "Швидкий евакуатор в Івано-Франківську. Виїзд за 30 хвилин, цілодобово. Телефонуйте зараз!",
    locale: "uk_UA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18253355573" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18253355573');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-18253355573/uHEBCO7Ek8UcELW08P9D',
                'event_callback': callback
              });
              return false;
            }
          `
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}