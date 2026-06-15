
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
