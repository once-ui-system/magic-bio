import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { headers } from "next/headers";
import { Metadata } from "next";

import { baseURL, style, meta, og, schema, profiles, effects } from "@/once-ui/resources/config";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";

import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const metadataBase = host ? new URL(`https://${host}`) : undefined;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://" + baseURL,
      images: [
				{
					url: og.image,
					alt: og.title,
				},
			],
      type: og.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
    },
    twitter: {
			card: 'summary_large_image',
			title: og.title,
			description: og.description,
			images: [og.image],
		},
    metadataBase,
  };
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": schema.type,
  url: "https://" + baseURL,
  logo: schema.logo,
  name: schema.name,
  description: schema.description,
  email: schema.email,
  sameAs: Object.values(profiles).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="en"
      fillHeight
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-theme={style.theme}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        primary.variable,
        code.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <ToastProvider>
        <Column as="body" fillWidth  margin="0" padding="0">
        <Background
            position="fixed"
						mask={{
							cursor: effects.mask.cursor,
							x: effects.mask.x,
							y: effects.mask.y,
							radius: effects.mask.radius
						}}
						gradient={{
							display: effects.gradient.display,
							x: effects.gradient.x,
							y: effects.gradient.y,
							width: effects.gradient.width,
							height: effects.gradient.height,
							tilt: effects.gradient.tilt,
							colorStart: effects.gradient.colorStart,
							colorEnd: effects.gradient.colorEnd,
							opacity: effects.gradient.opacity as 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
						}}
						dots={{
							display: effects.dots.display,
							color: effects.dots.color,
							size: effects.dots.size as any,
							opacity: effects.dots.opacity as any
						}}
						grid={{
							display: effects.grid.display,
							color: effects.grid.color,
							width: effects.grid.width as any,
							height: effects.grid.height as any,
							opacity: effects.grid.opacity as any
						}}
						lines={{
							display: effects.lines.display,
							opacity: effects.lines.opacity as any
						}}/>
          {children}
        </Column>
      </ToastProvider>
    </Flex>
  );
}
