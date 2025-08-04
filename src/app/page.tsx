"use client";

import React from "react";
import {
  Column,
  Row,
  Avatar,
  Text,
  Media,
  IconButton,
  Fade,
  Heading,
  OgCard,
  SmartLink,
} from "@once-ui-system/core";
import { content, social } from "@/resources";

interface LinkItem {
  title?: string;
  description?: string;
  media?: string;
  direction?: "row" | "column";
  url: string;
  favicon?: string | false;
  size?: "s" | "m" | "l";
}

export default function Home() {
  return (
    <Column fillWidth horizontal="center" padding="16">
      <Column maxWidth="m" aspectRatio="2/1" marginBottom="40" paddingY="24">
        {content.cover && (
          <Row fill position="absolute" left="0" top="0" radius="xl" overflow="hidden" border="neutral-alpha-weak">
            <Media sizes="(max-width: 768px) 100vw, 960px" priority fill src={content.cover} alt={content.name}/>
            <Fade fill position="absolute" to="top" bottom="0" left="0" pattern={{ display: true, size: "2" }}/>
          </Row>
        )}
        <Column fill center padding="l" gap="4" align="center">
          {content.avatar && (
            <Avatar src={content.avatar} size="xl" />
          )}
          {content.name && (
            <Heading variant="heading-strong-xl" marginTop={content.avatar ? "24" : undefined}>
              {content.name}
            </Heading>
          )}
          {content.bio && (
            <Text variant="body-default-l" onBackground="neutral-weak">
              {content.bio}
            </Text>
          )}
          {social?.length > 0 && (
            <Row gap="16" paddingX="l" paddingTop="24" horizontal="center" fillWidth wrap>
              {social.map((item: any, index: any) => (
                <IconButton
                  key={index}
                  href={item.link}
                  icon={item.icon}
                  variant="ghost"
                  size="m"
                  tooltipPosition="bottom"
                  tooltip={item.name}
                />
              ))}
            </Row>
          )}
        </Column>
      </Column>
      
      <Column maxWidth="s" gap="24">
        {content.links?.length > 0 && (
          <>
            {(content.links as LinkItem[]).map((link, index) => (
              <OgCard
                background="transparent"
                border="transparent"
                sizes="(max-width: 768px) 100vw, 768px"
                key={index}
                url={link.url}
                href={link.url}
                direction={link.direction}
                title={link.title}
                description={link.description}
                favicon={link.favicon}
                image={link.media}
                size={link.size || "m"}
              />
            ))}
          </>
        )}
        <Row fillWidth padding="l" horizontal="center" textVariant="label-default-s">
          <Text onBackground="neutral-weak">
            {new Date().getFullYear() + " "}
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            / Build your bio with{" "}
            <SmartLink
              href="https://once-ui.com/products/magic-bio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Row>
      </Column>
    </Column>
  );
}